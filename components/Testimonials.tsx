import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    quote:
      "I had been anxious about dental visits for years. Umeano Dental changed that completely. Professional, gentle, and genuinely caring.",
    name: "Chioma A.",
    sub: "Orthodontics Patient",
    initial: "C",
    delay: 2 as const,
  },
  {
    quote:
      "The implant procedure was thorough and expertly done. The team explained everything at each stage. Outstanding results — feels completely natural.",
    name: "Emeka O.",
    sub: "Implant Patient",
    initial: "E",
    delay: 3 as const,
  },
  {
    quote:
      "Brought my children here from age 5. They have never feared the dentist — that speaks volumes about the warmth and patience of this team.",
    name: "Ngozi M.",
    sub: "Paediatric Patient Parent",
    initial: "N",
    delay: 4 as const,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy py-24 px-[6vw]">
      <Reveal>
        <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold justify-center w-full">
          Patient Feedback
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-white mb-[52px] text-center">
          What Our <em>Patients Say</em>
        </h2>
      </Reveal>

      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
        {reviews.map((r) => (
          <Reveal key={r.name} delay={r.delay}>
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-[20px] p-[30px] transition-all duration-300 hover:bg-white/[0.07] hover:border-gold/25">
              <div className="flex gap-[3px] mb-[18px]">
                <span className="text-[0.95rem] text-gold">★★★★★</span>
              </div>
              <p className="font-serif text-[1.1rem] italic font-light leading-[1.65] text-white/85 mb-[22px]">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-[11px]">
                <div className="w-[38px] h-[38px] rounded-full bg-gold/[0.15] flex items-center justify-center font-serif text-[0.95rem] font-medium text-gold">
                  {r.initial}
                </div>
                <div>
                  <span className="block text-[0.85rem] font-medium text-white">{r.name}</span>
                  <span className="text-[0.72rem] text-muted">{r.sub}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
