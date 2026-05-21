/* ─────────────────────────────────────────────────────────
   src/data/mockData.js
   Central mock data for Veltrix Studio pages
───────────────────────────────────────────────────────── */

export const PRODUCTS_DATA = [
  {
    id: "p1",
    title: "Aurora Design System v4",
    category: "Design System",
    description:
      "A comprehensive multi-platform design system with 400+ components, dark mode support, and a seamless Figma-to-code pipeline for rapid product delivery.",
    price: "$129",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    id: "p2",
    title: "Veltrix Motion Toolkit",
    category: "Motion Library",
    description:
      "60+ production-ready animation presets built on Framer Motion. Scroll reveals, page transitions, and gesture-driven micro-interactions out of the box.",
    price: "$79",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
  },
  {
    id: "p3",
    title: "Slate Admin UI Kit",
    category: "UI Kit",
    description:
      "A refined dashboard starter kit featuring 80+ admin components, data table patterns, chart wrappers, and a full authentication flow — light & dark ready.",
    price: "$99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export const SERVICES_DATA = [
  {
    id: "s1",
    title: "UI/UX Design",
    icon: "Layers",
    description:
      "Research-driven interfaces crafted for clarity, accessibility, and conversion — from wireframe to pixel-perfect handoff.",
    features: [
      "User research & journey mapping",
      "Component library creation",
      "Prototyping & usability testing",
      "Figma-to-code dev handoff",
    ],
  },
  {
    id: "s2",
    title: "Performance Engineering",
    icon: "Zap",
    description:
      "Sub-second load times, edge deployment, and Core Web Vitals excellence — built from the ground up, not bolted on.",
    features: [
      "Core Web Vitals optimisation",
      "Edge caching & CDN strategy",
      "Bundle analysis & code splitting",
      "Real-user monitoring setup",
    ],
  },
  {
    id: "s3",
    title: "Brand Strategy",
    icon: "Compass",
    description:
      "Positioning, narrative, and visual identity work that makes your brand impossible to forget — and easy to scale.",
    features: [
      "Brand identity & logo design",
      "Tone of voice & messaging",
      "Market positioning workshops",
      "Visual system documentation",
    ],
  },
  {
    id: "s4",
    title: "Full-Stack Development",
    icon: "Code2",
    description:
      "End-to-end product engineering — React frontends, Node/Edge APIs, database architecture, and CI/CD pipelines.",
    features: [
      "React & Next.js applications",
      "REST & GraphQL API design",
      "Database schema & migrations",
      "Automated testing & deployment",
    ],
  },
];

export const STATS_DATA = [
  { id: "st1", value: "340+",  label: "Products shipped" },
  { id: "st2", value: "98%",   label: "Client satisfaction" },
  { id: "st3", value: "12yrs", label: "Industry experience" },
  { id: "st4", value: "$2.4B", label: "Client revenue influenced" },
  { id: "st5", value: "60+",   label: "Global team members" },
  { id: "st6", value: "4.9★",  label: "Average product rating" },
];

export const TESTIMONIALS_DATA = [
  {
    id: "t1",
    quote:
      "Veltrix didn't just deliver a product — they delivered a strategic asset. Our conversion rate jumped 38% within six weeks of launch.",
    name: "Mara Chen",
    role: "CPO, Luminary Health",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: "t2",
    quote:
      "The Aurora Design System cut our team's design-to-dev time in half. It's the single best investment we've made in product infrastructure.",
    name: "James Owusu",
    role: "VP Engineering, Finpilot",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
  },
  {
    id: "t3",
    quote:
      "Working with Veltrix felt like having an in-house senior team — except they moved faster and with more taste than any team I've built internally.",
    name: "Sofia Reyes",
    role: "Founder, Stellr",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
  },
];

// ── FAQS_DATA ──
export const FAQS_DATA = [
  {
    question: "How long does a typical project take?",
    answer: "Most projects take between 2–4 weeks depending on scope and complexity. We'll give you a clear timeline after our initial conversation."
  },
  {
    question: "Do we get the design files and source code?",
    answer: "Yes, absolutely. You own everything—all Figma files, React source code, and documentation. We hand it over ready to maintain and build on."
  }
];

// ── Added TEAM_DATA Array to safe-guard the About page layout ──
export const TEAM_DATA = [
  {
    name: "Alex Rivera",
    role: "Principal Tech Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Elena Rostova",
    role: "Head of Systems Design",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
  }
];