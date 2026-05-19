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
const InfoCircle = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);
const Person = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const Circle = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 12 2z" />
  </svg>
);

/* Shared tile class helpers */
const tileBase =
  "relative overflow-hidden cursor-pointer flex flex-col justify-between rounded-[20px] px-7 py-[30px] " +
  "transition-all duration-300 " +
  /* accent bar pseudo-element */
  "before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-gold " +
  "before:scale-y-0 before:origin-top before:transition-transform before:duration-[350ms] " +
  "hover:before:scale-y-100";

const tileDefault =
  tileBase +
  " bg-white border border-line hover:shadow-[0_18px_56px_rgba(10,22,40,0.09)] hover:border-gold/35 hover:-translate-y-[3px]";

const tileFeatured =
  tileBase +
  " col-span-2 bg-navy border border-transparent hover:shadow-[0_18px_56px_rgba(10,22,40,0.18)] hover:-translate-y-[3px]";

const tileAccent =
  tileBase +
  " col-span-2 bg-gold-pale border border-gold/30 hover:shadow-[0_18px_56px_rgba(10,22,40,0.09)] hover:-translate-y-[3px]";

const iconWrapDefault = "w-[42px] h-[42px] rounded-[11px] bg-navy flex items-center justify-center mb-4 shrink-0";
const iconWrapFeatured = "w-[42px] h-[42px] rounded-[11px] bg-[rgba(200,169,110,0.18)] flex items-center justify-center mb-4 shrink-0";

const numDefault = "font-serif text-[2.6rem] font-light text-line leading-none mb-[10px]";
const numFeatured = "font-serif text-[2.6rem] font-light text-white/[0.08] leading-none mb-[10px]";
const numAccent = "font-serif text-[2.6rem] font-light text-gold/25 leading-none mb-[10px]";

const h3Default = "font-serif text-[1.15rem] font-medium text-navy mb-2 leading-[1.25]";
const h3Featured = "font-serif text-[1.15rem] font-medium text-white mb-2 leading-[1.25]";
const h3Accent = "font-serif text-[1.15rem] font-medium text-navy mb-2 leading-[1.25]";

const pDefault = "text-[0.78rem] leading-[1.7] text-muted";
const pFeatured = "text-[0.78rem] leading-[1.7] text-white/60";

const arrow =
  "inline-flex items-center gap-[5px] text-[0.7rem] font-medium tracking-[0.07em] uppercase text-gold no-underline mt-4";
const arrowFeatured =
  "inline-flex items-center gap-[5px] text-[0.7rem] font-medium tracking-[0.07em] uppercase text-gold-light no-underline mt-4";

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

      {/* Bento grid */}
      <div className="grid grid-cols-3 gap-[14px] max-[1100px]:grid-cols-2 max-sm:grid-cols-1">
        {/* 01 — Featured (spans 2) */}
        <Reveal className={tileFeatured}>
          <div>
            <div className={numFeatured}>01</div>
            <div className={iconWrapFeatured}><CheckCircle /></div>
            <h3 className={h3Featured}>Oral Surgery &amp; Maxillofacial</h3>
            <p className={pFeatured}>
              Extractions, jaw surgery, facial trauma reconstruction, and complex oral pathology — our
              signature specialisation.
            </p>
          </div>
          <a href="#appointment" className={arrowFeatured}>Book Consultation →</a>
        </Reveal>

        {/* 02 — General Dentistry (tall) */}
        <Reveal delay={1} className={`${tileDefault} min-h-[240px]`}>
          <div>
            <div className={numDefault}>02</div>
            <div className={iconWrapDefault}><ToothPin /></div>
            <h3 className={h3Default}>General Dentistry</h3>
            <p className={pDefault}>
              Examinations, professional cleanings, fillings, and preventive care to keep your oral
              health at its best.
            </p>
          </div>
          <a href="#appointment" className={arrow}>Book Now →</a>
        </Reveal>

        {/* 03 — Orthodontics */}
        <Reveal delay={1} className={tileDefault}>
          <div>
            <div className={numDefault}>03</div>
            <div className={iconWrapDefault}><GridCheck /></div>
            <h3 className={h3Default}>Orthodontics &amp; Braces</h3>
            <p className={pDefault}>Traditional braces and modern alignment solutions for all ages.</p>
          </div>
          <a href="#appointment" className={arrow}>Book Now →</a>
        </Reveal>

        {/* 04 — Cosmetic */}
        <Reveal delay={2} className={tileDefault}>
          <div>
            <div className={numDefault}>04</div>
            <div className={iconWrapDefault}><PlusCircle /></div>
            <h3 className={h3Default}>Cosmetic Dentistry</h3>
            <p className={pDefault}>Veneers, bonding, and smile makeovers — artistry meets precision.</p>
          </div>
          <a href="#appointment" className={arrow}>Book Now →</a>
        </Reveal>

        {/* 05 — Implants */}
        <Reveal delay={3} className={tileDefault}>
          <div>
            <div className={numDefault}>05</div>
            <div className={iconWrapDefault}><InfoCircle /></div>
            <h3 className={h3Default}>Dental Implants</h3>
            <p className={pDefault}>
              Permanent, natural-looking replacements restoring full function and aesthetics.
            </p>
          </div>
          <a href="#appointment" className={arrow}>Book Now →</a>
        </Reveal>

        {/* 06 — Paediatric (accent wide) */}
        <Reveal delay={2} className={tileAccent}>
          <div>
            <div className={numAccent}>06</div>
            <div className={iconWrapDefault}><Person /></div>
            <h3 className={h3Accent}>Paediatric Dentistry</h3>
            <p className={pDefault}>
              Gentle, child-friendly care in a welcoming environment — nurturing lifelong healthy habits
              from the very first visit.
            </p>
          </div>
          <a href="#appointment" className={arrow}>Book Now →</a>
        </Reveal>

        {/* 07 — Whitening */}
        <Reveal delay={3} className={tileDefault}>
          <div>
            <div className={numDefault}>07</div>
            <div className={iconWrapDefault}><Circle /></div>
            <h3 className={h3Default}>Teeth Whitening</h3>
            <p className={pDefault}>
              Professional-grade systems delivering safe, dramatic, long-lasting results.
            </p>
          </div>
          <a href="#appointment" className={arrow}>Book Now →</a>
        </Reveal>
      </div>

      {/* Emergency strip */}
      <Reveal>
        <div className="flex items-center justify-center gap-5 mt-7 py-[22px] border-t border-line flex-wrap">
          <span className="font-serif text-[1.1rem] italic font-normal text-muted">Have an emergency?</span>
          <a
            href="tel:+234000000000"
            className="text-[0.82rem] font-medium tracking-[0.08em] uppercase text-navy no-underline px-6 py-[10px] rounded-full border-[1.5px] border-navy transition-all duration-200 hover:bg-navy hover:text-white"
          >
            Call Now →
          </a>
        </div>
      </Reveal>
    </section>
  );
}
