import Link from 'next/link'

const features = [
  { icon: '💼', title: 'LinkedIn Posts', desc: 'Professional, engagement-optimized posts with hooks that convert' },
  { icon: '🐦', title: 'Twitter Threads', desc: 'Multi-tweet threads formatted perfectly for maximum reach' },
  { icon: '📸', title: 'Instagram Captions', desc: 'Captions with emojis and hashtags ready to copy-paste' },
  { icon: '📧', title: 'Email Snippets', desc: 'Newsletter-ready snippets your subscribers will love' },
]

const steps = [
  { step: '01', title: 'Paste your content', desc: 'Drop in a URL or paste your article text' },
  { step: '02', title: 'AI does the work', desc: 'Our AI repurposes it for all 4 platforms instantly' },
  { step: '03', title: 'Copy & publish', desc: 'Copy each version and post. Done in under 30 seconds.' },
]

const testimonials = [
  { name: 'Sarah K.', role: 'Marketing Manager', text: 'I used to spend 3 hours repurposing one blog post. Now it takes 30 seconds. Game changer.' },
  { name: 'Marcus T.', role: 'Solopreneur', text: 'RepostAI is the tool I needed. My content output tripled in week one.' },
  { name: 'Priya M.', role: 'Content Creator', text: 'Finally a tool that actually understands each platform. The LinkedIn posts are fire.' },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">RepostAI</span>
          <div className="flex items-center gap-4">
            <Link href="#pricing" className="text-white/60 hover:text-white text-sm transition">Pricing</Link>
            <Link href="/auth/signin" className="text-white/60 hover:text-white text-sm transition">Sign in</Link>
            <Link href="/auth/signup" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              Get started free
            </Link>
          </div>
        </div>
      </nav>

      <section className="px-6 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 text-purple-300 text-sm mb-8">
            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
            No more manual repurposing
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            One article.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Four platforms.
            </span>{" "}
            30 seconds.
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            RepostAI transforms your articles into ready-to-publish LinkedIn posts, Twitter threads, Instagram captions, and email snippets instantly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/signup" className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition w-full sm:w-auto">
              Start for free
            </Link>
            <Link href="#how-it-works" className="text-white/60 hover:text-white px-8 py-4 text-lg transition">
              See how it works
            </Link>
          </div>
          <p className="text-white/30 text-sm mt-4">No credit card required</p>
        </div>
      </section>

      <section className="px-6 py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Everything you need to dominate every platform</h2>
          <p className="text-white/50 text-center mb-16">Platform-native content that actually performs</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How it works</h2>
          <div className="space-y-12">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="flex gap-8 items-start">
                <div className="text-4xl font-bold text-purple-500/30 w-16 shrink-0">{step}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Loved by content creators</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text }) => (
              <div key={name} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-white/70 mb-6 leading-relaxed">{text}</p>
                <div className="font-semibold">{name}</div>
                <div className="text-white/40 text-sm">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, honest pricing</h2>
          <p className="text-white/50 text-center mb-16">Start free, upgrade when you need more</p>
          <div className="grid md:grid-cols-3 gap-6">
            {([
              { name: 'Free', price: '$0', features: ['5 repurposes/month', 'All 4 platforms', 'Basic support'], cta: 'Get started', href: '/auth/signup', highlighted: false },
              { name: 'Starter', price: '$19', features: ['Unlimited repurposes', 'All 4 platforms', 'History saved', 'Priority support'], cta: 'Start Starter', href: '/auth/signup?plan=starter', highlighted: true },
              { name: 'Pro', price: '$39', features: ['Everything in Starter', 'Custom tone/voice', 'API access', 'Priority support'], cta: 'Start Pro', href: '/auth/signup?plan=pro', highlighted: false },
            ] as const).map(({ name, price, features, cta, href, highlighted }) => (
              <div key={name} className={`rounded-2xl p-8 border relative ${highlighted ? 'bg-purple-600/20 border-purple-500/50' : 'bg-white/5 border-white/10'}`}>
                {highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Most popular
                  </div>
                )}
                <div className="font-semibold text-lg mb-2">{name}</div>
                <div className="text-4xl font-bold mb-6">{price}<span className="text-lg text-white/50 font-normal">/mo</span></div>
                <ul className="space-y-3 mb-8">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <span className="text-purple-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href={href} className={`block text-center py-3 rounded-xl font-medium transition ${highlighted ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'border border-white/20 hover:border-white/40 text-white'}`}>
                  {cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to 10x your content output?</h2>
          <p className="text-white/50 mb-8">Join creators saving hours every week.</p>
          <Link href="/auth/signup" className="inline-block bg-purple-600 hover:bg-purple-500 text-white px-10 py-4 rounded-xl text-lg font-semibold transition">
            Start for free today
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">RepostAI</span>
          <p className="text-white/30 text-sm">2026 RepostAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
