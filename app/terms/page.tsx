export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 block">← Back to RepostAI</a>
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: March 2026</p>

        <div className="space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Service</h2>
            <p>RepostAI provides an AI-powered content repurposing service. By using our service you agree to these terms. We reserve the right to modify the service at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Your content</h2>
            <p>You retain full ownership of the content you submit and the content we generate for you. You are responsible for ensuring you have the rights to any content you submit.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. Acceptable use</h2>
            <p>Do not use RepostAI to generate spam, misinformation, or content that violates any laws. Accounts found violating this policy will be terminated without refund.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Subscriptions & billing</h2>
            <p>Paid plans are billed monthly via Lemon Squeezy. You can cancel at any time — access continues until the end of the billing period. No refunds for partial months.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Limitation of liability</h2>
            <p>RepostAI is provided &quot;as is&quot;. We are not liable for any damages arising from the use of our service. The AI-generated content may not always be perfect — always review before publishing.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Contact</h2>
            <p>Questions? Email us at hello@repostai.app</p>
          </section>
        </div>
      </div>
    </div>
  )
}
