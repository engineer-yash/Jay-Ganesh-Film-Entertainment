import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { events, getEvent } from '@/data/events';
import {
  ArrowRight,
  Instagram,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Handshake,
  Check,
  Crown,
} from 'lucide-react';
import Breadcrumbs from '@/components/site/Breadcrumbs';
import FAQ from '@/components/site/FAQ';
import { Reveal, Stagger, StaggerItem, FloatingRing } from '@/components/site/Motion';
import InstagramReelsWidget from '@/components/site/InstagramReelsWidget';

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return {};
  return { title: e.name, description: `${e.tagline} ${e.about.slice(0, 140)}` };
}

export default async function EventDetail({ params }) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) notFound();

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Events', href: '/events' }, { label: e.name }]} />
      </div>

      {/* HERO */}
      <section className="mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6">
          <Reveal>
  <div className="flex items-center gap-3 flex-wrap">
    <div className="text-xs uppercase tracking-[0.3em] text-primary">{e.since}</div>
    {e.pastEdition && (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" /> Concluded
      </span>
    )}
  </div>
</Reveal>
          <Reveal delay={0.1}><h1 className="font-display text-5xl md:text-7xl mt-3 leading-[1.02]">{e.name}</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-3 text-lg text-muted-foreground italic">{e.tagline}</p></Reveal>
          <Reveal delay={0.3}><p className="mt-6 text-muted-foreground text-lg leading-relaxed">{e.about}</p></Reveal>

          {/* Event key details (only if provided) */}
          {(e.date || e.time || e.venue) && (
            <Reveal delay={0.35}>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {e.date && (
                  <div className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/40">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Date</div>
                      <div className="font-semibold">{e.date}</div>
                    </div>
                  </div>
                )}
                {e.time && (
                  <div className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/40">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Time</div>
                      <div className="font-semibold">{e.time}</div>
                    </div>
                  </div>
                )}
                {e.venue && (
                  <div className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card/40 sm:col-span-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Venue</div>
                      <div className="font-semibold">{e.venue}</div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          )}

          <Stagger className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {e.highlights.map((h) => (
              <StaggerItem key={h} className="flex items-center gap-2 text-sm">
                <Sparkles className="h-4 w-4 text-primary" /> {h}
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.4}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
                Register / Enquire <ArrowRight className="h-4 w-4" />
              </Link>
              {e.sponsorship && (
                <a href="#sponsorship" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition font-semibold">
                  <Handshake className="h-4 w-4" /> Become a Sponsor
                </a>
              )}
              <a href={e.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition">
                <Instagram className="h-4 w-4" /> Follow event
              </a>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — full/natural height poster */}
        <Reveal className="lg:col-span-6" y={60}>
          <div className="relative rounded-3xl overflow-hidden ring-1 ring-border">
            <FloatingRing className="absolute -top-10 -left-10 opacity-30 z-10" size={220} />
            <Image
              src={e.image}
              alt={e.name}
              width={1200}
              height={1800}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-contain"
            />
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${e.accent} opacity-15`} />
          </div>
        </Reveal>
      </section>

      {/* 2x2 GALLERY */}
      {e.gallery && e.gallery.length > 0 && (
        <section className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary">Event Gallery</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              A glimpse of <span className="text-gradient-gold">the celebration</span>.
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {e.gallery.slice(0, 4).map((src, i) => (
              <StaggerItem key={src + i} className="relative rounded-3xl overflow-hidden ring-1 ring-border bg-card/40">
                <Image
                  src={src}
                  alt={`${e.name} — ${i + 1}`}
                  width={1200}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* SPONSORSHIP */}
      {e.sponsorship && (
        <section id="sponsorship" className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
              <Handshake className="h-3.5 w-3.5" /> Sponsorship
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl mt-3 leading-tight">
              {e.sponsorship.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 text-muted-foreground max-w-2xl">{e.sponsorship.subline}</p>
          </Reveal>

          {/* Why Sponsor */}
          {e.sponsorship.whySponsor && (
            <Stagger className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {e.sponsorship.whySponsor.map((w) => (
                <StaggerItem key={w} className="p-5 rounded-2xl border border-border bg-card/40">
                  <Check className="h-5 w-5 text-primary" />
                  <div className="mt-2 text-sm font-medium">{w}</div>
                </StaggerItem>
              ))}
            </Stagger>
          )}

          {/* Packages */}
          <Stagger className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {e.sponsorship.packages.map((p, idx) => (
              <StaggerItem
                key={p.tier}
                className={`relative rounded-3xl border border-primary/30 bg-gradient-to-br ${p.accent} p-6 flex flex-col`}
              >
                {idx === 0 && (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.25em] font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full">
                    <Crown className="h-3 w-3" /> Most Premium
                  </div>
                )}
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.tier}</div>
                <div className="font-display text-4xl mt-2 text-gradient-gold">{p.price}</div>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {perk}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition text-sm"
                >
                  Choose {p.tier} <ArrowRight className="h-4 w-4" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Contact */}
          <Reveal delay={0.2}>
            <div className="mt-12 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-fuchsia-500/5 p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.3em] text-primary">For Sponsorship & Enquiries</div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                {e.contact && (
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Call</div>
                      {e.contact.map((c) => (
                        <div key={c} className="font-semibold">{c}</div>
                      ))}
                    </div>
                  </div>
                )}
                {e.email && (
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</div>
                      <a href={`mailto:${e.email}`} className="font-semibold hover:text-primary transition">{e.email}</a>
                    </div>
                  </div>
                )}
                {e.venue && (
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Venue</div>
                      <div className="font-semibold">{e.venue}</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
                  Start Sponsorship <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Moments from the stage — Instagram reels */}
      {e.sociablekitId && (
        <section className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
              <Instagram className="h-3.5 w-3.5" /> Previous Editions
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Moments from <span className="text-gradient-gold">the stage</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Live reels from {e.name} — see the energy, the crowd and the performances as they happened.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8">
              <InstagramReelsWidget embedId={e.sociablekitId} />
            </div>
          </Reveal>
        </section>
      )}

      {/* Upcoming placeholder — hide when this event itself is the upcoming one */}
      {!e.isUpcoming && (
  <section className="mt-24 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <Reveal>
      <div className="rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 to-fuchsia-500/5 p-10 md:p-14 text-center relative overflow-hidden">
        <FloatingRing className="absolute -top-20 -right-20 opacity-30" size={260} />
        <Calendar className="h-6 w-6 text-primary mx-auto" />
        <h3 className="font-display text-3xl md:text-5xl mt-4">
          {e.pastEdition ? (
            <>This edition is a wrap. <span className="text-gradient-gold">Next one loading.</span></>
          ) : (
            <>Next edition <span className="text-gradient-gold">coming soon</span>.</>
          )}
        </h3>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          {e.nextEditionNote || 'Follow us on Instagram or drop your details — you’ll be the first to know.'}
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
            Get notified <ArrowRight className="h-4 w-4" />
          </Link>
          <a href={e.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary hover:text-primary transition">
            <Instagram className="h-4 w-4" /> Follow event
          </a>
        </div>
      </div>
    </Reveal>
  </section>
)}

      <FAQ items={e.faqs} title="Event questions, answered." />
    </div>
  );
}