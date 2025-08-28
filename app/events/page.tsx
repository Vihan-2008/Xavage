import { Navigation } from "@/components/navigation"
import { EventsGrid } from "@/components/events-grid"

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ALL <span className="text-primary">EVENTS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Explore our complete lineup of competitive events, each designed to challenge different skills and offer
            exciting prizes
          </p>
        </div>
      </section>

      <EventsGrid />
    </main>
  )
}
