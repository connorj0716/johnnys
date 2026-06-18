"use client"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Clock, ShoppingBag } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function Hero() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    fetch("https://api.sheetmonkey.io/form/4XeJocvfBTP3Eo9HfBNjr2", {
      method: "POST",
      body: formData,
    })
      .then(() => { setSubscribed(true); setEmail("") })
      .catch(() => { setSubscribed(true); setEmail("") })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes wipeReveal { from { clip-path: inset(0 100% 0 0); } to { clip-path: inset(0 0 0 0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        .headline-fade { opacity: 0; animation: fadeInUp 1.2s ease-out forwards; animation-delay: 0.3s; }
        .subheadline-container { overflow: hidden; display: inline-block; }
        .subheadline-reveal { display: inline-block; clip-path: inset(0 100% 0 0); animation: wipeReveal 1.8s ease-out forwards; animation-delay: 1.45s; white-space: normal; }
        .hero-badge { opacity: 0; animation: scaleIn 0.6s ease-out forwards; animation-delay: 0.1s; }
        .hero-buttons { opacity: 0; animation: fadeInUp 0.8s ease-out forwards; animation-delay: 1.8s; }
        .hero-location { opacity: 0; animation: fadeIn 1s ease-out forwards; animation-delay: 2.2s; }
        .hero-newsletter { opacity: 0; animation: fadeIn 1s ease-out forwards; animation-delay: 2.6s; }
      `}</style>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0">
          <img src={siteConfig.images.hero} alt={siteConfig.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="hero-badge inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-5 py-2 rounded-full mb-6 border border-white/20">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Open 7 Days a Week</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white headline-fade">{siteConfig.name}</h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto text-pretty">
            <span className="subheadline-container"><span className="subheadline-reveal">{siteConfig.tagline}</span></span>
          </p>
          <div className="hero-location hidden md:flex items-center justify-center gap-2 text-white/80 mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</span>
          </div>
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" onClick={() => scrollToSection("#menu")} className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg rounded-full transition-all hover:scale-105" style={{fontFamily: "var(--font-heading)"}}>
              View Menu
            </Button>
            {siteConfig.orderOnline && (
              <Button size="lg" variant="outline" asChild className="bg-white border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 rounded-full transition-all hover:scale-105" style={{fontFamily: "var(--font-heading)"}}>
                <a href={siteConfig.orderOnline} target="_blank" rel="noopener noreferrer">
                  <ShoppingBag className="h-5 w-5 mr-2" />Order Online
                </a>
              </Button>
            )}
          </div>
          <div className="hero-newsletter hidden md:block max-w-sm mx-auto opacity-90">
            {subscribed ? (
              <p className="text-white/70 text-xs">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input type="email" name="email" placeholder="Get weekly specials & updates" value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1 h-9 text-sm bg-white/15 border-white/20 text-white placeholder:text-white/50 focus:bg-white/25 rounded-full px-4" />
                <input type="hidden" name="source" value="hero" />
                <Button type="submit" size="sm" disabled={loading} className="bg-white/20 hover:bg-white/30 text-white font-medium px-4 h-9 rounded-full">
                  {loading ? "..." : "Join"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
