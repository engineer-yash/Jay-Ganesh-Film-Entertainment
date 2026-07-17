import Link from 'next/link';
import Image from 'next/image';
import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { branches } from '@/data/branches';
import { events } from '@/data/events';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-border/60 bg-gradient-to-b from-background to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-primary/40">
              <Image src={site.logo} alt="logo" fill className="object-cover" />
            </div>
            <div>
              <div className="font-display text-2xl text-gradient-gold">Jay Ganesh Films</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Entertainment Pvt. Ltd.</div>
            </div>
          </Link>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
            A family of premium dance studios, cinematic events and cultural productions. Founded and led by Mukesh (Rudra) Chaudhari.
          </p>
          <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm hover:text-primary transition">
            <Instagram className="h-4 w-4" /> @jayganeshfilmentpvtltd
          </a>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {site.nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-primary transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-lg mb-4">Studios</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {branches.map((b) => (
              <li key={b.slug}>
                <Link href={`/branches/${b.slug}`} className="hover:text-primary transition inline-flex items-center gap-1">
                  {b.name} — {b.tag} <ArrowUpRight className="h-3 w-3" />
                </Link>
              </li>
            ))}
          </ul>
          <h4 className="font-display text-lg mt-6 mb-3">Events</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {events.map((e) => (
              <li key={e.slug}><Link href={`/events/${e.slug}`} className="hover:text-primary transition">{e.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> Akshay Plaza, Hinjewadi Phase 1, Pune 411057</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 99239 51535</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +91 81496 63995</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@jayganeshfilms.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {site.legal}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary">Terms</Link>
            <span>Designed & Developed by <a href={site.credit.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">{site.credit.name}</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
