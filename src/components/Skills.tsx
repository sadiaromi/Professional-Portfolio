"use client";

import React from "react";
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,FaFigma, FaGitAlt, FaGithub} from "react-icons/fa";
import {SiTypescript, SiNextdotjs, SiTailwindcss,SiVercel, SiStreamlit} from "react-icons/si";

const frontend = [
  { name: "HTML", icon: <FaHtml5 className="text-[#e34c26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#f7df1e]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178c6]" /> },
  { name: "React", icon: <FaReact className="text-[#61dafb]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38bdf8]" /> },
];

const backend = [
  { name: "Python", icon: <FaPython className="text-[#ffde57]" /> },
  { name: "Streamlit", icon: <SiStreamlit className="text-[#ff4b4b]" /> },
];

const tools = [
  { name: "Git", icon: <FaGitAlt className="text-[#f05032]" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Figma", icon: <FaFigma className="text-[#a259ff]" /> },
];

const Section = ({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
}) => (
  <div className="mb-20">
    <h3 className="text-3xl font-semibold text-teal-400 mb-8 border-b border-teal-400 inline-block pb-1">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-5 flex flex-col items-center transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
        >
          <div className="text-4xl mb-3 animate-pulse">{skill.icon}</div>
          <p className="text-sm text-gray-300 font-medium">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br  from-slate-900 via-emerald-900 to-teal-900 px-6 md:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-teal-400 mb-6">
          Skills & Expertise
        </h2>
        <p className="text-center text-white text-base max-w-2xl mx-auto mb-16">
          Tools and technologies I use to build fast, modern, and scalable web apps.
        </p>

        <Section title="Frontend Development" skills={frontend} />
        <Section title="Backend & Frameworks" skills={backend} />
        <Section title="Tools & Platforms" skills={tools} />
      </div>
    </section>
  );
}