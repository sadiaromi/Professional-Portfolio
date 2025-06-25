"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Project from "@/components/Project"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-500/20 rotate-45 animate-spin-slow" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-teal-500/20 rotate-12 animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-500/10 rounded-full animate-bounce-slow" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-2xl animate-float" />
      </div>

      {/* Loading Screen */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mb-4" />
            <div className="text-emerald-400 text-xl font-semibold animate-pulse">Loading Portfolio...</div>
          </div>
        </div>
      )}

      {/* Components */}
      <Header isLoaded={isLoaded} scrollToSection={scrollToSection} />
      <Hero isLoaded={isLoaded} scrollToSection={scrollToSection} />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}
