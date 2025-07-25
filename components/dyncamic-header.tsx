"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function DynamicHeader() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsScrolled(scrollTop > 100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                    ? "h-16 bg-black/90 backdrop-blur-md border-b border-pink-500/50 shadow-lg shadow-pink-500/20"
                    : "h-24 bg-transparent"
                }`}
        >
            <div className="px-4 lg:px-6 h-full flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className={`transition-all duration-500 ${isScrolled ? "w-10 h-10" : "w-16 h-16"}`}>
                        <Image
                            src="/jetset-logo.png"
                            alt="JETSET"
                            width={64}
                            height={64}
                            className="w-full h-full object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
                <nav className="flex gap-6">
                    <Link
                        href="#conciertos"
                        className={`font-medium hover:text-pink-400 transition-all duration-300 ${isScrolled ? "text-sm" : "text-base"
                            }`}
                    >
                        CONCIERTOS
                    </Link>
                    <Link
                        href="#banda"
                        className={`font-medium hover:text-cyan-400 transition-all duration-300 ${isScrolled ? "text-sm" : "text-base"
                            }`}
                    >
                        LA BANDA
                    </Link>
                    <Link
                        href="#contacto"
                        className={`font-medium hover:text-yellow-400 transition-all duration-300 ${isScrolled ? "text-sm" : "text-base"
                            }`}
                    >
                        CONTACTO
                    </Link>
                </nav>
            </div>
        </header>
    )
}
