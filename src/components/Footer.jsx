// src/components/Footer.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react"; // 👈 Wildcard import trick to bypass Vite cache bugs
import { useTheme } from "./ThemeContext";

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
  const { isDark } = useTheme();

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
    <footer className={`transition-colors duration-300 ${
      isDark 
        ? "bg-slate-950 text-slate-300 border-slate-900" 
        : "bg-white text-slate-700 border-slate-200"
    } border-t`}>

      {/* ── Top accent line ── */}
      <div className="h-[2px] w-full bg-black dark:bg-white" />

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* ── Column 1 · Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <span className="relative flex h-7 w-7 items-center justify-center">
                <span className={`absolute inset-0 rotate-45 rounded-sm group-hover:rotate-[55deg] transition-transform duration-300 ${isDark ? "bg-white" : "bg-black"}`} />
                <span className={`absolute inset-[3px] rotate-45 rounded-sm group-hover:rotate-[55deg] transition-transform duration-300 ${isDark ? "bg-slate-950" : "bg-white"}`} />
                <span className={`relative h-2 w-2 rounded-full ${isDark ? "bg-white" : "bg-black"}`} />
              </span>
              <span className={`text-base font-bold tracking-tight font-sans ${isDark ? "text-white" : "text-slate-900"}`}>
                Zyvone<span className={isDark ? "text-slate-400" : "text-slate-600"}> Technologies</span>
              </span>
            </Link>

            <p className={`text-sm leading-relaxed max-w-xs font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
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
                className={`flex items-center justify-center h-9 w-9 rounded-lg transition-all duration-200 hover:scale-105 border ${
                  isDark 
                    ? "bg-slate-800 hover:bg-black text-slate-400 hover:text-white border-slate-700/50 hover:border-black" 
                    : "bg-slate-100 hover:bg-black text-slate-600 hover:text-white border-slate-300/50 hover:border-black"
                }`}
              >
                {renderIcon("Twitter")}
              </a>
              <a
                href="https://github.com/veltrixstudio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`flex items-center justify-center h-9 w-9 rounded-lg transition-all duration-200 hover:scale-105 border ${
                  isDark 
                    ? "bg-slate-800 hover:bg-black text-slate-400 hover:text-white border-slate-700/50 hover:border-black" 
                    : "bg-slate-100 hover:bg-black text-slate-600 hover:text-white border-slate-300/50 hover:border-black"
                }`}
              >
                {renderIcon("Github")}
              </a>
              <a
                href="https://linkedin.com/company/veltrix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`flex items-center justify-center h-9 w-9 rounded-lg transition-all duration-200 hover:scale-105 border ${
                  isDark 
                    ? "bg-slate-800 hover:bg-black text-slate-400 hover:text-white border-slate-700/50 hover:border-black" 
                    : "bg-slate-100 hover:bg-black text-slate-600 hover:text-white border-slate-300/50 hover:border-black"
                }`}
              >
                {renderIcon("Linkedin")}
              </a>
            </div>
          </div>

          {/* ── Column 2 · Quick Links ── */}
          <div className="flex flex-col gap-4">
            <h3 className={`text-xs font-semibold tracking-[0.15em] uppercase ${isDark ? "text-slate-500" : "text-slate-600"}`}>
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`group inline-flex items-center gap-1.5 text-sm transition-colors duration-200 ${
                      isDark 
                        ? "text-slate-400 hover:text-slate-200" 
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {renderIcon("ArrowRight", `opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ${isDark ? "text-slate-500" : "text-slate-700"} w-3 h-3`)}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3 · Contact ── */}
          <div className="flex flex-col gap-4">
            <h3 className={`text-xs font-semibold tracking-[0.15em] uppercase ${isDark ? "text-slate-500" : "text-slate-600"}`}>
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="mailto:hello@veltrix.studio"
                  className={`group flex items-start gap-3 text-sm transition-colors duration-200 ${
                    isDark 
                      ? "text-slate-400 hover:text-slate-200" 
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className={`mt-0.5 flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-md border transition-colors duration-200 ${
                    isDark 
                      ? "bg-slate-900 border-slate-800/40 group-hover:bg-slate-800" 
                      : "bg-slate-100 border-slate-300/40 group-hover:bg-slate-200"
                  }`}>
                    {renderIcon("Mail", `${isDark ? "text-slate-500" : "text-slate-700"} w-3.5 h-3.5`)}
                  </span>
                  <span className="leading-snug">hello@veltrix.studio</span>
                </a>
              </li>
              <li>
                <div className={`flex items-start gap-3 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  <span className={`mt-0.5 flex-shrink-0 flex items-center justify-center h-7 w-7 rounded-md border ${
                    isDark 
                      ? "bg-slate-900 border-slate-800/40" 
                      : "bg-slate-100 border-slate-300/40"
                  }`}>
                    {renderIcon("MapPin", `${isDark ? "text-slate-500" : "text-slate-700"} w-3.5 h-3.5`)}
                  </span>
                  <span className="leading-snug font-light">
                    12 Meridian Blvd, Suite 400<br />
                    San Francisco, CA 94105
                  </span>
                </div>
              </li>
            </ul>

            {/* Availability badge */}
            <div className={`mt-1 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 w-fit ${
              isDark 
                ? "border-slate-700 bg-slate-800" 
                : "border-slate-300 bg-slate-100"
            }`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? "bg-slate-500" : "bg-slate-400"}`} />
                <span className={`relative inline-flex h-2 w-2 rounded-full ${isDark ? "bg-slate-400" : "bg-slate-500"}`} />
              </span>
              <span className={`text-xs font-medium tracking-wide ${isDark ? "text-slate-400" : "text-slate-700"}`}>Available for projects</span>
            </div>
          </div>

          {/* ── Column 4 · Newsletter ── */}
          <div className="flex flex-col gap-4">
            <h3 className={`text-xs font-semibold tracking-[0.15em] uppercase ${isDark ? "text-slate-500" : "text-slate-600"}`}>
              Stay in the loop
            </h3>
            <p className={`text-sm leading-relaxed font-light ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Get curated insights on design systems, emerging tech, and studio updates.
            </p>

            {submitted ? (
              <div className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 ${
                isDark 
                  ? "border-slate-700 bg-slate-800" 
                  : "border-slate-300 bg-slate-100"
              }`}>
                {renderIcon("Send", `${isDark ? "text-slate-400" : "text-slate-700"} flex-shrink-0`)}
                <p className={`text-sm font-medium ${isDark ? "text-slate-300" : "text-slate-700"}`}>You're subscribed — welcome!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3" noValidate>
                <div className="relative">
                  <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                    {renderIcon("Mail", "w-3.5 h-3.5")}
                  </div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    aria-label="Email address for newsletter"
                    className={`w-full rounded-xl border pl-10 pr-4 py-3 text-sm outline-none transition-all duration-200 ${
                      isDark 
                        ? "border-slate-800 bg-slate-900/50 hover:border-slate-700 focus:border-black text-slate-100 placeholder-slate-600" 
                        : "border-slate-300 bg-slate-50 hover:border-slate-400 focus:border-black text-slate-900 placeholder-slate-500"
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`inline-flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-semibold cursor-pointer transition-all duration-200 disabled:opacity-60 ${
                    isDark 
                      ? "bg-black hover:bg-slate-900 text-white" 
                      : "bg-black hover:bg-slate-900 text-white"
                  }`}
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={`border-t transition-colors duration-300 ${
        isDark 
          ? "border-slate-900/60 bg-slate-950/50" 
          : "border-slate-200 bg-slate-50"
      }`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={`text-xs text-center sm:text-left ${isDark ? "text-slate-600" : "text-slate-600"}`}>
            © {currentYear} Zyvone Technologies LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className={`text-xs transition-colors duration-200 ${isDark ? "text-slate-600 hover:text-slate-400" : "text-slate-600 hover:text-slate-900"}`}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}