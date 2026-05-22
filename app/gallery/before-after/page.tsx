import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { beforeAfterItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Before & After",
  description:
    "Real patient results from Umeano Dental & Maxillofacial Hospital — orthodontics, cosmetic dentistry, implants, and more.",
};

const ImgPh = ({ label, type }: { label: string; type: "before" | "after" }) => (
  <div
    className={`w-full h-full flex items-center justify-center flex-col gap-2 ${
      type === "before"
        ? "bg-[linear-gradient(135deg,#e8edf4_0%,#dde4ef_100%)]"
        : "bg-[linear-gradient(135deg,#e8f0e8_0%,#d4e8d4_100%)]"
    }`}
  >
    <svg viewBox="0 0 24 24" className="w-9 h-9 opacity-20 fill-navy">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
    <span className="text-[0.62rem] tracking-[0.14em] uppercase text-navy opacity-30">{label}</span>
  </div>
);

export default function BeforeAfterPage() {
  return (
    <>
      <Nav />
      <main className="pt-[68px]">

        {/* Hero */}
        <section className="bg-navy py-20 px-[6vw]">
          <Reveal>
            <nav className="flex items-center gap-2 text-[0.72rem] text-muted mb-8" aria-label="Breadcrumb">
              <span className="text-muted">Gallery</span>
              <span>/</span>
              <span className="text-gold">Before &amp; After</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              Real Results
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal leading-[1.1] text-white max-w-[680px]">
              Transformations That <em>Speak for Themselves</em>
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-[1rem] leading-[1.8] text-muted max-w-[520px] mt-5">
              These are real outcomes from real patients at Umeano Dental. Each case is different — we share these
              results to give you a realistic picture of what&rsquo;s possible.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-[0.78rem] text-muted/60 mt-3">
              All images are shared with patient consent. Individual results may vary.
            </p>
          </Reveal>
          <Reveal delay={5}>
            <Link
              href="/gallery/photos"
              className="inline-flex items-center gap-2 mt-7 text-[0.82rem] font-medium tracking-[0.08em] uppercase text-white/70 no-underline px-6 py-[10px] rounded-full border-[1.5px] border-white/20 transition-all duration-200 hover:border-white/50 hover:text-white"
            >
              ← Photo Booth
            </Link>
          </Reveal>
        </section>

        {/* Before / After grid */}
        <section className="bg-cream py-20 px-[6vw]">
          <div className="flex flex-col gap-10">
            {beforeAfterItems.map((item, i) => (
              <Reveal key={item.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="bg-white rounded-[24px] overflow-hidden border border-line hover:shadow-[0_16px_48px_rgba(10,22,40,0.08)] transition-shadow duration-300">
                  {/* Split image */}
                  <div className="grid grid-cols-2 h-[280px] max-sm:h-[200px]">
                    <div className="relative overflow-hidden">
                      <ImgPh label="Before" type="before" />
                      <div className="absolute top-3 left-3 bg-ink/80 text-white text-[0.62rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full">
                        Before
                      </div>
                    </div>
                    <div className="relative overflow-hidden border-l border-line">
                      <ImgPh label="After" type="after" />
                      <div className="absolute top-3 left-3 bg-forest/90 text-white text-[0.62rem] font-medium tracking-[0.1em] uppercase px-3 py-1 rounded-full">
                        After
                      </div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="px-7 py-5 flex items-start justify-between gap-4 flex-wrap max-sm:px-5">
                    <div>
                      <div className="text-[0.68rem] tracking-[0.12em] uppercase text-gold mb-1">{item.service}</div>
                      <h3 className="font-serif text-[1.1rem] font-medium text-navy mb-2">{item.label}</h3>
                      <p className="text-[0.82rem] leading-[1.65] text-muted max-w-[480px]">{item.description}</p>
                    </div>
                    <Link
                      href={`/services/${item.serviceSlug}`}
                      className="shrink-0 text-[0.72rem] font-medium tracking-[0.07em] uppercase text-navy no-underline px-4 py-[8px] rounded-full border-[1.5px] border-navy transition-all duration-200 hover:bg-navy hover:text-white whitespace-nowrap"
                    >
                      About this Treatment
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Disclaimer + CTA */}
        <section className="bg-white py-14 px-[6vw] border-t border-line flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-[480px]">
            <p className="text-[0.82rem] leading-[1.7] text-muted">
              Results shown are individual outcomes and not a guarantee of what any specific patient will achieve.
              Treatment outcomes depend on many individual factors. Book a consultation for a personalised assessment.
            </p>
          </div>
          <Link
            href="/#appointment"
            className="bg-navy text-white px-[22px] py-[12px] rounded-full text-[0.82rem] font-medium no-underline transition-all duration-200 hover:bg-navy-mid hover:-translate-y-px whitespace-nowrap shrink-0"
          >
            Book a Consultation →
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
