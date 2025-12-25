"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

const TIMELINE = [
  {
    role: "Software Development Engineer",
    company: "Trade Diary",
    duration: "Jun 2025 → Now",
  },
  {
    role: "AI Features & Trade Analysis",
    company: "Freelance",
    duration: "2024 → 2025",
  },
  {
    role: "Full Stack Developer",
    company: "Projects",
    duration: "2023 → Present",
  },
];

const IntroductionSection = () => {
  return (
    <section id="introduction" className="relative z-10 max-w-6xl mx-auto py-20 px-4">
      <div className="bg-white/5 dark:bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-800/50">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-slate-400 text-sm mb-2">The developer</p>
          <h2 className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold",
            "bg-clip-text text-transparent",
            "bg-gradient-to-r from-white to-slate-400"
          )}>
            Building Ideas <span className="font-light italic text-slate-400">into code</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-slate-700 shadow-2xl">
              <Image
                src="/assets/projects-screenshots/portfolio/profile.jpeg"
                alt="Darshan Chaudhari"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex items-center gap-4">
              <h3 className="text-xl font-semibold text-white">{config.author}</h3>
              <div className="flex gap-2">
                <Link href={config.social.instagram} target="_blank" className="p-2 rounded-full border border-slate-600 hover:border-slate-400 transition-colors">
                  <SiInstagram size={16} className="text-slate-400" />
                </Link>
                <Link href={config.social.linkedin} target="_blank" className="p-2 rounded-full border border-slate-600 hover:border-slate-400 transition-colors">
                  <SiLinkedin size={16} className="text-slate-400" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right - Bio & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Bio */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Full-stack developer with expertise in building AI-powered applications and scalable web solutions. 
              Specialized in creating trading analytics platforms, ATS-focused resume builders, and mobile apps. 
              Passionate about transforming complex ideas into elegant, user-friendly products using modern technologies 
              like Next.js, Flutter, and AI/ML integrations.
            </p>

            {/* Timeline */}
            <div className="space-y-0 border-t border-slate-700 pt-4">
              {TIMELINE.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 py-3 border-b border-slate-700/50 text-sm"
                >
                  <span className="text-white font-medium">{item.role}</span>
                  <span className="text-slate-500 text-center">{item.company}</span>
                  <span className="text-slate-400 text-right">{item.duration}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
