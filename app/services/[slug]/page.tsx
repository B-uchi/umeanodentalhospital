import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { services } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.heroSentence,
  };
}

const categoryLabel: Record<string, string> = {
  surgery: "Oral Surgery",
  preventive: "Preventive Care",
  cosmetic: "Cosmetic Dentistry",
  restorative: "Restorative Dentistry",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug && s.category === service.category).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-[68px]">

        {/* Breadcrumb + Hero */}
        <section className="bg-navy py-20 px-[6vw]">
          <Reveal>
            <nav className="flex items-center gap-2 text-[0.72rem] text-muted mb-8" aria-label="Breadcrumb">
              <Link href="/services" className="no-underline text-muted hover:text-gold transition-colors">Services</Link>
              <span>/</span>
              <span className="text-gold">{service.shortTitle}</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <div className="inline-block text-[0.68rem] tracking-[0.14em] uppercase text-gold px-3 py-1 border border-gold/30 rounded-full mb-5">
              {categoryLabel[service.category] ?? service.category}
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal leading-[1.1] text-white max-w-[720px]">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-[1rem] leading-[1.8] text-muted max-w-[580px] mt-5">{service.heroSentence}</p>
          </Reveal>
          <Reveal delay={4}>
            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                href="/#appointment"
                className="bg-gold text-navy-deep px-[22px] py-[12px] rounded-full text-[0.82rem] font-medium no-underline transition-all duration-200 hover:-translate-y-px hover:brightness-105"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="text-white text-[0.82rem] font-medium no-underline px-[22px] py-[12px] rounded-full border-[1.5px] border-white/30 transition-all duration-200 hover:border-white"
              >
                ← All Services
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Quick stats bar */}
        <div className="bg-gold-pale border-b border-gold/20 px-[6vw] py-5 flex gap-10 flex-wrap">
          {[
            ["Duration", service.duration],
            ["Recovery", service.recovery],
            ["Category", categoryLabel[service.category] ?? service.category],
          ].map(([label, val]) => (
            <div key={label}>
              <div className="text-[0.65rem] tracking-[0.14em] uppercase text-gold mb-[3px]">{label}</div>
              <div className="text-[0.88rem] font-medium text-navy">{val}</div>
            </div>
          ))}
        </div>

        {/* Main content */}
        <section className="bg-white py-20 px-[6vw]">
          <div className="max-w-[820px]">

            {/* What it is */}
            <Reveal>
              <h2 className="font-serif text-[1.6rem] font-normal text-navy mb-4">
                What is <em>{service.shortTitle}?</em>
              </h2>
              <p className="text-[0.95rem] leading-[1.8] text-muted">{service.whatItIs}</p>
            </Reveal>

            {/* Who it's for */}
            <Reveal>
              <div className="mt-10 p-7 bg-cream rounded-[20px] border-l-[3px] border-gold">
                <h3 className="font-serif text-[1.1rem] font-medium text-navy mb-3">Who is this for?</h3>
                <p className="text-[0.9rem] leading-[1.75] text-muted">{service.whoItsFor}</p>
              </div>
            </Reveal>

            {/* What to expect */}
            <Reveal>
              <div className="mt-10">
                <h2 className="font-serif text-[1.6rem] font-normal text-navy mb-6">
                  What to <em>Expect</em>
                </h2>
                <ol className="flex flex-col gap-4 list-none">
                  {service.whatToExpect.map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="shrink-0 w-[28px] h-[28px] rounded-full bg-navy text-white text-[0.72rem] font-medium flex items-center justify-center mt-px">
                        {i + 1}
                      </span>
                      <p className="text-[0.9rem] leading-[1.75] text-muted pt-[3px]">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* Benefits */}
            <Reveal>
              <div className="mt-10">
                <h2 className="font-serif text-[1.6rem] font-normal text-navy mb-6">
                  The <em>Benefits</em>
                </h2>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex gap-3 items-start bg-cream rounded-[16px] p-5">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold shrink-0 mt-[2px]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <p className="text-[0.86rem] leading-[1.65] text-ink">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* FAQs */}
            <Reveal>
              <div className="mt-14">
                <h2 className="font-serif text-[1.6rem] font-normal text-navy mb-7">
                  Frequently Asked <em>Questions</em>
                </h2>
                <div className="flex flex-col gap-5">
                  {service.faqs.map((faq, i) => (
                    <div key={i} className="border border-line rounded-[16px] p-6 hover:border-gold/40 transition-colors duration-200">
                      <h3 className="text-[0.92rem] font-medium text-navy mb-3">{faq.q}</h3>
                      <p className="text-[0.86rem] leading-[1.7] text-muted">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-navy py-14 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[1.3rem] italic text-white">Ready to take the next step?</p>
            <p className="text-[0.88rem] text-muted mt-1">
              Book a consultation and we&rsquo;ll talk through whether {service.shortTitle} is right for you.
            </p>
          </div>
          <Link
            href="/#appointment"
            className="bg-gold text-navy-deep px-[22px] py-[13px] rounded-full text-[0.82rem] font-medium no-underline transition-all duration-200 hover:-translate-y-px hover:brightness-105 whitespace-nowrap shrink-0"
          >
            Book Now →
          </Link>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="bg-cream py-20 px-[6vw]">
            <Reveal>
              <h2 className="font-serif text-[1.6rem] font-normal text-navy mb-8">
                Related <em>Services</em>
              </h2>
            </Reveal>
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
              {related.map((s) => (
                <Reveal key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="block bg-white border border-line rounded-[20px] p-6 no-underline hover:-translate-y-[3px] hover:shadow-[0_16px_48px_rgba(10,22,40,0.08)] hover:border-gold/35 transition-all duration-300 group"
                  >
                    <div className="text-[0.66rem] tracking-[0.12em] uppercase text-gold mb-2">{s.category}</div>
                    <h3 className="font-serif text-[1.05rem] font-medium text-navy mb-2 group-hover:text-navy">{s.title}</h3>
                    <p className="text-[0.78rem] leading-[1.65] text-muted">{s.tagline}</p>
                    <span className="inline-block mt-4 text-[0.7rem] font-medium tracking-[0.07em] uppercase text-gold">
                      Learn More →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
