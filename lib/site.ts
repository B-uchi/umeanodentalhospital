const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const siteUrl = new URL(rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`);

export const siteName = "Umeano Dental & Maxillofacial Hospital";
export const siteDescription =
  "Comprehensive dental and maxillofacial care in Onitsha, delivered with warmth, precision, and patient-first attention.";