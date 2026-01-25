import Link from "next/link"
import { UtensilsCrossed, Phone, Navigation } from "lucide-react"

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border shadow-lg">
      <div className="flex items-center justify-around py-2 bg-[rgba(62,171,255,1)] border-[rgba(0,121,216,1)]">
        <Link
          href="/menu"
          className="flex flex-col items-center gap-1 px-4 py-2 hover:text-primary/80 transition-colors text-card"
        >
          <UtensilsCrossed className="h-5 w-5" />
          <span className="text-xs font-medium">Menu</span>
        </Link>
        <a
          href="tel:+16096228790"
          className="flex flex-col items-center gap-1 px-4 py-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Phone className="h-5 w-5 text-card" />
          <span className="text-xs font-medium text-card">Call</span>
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=100+McKinley+Ave,+Manahawkin,+NJ+08050"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-4 py-2 text-primary hover:text-primary/80 transition-colors"
        >
          <Navigation className="h-5 w-5 text-card" />
          <span className="text-xs font-medium text-card">Directions</span>
        </a>
      </div>
    </div>
  )
}
