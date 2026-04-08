import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
}

export function CTASection({ title, description, primaryLabel, primaryHref }: CTASectionProps) {
  return (
    <section className="container-shell py-20">
      <div className="tech-panel overflow-hidden p-8 sm:p-12">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan">Next step</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-slate-300">{description}</p>
        <div className="mt-8">
          <Link href={primaryHref}>
            <Button size="lg">{primaryLabel}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
