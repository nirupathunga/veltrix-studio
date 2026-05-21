/* ─────────────────────────────────────────────────────────
   src/pages/Services.jsx
   Veltrix Studio — Agency Services, Pricing, & FAQ Systems
───────────────────────────────────────────────────────── */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, HelpCircle, ChevronDown, Check, Sparkles, Terminal, Activity } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import { SERVICES_DATA, FAQS_DATA } from "../data/mockData";

// Hardcoded pricing dataset following the requested structural spec
const PRICING_TIERS = [
  {
    name: "Growth Engine",
    price: "$1,499",
    period: "per release",
    desc: "Perfect for early stage startups launching their first product.",
    features: [
      "Custom component library (20+ pre-built components)",
      "High-fidelity desktop and mobile designs",
      "Production-ready React codebase",
      "Comprehensive design documentation",
      "Two rounds of revisions"
    ],
    popular: false
  },
  {
    name: "Scale Professional",
    price: "$3,899",
    period: "per release",
    desc: "Our most popular package for growth-stage companies scaling fast.",
    features: [
      "Complete custom design system with documentation",
      "Up to 6 fully designed page templates",
      "Custom animations and motion interactions",
      "Performance optimization (sub-second load)",
      "Dedicated Discord support channel",
      "Full design file and code handoff"
    ],
    popular: true
  }
];

const WORKFLOW_STEPS = [
  { step: "01", title: "Strategy & Discovery", body: "We map your vision to user needs, define the feature set, and establish the design foundation. This sets the direction for everything that follows." },
  { step: "02", title: "Design & Prototyping", body: "We create high-fidelity designs in Figma with fully documented components, interactions, and design systems for easy handoff." },
  { step: "03", title: "Development & Launch", body: "We build production-ready React code with performance optimization, accessibility, and the polish you'd expect from a premium product." }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-white dark:bg-slate-950 pb-24"
    >
      {/* ── Page Header ── */}
      <div className="relative isolate pt-24 pb-12 border-b border-slate-100 dark:border-slate-900/60 bg-slate-50/50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
            <Layers size={12} />
            Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            What We Do
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-500 dark:text-slate-400 font-light">
            We handle the entire process: strategy, design, and development. From concept to a polished product in your hands.
          </p>
        </div>
      </div>

      {/* ── Capabilities Cards Block ── */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* ── Workflow Process Timeline ── */}
      <div className="max-w-7xl mx-auto px-6 mt-28">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Our Process</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">How We Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {WORKFLOW_STEPS.map((item, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl bg-slate-50/60 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800/40 shadow-sm group">
              <span className="absolute top-4 right-6 text-5xl font-extrabold text-indigo-600/10 dark:text-indigo-400/10 group-hover:text-indigo-500/20 transition-colors duration-300 font-sans">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-sans">{item.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Standard Pricing Tiers Block ── */}
      <div className="max-w-7xl mx-auto px-6 mt-28">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Pricing Strategy</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Predictable Investment Tiers</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier, idx) => (
            <div 
              key={idx} 
              className={`
                relative p-8 rounded-2xl flex flex-col bg-white dark:bg-slate-900 shadow-lg border transition-all duration-300 hover:scale-[1.01]
                ${tier.popular ? "border-indigo-500 ring-1 ring-indigo-500/20" : "border-slate-100 dark:border-slate-800/80"}
              `}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold text-white bg-indigo-600 tracking-wider uppercase shadow-md">
                  Most Selected Option
                </span>
              )}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">{tier.name}</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-light mt-1 mb-6">{tier.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-6 border-b border-slate-100 dark:border-slate-800 pb-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans">{tier.price}</span>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-light">{tier.period}</span>
              </div>

              <ul className="space-y-3 flex-1 mb-8" role="list">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 font-light">
                    <Check size={14} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 text-xs font-semibold rounded-xl tracking-wide cursor-pointer transition-all duration-200 ${
                tier.popular 
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10 hover:bg-indigo-500" 
                  : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
              }`}>
                Initialize Engagement Blueprint
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── Accordion FAQ Block ── */}
      <div className="max-w-3xl mx-auto px-6 mt-28">
        <div className="text-center mb-12 space-y-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mx-auto">
            <HelpCircle size={20} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Frequently Solved Queries</h2>
        </div>
        <div className="space-y-4">
          {FAQS_DATA.map((faq, fIdx) => (
            <FAQAccordionItem key={fIdx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Sub-Component for managing isolation state elegantly
function FAQAccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/20 rounded-xl overflow-hidden shadow-sm transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-slate-900 dark:text-white outline-none cursor-pointer group"
      >
        <span className="font-sans group-hover:text-indigo-500 transition-colors duration-200">{question}</span>
        <ChevronDown 
          size={16} 
          className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180 text-indigo-500" : ""}`} 
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 pb-5 pt-1 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed border-t border-slate-50 dark:border-slate-800/40">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}