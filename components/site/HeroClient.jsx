'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, PlayCircle, CalendarDays, Clock, MapPin, Handshake } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { founder } from '@/data/founder';
import { getEvent } from '@/data/events';

export default function HeroClient() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  const words = ['Where', 'Dance,', 'Films &', 'Culture', 'come alive.'];
  const upcoming = getEvent('shubh-garba');

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-24 overflow-hidden spotlight">
      <motion.div style={{ y, scale, opacity }} className="absolute inset-0 -z-10">
        <Image src="/images/back-logo.jpg" alt="" fill priority className="object-cover object-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </motion.div>

      <motion.div aria-hidden animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 60, ease: 'linear' }} className="absolute top-24 -left-32 h-96 w-96 rounded-full border border-primary/10 pointer-events-none" />
      <motion.div aria-hidden animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 80, ease: 'linear' }} className="absolute bottom-10 -right-40 h-[500px] w-[500px] rounded-full border border-fuchsia-500/10 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center pt-5 pb-20 relative">
        {/* LEFT — unchanged */}
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Crafted since 2003
          </motion.div>

          <h1 className="font-display mt-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-baseline mr-4">
                <motion.span
                  initial={{ y: '110%', rotate: -6, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
                  className={`inline-block ${(word === 'Dance,' || word === 'Culture') ? 'text-gradient-gold' : ''}`}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }} className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Jay Ganesh Films Entertainment is a family of premium dance studios, cinematic events and cultural productions — started by national dance icon <span className="text-foreground font-medium">Mukesh (Rudra) Chaudhari</span>.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.05 }} className="mt-10 flex flex-wrap gap-4">
            <Link href="/branches" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Studios <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link href="/founder" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition">
              <PlayCircle className="h-4 w-4 group-hover:text-primary transition" /> Founder
            </Link>
            <Link href="/events" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition">
              <CalendarDays className="h-4 w-4 group-hover:text-primary transition" /> Events
            </Link>
            <Link href="/classes" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition">
              <Clock className="h-4 w-4 group-hover:text-primary transition" /> Classes
            </Link>
          </motion.div>

          <div className="mt-14 grid grid-cols-4 gap-6 max-w-lg">
            {founder.stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}>
                <div className="font-display text-3xl md:text-4xl text-gradient-gold">{s.number}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT — Upcoming Event Card (replaces the three floating images) */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden ring-1 ring-primary/30 bg-gradient-to-br from-amber-500/10 via-fuchsia-500/5 to-background shadow-2xl shadow-primary/10"
          >
            {/* Poster header */}
            <div className="relative aspect-[16/10]">
              <Image
                src={upcoming.image}
                alt={upcoming.name}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-primary/90 text-primary-foreground px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold">
                <Sparkles className="h-3 w-3" /> Upcoming Event
              </div>
            </div>

            {/* Details */}
            <div className="p-6 md:p-7">
              <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{upcoming.since}</div>
              <h3 className="font-display text-3xl md:text-4xl mt-2 leading-tight">
                Shubh Garba <span className="text-gradient-gold">Raas Dandiya 2026</span>
              </h3>
              <p className="mt-2 text-sm text-muted-foreground italic">{upcoming.tagline}</p>

              <div className="mt-5 space-y-2.5 text-sm">
                <div className="flex items-start gap-3">
                  <CalendarDays className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>{upcoming.date}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>{upcoming.time}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>{upcoming.venue}</span>
                </div>
              </div>

              {/* mini stats */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {upcoming.stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card/40 px-3 py-2 text-center">
                    <div className="font-display text-lg text-gradient-gold leading-none">{s.value}</div>
                    <div className="mt-1 text-[9px] uppercase tracking-[0.15em] text-muted-foreground leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/events/shubh-garba"
                  className="group inline-flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition text-sm"
                >
                  View Full Details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  href="/events/shubh-garba#sponsorship"
                  className="group inline-flex flex-1 items-center justify-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition text-sm font-semibold"
                >
                  <Handshake className="h-4 w-4" /> Become a Sponsor
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground pointer-events-none"
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }} className="h-6 w-px bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}