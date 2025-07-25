import { Button } from "@/components/ui/button"
import Image from "next/image"
import StarfieldVideo from "@/components/starfield-video"

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Starfield Video Background */}
            <div className="absolute inset-0 bg-black">
                <StarfieldVideo />
                {/* Overlay con gradientes neón para mantener la estética */}
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                {/* Logo - Much Bigger and Clean */}
                <div className="mb-12 flex justify-center">
                    <Image
                        src="/jetset-logo.png"
                        alt="JETSET Logo"
                        width={1000}
                        height={500}
                        className="max-w-full h-auto drop-shadow-2xl"
                        priority
                    />
                </div>

                <p className="text-xl md:text-2xl mb-8 text-white font-bold tracking-wider">
                    🎵 LOS MEJORES HITS DE LOS 80s EN VIVO 🎵
                </p>
                <p className="text-lg mb-12 text-pink-300 max-w-2xl mx-auto">
                    Revive la magia de los 80s con nuestros covers de Madonna, Duran Duran, Depeche Mode y más
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 text-lg shadow-lg shadow-pink-500/25 border-2 border-pink-400"
                    >
                        VER CONCIERTOS
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 text-lg shadow-lg shadow-cyan-400/25 bg-transparent"
                    >
                        ESCUCHAR MÚSICA
                    </Button>
                </div>
            </div>
        </section>
    )
}
