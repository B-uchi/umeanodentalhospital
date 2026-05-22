import Link from "next/link";
import { Reveal } from "@/components/Reveal";

const ImagePh = ({ label }: { label: string }) => (
  <div className="w-full h-full bg-[linear-gradient(135deg,#e0e8f0_0%,#cdd8e4_100%)] flex items-center justify-center flex-col gap-2">
    <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-20 fill-navy">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
    <span className="text-[0.68rem] tracking-[0.12em] uppercase text-navy opacity-30">{label}</span>
  </div>
);

export function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 px-[6vw] grid grid-cols-1 md:grid-cols-2 gap-[72px] items-center max-md:gap-12"
    >
      {/* Image stack */}
      <Reveal className="relative h-[540px] max-md:h-[340px]">
        {/* Main image */}
        <div className="w-[78%] h-[460px] rounded-[28px] overflow-hidden absolute top-0 left-0 max-md:h-[280px]">
          <ImagePh label="Clinic Photo" />
        </div>
        {/* Secondary image */}
        <div className="w-[58%] h-[300px] rounded-[28px] overflow-hidden absolute bottom-0 right-0 border-[6px] border-cream shadow-[0_20px_60px_rgba(10,22,40,0.1)] max-md:h-[180px]">
          <ImagePh label="Team Photo" />
        </div>
        {/* Experience chip */}
        <div className="absolute top-8 right-0 bg-navy text-white px-[22px] py-[18px] rounded-[20px] text-center">
          <strong className="block font-serif text-[2.2rem] font-medium text-gold leading-none">20+</strong>
          <span className="text-[0.68rem] tracking-[0.1em] uppercase text-muted">Years of Excellence</span>
        </div>
      </Reveal>

      {/* Content */}
      <div className="py-3">
        <Reveal>
          <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
            About Us
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-navy mb-4">
            A Family Legacy of<br /><em>Dental Excellence</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="text-[0.95rem] leading-[1.75] text-muted max-w-[480px]">
            Umeano Dental &amp; Maxillofacial hospital has been caring for smiles across Onitsha and the
            broader Anambra State community for over two decades. We combine advanced clinical expertise
            with genuine warmth and patient-centred values.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <p className="text-[0.95rem] leading-[1.75] text-muted max-w-[480px] mt-[14px]">
            As a maxillofacial hospital, we offer a breadth of specialised care rarely found under one
            roof — from routine check-ups to complex oral surgery — all delivered by a team of highly
            qualified, compassionate professionals.
          </p>
        </Reveal>
        <Reveal delay={4}>
          <div className="grid grid-cols-2 gap-4 mt-9 max-sm:grid-cols-1">
            {[
              {
                title: "Clinical Excellence",
                body: "Evidence-based treatments and the latest dental technologies, delivered by board-certified specialists.",
              },
              {
                title: "Patient Comfort",
                body: "A calm, welcoming environment designed to ease anxiety and build lasting trust with every patient.",
              },
              {
                title: "Comprehensive Care",
                body: "From preventive dentistry to advanced maxillofacial procedures — all under one roof.",
              },
              {
                title: "Community Roots",
                body: "Proudly serving Onitsha and surrounding communities, with deep ties to the families we care for.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="px-4 py-[18px] rounded-[12px] bg-cream border-l-[3px] border-gold"
              >
                <strong className="block text-[0.82rem] font-medium text-navy mb-[5px]">{v.title}</strong>
                <p className="text-[0.78rem] leading-[1.6] text-muted">{v.body}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-[6px] mt-8 text-[0.82rem] font-medium tracking-[0.08em] uppercase text-navy no-underline px-6 py-[10px] rounded-full border-[1.5px] border-navy transition-all duration-200 hover:bg-navy hover:text-white"
          >
            Our Full Story →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
