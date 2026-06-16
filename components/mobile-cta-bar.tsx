import { Phone, MapPin, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/config"

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary text-primary-foreground border-t border-primary-foreground/20 shadow-xl">
      <div className="grid grid-cols-3 divide-x divide-primary-foreground/20">
        <Link href="/menu" className="flex flex-col items-center py-3 hover:bg-primary-foreground/10 transition-colors">
          <UtensilsCrossed className="h-5 w-5 mb-1" /><span className="text-xs font-medium">Menu</span>
        </Link>
        <a href={`tel:+1${siteConfig.phoneRaw}`} className="flex flex-col items-center py-3 hover:bg-primary-foreground/10 transition-colors">
          <Phone className="h-5 w-5 mb-1" /><span className="text-xs font-medium">Call</span>
        </a>
        <a href={siteConfig.googleMapsDir} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center py-3 hover:bg-primary-foreground/10 transition-colors">
          <MapPin className="h-5 w-5 mb-1" /><span className="text-xs font-medium">Directions</span>
        </a>
      </div>
    </div>
  )
}
