// src/components/Footer.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react"; // 👈 Wildcard import trick to bypass Vite cache bugs

const QUICK_LINKS = [
  { label: "Home",     to: "/" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "About",    to: "/about" },
  { label: "Contact",  to: "/contact" },
];

export default function Footer() {
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 900);
  };

  const currentYear = new Date().getFullYear();

  // Helper inside component to render icons safely via string lookup
  const renderIcon = (iconName, tailwindClasses = "") => {
    const Component = Icons[iconName] || Icons.HelpCircle;
    return <Component className={tailwindClasses} size={16} strokeWidth={1.8} />;
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">

      {/* ── Top accent line ── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500" />

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* ── Column 1 · Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className="absolute inset-0 rotate-45 rounded-sm bg-indigo-600 group-hover:rotate-[55deg] transition-transform duration-300" />
                <span className="absolute inset-[3px] rotate-45 rounded-sm bg-slate-950 group-hover:rotate-[55deg] transition-transform duration-300" />
                <span className="relative h-2 w-2 rounded-full bg-indigo-500" />
              </span>
              <span className="text-base font-bold tracking-tight text-white font-sans">
                Veltrix<span className="text-indigo-400"> Studio</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs font-light">
              We craft immersive digital experiences that turn ambitious visions into
              living, breathing products. Design-led. Engineer-built. Future-proof.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://twitter.com/veltrixstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white border border-slate-800/50 hover:border-indigo-500 transition-all duration-200 hover:scale-105"
              >
                {renderIcon("Twitter")}
              </a>
              <a
                href="https://github.com/veltrixstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white border border-slate-800/50 hover:border-indigo-500 transition-all duration-200 hover:scale-105"
              >
                {renderIcon("Github")} {/* 👈 Using standard lowercase string to safeguard lookups */}
              </a>
              <a
                href="https://linkedin.com/company/veltrix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center h-9 w-9 rounded-lg bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white border border-slate-800/50 hover:border-indigo-500 transition-all duration-200 hover:scale-105"
              >
                {renderIcon("Linkedin")}
              </a>
            </div>
          </div>

          {/* ── Column 2 · Quick Links ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {renderIcon("ArrowRight", "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-indigo-500 w-3 h-3")}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 · Contact ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hello@veltrix.studio"
                  className="group flex items-start gap-3 text-sm text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                >
                  <span className="mt-0.5 flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-md bg-slate-900 border border-slate-800/40 group-hover:bg-indigo-600/20 transition-colors duration-200">
                    {renderIcon("Mail", "text-indigo-500 w-3.5 h-3.5")}
                  </span>
                  <span className="leading-snug">hello@veltrix.studio</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-0.5 flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-md bg-slate-900 border border-slate-800/40">
                    {renderIcon("MapPin", "text-indigo-500 w-3.5 h-3.5")}
                  </span>
                  <span className="leading-snug font-light">
                    12 Meridian Blvd, Suite 400<br />
                    San Francisco, CA 94105
                  </span>
                </div>
              </li>
            </ul>

            {/* Availability badge */}
            <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-emerald-800/60 bg-emerald-950/40 px-3 py-1.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs text-emerald-400 font-medium tracking-wide">Available for projects</span>
            </div>
          </div>

          {/* ── Column 4 · Newsletter ── */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-500">
              Stay in the loop
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Get curated insights on design systems, emerging tech, and studio updates.
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 rounded-xl border border-emerald-800/60 bg-emerald-950/40 px-4 py-3.5">
                {renderIcon("Send", "text-emerald-400 flex-shrink-0")}
                <p className="text-sm text-emerald-400 font-medium">You're subscribed — welcome!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3" noValidate>
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none">
                    {renderIcon("Mail", "w-3.5 h-3.5")}
                  </div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    aria-label="Email address for newsletter"
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/50 hover:border-slate-700 focus:border-indigo-600 pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all duration-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white cursor-pointer transition-all duration-200 disabled:opacity-60"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-900/60 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {currentYear} Veltrix Studio LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}