'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages, galleryCategories } from '@/data/gallery';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import { Reveal } from '@/components/site/Motion';
import { X } from 'lucide-react';

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);
  const items = active === 'All' ? galleryImages : galleryImages.filter((i) => i.category === active);

  return (
    <div className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Breadcrumbs items={[{ label: 'Gallery' }]} /></div>

      <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">Gallery</div></Reveal>
          <Reveal delay={0.1}><h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.02]">Every frame is a <span className="text-gradient-gold">stage</span>.</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-lg text-muted-foreground">A visual archive of our studios, students, events, films and everything in between. Filter by category — click any image to see it full-size.</p></Reveal>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-5 py-2 rounded-full border text-sm font-medium transition ${
                active === c
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                  : 'border-border hover:border-primary hover:text-primary'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          <AnimatePresence>
            {items.map((it, i) => (
              <motion.div
                key={it.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.05 }}
                whileHover={{ y: -6 }}
                onClick={() => setLightbox(it)}
                className={`relative mb-4 break-inside-avoid rounded-2xl overflow-hidden ring-1 ring-border group cursor-pointer ${
                  i % 5 === 0 ? 'aspect-[3/4]' : i % 5 === 1 ? 'aspect-square' : i % 5 === 2 ? 'aspect-[4/5]' : i % 5 === 3 ? 'aspect-[3/5]' : 'aspect-[4/3]'
                }`}
              >
                <img src={it.src} alt={it.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  <div className="text-[10px] uppercase tracking-widest text-primary">{it.category}</div>
                  <div className="font-display text-lg leading-tight">{it.title}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[80] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              className="absolute top-6 right-6 h-11 w-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <div className="text-[10px] uppercase tracking-widest text-primary">{lightbox.category}</div>
              <div className="font-display text-xl md:text-2xl text-white">{lightbox.title}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}