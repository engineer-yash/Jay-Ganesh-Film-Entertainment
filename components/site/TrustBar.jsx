'use client';
import { motion } from 'framer-motion';
import { Trophy, Users, MapPin, Film } from 'lucide-react';

const items = [
  { icon: Trophy, value: '25+', label: 'Years of Craft' },
  { icon: MapPin, value: '8', label: 'Studios in Pune' },
  { icon: Users, value: '10,000+', label: 'Students Trained' },
  { icon: Film, value: '3', label: 'Signature Events' },
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-border/60 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex items-center gap-4 group"
            >
              <div className="h-11 w-11 rounded-full flex items-center justify-center border border-primary/30 bg-primary/5 text-primary group-hover:bg-primary/15 transition">
                <it.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-2xl md:text-3xl text-gradient-gold leading-none">{it.value}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{it.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}