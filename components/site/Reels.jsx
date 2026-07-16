'use client';
import { Play, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { reels } from '@/data/reels';
import { Reveal } from './Motion';

export default function Reels() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <motion.div aria-hidden className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }} />
      <motion.div aria-hidden className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                <Instagram className="h-3.5 w-3.5" /> Reels & Reels
              </div>
              <h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">Watch the <span className="text-gradient-gold">movement.</span></h2>
              <p className="mt-3 text-muted-foreground max-w-xl">Every reel is a stage. Every stage tells a story. Tap any tile to jump to the reel on Instagram.</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((r, i) => (
            <motion.a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8, rotate: i % 2 === 0 ? 1.5 : -1.5 }}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden ring-1 ring-border"
            >
              <img src={r.cover} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground shadow-2xl" animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Play className="h-6 w-6 fill-current" />
                </motion.div>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="text-xs font-semibold">{r.title}</div>
                <div className="text-[10px] uppercase tracking-widest text-primary mt-1 flex items-center gap-1"><Instagram className="h-3 w-3" /> View reel</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
