"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-bl from-slate-900 via-emerald-900 to-teal-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold  mb-4 animate-fade-in-up text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
          About Me
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fade-in-up mb-6">
          I&apos;m a creative frontend developer focused on building sleek, performant web interfaces that users love to interact with. With a strong foundation in modern frameworks like React and Next.js, I turn ideas into interactive digital experiences that are both functional and beautiful.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border border-teal-400 rounded-lg p-6 bg-black/30 animate-fade-in-up">
            <h3 className="text-xl text-teal-400 font-semibold mb-2">My Vision</h3>
            <p className="text-gray-300 text-sm">
              I envision a future where technology feels effortless and intuitive. My goal is to contribute to that future by constantly learning, innovating, and crafting interfaces that inspire and empower users across the globe.
            </p>
          </div>
          <div className="border border-teal-400 rounded-lg p-6 bg-black/30 animate-fade-in-up">
            <h3 className="text-xl text-teal-400 font-semibold mb-2">My Mission</h3>
            <p className="text-gray-300 text-sm">
              My mission is to simplify complex problems through clean code and thoughtful design. I aim to deliver accessible, responsive, and scalable frontend solutions that not only meet user needs but exceed client expectations.
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mt-10">
          <Button
            asChild
            variant="outline"
            className="border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            <a href="https://github.com/sadiaromi" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            <a href="https://www.linkedin.com/in/roman-sadia-6b280a2b6" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
