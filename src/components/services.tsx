import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Server, Workflow, Shield } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Laptop className="w-8 h-8 text-zinc-700" />,
      title: "Technische Implementatie",
      description: "Van technische ruimtes en hardware tot software en AI-oplossingen, aangepast aan de behoeften van kleine bedrijven."
    },
    {
      icon: <Server className="w-8 h-8 text-zinc-700" />,
      title: "Digitale Strategie",
      description: "Strategische begeleiding voor eigenaren en directeuren bij het vormgeven van hun digitale toekomst."
    },
    {
      icon: <Workflow className="w-8 h-8 text-zinc-700" />,
      title: "Educatie & Training",
      description: "Praktische workshops en training om teams en leiderschap digitaal vaardig te maken."
    },
    {
      icon: <Shield className="w-8 h-8 text-zinc-700" />,
      title: "Persoonlijke Begeleiding",
      description: "Hands-on ondersteuning en advies tijdens het hele digitale transformatieproces."
    }
  ]

  return (
    <section id="services" className="py-20 bg-zinc-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-zinc-900 mb-6">
            Diensten
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-zinc-900">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <CardTitle className="font-semibold text-zinc-900 ml-3">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}