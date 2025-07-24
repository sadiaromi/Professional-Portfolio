"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  const projects = [
    
    {
      title: "Smart ToDo App",
      description:
        "A sleek and efficient task manager that lets users add and delete tasks with a responsive UI and local storage support.",
      image: "/todo.jpg",
      technologies: ["React", "Tailwind CSS", "Vite"],
      liveUrl: "https://todo-list-app-two-murex.vercel.app",
      githubUrl: "https://github.com/sadiaromi/Todo-List-App.git",
    },
    {
      title: "Makeup Product Showcase",
      description:
        "A modern UI-based makeup website highlighting different product categories, responsive grid layout, and smooth scroll animations.",
      image: "/makeup.jpg",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://makeup-website-tailwindcss.vercel.app",
      githubUrl: "https://github.com/sadiaromi/Makeup-Website-Tailwindcss.git",
    },
    {
      title: "Recipe Sharing Platform",
      description:
        "A clean and responsive recipe website featuring detailed food recipes, ingredients, and cooking steps with visual appeal.",
      image: "/recipe.jpg",
      technologies: ["Next.js", "Custom CSS"],
      liveUrl: "https://recipe-website-customcss.vercel.app",
      githubUrl: "https://github.com/sadiaromi/Recipe-website-Customcss.git",
    },
    {
      title: "Figma to Code: Developer Blog Homepage",
      description:
        "A stylish and modern blog homepage built with a Figma design reference. Features a sleek hero section, blog previews with author details, and smooth scroll animations for an engaging reading experience.",
      image: "/figma.png",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://class-assignment-5-omega.vercel.app",
      githubUrl: "https://github.com/sadiaromi/Class-Assignment-5.git",
    },
    {
      title: "Figma Shopping Website",
      description:
        "A Figma-to-code implementation of a stylish shopping homepage, showcasing hero section and trending products",
      image: "/figma-shopping.png",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://figma-template-assignment-gold.vercel.app",
      githubUrl: "https://github.com/sadiaromi/figma-template-assignment.git",
    },
    {
      title: "Travel Blog",
      description:
        "A visually rich and responsive travel blog where users can explore posts, destinations, and experiences with elegant layouts and animations.",
      image: "/travel.about.jpg",
      technologies: ["Next.js", "Tailwind CSS"],
      liveUrl: "https://milestone-3-dynamic-blog-opal.vercel.app",
      githubUrl: "https://github.com/sadiaromi/Milestone-3-dynamic-blog.git",
    },
    {
      title: "Password Strength Meter",
      description:
        "A real-time password strength meter built with Python and Streamlit, featuring dynamic feedback and robust security validation using regular expressions.",
      image: "/password.jpg",
      technologies: ["Python", "Streamlit"],
      liveUrl: "https://assignment-3-password-strength-meter.streamlit.app",
      githubUrl: "https://github.com/sadiaromi/Assignment-3-Password-Strength-Meter.git",
    },
    {
      title: "BMI Calculator",
      description:
        "An interactive BMI calculator that takes user height and weight, then returns health categorization and BMI score.",
      image: "/bmi.jpg",
      technologies: ["Python", "Streamlit"],
      liveUrl: "https://bmi-calculator-ubp5k5uv45hptlqmkkcbbc.streamlit.app",
      githubUrl: "https://github.com/sadiaromi/BMI-Calculator.git",
    },
    {
      title: "Personal Expense Tracker",
      description:
        "A minimalist expense tracker that helps users log income and expenses, view balances, and visualize spending habits.",
      image: "/expense.jpg",
      technologies: ["Python", "Streamlit"],
      liveUrl: "https://personal-expense-tracker-7u4hfjfd9bsysy3cmedcsy.streamlit.app",
      githubUrl: "https://github.com/sadiaromi/Personal-Expense-Tracker.git",
    },
    {
      title: "Unit Converter",
      description:
        "A flexible and responsive unit converter app that supports conversions across length, weight, temperature, and more.",
      image: "/unit.jpg",
      technologies: ["Python", "Streamlit"],
      liveUrl: "https://assignment-2-unit-converter.streamlit.app",
      githubUrl: "https://github.com/sadiaromi/Assignment-2-Unit-Converter.git",
    },
  ]

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }, [projects.length])

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToProject = (index: number) => {
    setCurrentProject(index)
    setIsAutoSliding(false)
    setTimeout(() => setIsAutoSliding(true), 5000)
  }

  useEffect(() => {
    if (!isAutoSliding) return
    const interval = setInterval(() => nextProject(), 4000)
    return () => clearInterval(interval)
  }, [isAutoSliding, nextProject])

  const handleMouseEnter = () => setIsAutoSliding(false)
  const handleMouseLeave = () => setIsAutoSliding(true)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16 animate-fade-in-up">
          Featured Projects
        </h2>

        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-lg">
            <Card className="bg-black/40 border-emerald-500/20 overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="md:flex">
                      <div className="md:w-1/2 relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={300}
                          className="w-full h-[300px] object-cover transition-transform duration-700 hover:scale-110"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <h3 className="text-2xl font-bold text-white mb-4 animate-slide-in-right">
                          {project.title}
                        </h3>
                        <p
                          className="text-gray-300 mb-6 leading-relaxed animate-fade-in"
                          style={{ animationDelay: "0.2s" }}
                        >
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-emerald-500 text-emerald-400 animate-fade-in-up transform hover:scale-110 transition-all duration-300"
                              style={{ animationDelay: `${techIndex * 0.1}s` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          </a>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Button
                              variant="outline"
                              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transform hover:scale-105 transition-all duration-300"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  index === currentProject ? "bg-emerald-400 scale-125" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          <div className="mt-4 w-full bg-gray-700 rounded-full h-1 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-1 rounded-full transition-all duration-300"
              style={{
                width: `${((currentProject + 1) / projects.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
