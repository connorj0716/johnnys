"use client"
import { siteConfig } from "@/lib/config"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Button } from "@/components/ui/button"
import { UtensilsCrossed } from "lucide-react"

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      <section className="pt-28 pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <UtensilsCrossed className="h-8 w-8 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{siteConfig.name} Menu</h1>
          <p className="text-muted-foreground text-lg mb-4 max-w-xl mx-auto">
            Your full menu will be displayed here with your items, descriptions, and pricing.
          </p>
          <p className="text-muted-foreground text-sm mb-8 max-w-xl mx-auto italic">
            This is a preview — we will customize this page with your actual menu during setup.
          </p>
          {siteConfig.orderOnline && (
            <Button asChild size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mb-12">
              <a href={siteConfig.orderOnline} target="_blank" rel="noopener noreferrer">Order Online</a>
            </Button>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {siteConfig.menuHighlights.map((item, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-card">
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.alt || item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-foreground text-lg">{item.name}</h3>
                    <span className="text-primary font-bold">{item.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
