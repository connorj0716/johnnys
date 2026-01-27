"use client"
import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Clock, ShoppingBag } from "lucide-react"

export function Hero() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timestampElement = document.getElementById('local-timestamp-hero')
    if (timestampElement) {
      timestampElement.value = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    }
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
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
      .then(() => {
        setSubscribed(true)
        setEmail("")
      })
      .catch(() => {
        // Silent fail - Sheet Monkey handles all submissions
        setSubscribed(true)
        setEmail("")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {/* Inline styles – pure left-to-right clip-path reveal, no fade/slide on subheadline */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes wipeReveal {
          from {
            clip-path: inset(0 100% 0 0); /* fully clipped from right */
          }
          to {
            clip-path: inset(0 0 0 0); /* fully revealed left to right */
          }
        }
        .headline-fade {
          opacity: 0;
          animation: fadeInUp 1.2s ease-out forwards;
          animation-delay: 0.3s;
        }
        .subheadline-container {
          overflow: hidden;
          display: inline-block;
        }
        .subheadline-reveal {
          /* Start fully clipped so invisible initially */
          clip-path: inset(0 100% 0 0);
          animation: wipeReveal 1.8s ease-out forwards;
          animation-delay: 1.45s; /* starts right after headline finishes */
        }
      `}</style>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/blueberry-20pancakes.jpg"
            alt="Breakfast café in Manahawkin NJ - fresh pancakes at Johnny's Offshore Café"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#3d2b1f]/85 via-[#4a3728]/75 to-[#3d2b1f]/85 opacity-65" />
        </div>
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/20">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">Open 7 Days a Week</span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance border-solid border-foreground border-0 text-card headline-fade"
          >
            Johnny's Offshore Café
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto text-pretty">
            <span className="subheadline-container">
              <span className="subheadline-reveal text-base">
                A Local Breakfast & Lunch Café in Manahawkin, NJ
              </span>
            </span>
          </p>
          <div className="hidden md:flex items-center justify-center gap-2 text-white/80 mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">100 McKinley Ave, Manahawkin, NJ 08050</span>
          </div>
          {/* Primary and Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => scrollToSection("#menu")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6 text-lg"
            >
              View Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white/70 text-white hover:bg-white/20 font-medium px-8 bg-transparent"
            >
              <a
                href="https://www.doordash.com/store/johnny's-offshore-cafe-stafford-township-1143438/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Order Online
              </a>
            </Button>
          </div>
          {/* Mini Newsletter Signup - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block max-w-sm mx-auto opacity-90">
            {subscribed ? (
              <p className="text-white/70 text-xs">Thanks for subscribing! Check your email for updates.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Sign up now for weekly specials & updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-9 text-sm bg-white/15 border-white/20 text-white placeholder:text-white/50 focus:bg-white/25"
                />
                <input type="hidden" name="source" value="hero" />
                <input type="hidden" name="timestamp" value="x-sheetmonkey-current-date-time" />
                <input type="hidden" name="local_timestamp" value="" id="local-timestamp-hero" />
                <Button
                  type="submit"
                  size="sm"
                  disabled={loading}
                  className="bg-white/20 hover:bg-white/30 text-white font-medium px-4 h-9"
                >
                  {loading ? "Joining..." : "Join"}
                </Button>
              </form>
            )}
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"></div>
      </section>
    </>
  )
}
