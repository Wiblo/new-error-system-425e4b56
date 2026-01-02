export const businessInfo = {
  // Core business details
  name: "Rebecca Currie's Bakery",
  tagline: "Freshly baked with love, every single day",
  logo: "/logo.png",

  // Contact information
  phone: "(555) 123-4567",
  phoneSecondary: "", // Optional second phone number
  email: "hello@rebeccacurriesbakery.com",

  // Location
  address: {
    street: "456 Bakery Lane",
    area: "", // Optional (e.g., "Building Name" or "Suite 100")
    city: "Springfield",
    state: "CA",
    zip: "12345",
    country: "US",
  },

  // Optional: Coordinates for map and LocalBusiness schema
  geo: {
    latitude: 40.7128,
    longitude: -74.0060,
  },

  // Business hours
  hours: {
    monday: "7:00am - 6:00pm",
    tuesday: "7:00am - 6:00pm",
    wednesday: "7:00am - 6:00pm",
    thursday: "7:00am - 6:00pm",
    friday: "7:00am - 7:00pm",
    saturday: "8:00am - 5:00pm",
    sunday: "9:00am - 3:00pm",
  },

  // Social media profiles
  social: {
    facebook: "https://facebook.com/rebeccacurriesbakery",
    instagram: "https://instagram.com/rebeccacurriesbakery",
    whatsapp: "", // WhatsApp link with number
    // twitter: "https://twitter.com/yourpage",
    // linkedin: "https://linkedin.com/company/yourpage",
  },

  // Site metadata
  url: "https://rebeccacurriesbakery.com",
  description: "Rebecca Currie's Bakery specializes in handcrafted cheesecakes, banana bread, and sweetie muffins. Fresh, homemade baked goods made with love and the finest ingredients.",
  priceRange: "$$", // $, $$, $$$, or $$$$

  // Schema.org types for JSON-LD structured data
  // Bakery: ['LocalBusiness', 'FoodEstablishment', 'Bakery']
  schemaTypes: ['LocalBusiness', 'FoodEstablishment', 'Bakery'] as const,

  // Booking/appointment URL
  bookingUrl: "https://rebeccacurriesbakery.com/order",

  // Google Maps configuration
  maps: {
    apiKey: "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8",
    // Location name for Google Maps searches
    locationName: "Rebecca Currie's Bakery",
  },
}

// Helper function to get formatted address for Google Maps
export function getGoogleMapsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const query = encodeURIComponent(`${street}, ${city}, ${state} ${zip}`)
  return `https://maps.google.com/?q=${query}`
}

// Helper function to get tel: link
export function getPhoneLink(phoneNumber: string = businessInfo.phone) {
  return `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`
}

// Helper function to get mailto: link
export function getEmailLink() {
  return `mailto:${businessInfo.email}`
}

// Helper function to get Google Maps embed URL
export function getGoogleMapsEmbedUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { apiKey, locationName } = businessInfo.maps
  const query = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}&zoom=15`
}

// Helper function to get Google Maps directions URL
export function getGoogleMapsDirectionsUrl() {
  const { street, city, state, zip } = businessInfo.address
  const { locationName } = businessInfo.maps
  const destination = encodeURIComponent(
    `${locationName},${street},${city},${state},${zip}`
  )
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
