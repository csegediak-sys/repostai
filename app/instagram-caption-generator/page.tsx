import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Instagram Caption Generator — AI-Powered | RepostAI',
  description: 'Generate engaging Instagram captions from any article or blog post in seconds. Free AI caption generator with hashtags — no credit card required. Turn your content into captions that grow your followers.',
  keywords: 'instagram caption generator, instagram caption generator free, AI instagram caption generator, instagram caption creator, generate instagram captions, caption generator with hashtags',
  alternates: { canonical: '/instagram-caption-generator' },
  openGraph: {
    title: 'Free Instagram Caption Generator — AI-Powered | RepostAI',
    description: 'Turn any article into an Instagram caption with hashtags in 30 seconds. Free, no sign-up required to try.',
    url: 'https://repostai.netlify.app/instagram-caption-generator',
    siteName: 'RepostAI',
    type: 'website',
  },
}

const examples = [
  {
    input: 'Article about the benefits of drinking water first thing in the morning...',
    output: `Your morning routine is making or breaking your day — and it starts before coffee ☕

Here's what happened when I started drinking 500ml of water immediately after waking up:

Week 1: Less brain fog in the morning
Week 2: Stopped needing 2 coffees to function
Week 4: Energy levels noticeably more stable all day

Your body loses water overnight. That sluggish feeling when you wake up? That's mild dehydration.

The fix costs $0 and takes 2 minutes.

Try it for 7 days and tell me if you notice a difference 👇

#morningroutine #healthyhabits #productivity #wellness #hydration #selfimprovement #morningtips #healthylifestyle #habitbuilding #wellnessjourney`,
  },
]

const faqs = [
  {
    q: 'Is the Instagram caption generator free?',
    a: 'Yes. You get 5 free Instagram captions per month with no credit card required. Paid plans start at $19/month for unlimited captions.',
  },
  {
    q: 'Does it generate hashtags too?',
    a: 'Yes. The AI automatically adds relevant hashtags at the end of each caption — typically 10-15 hashtags targeting your niche.',
  },
  {
    q: 'What content can I turn into Instagram captions?',
    a: 'Blog posts, articles, product descriptions, YouTube scripts, or any text. The AI rewrites the key idea in a conversational, Instagram-friendly tone.',
  },
  {
    q: 'What caption length does it generate?',
    a: 'Medium length — typically 150-300 words, which research shows performs best for Instagram engagement. Not too short to add value, not too long to lose readers.',
  },
  {
    q: 'Can I generate captions for other platforms too?',
    a: 'Yes. RepostAI generates Instagram captions, LinkedIn posts, Twitter/X threads, and email newsletters all at once from the same input.',
  },
]

export default function InstagramCaptionGeneratorPage() {
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
          <div className="inline-flex items-center gap-2 bg-pink-600/10 border border-pink-600/20 rounded-full px-4 py-2 text-sm text-pink-400 mb-6">
            <span>📸</span>
            <span>Instagram Caption Generator</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Turn Any Article into an<br />
            <span className="text-pink-400">Instagram Caption</span> + Hashtags
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Paste any blog post or idea. Our AI writes an Instagram caption with the perfect tone, line breaks, and niche hashtags — free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Generate Captions Free
            </Link>
            <Link
              href="/"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              See All Features
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">5 free captions/month · No credit card required</p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">How to Generate Instagram Captions with AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Paste your content', desc: 'Copy any article, blog post, or idea into RepostAI. Works with any text.' },
              { step: '2', title: 'Click Generate', desc: 'The AI rewrites the key idea in an Instagram-friendly tone with emojis, line breaks, and a CTA.' },
              { step: '3', title: 'Copy caption + hashtags', desc: 'Copy the full caption including hashtags directly into Instagram. Done.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-pink-600/20 text-pink-400 font-bold text-lg flex items-center justify-center mx-auto mb-4">
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
          <p className="text-center text-gray-400 mb-12">Real example of an AI-generated Instagram caption</p>
          {examples.map((ex, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Input — Your Article</div>
                <p className="text-gray-400 italic">"{ex.input}"</p>
              </div>
              <div className="bg-pink-600/10 border border-pink-600/20 rounded-2xl p-6">
                <div className="text-xs text-pink-400 uppercase tracking-wider mb-3">Output — Instagram Caption</div>
                <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">{ex.output}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Use Our Instagram Caption Generator</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '📸', title: 'Instagram-native tone', desc: 'Conversational, emoji-friendly, with line breaks for readability in the feed. Exactly how top accounts write.' },
              { icon: '#️⃣', title: 'Auto hashtags included', desc: '10-15 niche-relevant hashtags automatically added. No more spending 10 minutes researching hashtags.' },
              { icon: '⚡', title: '30-second generation', desc: 'Paste your content, click Generate. Your caption with hashtags is ready before you pick your photo filter.' },
              { icon: '🔄', title: 'Works with any content', desc: 'Blog posts, articles, product info, quotes, YouTube videos — any text becomes a polished caption.' },
              { icon: '📱', title: 'All 4 platforms at once', desc: 'Instagram + LinkedIn + Twitter + Email newsletter all generated simultaneously from one input.' },
              { icon: '🆓', title: 'Free to start', desc: '5 captions per month free forever. No credit card required. Takes 30 seconds to sign up.' },
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
      <section className="px-6 py-20 text-center bg-pink-600/10 border-y border-pink-600/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Start Generating Instagram Captions for Free</h2>
          <p className="text-gray-400 mb-8">Never stare at a blank caption box again. 5 free captions every month, hashtags included, no credit card required.</p>
          <Link
            href="/auth/signup"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors inline-block"
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
            <Link href="/linkedin-post-generator" className="hover:text-white transition-colors">LinkedIn Generator</Link>
            <Link href="/twitter-thread-generator" className="hover:text-white transition-colors">Twitter Generator</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
