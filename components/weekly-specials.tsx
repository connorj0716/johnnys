'use client';

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function WeeklySpecials() {
  return (
    <section id="specials" className="py-16 bg-[rgba(235,244,250,1)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Weekly Specials</span>
          </div>
          <h2 className="text-3xl font-bold mb-2 text-center text-primary">Check Our Weekly Specials</h2>
          <p className="text-muted-foreground text-center">Great deals throughout the week!</p>
        </div>
        <div className="max-w-2xl mx-auto text-center mb-8">
          <p className="text-muted-foreground mb-4">
            Every week we feature fresh, limited-time deals like specialty pancakes, hot sandwiches, and more. Get the full weekly specials delivered straight to your inbox—be the first to know!
          </p>
         
          <Button className="text-base" size="lg" asChild>
            <a href="#newsletter">Get Full Weekly Specials – Join Newsletter!</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
