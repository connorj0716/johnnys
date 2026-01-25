import { MapPin, Phone, Clock, Car, Users, ShoppingBag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const amenities = [
  { icon: Car, text: "Plenty of parking" },
  { icon: Users, text: "Cozy seating inside" },
  { icon: ShoppingBag, text: "Takeout welcome" },
]

export function LocationHours() {
  return (
    <section id="location" className="py-20 bg-[rgba(243,250,255,1)]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Find Us &amp; Visit!</h2>
          <p className="text-muted-foreground text-lg">We're your go-to spot near LBI and Stafford Township!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="overflow-hidden border-border">
            <div className="relative h-80 md:h-full min-h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.8834743284384!2d-74.26467492354969!3d39.70347960079066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19d8d8d8d8d8d%3A0x8d8d8d8d8d8d8d8d!2s100%20McKinley%20Ave%2C%20Manahawkin%2C%20NJ%2008050!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Johnny's Offshore Café Location"
                className="absolute inset-0"
              />
            </div>
          </Card>

          {/* Info */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Address</h3>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=100+McKinley+Ave,+Manahawkin,+NJ+08050"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      100 McKinley Ave
                      <br />
                      Manahawkin, NJ 08050
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Phone</h3>
                    <a
                      href="tel:6096228790"
                      className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                    >
                      (609) 622-8790
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>
                        <span className="font-semibold text-foreground">Monday:</span> 7am - 2pm
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Tues - Sun:</span> 7am - 6pm
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <div className="flex flex-wrap gap-4">
              {amenities.map((amenity) => (
                <div
                  key={amenity.text}
                  className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border border-border"
                >
                  <amenity.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{amenity.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
