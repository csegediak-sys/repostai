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

export default function DashboardPage() {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<RepurposedContent | null>(null)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState<Profile | null>(null)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<keyof RepurposedContent>('linkedin_post')
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

  const tabs: { key: keyof RepurposedContent; label: string; icon: string }[] = [
    { key: 'linkedin_post', label: 'LinkedIn', icon: '💼' },
    { key: 'twitter_thread', label: 'Twitter/X', icon: '🐦' },
    { key: 'instagram_caption', label: 'Instagram', icon: '📸' },
    { key: 'email_snippet', label: 'Email', icon: '📧' },
  ]

  const isAtLimit = profile?.plan === 'free' && (profile?.usage_count ?? 0) >= FREE_LIMIT

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            RepostAI
          </span>
          <div className="flex items-center gap-4">
            {profile && (
              <div className="flex items-center gap-2 text-sm text-white/50">
                <span className="capitalize bg-white/5 border border-white/10 px-3 py-1 rounded-full text-white/70">
                  {profile.plan}
                </span>
                {profile.plan === 'free' && (
                  <span>{profile.usage_count}/{FREE_LIMIT} used</span>
                )}
              </div>
            )}
            {profile?.plan === 'free' && (
              <button
                onClick={() => router.push('/#pricing')}
                className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition"
              >
                Upgrade
              </button>
            )}
            <button
              onClick={handleSignOut}
              className="text-white/40 hover:text-white text-sm transition"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Repurpose your content</h1>
          <p className="text-white/50">Paste your article or text below and get platform-ready content instantly.</p>
        </div>

        {/* Input */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
          <label className="block text-sm font-medium text-white/60 mb-3">
            Your content (article, blog post, or any text)
          </label>
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Paste your article or text here... (minimum 50 characters)"
            rows={8}
            className="w-full bg-transparent text-white placeholder-white/20 resize-none focus:outline-none text-sm leading-relaxed"
          />
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
            <span className="text-white/30 text-xs">{input.length} characters</span>
            <button
              onClick={handleRepurpose}
              disabled={loading || input.length < 50 || isAtLimit}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-40 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-xl font-medium transition flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Repurposing...
                </>
              ) : (
                'Repurpose now'
              )}
            </button>
          </div>
        </div>

        {isAtLimit && (
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl px-6 py-4 mb-6 flex items-center justify-between">
            <p className="text-orange-300 text-sm">You have used all 5 free repurposes this month.</p>
            <button onClick={() => router.push('/#pricing')} className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              Upgrade now
            </button>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-6 py-4 mb-6 text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/10">
              {tabs.map(({ key, label, icon }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition ${
                    activeTab === key
                      ? 'text-white border-b-2 border-purple-500 bg-white/5'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  <span>{icon}</span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <pre className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap flex-1 font-sans">
                  {result[activeTab]}
                </pre>
                <button
                  onClick={() => copyToClipboard(result[activeTab], activeTab)}
                  className="shrink-0 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  {copiedKey === activeTab ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        )}

        {!result && !loading && (
          <div className="text-center py-16 text-white/20">
            <div className="text-5xl mb-4">✨</div>
            <p>Your repurposed content will appear here</p>
          </div>
        )}
      </main>
    </div>
  )
}
