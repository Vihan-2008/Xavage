"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

const sponsors = [
  {
    name: "Nambiar Builders",
    description: "Dedication for Success | goes here",
    tier: "Title Sponsor",
    logo: "/nambiar-builders-logo.png",
    website: "#",
  },
  {
    name: "TechCorp",
    description: "Innovation in Technology Solutions",
    tier: "Gold Sponsor",
    logo: "/techcorp-modern-logo.png",
    website: "#",
  },
  {
    name: "GameZone",
    description: "Ultimate Gaming Experience",
    tier: "Silver Sponsor",
    logo: "/gamezone-gaming-logo.png",
    website: "#",
  },
  {
    name: "Digital Dynamics",
    description: "Powering Digital Transformation",
    tier: "Bronze Sponsor",
    logo: "/digital-dynamics-tech-logo.png",
    website: "#",
  },
]

export function SponsorsSection() {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-background/50 border-border/50 hover:border-primary/50 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                  <img
                    src={`/abstract-geometric-shapes.png?key=holu6&height=64&width=200&query=${encodeURIComponent(sponsor.name + " logo")}`}
                    alt={sponsor.name}
                    className="w-full h-16 object-contain transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{sponsor.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{sponsor.description}</p>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                    {sponsor.tier}
                  </span>
                </div>

                <Button size="sm" variant="ghost" className="w-full hover:bg-primary/10 hover:text-primary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Join us in creating an unforgettable experience. Partner with XAVAGE 25 and reach our passionate gaming
              community.
            </p>
          </div>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Sponsorship Opportunities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
