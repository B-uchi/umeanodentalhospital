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

export function Contact() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  };

  return (
    <>
      <section
        id="contact"
        className="bg-white py-24 px-[6vw] grid grid-cols-1 md:grid-cols-2 gap-[72px] items-start max-md:gap-12"
      >
        {/* Left: contact info + hours + map */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              Find Us
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-navy mb-4">
              Get in <em>Touch</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="text-[0.95rem] leading-[1.75] text-muted max-w-[480px]">
              Conveniently located in Onitsha. Walk-ins welcome during working hours, or book ahead
              online.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="flex flex-col gap-5 mt-9">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  ),
                  label: "Address",
                  content: <p>No 2 Awka Road, Onitsha, Anambra State, Nigeria</p>,
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  ),
                  label: "Phone",
                  content: (
                    <p>
                      <a href="tel:+234000000000" className="text-ink no-underline transition-colors hover:text-gold">
                        +234 xxx xxx xxx
                      </a>
                      <br />
                      <a href="tel:+234000000000" className="text-ink no-underline transition-colors hover:text-gold">
                        +234 xxx xxx xxx
                      </a>
                    </p>
                  ),
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gold">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  ),
                  label: "Email",
                  content: (
                    <a href="mailto:info@udmh.com" className="text-ink no-underline transition-colors hover:text-gold text-[0.9rem]">
                      info@udmh.com
                    </a>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-[14px]">
                  <div className="w-11 h-11 rounded-[12px] bg-navy shrink-0 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <strong className="block text-[0.72rem] tracking-[0.08em] uppercase text-navy mb-[3px]">
                      {item.label}
                    </strong>
                    <div className="text-[0.9rem] leading-[1.6] text-ink">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Hours */}
          <Reveal delay={4}>
            <div className="grid grid-cols-2 gap-2 mt-7">
              <div className="bg-cream border border-line rounded-[10px] px-[14px] py-3">
                <div className="text-[0.68rem] tracking-[0.08em] uppercase text-muted mb-[2px]">Mon – Fri</div>
                <div className="text-[0.88rem] font-medium text-navy">8:00 AM – 6:00 PM</div>
              </div>
              <div className="bg-cream border border-line rounded-[10px] px-[14px] py-3">
                <div className="text-[0.68rem] tracking-[0.08em] uppercase text-muted mb-[2px]">Saturday</div>
                <div className="text-[0.88rem] font-medium text-navy">9:00 AM – 3:00 PM</div>
              </div>
              <div className="col-span-2 bg-gold-pale border border-gold/30 rounded-[10px] px-[14px] py-3">
                <div className="text-[0.68rem] tracking-[0.08em] uppercase text-muted mb-[2px]">Emergency</div>
                <div className="text-[0.88rem] font-medium text-gold">Call Anytime</div>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={5}>
            <div className="w-full h-[280px] rounded-[20px] overflow-hidden mt-7 border border-line relative max-sm:h-[220px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.6690991859716!2d6.789149828434781!3d6.15319303299186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043937e1dfd12c3%3A0xf74e878f8aa99604!2sUmeano%20Dental%20and%20Maxillofacial%20Hospital!5e1!3m2!1sen!2sng!4v1779174257610!5m2!1sen!2sng"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        {/* Right: enquiry form */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              Send a Message
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-normal leading-[1.12] text-navy mb-6">
              We&apos;d Love to <em>Hear From You</em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="bg-cream border border-line rounded-[28px] p-10">
              <h3 className="font-serif text-[1.4rem] font-medium text-navy mb-6">Quick Enquiry</h3>
              <form onSubmit={handleEnquiry} className="flex flex-col gap-[14px]">
                <div className="grid grid-cols-2 gap-[14px] max-sm:grid-cols-1">
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">First Name</label>
                    <input type="text" placeholder="Your first name" className={fieldCls} />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Last Name</label>
                    <input type="text" placeholder="Your last name" className={fieldCls} />
                  </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Email</label>
                  <input type="email" placeholder="you@example.com" className={fieldCls} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Phone</label>
                  <input type="tel" placeholder="+234 800 000 0000" className={fieldCls} />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Subject</label>
                  <select className={fieldCls}>
                    <option value="">Select a topic...</option>
                    <option>General Enquiry</option>
                    <option>Appointment Question</option>
                    <option>Treatment Information</option>
                    <option>Insurance / Billing</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <label className="text-[0.72rem] tracking-[0.07em] uppercase text-ink font-medium">Message</label>
                  <textarea
                    placeholder="How can we help you?"
                    className={`${fieldCls} resize-y min-h-[90px]`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-navy text-white border-none rounded-full py-[15px] font-sans text-[0.9rem] font-medium cursor-pointer transition-all duration-200 mt-1 hover:bg-navy-mid hover:-translate-y-px"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <Toast msg="Message sent! We'll be in touch shortly." visible={toastVisible} />
    </>
  );
}
