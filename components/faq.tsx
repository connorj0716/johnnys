"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { siteConfig } from "@/lib/config"

const faqs = [
  { q: "What are your hours?", a: "" },
  { q: "Do you offer online ordering?", a: "" },
  { q: "Where are you located?", a: "" },
  { q: "Do you take reservations?", a: "" },
  { q: "How can I contact you?", a: "" },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const answers = [
    siteConfig.hours.map(h => h.days + ": " + h.time).join(". "),
    siteConfig.orderOnline ? "Yes, you can order online through our website. Click the Order Online button to get started." : "Please call us at " + siteConfig.phone + " to place an order.",
    "We are located at " + siteConfig.address.street + ", " + siteConfig.address.city + ", " + siteConfig.address.state + " " + siteConfig.address.zip + ". Click Get Directions for easy navigation.",
    "Please call us at " + siteConfig.phone + " to inquire about reservations or large party accommodations.",
    "You can reach us by phone at " + siteConfig.phone + ", visit us in person, or use the contact form on our website.",
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-2" style={{fontFamily: "var(--font-heading)"}}>Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-10">Everything you need to know</p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground" style={{fontFamily: "var(--font-heading)"}}>{faq.q}</span>
                <ChevronDown className={"h-5 w-5 text-muted-foreground transition-transform " + (open === i ? "rotate-180" : "")} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-muted-foreground">{answers[i]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
