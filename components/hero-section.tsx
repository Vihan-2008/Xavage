"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="glitch mb-4 text-4xl md:text-6xl lg:text-8xl" data-text="XAVAGE 25">
            XAVAGE 25
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground mb-6">11TH EDITION</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>15TH OCTOBER</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span>THE INTERNATIONAL SCHOOL BANGALORE</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 animate-glow group hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 ease-out"
            asChild
          >
            <Link href="/events">
              Register Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent hover:scale-105 hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 ease-out"
            asChild
          >
            <Link href="/events">View Events</Link>
          </Button>
        </div>

        {/* Floating stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "500+", label: "Participants" },
            { number: "15+", label: "Games" },
            { number: "₹50K+", label: "Prize Pool" },
            { number: "11th", label: "Edition" },
          ].map((stat, index) => (
            <div key={index} className="text-center animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
