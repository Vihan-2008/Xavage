"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const sponsors = [
  {
    name: "Simpli Namdharis",
    logo: "/images/simpli-namdharis-logo.jpeg",
  },
  {
    name: "Nalli",
    logo: "/images/nalli-logo.jpeg",
  },
]

export function SponsorsSection() {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
          <p className="text-muted-foreground">Thank you to our amazing sponsors who make XAVAGE 25 possible</p>
        </div>

        <div className="flex justify-center items-center gap-12 mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-all duration-300 animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-8 bg-background/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300">
                <Image
                  src={sponsor.logo || "/placeholder.svg"}
                  alt={sponsor.name}
                  width={200}
                  height={120}
                  className="object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
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
