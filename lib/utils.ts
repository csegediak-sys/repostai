import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PLANS = {
  free: {
    name: 'Free',
    price: 0,
    limit: 5,
    features: ['5 repurposes/month', 'All 4 platforms', 'Basic support'],
  },
  starter: {
    name: 'Starter',
    price: 19,
    limit: -1,
    features: ['Unlimited repurposes', 'All 4 platforms', 'Priority support', 'History saved'],
    variantId: '',
  },
  pro: {
    name: 'Pro',
    price: 39,
    limit: -1,
    features: ['Unlimited repurposes', 'All 4 platforms', 'Custom tone/voice', 'API access', 'Priority support', 'History saved'],
    variantId: '',
  },
}
