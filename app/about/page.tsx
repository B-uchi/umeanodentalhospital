import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Umeano Dental & Maxillofacial Hospital — our founding, our values, and our commitment to the people of Onitsha and Anambra State.",
};

const ImagePh = ({ label }: { label: string }) => (
  <div className="w-full h-full bg-[linear-gradient(135deg,#e0e8f0_0%,#cdd8e4_100%)] flex items-center justify-center flex-col gap-2">
    <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-20 fill-navy">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
    <span className="text-[0.68rem] tracking-[0.12em] uppercase text-navy opacity-30">{label}</span>
  </div>
);

const timeline = [
  {
    year: "2004",
    title: "The Beginning",
    body: "Dr. Amaka Umeano opens the first Umeano Dental practice in Onitsha — a two-chair clinic with a single, clear mission: bring specialist-level dental care to the people of Anambra State without asking them to travel to Lagos.",
  },
  {
    year: "2008",
    title: "Expanding the Team",
    body: "The practice grows to include a second dentist and a dedicated oral hygiene programme. Patient numbers triple within 18 months of expansion.",
  },
  {
    year: "2012",
    title: "Maxillofacial Designation",
    body: "Following the addition of full surgical theatre capabilities and Dr. Dilichukwu Umeano joining the team, the clinic is formally designated a Maxillofacial Hospital — one of only a handful in the South-East.",
  },
  {
    year: "2017",
    title: "Digital Upgrade",
    body: "The hospital transitions to fully digital X-ray and 3D imaging, cutting radiation exposure and dramatically improving diagnostic accuracy for complex cases.",
  },
  {
    year: "2021",
    title: "Orthodontic Wing",
    body: "A dedicated orthodontic suite opens, making comprehensive braces treatment available in Onitsha for the first time at this level.",
  },
  {
    year: "2024",
    title: "20 Years of Smiles",
    body: "We mark two decades of service — over 18,000 patients treated, hundreds of surgical procedures performed, and a community of smiles that stretches across Anambra State and beyond.",
  },
];

const values = [
  {
    title: "Honesty",
    body: "We tell patients what they need to hear, not what they want to hear. Treatment plans are explained fully, including cost and alternatives, before a single instrument is picked up.",
  },
  {
    title: "Precision",
    body: "Whether it is a routine filling or a complex jaw reconstruction, we hold every procedure to the same exacting standard. There is no such thing as a minor procedure for the patient experiencing it.",
  },
  {
    title: "Warmth",
    body: "Dental anxiety is real and valid. Our entire environment — from our reception to our recovery room — is designed to reduce it. We remember patients' names, their concerns, and their stories.",
  },
  {
    title: "Community",
    body: "We are from Onitsha. Our patients are our neighbours. We participate in free dental outreach programmes and school health initiatives because oral health is a community issue, not just a clinical one.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="pt-[68px]">

        {/* Hero */}
        <section className="bg-navy py-24 px-[6vw]">
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              Our Story
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] font-normal leading-[1.1] text-white max-w-[700px]">
              A Family Legacy of <em>Dental Excellence</em>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[1rem] leading-[1.8] text-muted max-w-[560px] mt-5">
              Umeano Dental &amp; Maxillofacial Hospital was born from a simple conviction: the people of Onitsha
              deserve world-class oral healthcare on their doorstep. Twenty years on, that conviction has never wavered.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="flex gap-10 mt-11 flex-wrap">
              {[["20+", "Years of Service"], ["18,000+", "Patients Treated"], ["7", "Specialist Services"], ["1", "Dedicated Team"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-serif text-[2.8rem] font-light text-gold leading-none">{num}</div>
                  <div className="text-[0.72rem] tracking-[0.12em] uppercase text-muted mt-1">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Founder story */}
        <section className="bg-white py-24 px-[6vw] grid grid-cols-1 md:grid-cols-2 gap-[72px] items-center max-md:gap-12">
          <Reveal className="relative h-[500px] max-md:h-[320px]">
            <div className="w-[75%] h-[420px] rounded-[28px] overflow-hidden absolute top-0 left-0 max-md:h-[260px]">
              <ImagePh label="Dr. Amaka Umeano" />
            </div>
            <div className="w-[55%] h-[280px] rounded-[28px] overflow-hidden absolute bottom-0 right-0 border-[6px] border-cream shadow-[0_20px_60px_rgba(10,22,40,0.1)] max-md:h-[170px]">
              <ImagePh label="Clinic Interior" />
            </div>
            <div className="absolute top-6 right-0 bg-navy text-white px-[22px] py-[18px] rounded-[20px] text-center">
              <strong className="block font-serif text-[2rem] font-medium text-gold leading-none">2004</strong>
              <span className="text-[0.66rem] tracking-[0.1em] uppercase text-muted">Year Founded</span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
                The Founder
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-[1.15] text-navy mb-5">
                Dr. Mrs Amaka Umeano
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-[0.95rem] leading-[1.8] text-muted">
                Dr. Umeano trained at the University of Nigeria, Enugu Campus, before earning her Fellowship from the
                West African College of Surgeons in Oral &amp; Maxillofacial Surgery. She returned to Onitsha not
                because it was the easiest path, but because it was the right one.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="text-[0.95rem] leading-[1.8] text-muted mt-4">
                &ldquo;I watched patients travel four hours to Lagos for procedures that could and should have been
                done here. That was not acceptable to me. It still isn&rsquo;t.&rdquo;
              </p>
              <p className="text-[0.78rem] tracking-[0.08em] uppercase text-gold mt-2">— Dr. Amaka Umeano, Founder</p>
            </Reveal>
            <Reveal delay={4}>
              <p className="text-[0.95rem] leading-[1.8] text-muted mt-4">
                She is an active member of the Nigerian Dental Association, a mentor to young dental professionals, and
                an advocate for community oral health education across Southeast Nigeria.
              </p>
            </Reveal>
            <Reveal delay={5}>
              <Link
                href="/team"
                className="inline-flex items-center gap-[6px] mt-8 text-[0.82rem] font-medium tracking-[0.08em] uppercase text-navy no-underline px-6 py-[10px] rounded-full border-[1.5px] border-navy transition-all duration-200 hover:bg-navy hover:text-white"
              >
                Meet the Full Team →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-cream py-24 px-[6vw]">
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              Our Journey
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-navy mb-16">
              Two Decades of <em>Growth</em>
            </h2>
          </Reveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-line max-md:left-[19px]" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className={`relative flex gap-12 pb-12 max-md:pl-12 max-md:gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse max-md:flex-row"}`}>
                    {/* Content */}
                    <div className="flex-1 max-md:flex-none">
                      <div className={`bg-white rounded-[20px] p-7 border border-line max-w-[400px] ${i % 2 === 0 ? "ml-auto mr-8 max-md:mr-0 max-md:ml-0 max-md:max-w-none" : "mr-auto ml-8 max-md:mr-0 max-md:ml-0 max-md:max-w-none"}`}>
                        <div className="text-[0.7rem] tracking-[0.14em] uppercase text-gold mb-2">{item.year}</div>
                        <h3 className="font-serif text-[1.1rem] font-medium text-navy mb-2">{item.title}</h3>
                        <p className="text-[0.82rem] leading-[1.7] text-muted">{item.body}</p>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-7 w-[14px] h-[14px] rounded-full bg-gold border-[3px] border-cream z-10 max-md:left-[13px] max-md:translate-x-0" />
                    {/* Spacer */}
                    <div className="flex-1 max-md:hidden" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-navy py-24 px-[6vw]">
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              What We Stand For
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-white mb-14">
              Our Core <em>Values</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-[24px] p-8 hover:border-gold/30 transition-colors duration-300">
                  <div className="w-[42px] h-[42px] rounded-[11px] bg-[rgba(200,169,110,0.15)] flex items-center justify-center mb-5">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-[1.2rem] font-medium text-white mb-3">{v.title}</h3>
                  <p className="text-[0.85rem] leading-[1.75] text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-cream py-16 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[1.4rem] italic text-navy">Ready to experience the difference?</p>
            <p className="text-[0.88rem] text-muted mt-1">Book a consultation with our team today.</p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/#appointment"
              className="bg-navy text-white px-[22px] py-[12px] rounded-full text-[0.82rem] font-medium no-underline transition-all duration-200 hover:bg-navy-mid hover:-translate-y-px"
            >
              Book Appointment
            </Link>
            <Link
              href="/services"
              className="text-[0.82rem] font-medium text-navy no-underline px-[22px] py-[12px] rounded-full border-[1.5px] border-navy transition-all duration-200 hover:bg-navy hover:text-white"
            >
              View Our Services
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
