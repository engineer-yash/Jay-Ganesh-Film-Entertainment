'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram } from 'lucide-react';
import { site } from '@/data/site';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={cn(
      'fixed top-0 inset-x-0 z-50 transition-all duration-500',
      scrolled ? 'backdrop-blur-xl bg-background/70 border-b border-border/60' : 'bg-transparent'
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
  <div className="relative h-12 w-12 md:h-16 md:w-16 shrink-0 rounded-full overflow-hidden ring-2 ring-primary/40 group-hover:ring-primary transition">
    <Image src={site.logo} alt="Jay Ganesh Films logo" fill className="object-cover" />
  </div>
  <div className="leading-tight min-w-0">
    <div className="font-display text-base sm:text-xl md:text-2xl tracking-wide text-gradient-gold truncate">
      Jay Ganesh Films
    </div>
    <div className="text-[10px] sm:text-[12px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-muted-foreground truncate">
      Entertainment Pvt. Ltd.
    </div>
  </div>
</Link>

        <nav className="hidden lg:flex items-center gap-1">
          {site.nav.map((n) => {
            const active = pathname === n.href || (n.href !== '/' && pathname.startsWith(n.href));
            return (
              <Link key={n.href} href={n.href} className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors',
                active ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
              )}>
                {n.label}
                {active && <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition">
            <Instagram className="h-4 w-4" />
          </a>
          <Link href="/contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition">
            Join a Class
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {site.nav.map((n) => (
              <Link key={n.href} href={n.href} className="px-3 py-3 rounded-lg text-base font-medium hover:bg-muted transition">
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-2 text-center px-4 py-3 rounded-full bg-primary text-primary-foreground font-semibold">Join a Class</Link>
          </div>
        </div>
      )}
    </header>
  );
}
