import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Youtube, Facebook, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { branches } from '@/data/branches';
import { events } from '@/data/events';

function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.747.457 3.398 1.318 4.876L2 22l5.35-1.4a9.87 9.87 0 0 0 4.687 1.184h.004c5.462 0 9.912-4.45 9.914-9.914 0-2.648-1.03-5.14-2.9-7.01A9.822 9.822 0 0 0 12.04 2zm0 18.13h-.003a8.23 8.23 0 0 1-4.195-1.15l-.3-.178-3.174.832.847-3.093-.196-.317a8.22 8.22 0 0 1-1.26-4.365c0-4.541 3.696-8.237 8.24-8.237a8.19 8.19 0 0 1 5.83 2.416 8.19 8.19 0 0 1 2.412 5.83c-.002 4.542-3.698 8.238-8.202 8.238z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-border/60 bg-gradient-to-b from-background to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-12 lg:grid-cols-12">
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
          <div className="mt-6 flex items-center gap-2">
  <a href={site.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
     className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition">
    <Instagram className="h-4 w-4" />
  </a>
  <a href={site.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"
     className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition">
    <Youtube className="h-4 w-4" />
  </a>
  <a href={site.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
     className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition">
    <Facebook className="h-4 w-4" />
  </a>
  <a href={site.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"
     className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition">
    <WhatsAppIcon className="h-4 w-4" />
  </a>
</div>
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
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> mukeshchaudhari106@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div className="text-center sm:text-left">© {new Date().getFullYear()} {site.legal}. All rights reserved.</div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-right">
            <Link href="/privacy-policy" className="hover:text-primary">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-primary">Terms</Link>
            <span className="block">Designed & Developed by <a href={site.credit.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">{site.credit.name}</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
