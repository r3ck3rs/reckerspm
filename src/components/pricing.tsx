"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, TrendingUp, Zap, ArrowRight } from "lucide-react"

export function Pricing() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-zinc-900 mb-6">
            Hoe werkt het?
          </h2>
          <p className="text-large text-zinc-600 max-w-3xl mx-auto">
            Flexibele digitale ondersteuning die meegroeit met je bedrijf. 
            Geen verrassingen, geen langdurige verplichtingen.
          </p>
        </div>

        {/* How it works - cleaner flow */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-zinc-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Kennismaking</h3>
              <p className="text-zinc-600">
                Gratis gesprek om je uitdagingen en doelen te bespreken
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zinc-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Plan en start</h3>
              <p className="text-zinc-600">
                We maken een plan en bepalen samen hoeveel uren je nodig hebt
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zinc-900 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2">Samen groeien</h3>
              <p className="text-zinc-600">
                Maandelijks evalueren en aanpassen naar de behoeften van je bedrijf
              </p>
            </div>
          </div>
        </div>

        {/* What you get - better organized */}
        <Card className="max-w-4xl mx-auto mb-12">
          <CardHeader className="text-center bg-zinc-50">
            <CardTitle className="font-bold text-zinc-900">
              Wat krijg je precies?
            </CardTitle>
            <CardDescription className="text-large">
              Transparante ondersteuning zonder verborgen kosten
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-zinc-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-zinc-700 mr-2" />
                  Flexibiliteit
                </h4>
                <ul className="space-y-2 text-zinc-700">
                  <li>• 5-20 uur per week beschikbaarheid</li>
                  <li>• Iedere maand aanpassen</li>
                  <li>• Geen lange contracten</li>
                  <li>• Direct inzetbaar</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-zinc-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-zinc-700 mr-2" />
                  Ondersteuning
                </h4>
                <ul className="space-y-2 text-zinc-700">
                  <li>• Strategisch advies</li>
                  <li>• Praktische implementatie</li>
                  <li>• Training en educatie</li>
                  <li>• Persoonlijke begeleiding</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <h3 className="font-bold text-zinc-900 mb-4">
            Klaar om te beginnen?
          </h3>
          <p className="text-zinc-600 mb-6 max-w-xl mx-auto">
            Start met een vrijblijvend gesprek. We bespreken je uitdagingen 
            en kijken hoe ik je bedrijf kan ondersteunen.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-zinc-900 hover:bg-zinc-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
          >
            Plan een Gratis Kennismaking
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}