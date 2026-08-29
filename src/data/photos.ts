// High-quality photography sourced from the original Plama Projects
// media library (Panda Studio project shots + on-site construction photos),
// plus one openly-licensed marine/wharf photograph.

import interiorLivingWide from "@/assets/photos/interior-living-wide.jpg";
import kitchenPortrait from "@/assets/photos/kitchen-portrait.jpg";
import skylightDetail from "@/assets/photos/skylight-detail.jpg";
import diningPortrait from "@/assets/photos/dining-portrait.jpg";
import joineryArch from "@/assets/photos/joinery-arch.jpg";
import glassSkylightPortrait from "@/assets/photos/glass-skylight-portrait.jpg";
import kitchenIslandWide from "@/assets/photos/kitchen-island-wide.jpg";
import diningWide from "@/assets/photos/dining-wide.jpg";
import kitchenDarkPortrait from "@/assets/photos/kitchen-dark-portrait.jpg";
import livingWindowWide from "@/assets/photos/living-window-wide.jpg";
import bathroomPortrait from "@/assets/photos/bathroom-portrait.jpg";
import vanityWide from "@/assets/photos/vanity-wide.jpg";
import siteSteelFrame from "@/assets/photos/site-steel-frame.jpg";
import siteNewBuild from "@/assets/photos/site-new-build.jpg";
import siteFitout from "@/assets/photos/site-fitout.jpg";
import marinaWharf from "@/assets/photos/marina-wharf.jpg";

// Engineering-discipline photography
import svcStructural from "@/assets/service-structural.jpg";
import svcCivil from "@/assets/service-civil.jpg";
import svcCivilPortrait from "@/assets/service-civil-portrait.jpg";
import svcFacade from "@/assets/service-facade.jpg";
import svcMarine from "@/assets/service-marine.jpg";
import svcHydraulic from "@/assets/service-hydraulic.jpg";
import svcHydraulicPortrait from "@/assets/service-hydraulic-portrait.jpg";
import svcWeatherproofing from "@/assets/service-weatherproofing.jpg";
import svcExpert from "@/assets/service-expert.jpg";
import svcPm from "@/assets/service-pm.jpg";
import svcDetail from "@/assets/service-detail.jpg";
import sectorCommercial from "@/assets/sector-commercial.jpg";
import sectorMarine from "@/assets/sector-marine.jpg";
import project1 from "@/assets/project-1.jpg";
import project4 from "@/assets/project-4.jpg";
import heroStructure from "@/assets/hero-structure.jpg";

export const photos = {
  interiorLivingWide,
  kitchenPortrait,
  skylightDetail,
  diningPortrait,
  joineryArch,
  glassSkylightPortrait,
  kitchenIslandWide,
  diningWide,
  kitchenDarkPortrait,
  livingWindowWide,
  bathroomPortrait,
  vanityWide,
  siteSteelFrame,
  siteNewBuild,
  siteFitout,
  marinaWharf,
  svcStructural,
  svcCivil,
  svcCivilPortrait,
  svcFacade,
  svcMarine,
  svcHydraulic,
  svcHydraulicPortrait,
  svcWeatherproofing,
  svcExpert,
  svcPm,
  svcDetail,
  sectorCommercial,
  sectorMarine,
  project1,
  project4,
  heroStructure,
};

export type ServicePhotoSet = {
  hero: string;
  portrait: string;
  wide: string;
  faq: string;
};

export const servicePhotos: Record<string, ServicePhotoSet> = {
  structural: {
    hero: svcStructural,
    portrait: siteSteelFrame,
    wide: siteNewBuild,
    faq: project4,
  },
  civil: {
    hero: svcCivil,
    portrait: svcCivilPortrait,
    wide: svcCivil,
    faq: svcCivilPortrait,
  },
  facade: {
    hero: svcFacade,
    portrait: sectorCommercial,
    wide: svcFacade,
    faq: sectorCommercial,
  },
  hydraulic: {
    hero: svcHydraulic,
    portrait: svcHydraulicPortrait,
    wide: svcHydraulic,
    faq: svcHydraulicPortrait,
  },
  weatherproofing: {
    hero: svcWeatherproofing,
    portrait: svcDetail,
    wide: svcWeatherproofing,
    faq: svcDetail,
  },
  marine: {
    hero: svcMarine,
    portrait: sectorMarine,
    wide: marinaWharf,
    faq: sectorMarine,
  },
  "expert-reports": {
    hero: svcExpert,
    portrait: svcDetail,
    wide: svcExpert,
    faq: svcExpert,
  },
  "project-management": {
    hero: svcPm,
    portrait: project4,
    wide: heroStructure,
    faq: svcPm,
  },
};


/** Accreditation / award badges shown in the homepage hero marquee. */
export const accreditations = [
  { src: "/assets/accreditations/EAlogo.jpg", alt: "Engineers Australia" },
  { src: "/assets/accreditations/NERlogo.png", alt: "Registered on the National Engineering Register (NER)" },
  { src: "/assets/accreditations/APEC.jpg", alt: "APEC Registered Engineer" },
  { src: "/assets/accreditations/new-south-wales-nsw-government-fair-trading-vector-logo.png", alt: "NSW Fair Trading" },
  { src: "/assets/accreditations/award-badge-two-line-large.png", alt: "Award Badge" },
  { src: "/assets/accreditations/EAlogo.jpg", alt: "Engineers Australia (Repeated)" },
  { src: "/assets/accreditations/NERlogo.png", alt: "NER (Repeated)" },
  { src: "/assets/accreditations/APEC.jpg", alt: "APEC (Repeated)" },
];
