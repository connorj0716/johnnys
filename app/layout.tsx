"use client"
import { siteConfig } from "@/lib/config"
import type React from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { useEffect } from "react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    document.title = siteConfig.seo.title
    
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`)
      if (!el) {
        el = document.createElement("meta")
        if (name.startsWith("og:")) {
          el.setAttribute("property", name)
        } else {
          el.setAttribute("name", name)
        }
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }
    
    setMeta("description", siteConfig.seo.description)
    setMeta("og:title", siteConfig.seo.title)
    setMeta("og:description", siteConfig.seo.description)
    setMeta("og:type", "website")
    
    // Set favicon
    let link = document.querySelector("link[rel=\'icon\']") as HTMLLinkElement
    if (!link) {
      link = document.createElement("link")
      link.rel = "icon"
      document.head.appendChild(link)
    }
    link.href = "/favicon.ico"
    
    // Inject JSON-LD schema
    const existingScript = document.querySelector("script[type=\'application/ld+json\']")
    if (existingScript) existingScript.remove()
    
    const schema = {
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
      "url": typeof window !== "undefined" ? window.location.href : "",
      "menu": "/menu",
    }
    
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
