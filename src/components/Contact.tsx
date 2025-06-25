"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8 animate-fade-in-up">Let&apos;s Work Together</h2>
        <p className="text-xl text-gray-300 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: "Email",
              label: "Send a Message",
              href: "mailto:sadiaroman186@gmail.com",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              label: "Connect on LinkedIn",
              href: "https://www.linkedin.com/in/roman-sadia-6b280a2b6",
            },
            {
              icon: Github,
              title: "GitHub",
              label: "Explore GitHub",
              href: "https://github.com/sadiaromi",
            },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="no-underline"
              >
                <Card
                  className="bg-black/40 border-emerald-500/20 hover:border-emerald-500/40 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="w-8 h-8 text-emerald-400 mx-auto mb-4 animate-bounce-slow" />
                    <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                    <p className="text-gray-300">{contact.label}</p>
                  </CardContent>
                </Card>
              </a>
            )
          })}
        </div>

        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg px-8 py-3 transform hover:scale-110 transition-all duration-300 animate-bounce-in"
          style={{ animationDelay: "1s" }}
        >
          <a href="mailto:sadiaroman186@gmail.com">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </a>
        </Button>
      </div>
    </section>
  )
}
