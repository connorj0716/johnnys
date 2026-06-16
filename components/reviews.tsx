"use client"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"
import { useEffect, useRef } from "react"

export function Reviews() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".review-card")
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = "1";
                (card as HTMLElement).style.transform = "translateY(0) scale(1)"
              }, 200 * (i + 1))
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-muted/30" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-[rgba(0,92,171,1)]">What Locals Say</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />))}
            </div>
            <span className="text-muted-foreground font-medium">{siteConfig.googleRating} on Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {siteConfig.reviews.map((review, index) => (
            <Card key={index} className="review-card p-6 rounded-2xl border-0 shadow-md hover:shadow-lg transition-all duration-700" style={{ opacity: 0, transform: "translateY(20px) scale(0.95)" }}>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />))}
              </div>
              <p className="text-muted-foreground mb-3 italic">&ldquo;{review.text}&rdquo;</p>
              <p className="text-sm font-medium text-foreground">&mdash; {review.author}</p>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" asChild className="rounded-full px-8">
            <a href={siteConfig.googleReviewsUrl} target="_blank" rel="noopener noreferrer">See more on Google</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
