"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            OUR <span className="text-primary">SPONSORS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partnering with industry leaders to bring you the ultimate gaming experience
          </p>
        </div>

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
                    src={sponsor.logo || "/placeholder.svg"}
                    alt={sponsor.name}
                    className="w-full h-16 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
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
              Join us in creating an unforgettable experience. Partner with XSAVAGE 25 and reach our passionate gaming
              community.
            </p>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Sponsorship Opportunities
          </Button>
        </div>
      </div>
    </section>
  )
}
