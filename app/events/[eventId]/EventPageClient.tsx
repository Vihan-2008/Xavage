"use client"

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Clock, Users, Trophy, MapPin, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const eventDetails = {
  "deal-or-no-deal": {
    title: "Deal or No Deal",
    subtitle: "Think you can outplay the market? Step into the war room where clubs are made and legends are bought.",
    description:
      "Deal or No Deal isn't about watching football, it's about building it. This is not just an auction. It's a mind game where strategy, stats, and nerve collide.",
    fullDescription:
      "Teams that balance player chemistry with bold risks will dominate, while those who hesitate will watch the championship slip away. Every round brings fresh surprises, every decision echoes until the final whistle.",
    tagline: "Your squad. Your money. Your legacy.",
    category: "Strategy",
    participants: "Teams of 3-4",
    maxTeams: "20",
    duration: "3 rounds",
    prize: "₹5,000",
    color: "from-red-500/20 to-orange-500/20",
    icon: "⚽",
    registrationLink: "https://forms.cloud.microsoft/r/MHafHdA1UT",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jf6oGMlyn2TqPC2pSeqOTsxGdpvaPb.png",
    rounds: [
      {
        title: "Round 1: The Draft",
        description:
          "Each team will create their dream XI from Europe's top 5 leagues. But it's not just about picking big names — chemistry is everything. To raise the stakes, secret multipliers for ratings and chemistry will be revealed on the day, shaking up the game.",
      },
      {
        title: "Round 2: The Auction",
        description:
          "The top 15 squads now enter a high-stakes auction. Each team must build around a marquee player and can bid for special global cards. But beware - unexpected twists will challenge your strategy and force you to adapt. At the end, the bottom 7 teams are eliminated.",
      },
      {
        title: "Round 3: The Final Challenge",
        description:
          "Only 8 teams remain. A secret high-stakes challenge, revealed at kickoff, will decide who rises and who falls. Adapt fast, or risk losing it all. Only one club will walk away with glory.",
      },
    ],
  },
  "ready-set-sell": {
    title: "Ready? Set? Sell!",
    subtitle: "Get ready to unleash your creativity and showcase your team's ultimate marketing genius.",
    description:
      "This is the arena where ideas meet innovation, strategies face the spotlight, and your imagination turns ordinary products into extraordinary campaigns.",
    fullDescription:
      "Compete across thrilling rounds that test your wit, adaptability, and advertising flair. The spotlight is yours.",
    tagline: "Is your team ready to sell?",
    category: "Marketing",
    participants: "Teams of 3-4",
    maxTeams: "15",
    duration: "3 rounds",
    prize: "₹6,000",
    color: "from-purple-500/20 to-pink-500/20",
    icon: "📢",
    registrationLink: "https://forms.cloud.microsoft/r/ngBg5qbn8g",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TDaUyUa6eXNltG9qbZ0lTSs4BLsCyA.png",
    rounds: [
      {
        title: "Round 1",
        description:
          "Pick a random product from the mystery box and create a 45-second video commercial in just one hour. Present your ad in a 2-3 minute pitch, highlighting your product, target audience, and marketing strategy. The top 10 teams advance.",
      },
      {
        title: "Round 2",
        description:
          "Take on a brand and a surprise ambassador drawn at random. Use any form of marketing, from skits and songs to commercials and product placements to deliver a standout pitch. The top 5 campaigns move to the finale.",
      },
      {
        title: "Round 3",
        description:
          "Face the ultimate ambush! Teams must adapt their product and brand to a sudden crisis; from ambassador scandals to new legislation. Think fast, pitch boldly, and convince the judges you can sell against all odds.",
      },
    ],
  },
  "stakeholders-showdown": {
    title: "Stakeholder's Showdown",
    subtitle: "When giants clash, the world watches.",
    description:
      "The Showdown throws participants straight into the heart of one of the fiercest rivalries of our time: Apple vs Samsung.",
    fullDescription:
      "Behind the glossy products lies a battlefield of innovation, lawsuits, market share, and power struggles. In this event, you are not a spectator, you are a stakeholder.",
    tagline: "Every Stake has a price, what's yours?",
    category: "Corporate",
    participants: "Teams of 3-4",
    maxTeams: "8",
    duration: "3 rounds",
    prize: "₹8,500",
    color: "from-blue-500/20 to-purple-500/20",
    icon: "🤝",
    registrationLink: "https://forms.cloud.microsoft/r/N7MYsDUpSz",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n9zqPXSVzU9bMygc4FH0dLPWPEe4zQ.png",
    rounds: [
      {
        title: "Round 1: The Initial Case",
        description: "Teams study the Apple vs Samsung case study and prepare to argue for their assigned side.",
      },
      {
        title: "Round 2: Crisis Strikes",
        description:
          "New twists and developments are revealed on the spot. Teams must respond immediately, presenting strategies and statements with no prep time.",
      },
      {
        title: "Round 3: The Final Showdown",
        description:
          "From courtroom battles to public addresses, stakeholders face their toughest test yet. The winner is decided based on which side pleads its case best.",
      },
    ],
  },
  "capital-carnage": {
    title: "Capital Carnage",
    subtitle: "The Ultimate Business Showdown",
    description:
      "Enter the high-pressure world of corporate decision-making where every choice can lead to success or collapse.",
    fullDescription:
      "In Capital Carnage, teams compete against each other to solve real-world business problems and craft strategies in time-sensitive scenarios. With unexpected crises, market disruptions, and last-minute challenges, teams must think critically, adapt quickly, and work collaboratively to emerge victorious.",
    tagline: "The question is, when the market turns against you, will you hold or fold?",
    category: "Business",
    participants: "Teams of 2-4",
    maxTeams: "10",
    duration: "3 rounds",
    prize: "₹9,000",
    color: "from-green-500/20 to-teal-500/20",
    icon: "📊",
    registrationLink: "https://forms.cloud.microsoft/r/Xu7qsFYzpv",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PvMSDLfrLCRIktvgyW8wJx8ISD6hfN.png",
    rounds: [
      {
        title: "Round 1: Crisis Case Challenge",
        description:
          "Teams will face analytical problems that test their understanding of finance, economics, and business strategy. Just when you think you've got it figured out, unexpected developments will force you to rethink your approach.",
      },
      {
        title: "Round 2: Investment Pitch Arena",
        description:
          "Each team will be given a sector where they'll craft strategic proposals, identify risks, and plan for the future.",
      },
      {
        title: "Round 3",
        description:
          "In the final round, collaboration is key. Teams come together to solve a high-stakes corporate crisis, with time constraints, unforeseen obstacles and incomplete information.",
      },
    ],
  },
  "trojans-tank": {
    title: "Trojan's Tank",
    subtitle: "The spotlight is on, the clock is ticking, and the investors are waiting.",
    description:
      "Trojan's Tank is more than a pitch competition-it's a battle of ideas where only the boldest survive.",
    fullDescription:
      "Creativity may open the door, but only smart strategy, sharp execution, and compelling delivery will win over the investors. Step into the shoes of a founder and defend your startup against tough questions and skeptical minds.",
    tagline: "Make your move now!",
    category: "Pitch",
    participants: "Teams of 2-4",
    maxTeams: "Unlimited",
    duration: "2 rounds",
    prize: "₹10,000",
    color: "from-red-500/20 to-yellow-500/20",
    icon: "🚀",
    registrationLink: "https://forms.cloud.microsoft/r/rjwd8EjEmW",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J8u8jw9P3d8qSeKINiM5tr7wkI7p2C.png",
    rounds: [
      {
        title: "Round 1",
        description:
          "Teams submit their startup ideas in advance, answering the essentials—what it is, the target audience and the goal of the product. From all submissions, the top 15 teams will advance to the main stage to showcase their product.",
      },
      {
        title: "Round 2",
        description:
          "The final 15 teams pitch will be heading to the TISB boardroom live to the investors in a 10 minute presentation +Q&A. Precision, passion, and potential will decide who claims the crown. These teams will be evaluated on their persuasiveness, creativity and business strategy.",
      },
    ],
  },
  "the-courting": {
    title: "The Courting",
    subtitle:
      "In this ultimate showdown, participants must get into real-world legal scenarios, think quickly and argue even faster.",
    description: "There are no second chances and no safety nets; it's all about raw skill under pressure.",
    fullDescription:
      "Every word, every comeback, and every strategy could change the outcome within this event. The Courting isn't just a competition; it's a test of endurance that tests your skills to convey your theory.",
    tagline: "The court is open. The stage is set. Will you rise and conquer?",
    category: "Legal",
    participants: "Teams of 4",
    maxTeams: "10",
    duration: "3 rounds",
    prize: "₹7,500",
    color: "from-amber-500/20 to-orange-500/20",
    icon: "⚖️",
    registrationLink: "https://forms.cloud.microsoft/r/PL82hZWn31",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3qUC5zaGYCitU5SZLvyHbRAWYCD5Kv.png",
    rounds: [
      {
        title: "Round 1",
        description:
          "All 10 teams receive a legal case brief 24 hours before the event and are assigned portfolios of different parties participating in the case.",
      },
      {
        title: "Round 2",
        description:
          "All 10 teams then participate in a small round of on spot debates, bottom 4 teams will eliminated based on the points scored during the first 2 rounds of debate.",
      },
      {
        title: "Round 3",
        description:
          "The final main round will consist of a knockout format one on one debate on a set of cases, until one team remains.",
      },
    ],
  },
}

interface EventPageProps {
  params: {
    eventId: string
  }
}

export default function EventPageClient({ params }: EventPageProps) {
  const event = eventDetails[params.eventId as keyof typeof eventDetails]

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${event.color}`}></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" className="mb-4" asChild>
              <Link href="/events">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Events
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{event.icon}</div>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {event.category}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">{event.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{event.subtitle}</p>
              <p className="text-lg mb-6">{event.description}</p>
              <p className="text-lg mb-8">{event.fullDescription}</p>

              <div className="text-2xl font-bold text-primary mb-8 italic">"{event.tagline}"</div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 animate-glow group hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 ease-out"
                onClick={() => window.open(event.registrationLink, "_blank")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Register Now
              </Button>
            </div>

            <div className="relative">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={600}
                height={800}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Team Size</div>
                <div className="text-muted-foreground">{event.participants}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Max Teams</div>
                <div className="text-muted-foreground">{event.maxTeams}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Duration</div>
                <div className="text-muted-foreground">{event.duration}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Prize Pool</div>
                <div className="text-primary font-bold text-lg">{event.prize}</div>
              </CardContent>
            </Card>
          </div>

          {/* Competition Rounds */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Competition Rounds</h2>
            <div className="space-y-6">
              {event.rounds.map((round, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-primary">{round.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{round.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Event Schedule & Rules */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Event Schedule
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Registration</span>
                    <span className="text-muted-foreground">7:00 - 8:00 a.m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Opening Ceremony</span>
                    <span className="text-muted-foreground">8:00 - 9:00 a.m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session 1 - Events</span>
                    <span className="text-muted-foreground">9:30 - 1:30 p.m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lunch Break</span>
                    <span className="text-muted-foreground">1:30 - 2:30 p.m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session 2 - Events</span>
                    <span className="text-muted-foreground">2:30 - 4:00 p.m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Closing Ceremony</span>
                    <span className="text-muted-foreground">4:15 - 5:00 p.m.</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Socials</span>
                    <span className="text-muted-foreground">5:00 - 7:00 p.m.</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Important Information
                </h3>
                <div className="space-y-3 text-sm">
                  <p>• Registration closes on 10th October</p>
                  <p>• Participants must be in formal attire</p>
                  <p>• Each school delegation should have a teacher chaperone</p>
                  <p>• Students must carry laptops and valid school ID</p>
                  <p>• Results announced on 15th October</p>
                  <p>• Food and refreshments provided</p>
                  <p>• Registration is first-come, first-serve basis</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Compete?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join us on 15th October at The International School Bangalore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 animate-glow group hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 ease-out"
                onClick={() => window.open(event.registrationLink, "_blank")}
              >
                <Zap className="w-5 h-5 mr-2" />
                Register for {event.title}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                asChild
              >
                <Link href="/events">View All Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
