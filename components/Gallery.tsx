import { Reveal } from "@/components/Reveal";

const ImgPh = ({ label }: { label: string }) => (
  <div className="w-full h-full bg-[linear-gradient(135deg,#e0e8f0_0%,#cdd8e4_100%)] flex items-center justify-center flex-col gap-2 transition-transform duration-500 group-hover:scale-[1.04]">
    <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-20 fill-white">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
    <span className="text-[0.68rem] tracking-[0.12em] uppercase text-white opacity-40">{label}</span>
  </div>
);

const items = [
  { key: "g1", label: "Reception", caption: "Reception Area", span: "col-span-5 row-span-2 max-md:col-span-1 max-md:row-span-1" },
  { key: "g2", label: "Treatment Room", caption: "Treatment Room", span: "col-span-4 max-md:col-span-1" },
  { key: "g3", label: "X-Ray Suite", caption: "Digital X-Ray Suite", span: "col-span-3 max-md:col-span-1" },
  { key: "g4", label: "Surgical Theatre", caption: "Surgical Suite", span: "col-span-3 max-md:col-span-1" },
  { key: "g5", label: "Waiting Lounge", caption: "Patient Lounge", span: "col-span-4 max-md:col-span-2" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-navy py-24 px-[6vw]">
      <Reveal>
        <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
          Our Clinic
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-white mb-4">
          A Glimpse Inside <em>Our World</em>
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="text-[0.95rem] leading-[1.75] text-muted max-w-[480px]">
          State-of-the-art facilities designed for your comfort, precision, and peace of mind.
        </p>
      </Reveal>

      <Reveal delay={3}>
        <div className="grid grid-cols-12 grid-rows-[260px_260px] gap-[10px] mt-11 rounded-[28px] overflow-hidden max-md:grid-cols-2 max-md:grid-rows-none max-md:auto-rows-[200px]">
          {items.map((item) => (
            <div
              key={item.key}
              className={`overflow-hidden cursor-pointer relative rounded-[12px] group ${item.span}`}
            >
              <ImgPh label={item.label} />
              <div className="absolute bottom-0 left-0 right-0 p-[14px_18px] bg-[linear-gradient(transparent,rgba(10,22,40,0.75))] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-[12px]">
                <span className="text-[0.72rem] tracking-[0.1em] uppercase text-gold-light">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
