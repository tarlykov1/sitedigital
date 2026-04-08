import { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore AI, cloud, data, networking, R&D, and advisory services by Nova Atlas Technologies."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Integrated capabilities spanning strategy, platforms, and operations." description="From modernization programs to ongoing optimization, our service portfolio supports enterprise transformation end-to-end." />
      <section className="container-shell grid gap-6 py-20 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </section>
      <CTASection title="Need a tailored service mix?" description="Our teams design custom engagement models based on your architecture and operating goals." primaryHref="/contact" primaryLabel="Request Service Consultation" />
    </>
  );
}
