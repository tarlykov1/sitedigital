import { Cpu, Database, Shield, Workflow, FlaskConical, Network, TrendingUp } from "lucide-react";

export const company = {
  name: "Nova Atlas Technologies",
  shortName: "Nova Atlas",
  email: "hello@nova-atlas.example",
  phone: "+971 0000 0000",
  address: "Sample Office Tower, Innovation District, Dubai, UAE",
  description:
    "Nova Atlas Technologies helps enterprises modernize operations through secure digital infrastructure, intelligent automation, and strategic engineering delivery.",
  heroEyebrow: "Technology for a connected future",
  heroTitle: "Engineering resilient digital foundations for modern enterprises.",
  heroText:
    "We design, implement, and operate integrated AI, cloud, data, and infrastructure solutions that help global organizations move faster with confidence.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/development", label: "Development" },
  { href: "/hardware", label: "Hardware" },
  { href: "/contact", label: "Contact" }
];

export const capabilities = [
  { title: "AI & Process Automation", description: "Workflow intelligence, rule engines, and human-in-the-loop orchestration.", icon: Workflow },
  { title: "Data Management", description: "Trusted pipelines, governance models, and analytics foundations for scale.", icon: Database },
  { title: "Cloud Infrastructure", description: "Multi-cloud architecture, secure migration, and continuous optimization.", icon: Shield },
  { title: "Enterprise Hardware", description: "Compute, storage, and network supply programs tailored for mission-critical delivery.", icon: Cpu }
];

export const stats = [
  { value: "120+", label: "Enterprise clients" },
  { value: "8", label: "Operational regions" },
  { value: "24/7", label: "Support coverage" },
  { value: "99.95%", label: "Managed uptime" }
];

export const services = [
  {
    title: "AI & Process Automation",
    summary: "Deploy practical AI capabilities into business workflows with governance-first delivery.",
    bullets: ["Intelligent workflow mapping", "Document intelligence and extraction", "Automation CoE enablement"],
    kpi: "Reduce cycle times by up to 35%",
    icon: Workflow
  },
  {
    title: "Data Management",
    summary: "Build trusted data ecosystems for reporting, forecasting, and operational control.",
    bullets: ["Data platform architecture", "Data quality and lineage", "Master data strategy"],
    kpi: "Increase reporting confidence across business units",
    icon: Database
  },
  {
    title: "Cloud & Security",
    summary: "Modernize infrastructure while protecting systems through layered security operations.",
    bullets: ["Cloud landing zones", "Identity and access hardening", "Continuous security monitoring"],
    kpi: "Accelerate cloud readiness without compromising risk controls",
    icon: Shield
  },
  {
    title: "Infrastructure & Networking",
    summary: "Deliver secure connectivity and resilient infrastructure for distributed teams.",
    bullets: ["Network design and segmentation", "Performance optimization", "High-availability architecture"],
    kpi: "Improve service continuity across locations",
    icon: Network
  },
  {
    title: "R&D Services",
    summary: "Validate new technical opportunities with rapid prototyping and measurable pilots.",
    bullets: ["Innovation workshops", "Feasibility prototypes", "Pilot governance and metrics"],
    kpi: "Shorten innovation cycles from concept to pilot",
    icon: FlaskConical
  },
  {
    title: "Enterprise Advisory",
    summary: "Align technology investments to operating model, governance, and strategic outcomes.",
    bullets: ["Transformation roadmapping", "Architecture review boards", "Capability maturity assessment"],
    kpi: "Improve technology ROI visibility for leadership",
    icon: TrendingUp
  }
];

export const developmentPrograms = [
  {
    name: "Visual Intelligence Platform",
    overview: "A modular computer vision framework for safety, quality, and process monitoring.",
    value: "Enables near real-time insights from physical operations.",
    industries: "Manufacturing, logistics, utilities",
    stage: "Pilot"
  },
  {
    name: "Secure Cloud Monitoring Suite",
    overview: "Unified observability and compliance telemetry for hybrid cloud estates.",
    value: "Improves incident response speed with policy-driven alerts.",
    industries: "Financial services, healthcare, telecom",
    stage: "Production-ready"
  },
  {
    name: "Archive Optimization Engine",
    overview: "Intelligent archival engine that classifies, compresses, and routes records by policy.",
    value: "Reduces long-term storage cost while preserving retrieval performance.",
    industries: "Public sector, legal, enterprise operations",
    stage: "Beta"
  }
];

export const offices = [
  { city: "Dubai", address: "Demo Address: Gate District, DIFC", phone: "+971 0000 0000" },
  { city: "Riyadh", address: "Demo Address: Financial Center Road", phone: "+966 0000 0000" },
  { city: "London", address: "Demo Address: Bishopsgate, EC2", phone: "+44 0000 0000" }
];
