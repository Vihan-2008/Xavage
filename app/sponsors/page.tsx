import { Navigation } from "@/components/navigation"
import { SponsorsSection } from "@/components/sponsors-section"

export default function SponsorsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            OUR <span className="text-primary">SPONSORS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Meet the amazing partners who make XAVAGE 25 possible
          </p>
        </div>
      </section>

      <SponsorsSection />
    </main>
  )
}
