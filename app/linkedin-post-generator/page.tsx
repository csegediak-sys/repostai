import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free LinkedIn Post Generator — AI-Powered | RepostAI',
  description: 'Generate engaging LinkedIn posts from any article or blog post in seconds. Free AI LinkedIn post generator — no credit card required. Turn your content into posts that get likes and comments.',
  keywords: 'linkedin post generator, linkedin post generator free, AI linkedin post generator, linkedin post creator, generate linkedin posts from article',
  alternates: { canonical: '/linkedin-post-generator' },
  openGraph: {
    title: 'Free LinkedIn Post Generator — AI-Powered | RepostAI',
    description: 'Turn any article into a LinkedIn post in 30 seconds. Free, no sign-up required to try.',
    url: 'https://repostai.netlify.app/linkedin-post-generator',
    siteName: 'RepostAI',
    type: 'website',
  },
}

const examples = [
  {
    input: 'I wrote a blog post about how to wake up at 5am and be more productive...',
    output: `🌅 I used to hit snooze 7 times every morning.

Now I wake up at 5am — and it changed my career.

Here's what nobody tells you about early mornings:

→ The first 30 minutes are the hardest
→ After 21 days, it becomes automatic
→ The silence before the world wakes up is worth everything

What I do with those 2 hours:
• Deep work on my most important project
• Reading (not scrolling)
• Planning the day before chaos hits

The results after 90 days:
✅ Shipped 3 major projects
✅ Read 8 books
✅ Revenue up 40%

You don't need more time. You need better mornings.

Who else is in the 5am club? 👇`,
  },
]

const faqs = [
  {
    q: 'Is the LinkedIn post generator free?',
    a: 'Yes. You get 5 free LinkedIn posts per month with no credit card required. Paid plans start at $19/month for unlimited posts.',
  },
  {
    q: 'What type of content can I turn into LinkedIn posts?',
    a: 'Any text — blog articles, podcast transcripts, YouTube scripts, meeting notes, newsletters, or even rough ideas. Paste the text and get a ready-to-post LinkedIn post.',
  },
  {
    q: 'Does the AI write in my voice?',
    a: 'The AI analyzes the tone and key ideas of your input and writes a LinkedIn-optimized post. Pro plan users can set a custom tone and style for consistent brand voice.',
  },
  {
    q: 'How long does it take to generate a LinkedIn post?',
    a: 'Under 30 seconds. Paste your content, click Generate, and your LinkedIn post is ready to copy and publish.',
  },
  {
    q: 'Can I generate posts for other platforms too?',
    a: 'Yes. RepostAI generates LinkedIn posts, Twitter/X threads, Instagram captions, and email newsletters all at once from the same input.',
  },
]

export default function LinkedInPostGeneratorPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f5]">
      {/* Nav */}
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">RepostAI</Link>
          <div className="flex items-center gap-4">
            <Link href="/auth/signin" className="text-sm text-gray-400 hover:text-white transition-colors">Sign in</Link>
            <Link href="/auth/signup" className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Try Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-4 py-2 text-sm text-blue-400 mb-6">
            <span>💼</span>
            <span>LinkedIn Post Generator</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Turn Any Article into a<br />
            <span className="text-blue-400">LinkedIn Post</span> in 30 Seconds
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Paste any blog post, article, or idea. Our AI writes a LinkedIn post with hooks, formatting, and CTAs that drive engagement — for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Generate LinkedIn Posts Free
            </Link>
            <Link
              href="/"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              See All Features
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">5 free posts/month · No credit card required</p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">How to Generate LinkedIn Posts with AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Paste your content', desc: 'Copy any article, blog post, or rough idea into RepostAI. Minimum 50 characters.' },
              { step: '2', title: 'Click Generate', desc: 'Our AI reads the content and writes a LinkedIn post with a strong hook, structured body, and CTA.' },
              { step: '3', title: 'Copy & publish', desc: 'Copy the generated post directly to LinkedIn. Edit if needed, or post as-is.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 text-blue-400 font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">See It in Action</h2>
          <p className="text-center text-gray-400 mb-12">Real example of AI-generated LinkedIn post</p>
          {examples.map((ex, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Input — Your Article</div>
                <p className="text-gray-400 italic">"{ex.input}"</p>
              </div>
              <div className="bg-blue-600/10 border border-blue-600/20 rounded-2xl p-6">
                <div className="text-xs text-blue-400 uppercase tracking-wider mb-3">Output — LinkedIn Post</div>
                <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">{ex.output}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Makes Our LinkedIn Post Generator Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🎯', title: 'LinkedIn-optimized format', desc: 'Short punchy hook, line breaks, bullet points, and a question at the end — exactly what the LinkedIn algorithm rewards.' },
              { icon: '⚡', title: '30-second generation', desc: 'No waiting, no 10-step setup. Paste and generate. Your post is ready before your coffee gets cold.' },
              { icon: '📊', title: 'Engagement-first writing', desc: 'The AI writes posts designed to get comments, not just likes. Hooks that stop the scroll, CTAs that invite conversation.' },
              { icon: '🔄', title: 'Repurpose everything', desc: 'Blog posts, podcast notes, webinar transcripts, internal docs — any text becomes a LinkedIn post.' },
              { icon: '📱', title: 'All 4 platforms at once', desc: 'Generate LinkedIn, Twitter/X, Instagram, and email newsletter from the same content simultaneously.' },
              { icon: '🆓', title: 'Free to start', desc: '5 LinkedIn posts per month free forever. No credit card needed to try it today.' },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 p-5 bg-white/[0.03] rounded-xl border border-white/10">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{f.title}</h3>
                  <p className="text-gray-400 text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-white/10 rounded-xl p-6">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center bg-blue-600/10 border-y border-blue-600/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Start Generating LinkedIn Posts for Free</h2>
          <p className="text-gray-400 mb-8">Join thousands of creators who repurpose their content with AI. 5 free posts every month, no credit card required.</p>
          <Link
            href="/auth/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors inline-block"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2026 RepostAI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/twitter-thread-generator" className="hover:text-white transition-colors">Twitter Generator</Link>
            <Link href="/instagram-caption-generator" className="hover:text-white transition-colors">Instagram Generator</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
