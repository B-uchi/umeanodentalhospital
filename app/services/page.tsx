import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ServiceFilter } from "@/components/ServiceFilter";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the full range of dental and maxillofacial services at Umeano Dental — from routine check-ups to complex oral surgery, all under one roof in Onitsha.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="pt-[68px]">

        {/* Hero */}
        <section className="bg-navy py-24 px-[6vw]">
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              What We Do
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-normal leading-[1.1] text-white max-w-[640px]">
              Comprehensive Care, <em>One Roof</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[1rem] leading-[1.8] text-muted max-w-[520px] mt-5">
              From your child&rsquo;s first check-up to complex maxillofacial reconstruction — every service we offer
              is delivered by qualified specialists who genuinely care about your outcome.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="flex gap-4 mt-8 flex-wrap">
              <Link
                href="/#appointment"
                className="bg-gold text-navy-deep px-[22px] py-[12px] rounded-full text-[0.82rem] font-medium no-underline transition-all duration-200 hover:-translate-y-px hover:brightness-105"
              >
                Book a Consultation
              </Link>
              <a
                href="tel:+234000000000"
                className="text-white text-[0.82rem] font-medium no-underline px-[22px] py-[12px] rounded-full border-[1.5px] border-white/30 transition-all duration-200 hover:border-white"
              >
                Call for Emergencies
              </a>
            </div>
          </Reveal>
        </section>

        {/* Filter + Grid */}
        <section className="bg-cream py-20 px-[6vw]">
          <Suspense>
            <ServiceFilter />
          </Suspense>
        </section>

        {/* Emergency strip */}
        <section className="bg-white py-14 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-6 border-t border-line">
          <div>
            <p className="font-serif text-[1.3rem] italic text-navy">Dental emergency?</p>
            <p className="text-[0.88rem] text-muted mt-1">We accept urgent cases — call us directly.</p>
          </div>
          <a
            href="tel:+234000000000"
            className="bg-navy text-white px-[22px] py-[12px] rounded-full text-[0.82rem] font-medium no-underline transition-all duration-200 hover:bg-navy-mid hover:-translate-y-px whitespace-nowrap"
          >
            Call Now →
          </a>
        </section>

      </main>
      <Footer />
    </>
  );
}
