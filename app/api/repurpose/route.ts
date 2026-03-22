import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@/lib/supabase/server'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const FREE_LIMIT = 5

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { text } = await request.json()

    if (!text || text.trim().length < 50) {
      return NextResponse.json({ error: 'Content must be at least 50 characters' }, { status: 400 })
    }

    // Check usage
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan, usage_count, usage_reset_at')
      .eq('id', user.id)
      .single()

    if (!profile) {
      return NextResponse.json({ error: 'Profile not found' }, { status: 404 })
    }

    // Reset usage if new month
    const now = new Date()
    const resetAt = new Date(profile.usage_reset_at)
    if (now > resetAt) {
      await supabase
        .from('profiles')
        .update({
          usage_count: 0,
          usage_reset_at: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1).toISOString(),
        })
        .eq('id', user.id)
      profile.usage_count = 0
    }

    if (profile.plan === 'free' && profile.usage_count >= FREE_LIMIT) {
      return NextResponse.json({ error: 'Free limit reached. Please upgrade your plan.' }, { status: 429 })
    }

    // Generate content with Claude
    const prompt = `You are a social media content expert. Transform the following article/text into platform-optimized content for 4 platforms.

INPUT TEXT:
${text.slice(0, 3000)}

Generate exactly this JSON structure (no markdown, just raw JSON):
{
  "linkedin_post": "A professional LinkedIn post (150-300 words). Start with a strong hook. Use line breaks for readability. End with a question or CTA. Include relevant emojis sparingly.",
  "twitter_thread": "A Twitter thread with 5-7 tweets. Format as: '1/ [tweet]\\n\\n2/ [tweet]\\n\\n3/ [tweet]' etc. Each tweet max 280 chars. Start with a hook tweet.",
  "instagram_caption": "An Instagram caption (100-200 words). Conversational tone. Include 15-20 relevant hashtags at the end separated by spaces. Use emojis naturally.",
  "email_snippet": "An email newsletter snippet. Include: Subject line (format: 'Subject: [line]'), Preview text, and Body (2-3 paragraphs). Professional but engaging tone."
}

IMPORTANT: Return ONLY valid JSON. No explanation. No markdown code blocks.`

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    })

    const rawContent = message.content[0].type === 'text' ? message.content[0].text : ''

    let parsed
    try {
      parsed = JSON.parse(rawContent)
    } catch {
      // Try to extract JSON from response
      const match = rawContent.match(/\{[\s\S]*\}/)
      if (match) {
        parsed = JSON.parse(match[0])
      } else {
        throw new Error('Failed to parse AI response')
      }
    }

    // Save to history and increment usage
    await Promise.all([
      supabase.from('repurposes').insert({
        user_id: user.id,
        input_text: text.slice(0, 500),
        linkedin_post: parsed.linkedin_post,
        twitter_thread: parsed.twitter_thread,
        instagram_caption: parsed.instagram_caption,
        email_snippet: parsed.email_snippet,
      }),
      supabase.from('profiles').update({ usage_count: profile.usage_count + 1 }).eq('id', user.id),
    ])

    return NextResponse.json(parsed)
  } catch (error) {
    console.error('Repurpose error:', error)
    return NextResponse.json({ error: 'Failed to generate content. Please try again.' }, { status: 500 })
  }
}
