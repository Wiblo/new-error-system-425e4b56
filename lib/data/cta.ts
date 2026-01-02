export interface CTAContent {
  title: string
  description: string
  ctaText: string
  ctaUrl: string
  backgroundImage: string
  backgroundImageAlt: string
}

/**
 * CTA (Call-to-Action) section content
 * Update this to modify the CTA section shown on the homepage
 */
export const ctaContent: CTAContent = {
  title: 'Craving Something Sweet?',
  description:
    'Visit us today or place an order for pickup. Fresh cheesecakes, banana bread, and sweetie muffins are waiting for you. Taste the difference that homemade quality makes.',
  ctaText: 'Order Now',
  ctaUrl: 'https://rebeccacurriesbakery.com/order',
  backgroundImage: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1600&q=80',
  backgroundImageAlt: 'Beautiful display of fresh baked goods and desserts',
}
