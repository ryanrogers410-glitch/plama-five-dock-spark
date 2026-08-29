import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { photos } from "@/data/photos";

const heroImg = photos.diningWide;

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects & Portfolio — Plama Projects" },
      { name: "description", content: "A selection of representative engineering projects delivered by Plama Projects across Sydney." },
      { property: "og:title", content: "Projects — Plama Projects" },
      { property: "og:description", content: "Representative engineering work across residential, commercial, healthcare and marine sectors." },
    ],
  }),
  component: Projects,
});

const projects = [
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20180914_150128-scaled.jpg", 
    title: "NEW BUILT", 
    subtitle: "Knock Down - Rebuilt",
    location: "Sydney Metro", 
    tags: ["Structural", "Civil"], 
    desc: "A significant residential new build featuring comprehensive structural and civil engineering solutions." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20170430_075357-1-scaled.jpg", 
    title: "TOWNHOUSES", 
    subtitle: "Knock Down - Rebuilt",
    location: "Sydney Metro", 
    tags: ["Structural", "Civil"], 
    desc: "High-density residential development with complex structural framing and site coordination." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/05/style_2_right1-1.jpeg", 
    title: "RENOVATIONS", 
    subtitle: "Alterations & Additions",
    location: "Five Dock", 
    tags: ["Structural", "Civil"], 
    desc: "Sophisticated interior renovations requiring meticulous structural interventions and design sensitivity." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20170430_075357-1-scaled.jpg", 
    title: "FACADE", 
    subtitle: "FACADE ENGINEERING",
    location: "Sydney Metro", 
    tags: ["Facade"], 
    desc: "Structural facade engineering for multi-story residential construction, ensuring safety and architectural intent." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/flood-map-scaled.jpg", 
    title: "FLOOD STUDY", 
    subtitle: "Hydraulic & Stormwater",
    location: "Sydney", 
    tags: ["Hydraulic", "Stormwater"], 
    desc: "Detailed flood mapping and hydraulic analysis for site feasibility and development approval." 
  },
  { 
    img: "https://plamaprojects.com.au/wp-content/uploads/2023/07/stamped_1-AEP-Suspended-Floor-Max-Water-Depth-scaled.jpg", 
    title: "DRAINAGE", 
    subtitle: "Stormwater Management",
    location: "Sydney Metro", 
    tags: ["Stormwater"], 
    desc: "Engineered stormwater drainage systems for complex urban residential developments." 
  },
];

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="We Have Solutions for A Wide Range of"
        italic="Projects"
        accent="!"
        body="A representative selection of the residential, commercial, and infrastructure work delivered by our multidisciplinary team."
        image={heroImg}
      />

      <section className="container-px mx-auto w-full py-16 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`relative overflow-hidden rounded-lg group ${
                i % 5 === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={p.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>


      <CTASection />
    </>
  );
}
