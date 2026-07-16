'use client';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-muted-foreground">
      <Link href="/" className="inline-flex items-center gap-1 hover:text-primary transition"><Home className="h-3 w-3" /> Home</Link>
      {items.map((it, i) => (
        <span key={i} className="inline-flex items-center gap-2">
          <ChevronRight className="h-3 w-3" />
          {it.href ? <Link href={it.href} className="hover:text-primary transition">{it.label}</Link> : <span className="text-foreground">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}
