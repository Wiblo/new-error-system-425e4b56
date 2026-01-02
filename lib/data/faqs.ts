export interface FaqItem {
  id: string
  question: string
  answer: string
}

/**
 * Frequently Asked Questions
 * Update this array to modify FAQs shown on the site
 */
export const faqs: FaqItem[] = [
  {
    id: 'hours',
    question: 'What are your hours of operation?',
    answer:
      "We're open 7 days a week! Monday through Thursday 7am-6pm, Friday 7am-7pm, Saturday 8am-5pm, and Sunday 9am-3pm. We bake fresh every morning, so come early for the best selection. Items often sell out by the afternoon, especially on weekends.",
  },
  {
    id: 'orders',
    question: 'Can I place a custom order?',
    answer:
      'Yes! We love creating custom orders for special occasions. Whether you need a whole cheesecake for a birthday party or multiple loaves of banana bread for an event, we can help. Please give us at least 48 hours notice for custom orders. Call us at (555) 123-4567 or email hello@rebeccacurriesbakery.com to discuss your needs.',
  },
  {
    id: 'ingredients',
    question: 'Do you accommodate dietary restrictions?',
    answer:
      "We're happy to discuss dietary needs! While most of our items contain dairy, eggs, and gluten, we can create custom orders for many dietary restrictions with advance notice. Please call us to discuss your specific needs, and we'll do our best to accommodate you.",
  },
  {
    id: 'freshness',
    question: 'How long do your baked goods stay fresh?',
    answer:
      "All our items are baked fresh daily without preservatives. Muffins and banana bread stay fresh for 2-3 days at room temperature or up to a week refrigerated. Cheesecakes should be refrigerated and enjoyed within 5 days. Everything also freezes beautifully for up to 3 months - just thaw at room temperature when you're ready to enjoy.",
  },
  {
    id: 'whole-cake',
    question: 'Do I need to order a whole cheesecake in advance?',
    answer:
      "We typically have whole cheesecakes available for walk-in purchase, but we recommend calling ahead to reserve one, especially on weekends. For custom flavors or specific occasions, please give us 48 hours notice so we can prepare exactly what you're looking for.",
  },
  {
    id: 'delivery',
    question: 'Do you offer delivery?',
    answer:
      "We currently offer pickup only, but we're located conveniently at 456 Bakery Lane in Springfield with plenty of parking. We package everything carefully so your treats stay fresh and beautiful for the ride home. Local delivery may be available for large orders - please contact us to discuss.",
  },
  {
    id: 'allergens',
    question: 'What about allergens?',
    answer:
      'All our products are made in a kitchen that handles common allergens including wheat, eggs, dairy, tree nuts, and soy. While we practice careful cleaning procedures, we cannot guarantee an allergen-free environment. If you have severe allergies, please contact us to discuss your concerns.',
  },
  {
    id: 'wholesale',
    question: 'Do you offer wholesale or catering services?',
    answer:
      "Yes! We work with local cafes, restaurants, and businesses to provide wholesale baked goods. We also cater events with platters of muffins, sliced banana bread, and dessert assortments. Contact us at hello@rebeccacurriesbakery.com to discuss volume pricing and availability.",
  },
]

/**
 * Get all FAQs
 */
export function getAllFaqs(): FaqItem[] {
  return faqs
}

/**
 * Get a single FAQ by ID
 */
export function getFaqById(id: string): FaqItem | undefined {
  return faqs.find((faq) => faq.id === id)
}
