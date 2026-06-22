"use client"
import { Star, Users, Clock, Shield } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function TrustBar() {
  const stats = [
    { icon: Star, value: siteConfig.googleRating, label: "Google Rating" },
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Clock, value: "7 Days", label: "Open Weekly" },
    { icon: Shield, value: "100%", label: "Satisfaction" },
  ]
  
  return (
    <section className="py-6 bg-primary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-3 text-primary-foreground">
              <stat.icon className="h-5 w-5 text-primary-foreground/80" />
              <div>
                <div className="font-bold text-lg" style={{fontFamily: "var(--font-heading)"}}>{stat.value}</div>
                <div className="text-xs text-primary-foreground/70">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
