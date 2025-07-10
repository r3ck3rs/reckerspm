import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Network, Settings } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: <Monitor className="w-8 h-8 text-zinc-700" />,
      title: "Hardware & Software",
      description: "Van technische ruimtes tot AI-implementaties voor kleine bedrijven"
    },
    {
      icon: <Network className="w-8 h-8 text-zinc-700" />,
      title: "Digitale Strategie",
      description: "Strategische planning voor succesvolle digitale transformaties"
    },
    {
      icon: <Settings className="w-8 h-8 text-zinc-700" />,
      title: "Educatie & Begeleiding",
      description: "Praktische training en ondersteuning voor eigenaren en directeuren"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold text-zinc-900 mb-6">
            Over Peter Reckers
          </h2>
          <p className="text-large text-zinc-600 max-w-4xl mx-auto mb-6">
            Als digitale adviseur richt ik mij op eigenaren en directeuren van kleine bedrijven. 
            Ik begeleid je door alle aspecten van digitalisering: van technische ruimtes en hardware 
            tot software en AI-implementaties. Mijn aanpak omvat zowel strategische planning als praktische educatie.
          </p>
          <div className="bg-zinc-50 p-6 rounded-lg max-w-4xl mx-auto">
            <h3 className="font-semibold text-zinc-900 mb-3 text-center">Mijn waarden</h3>
            <p className="text-zinc-700 text-center">
              Ik werk <strong>onafhankelijk</strong> en transparant, zonder verborgen agenda's van grote bedrijven. 
              Waar mogelijk kies ik voor <strong>open source software</strong> en <strong>refurbished hardware</strong>, 
              goed voor je portemonnee én het milieu. Als Europese ondernemer help ik je navigeren door <strong>EU vriendelijke oplossingen</strong> die je privacy respecteren en je data veilig houden. 
              Ik werk volledig op basis van <strong>vertrouwen</strong>, zonder ingewikkelde contracten.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  {skill.icon}
                </div>
                <CardTitle className="font-semibold text-zinc-900">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-600">
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