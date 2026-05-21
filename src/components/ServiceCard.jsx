// src/components/ServiceCard.jsx
import * as Icons from "lucide-react";
import { Check, ArrowUpRight } from "lucide-react";

/**
 * ServiceCard
 * @prop {Object} service
 * @prop {string} service.title       – Service name
 * @prop {string} service.icon        – Lucide icon name as a PascalCase string
 * @prop {string} service.description – Short value-prop sentence
 * @prop {string[]} service.features  – Array of feature strings to list
 */
export default function ServiceCard({ service }) {
  const { title, icon, description, features = [] } = service;

  /* ── Dynamically resolve the Lucide icon from its string name ── */
  const IconComponent = Icons[icon] ?? Icons.HelpCircle;

  return (
    <article
      className="
        group relative flex flex-col
        rounded-2xl overflow-hidden
        bg-white dark:bg-slate-900
        border border-slate-100 dark:border-slate-800/60
        shadow-md hover:shadow-xl hover:shadow-indigo-500/10
        transition-all duration-300 hover:scale-[1.03]
        focus-within:ring-2 focus-within:ring-indigo-500/40
        p-6
      "
    >
      {/* ── Decorative corner geometry ── */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute top-0 right-0
          h-24 w-24 rounded-bl-[4rem]
          bg-gradient-to-bl from-indigo-50 to-transparent
          dark:from-indigo-950/30 dark:to-transparent
          transition-opacity duration-300
          group-hover:opacity-80
        "
      />

      {/* ── Icon wrapper ── */}
      <div className="relative mb-5 w-fit">
        <div
          className="
            flex items-center justify-center
            h-12 w-12 rounded-xl
            bg-indigo-50 dark:bg-indigo-950/50
            text-indigo-600 dark:text-indigo-400
            shadow-sm shadow-indigo-200/60 dark:shadow-indigo-900/40
            transition-all duration-300
            group-hover:scale-110 group-hover:shadow-md group-hover:shadow-indigo-300/50
            dark:group-hover:shadow-indigo-800/40
          "
          aria-hidden="true"
        >
          <TriangleIcon component={IconComponent} />
        </div>

        {/* Subtle motion pulse indicators */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </span>
      </div>

      {/* ── Title ── */}
      <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white leading-snug mb-2 font-sans">
        {title}
      </h3>

      {/* ── Description ── */}
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 font-light">
        {description}
      </p>

      {/* ── Divider ── */}
      <div className="mb-4 h-px w-full bg-gradient-to-r from-slate-100 via-indigo-100/60 to-transparent dark:from-slate-800 dark:via-indigo-950/30 dark:to-transparent" />

      {/* ── Feature list loop ── */}
      {features.length > 0 && (
        <ul className="flex flex-col gap-2.5 mb-6 flex-1" role="list">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2.5 group/item"
            >
              <span
                className="
                  mt-0.5 flex-shrink-0
                  flex items-center justify-center
                  h-4 w-4 rounded-full
                  bg-indigo-100 dark:bg-indigo-950/70
                  text-indigo-600 dark:text-indigo-400
                  transition-colors duration-200
                  group-hover/item:bg-indigo-200 dark:group-hover/item:bg-indigo-900/80
                "
                aria-hidden="true"
              >
                <Check size={10} strokeWidth={3} />
              </span>

              <span className="text-sm text-slate-600 dark:text-slate-300 leading-snug font-light">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* ── CTA Action Button ── */}
      <div className="mt-auto pt-2">
        <button
          type="button"
          className="
            group/btn inline-flex items-center gap-2
            w-full justify-center
            rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wide
            border border-indigo-200 dark:border-indigo-800/60
            bg-indigo-50/80 hover:bg-indigo-600
            dark:bg-indigo-950/40 dark:hover:bg-indigo-600
            text-indigo-700 hover:text-white
            dark:text-indigo-300 dark:hover:text-white
            shadow-sm hover:shadow-md hover:shadow-indigo-500/25
            transition-all duration-200
            hover:-translate-y-0.5
            focus:outline-none focus:ring-2 focus:ring-indigo-500
          "
        >
          Learn more
          <ArrowUpRight
            size={13}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>

      {/* Depth ring layer */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ring-1 ring-inset ring-indigo-500/15
        "
      />
    </article>
  );
}

// Inner helper component to keep the main layer clean
function TriangleIcon({ component: Component }) {
  return <Component size={22} strokeWidth={1.8} />;
}