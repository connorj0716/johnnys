"use client"
import { siteConfig } from "@/lib/config"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("/#")) {
      const hash = href.substring(1)
      if (pathname === "/") {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-[rgba(255,255,255,1)] text-accent-foreground bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-accent-foreground border-[rgba(244,244,244,1)] bg-accent">
        <div className="flex items-center justify-between h-20 text-accent-foreground bg-accent">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={siteConfig.images.logo || ""}
              alt={siteConfig.name}
              width={56}
              height={56}
              className="rounded-full"
            />
            <span className="font-bold text-primary text-base">{siteConfig.name}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-white hover:text-accent bg-transparent"
            >
              <a
                href={siteConfig.orderOnline || "#menu"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Order Online
              </a>
            </Button>
            <Button asChild className="bg-white hover:bg-white/90 text-accent">
              <a href={`tel:+1${siteConfig.phoneRaw}`}>Call Now</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                variant="outline"
                className="border-accent-foreground text-accent-foreground hover:bg-white hover:text-accent w-fit bg-transparent"
              >
                <a
                  href={siteConfig.orderOnline || "#menu"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Order Online
                </a>
              </Button>
              <Button asChild className="bg-white hover:bg-white/90 text-accent w-fit">
                <a href={`tel:+1${siteConfig.phoneRaw}`}>Call Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
