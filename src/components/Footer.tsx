"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-emerald-500/20 bg-black/20 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Intro */}
        <div>
          <h3 className="text-xl font-semibold text-teal-400 mb-2">Let&apos;s Build Something Great</h3>
          <p className="text-md">
            Crafting thoughtful digital experiences with passion and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-teal-400 mb-2">Quick Links</h4>
          <ul className="space-y-2 text-md">
            <li>
              <Link href="#home" className="hover:text-emerald-400 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-emerald-400 transition-colors duration-200">About</Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-emerald-400 transition-colors duration-200">Skills</Link>
            </li>
            <li>
              <Link href="#projects" className="hover:text-emerald-400 transition-colors duration-200">Projects</Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-emerald-400 transition-colors duration-200">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-teal-400 mb-2">Get in Touch</h4>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" /> sadiaroman186@gmail.com
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Github className="w-4 h-4" />
              <a href="https://github.com/sadiaromi" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">GitHub</a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <Linkedin className="w-4 h-4" />
              <a href="https://linkedin.com/in/roman-sadia-6b280a2b6" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-lg text-teal-500">
        © 2024 Roman Sadia. All rights reserved.
      </div>
    </footer>
  )
}
