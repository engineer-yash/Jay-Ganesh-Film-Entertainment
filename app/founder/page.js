import Image from 'next/image';
import Link from 'next/link';
import { founder } from '@/data/founder';
import { awards } from '@/data/awards';
import { Instagram, Trophy, Sparkles, ArrowRight } from 'lucide-react';
import Reels from '@/components/site/Reels';
import MarqueeBand from '@/components/site/MarqueeBand';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import { Reveal, Stagger, StaggerItem, FloatingRing } from '@/components/site/Motion';

export const metadata = {
  title: 'Mukesh (Rudra) Chaudhari — Founder, Choreographer & Boogie Woogie Winner',
  description:
    'The 23-year journey of Mukesh (Rudra) Chaudhari — Boogie Woogie winner, national-level choreographer, mentor, film producer and founder of Jay Ganesh Films Entertainment.',
  keywords: ['Mukesh Chaudhari', 'Mukesh Rudra Chaudhari', 'Boogie Woogie winner', 'choreographer Pune', 'dance mentor Pune'],
  alternates: { canonical: '/founder' },
};

export default function FounderPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Founder' }]} />
      </div>

      <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">The Founder</div></Reveal>
            <Reveal delay={0.1}><h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.02]">Mukesh <span className="text-gradient-gold">Rudra</span> Chaudhari</h1></Reveal>
            <Reveal delay={0.2}><p className="mt-3 text-lg text-muted-foreground">{founder.title}</p></Reveal>
            <Reveal delay={0.3}><p className="mt-6 text-muted-foreground text-lg leading-relaxed">{founder.intro}</p></Reveal>
            <Reveal delay={0.4}><div className="mt-8 flex flex-wrap gap-3">
              <a href={founder.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"><Instagram className="h-4 w-4" /> Follow on Instagram</a>
              <Link href="/branches" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition">Explore his studios <ArrowRight className="h-4 w-4" /></Link>
            </div></Reveal>
            <Stagger className="mt-10 grid grid-cols-4 gap-6">
              {founder.stats.map((s) => (
                <StaggerItem key={s.label}>
                  <div className="font-display text-3xl md:text-4xl text-gradient-gold">{s.number}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground leading-tight">{s.label}</div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal className="lg:col-span-6 order-1 lg:order-2" y={60}>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border">
              <FloatingRing className="absolute -top-10 -right-10 opacity-30 z-10" size={200} />
              <Image src={founder.image} alt={founder.name} fill priority className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Since 2003</div>
                <div className="font-display text-3xl mt-1">A movement, not a moment.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mt-16"><MarqueeBand /></div>

      {/* AWARDS SHOWCASE */}
      <section className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">Awards Showcase</div></Reveal>
        <Reveal delay={0.1}><h2 className="font-display text-4xl md:text-6xl mt-3">Trophies, titles & <span className="text-gradient-gold">stage moments</span>.</h2></Reveal>
        <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((a) => (
            <StaggerItem key={a.title} y={50}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border hover-lift">
                <img src={a.image} alt={a.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-widest font-semibold"><Trophy className="h-3 w-3" /> {a.year}</div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-display text-2xl md:text-3xl">{a.title}</div>
                  <div className="mt-2 text-sm text-white/70">{a.desc}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* TIMELINE */}
      <section className="mt-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">Timeline</div></Reveal>
        <Reveal delay={0.1}><h2 className="font-display text-4xl md:text-5xl mt-3">The <span className="text-gradient-gold">journey</span>.</h2></Reveal>
        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <Stagger className="space-y-10" delay={0.15}>
            {founder.timeline.map((t, i) => (
              <StaggerItem key={t.year} className="relative grid md:grid-cols-2 gap-6 items-center" y={40}>
                <div className={`pl-12 md:pl-0 ${i%2===0 ? 'md:text-right md:pr-16' : 'md:pl-16 md:col-start-2'}`}>
                  <div className="font-display text-3xl text-gradient-gold">{t.year}</div>
                  <div className="mt-1 font-semibold text-lg">{t.title}</div>
                  <div className="mt-1 text-muted-foreground text-sm max-w-md md:ml-auto">{t.text}</div>
                </div>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-primary/20" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent p-10 md:p-14 text-center relative overflow-hidden">
            <FloatingRing className="absolute -top-20 -right-20 opacity-30" size={260} />
            <Sparkles className="h-6 w-6 text-primary mx-auto" />
            <h3 className="font-display text-3xl md:text-5xl mt-4">Work with Rudra. <span className="text-gradient-gold">Own your stage.</span></h3>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">From choreography for weddings and films to intensive workshops — collaborate with a national-award-winning artist.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">Get in touch <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
