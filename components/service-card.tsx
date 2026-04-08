import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  kpi?: string;
}

export function ServiceCard({ icon: Icon, title, description, bullets, kpi }: ServiceCardProps) {
  return (
    <article className="tech-panel p-6 transition hover:-translate-y-1 hover:border-slate-500/80 hover:shadow-glow">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/20 text-cyan">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm text-slate-300">{description}</p>
      {bullets?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {kpi ? <p className="mt-4 text-sm font-medium text-cyan">{kpi}</p> : null}
    </article>
  );
}
