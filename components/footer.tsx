import { Phone, MapPin, Facebook, InstagramIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Banner */}
      <div className="py-8 bg-[rgba(62,171,255,1)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-[rgba(0,158,230,1)] bg-[rgba(62,171,255,1)]">
          <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">See You Soon!</h3>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent font-semibold bg-transparent rounded-full px-8"
          >
            <a href="tel:6096228790">
              <Phone className="mr-2 h-4 w-4" />
              Call Ahead: (609) 622-8790
            </a>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/johnnys-20best-20logo-20png.webp"
                  alt="Johnny's Offshore Cafe Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="font-bold text-xl">Johnny&apos;s Offshore Café</span>
              </div>
              <p className="text-primary-foreground/80">
                Breakfast, Lunch, & Dinner – a celebration of flavors and community along the coast
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="tel:6096228790"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (609) 622-8790
                </a>
                <div className="flex items-start gap-2 text-primary-foreground/80">
                  <MapPin className="h-4 w-4 mt-1 shrink-0" />
                  <span>
                    100 McKinley Ave
                    <br />
                    Manahawkin, NJ 08050
                  </span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us!</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/JohnnysOffshorecafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/johnnys_offshore_cafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
            © 2026 Johnny's Offshore Café – All Rights Reserved
          </div>
          <div className="text-center text-primary-foreground/40 text-xs mt-3">
            <a href="https://cjresults.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/60 transition-colors">Powered by CJResults</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
