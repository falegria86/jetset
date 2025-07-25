"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import StarfieldVideo from "@/components/starfield-video"
import { useState, useEffect } from "react"

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollY(window.scrollY)
            })
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Starfield Video Background */}
            <div className="absolute inset-0 bg-black">
                <StarfieldVideo />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <div 
                    className="mb-12 flex justify-center transition-all duration-300 ease-out"
                    style={{
                        transform: `translateY(${scrollY * 0.3}px) scale(${1 - scrollY * 0.0005})`,
                        opacity: Math.max(0.3, 1 - scrollY * 0.001)
                    }}
                >
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
