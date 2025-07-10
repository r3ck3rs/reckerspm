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
    <section id="home" className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-32 -mt-px">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            IT & Infrastructuur Projectmanagement
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Professionele projectmanagement diensten gespecialiseerd in IT en infrastructuur oplossingen
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Aan de Slag
          </Button>
        </div>
      </div>
    </section>
  )
}