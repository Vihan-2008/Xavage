"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Clock, Zap } from "lucide-react"
import { EventDetailsModal } from "./event-details-modal"

const events = [
  {
    id: "deal-or-no-deal",
    title: "Deal or No Deal",
    description:
      "Think you can outplay the market? Step into the war room where clubs are made and legends are bought.",
    category: "Strategy",
    participants: "Teams of 3-4",
    duration: "3 rounds",
    prize: "₹12,000",
    color: "from-red-500/20 to-orange-500/20",
    icon: "⚽",
    registrationLink: "https://forms.cloud.microsoft/r/MHafHdA1UT",
  },
  {
    id: "ready-set-sell",
    title: "Ready? Set? Sell!",
    description: "Get ready to unleash your creativity and showcase your team's ultimate marketing genius.",
    category: "Marketing",
    participants: "Teams of 3-4",
    duration: "3 rounds",
    prize: "₹12,000",
    color: "from-purple-500/20 to-pink-500/20",
    icon: "📢",
    registrationLink: "https://forms.cloud.microsoft/r/ngBg5qbn8g",
  },
  {
    id: "stakeholders-showdown",
    title: "Stakeholder's Showdown",
    description: "When giants clash, the world watches. Navigate the fierce rivalry of Apple vs Samsung.",
    category: "Corporate",
    participants: "Teams of 3-4",
    duration: "3 rounds",
    prize: "₹12,000",
    color: "from-blue-500/20 to-purple-500/20",
    icon: "🤝",
    registrationLink: "https://forms.cloud.microsoft/r/N7MYsDUpSz",
  },
  {
    id: "capital-carnage",
    title: "Capital Carnage",
    description:
      "Enter the high-pressure world of corporate decision-making where every choice can lead to success or collapse.",
    category: "Business",
    participants: "Teams of 2-4",
    duration: "3 rounds",
    prize: "₹12,000",
    color: "from-green-500/20 to-teal-500/20",
    icon: "📊",
    registrationLink: "https://forms.cloud.microsoft/r/Xu7qsFYzpv",
  },
  {
    id: "trojans-tank",
    title: "Trojan's Tank",
    description:
      "The spotlight is on, the clock is ticking, and the investors are waiting. Defend your startup against tough questions.",
    category: "Pitch",
    participants: "Teams of 2-4",
    duration: "2 rounds",
    prize: "₹12,000",
    color: "from-red-500/20 to-yellow-500/20",
    icon: "🚀",
    registrationLink: "https://forms.cloud.microsoft/r/rjwd8EjEmW",
  },
  {
    id: "the-courting",
    title: "The Courting",
    description:
      "In this ultimate showdown, participants must get into real-world legal scenarios, think quickly and argue even faster.",
    category: "Legal",
    participants: "Teams of 4",
    duration: "3 rounds",
    prize: "₹12,000",
    color: "from-amber-500/20 to-orange-500/20",
    icon: "⚖️",
    registrationLink: "https://forms.cloud.microsoft/r/PL82hZWn31",
  },
]

export function EventsGrid() {
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            OUR <span className="text-primary">EVENTS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Challenge yourself across diverse competitions designed to test strategy, creativity, and business acumen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className={`group hover:scale-105 transition-all duration-300 bg-gradient-to-br ${event.color} border-border/50 hover:border-primary/50 animate-float`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{event.icon}</div>
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {event.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{event.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary">{event.prize}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10 bg-transparent"
                    onClick={() => handleViewDetails(event)}
                  >
                    View Details
                  </Button>
                  <Button
                    className="flex-1 smooth-button bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary/30 group-hover:animate-enhanced-glow"
                    onClick={() => window.open(event.registrationLink, "_blank")}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Register
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventDetailsModal event={selectedEvent} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  )
}
