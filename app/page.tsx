import { CTASection } from "@/components/cta-section";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatBlock } from "@/components/stat-block";
import { capabilities, developmentPrograms, services, stats } from "@/data/site-content";

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="container-shell py-20">
        <SectionHeading
          eyebrow="Positioning"
          title="A strategic technology partner for complex, high-stakes operations."
          description="We combine architecture, engineering, and operational expertise to deliver systems that perform under pressure and scale with business demand."
        />
      </section>

      <section className="container-shell grid gap-6 pb-20 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability) => (
          <ServiceCard key={capability.title} {...capability} />
        ))}
      </section>

      <section className="container-shell py-8">
        <SectionHeading
          eyebrow="R&D"
          title="Applied innovation programs that convert ideas into deployable products."
          description="Our research teams collaborate with enterprise units to prototype, validate, and operationalize emerging technologies in controlled stages."
        />
      </section>

      <section className="container-shell grid gap-6 py-12 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatBlock key={item.label} {...item} />
        ))}
      </section>

      <section className="container-shell py-10">
        <SectionHeading
          eyebrow="Featured development"
          title="Initiatives in active delivery"
          description="Cross-functional programs built around measurable business outcomes and risk-aware implementation roadmaps."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {developmentPrograms.map((program) => (
            <article key={program.name} className="tech-panel p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan">{program.stage}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{program.name}</h3>
              <p className="mt-3 text-sm text-slate-300">{program.overview}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell py-12">
        <div className="tech-panel p-8">
          <h3 className="text-2xl font-semibold text-white">Infrastructure and networking for distributed enterprise environments.</h3>
          <p className="mt-3 max-w-3xl text-slate-300">
            Nova Atlas designs resilient core and edge connectivity layers that maintain performance, enforce segmentation, and support hybrid operational models.
          </p>
        </div>
      </section>

      <CTASection
        title="Plan your next transformation milestone with confidence."
        description="Speak with our consultants about platform modernization, digital operations, or enterprise hardware sourcing."
        primaryHref="/contact"
        primaryLabel="Request Consultation"
      />
    </>
  );
}
