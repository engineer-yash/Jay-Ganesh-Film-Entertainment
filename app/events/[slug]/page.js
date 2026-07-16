import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { events, getEvent } from '@/data/events';
import { ArrowRight, Instagram, Sparkles, Calendar } from 'lucide-react';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import FAQ from '@/components/site/FAQ';
import { Reveal, Stagger, StaggerItem, FloatingRing } from '@/components/site/Motion';

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return {};
  return { title: e.name, description: `${e.tagline} ${e.about.slice(0,140)}` };
}

export default async function EventDetail({ params }) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) notFound();

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><Breadcrumbs items={[{ label: 'Events', href: '/events' }, { label: e.name }]} /></div>

      <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">{e.since}</div></Reveal>
          <Reveal delay={0.1}><h1 className="font-display text-5xl md:text-7xl mt-3 leading-[1.02]">{e.name}</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-3 text-lg text-muted-foreground italic">{e.tagline}</p></Reveal>
          <Reveal delay={0.3}><p className="mt-6 text-muted-foreground text-lg leading-relaxed">{e.about}</p></Reveal>
          <Stagger className="mt-8 grid grid-cols-2 gap-3">
            {e.highlights.map((h) => (
              <StaggerItem key={h} className="flex items-center gap-2 text-sm"><Sparkles className="h-4 w-4 text-primary" /> {h}</StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.4}><div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">Register / Enquire <ArrowRight className="h-4 w-4" /></Link>
            <a href={e.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition"><Instagram className="h-4 w-4" /> Follow event</a>
          </div></Reveal>
        </div>
        <Reveal className="lg:col-span-6" y={60}>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-border">
            <FloatingRing className="absolute -top-10 -left-10 opacity-30 z-10" size={220} />
            <Image src={e.image} alt={e.name} fill priority className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-br ${e.accent} opacity-25`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary">Previous Editions</div></Reveal>
        <Reveal delay={0.1}><h2 className="font-display text-4xl md:text-5xl mt-3">Moments from <span className="text-gradient-gold">the stage</span>.</h2></Reveal>
        <Stagger className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {e.gallery.map((g, i) => (
            <StaggerItem key={i} y={40}>
              <div className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-border group">
                <img src={g} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Upcoming placeholder */}
      <section className="mt-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-fuchsia-500/5 p-10 md:p-14 text-center relative overflow-hidden">
            <FloatingRing className="absolute -top-20 -right-20 opacity-30" size={260} />
            <Calendar className="h-6 w-6 text-primary mx-auto" />
            <h3 className="font-display text-3xl md:text-5xl mt-4">Next edition <span className="text-gradient-gold">coming soon</span>.</h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Follow us on Instagram or drop your details — you’ll be the first to know.</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold">Get notified <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </section>

      <FAQ items={e.faqs} title="Event questions, answered." />
    </div>
  );
}
