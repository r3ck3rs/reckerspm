import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Network, Settings } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: <Monitor className="w-8 h-8 text-blue-600" />,
      title: "IT Projectmanagement",
      description: "End-to-end management van technologie projecten"
    },
    {
      icon: <Network className="w-8 h-8 text-blue-600" />,
      title: "Infrastructuur Planning",
      description: "Strategisch infrastructuur ontwerp en implementatie"
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Proces Optimalisatie",
      description: "Stroomlijning van operaties voor maximale efficiëntie"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Over Peter Reckers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Met uitgebreide ervaring in IT en infrastructuur projectmanagement lever ik alomvattende 
            oplossingen die bedrijfssucces stimuleren. Mijn expertise omvat complexe technologie 
            implementaties, infrastructuur optimalisatie en strategische projectplanning.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-800">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {skill.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}