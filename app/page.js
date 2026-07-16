import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Trophy, Users, Film, Star, Instagram, MapPin } from 'lucide-react';
import { branches } from '@/data/branches';
import { events } from '@/data/events';
import { founder } from '@/data/founder';
import { faqs } from '@/data/faqs';
import Reels from '@/components/site/Reels';
import Testimonials from '@/components/site/Testimonials';
import FAQ from '@/components/site/FAQ';
import MarqueeBand from '@/components/site/MarqueeBand';
import { Reveal, Stagger, StaggerItem, FloatingRing, FloatingBadge } from '@/components/site/Motion';
import HeroClient from '@/components/site/HeroClient';

export const metadata = {
  title: 'Dance Studios in Pune | Bollywood, Hip-Hop, Kathak Classes — Jay Ganesh Films',
  description:
    'Top-rated dance academy in Pune with 4 branches — Hinjewadi, Punawale, Grand Highstreet & Tathawade. Bollywood, Hip-Hop, Zumba, Kathak, Kids Dance. Founded by Boogie Woogie winner Mukesh Chaudhari.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <HeroClient />
      <MarqueeBand />

      {/* FOUNDER PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">The Founder</div></Reveal>
            <Reveal delay={0.1}><h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">Mukesh <span className="text-gradient-gold">(Rudra)</span> Chaudhari</h2></Reveal>
            <Reveal delay={0.2}><p className="mt-6 text-muted-foreground text-lg leading-relaxed">{founder.intro}</p></Reveal>
            <Stagger className="mt-8 grid sm:grid-cols-2 gap-3">
              {founder.knownFor.slice(0,4).map((k)=>(
                <StaggerItem key={k} className="flex items-start gap-2 text-sm"><Star className="h-4 w-4 mt-0.5 text-primary" /> {k}</StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.4}><Link href="/founder" className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">Explore his journey <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
          <Reveal className="lg:col-span-6" y={60}>
            <div className="relative aspect-square rounded-3xl overflow-hidden ring-1 ring-border">
              <Image src="/images/founder.jpg" alt="Mukesh Rudra Chaudhari" fill className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">Founder</div>
                  <div className="font-display text-2xl">23+ Years of Craft</div>
                </div>
                <a href={founder.instagram} target="_blank" rel="noreferrer" className="h-11 w-11 rounded-full flex items-center justify-center bg-primary text-primary-foreground">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      {/* <section className="py-24 md:py-32 relative">
        <FloatingRing className="absolute top-10 right-10 opacity-30 hidden lg:block" size={280} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-5 order-2 lg:order-1" y={60}>
            <FloatingBadge className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border">
                <Image src="/images/founder.jpg" alt="Founder" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>
            </FloatingBadge>
          </Reveal>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">About the Company</div></Reveal>
            <Reveal delay={0.1}><h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">A legacy built on <span className="text-gradient-gold">rhythm</span>, <span className="text-gradient-gold">discipline</span> and cinematic ambition.</h2></Reveal>
            <Reveal delay={0.2}><p className="mt-6 text-muted-foreground text-lg leading-relaxed">What began as one dancer chasing a national stage in 1999 has grown into a movement — four studios across Pune, three signature events and a production banner that brings Indian culture to the big screen.</p></Reveal>
            <Stagger className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                {icon: Users, title:'Community First', text:'From absolute beginners to award-winning pros.'},
                {icon: Trophy, title:'Award-Winning', text:'National titles, mentors & choreographers.'},
                {icon: Film, title:'Full-Spectrum', text:'Dance · Events · Films · Fashion.'},
              ].map((v)=>(
                <StaggerItem key={v.title} className="p-5 rounded-2xl border border-border bg-card/50 hover-lift">
                  <v.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 font-semibold">{v.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{v.text}</div>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.3}><Link href="/about" className="mt-8 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">Read the full story <ArrowRight className="h-4 w-4" /></Link></Reveal>
          </div>
        </div>
      </section> */}

      {/* BRANCHES */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-black/40 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Our Studios</div>
              <h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">A home for every dancer. <span className="text-gradient-gold">One movement.</span></h2>
            </div>
            <Link href="/branches" className="inline-flex items-center gap-2 text-sm hover:text-primary transition">See all branches <ArrowRight className="h-4 w-4" /></Link>
          </div></Reveal>
          <Stagger className="grid md:grid-cols-2 gap-6">
            {branches.map((b, i) => (
              <StaggerItem key={b.slug} y={50}>
                <Link href={`/branches/${b.slug}`} className="group relative overflow-hidden rounded-3xl ring-1 ring-border aspect-[16/11] hover-lift block">
                  <Image src={b.image} alt={b.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${b.accent} opacity-30 group-hover:opacity-50 transition`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10">0{i+1}</div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[11px] uppercase tracking-[0.3em] text-primary">{b.tag}</div>
                    <div className="font-display text-3xl md:text-4xl mt-2">{b.name}</div>
                    <div className="mt-1 text-sm text-white/70">{b.tagline}</div>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-primary">Visit studio <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition" /></div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Reels />
      <MarqueeBand reverse />

      {/* EVENTS */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-transparent via-black/40 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary">Signature Events</div>
              <h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">Three stages. <span className="text-gradient-gold">Unforgettable nights.</span></h2>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 text-sm hover:text-primary transition">All events <ArrowRight className="h-4 w-4" /></Link>
          </div></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {events.map((e) => (
              <StaggerItem key={e.slug} y={60}>
                <Link href={`/events/${e.slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-3xl ring-1 ring-border hover-lift block">
                  <Image src={e.image} alt={e.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${e.accent} opacity-30 group-hover:opacity-50 transition`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-display text-2xl md:text-3xl">{e.name}</div>
                    <div className="mt-1 text-sm text-white/70">{e.tagline}</div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Testimonials />
      <FAQ items={faqs.slice(0,6)} title="Questions, answered." />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 border border-primary/30 bg-gradient-to-br from-primary/10 via-fuchsia-500/5 to-transparent text-center">
              <FloatingRing className="absolute -top-24 -left-24 opacity-30" size={280} />
              <FloatingRing className="absolute -bottom-24 -right-24 opacity-30" size={320} reverse />
              <div className="text-xs uppercase tracking-[0.3em] text-primary relative">Your journey begins here</div>
              <h3 className="font-display text-4xl md:text-6xl mt-4 leading-tight relative">Step onto the floor. <br /><span className="text-gradient-gold">Own your stage.</span></h3>
              <p className="mt-6 text-muted-foreground max-w-2xl mx-auto relative">Book a trial class, register for the next workshop, or reserve our halls for your production.</p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center relative">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">Book a trial <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/branches" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition"><MapPin className="h-4 w-4" /> Find a studio</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
