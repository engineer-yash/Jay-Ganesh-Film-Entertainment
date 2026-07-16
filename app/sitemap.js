import { branches } from '@/data/branches';
import { events } from '@/data/events';

const base = 'https://jayganeshfilms.com';
const now = new Date();

export default function sitemap() {
  const routes = [
    { path: '', priority: 1.0,  changeFrequency: 'weekly' },
    { path: '/branches', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/events', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/founder', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/gallery', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms-and-conditions', priority: 0.3, changeFrequency: 'yearly' },
    ...branches.map((b) => ({ path: `/branches/${b.slug}`, priority: 0.85, changeFrequency: 'weekly' })),
    ...events.map((e) => ({ path: `/events/${e.slug}`, priority: 0.8, changeFrequency: 'weekly' })),
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}