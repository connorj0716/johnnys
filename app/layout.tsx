import { siteConfig } from "@/lib/config"
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Johnny's Offshore Café | Breakfast & Lunch Café in Manahawkin, NJ",
  description:
    "Johnny's Offshore Café is a family-owned breakfast and lunch café in Manahawkin, NJ near LBI. Serving fresh, hearty meals daily with all-day breakfast, homemade specials, and friendly service.",
  keywords: ["breakfast café Manahawkin NJ", "lunch café Manahawkin", "breakfast near LBI", "Stafford Township restaurant", "Manahawkin diner", "all-day breakfast NJ"],
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Johnny's Offshore Café | Breakfast & Lunch Café in Manahawkin, NJ",
    description: "Family-owned breakfast and lunch café in Manahawkin, NJ near LBI. Fresh, hearty meals served daily.",
    type: "website",
    locale: "en_US",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Johnny's Offshore Café",
  "image": "/images/johnnys-20logo-20png.png",
  "url": "https://www.johnnysoffshore.com",
  "telephone": "+1-609-622-8790",
  "priceRange": "$$",
  "servesCuisine": ["American", "Breakfast", "Lunch", "Dinner"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "100 McKinley Ave",
    "addressLocality": "Manahawkin",
    "addressRegion": "NJ",
    "postalCode": "08050",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7034796,
    "longitude": -74.2646749
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "07:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  ],
  "menu": "/menu",
  "acceptsReservations": "false",
  "hasMenu": {
    "@type": "Menu",
    "url": "/menu"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
