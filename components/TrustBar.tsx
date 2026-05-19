const items = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold shrink-0">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93-2.67-1.14-5-4.43-5-7.93V7.18L12 5z" />
      </svg>
    ),
    label: "MDCN Registered",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold shrink-0">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
      </svg>
    ),
    label: "Modern Equipment",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold shrink-0">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
      </svg>
    ),
    label: "Mon–Sat 9AM–4PM",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold shrink-0">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
    label: "Emergency Care Available",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gold shrink-0">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    label: "Trusted Since 2004",
  },
];

export function TrustBar() {
  return (
    <div className="bg-navy px-[6vw] py-[22px] flex items-center justify-center gap-10 flex-wrap max-sm:gap-[18px]">
      {items.map((item, i) => (
        <>
          <div key={item.label} className="flex items-center gap-[10px]">
            {item.icon}
            <span className="text-[0.78rem] tracking-[0.08em] text-white/70 uppercase">
              {item.label}
            </span>
          </div>
          {i < items.length - 1 && (
            <div className="w-px h-[18px] bg-white/[0.12] max-sm:hidden" />
          )}
        </>
      ))}
    </div>
  );
}
