"use client"
import { useState } from "react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return

    setError("")
    setLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok && data.status === "success") {
        setSubscribed(true)
        setEmail("")
        setTimeout(() => setSubscribed(false), 3000)
      } else {
        setError(data.message || "Something went wrong. Try again?")
      }
    } catch (err) {
      setError("Oops! Check your connection.")
    } finally {
      setLoading(false)
    }
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

          {error && <p className="text-red-500 mt-3">{error}</p>}
        </div>
      </div>
    </section>
  )
}
