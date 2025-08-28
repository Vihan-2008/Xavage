import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { EventsGrid } from "@/components/events-grid"
import { SponsorsSection } from "@/components/sponsors-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EventsGrid />
      <SponsorsSection />

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join XAVAGE 25?</h3>
            <p className="text-muted-foreground mb-6">Don't miss out on the ultimate gaming and tech experience</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold animate-glow">
              Register Now
            </button>
            <button className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-semibold">
              Contact Us
            </button>
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
