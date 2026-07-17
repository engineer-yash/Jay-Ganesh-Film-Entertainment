import Image from 'next/image';
import Link from 'next/link';
import { branches } from '@/data/branches';
import { ArrowRight, MapPin, Phone, Instagram } from 'lucide-react';
import Breadcrumbs from '@/components/site/Breadcrumbs';

export const metadata = {
  title: 'Our Studios — 4 Dance Branches Across Pune',
  description:
    'Explore our dance studios in Pune — Hinjewadi Phase 1, Punawale (Latitude Mall), Grand Highstreet (Shubh Dance Company) and Tathawade. Bollywood, Hip-Hop, Kathak, Zumba, Kids Dance and more.',
  keywords: ['dance studio Pune', 'dance classes Hinjewadi', 'dance classes Punawale', 'dance classes Tathawade', 'Shubh Dance Company'],
  alternates: { canonical: '/branches' },
  openGraph: {
    title: 'Our Dance Studios in Pune',
    description: 'Four premium dance studios. One philosophy.',
    url: '/branches',
    images: ['/images/my-style-studio.jpg'],
  },
};

export default function BranchesPage() {
  return (
    <div className="pt-28 pb-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <Breadcrumbs items={[{ label: 'Branches' }]} />
  </div>
  <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">Our Studios</div>
          <h1 className="font-display text-5xl md:text-7xl mt-4 leading-[1.02]">Find your <span className="text-gradient-gold">stage</span> in Pune.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Four locations, one philosophy — world-class training, community-first culture and stages that make you feel unstoppable.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {branches.map((b, i) => (
            <div key={b.slug} className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 hover-lift">
              <Link href={`/branches/${b.slug}`} >
              <div className="relative aspect-[16/10]">
                <Image src={b.image} alt={b.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-br ${b.accent} opacity-25 group-hover:opacity-45 transition`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-black/50 backdrop-blur border border-white/10">Branch 0{i+1}</div>
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{b.tag}</div>
                  <div className="font-display text-3xl mt-1">{b.name}</div>
                </div>
              </div>
              </Link>
              <div className="p-6">
                <div className="text-sm text-muted-foreground italic">{b.tagline}</div>
                <div className="mt-4 flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                  <span>{b.address}</span>
                </div>
                {b.phone && (
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary" /> +91 {b.phone}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.highlights.map((h) => (
                    <span key={h} className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-border bg-background/60">{h}</span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <Link href={`/branches/${b.slug}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition">
                    Explore studio <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={b.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition text-sm">
                    <MapPin className="h-4 w-4" /> Directions
                  </a>
                  <a href={b.instagram} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full border border-border hover:border-primary hover:text-primary transition inline-flex items-center justify-center" aria-label="Instagram">
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
