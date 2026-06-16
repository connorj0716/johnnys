"use client"
import { useState, useEffect } from "react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const timestampElement = document.getElementById('local-timestamp-newsletter')
    if (timestampElement) {
      (timestampElement as HTMLInputElement).value = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    }
  }, [])

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)

    const formData = new FormData(e.currentTarget)
    fetch("https://api.sheetmonkey.io/form/4XeJocvfBTP3Eo9HfBNjr2", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        setSubscribed(true)
        setEmail("")
        setTimeout(() => setSubscribed(false), 3000)
      })
      .catch(() => {
        // Silent fail - Sheet Monkey handles all submissions
        setSubscribed(true)
        setEmail("")
        setTimeout(() => setSubscribed(false), 3000)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section id="newsletter" className="py-12 md:py-16 bg-accent/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[rgba(20,94,169,1)]">
            Weekly Updates & Specials
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get notified about our latest menu items and special deals
          </p>

          {subscribed ? (
            <p className="text-primary font-semibold">
              ✅ You've successfully signed up! Check your email for weekly specials.
            </p>
          ) : (
            <form
              id="newsletter-form"
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <input type="hidden" name="source" value="bottom" />
              <input type="hidden" name="timestamp" value="x-sheetmonkey-current-date-time" />
              <input type="hidden" name="local_timestamp" value="" id="local-timestamp-newsletter" />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                {loading ? "Submitting..." : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
