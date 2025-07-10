"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="bg-zinc-900 text-white py-32 -mt-px">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Digitale transformatie voor kleine bedrijven
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-zinc-300">
            Ik ondersteun eigenaren en directeuren van kleine bedrijven in hun digitale avonturen van strategie tot educatie
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white hover:bg-zinc-100 text-zinc-900 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Aan de Slag
          </Button>
        </div>
      </div>
    </section>
  )
}