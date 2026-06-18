import { siteConfig } from "@/lib/config"
import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        {siteConfig.colors && (
          <style dangerouslySetInnerHTML={{ __html: `
            :root, .dark {
              --primary: ${siteConfig.colors.primary} !important;
              --primary-foreground: #ffffff !important;
              --accent: ${siteConfig.colors.accent} !important;
              --accent-foreground: #ffffff !important;
              --secondary: #f8fafc !important;
              --secondary-foreground: ${siteConfig.colors.primary} !important;
              --muted: #f1f5f9 !important;
              --muted-foreground: #475569 !important;
              --background: #ffffff !important;
              --foreground: #1e293b !important;
              --card: #ffffff !important;
              --card-foreground: #1e293b !important;
              --border: #e2e8f0 !important;
              --ring: ${siteConfig.colors.accent} !important;
            }
          `}} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": siteConfig.name,
            "telephone": siteConfig.phone,
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": siteConfig.address.street,
              "addressLocality": siteConfig.address.city,
              "addressRegion": siteConfig.address.state,
              "postalCode": siteConfig.address.zip,
              "addressCountry": "US"
            },
            "menu": "/menu",
          })}}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
