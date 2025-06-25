"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

interface HeaderProps {
  isLoaded: boolean
  scrollToSection: (sectionId: string) => void
}

export default function Header({ isLoaded, scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Roman Sadia.pdf"
    link.download = "CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Also open the PDF in a new tab to show it
    window.open("/Roman Sadia.pdf", "_blank")
  }

  const handleNavClick = (section: string) => {
    scrollToSection(section)
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-40 bg-black/20 backdrop-blur-md border-b border-emerald-500/20 transition-all duration-500 ${
        isLoaded ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-black font-bold text-lg animate-pulse-glow">
              RS
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className="text-white hover:text-emerald-400 transition-all duration-300 hover:scale-110 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Button
              onClick={downloadCV}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white transform hover:scale-105 transition-all duration-300 animate-glow"
            >
              <Download className="w-4 h-4 mr-2 animate-bounce" />
              Download CV
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-emerald-400 transform hover:scale-110 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <button
              key={item}
              onClick={() => handleNavClick(item.toLowerCase())}
              className="block px-3 py-2 text-white hover:text-emerald-400 w-full text-left transform hover:translate-x-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </button>
          ))}
          <div className="px-3 py-2">
            <Button
              onClick={downloadCV}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white w-full transform hover:scale-105 transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
