export interface FeatureBlock {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

/**
 * Features section content
 * Highlighting key features, benefits, or unique aspects of the bakery
 */
export const featureBlocks: FeatureBlock[] = [
  {
    id: 'feature-1',
    title: 'Baked Fresh Daily',
    description:
      'Every morning, we start before sunrise to ensure all our baked goods are fresh from the oven. From our signature cheesecakes to our sweetie muffins, nothing sits overnight. When you visit Rebecca Currie\'s Bakery, you\'re getting treats made that very day with care and attention to every detail.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    imageAlt: 'Baker preparing fresh dough in the morning',
    imagePosition: 'right',
  },
  {
    id: 'feature-2',
    title: 'Premium Ingredients',
    description:
      'We believe great baking starts with great ingredients. That\'s why we use real butter, pure vanilla extract, fresh eggs, and locally sourced produce whenever possible. No artificial flavors, no preservatives, no shortcuts. Just honest, wholesome ingredients that you can taste in every bite.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80',
    imageAlt: 'Fresh baking ingredients and supplies',
    imagePosition: 'left',
  },
  {
    id: 'feature-3',
    title: 'Family Recipes, Made with Love',
    description:
      'Our recipes have been passed down through generations, refined over decades, and made with the same love and care that Rebecca learned from her grandmother. Every cheesecake, every loaf of banana bread, every muffin is baked using time-honored techniques that create flavors and textures you simply can\'t find anywhere else.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
    imageAlt: 'Warm and inviting bakery display',
    imagePosition: 'right',
  },
]
