import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { branches, getBranch } from '@/data/branches';
import {
  MapPin, Phone, Instagram, ArrowLeft, Clock, IndianRupee, Sparkles,
} from 'lucide-react';

// Pre-generate static pages for all branches
export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

// Dynamic SEO metadata per branch
export function generateMetadata({ params }) {
  const b = getBranch(params.slug);
  if (!b) return { title: 'Branch not found' };
  return {
    title: `${b.name} — ${b.tag} | Jay Ganesh Films`,
    description: b.tagline,
  };
}

export default function BranchDetailPage({ params }) {
  const b = getBranch(params.slug);
  if (!b) notFound();

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/branches"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
        >
          <ArrowLeft className="h-4 w-4" /> All studios
        </Link>

        {/* Hero */}
        <div className="mt-6 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
            <Image src={b.poster || b.image} alt={b.name} fill className="object-cover" />
            <div className={`absolute inset-0 bg-gradient-to-br ${b.accent} opacity-30`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10">
              {b.tag}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary">{b.tag}</div>
            <h1 className="font-display text-5xl md:text-6xl mt-3 leading-[1.05]">
              {b.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground italic">{b.tagline}</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{b.address}</span>
              </div>
              {b.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" /> +91 {b.phone}
                </div>
              )}
              {b.owner && (
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" /> Owner: {b.owner}
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {b.highlights?.map((h) => (
                <span
                  key={h}
                  className="text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-border bg-background/60"
                >
                  {h}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={b.maps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
              <a
                href={b.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:border-primary hover:text-primary transition text-sm"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Classes */}
        {b.classes?.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl">Classes offered</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {b.classes.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full border border-border bg-card/40 text-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Weekday schedule */}
        {b.weekday?.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" /> Weekday schedule
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {b.weekday.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-border bg-card/40 flex justify-between gap-4"
                >
                  <span className="text-sm text-primary font-medium">{s.time}</span>
                  <span className="text-sm text-right">{s.class}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Weekend schedule */}
        {b.weekend?.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-3xl flex items-center gap-2">
              <Clock className="h-6 w-6 text-primary" /> Weekend schedule
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {b.weekend.map((s, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl border border-border bg-card/40 flex justify-between gap-4"
                >
                  <span className="text-sm text-primary font-medium">{s.time}</span>
                  <span className="text-sm text-right">{s.class}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fees */}
        {b.fees?.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl flex items-center gap-2">
              <IndianRupee className="h-6 w-6 text-primary" /> Fees
            </h2>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {b.fees.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card/40">
                  <div className="text-sm text-muted-foreground">{f.plan}</div>
                  <div className="mt-2 font-display text-2xl text-gradient-gold">
                    {f.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Workshops */}
        {b.workshops?.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl">Workshops</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              {b.workshops.map((w, i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card/40">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary">
                    {w.date}
                  </div>
                  <div className="mt-2 font-display text-xl">{w.title}</div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Mentor: {w.mentor}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Map embed */}
        {b.mapsEmbed && (
          <div className="mt-16">
            <h2 className="font-display text-3xl">Find us</h2>
            <div className="mt-6 aspect-[16/9] rounded-3xl overflow-hidden border border-border">
              <iframe
                src={b.mapsEmbed}
                title={`${b.name} map`}
                loading="lazy"
                className="w-full h-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}