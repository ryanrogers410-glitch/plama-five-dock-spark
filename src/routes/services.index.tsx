import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/data/services";
import heroImg from "@/assets/hero-structure.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Engineering Services — Plama Projects Sydney" },
      { name: "description", content: "Structural, civil, façade, hydraulic, marine and expert engineering services — delivered in-house across Sydney." },
      { property: "og:title", content: "Engineering Services — Plama Projects" },
      { property: "og:description", content: "Eight disciplines. One team. Explore Plama Projects' full engineering service range." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Comprehensive Engineering"
        italic="Solutions"
        accent="."
        body="From concept feasibility through certification, every service is delivered by chartered engineers under one roof. We take pride in offering a broad range of services that cater to our clients' needs from the outset of a project all the way to its completion."
        image={heroImg}
      />

      {/* Intro Section */}
      <section className="container-px mx-auto w-full py-16 md:py-24 border-b border-border">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Expertise & Innovation</span>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[var(--ink)] leading-tight">
              We Cover Multiple Sectors of the <span className="italic text-[var(--brand)]">Industry.</span>
            </h2>
            <p className="mt-6 text-lg text-[var(--ink-soft)] leading-relaxed">
              Our services are tailored to meet the needs of the clients and are designed to provide a cost-effective and efficient solution. We use advanced computer-aided design (CAD), finite element analysis (FEA) software, and modern engineering techniques to ensure the quality and accuracy of your projects.
            </p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="bg-[var(--surface)] p-8 rounded-2xl border border-border">
              <h3 className="font-display text-xl text-[var(--ink)] mb-6">Our Specializations</h3>
              <ul className="space-y-4">
                {[
                  "Knock-down and Rebuild",
                  "Residential",
                  "Commercial",
                  "Industrial",
                  "Commercial Shop Fitouts",
                  "Healthcare, Hospital and Sport Center"
                ].map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-[var(--ink)]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)]" />
                    <span className="text-sm md:text-base font-medium">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Loop */}
      <div className="bg-white">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          
          // Map to original site images for the services page
          const serviceImages: Record<string, string> = {
            structural: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20180914_150128-scaled.jpg",
            civil: "https://plamaprojects.com.au/wp-content/uploads/2023/05/video-bg-1-1.jpg",
            facade: "https://plamaprojects.com.au/wp-content/uploads/2023/05/style_2_right1-1.jpeg",
            marine: "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20170430_075357-1-scaled.jpg",
            hydraulic: "https://plamaprojects.com.au/wp-content/uploads/2023/07/flood-map-scaled.jpg",
            "expert-reports": "https://plamaprojects.com.au/wp-content/uploads/2023/07/stamped_1-AEP-Suspended-Floor-Max-Water-Depth-scaled.jpg",
            weatherproofing: "https://plamaprojects.com.au/wp-content/uploads/2023/05/video-bg-1-1.jpg",
            "project-management": "https://plamaprojects.com.au/wp-content/uploads/2023/07/IMG_20180914_150128-scaled.jpg"
          };
          
          const imgUrl = serviceImages[service.slug] || serviceImages.structural;
          
          return (
            <section 
              key={service.slug} 
              id={service.slug}
              className={`py-20 md:py-32 ${index !== 0 ? 'border-t border-border' : ''}`}
            >
              <div className="container-px mx-auto w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                  {/* Text Content */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-7'}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--brand)]/10 text-[var(--brand)]">
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm tracking-[0.2em] uppercase text-[var(--accent-orange)] font-semibold">
                        0{index + 1}
                      </span>
                    </div>
                    
                    <h2 className="font-display text-4xl md:text-5xl text-[var(--ink)] mb-6 leading-[1.1]">
                      {service.title}
                    </h2>
                    
                    <div className="space-y-4 text-[var(--ink-soft)] text-lg leading-relaxed">
                      <p>{service.intro}</p>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                      {service.offerings.map((offering) => (
                        <div key={offering} className="flex items-start gap-3 group">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--accent-orange)] shrink-0 transition-transform group-hover:scale-125" />
                          <span className="text-sm md:text-base text-[var(--ink)] leading-snug">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2 lg:col-start-8' : 'lg:order-1'}`}>
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
                      <img 
                        src={imgUrl} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                      
                      {/* Floating tag */}
                      <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white">
                        <p className="text-xs uppercase tracking-widest text-white/80 mb-2">Service Discipline</p>
                        <h4 className="font-display text-xl">{service.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Why Us / Best Service Section */}
      <section className="bg-[var(--brand)] text-white py-20 md:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <IconGrid />
        </div>
        <div className="container-px mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm rounded-full text-xs uppercase tracking-widest text-[var(--accent-orange)] mb-6">
              Our Commitment
            </span>
            <h2 className="font-display text-4xl md:text-6xl mb-8 leading-tight">
              We Provide the <span className="italic text-white/80">Best Service</span> in Industry.
            </h2>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
              With every new project, we are faced with a fresh challenge of upholding our commitment to providing top-notch customer satisfaction.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-[var(--brand)] hover:bg-[var(--accent-orange)] hover:text-white border-transparent">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function IconGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 rotate-12 scale-150">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="h-32 w-32 border border-white/20 rounded-2xl" />
      ))}
    </div>
  );
}
