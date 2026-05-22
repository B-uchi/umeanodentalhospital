"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const galleryLinks = [
  { label: "Photo Booth", href: "/gallery/photos" },
  { label: "Before & After", href: "/gallery/before-after" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const galleryRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close gallery dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (galleryRef.current && !galleryRef.current.contains(e.target as Node)) {
        setGalleryOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close drawer on route change */
  useEffect(() => {
    setDrawerOpen(false);
    setMobileGalleryOpen(false);
  }, [pathname]);

  const closeNav = () => {
    setDrawerOpen(false);
    setMobileGalleryOpen(false);
  };

  const navLinks =  [
    //     { label: "About", href: "#about" },
    //     { label: "Services", href: "#services" },
    //     { label: "Team", href: "#team" },
    //     { label: "Contact", href: "#contact" },
    //   ]
    // : [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Team", href: "/team" },
        { label: "Contact", href: "/#contact" },
      ];

  const isGalleryActive = pathname.startsWith("/gallery");
  const bookHref = isHome ? "#appointment" : "/#appointment";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[200] h-[68px] px-[4vw] flex items-center justify-between gap-3 bg-white/[0.94] backdrop-blur-[16px] border-b border-line transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_32px_rgba(10,22,40,0.07)]" : ""
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-[10px] no-underline shrink-0 min-w-0">
          <div className="w-[34px] h-[34px] relative shrink-0">
            <Image src="/udmh-logo.png" alt="Umeano Dental Logo" fill className="object-contain" />
          </div>
          <div className="min-w-0 overflow-hidden">
            <strong className="block text-[0.88rem] font-medium text-navy tracking-[0.01em] whitespace-nowrap overflow-hidden text-ellipsis">
              Umeano Dental
            </strong>
            <small className="text-[0.6rem] tracking-[0.1em] uppercase text-muted whitespace-nowrap">
              &amp; Maxillofacial Hospital
            </small>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none shrink-0">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="no-underline text-[0.84rem] font-normal text-ink hover:text-navy transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Gallery dropdown */}
          <li ref={galleryRef} className="relative">
            <button
              onClick={() => setGalleryOpen((o) => !o)}
              className={`flex items-center bg-transparent gap-[5px] p-0 text-[0.84rem] font-normal transition-colors duration-200 border-none cursor-pointer ${
                isGalleryActive ? "text-navy font-medium" : "text-ink hover:text-navy"
              }`}
            >
              Gallery
              <svg
                viewBox="0 0 24 24"
                className={`w-[14px] h-[14px] fill-current transition-transform duration-200 ${
                  galleryOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {galleryOpen && (
              <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-white border border-line rounded-[14px] shadow-[0_16px_48px_rgba(10,22,40,0.12)] py-2 min-w-[180px] z-10">
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-[12px] h-[12px] bg-white border-l border-t border-line rotate-45" />
                {galleryLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setGalleryOpen(false)}
                    className={`block px-5 py-[10px] text-[0.84rem] no-underline transition-colors duration-150 ${
                      pathname === href
                        ? "text-navy font-medium bg-cream"
                        : "text-ink hover:text-navy hover:bg-cream/60"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* CTA */}
        <Link
          href={bookHref}
          className="bg-navy text-white px-[18px] py-[9px] hidden md:block rounded-full text-[0.8rem] font-medium no-underline transition-all duration-200 whitespace-nowrap shrink-0 hover:bg-navy-mid hover:-translate-y-px"
        >
          Book Appointment
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
          onClick={() => setDrawerOpen((o) => !o)}
          aria-label="Menu"
        >
          <span
            className={`block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300 ${
              drawerOpen ? "rotate-45 translate-y-[6.5px]" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300 ${
              drawerOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[22px] h-[1.5px] bg-navy rounded-sm transition-all duration-300 ${
              drawerOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 bg-white border-b border-line px-[5vw] pb-7 pt-5 z-[199] flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={closeNav}
              className="no-underline text-[0.95rem] text-ink py-3 border-b border-line block"
            >
              {label}
            </Link>
          ))}

          {/* Mobile Gallery accordion */}
          <div className="border-b border-line">
            <button
              onClick={() => setMobileGalleryOpen((o) => !o)}
              className={`w-full flex items-center justify-between text-[0.95rem] py-3 bg-transparent border-none cursor-pointer p-0 text-left ${
                isGalleryActive ? "text-navy font-medium" : "text-ink"
              }`}
            >
              Gallery
              <svg
                viewBox="0 0 24 24"
                className={`w-[16px] h-[16px] fill-current transition-transform duration-200 ${
                  mobileGalleryOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {mobileGalleryOpen && (
              <div className="pb-2 flex flex-col gap-0">
                {galleryLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeNav}
                    className={`no-underline text-[0.88rem] py-[10px] pl-4 block transition-colors ${
                      pathname === href ? "text-navy font-medium" : "text-muted hover:text-navy"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href={bookHref}
            onClick={closeNav}
            className="mt-3 text-center bg-navy text-white px-[18px] py-[9px] rounded-full text-[0.8rem] font-medium no-underline block"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </>
  );
}
