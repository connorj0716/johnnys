import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    text: "Love this little cafe. The waitresses are great the prices are fair and the food is delicious. We eat breakfast here once a week after bouncing around for almost a year.",
    author: "Jason R.",
  },
  {
    text: "Fun local dining with original specials. French toast is best I've ever had. Fun and efficient server. Very reasonable prices. We'll be back!",
    author: "Shar S.",
  },
  {
    text: "Johnny’s is my favorite place for breakfast and lunch. Food is fresh and always delicious! Great service too.",
    author: "Diana S.",
  },
  {
    text: "Love this place! Their pancakes are fluffy and the portions are generous. Highly recommend!",
    author: "Jennifer L.",
  },
  {
    text: "A true local gem. Fresh ingredients, welcoming vibe, and consistent quality every time.",
    author: "Tom R.",
  },
]

export function Reviews() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-[rgba(0,92,171,1)]">What Locals Say</h2>
          <p className="text-muted-foreground">Hear from our community!</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {reviews.slice(0, 3).map((review, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-3 italic">"{review.text}"</p>
              <p className="text-sm font-medium text-foreground">— {review.author}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" asChild>
            <a
              href="https://www.google.com/maps/search/Johnny's+Offshore+Cafe+Manahawkin/@39.7034796,-74.2646749,17z"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more on Google
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
