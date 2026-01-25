import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { MenuHighlights } from "@/components/menu-highlights"
import { WeeklySpecials } from "@/components/weekly-specials"
import { LocationHours } from "@/components/location-hours"
import { Reviews } from "@/components/reviews"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function Home() {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      <Hero />
      <MenuHighlights />
      <About />
      <WeeklySpecials />
      <LocationHours />
      <Reviews />
      <Newsletter />
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
