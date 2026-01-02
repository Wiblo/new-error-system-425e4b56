export interface AboutPreview {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface AboutFull {
  title: string
  paragraphs: string[]
  image: string
  imageAlt: string
}

/**
 * About section preview for homepage
 * Brief introduction with link to full about page
 */
export const aboutPreview: AboutPreview = {
  title: 'About Rebecca Currie',
  description:
    "Rebecca Currie is a passionate baker who has been creating delicious treats for over 15 years. What started as baking for family and friends has blossomed into a beloved neighborhood bakery known for its signature cheesecakes, moist banana bread, and irresistible sweetie muffins. Every item is crafted with love, premium ingredients, and a dedication to bringing joy to your day.",
  image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  imageAlt: 'Baker working with fresh dough in the bakery',
}

/**
 * Full about content for dedicated about page
 * Comprehensive information about the practice
 */
export const aboutFull: AboutFull = {
  title: 'About Rebecca Currie',
  paragraphs: [
    "Rebecca Currie is a passionate baker who has been creating delicious treats for over 15 years. What started as baking for family and friends has blossomed into a beloved neighborhood bakery known for its signature cheesecakes, moist banana bread, and irresistible sweetie muffins.",
    'Rebecca learned to bake from her grandmother, who passed down cherished family recipes and the belief that baking is an act of love. Today, Rebecca continues that tradition, waking up before dawn to ensure every item that leaves the bakery is perfectly fresh and made with care.',
    'At Rebecca Currie\'s Bakery, we believe in using only the finest ingredients - real butter, pure vanilla, fresh eggs, and locally sourced produce whenever possible. No shortcuts, no artificial flavors, just honest baking that tastes like home.',
    'Whether you\'re celebrating a special occasion with one of our famous cheesecakes, grabbing a slice of banana bread with your morning coffee, or treating yourself to a sweetie muffin in the afternoon, we\'re honored to be part of your day. Thank you for supporting our small, family-run bakery.',
  ],
  image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
  imageAlt: 'Baker working with fresh dough in the bakery',
}
