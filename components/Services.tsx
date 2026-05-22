import Link from "next/link";
import { Reveal } from "@/components/Reveal";

/* ── icon helpers ── */
const CheckCircle = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);
const ToothPin = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
    <path d="M12 1.5C9.5 1.5 7.5 3.5 7.5 6c0 1.93 1.18 3.58 2.87 4.29L10 19.5h4l-.37-9.21C15.32 9.58 16.5 7.93 16.5 6c0-2.5-2-4.5-4.5-4.5z" />
  </svg>
);
const GridCheck = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
  </svg>
);
const PlusCircle = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 11h-2v-3H8v-2h3V8h2v3h3v2h-3v3z" />
  </svg>
);

const tileBase =
  "relative overflow-hidden cursor-pointer flex flex-col justify-between rounded-[20px] px-7 py-[30px] max-sm:px-5 max-sm:py-6 max-sm:gap-4 " +
  "transition-all duration-300 " +
  "before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-gold " +
  "before:scale-y-0 before:origin-top before:transition-transform before:duration-[350ms] " +
  "hover:before:scale-y-100";

const tileFeatured =
  tileBase +
  " col-span-2 bg-navy border border-transparent hover:shadow-[0_18px_56px_rgba(10,22,40,0.18)] hover:-translate-y-[3px] max-sm:col-span-1 max-sm:min-h-0";

const tileDefault =
  tileBase +
  " bg-white border border-line hover:shadow-[0_18px_56px_rgba(10,22,40,0.09)] hover:border-gold/35 hover:-translate-y-[3px] max-sm:min-h-0";

const iconWrapDefault = "w-[42px] h-[42px] rounded-[11px] bg-navy flex items-center justify-center mb-4 shrink-0";
const iconWrapFeatured = "w-[42px] h-[42px] rounded-[11px] bg-[rgba(200,169,110,0.18)] flex items-center justify-center mb-4 shrink-0";

const numFeatured = "font-serif text-[2.6rem] font-light text-white/[0.08] leading-none mb-[10px]";
const numDefault = "font-serif text-[2.6rem] font-light text-line leading-none mb-[10px]";

const h3Featured = "font-serif text-[1.15rem] font-medium text-white mb-2 leading-[1.25]";
const h3Default = "font-serif text-[1.15rem] font-medium text-navy mb-2 leading-[1.25]";

const pFeatured = "text-[0.78rem] leading-[1.7] text-white/60";
const pDefault = "text-[0.78rem] leading-[1.7] text-muted";

const arrowFeatured =
  "inline-flex items-center gap-[5px] text-[0.7rem] font-medium tracking-[0.07em] uppercase text-gold-light no-underline mt-4";
const arrow =
  "inline-flex items-center gap-[5px] text-[0.7rem] font-medium tracking-[0.07em] uppercase text-gold no-underline mt-4";

const top4 = [
  {
    num: "01",
    tile: tileDefault,
    iconWrap: iconWrapDefault,
    icon: <CheckCircle />,
  h3: h3Default,
    p: pDefault,
    arrowClass: arrow,
    title: "Oral Surgery & Maxillofacial",
    desc: "Extractions, jaw surgery, facial trauma reconstruction, and complex oral pathology — our signature specialisation.",
    slug: "oral-surgery-maxillofacial",
    height: "",
  },
  {
    num: "02",
    tile: `${tileDefault} min-h-[240px] max-sm:min-h-0`,
    iconWrap: iconWrapDefault,
    icon: <ToothPin />,
    h3: h3Default,
    p: pDefault,
    arrowClass: arrow,
    title: "General Dentistry",
    desc: "Examinations, professional cleanings, fillings, and preventive care to keep your oral health at its best.",
    slug: "general-dentistry",
    height: "",
  },
  {
    num: "03",
    tile: tileDefault,
    iconWrap: iconWrapDefault,
    icon: <GridCheck />,
    h3: h3Default,
    p: pDefault,
    arrowClass: arrow,
    title: "Orthodontics & Braces",
    desc: "Traditional braces and modern alignment solutions for all ages.",
    slug: "orthodontics-braces",
    height: "",
  },
  {
    num: "04",
    tile: tileDefault,
    iconWrap: iconWrapDefault,
    icon: <PlusCircle />,
    h3: h3Default,
    p: pDefault,
    arrowClass: arrow,
    title: "Cosmetic Dentistry",
    desc: "Veneers, bonding, and smile makeovers — artistry meets precision.",
    slug: "cosmetic-dentistry",
    height: "",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream py-24 px-[6vw]">
      {/* Header */}
      <div className="flex justify-between items-end mb-12 gap-10 flex-wrap">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              What We Do
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-navy">
              Our <em>Services</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={2}>
          <p className="text-[0.95rem] leading-[1.75] text-muted max-w-[320px]">
            A full spectrum of dental and maxillofacial care for every stage of your oral health journey.
          </p>
        </Reveal>
      </div>

      {/* Top 4 bento */}
      <div className="grid md:grid-cols-4 gap-[14px] max-[1100px]:grid-cols-2 max-sm:grid-cols-1 max-sm:auto-rows-auto">
        {top4.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) as 0 | 1 | 2} className={s.tile}>
            <div>
              <div className={numFeatured.includes(s.num) ? numFeatured : numDefault}>{s.num}</div>
              <div className={s.iconWrap}>{s.icon}</div>
              <h3 className={s.h3}>{s.title}</h3>
              <p className={s.p}>{s.desc}</p>
            </div>
            <Link href={`/services/${s.slug}`} className={s.arrowClass}>
              Learn More →
            </Link>
          </Reveal>
        ))}
      </div>

      {/* View All + Emergency */}
      <Reveal>
        <div className="flex items-center justify-between gap-5 mt-7 py-[22px] border-t border-line flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/services"
              className="text-[0.82rem] font-medium tracking-[0.08em] uppercase text-navy no-underline px-6 py-[10px] rounded-full border-[1.5px] border-navy transition-all duration-200 hover:bg-navy hover:text-white"
            >
              View All Services →
            </Link>
          </div>
          <a
            href="tel:+234000000000"
            className="text-[0.82rem] font-medium tracking-[0.08em] uppercase text-muted no-underline px-6 py-[10px] rounded-full border-[1.5px] border-line transition-all duration-200 hover:border-navy hover:text-navy"
          >
            Emergency? Call Now →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
