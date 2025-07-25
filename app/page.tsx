import Image from "next/image"
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import DynamicHeader from "@/components/dyncamic-header"
import SocialLinks from "@/components/social-links"

export default function Page() {
  const conciertos = [
    {
      fecha: "15 FEB 2025",
      venue: "Club Retro Night",
      ciudad: "Madrid",
      hora: "22:00",
      precio: "€15",
    },
    {
      fecha: "28 FEB 2025",
      venue: "Sala Neon Dreams",
      ciudad: "Barcelona",
      hora: "21:30",
      precio: "€18",
    },
    {
      fecha: "14 MAR 2025",
      venue: "Teatro Vintage",
      ciudad: "Valencia",
      hora: "20:00",
      precio: "€20",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <DynamicHeader />
      <HeroSection />

      {/* Próximos Conciertos */}
      <section id="conciertos" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
              PRÓXIMOS SHOWS
            </span>
          </h2>

          <div className="grid gap-6 md:gap-8">
            {conciertos.map((concierto, index) => (
              <Card
                key={index}
                className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-pink-500/50 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg px-4 py-2">
                          {concierto.fecha}
                        </Badge>
                        <span className="text-2xl font-bold text-cyan-400">{concierto.hora}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{concierto.venue}</h3>
                      <div className="flex items-center gap-2 text-pink-300">
                        <MapPin className="h-5 w-5" />
                        <span className="text-lg">{concierto.ciudad}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold text-yellow-400">{concierto.precio}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre la Banda */}
      <section id="banda" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/20 to-purple-900/20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  SOBRE NOSOTROS
                </span>
              </h2>
              <p className="text-xl text-pink-300 mb-6 leading-relaxed">
                Somos una banda tributo que revive la energía y el glamour de los años 80. Con más de 5 años de
                experiencia, hemos conquistado escenarios por toda España interpretando los hits más icónicos de la
                década dorada del pop.
              </p>
              <p className="text-lg text-cyan-300 mb-8">
                Desde Madonna hasta Duran Duran, desde Depeche Mode hasta Cyndi Lauper, recreamos fielmente el sonido y
                la estética que marcó una generación.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-pink-300">Conciertos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">5</div>
                  <div className="text-pink-300">Años</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-cyan-500/30 rounded-lg blur-xl" />
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="JETSET en concierto"
                width={500}
                height={400}
                className="relative z-10 rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-yellow-900/20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">GALERÍA</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fotos de conciertos */}
            <div className="relative group overflow-hidden rounded-lg border-2 border-pink-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="JETSET en concierto"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative group overflow-hidden rounded-lg border-2 border-cyan-500/30 hover:border-pink-400/50 transition-all duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Show en vivo"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative group overflow-hidden rounded-lg border-2 border-yellow-500/30 hover:border-purple-400/50 transition-all duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Público disfrutando"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative group overflow-hidden rounded-lg border-2 border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Instrumentos vintage"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative group overflow-hidden rounded-lg border-2 border-pink-500/30 hover:border-yellow-400/50 transition-all duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Backstage"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="relative group overflow-hidden rounded-lg border-2 border-cyan-500/30 hover:border-pink-400/50 transition-all duration-300">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Festival de música"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Video destacado */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative group overflow-hidden rounded-lg border-2 border-gradient-to-r from-pink-500 to-cyan-500">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-xl font-bold text-cyan-300 mb-2">Video Destacado</p>
                  <p className="text-pink-300">Nuestro último concierto en Madrid</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer/Contacto */}
      <footer
        id="contacto"
        className="py-16 px-4 border-t border-pink-500/30 bg-gradient-to-r from-purple-900/50 to-black"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">SÍGUENOS</span>
          </h2>

          <SocialLinks />

          <p className="text-pink-300 mb-4">📧 jetset@email.com | 📱 +34 666 80 80 80</p>

          <p className="text-cyan-400 text-sm">© 2025 JETSET. Reviviendo los 80s desde 2020 ✨</p>
        </div>
      </footer>
    </div>
  )
}
