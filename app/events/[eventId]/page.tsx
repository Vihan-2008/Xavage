import EventPageClient from "./EventPageClient"

const eventDetails = [
  "deal-or-no-deal",
  "ready-set-sell",
  "stakeholders-showdown",
  "capital-carnage",
  "trojans-tank",
  "the-courting",
]

interface EventPageProps {
  params: {
    eventId: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  return <EventPageClient params={params} />
}

export async function generateStaticParams() {
  return eventDetails.map((eventId) => ({
    eventId,
  }))
}
