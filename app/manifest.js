export default function manifest() {
  return {
    name: 'Jay Ganesh Films Entertainment',
    short_name: 'Jay Ganesh Films',
    description: 'Premium dance studios, events & films — Pune since 2003.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      { src: '/secondary.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
      { src: '/secondary.png', sizes: '192x192', type: 'image/png' },
    ],
  };
}