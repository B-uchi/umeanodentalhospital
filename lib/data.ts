/* ── Services ─────────────────────────────────────────────────────────────── */

export type ServiceCategory = "all" | "surgery" | "preventive" | "cosmetic" | "restorative";

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  category: Exclude<ServiceCategory, "all">;
  tagline: string;
  summary: string;
  icon: "check" | "tooth" | "grid" | "plus" | "info" | "person" | "circle";
  featured?: boolean;
  accent?: boolean;
  // Detail page
  heroSentence: string;
  whatItIs: string;
  whoItsFor: string;
  whatToExpect: string[];
  benefits: string[];
  duration: string;
  recovery: string;
  faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: "oral-surgery-maxillofacial",
    title: "Oral Surgery & Maxillofacial",
    shortTitle: "Oral Surgery",
    category: "surgery",
    tagline: "Our signature specialisation",
    summary:
      "Extractions, jaw surgery, facial trauma reconstruction, and complex oral pathology — our signature specialisation.",
    icon: "check",
    featured: true,
    heroSentence:
      "Complex procedures performed by board-certified maxillofacial specialists, in a setting built for your safety and comfort.",
    whatItIs:
      "Oral and maxillofacial surgery covers a wide range of procedures involving the mouth, jaw, face, and neck. At Umeano Dental, this is our deepest area of expertise — it is what sets us apart as a full maxillofacial hospital rather than a standard dental clinic.",
    whoItsFor:
      "Patients who need tooth extractions (including wisdom teeth), have jaw alignment issues, have suffered facial injuries, or have been referred by another dentist for a complex oral procedure.",
    whatToExpect: [
      "Initial consultation where we review X-rays and discuss your concerns",
      "A clear treatment plan explained in plain language — no medical jargon",
      "The procedure performed under local or general anaesthesia depending on complexity",
      "Detailed post-operative care instructions and a follow-up appointment",
    ],
    benefits: [
      "Relief from pain and infection caused by impacted or damaged teeth",
      "Restored jaw function and facial symmetry",
      "Prevention of further damage to surrounding teeth and bone",
      "Specialist-level care without travelling to Lagos or Abuja",
    ],
    duration: "30 minutes to 3 hours depending on the procedure",
    recovery: "1–14 days depending on the complexity; we provide full aftercare guidance",
    faqs: [
      {
        q: "Will I feel pain during the procedure?",
        a: "No. We use appropriate anaesthesia — local, sedation, or general — to ensure you are completely comfortable throughout.",
      },
      {
        q: "Do I need a referral from another dentist?",
        a: "No referral is required. You can book a consultation directly with us.",
      },
      {
        q: "How long before I can eat normally?",
        a: "For simple extractions, soft foods for 24–48 hours. For more complex surgery, we will give you a personalised timeline.",
      },
    ],
  },
  {
    id: 2,
    slug: "general-dentistry",
    title: "General Dentistry",
    shortTitle: "General Dentistry",
    category: "preventive",
    tagline: "Your foundation for lifelong oral health",
    summary:
      "Examinations, professional cleanings, fillings, and preventive care to keep your oral health at its best.",
    icon: "tooth",
    heroSentence:
      "Routine care done right — keeping your teeth healthy today so you avoid bigger problems tomorrow.",
    whatItIs:
      "General dentistry is the day-to-day maintenance of your teeth and gums. It includes check-ups, scaling and polishing, fillings, and advice on how to look after your mouth between visits. Most dental problems are entirely preventable with regular care.",
    whoItsFor:
      "Everyone — children, adults, and seniors. We recommend check-ups every six months, or annually as a minimum.",
    whatToExpect: [
      "A thorough examination of teeth, gums, and soft tissues",
      "Digital X-rays to catch problems invisible to the naked eye",
      "Professional scaling to remove tartar build-up",
      "Tooth-coloured fillings if needed, matched to your natural shade",
      "Personalised advice on brushing technique, diet, and at-home care",
    ],
    benefits: [
      "Catch problems early when they are cheap and easy to treat",
      "Fresh, clean mouth and reduced bad-breath risk",
      "Stronger, longer-lasting teeth",
      "Peace of mind knowing your oral health is on track",
    ],
    duration: "30–60 minutes for a routine appointment",
    recovery: "No downtime — you can return to normal activity immediately",
    faqs: [
      {
        q: "How often should I come in for a check-up?",
        a: "We recommend every six months. Patients with gum disease or a history of cavities may benefit from quarterly visits.",
      },
      {
        q: "Do fillings hurt?",
        a: "We use local anaesthesia, so you should feel nothing during the procedure. Some mild sensitivity for a day or two afterwards is normal.",
      },
      {
        q: "Are dental X-rays safe?",
        a: "Yes. Modern digital X-rays use a fraction of the radiation of traditional X-rays, and we only take them when clinically justified.",
      },
    ],
  },
  {
    id: 3,
    slug: "orthodontics-braces",
    title: "Orthodontics & Braces",
    shortTitle: "Orthodontics",
    category: "cosmetic",
    tagline: "Straight smiles for all ages",
    summary: "Traditional braces and modern alignment solutions for children, teenagers, and adults.",
    icon: "grid",
    heroSentence: "A straighter smile is about more than looks — it makes your teeth easier to clean and your bite more comfortable.",
    whatItIs:
      "Orthodontics is the branch of dentistry focused on correcting misaligned teeth and jaws. We offer traditional metal braces, ceramic (tooth-coloured) braces, and removable retainers depending on your case and preference.",
    whoItsFor:
      "Children from age 7, teenagers, and adults at any age. It is never too late to straighten your teeth.",
    whatToExpect: [
      "An orthodontic assessment including photos, X-rays, and study models",
      "A personalised treatment plan with a realistic timeline",
      "Fitting of your chosen appliance at a comfortable pace",
      "Regular adjustment appointments (typically every 4–8 weeks)",
      "Retainers at the end of treatment to hold your new smile in place",
    ],
    benefits: [
      "Improved smile aesthetics and self-confidence",
      "Straighter teeth are easier to clean, reducing cavity risk",
      "Corrected bite reduces jaw pain and uneven tooth wear",
      "Long-lasting results with proper retainer use",
    ],
    duration: "12–30 months depending on complexity",
    recovery: "Mild soreness after adjustments, easing within 2–3 days",
    faqs: [
      {
        q: "Can adults get braces?",
        a: "Absolutely. About a third of our orthodontic patients are adults. Ceramic braces are popular with adults for their discreet appearance.",
      },
      {
        q: "Will braces affect eating?",
        a: "You will need to avoid hard and sticky foods. We give you a full list at the start of treatment.",
      },
      {
        q: "What happens if I do not wear my retainer?",
        a: "Teeth can gradually drift back. We strongly advise wearing your retainer as instructed — at night indefinitely.",
      },
    ],
  },
  {
    id: 4,
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortTitle: "Cosmetic Dentistry",
    category: "cosmetic",
    tagline: "Artistry meets precision",
    summary: "Veneers, bonding, and smile makeovers — crafting the smile you have always wanted.",
    icon: "plus",
    heroSentence: "Your smile is the first thing people notice. We make sure it tells the story you want.",
    whatItIs:
      "Cosmetic dentistry encompasses treatments that improve the appearance of your teeth, gums, and smile. From subtle corrections to complete smile redesigns, we tailor every treatment to your face, skin tone, and personal goals.",
    whoItsFor:
      "Anyone unhappy with the colour, shape, size, or symmetry of their teeth. There is no single ideal smile — we work with yours.",
    whatToExpect: [
      "A smile consultation where we listen to your goals and concerns",
      "Digital smile preview so you can see the expected result before committing",
      "Minimally invasive techniques prioritised wherever possible",
      "High-quality materials matched to look completely natural",
    ],
    benefits: [
      "Dramatic improvement in smile appearance",
      "Increased self-confidence in social and professional settings",
      "Long-lasting results with proper maintenance",
      "Treatments tailored to your unique facial features",
    ],
    duration: "One to three appointments depending on treatment",
    recovery: "Minimal to none for most cosmetic procedures",
    faqs: [
      {
        q: "Are veneers permanent?",
        a: "Porcelain veneers are long-lasting (10–15 years with good care) but not reversible, as a small amount of enamel is removed. We always discuss this fully before proceeding.",
      },
      {
        q: "Will my teeth look fake?",
        a: "Not when done well. We use high-quality ceramics and carefully match shade, translucency, and shape to your natural teeth and facial features.",
      },
      {
        q: "Is cosmetic dentistry just for wealthy people?",
        a: "We offer a range of options at different price points. Composite bonding, for example, delivers significant improvement at a fraction of the cost of porcelain veneers.",
      },
    ],
  },
  {
    id: 5,
    slug: "dental-implants",
    title: "Dental Implants",
    shortTitle: "Dental Implants",
    category: "restorative",
    tagline: "Permanent, natural-looking tooth replacement",
    summary: "Titanium implants that look, feel, and function just like your natural teeth — for life.",
    icon: "info",
    heroSentence: "Lose a tooth, not your confidence. Implants are the closest thing to a real tooth that dentistry can offer.",
    whatItIs:
      "A dental implant is a small titanium screw placed into the jawbone to act as an artificial tooth root. Once integrated with the bone (usually in 3–6 months), a custom crown is attached. The result is a tooth that looks, feels, and bites exactly like a natural one.",
    whoItsFor:
      "Adults who have lost one or more teeth due to decay, gum disease, or injury, and who have sufficient jawbone density. We assess suitability at your consultation.",
    whatToExpect: [
      "A thorough assessment including 3D imaging to evaluate bone density",
      "Implant placement under local anaesthesia — most patients report less discomfort than expected",
      "A healing period of 3–6 months for osseointegration (the implant fusing with your bone)",
      "Fitting of your bespoke crown, bridge, or denture on the implant",
    ],
    benefits: [
      "Looks and feels identical to a natural tooth",
      "Preserves jawbone and prevents the facial collapse associated with missing teeth",
      "No impact on adjacent teeth (unlike a bridge)",
      "With proper care, implants can last a lifetime",
    ],
    duration: "Implant placement: 1–2 hours. Full treatment: 4–9 months including healing",
    recovery: "Mild swelling and discomfort for a few days after placement, managed with standard pain relief",
    faqs: [
      {
        q: "Are implants painful?",
        a: "The placement is done under local anaesthesia, so you should not feel pain during the procedure. Post-operative discomfort is typically mild and manageable.",
      },
      {
        q: "How long do implants last?",
        a: "With good oral hygiene and regular check-ups, implants can last 20–30 years or more. The crown may need replacement after 10–15 years.",
      },
      {
        q: "Can smokers get implants?",
        a: "Smoking significantly increases the risk of implant failure. We strongly advise stopping smoking before and after the procedure and will discuss this at your consultation.",
      },
    ],
  },
  {
    id: 6,
    slug: "paediatric-dentistry",
    title: "Paediatric Dentistry",
    shortTitle: "Paediatric Dentistry",
    category: "preventive",
    tagline: "Gentle care for little smiles",
    summary:
      "Child-friendly dentistry in a warm, welcoming environment — nurturing lifelong healthy habits from the very first visit.",
    icon: "person",
    accent: true,
    heroSentence: "A child's first dental experience shapes their attitude to dentistry for life. We make it a good one.",
    whatItIs:
      "Paediatric dentistry covers all aspects of dental care for children from infancy through to adolescence. Our clinic is designed to feel warm and unthreatening, and our team has specific training in communicating with and treating young patients.",
    whoItsFor:
      "Children of all ages — we recommend first visits as early as age one, or within six months of the first tooth appearing.",
    whatToExpect: [
      "A gentle introduction to the clinic environment — no rush, no pressure",
      "Thorough but child-friendly examinations",
      "Fissure sealants and fluoride treatments to protect growing teeth",
      "Positive reinforcement throughout the appointment",
      "Parent guidance on diet, cleaning technique, and habit management",
    ],
    benefits: [
      "Early detection of problems while they are easy to treat",
      "A child who is comfortable at the dentist, for life",
      "Healthy habits established early, reducing adult dental costs",
      "Orthodontic monitoring so issues are caught at the right time",
    ],
    duration: "20–40 minutes",
    recovery: "None for routine visits",
    faqs: [
      {
        q: "When should my child's first dental visit be?",
        a: "Within six months of the first tooth appearing, or by age one — whichever comes first. Early visits are mostly educational and help children get comfortable with the environment.",
      },
      {
        q: "My child is terrified of dentists. Can you help?",
        a: "Yes. We have experience with anxious children and use a gradual, gentle approach. In some cases, we may recommend nitrous oxide (happy gas) to help them relax.",
      },
      {
        q: "Do baby teeth really need fillings?",
        a: "Yes. Untreated decay in baby teeth can cause pain, infection, and can affect the development of permanent teeth underneath.",
      },
    ],
  },
  {
    id: 7,
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortTitle: "Teeth Whitening",
    category: "cosmetic",
    tagline: "Professional results you can trust",
    summary: "Professional-grade whitening systems delivering safe, dramatic, long-lasting results.",
    icon: "circle",
    heroSentence: "Skip the supermarket strips. Professional whitening delivers results that actually last.",
    whatItIs:
      "Professional teeth whitening uses clinically tested bleaching agents to lighten the natural colour of your enamel by several shades. Unlike over-the-counter products, we use higher-concentration, dentist-only formulas applied safely and precisely.",
    whoItsFor:
      "Adults with healthy teeth and gums who want a brighter smile. Not suitable for crowns or veneers (these do not respond to bleaching agents).",
    whatToExpect: [
      "A dental check to confirm your teeth and gums are healthy enough for whitening",
      "Shade assessment so we can track your results accurately",
      "Professional in-clinic treatment or custom take-home trays (or both)",
      "A result typically 4–8 shades brighter",
    ],
    benefits: [
      "Visibly brighter smile in a single session",
      "Safe, supervised process with no risk of enamel damage",
      "Results that last 1–3 years with proper maintenance",
      "Far more effective than any over-the-counter product",
    ],
    duration: "In-clinic: 60–90 minutes. Take-home: 2 weeks wearing trays nightly",
    recovery: "Possible temporary tooth sensitivity for 24–48 hours",
    faqs: [
      {
        q: "Will whitening damage my enamel?",
        a: "Not when done professionally. We assess your enamel health before treatment and use concentrations safe for dental use.",
      },
      {
        q: "How long do results last?",
        a: "Typically 1–3 years depending on diet and habits. Avoiding tea, coffee, red wine, and smoking extends results significantly.",
      },
      {
        q: "My teeth are sensitive. Can I still whiten?",
        a: "Often yes, but we take extra precautions. We may recommend a desensitising treatment beforehand and use a lower concentration formula.",
      },
    ],
  },
];

export const SERVICE_CATEGORIES: { value: ServiceCategory; label: string }[] = [
  { value: "all", label: "All Services" },
  { value: "preventive", label: "Preventive" },
  { value: "cosmetic", label: "Cosmetic" },
  { value: "restorative", label: "Restorative" },
  { value: "surgery", label: "Oral Surgery" },
];

/* ── Team ─────────────────────────────────────────────────────────────────── */

export interface TeamMember {
  id: number;
  slug: string;
  name: string;
  role: string;
  specialty: string;
  shortBio: string;
  fullBio: string[];
  quals: string[];
  education: string[];
  languages: string[];
  ph: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    slug: "dr-amaka-umeano",
    name: "Dr. Mrs Amaka Umeano",
    role: "Lead Dentist & Founder",
    specialty: "Oral & Maxillofacial Surgery",
    shortBio:
      "With over 20 years of practice, Dr. Umeano founded the hospital with a vision of world-class dental care for the Onitsha community and beyond.",
    fullBio: [
      "Dr. Amaka Umeano established Umeano Dental & Maxillofacial Hospital in 2004 with a clear mission: to bring the kind of specialist dental and maxillofacial care that had previously only been available in Lagos and Abuja directly to the people of Onitsha and Anambra State.",
      "A graduate of the University of Nigeria, Enugu Campus, Dr. Umeano went on to earn her Fellowship from the West African College of Surgeons, specialising in oral and maxillofacial surgery. She has participated in medical missions across Southeast Nigeria and is an active member of the Nigerian Dental Association.",
      "Her approach to patient care is built on empathy, clarity, and precision. She believes that no patient should feel confused or anxious about their treatment — every procedure is explained in full, in plain language, before it begins.",
      "Outside the clinic, Dr. Umeano is a sought-after mentor for young dental professionals and an advocate for community oral health education.",
    ],
    quals: ["BDS (UNN)", "FWACS", "MDCN Registered"],
    education: [
      "Bachelor of Dental Surgery — University of Nigeria, Enugu Campus",
      "Fellowship of the West African College of Surgeons (Oral & Maxillofacial Surgery)",
    ],
    languages: ["English", "Igbo"],
    ph: "Founder & Lead Dentist",
  },
  {
    id: 2,
    slug: "dr-dilichukwu-umeano",
    name: "Dr. Dilichukwu Jude Umeano",
    role: "Dental Surgeon",
    specialty: "Oral & Maxillofacial Surgery",
    shortBio:
      "Specialist in oral and maxillofacial surgery with expertise in complex reconstructive procedures and facial trauma management.",
    fullBio: [
      "Dr. Dilichukwu Umeano is a highly skilled oral and maxillofacial surgeon with a focus on complex reconstructive procedures, facial trauma, and dentoalveolar surgery.",
      "His approach combines technical precision with a calm, reassuring manner that patients consistently note puts them at ease, even before the most daunting procedures.",
      "Dr. Dilichukwu is committed to evidence-based practice and regularly attends international conferences to remain current with advances in oral surgery.",
    ],
    quals: ["BDS", "MFDS RCS", "MDCN Registered"],
    education: [
      "Bachelor of Dental Surgery",
      // "Membership of the Faculty of Dental Surgery, Royal College of Surgeons, Edinburgh",
    ],
    languages: ["English", "Igbo"],
    ph: "Dental Surgeon",
  },
  {
    id: 3,
    slug: "dr-orthodontist",
    name: "Dr. TBD",
    role: "Orthodontist",
    specialty: "Orthodontics",
    shortBio:
      "Dedicated to creating beautiful, functional smiles through precision orthodontic treatment for patients of all ages.",
    fullBio: [
      "Our orthodontist brings specialist training in the full spectrum of fixed and removable orthodontic appliances. With a patient and methodical approach, they develop individualised treatment plans that balance clinical outcomes with the patient's lifestyle and aesthetic preferences.",
      "Experienced in treating both children and adults, they understand that orthodontic treatment is a significant commitment — and take time to ensure every patient and family is fully informed and comfortable before treatment begins.",
    ],
    quals: ["BDS", "M.Orth", "MDCN Registered"],
    education: [
      "Bachelor of Dental Surgery",
      "Membership in Orthodontics",
    ],
    languages: ["English", "Igbo"],
    ph: "Orthodontist",
  },
];

/* ── Gallery ──────────────────────────────────────────────────────────────── */

export interface GalleryPhoto {
  id: number;
  label: string;
  caption: string;
  span?: string;
}

export interface BeforeAfterItem {
  id: number;
  label: string;
  service: string;
  serviceSlug: string;
  description: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    label: "Reception",
    caption: "Reception & Welcome Lounge",
    span: "col-span-5 row-span-2 max-md:col-span-1 max-md:row-span-1",
  },
  {
    id: 2,
    label: "Treatment Room",
    caption: "Primary Treatment Room",
    span: "col-span-4 max-md:col-span-1",
  },
  {
    id: 3,
    label: "X-Ray Suite",
    caption: "Digital X-Ray Suite",
    span: "col-span-3 max-md:col-span-1",
  },
  {
    id: 4,
    label: "Surgical Theatre",
    caption: "Surgical Suite",
    span: "col-span-3 max-md:col-span-1",
  },
  {
    id: 5,
    label: "Waiting Lounge",
    caption: "Patient Lounge",
    span: "col-span-4 max-md:col-span-2",
  },
  {
    id: 6,
    label: "Sterilisation Unit",
    caption: "Sterilisation & Infection Control Unit",
    span: "col-span-5 max-md:col-span-1",
  },
  {
    id: 7,
    label: "Consultation Room",
    caption: "Private Consultation Room",
    span: "col-span-4 max-md:col-span-1",
  },
  {
    id: 8,
    label: "Recovery Room",
    caption: "Post-Op Recovery Suite",
    span: "col-span-3 max-md:col-span-1",
  },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 1,
    label: "Orthodontic Treatment",
    service: "Orthodontics & Braces",
    serviceSlug: "orthodontics-braces",
    description: "24-month treatment with ceramic braces. Severe crowding corrected without extractions.",
  },
  {
    id: 2,
    label: "Composite Veneers",
    service: "Cosmetic Dentistry",
    serviceSlug: "cosmetic-dentistry",
    description: "Upper 6 composite veneers. Natural shade match, completed in a single appointment.",
  },
  {
    id: 3,
    label: "Implant Crown",
    service: "Dental Implants",
    serviceSlug: "dental-implants",
    description: "Single tooth implant replacing missing upper central incisor. Final crown fitted at 5 months.",
  },
  {
    id: 4,
    label: "Teeth Whitening",
    service: "Teeth Whitening",
    serviceSlug: "teeth-whitening",
    description: "In-clinic whitening session. 6-shade improvement in 90 minutes.",
  },
  {
    id: 5,
    label: "Full Smile Makeover",
    service: "Cosmetic Dentistry",
    serviceSlug: "cosmetic-dentistry",
    description:
      "Combination of whitening, composite bonding, and gum contouring to transform a misshapen, discoloured smile.",
  },
  {
    id: 6,
    label: "Jaw Surgery Recovery",
    service: "Oral Surgery & Maxillofacial",
    serviceSlug: "oral-surgery-maxillofacial",
    description:
      "Corrective jaw surgery for severe Class III malocclusion. Patient photographed 6 months post-op.",
  },
];
