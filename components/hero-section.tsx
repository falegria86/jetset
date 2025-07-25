"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import StarfieldVideo from "@/components/starfield-video"

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

            <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
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
                    🎵 LOS MEJORES HITS EN VIVO 🎵
                </p>
            </div>
        </section>
    )
}
