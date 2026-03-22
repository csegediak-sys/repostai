import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Free Twitter Thread Generator — AI-Powered | RepostAI',
  description: 'Generate viral Twitter/X threads from any article or blog post in seconds. Free AI thread generator — no credit card required. Turn long-form content into threads that grow your following.',
  keywords: 'twitter thread generator, twitter thread generator free, AI twitter thread generator, X thread generator, generate twitter threads from article, thread creator',
  alternates: { canonical: '/twitter-thread-generator' },
  openGraph: {
    title: 'Free Twitter Thread Generator — AI-Powered | RepostAI',
    description: 'Turn any article into a Twitter/X thread in 30 seconds. Free, no sign-up required to try.',
    url: 'https://repostai.netlify.app/twitter-thread-generator',
    siteName: 'RepostAI',
    type: 'website',
  },
}

const examples = [
  {
    input: 'Blog post about the top 5 productivity mistakes people make working from home...',
    output: `1/ I worked from home for 3 years and made every productivity mistake in the book.

Here are the 5 that cost me the most time (and how I fixed them):

🧵 Thread

2/ Mistake #1: No separation between work and life

I worked from the same spot I relaxed. My brain never switched off.

Fix: Dedicated workspace. When you close the laptop and leave, work is done.

3/ Mistake #2: Slack notifications every 5 minutes

Constant interruptions = zero deep work.

Fix: Notifications off. 2 scheduled check-ins per day. That's it.

4/ Mistake #3: Working in pajamas

Sounds like a perk. It's actually a trap.

Getting dressed signals your brain it's time to focus.

5/ Mistake #4: No real lunch break

I'd eat at my desk and call it a break.

Real breaks away from screens 2x your afternoon energy.

6/ Mistake #5: No end-of-day ritual

Without a commute, the workday never ends.

I now do a 10-min walk at 6pm. Non-negotiable.

7/ The uncomfortable truth:

Working from home requires MORE discipline than an office, not less.

The freedom is the trap.

Follow me for more WFH productivity tips → @username`,
  },
]

const faqs = [
  {
    q: 'Is the Twitter thread generator free?',
    a: 'Yes. You get 5 free Twitter/X threads per month with no credit card required. Paid plans start at $19/month for unlimited threads.',
  },
  {
    q: 'Does the AI follow Twitter character limits?',
    a: 'Yes. Each tweet in the generated thread is kept under 280 characters. The AI also formats with numbered tweets (1/, 2/, etc.) for easy reading.',
  },
  {
    q: 'What content can I turn into Twitter threads?',
    a: 'Blog posts, articles, YouTube scripts, newsletters, podcast notes, whitepapers, or any long-form text. The AI extracts the key ideas and structures them as a thread.',
  },
  {
    q: 'How many tweets per thread does it generate?',
    a: 'Typically 7-12 tweets depending on the length of your input. The AI finds the natural breakpoints in your content.',
  },
  {
    q: 'Can I generate threads for LinkedIn too?',
    a: 'Yes. RepostAI generates Twitter threads, LinkedIn posts, Instagram captions, and email newsletters all at once from the same input.',
  },
]

export default function TwitterThreadGeneratorPage() {
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
          <div className="inline-flex items-center gap-2 bg-sky-600/10 border border-sky-600/20 rounded-full px-4 py-2 text-sm text-sky-400 mb-6">
            <span>𝕏</span>
            <span>Twitter/X Thread Generator</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Turn Any Article into a<br />
            <span className="text-sky-400">Viral Thread</span> in 30 Seconds
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Paste any blog post, newsletter, or idea. Our AI writes a Twitter/X thread with numbered tweets, hooks, and CTAs that grow your following — for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              Generate Threads Free
            </Link>
            <Link
              href="/"
              className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              See All Features
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">5 free threads/month · No credit card required</p>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">How to Generate Twitter Threads with AI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Paste your content', desc: 'Copy any article, blog post, or rough idea. Works with any text — minimum 50 characters.' },
              { step: '2', title: 'Click Generate', desc: 'The AI breaks your content into numbered tweets, each under 280 characters, with a hook and CTA.' },
              { step: '3', title: 'Copy & post thread', desc: 'Copy each tweet and post as a thread on Twitter/X, or use a scheduling tool like Buffer.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-sky-600/20 text-sky-400 font-bold text-lg flex items-center justify-center mx-auto mb-4">
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
          <p className="text-center text-gray-400 mb-12">Real example of an AI-generated Twitter thread</p>
          {examples.map((ex, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Input — Your Article</div>
                <p className="text-gray-400 italic">"{ex.input}"</p>
              </div>
              <div className="bg-sky-600/10 border border-sky-600/20 rounded-2xl p-6">
                <div className="text-xs text-sky-400 uppercase tracking-wider mb-3">Output — Twitter Thread</div>
                <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans leading-relaxed">{ex.output}</pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Use Our Twitter Thread Generator</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🧵', title: 'Thread-optimized format', desc: 'Numbered tweets (1/, 2/…), 280-char limit respected, hook tweet, and a follow CTA at the end.' },
              { icon: '⚡', title: '30-second generation', desc: 'No back-and-forth prompting. One paste, one click, one thread ready to post.' },
              { icon: '📈', title: 'Designed for growth', desc: 'The AI writes hooks that stop the scroll and endings that drive follows, retweets, and replies.' },
              { icon: '🔄', title: 'Any content type', desc: 'Blog posts, newsletters, YouTube transcripts, whitepapers, meeting notes — everything becomes a thread.' },
              { icon: '📱', title: 'All platforms at once', desc: 'Generate Twitter thread + LinkedIn post + Instagram caption + email simultaneously.' },
              { icon: '🆓', title: 'Free to start', desc: '5 threads per month free forever. No credit card. Sign up in 30 seconds.' },
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
      <section className="px-6 py-20 text-center bg-sky-600/10 border-y border-sky-600/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Start Generating Twitter Threads for Free</h2>
          <p className="text-gray-400 mb-8">Turn your best content into threads that grow your audience. 5 free threads every month, no credit card required.</p>
          <Link
            href="/auth/signup"
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-colors inline-block"
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
            <Link href="/instagram-caption-generator" className="hover:text-white transition-colors">Instagram Generator</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
