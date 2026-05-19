const services = [
  "General Dentistry",
  "Oral Surgery",
  "Orthodontics",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Teeth Whitening",
  "Paediatric Dentistry",
];

const practice = [
  ["About Us", "#about"],
  ["Our Team", "#team"],
  ["Gallery", "#gallery"],
  ["Testimonials", "#testimonials"],
  ["Book Appointment", "#appointment"],
];

const contact = [
  ["Find Us", "#contact"],
  ["Call Us", "tel:+234000000000"],
  ["Email Us", "mailto:info@umeano-dental.com"],
  ["Emergency Line", "#contact"],
];

export function Footer() {
  return (
    <footer className="bg-navy px-[6vw] pt-16 pb-7">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 pb-11 border-b border-white/[0.07] max-[1100px]:grid-cols-2 max-[1100px]:gap-9 max-sm:grid-cols-1">
        {/* Brand col */}
        <div>
          <a href="#hero" className="flex items-center gap-[10px] no-underline">
            <div className="w-[34px] h-[34px] rounded-[10px] bg-navy border border-white/10 flex items-center justify-center shrink-0">
              <span className="font-serif text-[0.95rem] font-semibold text-gold">U</span>
            </div>
            <div>
              <strong className="block text-[0.88rem] font-medium text-white">Umeano Dental</strong>
              <small className="text-[0.6rem] tracking-[0.1em] uppercase text-muted">
                &amp; MAXILLOFACIAL HOSPITAL
              </small>
            </div>
          </a>
          <p className="text-[0.85rem] leading-[1.75] text-muted mt-[14px] max-w-[260px]">
            Delivering excellence in dental and maxillofacial care to the people of Onitsha and Anambra
            State since 2004.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-[18px]">Services</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="no-underline text-[0.85rem] text-muted transition-colors duration-200 hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-[18px]">Practice</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            {practice.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="no-underline text-[0.85rem] text-muted transition-colors duration-200 hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-[18px]">Contact</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            {contact.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="no-underline text-[0.85rem] text-muted transition-colors duration-200 hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center pt-6 flex-wrap gap-[14px] max-sm:flex-col max-sm:items-start">
        <p className="text-[0.75rem] text-white/50">
          © 2026 Umeano Dental &amp; Maxillofacial Hospital. All rights reserved.
        </p>
        <ul className="list-none flex gap-6 max-sm:gap-4">
          {["Privacy Policy", "Terms of Use", "MDCN Registration"].map((l) => (
            <li key={l}>
              <a href="#" className="no-underline text-[0.75rem] text-white/50 transition-colors duration-200 hover:text-white">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
