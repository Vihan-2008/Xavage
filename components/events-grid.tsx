"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Clock, Zap } from "lucide-react"

const events = [
  {
    title: "Deal or No Deal",
    description: "Outsmart the banker in this high-stakes game of chance and strategy",
    category: "Strategy",
    participants: "1v1",
    duration: "30 min",
    prize: "₹5,000",
    color: "from-red-500/20 to-orange-500/20",
    icon: "🎯",
  },
  {
    title: "The Money-the-Money",
    description: "Navigate through financial challenges and investment decisions",
    category: "Finance",
    participants: "Teams",
    duration: "45 min",
    prize: "₹8,000",
    color: "from-green-500/20 to-emerald-500/20",
    icon: "💰",
  },
  {
    title: "Ready, Set? Sell!",
    description: "From Pitch to Profit: Land the ideal sales presentation",
    category: "Business",
    participants: "Solo",
    duration: "20 min",
    prize: "₹6,000",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: "📈",
  },
  {
    title: "Trojan's Tank",
    description: "Sink or Swim: Present your innovative business ideas",
    category: "Pitch",
    participants: "Teams",
    duration: "60 min",
    prize: "₹10,000",
    color: "from-purple-500/20 to-pink-500/20",
    icon: "🚀",
  },
  {
    title: "The Courting",
    description: "The Gavel is in your court: Legal strategy and argumentation",
    category: "Legal",
    participants: "Teams",
    duration: "90 min",
    prize: "₹7,500",
    color: "from-amber-500/20 to-yellow-500/20",
    icon: "⚖️",
  },
  {
    title: "Corporate Crisis",
    description: "Real-world business crisis management and decision making",
    category: "Management",
    participants: "Teams",
    duration: "75 min",
    prize: "₹9,000",
    color: "from-indigo-500/20 to-blue-500/20",
    icon: "🏢",
  },
  {
    title: "Stakeholders' Showdown",
    description: "Corporate Cryptography: Navigate complex stakeholder relationships",
    category: "Corporate",
    participants: "Teams",
    duration: "50 min",
    prize: "₹8,500",
    color: "from-teal-500/20 to-green-500/20",
    icon: "🤝",
  },
]

export function EventsGrid() {
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

                <Button className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary/30 group-hover:animate-glow">
                  <Zap className="w-4 h-4 mr-2" />
                  Register
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
