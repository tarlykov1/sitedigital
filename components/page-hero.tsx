"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="subtle-grid relative overflow-hidden border-b border-slate-800 py-20">
      <div className="absolute inset-0 bg-noise" aria-hidden />
      <div className="container-shell relative">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.2em] text-cyan">
          {eyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="mt-6 max-w-2xl text-slate-300">
          {description}
        </motion.p>
      </div>
    </section>
  );
}
