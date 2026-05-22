import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the specialists behind Umeano Dental & Maxillofacial Hospital — board-certified dentists and surgeons dedicated to exceptional patient care.",
};

const PersonPh = ({ label }: { label: string }) => (
  <div className="w-full h-full bg-[linear-gradient(135deg,#dde6f0_0%,#cdd8e6_100%)] flex items-center justify-center flex-col gap-2">
    <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-20 fill-navy">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
    <span className="text-[0.68rem] tracking-[0.12em] uppercase text-navy opacity-30">{label}</span>
  </div>
);

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main className="pt-[68px]">

        {/* Hero */}
        <section className="bg-navy py-24 px-[6vw]">
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              Our Specialists
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-normal leading-[1.1] text-white max-w-[680px]">
              The People Behind <em>Your Smile</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[1rem] leading-[1.8] text-muted max-w-[540px] mt-5">
              Every member of our team was chosen for two things: clinical excellence and genuine care for patients.
              You will be treated with skill and with humanity — every single time.
            </p>
          </Reveal>
        </section>

        {/* Team cards */}
        <section className="bg-cream py-20 px-[6vw]">
          <div className="flex flex-col gap-20">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={1}>
                <div className={`grid grid-cols-1 md:grid-cols-[340px_1fr] gap-12 items-start ${i % 2 !== 0 ? "md:grid-cols-[1fr_340px]" : ""}`}>
                  {/* Photo */}
                  <div className={`${i % 2 !== 0 ? "md:order-2" : ""}`}>
                    <div className="rounded-[28px] overflow-hidden h-[380px] max-md:h-[300px]">
                      <PersonPh label={member.ph} />
                    </div>
                    {/* Quals chips */}
                    <div className="flex flex-wrap gap-[6px] mt-4">
                      {member.quals.map((q) => (
                        <span
                          key={q}
                          className="text-[0.65rem] tracking-[0.06em] uppercase px-[10px] py-1 bg-white border border-line rounded-full text-ink"
                        >
                          {q}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 !== 0 ? "md:order-1" : ""}`}>
                    <div className="text-[0.72rem] tracking-[0.1em] uppercase text-gold mb-2">
                      {member.specialty}
                    </div>
                    <h2 className="font-serif text-[clamp(1.6rem,2.5vw,2.2rem)] font-normal text-navy leading-[1.15] mb-2">
                      {member.name}
                    </h2>
                    <div className="text-[0.78rem] tracking-[0.08em] uppercase text-muted mb-6">{member.role}</div>

                    {member.fullBio.map((para, j) => (
                      <p key={j} className="text-[0.92rem] leading-[1.8] text-muted mb-4">
                        {para}
                      </p>
                    ))}

                    {/* Education */}
                    <div className="mt-6 pt-6 border-t border-line">
                      <h3 className="text-[0.7rem] tracking-[0.14em] uppercase text-navy mb-3">Education</h3>
                      <ul className="flex flex-col gap-2 list-none">
                        {member.education.map((edu) => (
                          <li key={edu} className="flex items-start gap-2">
                            <span className="shrink-0 w-[6px] h-[6px] rounded-full bg-gold mt-[7px]" />
                            <span className="text-[0.84rem] text-muted">{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Languages */}
                    {/* <div className="mt-5">
                      <h3 className="text-[0.7rem] tracking-[0.14em] uppercase text-navy mb-3">Languages</h3>
                      <div className="flex gap-2 flex-wrap">
                        {member.languages.map((lang) => (
                          <span
                            key={lang}
                            className="text-[0.72rem] tracking-[0.06em] px-[10px] py-[5px] bg-gold-pale border border-gold/20 rounded-full text-navy"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div> */}

                    {/* Book with */}
                    <Link
                      href="/#appointment"
                      className="inline-flex items-center gap-2 mt-7 text-[0.78rem] font-medium tracking-[0.07em] uppercase text-navy no-underline px-5 py-[9px] rounded-full border-[1.5px] border-navy transition-all duration-200 hover:bg-navy hover:text-white"
                    >
                      Book a Consultation →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Ethos strip */}
        <section className="bg-navy py-20 px-[6vw]">
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              How We Work
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-normal leading-[1.12] text-white mb-12">
              What Every Patient Can <em>Expect</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-3 gap-6 max-md:grid-cols-1">
            {[
              {
                num: "01",
                title: "A Clear Diagnosis",
                body: "We explain exactly what we find, in plain language, before recommending any treatment. You will never be pressured into a procedure you do not understand.",
              },
              {
                num: "02",
                title: "Transparent Pricing",
                body: "Treatment plans come with written cost estimates upfront. No surprises on your bill. If something changes during treatment, we discuss it with you first.",
              },
              {
                num: "03",
                title: "Continuity of Care",
                body: "Your file, your history, your preferences — remembered. Wherever possible, you will see the same clinician at follow-up appointments.",
              },
            ].map((item) => (
              <Reveal key={item.num}>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-[24px] p-8 hover:border-gold/30 transition-colors duration-300">
                  <div className="font-serif text-[2.4rem] font-light text-white/[0.07] leading-none mb-4">{item.num}</div>
                  <h3 className="font-serif text-[1.1rem] font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-[0.84rem] leading-[1.75] text-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-16 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[1.4rem] italic text-navy">Ready to meet the team in person?</p>
            <p className="text-[0.88rem] text-muted mt-1">Book a consultation — no referral needed.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/#appointment"
              className="bg-navy text-white px-[22px] py-[12px] rounded-full text-[0.82rem] font-medium no-underline transition-all duration-200 hover:bg-navy-mid hover:-translate-y-px"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              className="text-[0.82rem] font-medium text-navy no-underline px-[22px] py-[12px] rounded-full border-[1.5px] border-navy transition-all duration-200 hover:bg-navy hover:text-white"
            >
              Our Story
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
