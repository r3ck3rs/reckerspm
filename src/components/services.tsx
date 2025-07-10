import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Server, Workflow, Shield } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
      title: "IT Projectmanagement",
      description: "Compleet projectlevenscyclus management voor IT initiatieven, van planning tot implementatie en onderhoud."
    },
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "Infrastructuur Consultancy",
      description: "Strategische planning en optimalisatie van IT infrastructuur ter ondersteuning van bedrijfsgroei en efficiëntie."
    },
    {
      icon: <Workflow className="w-8 h-8 text-blue-600" />,
      title: "Digitale Transformatie",
      description: "Organisaties begeleiden door digitale transformatie initiatieven met bewezen methodologieën."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Risicomanagement",
      description: "Uitgebreide risicobeoordeling en mitigatie strategieën voor technologie projecten."
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Diensten
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
              <CardHeader className="pb-4">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <CardTitle className="text-xl font-semibold text-slate-800 ml-3">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
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