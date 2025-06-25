"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  isLoaded: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Hero({ isLoaded, scrollToSection }: HeroProps) {
  const [typedText, setTypedText] = useState("")
  const fullText = "Frontend Developer"

  // Typing animation effect
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div
            className={`lg:w-1/2 transition-all duration-1000 ${
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Roman Sadia
              </span>
            </h1>
            <div className="text-xl sm:text-2xl text-emerald-400 mb-8 h-8">
              <span className="animate-typing border-r-2 border-emerald-400">{typedText}</span>
            </div>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "2s" }}>
              I&apos;m a passionate Frontend Developer with a strong eye for design and a deep commitment to creating smooth, 
              responsive, and user-friendly web experiences. From transforming creative concepts into interactive interfaces 
              to optimizing performance across devices, I thrive on bringing ideas to life using modern technologies{" "}
              <span className="text-emerald-400 font-semibold animate-pulse">Next.js</span>,{" "}
              <span className="text-emerald-400 font-semibold animate-pulse" style={{ animationDelay: "0.5s" }}>
                Tailwind css
              </span>
              , and{" "}
              <span className="text-emerald-400 font-semibold animate-pulse" style={{ animationDelay: "1s" }}>
                Node.js
              </span>
              . My goal is to craft clean, accessible code and ensure every digital experience is intuitive and impactful.
            </p>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg px-8 py-3 transform hover:scale-110 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: "3s" }}
            >
              Explore My Work
            </Button>
          </div>
          <div
            className={`lg:w-1/2 mt-12 lg:mt-0 flex justify-center transition-all duration-1000 ${
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl absolute -inset-4 animate-pulse-slow"></div>
              <div className="w-72 h-72 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center relative animate-float hover:animate-spin-slow transition-all duration-300">
                <div className="text-6xl font-bold text-white animate-pulse">RS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
