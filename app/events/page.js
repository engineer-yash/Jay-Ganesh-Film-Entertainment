import Image from 'next/image';
import Link from 'next/link';
import { events } from '@/data/events';
import { ArrowRight, Instagram, Sparkles } from 'lucide-react';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import MarqueeBand from '@/components/site/MarqueeBand';
import { Reveal, Stagger, StaggerItem } from '@/components/site/Motion';

export const metadata = {
  title: 'Tandav Dance Competition, Shubh Garba & Glamour Gateway | Signature Events',
  description:
    'Unforgettable stages by Jay Ganesh Films Entertainment — Tandav Dance Competition, Shubh Garba Raas Dandiya (Pune Navratri) and Glamour Gateway fashion showcase.',
  keywords: ['Tandav Dance Competition', 'Shubh Garba Pune', 'Raas Dandiya Pune', 'Glamour Gateway', 'Navratri Pune 2026', 'dance competition Pune'],
  alternates: { canonical: '/events' },
};

export default function EventsPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Breadcrumbs items={[{ label: 'Events' }]} /></div>

      <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">Signature Events</div></Reveal>
          <Reveal delay={0.1}><h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.02]">Five stages. <span className="text-gradient-gold">Unforgettable nights.</span></h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-lg text-muted-foreground">From dance battles to Navratri nights to fashion runways — our events bring together India’s finest performers, designers and dreamers.</p></Reveal>
        </div>

        <Stagger className="mt-10 grid md:grid-cols-4 gap-6">
          {events.map((e) => (
            <StaggerItem key={e.slug} y={60}>
              <Link href={`/events/${e.slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-3xl ring-1 ring-border hover-lift block">
                <Image src={e.image} alt={e.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 bg-gradient-to-br ${e.accent} opacity-30 group-hover:opacity-50 transition`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10">{e.since}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display text-2xl md:text-3xl">{e.name}</div>
                  <div className="mt-1 text-sm text-white/70">{e.tagline}</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary">Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" /></div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <div className="mt-16"><MarqueeBand /></div>
    </div>
  );
}
