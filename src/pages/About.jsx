/* ─────────────────────────────────────────────────────────
   src/pages/About.jsx
   Veltrix Studio — Agency Narratives, Team Profiles, & Values
───────────────────────────────────────────────────────── */
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, Award, ShieldCheck, Target } from "lucide-react";
import { TEAM_DATA, STATS_DATA } from "../data/mockData";

const CORE_VALUES = [
  {
    icon: Target,
    title: "Meticulous Execution",
    body: "No shortcuts. We obsess over performance, accessibility, and the details that separate good products from exceptional ones."
  },
  {
    icon: Award,
    title: "Design Excellence",
    body: "We create systems that are beautiful, purposeful, and scalable. Every interaction, color, and typeface choice serves a reason."
  },
  {
    icon: ShieldCheck,
    title: "Transparent Partnership",
    body: "We communicate clearly, deliver on time, and give you full ownership of everything we create—code, designs, and documentation."
  }
];

export default function About() {
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
            <Users size={12} />
            Our Studio Narrative
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Engineered For Visual Impact
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-500 dark:text-slate-400 font-light">
            We are a compact collective of designers and technologists focused on replacing heavy legacy stacks with polished, interactive interfaces.
          </p>
        </div>
      </div>

      {/* ── Split Intro Narrative Section ── */}
      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans leading-tight">
              Design and engineering working in harmony.
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              We started Veltrix because most digital products look abandoned. Generic templates, slow performance, and poor attention to detail waste everyone's time. We believe your product deserves better—something built with care, optimized from the ground up, and aligned with your brand.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              We combine sharp design sensibility with rigorous engineering. The result is products that don't just look premium—they feel premium. Responsive, fast, accessible, and built to scale.
            </p>
          </div>
          
          <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop" 
              alt="Studio collaborative dashboard setup" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* ── Core Value Propositions Cards ── */}
      <div className="max-w-7xl mx-auto px-6 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_VALUES.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50/60 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/60 shadow-sm space-y-4">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <IconComp size={18} />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-sans">{val.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">{val.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Context Metrics Bar Loop ── */}
      <div className="max-w-7xl mx-auto px-6 mt-28">
        <div className="bg-slate-950 rounded-2xl p-8 border border-slate-900 shadow-xl relative overflow-hidden isolate">
          <div aria-hidden="true" className="absolute top-0 right-0 h-48 w-48 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none -z-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {STATS_DATA.map((stat) => (
              <div key={stat.id} className="space-y-1">
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400 tracking-tight font-sans">
                  {stat.value}
                </p>
                <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Team Members Cards Grid ── */}
      <div className="max-w-7xl mx-auto px-6 mt-28">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
            <Sparkles size={10} />
            The Engineers
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-sans">Our Architecture Collective</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
            Meet the specialists running our design workflows, system modeling components, and edge application runtimes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_DATA.map((member, idx) => (
            <div key={idx} className="group relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 shadow-md transition-all duration-300 hover:scale-[1.02]">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80" />
                
                {/* Dynamic Label overlay inside image layout card footprint */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-0.5">
                  <h3 className="text-base font-bold tracking-tight font-sans">{member.name}</h3>
                  <p className="text-xs text-indigo-300 tracking-wide uppercase font-medium">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}