import { Reveal } from "@/components/Reveal";

const PersonPh = ({ label }: { label: string }) => (
  <div className="w-full h-full bg-[linear-gradient(135deg,#dde6f0_0%,#cdd8e6_100%)] flex items-center justify-center flex-col gap-2">
    <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-20 fill-navy">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
    <span className="text-[0.68rem] tracking-[0.12em] uppercase text-navy opacity-30">{label}</span>
  </div>
);

const members = [
  {
    name: "Dr. Mrs Amaka Umeano",
    role: "Lead Dentist & Founder",
    bio: "With over 20 years of practice, Dr. Umeano founded the hospital with a vision of world-class dental care for the Onitsha community and beyond.",
    quals: ["BDS", "FWACS", "MDCN"],
    ph: "Lead Dentist",
    delay: 2 as const,
  },
  {
    name: "Dr. Dilichukwu Jude Umeano",
    role: "Dental Surgeon",
    bio: "Specialist in oral and maxillofacial surgery with expertise in complex reconstructive procedures and facial trauma management.",
    quals: ["BDS", "MFDS RCS", "OMFS"],
    ph: "Dental Surgeon",
    delay: 3 as const,
  },
  {
    name: "Dr. TBD",
    role: "Orthodontist",
    bio: "Dedicated to creating beautiful, functional smiles through precision orthodontic treatment for patients of all ages.",
    quals: ["BDS", "M.Orth", "MDCN"],
    ph: "Orthodontist",
    delay: 4 as const,
  },
];

export function Team() {
  return (
    <section id="team" className="bg-cream py-24 px-[6vw]">
      <Reveal>
        <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
          Our Specialists
        </div>
      </Reveal>
      <Reveal delay={1}>
        <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-navy mb-4">
          Meet the <em>Team</em>
        </h2>
      </Reveal>
      <Reveal delay={2}>
        <p className="text-[0.95rem] leading-[1.75] text-muted max-w-[480px]">
          Highly qualified professionals committed to outstanding patient care at every visit.
        </p>
      </Reveal>

      <div className="grid grid-cols-3 gap-6 mt-[52px] max-md:grid-cols-2 max-sm:grid-cols-1">
        {members.map((m) => (
          <Reveal key={m.name} delay={m.delay}>
            <div className="bg-white rounded-[28px] overflow-hidden border border-line transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_20px_60px_rgba(10,22,40,0.1)] hover:border-transparent">
              <div className="h-[280px] overflow-hidden">
                <PersonPh label={m.ph} />
              </div>
              <div className="px-[22px] py-6">
                <div className="font-serif text-[1.25rem] font-medium text-navy mb-[3px]">{m.name}</div>
                <div className="text-[0.72rem] tracking-[0.1em] uppercase text-gold mb-3">{m.role}</div>
                <p className="text-[0.8rem] leading-[1.7] text-muted">{m.bio}</p>
                <div className="flex flex-wrap gap-[6px] mt-[14px]">
                  {m.quals.map((q) => (
                    <span
                      key={q}
                      className="text-[0.65rem] tracking-[0.06em] uppercase px-[10px] py-1 bg-cream border border-line rounded-full text-ink"
                    >
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
