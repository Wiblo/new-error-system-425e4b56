import { HeroWithImage } from "@/components/sections/hero/HeroWithImage"
import { FeaturedServices } from "@/components/sections/services/FeaturedServices"
import { AboutSection } from "@/components/sections/about/AboutSection"
import { FeaturesSection } from "@/components/sections/features/FeaturesSection"
import { GallerySection } from "@/components/sections/gallery/GallerySection"
import { CTASection } from "@/components/sections/cta/CTASection"
import { LocationSection } from "@/components/sections/location/LocationSection"
import { FaqSection } from "@/components/sections/faq/FaqSection"
import { businessInfo } from "@/lib/data/business-info"

export default function Home() {
  return (
    <>
      <HeroWithImage
        subtitle="Rebecca Currie's Bakery"
        title="Handcrafted Cheesecakes, Banana Bread & Sweetie Muffins"
        backgroundImage="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1600&q=80"
        backgroundImageAlt="Beautiful display of fresh baked goods and desserts"
        ctaText="Order Online"
        ctaUrl={businessInfo.bookingUrl}
      />
      <FeaturedServices />
      <AboutSection />
      <FeaturesSection />
      <GallerySection />
      <CTASection />
      <LocationSection />
      <FaqSection />
    </>
  )
}
