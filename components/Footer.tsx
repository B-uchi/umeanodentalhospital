import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  ["General Dentistry", "/services/general-dentistry"],
  ["Oral Surgery", "/services/oral-surgery-maxillofacial"],
  ["Orthodontics", "/services/orthodontics-braces"],
  ["Dental Implants", "/services/dental-implants"],
  ["Cosmetic Dentistry", "/services/cosmetic-dentistry"],
  ["Teeth Whitening", "/services/teeth-whitening"],
  ["Paediatric Dentistry", "/services/paediatric-dentistry"],
];

const practiceLinks = [
  ["About Us", "/about"],
  ["Our Team", "/team"],
  ["Photo Booth", "/gallery/photos"],
  ["Before & After", "/gallery/before-after"],
  ["Book Appointment", "/#appointment"],
];

const contactLinks = [
  ["Find Us", "/#contact"],
  ["Call Us", "tel:+234000000000"],
  ["Email Us", "mailto:info@umeano-dental.com"],
  ["Emergency Line", "/#contact"],
];

export function Footer() {
  return (
    <footer className="bg-navy px-[6vw] pt-16 pb-7">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-14 pb-11 border-b border-white/[0.07] max-[1100px]:grid-cols-2 max-[1100px]:gap-9 max-sm:grid-cols-1">
        {/* Brand col */}
        <div>
          <Link href="/" className="flex items-center gap-[10px] no-underline">
            <div className="w-[36px] h-[36px] relative shrink-0">
              <Image src="/udmh-logo.png" alt="Umeano Dental Logo" fill className="object-contain" />
            </div>
            <div>
              <strong className="block text-[0.88rem] font-medium text-white">Umeano Dental</strong>
              <small className="text-[0.6rem] tracking-[0.1em] uppercase text-muted">
                &amp; MAXILLOFACIAL HOSPITAL
              </small>
            </div>
          </Link>
          <p className="text-[0.85rem] leading-[1.75] text-muted mt-[14px] max-w-[260px]">
            Delivering excellence in dental and maxillofacial care to the people of Onitsha and Anambra
            State since 2004.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-[18px]">Services</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            {serviceLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="no-underline text-[0.85rem] text-muted transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-[18px]">Practice</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            {practiceLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="no-underline text-[0.85rem] text-muted transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[0.68rem] tracking-[0.14em] uppercase text-gold mb-[18px]">Contact</h4>
          <ul className="list-none flex flex-col gap-[10px]">
            {contactLinks.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="no-underline text-[0.85rem] text-muted transition-colors duration-200 hover:text-white"
                >
                  {label}
                </Link>
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
              <a
                href="#"
                className="no-underline text-[0.75rem] text-white/50 transition-colors duration-200 hover:text-white"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
