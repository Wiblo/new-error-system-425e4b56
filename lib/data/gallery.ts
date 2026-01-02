export interface GalleryItem {
  id: string
  image: string
  alt: string
}

export interface GalleryContent {
  title: string
  subtitle?: string
  items: GalleryItem[]
}

/**
 * Gallery section content
 * Update this to modify the gallery shown on the site
 */
export const galleryContent: GalleryContent = {
  title: 'Fresh From Our Ovens',
  subtitle:
    'A peek inside our bakery where we craft delicious treats with love every single day',
  items: [
    {
      id: 'gallery-1',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
      alt: 'Freshly baked artisan bread and pastries',
    },
    {
      id: 'gallery-2',
      image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=800&q=80',
      alt: 'Beautiful display of colorful cupcakes and desserts',
    },
    {
      id: 'gallery-3',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80',
      alt: 'Warm and welcoming bakery interior',
    },
    {
      id: 'gallery-4',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
      alt: 'Baker preparing fresh dough in the kitchen',
    },
    {
      id: 'gallery-5',
      image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80',
      alt: 'Assortment of fresh croissants and pastries',
    },
    {
      id: 'gallery-6',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80',
      alt: 'Beautifully decorated cakes on display',
    },
  ],
}

/**
 * Get all gallery items
 */
export function getGalleryItems(): GalleryItem[] {
  return galleryContent.items
}
