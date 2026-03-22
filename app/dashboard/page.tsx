'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

type RepurposedContent = {
  linkedin_post: string
  twitter_thread: string
  instagram_caption: string
  email_snippet: string
}

type Profile = {
  plan: string
  usage_count: number
}

const FREE_LIMIT = 5

const platforms = [
  {
    key: 'linkedin_post' as keyof RepurposedContent,
    label: 'LinkedIn',
    icon: '💼',
    color: 'blue',
    bg: 'bg-blue-600/10',
    border: 'border-blue-600/20',
    badge: 'text-blue-400',
    tip: 'Professional tone, hook + insights + CTA',
  },
  {
    key: 'twitter_thread' as keyof RepurposedContent,
    label: 'Twitter / X',
    icon: '𝕏',
    color: 'sky',
    bg: 'bg-sky-600/10',
    border: 'border-sky-600/20',
    badge: 'text-sky-400',
    tip: 'Numbered thread, punchy, under 280 chars each',
  },
  {
    key: 'instagram_caption' as keyof RepurposedContent,
    label: 'Instagram',
    icon: '📸',
    color: 'pink',
    bg: 'bg-pink-600/10',
    border: 'border-pink-600/20',
    badge: 'text-pink-400',
    tip: 'Conversational, emojis, hashtags included',
  },
  {
    key: 'email_snippet' as keyof RepurposedContent,
    label: 'Email',
    icon: '✉️',
    color: 'amber',
    bg: 'bg-amber-600/10',
    border: 'border-amber-600/20',
    badge: 'text-amber-400',
    tip: 'Newsletter-ready, personal tone, reply CTA',
  },
]

export default function DashboardPage() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<RepurposedContent | null>(null)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState<Profile | null>(null)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<keyof RepurposedContent>('linkedin_post')
  const [viewMode, setViewMode] = useState<'tabs' | 'grid'>('tabs')
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/auth/signin'); return }
      const { data } = await supabase
        .from('profiles')
        .select('plan, usage_count')
        .eq('id', user.id)
        .single()
      if (data) setProfile(data)
    }
    loadProfile()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const handleRepurpose = async () => {
    if (!input.trim()) return
    if (profile?.plan === 'free' && (profile?.usage_count ?? 0) >= FREE_LIMIT) {
      setError('You have reached the free limit of 5 repurposes. Upgrade to continue.')
      return
    }
    setLoading(true)
    setError('')
    setResult(null)
    try {
      const res = await fetch('/api/repurpose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong')
      } else {
        setResult(data)
        setProfile(prev => prev ? { ...prev, usage_count: prev.usage_count + 1 } : prev)
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const isAtLimit = profile?.plan === 'free' && (profile?.usage_count ?? 0) >= FREE_LIMIT
  const usagePercent = profile ? Math.min(((profile.usage_count) / FREE_LIMIT) * 100, 100) : 0

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f5]">

      {/* Header */}
      <header className="border-b border-white/10 px-6 py-3 bg-[#0a0a0f]/80 backdrop-blur sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              RepostAI
            </span>
            <nav className="hidden md:flex items-center gap-1">
              <span className="text-sm px-3 py-1.5 rounded-lg bg-white/5 text-white font-medium">Dashboard</span>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            {profile && (
              <div className="hidden sm:flex items-center gap-3">
                {profile.plan === 'free' && (
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${usagePercent >= 100 ? 'bg-red-500' : usagePercent >= 60 ? 'bg-amber-500' : 'bg-purple-500'}`}
                        style={{ width: `${usagePercent}%` }}
                      />
                    </div>
                    <span className="text-xs text-white/40">{profile.usage_count}/{FREE_LIMIT}</span>
                  </div>
                )}
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize border ${
                  profile.plan === 'pro'
                    ? 'bg-purple-600/20 border-purple-600/30 text-purple-300'
                    : profile.plan === 'starter'
                    ? 'bg-blue-600/20 border-blue-600/30 text-blue-300'
                    : 'bg-white/5 border-white/10 text-white/50'
                }`}>
                  {profile.plan}
                </span>
              </div>
            )}
            {profile?.plan === 'free' && (
              <button
                onClick={() => router.push('/#pricing')}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition"
              >
                Upgrade →
              </button>
            )}
            <button
              onClick={handleSignOut}
              className="text-white/30 hover:text-white/60 text-sm transition"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 items-start">

          {/* LEFT — Input panel */}
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">Repurpose content</h1>
              <p className="text-white/40 text-sm">Paste any text → get 4 platform-ready posts instantly</p>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden">
              <div className="px-5 pt-5 pb-3">
                <label className="block text-xs font-medium text-white/40 uppercase tracking-wider mb-3">
                  Your content
                </label>
                <textarea
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Paste your article, blog post, newsletter, or any text here...&#10;&#10;Minimum 50 characters. The more context you give, the better the output."
                  rows={12}
                  className="w-full bg-transparent text-white placeholder-white/20 resize-none focus:outline-none text-sm leading-relaxed"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-3 border-t border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <span className={`text-xs ${input.length < 50 ? 'text-white/20' : 'text-white/40'}`}>
                    {input.length} chars
                  </span>
                  {input.length > 0 && input.length < 50 && (
                    <span className="text-xs text-amber-400/70">{50 - input.length} more needed</span>
                  )}
                </div>
                <button
                  onClick={handleRepurpose}
                  disabled={loading || input.length < 50 || isAtLimit}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-xl font-medium transition flex items-center gap-2 text-sm"
                >
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>✨ Repurpose now</>
                  )}
                </button>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4">
              <p className="text-xs text-white/30 font-medium uppercase tracking-wider mb-3">Tips for best results</p>
              <ul className="space-y-2">
                {[
                  'Paste the full article, not just a summary',
                  'Blog posts, newsletters, and transcripts work great',
                  'Minimum 50 characters — more context = better output',
                ].map(tip => (
                  <li key={tip} className="flex items-start gap-2 text-xs text-white/40">
                    <span className="text-purple-400 mt-0.5">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage card for free plan */}
            {profile?.plan === 'free' && (
              <div className={`rounded-xl p-4 border ${isAtLimit ? 'bg-red-500/10 border-red-500/20' : 'bg-white/[0.03] border-white/10'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-white/50 font-medium">Monthly usage</span>
                  <span className={`text-xs font-bold ${isAtLimit ? 'text-red-400' : 'text-white/60'}`}>
                    {profile.usage_count} / {FREE_LIMIT}
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-3">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${isAtLimit ? 'bg-red-500' : usagePercent >= 60 ? 'bg-amber-500' : 'bg-purple-500'}`}
                    style={{ width: `${usagePercent}%` }}
                  />
                </div>
                {isAtLimit ? (
                  <button
                    onClick={() => router.push('/#pricing')}
                    className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg text-sm font-medium transition"
                  >
                    Upgrade for unlimited →
                  </button>
                ) : (
                  <p className="text-xs text-white/30">
                    {FREE_LIMIT - profile.usage_count} repurposes left this month
                  </p>
                )}
              </div>
            )}
          </div>

          {/* RIGHT — Output panel */}
          <div>
            {result ? (
              <div className="space-y-4">
                {/* View toggle + header */}
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-white/60">Generated content</h2>
                  <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('tabs')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${viewMode === 'tabs' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'}`}
                    >
                      Tabs
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition ${viewMode === 'grid' ? 'bg-white/10 text-white' : 'text-white/40 hover:text-white/60'}`}
                    >
                      All
                    </button>
                  </div>
                </div>

                {viewMode === 'tabs' ? (
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden">
                    {/* Tab nav */}
                    <div className="flex border-b border-white/10">
                      {platforms.map(p => (
                        <button
                          key={p.key}
                          onClick={() => setActiveTab(p.key)}
                          className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium transition ${
                            activeTab === p.key
                              ? `${p.badge} border-b-2 border-current bg-white/5`
                              : 'text-white/30 hover:text-white/60'
                          }`}
                        >
                          <span className="text-base">{p.icon}</span>
                          <span className="hidden sm:block">{p.label}</span>
                        </button>
                      ))}
                    </div>
                    {/* Tab content */}
                    {platforms.filter(p => p.key === activeTab).map(p => (
                      <div key={p.key} className="p-5">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`text-xs ${p.badge} bg-white/5 px-2.5 py-1 rounded-full`}>{p.tip}</span>
                          <button
                            onClick={() => copyToClipboard(result[p.key], p.key)}
                            className={`text-xs px-4 py-1.5 rounded-lg transition font-medium ${
                              copiedKey === p.key
                                ? 'bg-green-600/20 text-green-400 border border-green-600/20'
                                : 'bg-white/10 hover:bg-white/20 text-white/70'
                            }`}
                          >
                            {copiedKey === p.key ? '✓ Copied!' : 'Copy'}
                          </button>
                        </div>
                        <pre className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap font-sans min-h-[200px]">
                          {result[p.key]}
                        </pre>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {platforms.map(p => (
                      <div key={p.key} className={`${p.bg} border ${p.border} rounded-2xl overflow-hidden`}>
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <span>{p.icon}</span>
                            <span className={`text-xs font-semibold ${p.badge}`}>{p.label}</span>
                          </div>
                          <button
                            onClick={() => copyToClipboard(result[p.key], p.key)}
                            className={`text-xs px-3 py-1 rounded-lg transition font-medium ${
                              copiedKey === p.key
                                ? 'bg-green-600/20 text-green-400'
                                : 'bg-white/10 hover:bg-white/20 text-white/60'
                            }`}
                          >
                            {copiedKey === p.key ? '✓' : 'Copy'}
                          </button>
                        </div>
                        <div className="p-4 max-h-64 overflow-y-auto">
                          <pre className="text-white/75 text-xs leading-relaxed whitespace-pre-wrap font-sans">
                            {result[p.key]}
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[500px] gap-6">
                {loading ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-purple-600/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-6" />
                    <p className="text-white/60 text-lg font-medium">Generating your content...</p>
                    <p className="text-white/30 text-sm mt-2">This takes about 10 seconds</p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 gap-3 w-full max-w-sm opacity-30">
                      {platforms.map(p => (
                        <div key={p.key} className={`${p.bg} border ${p.border} rounded-xl p-4 text-center`}>
                          <div className="text-2xl mb-1">{p.icon}</div>
                          <div className={`text-xs font-medium ${p.badge}`}>{p.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="text-center">
                      <p className="text-white/30 text-sm">Paste your content and click Repurpose</p>
                      <p className="text-white/20 text-xs mt-1">Get LinkedIn, Twitter, Instagram & Email in one click</p>
                    </div>
                  </>
                )}
              </div>
            )}

            {error && (
              <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4 text-red-300 text-sm">
                {error}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
