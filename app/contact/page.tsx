import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { MobileCtaBar } from "@/components/mobile-cta-bar"

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      <div className="pt-24 pb-16">
        <ContactForm />
      </div>
      <Footer />
      <MobileCtaBar />
    </main>
  )
}
