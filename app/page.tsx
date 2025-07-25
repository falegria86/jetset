import HeroSection from "@/components/hero-section"
import DynamicHeader from "@/components/dynamic-header"
import SocialLinks from "@/components/social-links"

export default function MainPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <DynamicHeader />
      <HeroSection />


      {/* Sobre la Banda */}
      <section id="banda" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/20 to-purple-900/20" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div>
            <h2 className="text-5xl text-center md:text-6xl font-black mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                SOBRE NOSOTROS
              </span>
            </h2>
            <p className="text-xl text-white mb-6 leading-relaxed text-center">
              Somos una banda apasionada por revivir la energía vibrante de las décadas de los 80 y 90. En cada presentación, transportamos al público a una época inolvidable, cargada de nostalgia, ritmo y alegría. Nuestro repertorio incluye los hits más icónicos del pop, el rock y las cumbias, cuidadosamente seleccionados para hacerte cantar, recordar y, sobre todo, bailar sin parar. Nos encanta compartir con la gente esos clásicos que marcaron generaciones, y convertir cada show en una verdadera fiesta retro.
            </p>
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

          <p className="text-pink-300 mb-4">📧 jetsetband@gmail.com 📱 +52 311 288 57 18</p>

          <p className="text-cyan-400 text-sm">© 2025 JETSET Todos los derechos reservados. ✨</p>
        </div>
      </footer>
    </div>
  )
}
