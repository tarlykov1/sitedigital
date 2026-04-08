import { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { developmentPrograms } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Development",
  description: "Explore Nova Atlas innovation programs and product development roadmap."
};

const roadmap = [
  { phase: "Q1", detail: "Discovery and architecture planning" },
  { phase: "Q2", detail: "Prototype and pilot delivery" },
  { phase: "Q3", detail: "Beta testing with selected enterprise users" },
  { phase: "Q4", detail: "Production rollout and optimization" }
];

export default function DevelopmentPage() {
  return (
    <>
      <PageHero eyebrow="Development" title="Innovation programs designed for measurable enterprise impact." description="We build and validate practical technology products through staged implementation frameworks." />
      <section className="container-shell grid gap-6 py-20 lg:grid-cols-3">
        {developmentPrograms.map((program) => (
          <article key={program.name} className="tech-panel p-6">
            <span className="inline-flex rounded-full border border-cyan/40 px-3 py-1 text-xs text-cyan">{program.stage}</span>
            <h3 className="mt-4 text-xl font-semibold text-white">{program.name}</h3>
            <p className="mt-3 text-slate-300"><strong>Overview:</strong> {program.overview}</p>
            <p className="mt-2 text-slate-300"><strong>Business value:</strong> {program.value}</p>
            <p className="mt-2 text-slate-300"><strong>Target industries:</strong> {program.industries}</p>
          </article>
        ))}
      </section>

      <section className="container-shell pb-16">
        <div className="tech-panel p-8">
          <h2 className="text-2xl font-semibold text-white">Program roadmap</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {roadmap.map((item) => (
              <div key={item.phase} className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <p className="text-sm font-semibold text-cyan">{item.phase}</p>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Request a development demo" description="Meet our product and engineering team to review active programs and pilot opportunities." primaryHref="/contact" primaryLabel="Book a Demo" />
    </>
  );
}
