import { branches } from '@/data/branches';
import { events } from '@/data/events';

const base = 'https://jayganeshfilms.com';

export default function sitemap() {
  const staticRoutes = ['', '/about', '/branches', '/founder', '/events', '/gallery', '/contact', '/privacy-policy', '/terms-and-conditions'];
  const branchRoutes = branches.map((b) => `/branches/${b.slug}`);
  const eventRoutes = events.map((e) => `/events/${e.slug}`);
  const all = [...staticRoutes, ...branchRoutes, ...eventRoutes];
  return all.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
