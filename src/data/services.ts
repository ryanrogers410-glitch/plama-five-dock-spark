import type { LucideIcon } from "lucide-react";
import {
  Building2, HardHat, Layers, Waves, Droplets, FileText,
  ClipboardList, Compass, BadgeCheck, Umbrella,
} from "lucide-react";

export type ServiceDef = {
  slug: string;
  route: string;
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
  { step: "01", title: "Brief & Feasibility", desc: "Site review, constraint mapping and feasibility review to test the opportunity honestly." },
  { step: "02", title: "Concept Design", desc: "Design and Document management for DA, CC, CDC so intent, cost and buildability align." },
  { step: "03", title: "Documentation", desc: "Advanced CAD and finite element analysis (FEA) to ensure coordinated, buildable drawings." },
  { step: "04", title: "Certification", desc: "Liaising and Coordinating authority approvals through to Occupancy Certificate." },
];

export const services: ServiceDef[] = [
  {
    slug: "structural",
    route: "/services/structural",
    icon: Building2,
    title: "Structural Engineering",
    short: "Specialists in designing, analyzing, and maintaining the adequacy and integrity of structures.",
    eyebrow: "Structural",
    hero: { italic: "integrity", accent: " in design." },
    intro:
      "We are specialists in designing, analyzing, and maintaining the adequacy and integrity of the structures. We ensure that the structures we create are safe and secure and compliant with the local authorities' controls, Australian Standards, and the Building Code of Australia (NCC). What makes us outstanding is our consideration of factors such as the environment, load-bearing capacity, and aesthetic appeal, married to the architectural design.",
    offerings: [
      "Concrete, Steel, Timber, Aluminum, Composite, Glass",
      "Underpinning Design",
      "Rectifications & Remediations",
      "Low – Mid – High-rise Building",
      "Residential – Industrial – Commercial",
    ],
    process: baseProcess,
    benefits: [
      { title: "Innovation", desc: "We deal with specific problems and provide innovative solutions in various sectors." },
      { title: "Responsiveness", desc: "Focused on providing a high level of customer service through our experienced team." },
      { title: "Cost Effectiveness", desc: "Tailored to meet the needs of the clients and designed to provide a cost-effective solution." },
      { title: "Build-ability", desc: "Documentation that meets the time, cost, quality and build-ability expectations." },
    ],
    industries: ["Residential", "Commercial", "Industrial", "Knock-down and Rebuild", "Healthcare"],
  },
  {
    slug: "civil",
    route: "/services/civil",
    icon: HardHat,
    title: "Civil Engineering",
    short: "Design and maintenance of the physical and naturally built environment.",
    eyebrow: "Civil",
    hero: { italic: "naturally", accent: " built." },
    intro:
      "We have experience in the design, and maintenance of the physical and naturally built environment which includes in land title subdivision, earthworks, soil and water management and road construction.",
    offerings: [
      "Traffic, Parking and Driveway Design in accordance with AS2890 and council’s controls",
      "Land Subdivision Infrastructure",
      "Soil and Water Management",
      "Stormwater Management",
      "Civil Structures – road, pavers, retaining walls, etc.",
      "Onsite Detention Systems/ Onsite Retention Systems",
      "Rainwater Collection and Reuse Systems",
      "Temporary works for major projects including shoring, propping, scaffolding, etc…",
    ],
    process: baseProcess,
    benefits: [
      { title: "Infrastructure Mastery", desc: "Complete subdivision and road construction planning." },
      { title: "Regulatory Alignment", desc: "Designs in accordance with AS2890 and council controls." },
      { title: "Environmental Care", desc: "Robust soil and water management strategies." },
      { title: "Temporary Works", desc: "Specialist shoring, propping, and scaffolding design." },
    ],
    industries: ["Land Subdivision", "Commercial", "Industrial", "Residential"],
  },
  {
    slug: "facade",
    route: "/services/facade",
    icon: Layers,
    title: "Glass & Façade Engineering",
    short: "Engineering design for glazed features including windows, skylights and curtain walls.",
    eyebrow: "Façade",
    hero: { italic: "architectural", accent: " envelopes." },
    intro:
      "We have experience in the engineering design of glazed features in buildings including windows, skylights, curtain walls, and storefront systems. Our work involves selection of materials, design of support systems, and wind load calculations with relevant safety requirements.",
    offerings: [
      "Wind Study and environmental load analysis",
      "Fire-rated Facade engineering",
      "Glass Walkway and Swimming Pool design",
      "Glass Balustrade and Pool Fence engineering",
      "Glass Awning design",
      "Safety requirement and regulation compliance",
    ],
    process: baseProcess,
    benefits: [
      { title: "Specialist Glazing", desc: "Expertise in frameless and structural glass features." },
      { title: "Load Analysis", desc: "Precise calculation of wind and environmental loads." },
      { title: "Safety Compliance", desc: "Adherence to all relevant safety requirements for installation." },
      { title: "Material Selection", desc: "Informed material selection for long-term performance." },
    ],
    industries: ["High-End Residential", "Commercial", "Retail", "Healthcare"],
  },
  {
    slug: "hydraulic",
    route: "/services/hydraulic",
    icon: Droplets,
    title: "Hydrologic & Hydraulic Engineering",
    short: "Water supply, flood study, and stormwater drainage management.",
    eyebrow: "Hydraulic",
    hero: { italic: "managing", accent: " water flow." },
    intro:
      "We have experience in the design, and maintenance of the physical and naturally built environment including subdivision projects, earthworks, and road construction plans with a focus on water systems.",
    offerings: [
      "Water Supply design",
      "Flood Study (1D and 2D modeling)",
      "Stormwater Drainage Management",
      "Onsite Detention Systems (OSD)",
      "Onsite Retention Systems",
      "Rainwater Collection and Reuse Systems",
    ],
    process: baseProcess,
    benefits: [
      { title: "Flood Mitigation", desc: "Comprehensive 1D and 2D flood impact assessments." },
      { title: "Sustainable Reuse", desc: "Innovative rainwater collection and reuse strategies." },
      { title: "Efficient Drainage", desc: "Cost-effective stormwater management solutions." },
      { title: "OSD Certification", desc: "Expert design and certification of detention systems." },
    ],
    industries: ["Residential", "Commercial", "Industrial", "Subdivisions"],
  },
  {
    slug: "weatherproofing",
    route: "/services/weatherproofing",
    icon: Umbrella,
    title: "Waterproofing & Expert Reporting",
    short: "Forensic assessments, rising damp, and waterproofing failure diagnosis.",
    eyebrow: "Expertise",
    hero: { italic: "forensic", accent: " precision." },
    intro:
      "We are qualified professionals in carrying out investigations and providing findings, opinions, and conclusions with a comprehensive overview and methodology based on our expertise and supporting data.",
    offerings: [
      "Waterproofing and Leaking Reports",
      "Rising Damp and Tree Root Damage Reports",
      "Cracking Reports and forensic analysis",
      "Structural Adequacy assessments",
      "Dilapidation Reports",
      "Structural Report for Strata Management",
      "Cracking Reports and forensic analysis",
      "Waterproofing/Leaking Reports",
      "Rising Damp and Tree Root Damage Reports",
      "Flood Impact Assessment Reports",
      "Flood Risk Management Reports",
      "Insurance Reports",
      "Expert Witness Reports",
      "Building/ Structural Defects Reports",
      "NCAT and AFCA Expert Witness reports",
      "Dilapidation Reports",
      "NCAT and AFCA Expert Witness reports",
    ],
    process: baseProcess,
    benefits: [
      { title: "Defensible Opinions", desc: "Findings based on expertise and supporting data." },
      { title: "Legal Ready", desc: "Reports for NCAT, AFCA, and expert witness testimony." },
      { title: "Actionable Findings", desc: "Clear conclusions and rectification recommendations." },
      { title: "Strata Support", desc: "Specialist reporting for Strata Management needs." },
    ],
    industries: ["Strata Management", "Insurance", "Legal", "Homeowners", "Builders"],
  },
  {
    slug: "marine",
    route: "/services/marine",
    icon: Waves,
    title: "Marine Structures Engineering",
    short: "Design, construction, and maintenance of structures in the marine environment.",
    eyebrow: "Marine",
    hero: { italic: "resilient", accent: " waterfronts." },
    intro:
      "Marine structures engineering is a field of engineering that focuses on the design, construction, and maintenance of structures in the marine environment, accounting for ever-changing conditions.",
    offerings: [
      "Jetties and Wharves",
      "Pontoons and Seawalls",
      "Stonewalls and revetments",
      "Slipways and Slip Rails",
      "Boatsheds and waterfront access",
      "Mooring Piles engineering",
    ],
    process: baseProcess,
    benefits: [
      { title: "Environmental Resilience", desc: "Built to survive the specific needs of the marine environment." },
      { title: "Multidisciplinary Approach", desc: "Integrated civil and structural marine knowledge." },
      { title: "Longevity", desc: "Focus on construction quality for harsh saltwater exposure." },
      { title: "Functional Access", desc: "Practical boatshed and slipway engineering." },
    ],
    industries: ["Waterfront Residential", "Marinas", "Public Foreshore"],
  },
  {
    slug: "expert-reports",
    route: "/services/expert-reports",
    icon: FileText,
    title: "Certificates & Compliance",
    short: "Design and compliance certificates for DA, CC, CDC and existing structures.",
    eyebrow: "Compliance",
    hero: { italic: "certified", accent: " excellence." },
    intro:
      "We ensure designs and products meet relevant Australian Standards and the National Construction Code (NCC) along with local authority management policies.",
    offerings: [
      "Design Certificates for DA, CC, CDC",
      "Certificate of Adequacy for existing structures",
      "Certificate of Compliance",
      "Work-As-Executed / As-Built Plan Certificates",
      "Section 3.5 Flood Prone Compliance Certificates",
      "Performance-based provision assessments",
    ],
    process: [
      { step: "01", title: "Instruction & Scope", desc: "Clear instructions and site information agreed before inspection." },
      { step: "02", title: "Inspection", desc: "Structured site inspection with photographic and dimensional records." },
      { step: "03", title: "Analysis", desc: "Assessment against relevant codes, standards and manufacturer data." },
      { step: "04", title: "Report & Sign-Off", desc: "Report issued under a chartered engineer's seal, ready for use." },
    ],
    benefits: [
      { title: "Regulatory Peace of Mind", desc: "Meeting all local authority and NCC requirements." },
      { title: "Existing Structure Sign-off", desc: "Professional adequacy certification for older buildings." },
      { title: "Accurate Records", desc: "Work-As-Executed plans that reflect true site conditions." },
      { title: "Expert Seal", desc: "Certificates backed by qualified, registered engineers." },
    ],
    industries: ["Construction", "Development", "Real Estate", "Insurance"],
  },
  {
    slug: "project-management",
    route: "/services/project-management",
    icon: ClipboardList,
    title: "Development & Project Management",
    short: "End-to-end management from feasibility stage to occupancy certificate.",
    eyebrow: "Management",
    hero: { italic: "coordinated", accent: " delivery." },
    intro:
      "We involve ourselves in the entire project lifecycle, managing planning, design, construction, and maintenance to ensure successful delivery.",
    offerings: [
      "Feasibility stage planning",
      "Design and Document management for DA, CC, CDC",
      "Liaising and Coordinating authority approvals",
      "Construction oversight",
      "Maintenance planning",
      "Occupancy certificate coordination",
    ],
    process: [
      { step: "01", title: "Feasibility", desc: "Site, planning and budget review to test the opportunity honestly." },
      { step: "02", title: "Design & Approvals", desc: "Consultant team assembled and driven to a lodgeable package." },
      { step: "03", title: "Delivery", desc: "Procurement, contract administration and site oversight." },
      { step: "04", title: "Handover", desc: "Commissioning, certification and defects management to close out." },
    ],
    benefits: [
      { title: "Full Lifecycle Ownership", desc: "Managed from the first sketch to the final certificate." },
      { title: "Authority Expertise", desc: "Seamless navigation of council and government approvals." },
      { title: "Risk Mitigation", desc: "Professional oversight to prevent project delays and cost overruns." },
      { title: "Single Accountability", desc: "One point of contact for the entire development process." },
    ],
    industries: ["Residential", "Commercial", "Industrial", "Healthcare"],
  },
];

export const otherDisciplines = [
  { icon: Compass, title: "Stormwater Engineering", desc: "On-site detention, WSUD and stormwater concept to construction.", route: "/services/civil" },
  { icon: BadgeCheck, title: "Engineering Certificates", desc: "Compliance certificates issued by registered engineers.", route: "/services/expert-reports" },
] as const;

export function getService(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}
