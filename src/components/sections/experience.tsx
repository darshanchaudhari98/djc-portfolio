"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import experiences from "@/data/experience";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative z-10 max-w-5xl mx-auto py-20 px-4">
      <div className="bg-slate-950/80 backdrop-blur-md rounded-3xl p-8 md:p-12">
        <Link href={"#experience"}>
          <h2
            className={cn(
              "bg-clip-text text-4xl text-center text-transparent md:text-7xl",
              "bg-gradient-to-b from-black/80 to-black/50",
              "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50 mb-16"
            )}
          >
            Experience
          </h2>
        </Link>

        <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 h-full w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative flex flex-col md:flex-row gap-8 mb-12",
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-950 z-10" />

            {/* Content */}
            <div className={cn("md:w-1/2 pl-8 md:pl-0", index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right")}>
              <div
                className={cn(
                  "bg-slate-800/90 border border-slate-700 rounded-xl p-6",
                  "hover:bg-slate-800 transition-all duration-300 shadow-xl"
                )}
              >
                <span className="text-sm text-purple-400 font-mono">{exp.duration}</span>
                <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
                {exp.companyUrl ? (
                  <Link
                    href={exp.companyUrl}
                    target="_blank"
                    className="text-pink-400 hover:text-pink-300 transition-colors font-medium"
                  >
                    {exp.company}
                  </Link>
                ) : (
                  <p className="text-pink-400 font-medium">{exp.company}</p>
                )}
                <p className="text-slate-400 text-sm mt-1">{exp.location}</p>

                <ul className={cn("mt-4 space-y-2", index % 2 === 0 ? "" : "md:ml-auto")}>
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-slate-200 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                <div className={cn("flex flex-wrap gap-2 mt-4", index % 2 === 0 ? "" : "md:justify-end")}>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-1 bg-purple-600/40 text-purple-200 rounded-full border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
