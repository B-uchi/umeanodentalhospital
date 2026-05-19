"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeNav = () => setDrawerOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] h-[68px] px-[4vw] flex items-center justify-between gap-3 bg-white/[0.94] backdrop-blur-[16px] border-b border-line transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_32px_rgba(10,22,40,0.07)]" : ""
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-[10px] no-underline shrink-0 min-w-0">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-navy flex items-center justify-center shrink-0">
            <span className="font-serif text-[0.95rem] font-semibold text-gold">U</span>
          </div>
          <div className="min-w-0 overflow-hidden">
            <strong className="block text-[0.88rem] font-medium text-navy tracking-[0.01em] whitespace-nowrap overflow-hidden text-ellipsis">
              Umeano Dental
            </strong>
            <small className="text-[0.6rem] tracking-[0.1em] uppercase text-muted whitespace-nowrap hidden md:block">
              &amp; Maxillofacial Hospital
            </small>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none shrink-0">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Gallery", "#gallery"],
            ["Team", "#team"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="no-underline text-[0.84rem] font-normal text-ink hover:text-navy transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#appointment"
          className="bg-navy text-white px-[18px] py-[9px] rounded-full text-[0.8rem] font-medium no-underline transition-all duration-200 whitespace-nowrap shrink-0 hover:bg-navy-mid hover:-translate-y-px"
        >
          Book Appointment
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setDrawerOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className="block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300" />
          <span className="block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300" />
          <span className="block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300" />
        </button>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 bg-white border-b border-line px-[5vw] pb-7 pt-5 z-[199] flex flex-col gap-1">
          {[
            ["About", "#about"],
            ["Services", "#services"],
            ["Gallery", "#gallery"],
            ["Our Team", "#team"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeNav}
              className="no-underline text-[0.95rem] text-ink py-3 border-b border-line"
            >
              {label}
            </a>
          ))}
          <a
            href="#appointment"
            onClick={closeNav}
            className="mt-3 text-center bg-navy text-white px-[18px] py-[9px] rounded-full text-[0.8rem] font-medium no-underline"
          >
            Book Appointment
          </a>
        </div>
      )}
    </>
  );
}
