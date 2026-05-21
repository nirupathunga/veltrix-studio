/* ─────────────────────────────────────────────────────────
   src/pages/Products.jsx
   Veltrix Studio — Interactive Product Catalog Archive
───────────────────────────────────────────────────────── */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingBag, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { PRODUCTS_DATA } from "../data/mockData";

const CATEGORIES = ["All", "Design System", "Motion Library", "UI Kit"];

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ── Dynamic Filtering Calculus ─────────────────────────
  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-screen bg-white dark:bg-slate-950 pb-24"
    >
      {/* ── Header Section ── */}
      <div className="relative isolate pt-24 pb-12 border-b border-slate-100 dark:border-slate-900/60 bg-slate-50/50 dark:bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
            <ShoppingBag size={12} />
            Products
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
            Ready-to-Use Components & Systems
          </h1>
          <p className="max-w-2xl mx-auto text-base text-slate-500 dark:text-slate-400 font-light">
            Premium design systems, animation libraries, and UI kits built for performance and scalability. Everything you need to move faster.
          </p>
        </div>
      </div>

      {/* ── Toolbar Section (Search & Filter Tabs) ── */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border border-slate-100 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 p-4 rounded-2xl backdrop-blur-sm shadow-sm mb-10">
          
          {/* Search Input field */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog products..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-sm outline-none text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Filtering navigation category pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <div className="flex items-center gap-1.5 pr-2 mr-2 border-r border-slate-200 dark:border-slate-800 text-xs text-slate-400 uppercase tracking-wider font-semibold hidden sm:flex">
              <SlidersHorizontal size={12} />
              Filter
            </div>
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 text-xs font-semibold rounded-xl tracking-wide transition-all duration-200 cursor-pointer
                    ${isActive 
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/15" 
                      : "bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60"}
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Grid Canvas Rendering ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── Empty Fallback Error Box ── */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20 px-6 rounded-2xl border border-dashed border-slate-200 dark:border-slate-800 max-w-md mx-auto"
          >
            <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-400 dark:text-slate-600 flex items-center justify-center mx-auto mb-4">
              <Search size={20} />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">No items found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light mt-1 mb-6">
              We couldn't locate any design resources matching "{searchQuery || selectedCategory}". Try checking your spelling or broadening options.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md transition-all duration-200 cursor-pointer"
            >
              Reset Search Parameters
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}