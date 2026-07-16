'use client';
import { motion } from 'framer-motion';

const items = ['Bollywood','•','Hip Hop','•','Kathak','•','Contemporary','•','Garba','•','Dandiya','•','Fashion','•','Films','•','Fitness','•','Kids','•','Wedding','•'];

export default function MarqueeBand({ reverse = false }) {
  return (
    <div className="relative py-6 border-y border-border/60 bg-gradient-to-r from-primary/5 via-fuchsia-500/5 to-primary/5 overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap font-display text-2xl md:text-4xl"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        {[...Array(4)].flatMap((_, i) => items.map((t, k) => (
          <span key={`${i}-${k}`} className={t === '•' ? 'text-primary' : (k % 3 === 0 ? 'text-gradient-gold' : 'text-muted-foreground')}>{t}</span>
        )))}
      </motion.div>
    </div>
  );
}
