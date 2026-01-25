import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FullMenu } from "@/components/full-menu"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function MenuPage() {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      <div className="pt-16">
        <FullMenu />
      </div>
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
