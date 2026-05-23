/* ─────────────────────────────────────────────────────────
   src/pages/Contact.jsx
   Zyvone Technologies — Interactive Contact Gateway Interface
───────────────────────────────────────────────────────── */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, HelpCircle, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", projectType: "Design System", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setLoading(true);
    // Mocking async flight simulation cleanly
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", projectType: "Design System", message: "" });
    }, 1100);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-slate-950 dark:to-black pb-24"
    >
      {/* ── Page Header ── */}
      <div className="relative isolate pt-24 pb-12 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-neutral-50 to-white dark:from-slate-900/20 dark:to-black">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-900 text-black dark:text-white border border-slate-300 dark:border-slate-700 uppercase tracking-wider">
            <MessageSquare size={12} />
            Contact
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Let's Work Together
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-500 dark:text-slate-400 font-light">
            Whether you need a complete product redesign, a design system, or a performance audit—get in touch and let's talk about your vision.
          </p>
        </div>
      </div>

      {/* ── Main Split Column Grid Layout ── */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* ── Left Column: Corporate Meta Cards ── */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">
                Reach Out
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Tell us about your project. Whether it's early stage or you need to talk through specifics, we're here to listen and help you figure out next steps.
              </p>
            </div>

            {/* Direct Cards channels */}
            <div className="space-y-4 flex-1 my-8 lg:my-0">
              <a 
                href="mailto:hello@veltrix.studio"
                className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-200"
              >
                <div className="h-10 w-10 rounded-xl bg-black/10 dark:bg-white/10 text-black dark:text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Mail size={16} />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">Email</h3>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white font-sans group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-200">hello@veltrix.studio</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-light mt-0.5">Response tracked inside 24 standard business hours.</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/20 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-black/10 dark:bg-white/10 text-black dark:text-white flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider">Physical Coordinates</h3>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white font-sans">San Francisco, California</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-light mt-0.5">12 Meridian Blvd, Suite 400 • CA 94105</p>
                </div>
              </div>
            </div>

            {/* Inbound Badge Status */}
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-medium tracking-wide">Studio Engine Active: Core channels are monitored instantly.</span>
            </div>
          </div>

          {/* ── Right Column: Form State Machine ── */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 shadow-xl border border-slate-100 dark:border-slate-800/80 relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Identified Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="e.g. Marcus Aurelius"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none text-slate-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-all duration-200"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email Endpoint</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="your@company.com"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none text-slate-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Target Architectural Target</label>
                      <select
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none text-slate-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-all duration-200"
                      >
                        <option value="Design System">Atomic Design System Architecture</option>
                        <option value="Motion Preset">Framer Motion Preset Engineering</option>
                        <option value="Full Frontend">Complete Custom React Frontend Construction</option>
                        <option value="Consultation">Performance Scaling Strategy Call</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Message Description</label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Detail your product scale expectations, timing scope, or asset targets..."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 outline-none text-slate-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20 transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl font-semibold text-xs text-white dark:text-black bg-black dark:bg-white hover:bg-slate-900 dark:hover:bg-slate-100 active:bg-slate-950 dark:active:bg-slate-200 uppercase tracking-widest shadow-md shadow-black/10 dark:shadow-white/10 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:hover:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Dispatching packet telemetry...
                        </>
                      ) : (
                        <>
                          Dispatch Briefing Packet
                          <Send size={12} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-box"
                    className="text-center py-12 space-y-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-sans">Packet Telemetry Received</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-light max-w-sm mx-auto leading-relaxed">
                      Thank you. Your briefing document was processed successfully. An engineering architect will validate parameters and communicate options shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      Submit another packet briefing <ArrowUpRight size={12} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}