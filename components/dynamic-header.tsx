"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function DynamicHeader() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            setIsVisible(scrollTop > 100)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 h-16 bg-black/90 backdrop-blur-md border-b border-pink-500/50 shadow-lg shadow-pink-500/20 transition-all duration-500 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="px-4 lg:px-6 h-full flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10">
                        <Image
                            src="/jetset-logo.png"
                            alt="JETSET"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
                <nav className="flex gap-6">
                    <Link
                        href="#conciertos"
                        className="text-sm font-medium hover:text-pink-400 transition-all duration-300"
                    >
                        CONCIERTOS
                    </Link>
                    <Link
                        href="#banda"
                        className="text-sm font-medium hover:text-cyan-400 transition-all duration-300"
                    >
                        LA BANDA
                    </Link>
                    <Link
                        href="#contacto"
                        className="text-sm font-medium hover:text-yellow-400 transition-all duration-300"
                    >
                        CONTACTO
                    </Link>
                </nav>
            </div>
        </header>
    )
}
