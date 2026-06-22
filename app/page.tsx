"use client"
import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuHighlights } from "@/components/menu-highlights"
import { WeeklySpecials } from "@/components/weekly-specials"
import { LocationHours } from "@/components/location-hours"
import { Reviews } from "@/components/reviews"
import { Newsletter } from "@/components/newsletter"
import { TrustBar } from "@/components/trust-bar"
import { FAQ } from "@/components/faq"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <style>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .scroll-reveal.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      <Navbar />
      <Hero />
      <TrustBar />
      <div className="scroll-reveal"><MenuHighlights /></div>
      <div className="scroll-reveal"><About /></div>
      <div className="scroll-reveal"><WeeklySpecials /></div>
      <div className="scroll-reveal"><LocationHours /></div>
      <div className="scroll-reveal"><Reviews /></div>
      <div className="scroll-reveal"><Newsletter /></div>
      <div className="scroll-reveal"><FAQ /></div>
      <div className="scroll-reveal"><CtaSection /></div>
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
