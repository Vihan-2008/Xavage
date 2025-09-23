import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EventsGrid } from "@/components/events-grid"
import { SponsorsSection } from "@/components/sponsors-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <HeroSection />
      <EventsGrid />
      <SponsorsSection />

      <div className="fixed bottom-6 right-6 z-40">
        <Link href="https://www.tisb.org/" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/tisb-logo.png"
            alt="TISB Logo"
            width={80}
            height={80}
            className="object-contain hover:scale-105 transition-transform duration-200 drop-shadow-lg"
          />
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join XAVAGE 25?</h3>
            <p className="text-muted-foreground mb-6">Don't miss out on the ultimate gaming and tech experience</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow" size="lg" asChild>
              <Link href="/events">Register Now</Link>
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              size="lg"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="border-t border-border pt-8 text-sm text-muted-foreground">
            <p>&copy; 2025 XAVAGE 25. All rights reserved.</p>
            <p className="mt-2">The International School Bangalore</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
