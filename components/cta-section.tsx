import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { siteConfig } from "@/lib/config"

export function CtaSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4" style={{fontFamily: "var(--font-heading)"}}>
          Ready to Visit {siteConfig.name}?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
          Stop by today or give us a call. We would love to see you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button style={{fontFamily: "var(--font-heading)"}} asChild size="lg" className="bg-white border-2 border-white text-primary hover:bg-transparent hover:text-white font-bold px-10 py-6 text-lg rounded-full transition-all hover:scale-105">
            <a href={"tel:+1" + siteConfig.phoneRaw}>
              <Phone className="h-5 w-5 mr-2" />Call Now
            </a>
          </Button>
          <Button style={{fontFamily: "var(--font-heading)"}} asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-10 py-6 text-lg rounded-full transition-all hover:scale-105">
            <a href={siteConfig.googleMapsDir} target="_blank" rel="noopener noreferrer">
              <MapPin className="h-5 w-5 mr-2" />Get Directions
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
