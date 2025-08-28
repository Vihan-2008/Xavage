import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-primary">REGISTER</span> NOW
            </h1>
            <p className="text-xl text-muted-foreground">
              Secure your spot at XSAVAGE 25 - The ultimate gaming experience awaits!
            </p>
          </div>

          <Card className="bg-card/50 border-border/50 animate-float">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Registration Form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="school">School/Institution</Label>
                <Input id="school" placeholder="Enter your school or institution" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="grade">Grade/Year</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9">Grade 9</SelectItem>
                    <SelectItem value="10">Grade 10</SelectItem>
                    <SelectItem value="11">Grade 11</SelectItem>
                    <SelectItem value="12">Grade 12</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="events">Preferred Events (Select multiple)</Label>
                <Textarea id="events" placeholder="List the events you're interested in participating in" rows={3} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Gaming/Competition Experience</Label>
                <Textarea
                  id="experience"
                  placeholder="Tell us about your gaming or competition experience (optional)"
                  rows={3}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions and privacy policy
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="updates" />
                <Label htmlFor="updates" className="text-sm">
                  I want to receive updates about XSAVAGE 25 and future events
                </Label>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 animate-glow" size="lg">
                Complete Registration
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>Registration fee: ₹500 per participant</p>
                <p>Payment details will be sent after form submission</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
