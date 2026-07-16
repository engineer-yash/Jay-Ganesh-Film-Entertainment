'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '@/data/gallery';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import { Reveal } from '@/components/site/Motion';

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const items = active === 'All' ? galleryImages : galleryImages.filter((i) => i.category === active);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Breadcrumbs items={[{ label: 'Gallery' }]} /></div>

      <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</div></Reveal>
          <Reveal delay={0.1}><h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.02]">Every frame is a <span className="text-gradient-gold">stage</span>.</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-lg text-muted-foreground">A visual archive of our studios, students, events, films and everything in between. Filter by category.</p></Reveal>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`px-5 py-2 rounded-full border text-sm font-medium transition ${active === c ? 'bg-primary text-primary-foreground border-primary' : 'border-border hover:border-primary hover:text-primary'}`}>
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {items.map((it, i) => (
              <motion.div
                key={it.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
                whileHover={{ y: -6, rotate: i % 2 === 0 ? 1 : -1 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden ring-1 ring-border group"
              >
                <img src={it.src} alt={it.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition">
                  <div className="text-xs uppercase tracking-widest text-primary">{it.category}</div>
                  <div className="font-display text-lg">{it.title}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
