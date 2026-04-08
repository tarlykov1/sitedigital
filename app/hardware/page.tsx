import { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Hardware",
  description: "Enterprise hardware sourcing and infrastructure supply programs by Nova Atlas Technologies."
};

const categories = [
  "Processors & Compute Modules",
  "Power Systems",
  "Server & Storage Platforms",
  "Workstations, Laptops & Displays",
  "Networking Equipment"
];

export default function HardwarePage() {
  return (
    <>
      <PageHero eyebrow="Hardware" title="Reliable enterprise hardware programs, from sourcing to lifecycle support." description="We provide structured procurement and deployment support for mission-critical environments." />

      <section className="container-shell py-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article key={category} className="tech-panel p-6">
              <h3 className="text-lg font-semibold text-white">{category}</h3>
              <p className="mt-3 text-sm text-slate-300">Configured for enterprise-grade reliability, compatibility, and long-term supportability.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16">
        <div className="tech-panel p-8">
          <h2 className="text-2xl font-semibold text-white">Enterprise procurement advantages</h2>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>• Consolidated vendor management and technical validation</li>
            <li>• Regional logistics coordination and predictable lead times</li>
            <li>• Governance-friendly procurement documentation</li>
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {["Partner A", "Partner B", "Partner C", "Partner D"].map((partner) => (
              <div key={partner} className="rounded-md border border-slate-700 bg-slate-900/50 p-5 text-center text-xs text-slate-400">{partner} (placeholder)</div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Need a hardware quotation?" description="Share your infrastructure requirements and we will prepare a tailored enterprise quote." primaryHref="/contact" primaryLabel="Request Quotation" />
    </>
  );
}
