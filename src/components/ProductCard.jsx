// src/components/ProductCard.jsx
import React from "react";
import { Star, ArrowUpRight, ShoppingBag } from "lucide-react";

/**
 * ProductCard
 * @prop {Object} product
 * @prop {string} product.title        – Product name
 * @prop {string} product.category     – Badge label (e.g. "UI Kits")
 * @prop {string} product.description  – Short copy (1–2 sentences)
 * @prop {string} product.price        – String price or formatted number
 * @prop {number} product.rating       – Decimal 0–5 (e.g. 4.7)
 * @prop {string} product.image        – Image URL
 */
export default function ProductCard({ product }) {
  const { title, category, description, price, rating, image } = product;

  /* ── Clamp rating to a 0-5 window and derive filled/empty star counts ── */
  const clampedRating = Math.min(5, Math.max(0, rating));
  const filledStars   = Math.round(clampedRating);
  const emptyStars    = 5 - filledStars;

  /* ── Category → monochrome accent mapping ── */
  const categoryPalette = {
    "Branding Packs":     "bg-slate-200   text-slate-700   dark:bg-slate-800  dark:text-slate-300",
    "UI Kits":            "bg-slate-200   text-slate-700   dark:bg-slate-800  dark:text-slate-300",
    "Website Templates":  "bg-slate-200   text-slate-700   dark:bg-slate-800  dark:text-slate-300",
    "Social Media Assets":"bg-slate-200   text-slate-700   dark:bg-slate-800  dark:text-slate-300",
  };
  const badgeClass = categoryPalette[category] ?? "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300";

  return (
    <article
      className="
        group relative flex flex-col
        rounded-2xl overflow-hidden
        bg-white dark:bg-slate-900
        border border-slate-200 dark:border-slate-800
        shadow-md hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10
        transition-all duration-300 hover:scale-[1.03]
        focus-within:ring-2 focus-within:ring-black/20 dark:focus-within:ring-white/20
      "
    >
      {/* ── Image block ── */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-105
          "
        />

        {/* Gradient scrim — adds depth, lets badge read cleanly */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Category badge — sits over the image bottom-left */}
        <span
          className={`
            absolute bottom-3 left-3
            inline-flex items-center gap-1
            rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase
            backdrop-blur-sm
            ${badgeClass}
          `}
        >
          <ShoppingBag size={10} strokeWidth={2.5} />
          {category}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 gap-3 p-5">
        {/* Title */}
        <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white leading-snug line-clamp-1 font-sans">
          {title}
        </h3>

        {/* Rating row */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5" aria-label={`Rating: ${clampedRating} out of 5`}>
            {Array.from({ length: filledStars }).map((_, i) => (
              <Star
                key={`filled-${i}`}
                size={13}
                strokeWidth={0}
                className="fill-amber-400 text-amber-400"
              />
            ))}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <Star
                key={`empty-${i}`}
                size={13}
                strokeWidth={1.5}
                className="text-slate-300 dark:text-slate-600"
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-amber-500 dark:text-amber-400">
            {clampedRating.toFixed(1)}
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">/ 5</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2 flex-1 font-light">
          {description}
        </p>

        {/* ── Bottom action row ── */}
        <div className="flex items-center justify-between pt-3 mt-auto border-t border-slate-100 dark:border-slate-800">
          {/* Price */}
          <div className="flex flex-col leading-none">
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">
              Price
            </span>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              {price}
            </span>
          </div>

          {/* CTA Button */}
          <button
            type="button"
            className="
              group/btn inline-flex items-center gap-1.5
              rounded-xl px-4 py-2.5 text-xs font-semibold tracking-wide
              bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700
              text-white cursor-pointer
              shadow-md shadow-indigo-500/25
              hover:shadow-lg hover:shadow-indigo-500/35
              transition-all duration-200
              hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-indigo-500
            "
          >
            View Details
            <ArrowUpRight
              size={13}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </button>
        </div>
      </div>

      {/* Subtle indigo glow on hover */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ring-1 ring-inset ring-indigo-500/20
        "
      />
    </article>
  );
}