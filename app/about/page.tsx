import { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Nova Atlas Technologies, mission, leadership, and delivery principles."
};

const leaders = [
  { name: "Elena Ward", role: "Chief Executive Officer", bio: "Leads strategic expansion and enterprise transformation programs across regions." },
  { name: "Omar Rahman", role: "Chief Technology Officer", bio: "Oversees architecture strategy, platform engineering, and security governance." },
  { name: "Sofia Lin", role: "VP, Delivery Operations", bio: "Drives multi-market execution excellence and customer success programs." }
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Nova Atlas" title="Built for enterprises that demand strategic clarity and technical depth." description="We are an international technology company helping organizations modernize platforms, optimize operations, and strengthen digital resilience." />
      <section className="container-shell space-y-16 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="tech-panel p-7">
            <h2 className="text-2xl font-semibold text-white">Company story</h2>
            <p className="mt-3 text-slate-300">Nova Atlas was founded to bridge advisory strategy and engineering execution. We partner with enterprise leaders to translate priorities into tangible technical systems.</p>
          </div>
          <div className="tech-panel p-7">
            <h2 className="text-2xl font-semibold text-white">Mission & vision</h2>
            <p className="mt-3 text-slate-300">Mission: deliver dependable, secure, and scalable technology ecosystems. Vision: become the trusted operations technology partner across critical sectors.</p>
          </div>
        </div>

        <div>
          <SectionHeading title="Core values" description="Our values shape every architecture decision and delivery engagement." />
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Integrity by design", "Outcome accountability", "Security-first execution", "Continuous learning"].map((value) => (
              <div className="tech-panel p-5" key={value}>{value}</div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Leadership" description="Fictional sample profiles for demo purposes." />
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {leaders.map((leader) => (
              <article className="tech-panel p-6" key={leader.name}>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-accent/40 to-cyan/40" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-white">{leader.name}</h3>
                <p className="text-sm text-cyan">{leader.role}</p>
                <p className="mt-3 text-sm text-slate-300">{leader.bio}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="tech-panel p-7">
          <h2 className="text-2xl font-semibold text-white">Why clients choose us</h2>
          <p className="mt-3 text-slate-300">Clients rely on Nova Atlas for strategic transparency, structured governance, and teams that can move from roadmap to implementation without friction.</p>
        </div>
      </section>
      <CTASection title="Partner with a team built for enterprise execution." description="Discuss your priorities with our strategy and engineering leaders." primaryHref="/contact" primaryLabel="Start a Conversation" />
    </>
  );
}
