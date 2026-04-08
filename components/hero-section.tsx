"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { company } from "@/data/site-content";

export function HeroSection() {
  return (
    <section className="subtle-grid relative overflow-hidden border-b border-slate-800 py-24 sm:py-32">
      <div className="absolute inset-0 bg-noise" aria-hidden />
      <div className="container-shell relative">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-xs uppercase tracking-[0.2em] text-cyan">
          {company.heroEyebrow}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {company.heroTitle}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 max-w-2xl text-lg text-slate-300">
          {company.heroText}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-10 flex flex-wrap gap-4">
          <Link href="/services">
            <Button size="lg">Explore Services</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
