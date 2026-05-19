"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { bg: "bg-[linear-gradient(140deg,#c4d0e0_0%,#b0bfcf_100%)]", label: "Clinic Interior" },
  { bg: "bg-[linear-gradient(140deg,#c8d8c8_0%,#b8cbb8_100%)]", label: "Our Team" },
  { bg: "bg-[linear-gradient(140deg,#d4c8c0_0%,#c4b8b0_100%)]", label: "Surgery Room" },
];

const ImagePlaceholderIcon = () => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="rgba(10,22,40,0.2)">
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
  </svg>
);

export function Hero() {
  const [cur, setCur] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = slides.length;

  const goTo = (n: number) => {
    setCur(((n % total) + total) % total);
  };

  const slide = (dir: number) => goTo(cur + dir);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setCur((c) => (c + 1) % total), 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { resetTimer(); }, [cur]);

  return (
    <section
      id="hero"
      className="min-h-screen pt-[68px] grid grid-cols-1 md:grid-cols-2 items-stretch gap-0"
    >
      {/* ── LEFT ── */}
      <div className="pt-[60px] pb-[60px] pr-[5vw] pl-[6vw] flex flex-col justify-center bg-cream">
        <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] font-normal leading-[1.08] text-navy mb-2">
          Your Smile,
        </h1>
        <h1 className="font-serif text-[clamp(3rem,5vw,5rem)] font-normal leading-[1.08] text-navy mb-0">
          <em>Our Craft.</em>
        </h1>

        {/* Decorative wave */}
        <div className="mb-6 leading-none">
          <svg width="300" height="14" viewBox="0 0 300 14" fill="none" className="overflow-visible">
            <path
              d="M4 9 Q40 2 76 9 Q112 16 148 9 Q184 2 220 9 Q256 16 296 9"
              stroke="#c8a96e"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <p className="text-[0.97rem] leading-[1.75] text-[#64748b] max-w-[420px] mb-10">
          Comprehensive dental and maxillofacial care — delivered with warmth, precision, and genuine
          attention to every patient. Serving Onitsha and Anambra State since 2004.
        </p>

        {/* Actions */}
        <div className="flex gap-[14px] flex-wrap mb-11">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 bg-navy text-white px-7 py-[14px] rounded-full text-[0.88rem] font-medium no-underline border-none cursor-pointer transition-all duration-200 hover:bg-navy-mid hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,22,40,0.18)]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
            </svg>
            Book Appointment
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-transparent text-navy px-7 py-[14px] rounded-full text-[0.88rem] font-normal no-underline border border-[rgba(10,22,40,0.2)] cursor-pointer transition-all duration-200 hover:border-navy hover:bg-[rgba(10,22,40,0.03)]"
          >
            Our Services →
          </a>
        </div>

        <hr className="border-none border-t border-line mb-7" />

        <div className="flex items-center gap-[10px] mb-[10px]">
          <span className="text-base text-gold tracking-[2px]">★★★★★</span>
          <small className="text-[0.8rem] text-muted">5.0 · 200+ patient reviews</small>
        </div>
        <p className="text-[0.82rem] text-muted">Trusted by families across Onitsha since 2004</p>

        {/* Badges */}
        <div className="flex gap-3 mt-7 flex-wrap">
          <div className="bg-white border border-line rounded-[20px] px-[18px] py-[14px] flex items-center gap-[10px] shadow-[0_2px_12px_rgba(10,22,40,0.04)]">
            <div className="w-[3px] h-10 rounded-sm bg-gold shrink-0" />
            <div>
              <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted mb-0.5">Registered</div>
              <div className="text-[0.9rem] font-medium text-navy">MDCN</div>
              <div className="text-[0.7rem] text-muted">Federal Dental Council</div>
            </div>
          </div>
          <div className="bg-white border border-line rounded-[20px] px-[18px] py-[14px] flex items-center gap-[10px] shadow-[0_2px_12px_rgba(10,22,40,0.04)]">
            <div className="w-[3px] h-10 rounded-sm bg-[#4caf50] shrink-0" />
            <div>
              <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted mb-0.5">Open Today</div>
              <div className="text-[0.9rem] font-medium text-navy">9AM – 4PM</div>
              <div className="text-[0.7rem] text-muted">Mon – Saturday</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT / CAROUSEL ── */}
      <div className="relative overflow-hidden pt-7 pb-7 pr-[4vw] pl-0 flex items-center max-md:px-[5vw] max-md:pb-10 max-md:pt-0">
        <div
          className="relative w-full min-h-[500px] rounded-[28px] overflow-hidden shadow-[0_24px_80px_rgba(10,22,40,0.14)]"
          style={{ height: "calc(100vh - 68px - 56px)" }}
        >
          {/* Track */}
          <div
            className="flex h-full transition-transform duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ transform: `translateX(-${cur * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={i} className="min-w-full h-full shrink-0 relative overflow-hidden">
                <div
                  className={`w-full h-full flex items-center justify-center flex-col gap-2 ${s.bg}`}
                >
                  <ImagePlaceholderIcon />
                  <span className="text-[0.75rem] tracking-[0.16em] uppercase text-[rgba(10,22,40,0.4)]">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(transparent,rgba(10,22,40,0.35))] pointer-events-none rounded-b-[28px]" />

          {/* Prev / Next */}
          <button
            onClick={() => slide(-1)}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 border-none cursor-pointer flex items-center justify-center text-xl text-navy shadow-[0_4px_16px_rgba(10,22,40,0.15)] z-10 transition-all duration-200 hover:bg-white hover:scale-[1.08]"
          >
            ‹
          </button>
          <button
            onClick={() => slide(1)}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 border-none cursor-pointer flex items-center justify-center text-xl text-navy shadow-[0_4px_16px_rgba(10,22,40,0.15)] z-10 transition-all duration-200 hover:bg-white hover:scale-[1.08]"
          >
            ›
          </button>

          {/* Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className={`w-2 h-2 rounded-full border-none cursor-pointer p-0 transition-all duration-200 ${
                  i === cur ? "bg-white scale-[1.2]" : "bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Stat chips */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-[10px] z-10 whitespace-nowrap max-sm:gap-1.5">
            {[
              { num: "20+", label: "Years" },
              { num: "5k+", label: "Patients" },
              { num: "8", label: "Specialisations" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/92 rounded-[20px] px-[18px] py-[10px] text-center backdrop-blur-sm max-sm:px-3 max-sm:py-2"
              >
                <span className="font-serif text-[1.3rem] font-medium text-navy block leading-none">
                  {s.num}
                </span>
                <span className="text-[0.65rem] tracking-[0.1em] uppercase text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
