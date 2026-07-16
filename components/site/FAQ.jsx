'use client';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from './Motion';

export default function FAQ({ items, title = 'Questions, answered.', kicker = 'FAQ' }) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary"><HelpCircle className="h-3.5 w-3.5" /> {kicker}</div>
            <h2 className="font-display text-4xl md:text-6xl mt-3">{title.split(',')[0]},<span className="text-gradient-gold"> {title.split(',')[1]}</span></h2>
          </div>
        </Reveal>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {items.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-2xl bg-card/40 px-6 backdrop-blur">
                <AccordionTrigger className="text-left font-display text-lg md:text-xl hover:no-underline hover:text-primary py-5">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
