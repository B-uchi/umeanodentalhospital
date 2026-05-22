import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { galleryPhotos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Photo Booth",
  description:
    "Take a look inside Umeano Dental & Maxillofacial Hospital — our treatment rooms, surgical suite, and patient lounge in Onitsha.",
};

const ImgPh = ({ label }: { label: string }) => (
  <div className="w-full h-full bg-[linear-gradient(135deg,#e0e8f0_0%,#cdd8e4_100%)] flex items-center justify-center flex-col gap-2 transition-transform duration-500 group-hover:scale-[1.04]">
    <svg viewBox="0 0 24 24" className="w-10 h-10 opacity-20 fill-navy">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
    <span className="text-[0.68rem] tracking-[0.12em] uppercase text-navy opacity-30">{label}</span>
  </div>
);

export default function GalleryPhotosPage() {
  return (
    <>
      <Nav />
      <main className="pt-[68px]">

        {/* Hero */}
        <section className="bg-navy py-20 px-[6vw]">
          <Reveal>
            <nav className="flex items-center gap-2 text-[0.72rem] text-muted mb-8" aria-label="Breadcrumb">
              <span className="text-muted">Gallery</span>
              <span>/</span>
              <span className="text-gold">Photo Booth</span>
            </nav>
          </Reveal>
          <Reveal delay={1}>
            <div className="inline-flex items-center gap-[10px] text-[0.72rem] tracking-[0.14em] uppercase text-gold mb-[14px] before:content-[''] before:block before:w-[22px] before:h-px before:bg-gold">
              Our Clinic
            </div>
          </Reveal>
          <Reveal delay={2}>
            <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.6rem)] font-normal leading-[1.1] text-white max-w-[680px]">
              A Glimpse Inside <em>Our World</em>
            </h1>
          </Reveal>
          <Reveal delay={3}>
            <p className="text-[1rem] leading-[1.8] text-muted max-w-[520px] mt-5">
              State-of-the-art facilities designed for your comfort, precision, and peace of mind. Every space in our
              hospital is purpose-built for exceptional care.
            </p>
          </Reveal>
          <Reveal delay={4}>
            <Link
              href="/gallery/before-after"
              className="inline-flex items-center gap-2 mt-7 text-[0.82rem] font-medium tracking-[0.08em] uppercase text-gold no-underline px-6 py-[10px] rounded-full border-[1.5px] border-gold/40 transition-all duration-200 hover:border-gold hover:bg-gold/10"
            >
              Before &amp; After Results →
            </Link>
          </Reveal>
        </section>

        {/* Gallery grid */}
        <section className="bg-cream py-20 px-[6vw]">
          <Reveal delay={1}>
            <div className="grid grid-cols-12 gap-[10px]" style={{ gridTemplateRows: "260px 260px" }}>
              {galleryPhotos.slice(0, 5).map((photo) => (
                <div
                  key={photo.id}
                  className={`overflow-hidden cursor-pointer relative rounded-[16px] group ${photo.span}`}
                >
                  <ImgPh label={photo.label} />
                  <div className="absolute bottom-0 left-0 right-0 p-[14px_18px] bg-[linear-gradient(transparent,rgba(10,22,40,0.75))] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-[16px]">
                    <span className="text-[0.72rem] tracking-[0.1em] uppercase text-gold-light">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Second row — remaining photos */}
          <Reveal delay={2}>
            <div className="grid grid-cols-3 gap-[10px] mt-[10px] max-md:grid-cols-2 max-sm:grid-cols-1">
              {galleryPhotos.slice(5).map((photo) => (
                <div
                  key={photo.id}
                  className="h-[240px] overflow-hidden cursor-pointer relative rounded-[16px] group"
                >
                  <ImgPh label={photo.label} />
                  <div className="absolute bottom-0 left-0 right-0 p-[14px_18px] bg-[linear-gradient(transparent,rgba(10,22,40,0.75))] opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-[16px]">
                    <span className="text-[0.72rem] tracking-[0.1em] uppercase text-gold-light">
                      {photo.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA strip */}
        <section className="bg-navy py-14 px-[6vw] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-[1.3rem] italic text-white">See what we can do for your smile.</p>
            <p className="text-[0.88rem] text-muted mt-1">Browse our before &amp; after results.</p>
          </div>
          <Link
            href="/gallery/before-after"
            className="bg-gold text-navy-deep px-[22px] py-[13px] rounded-full text-[0.82rem] font-medium no-underline transition-all duration-200 hover:-translate-y-px hover:brightness-105 whitespace-nowrap"
          >
            Before &amp; After →
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
