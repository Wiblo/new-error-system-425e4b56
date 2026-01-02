import { Cake, Croissant, Cookie } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  slug: string
  name: string
  description: string
  duration: string
  price: string
  image: string
  imageAlt: string
  icon: LucideIcon
  benefits?: string[]
  featured?: boolean
  // Full treatment details for dedicated pages
  shortDescription?: string
  fullDescription?: string
  idealFor?: string[]
}

/**
 * All bakery products offered
 * Update this array to add/modify products shown throughout the site
 */
export const services: Service[] = [
  {
    id: 'cheesecakes',
    slug: 'cheesecakes',
    name: 'Artisan Cheesecakes',
    description:
      'Silky smooth, creamy cheesecakes made with premium cream cheese and a buttery graham cracker crust. Available in classic New York style and seasonal flavors.',
    duration: 'Whole or by slice',
    price: 'From $28',
    image: 'https://images.unsplash.com/photo-1533134242820-b4f0b6fd6f96?w=800&q=80',
    imageAlt: 'Delicious creamy cheesecake with fresh berries',
    icon: Cake,
    benefits: [
      'Made with premium ingredients',
      'Baked fresh daily',
      'Multiple flavor options',
      'Custom orders available',
    ],
    featured: true,
    shortDescription:
      'Our signature creamy cheesecakes are a customer favorite',
    fullDescription:
      'Our cheesecakes are crafted using a time-honored family recipe with premium cream cheese, fresh eggs, and pure vanilla. Each cheesecake is baked to perfection with a golden crust and creamy center that melts in your mouth.\n\nWe offer classic New York style as well as seasonal variations like strawberry swirl, chocolate marble, and lemon zest. Perfect for celebrations, gatherings, or simply treating yourself to something special.',
    idealFor: [
      'Birthday celebrations',
      'Special occasions',
      'Dessert lovers',
      'Gift giving',
      'Holiday gatherings',
      'Dinner parties',
    ],
  },
  {
    id: 'banana-bread',
    slug: 'banana-bread',
    name: 'Classic Banana Bread',
    description:
      'Moist, flavorful banana bread made with ripe bananas, warm spices, and just a hint of vanilla. A timeless favorite that pairs perfectly with your morning coffee.',
    duration: 'Loaf or by slice',
    price: 'From $12',
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80',
    imageAlt: 'Fresh baked banana bread loaf',
    icon: Croissant,
    benefits: [
      'Made with real ripe bananas',
      'Perfectly moist texture',
      'No artificial flavors',
      'Great for breakfast or snack',
    ],
    featured: true,
    shortDescription:
      'Moist, delicious banana bread that tastes like home',
    fullDescription:
      'Our banana bread is a beloved classic, made with overripe bananas for maximum flavor and natural sweetness. We blend in warm cinnamon, a touch of nutmeg, and pure vanilla extract to create a comforting treat that reminds you of home.\n\nEach loaf is baked until golden brown with a tender crumb that stays moist for days. We also offer variations with walnuts or chocolate chips for those who like a little extra indulgence.',
    idealFor: [
      'Breakfast on the go',
      'Coffee companion',
      'Afternoon snack',
      'Lunch boxes',
      'Gift baskets',
      'Comfort food cravings',
    ],
  },
  {
    id: 'sweetie-muffins',
    slug: 'sweetie-muffins',
    name: 'Sweetie Muffins',
    description:
      'Light, fluffy muffins bursting with sweetness. Choose from blueberry, chocolate chip, double chocolate, or our seasonal special flavors.',
    duration: 'Individual or by the dozen',
    price: 'From $3.50',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&q=80',
    imageAlt: 'Freshly baked sweet muffins with golden tops',
    icon: Cookie,
    benefits: [
      'Baked fresh every morning',
      'Perfect portion size',
      'Multiple flavor varieties',
      'Great for sharing',
    ],
    featured: true,
    shortDescription:
      'Perfectly portioned sweet treats for any time of day',
    fullDescription:
      'Our sweetie muffins are baked fresh every morning, filling the bakery with an irresistible aroma. Made with high-quality ingredients and packed with flavor, these muffins have a tender crumb and golden dome top.\n\nChoose from our rotating selection of flavors including classic blueberry bursting with fresh berries, decadent double chocolate for chocolate lovers, vanilla chocolate chip, lemon poppy seed, and seasonal specialties. Perfect for breakfast meetings, afternoon treats, or whenever you need a little something sweet.',
    idealFor: [
      'Breakfast meetings',
      'Coffee breaks',
      'Kids lunchboxes',
      'Office treats',
      'Quick snacks',
      'Party platters',
    ],
  },
]

/**
 * Get all services
 */
export function getAllServices(): Service[] {
  return services
}

/**
 * Get featured services only
 */
export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured)
}

/**
 * Get a single service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

/**
 * Get a single service by ID
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id)
}
