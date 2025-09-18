"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Clock, Zap } from "lucide-react"
import Image from "next/image"

interface EventDetailsModalProps {
  event: {
    id: string
    title: string
    description: string
    category: string
    participants: string
    duration: string
    prize: string
    registrationLink: string
    detailedInfo?: {
      rounds: string[]
      rules: string[]
      schedule?: string
      image?: string
    }
  }
  isOpen: boolean
  onClose: () => void
}

const eventDetails = {
  "deal-or-no-deal": {
    rounds: [
      "Round 1: The Draft - Each team creates their dream XI from Europe's top 5 leagues with chemistry multipliers",
      "Round 2: The Auction - Top 15 squads enter high-stakes auction with marquee players and global cards",
      "Round 3: The Final Challenge - Secret high-stakes challenge revealed at kickoff decides the winner",
    ],
    rules: ["Maximum Teams: 20", "Team Size: 3-4", "Teams balance player chemistry with bold risks to dominate"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jf6oGMlyn2TqPC2pSeqOTsxGdpvaPb.png",
  },
  "ready-set-sell": {
    rounds: [
      "Round 1: Pick a random product and create a 45-second video commercial in one hour",
      "Round 2: Take on a brand with surprise ambassador - use any marketing form for standout pitch",
      "Round 3: Face the ultimate ambush! Adapt product and brand to sudden crisis",
    ],
    rules: [
      "Maximum Teams: 15",
      "Team Size: 3-4",
      "Judged on creativity, originality, concept, relevance, presentation and audience engagement",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TDaUyUa6eXNltG9qbZ0lTSs4BLsCyA.png",
  },
  "stakeholders-showdown": {
    rounds: [
      "Round 1: The Initial Case - Study Apple vs Samsung case and prepare arguments for assigned side",
      "Round 2: Crisis Strikes - New twists revealed, teams respond immediately with strategies",
      "Round 3: The Final Showdown - From courtroom battles to public addresses, ultimate test",
    ],
    rules: [
      "Maximum Teams: 8",
      "Team Size: 3-4",
      "Crisis committee format - spontaneous, unpredictable, and cutthroat",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n9zqPXSVzU9bMygc4FH0dLPWPEe4zQ.png",
  },
  "capital-carnage": {
    rounds: [
      "Round 1: Crisis Case Challenge - Face analytical problems testing finance, economics, and business strategy",
      "Round 2: Investment Pitch Arena - Craft strategic proposals, identify risks, plan for the future",
      "Round 3: Final collaboration round - Solve high-stakes corporate crisis with time constraints",
    ],
    rules: ["Maximum Teams: 10", "Team Size: 2-4", "Test of leadership and strategy in face of uncertainty"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PvMSDLfrLCRIktvgyW8wJx8ISD6hfN.png",
  },
  "trojans-tank": {
    rounds: [
      "Round 1: Teams submit startup ideas answering essentials - what it is, target audience, product goal",
      "Round 2: Final 15 teams pitch live to investors in 10-minute presentation + Q&A",
    ],
    rules: [
      "Maximum Teams: Unlimited",
      "Team Size: 2-4",
      "Evaluated on persuasiveness, creativity and business strategy",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J8u8jw9P3d8qSeKINiM5tr7wkI7p2C.png",
  },
  "the-courting": {
    rounds: [
      "Round 1: All 10 teams receive legal case brief 24 hours before and prepare arguments",
      "Round 2: Small round debates, bottom 4 teams eliminated based on points",
      "Round 3: Final knockout format one-on-one debate until one team remains",
    ],
    rules: [
      "Maximum Teams: 10",
      "Team Size: 4 only",
      "Test of endurance - raw skill under pressure in courtroom setting",
    ],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3qUC5zaGYCitU5SZLvyHbRAWYCD5Kv.png",
  },
}

export function EventDetailsModal({ event, isOpen, onClose }: EventDetailsModalProps) {
  const details = eventDetails[event.id as keyof typeof eventDetails]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center justify-between">
            {event.title}
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              {event.category}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {details?.image && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image src={details.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>{event.participants}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-accent" />
              <span>{event.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary">{event.prize}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground">{event.description}</p>
          </div>

          {details?.rounds && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Competition Rounds</h3>
              <div className="space-y-3">
                {details.rounds.map((round, index) => (
                  <div key={index} className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-sm">{round}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {details?.rules && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Rules & Requirements</h3>
              <ul className="space-y-2">
                {details.rules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              className="flex-1 bg-primary hover:bg-primary/90"
              onClick={() => window.open(event.registrationLink, "_blank")}
            >
              <Zap className="w-4 h-4 mr-2" />
              Register Now
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
