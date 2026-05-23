// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home",     to: "/" },
  { label: "About",    to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Services", to: "/services" },
  { label: "Contact",  to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Adjust border header shadow on scroll dynamics */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock viewport viewport scrolling while mobile sheet is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const activeClass   = "text-black dark:text-white font-semibold";
  const inactiveClass = "text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md
        bg-white/80 dark:bg-slate-950/80
        border-b transition-all duration-300
        ${scrolled
          ? "border-slate-200/80 dark:border-slate-800/80 shadow-sm shadow-black/5"
          : "border-transparent"}
      `}
    >
      {/* ── Thin premium brand gradient accent rule ── */}
      <div className="h-[2px] w-full bg-black dark:bg-white" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* ── Brand Wordmark Link ── */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 group select-none"
          >
            <span className="relative flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-0 rotate-45 rounded-sm bg-black dark:bg-white group-hover:rotate-[55deg] transition-transform duration-300" />
              <span className="absolute inset-[3px] rotate-45 rounded-sm bg-white dark:bg-slate-950 group-hover:rotate-[55deg] transition-transform duration-300" />
              <span className="relative h-2 w-2 rounded-full bg-black dark:bg-white" />
            </span>
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Zyvone
              <span className="text-slate-600 dark:text-slate-400"> Technologies</span>
            </span>
          </Link>

          {/* ── Desktop Horizontal Navigation Links ── */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Primary Navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink 
                key={to} 
                to={to} 
                end={to === "/"} 
                className={({ isActive }) => `relative text-sm tracking-wide transition-colors duration-200 group ${isActive ? activeClass : inactiveClass}`}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`
                        absolute -bottom-0.5 left-0 h-[1.5px] bg-black dark:bg-white
                        transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ── Desktop Secondary Controls ── */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-1.5
                rounded-lg px-4 py-2 text-sm font-semibold tracking-wide
                bg-black hover:bg-slate-900 active:bg-slate-950 dark:bg-white dark:hover:bg-slate-100 dark:active:bg-slate-200
                text-white dark:text-black
                shadow-md shadow-black/20 dark:shadow-white/10
                transition-all duration-200
                hover:shadow-lg hover:shadow-black/30 dark:hover:shadow-white/20
                hover:-translate-y-0.5
              "
            >
              Get in touch
            </Link>
          </div>

          {/* ── Mobile Layout Controls ── */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="
                flex items-center justify-center
                h-9 w-9 rounded-lg
                text-slate-700 dark:text-slate-200
                hover:bg-slate-100 dark:hover:bg-slate-800
                transition-colors duration-200
              "
            >
              {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Dropdown Slide Container (Mobile viewports) ── */}
      <div
        aria-hidden={!open}
        className={`
          md:hidden absolute top-full left-0 w-full
          bg-white/95 dark:bg-slate-950/95 backdrop-blur-md
          border-b border-slate-200 dark:border-slate-800
          shadow-xl shadow-black/10
          overflow-hidden
          transition-all duration-300 ease-in-out
          ${open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col px-5 pb-6 pt-3 gap-1" aria-label="Mobile Navigation">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium
                transition-colors duration-150
                ${isActive
                  ? "bg-slate-100 dark:bg-slate-900 text-black dark:text-white"
                  : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"}
              `}
            >
              {({ isActive }) => (
                <>
                  <span className={`h-1.5 w-1.5 rounded-full flex-shrink-0 transition-opacity duration-150 ${
                    isActive ? "bg-black dark:bg-white opacity-100" : "bg-transparent opacity-0"
                  }`} />
                  {label}
                </>
              )}
            </NavLink>
          ))}

          <div className="mt-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                flex items-center justify-center w-full
                rounded-xl px-4 py-3 text-sm font-semibold
                bg-indigo-600 hover:bg-indigo-700
                text-white
                transition-colors duration-200
              "
            >
              Get in touch →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}