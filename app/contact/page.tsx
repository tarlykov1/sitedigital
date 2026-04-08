import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { company, offices } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nova Atlas Technologies for business inquiries, consultations, and project requests."
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let’s discuss your business and technology priorities." description="Submit your inquiry and our team will follow up with a suitable engagement path." />
      <section className="container-shell grid gap-8 py-20 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6">
          <div className="tech-panel p-6">
            <h2 className="text-xl font-semibold text-white">Business contacts</h2>
            <p className="mt-3 text-sm text-slate-300">Email: {company.email}</p>
            <p className="mt-1 text-sm text-slate-300">Phone: {company.phone}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {offices.map((office) => (
              <article key={office.city} className="tech-panel p-4">
                <h3 className="font-semibold text-white">{office.city}</h3>
                <p className="mt-2 text-xs text-slate-300">{office.address}</p>
                <p className="mt-2 text-xs text-slate-400">{office.phone}</p>
              </article>
            ))}
          </div>
          <div className="tech-panel p-6">
            <h3 className="font-semibold text-white">Map placeholder</h3>
            <div className="mt-4 h-52 rounded-lg border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          </div>
        </div>
      </section>
      <CTASection title="Business inquiries are usually reviewed within one business day." description="For urgent cases, include priority and response window in your message." primaryHref="mailto:hello@nova-atlas.example" primaryLabel="Email Our Team" />
    </>
  );
}
