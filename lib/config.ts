export const siteConfig = {
  // ─── BUSINESS INFO ───
  name: "Johnny's Offshore Café",
  tagline: "A Local Breakfast & Lunch Café in Manahawkin, NJ",
  description: "Johnny's Offshore Café is a locally loved breakfast and lunch café located in Manahawkin, New Jersey. We proudly serve fresh breakfast favorites, classic lunch dishes, and great coffee for locals and visitors alike. Whether you're stopping in before work or grabbing a casual lunch near the Jersey Shore, Johnny's Offshore Café is your neighborhood spot.",
  category: "breakfast" as "breakfast" | "lunch" | "bar" | "pizza" | "seafood" | "coffee" | "general",
  phone: "(609) 622-8790",
  phoneRaw: "6096228790",
  address: {
    street: "100 McKinley Ave",
    city: "Manahawkin",
    state: "NJ",
    zip: "08050",
  },
  hours: [
    { days: "Monday", time: "7am - 2pm" },
    { days: "Tues - Sun", time: "7am - 6pm" },
  ],

  // ─── LINKS ───
  orderOnline: "https://www.doordash.com/store/johnny's-offshore-cafe-stafford-township-1143438/",
  facebook: "https://www.facebook.com/JohnnysOffshorecafe/",
  instagram: "https://www.instagram.com/johnnys_offshore_cafe/",
  googleMapsDir: "https://www.google.com/maps/dir/?api=1&destination=100+McKinley+Ave,+Manahawkin,+NJ+08050",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.8847892847!2d-74.26713368461894!3d39.70347797945726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ee1c0e0e0e0e%3A0x0e0e0e0e0e0e0e0e!2s100%20McKinley%20Ave%2C%20Manahawkin%2C%20NJ%2008050!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus",
  googleReviewsUrl: "https://www.google.com/maps/search/Johnny's+Offshore+Cafe+Manahawkin/@39.7034796,-74.2646749,17z",
  googleRating: "5.0",

  // ─── IMAGES ───
  images: {
    logo: "/images/johnnys-20best-20logo-20png.webp",
    hero: "/images/blueberry-20pancakes.jpg",
    about: "/images/design-mode/johnnys%20exterior.jpg",
  },

  // ─── MENU HIGHLIGHTS ───
  menuHighlights: [
    {
      name: "Bacon Cheeseburger",
      description: "Classic burger with bacon & American cheese",
      price: "$14.00",
      image: "/images/unsplash-image-jqg9yjwy6ei.jpg",
      alt: "Bacon Cheeseburger",
    },
    {
      name: "Cobb Salad",
      description: "Iceberg lettuce, tomatoes, bacon, avocado, bleu cheese & eggs",
      price: "$11.00",
      image: "/images/cobb-salad.jpg",
      alt: "Fresh Cobb Salad",
    },
    {
      name: "French Toast",
      description: "Big Stack with breakfast meat or two eggs",
      price: "$9.00",
      image: "/images/french-toast.jpg",
      alt: "French Toast",
    },
  ],

  // ─── REVIEWS ───
  reviews: [
    {
      text: "Love this little cafe. The waitresses are great the prices are fair and the food is delicious. We eat breakfast here once a week after bouncing around for almost a year.",
      author: "Jason R.",
    },
    {
      text: "Fun local dining with original specials. French toast is best I've ever had. Fun and efficient server. Very reasonable prices. We'll be back!",
      author: "Shar S.",
    },
    {
      text: "Food is fresh and always delicious! Great service too. My favorite place for breakfast and lunch.",
      author: "Diana S.",
    },
  ],

  // ─── FEATURES ───
  features: [
    { icon: "utensils", title: "Breakfast, Lunch & Dinner", description: "More than just breakfast" },
    { icon: "leaf", title: "Fresh & Quality", description: "Made with care and attention" },
    { icon: "heart", title: "Community Focused", description: "A warm welcome for all" },
    { icon: "dollar", title: "Great Value", description: "Quality food, fair prices" },
  ],

  // ─── SEO ───
  seo: {
    title: "Johnny's Offshore Café | Breakfast & Lunch Café in Manahawkin, NJ",
    description: "Johnny's Offshore Café is a family-owned breakfast and lunch café in Manahawkin, NJ near LBI. Serving fresh, hearty meals daily.",
  },
}
