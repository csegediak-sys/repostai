export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-purple-400 hover:text-purple-300 text-sm mb-8 block">← Back to RepostAI</a>
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-white/70 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What we collect</h2>
            <p>We collect your email address when you create an account. We store the content you submit for repurposing to provide the service and maintain your history. We do not sell your data to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How we use your data</h2>
            <p>Your email is used to authenticate your account and send essential service communications. Your content is processed by the Anthropic Claude API to generate repurposed versions — Anthropic's privacy policy applies to this processing.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data storage</h2>
            <p>Your data is stored securely on Supabase infrastructure. Payment data is handled entirely by Lemon Squeezy — we never store credit card information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your rights</h2>
            <p>You can delete your account at any time. To request data deletion, contact us at privacy@repostai.app.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
            <p>We use only essential cookies required for authentication. No tracking or advertising cookies.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>Questions? Email us at privacy@repostai.app</p>
          </section>
        </div>
      </div>
    </div>
  )
}
