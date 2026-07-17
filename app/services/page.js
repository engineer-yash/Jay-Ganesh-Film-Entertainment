'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Sparkles, Search } from 'lucide-react';
import { services } from '@/data/services';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import MarqueeBand from '@/components/site/MarqueeBand';

// Colour ribbons rotated across cards for visual variety
const ACCENTS = [
  'from-amber-400/40 via-pink-500/30 to-fuchsia-500/30',
  'from-fuchsia-500/40 via-rose-500/30 to-amber-400/30',
  'from-rose-500/40 via-amber-400/30 to-pink-500/30',
  'from-violet-500/40 via-fuchsia-500/30 to-rose-500/30',
];

export default function ServicesPage() {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All', ...Array.from(new Set(services.map((s) => s.category)))];

  const filtered = services.filter((s) => {
    const matchCat = activeCat === 'All' || s.category === activeCat;
    const q = query.trim().toLowerCase();
    const matchQ =
      !q ||
      s.title.toLowerCase().includes(q) ||
      s.short.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q);
    return matchCat && matchQ;
  });

  // lock body scroll while modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Services' }]} />
      </div>

      <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">
            My Style Dance Studio
          </div>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.02]">
            Classes &amp; <span className="text-gradient-gold">Services.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Bollywood, Hip Hop, Classical, Fitness, Music &amp; Art — 25+ programs
            crafted by Mukesh &quot;Rudra&quot; Chaudhari and our team of certified trainers.
            Tap any card to read the full details.
          </p>
        </div>

        {/* Search + filters */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a class..."
              className="w-full pl-11 pr-4 py-3 rounded-full bg-card/60 border border-border focus:border-primary focus:outline-none text-sm placeholder:text-muted-foreground/70"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider border transition ${
                  activeCat === c
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-background/60 border-border hover:border-primary hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s, i) => (
            <motion.button
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              onClick={() => setSelected(s)}
              className="group text-left relative overflow-hidden rounded-3xl border border-border bg-card/40 hover-lift focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div
                className={`absolute inset-0 opacity-30 group-hover:opacity-60 transition bg-gradient-to-br ${
                  ACCENTS[i % ACCENTS.length]
                }`}
              />
              <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative p-6 flex flex-col h-full">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10">
                    {s.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider text-primary">
                    <Sparkles className="h-3 w-3" /> Popular
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl mt-5 leading-tight text-foreground">
                  {s.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                  {s.short}
                </p>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Fees
                    </div>
                    <div className="font-display text-xl text-gradient-gold mt-1">
                      {s.priceLabel}
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:translate-x-1 transition">
                    Read more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-muted-foreground">
            No classes match your search. Try a different keyword.
          </div>
        )}

        {/* CTA strip */}
        <div className="mt-20 rounded-3xl border border-border bg-card/40 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 spotlight opacity-70" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">
                Ready to move?
              </div>
              <h3 className="font-display text-3xl md:text-4xl mt-3">
                Book a <span className="text-gradient-gold">free trial</span> class today.
              </h3>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Talk to us on WhatsApp or drop into any of our 4 Pune studios.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition self-start"
            >
              Join a Class <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <MarqueeBand />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="services-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setSelected(null)}
            />

            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl border border-border bg-background/95 shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-background/95 backdrop-blur">
                <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                  {selected.category}
                </span>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-display text-3xl md:text-4xl leading-tight">
                  {selected.title}
                </h3>

                <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/40 bg-primary/10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-primary">
                    Fees
                  </span>
                  <span className="font-display text-lg text-gradient-gold">
                    {selected.priceLabel}
                  </span>
                </div>

                <p className="mt-6 text-base leading-relaxed text-foreground/85 whitespace-pre-line">
                  {selected.description}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
                  >
                    Enrol Now <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}