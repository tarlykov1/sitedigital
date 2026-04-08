"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company, navLinks } from "@/data/site-content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-background/90 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide text-white" aria-label="Nova Atlas Home">
          {company.shortName}
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link href="/contact">
            <Button size="lg">Request Consultation</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle mobile menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-background md:hidden">
          <div className="container-shell flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-200" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Request Consultation</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
