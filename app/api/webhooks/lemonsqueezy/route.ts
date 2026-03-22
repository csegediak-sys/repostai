import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

function verifyWebhook(payload: string, signature: string, secret: string): boolean {
  const hmac = crypto.createHmac('sha256', secret)
  const digest = hmac.update(payload).digest('hex')
  return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest))
}

export async function POST(request: NextRequest) {
  const payload = await request.text()
  const signature = request.headers.get('x-signature') || ''

  if (!verifyWebhook(payload, signature, process.env.LEMONSQUEEZY_WEBHOOK_SECRET!)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const event = JSON.parse(payload)
  const eventName = event.meta?.event_name
  const data = event.data?.attributes

  if (!data) return NextResponse.json({ ok: true })

  const customerEmail = data.user_email
  const customerId = String(data.customer_id)
  const subscriptionId = String(event.data?.id)

  // Find user by email
  const { data: profiles } = await supabaseAdmin
    .from('profiles')
    .select('id')
    .eq('email', customerEmail)
    .limit(1)

  const userId = profiles?.[0]?.id
  if (!userId) return NextResponse.json({ ok: true })

  const variantName = data.variant_name?.toLowerCase() || ''
  const plan = variantName.includes('pro') ? 'pro' : 'starter'

  switch (eventName) {
    case 'subscription_created':
    case 'subscription_updated':
      await supabaseAdmin.from('profiles').update({
        plan,
        lemon_squeezy_customer_id: customerId,
        lemon_squeezy_subscription_id: subscriptionId,
      }).eq('id', userId)
      break

    case 'subscription_cancelled':
    case 'subscription_expired':
      await supabaseAdmin.from('profiles').update({
        plan: 'free',
        lemon_squeezy_subscription_id: null,
      }).eq('id', userId)
      break
  }

  return NextResponse.json({ ok: true })
}
