"use client";

import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { services, SERVICE_CATEGORIES, type ServiceCategory } from "@/lib/data";

const categoryLabel: Record<string, string> = {
  surgery: "Oral Surgery",
  preventive: "Preventive",
  cosmetic: "Cosmetic",
  restorative: "Restorative",
};

export function ServiceFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const active = (searchParams.get("category") ?? "all") as ServiceCategory;

  const setCategory = (cat: ServiceCategory) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const filtered = active === "all" ? services : services.filter((s) => s.category === active);

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-[10px] mb-10">
        {SERVICE_CATEGORIES.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setCategory(value)}
            className={`px-5 py-[9px] rounded-full text-[0.78rem] font-medium tracking-[0.05em] border transition-all duration-200 cursor-pointer ${
              active === value
                ? "bg-navy text-white border-navy"
                : "bg-white text-ink border-line hover:border-navy hover:text-navy"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Service list */}
      <div className="border-t border-line">
        {filtered.map((s, i) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex items-start gap-6 py-7 border-b border-line no-underline transition-colors duration-200 hover:bg-white/60 px-4 -mx-2 rounded-[4px] max-sm:flex-col max-sm:gap-3"
          >
            {/* Number */}
            <span className="shrink-0 font-serif text-[1.1rem] font-light text-muted leading-none pt-[3px] w-7 max-sm:hidden">
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Title + description */}
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-[1.25rem] font-medium text-navy leading-[1.2] mb-[6px] group-hover:text-navy transition-colors">
                {s.title}
              </h3>
              <p className="text-[0.84rem] leading-[1.7] text-muted max-w-[560px]">{s.tagline}</p>
            </div>

            {/* Category + arrow */}
            <div className="shrink-0 flex flex-col items-end gap-3 pt-[2px] max-sm:flex-row max-sm:items-center">
              <span className="text-[0.65rem] tracking-[0.14em] uppercase text-gold bg-gold-pale border border-gold/20 px-3 py-[5px] rounded-full whitespace-nowrap">
                {categoryLabel[s.category] ?? s.category}
              </span>
              <span className="text-[0.7rem] font-medium tracking-[0.08em] uppercase text-muted group-hover:text-navy transition-colors whitespace-nowrap">
                Learn More →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted border-t border-line">
          <p className="font-serif text-[1.2rem] italic">No services in this category.</p>
        </div>
      )}
    </>
  );
}
