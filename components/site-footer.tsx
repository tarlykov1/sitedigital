import Link from "next/link";
import { company, navLinks } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/70 py-14">
      <div className="container-shell grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">{company.shortName}</h3>
          <p className="mt-3 text-sm text-slate-300">{company.description}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>{company.email}</li>
            <li>{company.phone}</li>
            <li>{company.address}</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Social</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>LinkedIn (Placeholder)</li>
            <li>X / Twitter (Placeholder)</li>
            <li>YouTube (Placeholder)</li>
          </ul>
        </div>
      </div>
      <div className="container-shell mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center">
        <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
        <Link href="/privacy-policy" className="hover:text-white">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
