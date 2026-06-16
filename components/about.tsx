import { UtensilsCrossed, Leaf, Heart, DollarSign } from "lucide-react"

const features = [
  {
    icon: UtensilsCrossed,
    title: "Breakfast, Lunch & Dinner",
    description: "More than just breakfast",
  },
  {
    icon: Leaf,
    title: "Fresh & Quality",
    description: "Made with care and attention",
  },
  {
    icon: Heart,
    title: "Community Focused",
    description: "A warm welcome for all",
  },
  {
    icon: DollarSign,
    title: "Great Value",
    description: "Quality food, fair prices",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/images/design-mode/johnnys%20exterior.jpg"
              alt="Johnny's Offshore Café interior"
              className="rounded-3xl shadow-xl w-full px-0"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full shadow-lg font-semibold">
              Nestled Along the Coast
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-primary">
              A Local Favorite for Any Time of Day
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {"Johnny’s Offshore Café is a locally loved breakfast and lunch café located in Manahawkin, New Jersey. We proudly serve fresh breakfast favorites, classic lunch dishes, and great coffee for locals and visitors alike. Whether you’re stopping in before work or grabbing a casual lunch near the Jersey Shore, Johnny’s Offshore Café is your neighborhood spot."}
            </p>
            

            {/* Features - Condensed on mobile, full grid on desktop */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Mobile: Consolidated value section */}
            <div className="md:hidden">
              <h3 className="font-semibold text-foreground mb-2">Why Johnny's?</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Breakfast, lunch & dinner — more than just breakfast</li>
                <li>Fresh, quality food made with care</li>
                <li>Community focused with great value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
