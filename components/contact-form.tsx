"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Phone, MapPin, Clock } from "lucide-react"

export function ContactForm() {
  const [formType, setFormType] = useState<"general" | "business" | "hiring">("general")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get in Touch with Johnny's Offshore Café
        </h1>
        <p className="text-muted-foreground">
          We'd love to hear from you. Reach out with any questions or inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Address</h3>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=100+McKinley+Ave,+Manahawkin,+NJ+08050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  100 McKinley Ave<br />
                  Manahawkin, NJ 08050
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Phone</h3>
                <a href="tel:+16096228790" className="text-muted-foreground hover:text-primary transition-colors">
                  (609) 622-8790
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Monday: 7:00 AM - 2:00 PM<br />
                  Tuesday - Sunday: 7:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.8847892847!2d-74.26713368461894!3d39.70347797945726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ee1c0e0e0e0e%3A0x0e0e0e0e0e0e0e0e!2s100%20McKinley%20Ave%2C%20Manahawkin%2C%20NJ%2008050!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
              title="Johnny's Offshore Cafe Location"
            />
          </div>
        </Card>

        {/* Contact Forms */}
        <Card className="p-6">
          <div className="flex gap-2 mb-6">
            <Button
              variant={formType === "general" ? "default" : "outline"}
              onClick={() => setFormType("general")}
              className="flex-1"
            >
              General
            </Button>
            <Button
              variant={formType === "business" ? "default" : "outline"}
              onClick={() => setFormType("business")}
              className="flex-1"
            >
              Business
            </Button>
            <Button
              variant={formType === "hiring" ? "default" : "outline"}
              onClick={() => setFormType("hiring")}
              className="flex-1"
            >
              Hiring
            </Button>
          </div>

          {submitted ? (
            <div className="text-center py-8">
              <p className="text-lg font-medium text-foreground mb-2">Thank you for contacting us!</p>
              <p className="text-muted-foreground mb-4">We'll get back to you soon.</p>
              <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" required placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" type="email" required placeholder="your@email.com" />
              </div>

              {formType === "hiring" && (
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>
              )}

              {formType === "business" && (
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">Inquiry Type</label>
                  <select 
                    id="inquiryType" 
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  >
                    <option>Catering</option>
                    <option>Partnership</option>
                    <option>Events</option>
                    <option>Other</option>
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  id="message" 
                  required 
                  placeholder={
                    formType === "hiring" 
                      ? "Tell us about your experience..." 
                      : "How can we help you?"
                  } 
                  rows={5} 
                />
              </div>

              {formType === "hiring" && (
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium mb-2">Resume (Optional)</label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" />
                </div>
              )}

              <Button type="submit" className="w-full">
                {formType === "general" && "Send Message"}
                {formType === "business" && "Submit Inquiry"}
                {formType === "hiring" && "Submit Application"}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  )
}
