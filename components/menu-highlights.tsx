"use client"
import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export function MenuHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".menu-card")
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0)"
              }, 300 * (i + 1))
            })
          }
        })
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="menu" className="py-20 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Top Sellers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Choice from a variety of options</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12 max-w-5xl mx-auto">
          {siteConfig.menuHighlights.map((item) => (
            <Card key={item.name} className="menu-card overflow-hidden group hover:shadow-lg transition-all duration-700 border-border px-0 mx-0 my-0 py-2.5 rounded-2xl ring-2 ring-accent" style={{ opacity: 0, transform: "translateY(30px)" }}>
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.alt || item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">Top Seller</div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-foreground text-lg">{item.name}</h3>
                  <span className="text-primary font-bold whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <p className="text-muted-foreground mb-6">See our complete menu with all options!</p>
          <Button style={{fontFamily: "var(--font-heading)"}} asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-4 text-lg shadow-xl rounded-full ring-2 ring-accent/30 ring-offset-2 transition-all hover:scale-105">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
