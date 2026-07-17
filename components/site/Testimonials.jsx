'use client';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { Reveal } from './Motion';

export default function Testimonials() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Community</div>
            <h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">Real dancers. <span className="text-gradient-gold">Real stories.</span></h2>
            <p className="mt-4 text-muted-foreground text-lg">From first trial to first stage — hear it straight from the family.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative p-8 rounded-3xl border border-border bg-card/40 backdrop-blur overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${t.color} opacity-20 blur-3xl`} />
              <Quote className="h-8 w-8 text-primary/60" />
              <p className="mt-4 text-foreground leading-relaxed">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`h-11 w-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-display text-lg font-bold text-white shadow-lg`}>{t.name.charAt(0)}</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_,k)=><Star key={k} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
