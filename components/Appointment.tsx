"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";

function Toast({ msg, visible }: { msg: string; visible: boolean }) {
  return (
    <div
      className={`fixed bottom-7 right-7 z-[999] bg-navy text-white px-[22px] py-[14px] rounded-[20px] text-[0.85rem] shadow-[0_12px_40px_rgba(10,22,40,0.25)] flex items-center gap-[10px] transition-all duration-[350ms] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-[60px] opacity-0 pointer-events-none"
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-gold shrink-0">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
      {msg}
    </div>
  );
}

const fieldCls =
  "bg-white border border-line rounded-[10px] px-[14px] py-3 font-sans text-[0.88rem] text-navy outline-none transition-colors duration-200 focus:border-gold";

export function Appointment() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  };

  return (
    <>
      <section
        id="appointment"
        className="bg-white py-24 px-[6vw] grid grid-cols-1 md:grid-cols-2 gap-[72px] items-start max-md:gap-12"
      >
        {/* Left: info */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              Online Booking
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-navy mb-4">
              Schedule Your <em>Appointment</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[0.95rem] leading-[1.75] text-muted max-w-[480px]">
              Book your visit online at a time that suits you. Our team confirms within 2 hours during
              working hours.
            </p>
          </Reveal>

          <div className="flex flex-col gap-5 mt-9">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-gold">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                  </svg>
                ),
                title: "Flexible Scheduling",
                body: "Monday to Saturday, 9AM–4PM. Early morning and lunch slots available.",
                delay: 3,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-gold">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                ),
                title: "Confirmation Within 2 Hours",
                body: "Our front desk will confirm your booking via call or SMS.",
                delay: 4,
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-gold">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                ),
                title: "Emergency Line Available",
                body: "For urgent dental pain or trauma, call us directly for immediate assistance.",
                delay: 5,
              },
            ].map((f) => (
              <Reveal key={f.title} delay={f.delay as 3 | 4 | 5}>
                <div className="flex items-start gap-[14px]">
                  <div className="w-[38px] h-[38px] rounded-[10px] bg-gold-pale flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <strong className="block text-[0.85rem] font-medium text-navy mb-[3px]">{f.title}</strong>
                    <p className="text-[0.78rem] leading-[1.6] text-muted">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: form card */}
        <Reveal delay={2}>
          <div className="bg-cream border border-line rounded-[28px] p-10">
            <div className="font-serif text-[1.5rem] font-medium text-navy mb-[6px]">
              Book an Appointment
            </div>
            <p className="text-[0.82rem] text-muted mb-7">Choose a service and preferred time below.</p>

            <form onSubmit={handleBook} className="flex flex-col gap-[14px]">
              <div className="grid grid-cols-2 gap-[14px] max-sm:grid-cols-1">
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">First Name</label>
                  <input type="text" placeholder="e.g. Lovely" className={fieldCls} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Last Name</label>
                  <input type="text" placeholder="e.g. Patient" className={fieldCls} />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Phone Number</label>
                <input type="tel" placeholder="+234 800 000 0000" className={fieldCls} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Email Address</label>
                <input type="email" placeholder="you@example.com" className={fieldCls} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Service Needed</label>
                <select className={fieldCls}>
                  <option value="">Select a service...</option>
                  <option>General Dentistry / Check-up</option>
                  <option>Oral Surgery &amp; Maxillofacial</option>
                  <option>Orthodontics &amp; Braces</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Dental Implants</option>
                  <option>Teeth Whitening</option>
                  <option>Paediatric Dentistry</option>
                  <option>Emergency Care</option>
                </select>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Preferred Date &amp; Time</label>
                <input type="datetime-local" className={fieldCls} />
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Additional Notes</label>
                <textarea
                  placeholder="Describe your concern or any relevant medical history..."
                  className={`${fieldCls} resize-y min-h-[90px]`}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-navy text-white border-none rounded-full py-[15px] font-sans text-[0.9rem] font-medium cursor-pointer transition-all duration-200 mt-1 hover:bg-navy-mid hover:-translate-y-px"
              >
                Request Appointment →
              </button>
            </form>
          </div>
        </Reveal>
      </section>

      <Toast msg="Appointment requested — we'll confirm within 2 hours!" visible={toastVisible} />
    </>
  );
}
