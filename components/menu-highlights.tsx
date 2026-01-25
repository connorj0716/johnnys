"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuItems = [
  {
    name: "Bacon Cheeseburger",
    description: "Classic burger with bacon & American cheese",
    price: "$14.00",
    image: "/images/unsplash-image-jqg9yjwy6ei.jpg",
    featured: true,
    imagePosition: "center 40%",
    alt: "Bacon Cheeseburger at lunch café in Manahawkin NJ",
  },
  {
    name: "Cobb Salad",
    description: "Iceberg lettuce, tomatoes, bacon, avocado, bleu cheese & eggs",
    price: "$11.00",
    image: "/images/cobb-salad.jpg",
    featured: true,
    alt: "Fresh Cobb Salad at Johnny's Offshore Café Manahawkin",
  },
  {
    name: "French Toast",
    description: "Big Stack with breakfast meat or two eggs",
    price: "$9.00",
    image: "/images/french-toast.jpg",
    featured: true,
    alt: "French Toast at breakfast café in Manahawkin New Jersey",
  },
]

export function MenuHighlights() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Discover Our Top Sellers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choice from a variety of options – Breakfast, Lunch, & Dinner
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {menuItems.map((item) => (
            <Card
              key={item.name}
              className={`overflow-hidden group hover:shadow-lg transition-shadow border-border px-0 mx-0 my-0 py-2.5 ${item.featured ? "ring-2 ring-accent" : ""}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={(item as any).alt || item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: (item as any).imagePosition || "center" }}
                />
                {item.featured && (
                  <div className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                    Top Seller 
                  </div>
                )}
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-foreground text-lg">{item.name}</h3>
                  <span className="text-primary font-bold whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            See our complete menu with all breakfast, lunch, and dinner options!
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 shadow-xl">
            <Link href="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
