'use client';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { Reveal } from './Motion';

export default function Reels() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                <Instagram className="h-3.5 w-3.5" /> Reels & Reels
              </div>
              <h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">
                Watch the <span className="text-gradient-gold">movement.</span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Every reel is a stage. Every stage tells a story. Explore the latest reels straight from our Instagram.
              </p>
            </div>
            <a
              href="https://www.instagram.com/jayganeshfilmentertainment"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start md:self-auto rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.25em] ring-1 ring-primary/40 text-primary hover:bg-primary/10 transition-colors"
              data-testid="reels-instagram-follow-link"
            >
              <Instagram className="h-4 w-4" /> Follow on Instagram
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="relative rounded-3xl overflow-hidden ring-1 ring-border bg-gradient-to-b from-background/60 to-background/20 backdrop-blur-sm shadow-2xl"
            data-testid="reels-instagram-widget-wrapper"
          >
            {/* Decorative gradient border glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-primary/20"
            />

            {/* Height-limited, scrollable container so the widget stays contained and responsive */}
            <div
              className="relative w-full overflow-y-auto overflow-x-hidden
                         h-[70vh] min-h-[520px] max-h-[820px]
                         [&::-webkit-scrollbar]:w-2
                         [&::-webkit-scrollbar-track]:bg-transparent
                         [&::-webkit-scrollbar-thumb]:bg-primary/40
                         [&::-webkit-scrollbar-thumb]:rounded-full"
            >
              <div
                className="sk-ww-instagram-reels"
                data-embed-id="25697936"
                data-testid="reels-sociablekit-embed"
              />
            </div>

            {/* Bottom fade for polish */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"
            />
          </div>
        </Reveal>
      </div>

      {/* Load the SociableKit widget script once, after page becomes interactive */}
      <Script
        src="https://widgets.sociablekit.com/instagram-reels/widget.js"
        strategy="afterInteractive"
      />
    </section>
  );
}