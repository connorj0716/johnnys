import { Phone, MapPin, Facebook, InstagramIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { siteConfig } from "@/lib/config"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="py-8 bg-accent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">See You Soon!</h3>
          <Button style={{fontFamily: "var(--font-heading)"}} size="lg" variant="outline" asChild className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent font-semibold bg-transparent rounded-full px-8">
            <a href={`tel:${siteConfig.phoneRaw}`}><Phone className="mr-2 h-4 w-4" />Call Ahead: {siteConfig.phone}</a>
          </Button>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {siteConfig.images.logo ? <Image src={siteConfig.images.logo} alt={siteConfig.name} width={48} height={48} className="rounded-full" /> : <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-xl">{siteConfig.name.charAt(0)}</div>}
                <span className="font-bold text-xl">{siteConfig.name}</span>
              </div>
              <p className="text-primary-foreground">A celebration of flavors and community</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-3">
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 text-primary-foreground hover:text-primary-foreground transition-colors">
                  <Phone className="h-4 w-4" />{siteConfig.phone}
                </a>
                <div className="flex items-start gap-2 text-primary-foreground">
                  <MapPin className="h-4 w-4 mt-1 shrink-0" />
                  <span>{siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Follow Us!</h4>
              <div className="flex gap-4">
                {siteConfig.facebook && (<a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>)}
                {siteConfig.instagram && (<a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors" aria-label="Instagram"><InstagramIcon className="h-5 w-5" /></a>)}
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/90 text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name} &ndash; All Rights Reserved
          </div>
          <div className="text-center text-primary-foreground/80 text-xs mt-3">
            <a href="https://cjresults.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/90 transition-colors">Powered by CJResults</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
