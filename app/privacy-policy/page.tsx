import { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Sample privacy policy template for Nova Atlas Technologies demo website."
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy Policy" title="Sample / Demo Privacy Policy" description="This page is provided as a neutral demo template and should be reviewed by legal counsel before production use." />
      <section className="container-shell py-20">
        <article className="tech-panel prose prose-invert max-w-none p-8 prose-p:text-slate-300 prose-li:text-slate-300">
          <p><strong>Important:</strong> This is sample content for demonstration purposes only.</p>
          <h2>1. Information We Collect</h2>
          <p>We may collect contact details, business inquiry information, and website usage analytics.</p>
          <h2>2. How We Use Information</h2>
          <p>Information is used to respond to inquiries, improve services, and maintain secure operations.</p>
          <h2>3. Data Sharing</h2>
          <p>We do not sell personal information. Data may be shared with service providers under confidentiality obligations.</p>
          <h2>4. Data Retention</h2>
          <p>We retain information only as long as necessary for operational, legal, or contractual purposes.</p>
          <h2>5. Your Rights</h2>
          <p>Depending on jurisdiction, you may request access, correction, or deletion of personal data.</p>
          <h2>6. Contact</h2>
          <p>For privacy requests, contact: privacy@nova-atlas.example</p>
        </article>
      </section>
    </>
  );
}
