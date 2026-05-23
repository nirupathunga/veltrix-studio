/* ─────────────────────────────────────────────────────────
    src/pages/Home.jsx
    Zyvone Technologies — Landing Page
───────────────────────────────────────────────────────── */
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  Quote,
  Sparkles,
  TrendingUp,
  Star,
} from "lucide-react";

import ProductCard from "../components/ProductCard";
import ServiceCard from "../components/ServiceCard";
import {
  PRODUCTS_DATA,
  SERVICES_DATA,
  STATS_DATA,
  TESTIMONIALS_DATA,
} from "../data/mockData";

/* ── Animation configurations ───────────────────────────── */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const scaleIn = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Reusable viewport intersection tracker ──────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  return { ref, inView };
}

/* ── Section title element ──────────────────────────────── */
function SectionHeading({ eyebrow, title, subtitle, center = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 mb-3 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 px-3 py-1 text-[11px] font-semibold tracking-[0.1em] uppercase text-black dark:text-white">
          <Sparkles size={10} strokeWidth={2.5} />
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight font-sans">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-slate-950 dark:to-black overflow-x-hidden"
    >
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <ProductsSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────
    1. HERO
──────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative isolate flex flex-col items-center justify-center text-center min-h-[92vh] px-5 sm:px-8 pt-28 pb-20 overflow-hidden">
      
      {/* Background gradients and mesh overlays */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-slate-200/10 dark:bg-slate-700/10 blur-[120px]" />
        <div className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full bg-slate-200/10 dark:bg-slate-700/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-slate-200/8 dark:bg-slate-700/8 blur-[100px]" />
        
        <svg className="absolute inset-0 h-full w-full opacity-[0.035] dark:opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="1.5" r="1.5" fill="currentColor" className="text-slate-900 dark:text-slate-200" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      {/* Eyebrow badge */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-black dark:text-white shadow-sm shadow-black/5 dark:shadow-none mb-8">
          <TrendingUp size={12} strokeWidth={2.5} />
          Product · Design · Engineering
        </span>
      </motion.div>

      {/* Headlines */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] font-sans"
      >
        <span className="text-slate-900 dark:text-white">We build </span>
        <span className="text-slate-900 dark:text-white">
          digital experiences
        </span>
        <br className="hidden sm:block" />
        <span className="text-slate-900 dark:text-white"> that </span>
        <span className="relative inline-block">
          <span className="text-slate-900 dark:text-white">
            define categories.
          </span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full bg-black dark:bg-white opacity-60"
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 max-w-xl text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-light"
      >
        Zyvone Technologies is an elite product agency — we design systems, engineer
        performance, and craft brand identities that turn ambitious visions into
        living, breathing digital platforms.
      </motion.p>

      {/* Trigger buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <Link
          to="/products"
          className="
            group inline-flex items-center gap-2
            rounded-xl px-7 py-3.5 text-sm font-semibold
            bg-black dark:bg-white text-white dark:text-black cursor-pointer
            shadow-lg shadow-black/20 dark:shadow-white/10
            hover:shadow-xl hover:shadow-black/30 dark:hover:shadow-white/20
            hover:-translate-y-0.5
            transition-all duration-200
          "
        >
          Explore Products
          <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>

        <Link
          to="/contact"
          className="
            group inline-flex items-center gap-2
            rounded-xl px-7 py-3.5 text-sm font-semibold
            border border-slate-200 dark:border-slate-800
            bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm
            text-slate-800 dark:text-slate-100 cursor-pointer
            hover:border-slate-400 dark:hover:border-slate-600
            hover:bg-white dark:hover:bg-slate-900
            hover:-translate-y-0.5 shadow-sm
            transition-all duration-200
          "
        >
          <CalendarCheck size={15} strokeWidth={2} className="text-black dark:text-white" />
          Book a Strategy Call
        </Link>
      </motion.div>

      {/* Face pile social proof lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-16 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-light"
      >
        <div className="flex -space-x-2 mr-1">
          {["47", "12", "23", "32", "56"].map((n) => (
            <img
              key={n}
              src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&auto=format&fit=crop&h=64`}
              alt=""
              className="h-7 w-7 rounded-full border-2 border-white dark:border-slate-950 object-cover"
            />
          ))}
        </div>
        <span className="font-semibold text-slate-700 dark:text-slate-300">340+</span>
        products shipped for founders & enterprises globally
      </motion.div>

      {/* Center navigation scroll widget indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] tracking-widest uppercase text-slate-400 dark:text-slate-600">Scroll</span>
          <div className="h-10 w-5 rounded-full border border-slate-300 dark:border-slate-700 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-1 rounded-full bg-black dark:bg-white"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
    2. SERVICES GRID
──────────────────────────────────────────────────────── */
function ServicesSection() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-gradient-to-b from-neutral-50 to-white dark:from-slate-900/20 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="What we do"
              title="Every discipline you need, under one roof."
              subtitle="From research to release — Zyvone covers the full product lifecycle with dedicated specialists who care about the craft."
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {SERVICES_DATA.map((service) => (
              <motion.div key={service.id} variants={scaleIn}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
    3. STATISTICS
──────────────────────────────────────────────────────── */
function StatsSection() {
  const { ref, inView } = useReveal(0.2);

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
          <span className="flex-shrink-0 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 px-3 py-0.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-black dark:text-white">
            By the numbers
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/60 shadow-sm"
        >
          {STATS_DATA.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="
                group flex flex-col items-center justify-center text-center
                bg-white dark:bg-black px-6 py-10
                hover:bg-slate-50 dark:hover:bg-slate-900/50
                transition-colors duration-300
              "
            >
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-black dark:text-white leading-none mb-3 font-sans">
                {stat.value}
              </span>
              <span className="text-xs font-medium tracking-wide text-slate-500 dark:text-slate-400 leading-snug max-w-[7rem]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
    4. PRODUCTS CATALOG LOOP
──────────────────────────────────────────────────────── */
function ProductsSection() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-gradient-to-b from-neutral-50 to-white dark:from-slate-900/20 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="Featured products"
              title="Tools built by architects, for teams."
              subtitle="Every Zyvone tool is battle-tested across real enterprise setups before it ships out."
            />
            <Link
              to="/products"
              className="
                group mb-[3px] inline-flex flex-shrink-0 items-center gap-1.5
                text-sm font-semibold text-black dark:text-white cursor-pointer
                hover:text-slate-700 dark:hover:text-slate-300
                transition-colors duration-200 self-start sm:self-auto
              "
            >
              View all products
              <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PRODUCTS_DATA.map((product) => (
              <motion.div key={product.id} variants={scaleIn}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
    5. TESTIMONIAL FEEDBACK BARS
──────────────────────────────────────────────────────── */
function TestimonialsSection() {
  const { ref, inView } = useReveal();

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionHeading
              eyebrow="Client stories"
              title="Trusted by teams scaling digital tools."
              subtitle="Don't take our word for it — hear from product leaders accelerating with our system blueprints."
              center
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {TESTIMONIALS_DATA.map((item) => (
              <motion.div
                key={item.id}
                variants={scaleIn}
                className="
                  group relative flex flex-col
                  rounded-2xl border border-slate-100 dark:border-slate-800/60
                  bg-white dark:bg-slate-900 shadow-md hover:shadow-xl p-7
                  transition-all duration-300 hover:-translate-y-1
                "
              >
                <div aria-hidden="true" className="absolute top-5 right-6 opacity-[0.06] dark:opacity-[0.08]">
                  <Quote size={52} strokeWidth={1} className="text-indigo-600" />
                </div>

                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} strokeWidth={0} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="flex-1 text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-7 font-light">
                  "{item.quote}"
                </blockquote>

                <div className="flex items-center gap-3 border-t border-slate-100 dark:border-slate-800/60 pt-5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-indigo-100 dark:ring-indigo-900/60"
                  />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none mb-0.5 font-sans">
                      {item.name}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {item.role}
                    </p>
                  </div>
                  <span className="ml-auto h-2 w-2 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────
    6. CTA SYSTEM GATEWAY
──────────────────────────────────────────────────────── */
function CTASection() {
  const { ref, inView } = useReveal(0.25);

  return (
    <section ref={ref} className="py-24 px-5 sm:px-8 bg-slate-50/70 dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative isolate overflow-hidden rounded-3xl
            bg-white dark:bg-black
            border border-slate-200 dark:border-slate-800
            px-8 py-16 sm:px-16 sm:py-20 text-center shadow-2xl shadow-black/5 dark:shadow-white/5
          "
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-slate-200/20 dark:bg-slate-800/20 blur-3xl" />
            <div className="absolute -bottom-10 right-10 h-48 w-48 rounded-full bg-slate-200/15 dark:bg-slate-800/15 blur-2xl" />
            <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-900 dark:text-white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 backdrop-blur-sm px-3.5 py-1 text-[11px] font-semibold tracking-widest uppercase text-slate-700 dark:text-slate-300 mb-6">
            <Sparkles size={10} strokeWidth={2.5} />
            Ready to start?
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-5 font-sans">
            Your next breakthrough product<br className="hidden sm:block" /> starts with a conversation.
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-light">
            Whether you're an early-stage founder scaling an identity framework or launching an enterprise tool — Zyvone Technologies brings the technical taste to execute.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-10">
            <input
              type="email"
              placeholder="your@company.com"
              className="
                w-full sm:flex-1 rounded-xl
                border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 backdrop-blur-sm
                px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400
                focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20
                transition-all duration-200
              "
            />
            <button
              type="button"
              className="
                flex-shrink-0 w-full sm:w-auto
                inline-flex items-center justify-center gap-2
                rounded-xl px-6 py-3 text-sm font-semibold
                bg-black dark:bg-white text-white dark:text-black cursor-pointer
                shadow-lg shadow-black/15 dark:shadow-white/10 hover:bg-slate-900 dark:hover:bg-slate-100
                hover:-translate-y-0.5 transition-all duration-200
              "
            >
              Get in touch
              <ArrowRight size={14} strokeWidth={2.5} />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {["No commitment required", "Response within 24h", "NDA available"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-light">
                <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-white/20" />
            <span className="text-xs text-white/40">or</span>
            <div className="h-px w-16 bg-white/20" />
          </div>
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors duration-200 underline underline-offset-4 decoration-white/30"
          >
            <CalendarCheck size={14} strokeWidth={2} />
            Book a free strategy call
          </Link>
        </motion.div>
      </div>
    </section>
  );
}