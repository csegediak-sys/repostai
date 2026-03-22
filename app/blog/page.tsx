import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — RepostAI | Content Repurposing Tips & Strategies',
  description: 'Learn how to repurpose content faster, grow on multiple platforms, and save hours every week with AI-powered content strategies.',
}

const posts = [
  {
    slug: 'how-to-repurpose-blog-post',
    title: 'How to Repurpose One Blog Post into 10 Pieces of Content',
    description: 'Stop writing from scratch every day. Learn the exact system to turn one article into LinkedIn posts, Twitter threads, email newsletters, and more.',
    date: 'March 22, 2026',
    readTime: '6 min read',
    tag: 'Strategy',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            RepostAI
          </Link>
          <Link href="/auth/signup" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            Try free
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-white/50 mb-12 text-lg">Content repurposing tips, AI strategies, and growth insights.</p>

        <div className="space-y-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">{post.tag}</span>
                  <span className="text-white/30 text-sm">{post.date}</span>
                  <span className="text-white/30 text-sm">· {post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-purple-300 transition">{post.title}</h2>
                <p className="text-white/50 leading-relaxed">{post.description}</p>
                <div className="mt-4 text-purple-400 text-sm font-medium">Read article →</div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
