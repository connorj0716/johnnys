import { siteConfig } from "@/lib/config"
import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const headingFont = siteConfig.fonts?.heading || "DM Sans"
  const bodyFont = siteConfig.fonts?.body || "Inter"
  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${headingFont.replace(/ /g, '+')}:wght@400;600;700;800;900&family=${bodyFont.replace(/ /g, '+')}:wght@300;400;500;600;700&display=swap`

  return (
    <html lang="en">
      <head>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsUrl} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          :root, .dark {
            --primary: ${siteConfig.colors?.primary || "#1e293b"} !important;
            --primary-foreground: #ffffff !important;
            --accent: ${siteConfig.colors?.accent || "#0070f3"} !important;
            --accent-foreground: #ffffff !important;
            --secondary: #f8fafc !important;
            --secondary-foreground: ${siteConfig.colors?.primary || "#1e293b"} !important;
            --muted: #f1f5f9 !important;
            --muted-foreground: #475569 !important;
            --background: #ffffff !important;
            --foreground: #1e293b !important;
            --card: #ffffff !important;
            --card-foreground: #1e293b !important;
            --border: #e2e8f0 !important;
            --ring: ${siteConfig.colors?.accent || "#0070f3"} !important;
            --font-heading: '${headingFont}', sans-serif;
            --font-body: '${bodyFont}', sans-serif;
          }
          body {
            font-family: var(--font-body) !important;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading) !important;
          }
        `}} />
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
