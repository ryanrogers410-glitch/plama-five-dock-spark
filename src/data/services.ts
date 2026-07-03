import type { LucideIcon } from "lucide-react";
import {
  Building2, HardHat, Layers, Waves, Droplets, FileText,
  ClipboardList, Compass, BadgeCheck, Umbrella,
} from "lucide-react";

export type ServiceDef = {
  slug: string;
  route: `/services/${string}`;
  icon: LucideIcon;
  title: string;
  short: string;
  eyebrow: string;
  hero: { italic?: string; accent?: string };
  intro: string;
  offerings: string[];
  process: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  industries: string[];
  faqs?: { q: string; a: string }[];
};

const baseProcess = [
  { step: "01", title: "Brief & Feasibility", desc: "Site review, constraint mapping and value engineering before a fee is agreed." },
  { step: "02", title: "Concept Design", desc: "Options developed with the design team so intent, cost and buildability align early." },
  { step: "03", title: "Documentation", desc: "Coordinated drawings and calculations built for builders — clear, buildable, defensible." },
  { step: "04", title: "Certification", desc: "Compliance sign-off and support through construction, RFIs and handover." },
];

export const services: ServiceDef[] = [
  {
    slug: "structural",
    route: "/services/structural",
    icon: Building2,
    title: "Structural Engineering",
    short: "Robust, code-compliant structural design for buildings of every scale.",
    eyebrow: "Structural",
    hero: { italic: "designed", accent: " to last." },
    intro:
      "From single-storey homes to complex commercial and healthcare buildings, our structural team delivers rigorous, buildable engineering that respects architecture, budget and program.",
    offerings: [
      "Reinforced concrete, steel and timber design",
      "Residential rebuilds, additions and second storeys",
      "Commercial, retail and industrial buildings",
      "Healthcare, hospitals and specialist facilities",
      "Structural remediation and strengthening",
      "Temporary works and construction engineering",
    ],
    process: baseProcess,
    benefits: [
      { title: "Buildable Documentation", desc: "Details that reflect real site conditions — fewer RFIs, faster builds." },
      { title: "Senior-Led Design", desc: "Every project touched by a chartered engineer from brief to certification." },
      { title: "Program Discipline", desc: "Responsive turnaround that keeps design and construction on schedule." },
      { title: "Value Engineering", desc: "Optioneering that reduces material and labour without compromising code." },
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Hospitality", "Industrial", "Education"],
    faqs: [
      { q: "Can you certify a design prepared by another engineer?", a: "Yes — we perform independent structural certification where the original documentation is complete and traceable." },
      { q: "Do you work with owner-builders?", a: "Absolutely. We provide the same rigour and support as we would for a licensed builder, with a focus on clear, self-explanatory drawings." },
    ],
  },
  {
    slug: "civil",
    route: "/services/civil",
    icon: HardHat,
    title: "Civil Engineering",
    short: "Site civil works, earthworks, pavements and infrastructure design.",
    eyebrow: "Civil",
    hero: { italic: "grounded", accent: " infrastructure." },
    intro:
      "Practical civil engineering that unlocks sites — from residential subdivisions to commercial developments — with pragmatic solutions that satisfy council and constructors alike.",
    offerings: [
      "Bulk and detail earthworks design",
      "Roads, pavements and driveways",
      "Retaining walls and site regrading",
      "Sediment and erosion control plans",
      "Subdivision civil design and coordination",
      "Council and authority liaison",
    ],
    process: baseProcess,
    benefits: [
      { title: "DA-Ready Documentation", desc: "Packages that address council comments the first time around." },
      { title: "Constructable Detailing", desc: "Grading and drainage designed for builders on real slopes and budgets." },
      { title: "Integrated with Structural", desc: "Civil and structural coordinated in-house — no interface gaps." },
      { title: "Fixed Fees", desc: "Scopes and fees agreed up-front, held through documentation." },
    ],
    industries: ["Residential", "Commercial", "Industrial", "Public Realm", "Education"],
  },
  {
    slug: "facade",
    route: "/services/facade",
    icon: Layers,
    title: "Glass & Façade Engineering",
    short: "Curtain walls, structural glazing and high-performance façade systems.",
    eyebrow: "Façade",
    hero: { italic: "engineered", accent: " envelopes." },
    intro:
      "Façade engineering that lets architecture breathe — structural glazing, curtain walls and cladding systems designed for wind, movement, thermal load and long-term performance.",
    offerings: [
      "Curtain wall and unitised façade design",
      "Structural glazing and frameless systems",
      "Balustrades, canopies and skylights",
      "Cladding, screens and rainscreens",
      "Wind and movement analysis",
      "Peer review of façade contractor design",
    ],
    process: baseProcess,
    benefits: [
      { title: "Architect-Aligned", desc: "We speak the language of design intent and defend it through documentation." },
      { title: "Wind & Movement Modelled", desc: "Loads calculated to AS 1170 with realistic building movement allowances." },
      { title: "Sub-Contractor Coordinated", desc: "Design carried through installer shop drawings and site inspections." },
      { title: "Compliance Ready", desc: "Certification packages accepted by principal certifiers and builders." },
    ],
    industries: ["Commercial", "High-End Residential", "Hospitality", "Retail", "Healthcare"],
  },
  {
    slug: "hydraulic",
    route: "/services/hydraulic",
    icon: Droplets,
    title: "Hydraulic & Stormwater Engineering",
    short: "Flood studies, drainage strategies, on-site detention and stormwater design.",
    eyebrow: "Hydraulic",
    hero: { italic: "managing", accent: " water." },
    intro:
      "End-to-end water management — from flood impact assessments to on-site detention, WSUD and connections — designed to satisfy councils and protect assets for the long term.",
    offerings: [
      "Stormwater concept and construction design",
      "On-site detention (OSD) design and certification",
      "Flood studies and impact assessments",
      "Water Sensitive Urban Design (WSUD)",
      "Rainwater harvesting and reuse strategies",
      "Sewer, water and drainage coordination",
    ],
    process: baseProcess,
    benefits: [
      { title: "Council Confidence", desc: "Reports prepared to the format and rigour local authorities expect." },
      { title: "Whole-of-Site Thinking", desc: "Drainage integrated with civil, landscape and structural early." },
      { title: "Modelled, Not Guessed", desc: "Hydraulic analysis using industry-standard software and real rainfall data." },
      { title: "Compliance Certificates", desc: "OSD, stormwater and connection certificates issued in-house." },
    ],
    industries: ["Residential", "Commercial", "Industrial", "Subdivisions", "Public Realm"],
  },
  {
    slug: "marine",
    route: "/services/marine",
    icon: Waves,
    title: "Marine Structural Engineering",
    short: "Jetties, seawalls, pontoons and waterfront structures.",
    eyebrow: "Marine",
    hero: { italic: "engineered", accent: " for the coast." },
    intro:
      "Marine and waterfront structures built to survive Sydney's coastal environment — designed with the right materials, corrosion detailing and wave loading for a full service life.",
    offerings: [
      "Jetties, wharves and boardwalks",
      "Seawalls and revetments",
      "Pontoons, moorings and gangways",
      "Boat ramps and marine access",
      "Marine structural assessments",
      "Approvals through Transport for NSW / Crown Lands",
    ],
    process: baseProcess,
    benefits: [
      { title: "Coastal-Grade Detailing", desc: "Materials, coatings and connections specified for splash and tidal zones." },
      { title: "Wave & Tide Modelled", desc: "Loads calculated against realistic marine conditions, not desk assumptions." },
      { title: "Approval Support", desc: "Documentation prepared for waterway authority and council review." },
      { title: "Assessment & Remediation", desc: "Condition reports and life-extension strategies for existing structures." },
    ],
    industries: ["Waterfront Residential", "Marinas", "Public Foreshore", "Commercial Waterfront"],
  },
  {
    slug: "expert-reports",
    route: "/services/expert-reports",
    icon: FileText,
    title: "Expert Reports & Certifications",
    short: "Independent expert engineering reports, forensic assessments and compliance certificates.",
    eyebrow: "Expert Reports",
    hero: { italic: "independent", accent: " engineering." },
    intro:
      "Chartered, defensible engineering opinions — from dilapidation and defect reports through to structural adequacy assessments and compliance certificates issued by registered engineers.",
    offerings: [
      "Structural adequacy reports",
      "Defect and rectification reports",
      "Dilapidation surveys",
      "Forensic and dispute engineering",
      "Compliance and design certificates",
      "Peer review of third-party engineering",
    ],
    process: [
      { step: "01", title: "Instruction & Scope", desc: "Clear instructions and site information agreed before inspection." },
      { step: "02", title: "Inspection", desc: "Structured site inspection with photographic and dimensional records." },
      { step: "03", title: "Analysis", desc: "Assessment against relevant codes, standards and manufacturer data." },
      { step: "04", title: "Report & Sign-Off", desc: "Report issued under a chartered engineer's seal, ready for use." },
    ],
    benefits: [
      { title: "Chartered & Registered", desc: "Reports authored by CPEng-qualified engineers on the National Register." },
      { title: "Defensible", desc: "Structured, code-referenced opinions that stand up to scrutiny." },
      { title: "Fast Turnaround", desc: "Prioritised for insurance, sale and dispute timelines." },
      { title: "Independent", desc: "No conflicts — we don't design or build what we're asked to assess." },
    ],
    industries: ["Insurance", "Legal", "Body Corporate", "Homeowners", "Builders"],
  },
  {
    slug: "project-management",
    route: "/services/project-management",
    icon: ClipboardList,
    title: "Development & Project Management",
    short: "End-to-end development and project delivery management.",
    eyebrow: "Development",
    hero: { italic: "delivered", accent: " end-to-end." },
    intro:
      "Development and project management that carries a build from feasibility to occupation — coordinating consultants, authorities, contractors and clients so nothing falls between the cracks.",
    offerings: [
      "Development feasibility and due diligence",
      "Consultant coordination and procurement",
      "Program and cost oversight",
      "DA, CDC and construction certificate management",
      "Contract administration",
      "Handover and defects management",
    ],
    process: [
      { step: "01", title: "Feasibility", desc: "Site, planning and budget review to test the opportunity honestly." },
      { step: "02", title: "Design & Approvals", desc: "Consultant team assembled and driven to a lodgeable package." },
      { step: "03", title: "Delivery", desc: "Procurement, contract administration and site oversight." },
      { step: "04", title: "Handover", desc: "Commissioning, certification and defects management to close out." },
    ],
    benefits: [
      { title: "Engineering-Led PM", desc: "Programs led by engineers who understand what the drawings mean on site." },
      { title: "One Point of Accountability", desc: "A single owner across design, approvals and construction." },
      { title: "Transparent Reporting", desc: "Program, cost and risk reported honestly, not defensively." },
      { title: "Aligned Incentives", desc: "Fees structured to reward outcomes, not activity." },
    ],
    industries: ["Residential", "Commercial", "Healthcare", "Retail"],
  },
];

export const otherDisciplines = [
  { icon: Compass, title: "Stormwater Engineering", desc: "On-site detention, WSUD and stormwater concept to construction.", route: "/services/hydraulic" },
  { icon: BadgeCheck, title: "Engineering Certificates", desc: "Compliance certificates issued by registered engineers.", route: "/services/expert-reports" },
] as const;

export function getService(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}
