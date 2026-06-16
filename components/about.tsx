"use client"
import { UtensilsCrossed, Leaf, Heart, DollarSign } from "lucide-react"
import { siteConfig } from "@/lib/config"
import { useEffect, useRef } from "react"

const iconMap: Record<string, any> = {
  utensils: UtensilsCrossed, leaf: Leaf, heart: Heart, dollar: DollarSign,
}

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".about-feature")
            items.forEach((item, i) => {
              setTimeout(() => {
                (item as HTMLElement).style.opacity = "1";
                (item as HTMLElement).style.transform = "translateX(0)"
              }, 150 * (i + 1))
            })
            const img = entry.target.querySelector(".about-image") as HTMLElement
            if (img) { img.style.opacity = "1"; img.style.transform = "scale(1)" }
            const text = entry.target.querySelector(".about-text") as HTMLElement
            if (text) { text.style.opacity = "1"; text.style.transform = "translateX(0)" }
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-secondary" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative about-image transition-all duration-1000" style={{ opacity: 0, transform: "scale(0.95)" }}>
            <img src={siteConfig.images.about} alt={siteConfig.name} className="rounded-3xl shadow-xl w-full" />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-semibold">
              Local Favorite
            </div>
          </div>
          <div className="about-text transition-all duration-1000" style={{ opacity: 0, transform: "translateX(30px)" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-primary">A Local Favorite for Any Time of Day</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{siteConfig.description}</p>
            <div className="hidden md:grid grid-cols-2 gap-6">
              {siteConfig.features.map((feature) => {
                const Icon = iconMap[feature.icon] || UtensilsCrossed
                return (
                  <div key={feature.title} className="about-feature flex items-start gap-3 transition-all duration-500" style={{ opacity: 0, transform: "translateX(20px)" }}>
                    <div className="p-2 bg-primary/10 rounded-full"><Icon className="h-5 w-5 text-primary" /></div>
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="md:hidden">
              <h3 className="font-semibold text-foreground mb-2">Why {siteConfig.name.split("\u2019")[0].split("'")[0]}?</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {siteConfig.features.map((f) => (<li key={f.title}>{f.title} &mdash; {f.description}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
