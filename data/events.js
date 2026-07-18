export const events = [
  {
    slug: 'tandav',
    name: 'Tandav Dance Competition',
    tagline: 'The battleground of India’s finest movers.',
    since: 'Since 2006',
    instagram: 'https://www.instagram.com/tandav2006/',
    image: '/images/tandav/tandav.jpg',
    accent: 'from-red-500 via-rose-600 to-purple-700',
    about:
      'Tandav is our flagship dance competition — a high-voltage battleground where solo warriors and elite crews collide. Since 2006, Tandav has crowned some of Pune’s most exciting dance talent and remains a rite of passage in the local circuit.',
    highlights: ['Solo & Group Categories', 'Cash Prizes', 'Celebrity Judges', 'Live Audience'],
    faqs: [
      { q: 'Who can register?', a: 'Anyone 8+ years old — solo dancers, duos and crews (up to 15).' },
      { q: 'What is the registration process?', a: 'Register via our Instagram DM or the contact form. Auditions are held before the main event.' },
      { q: 'Are there cash prizes?', a: 'Yes — winners across categories receive cash prizes, trophies and choreography opportunities.' },
    ],
    sociablekitId: '25697960',
  },
  {
    slug: 'shubh-garba',
    name: 'Shubh Garba Raas Dandiya 2026',
    tagline: 'Celebrate Tradition. Create Memories. A festival of Culture, Music & Dance.',
    since: 'Annual Navratri Event',
    instagram: 'https://www.instagram.com/shubhgarbaraas2025/',
    image: '/images/shubh-garba/poster-1.jpg',
    accent: 'from-amber-400 via-orange-500 to-rose-600',
    about:
      'Shubh Garba Raas Dandiya 2026 is Pune’s biggest and most vibrant Navratri celebration — bringing together tradition, devotion, music and dance under one roof. 6 nights of non-stop Garba & Dandiya, celebrity performances, huge LED screens, food court, shopping stalls and a family-friendly community atmosphere.',
    highlights: [
      '6 Nights of Non-stop Garba & Dandiya',
      'Live DJ, Singers & Celebrity Performances',
      'Huge LED Screens & Grand Production',
      'Food Court, Shopping Stalls & Fun Activities',
      'Exciting Prizes & Giveaways',
      'Safe & Secure Environment',
      'Ample Parking & Premium Venue',
    ],
    // NEW — upcoming event details (extracted from the poster)
    isUpcoming: true,
    date: '15th – 20th October 2026',
    dateShort: '15 – 20 OCT 2026',
    time: '7:00 PM Onwards',
    venue: 'Vittal Lawns, Laxmi Chowk, Hinjewadi, Pune – 57',
    contact: ['+91 99239 51535', '+91 81496 63995'],
    email: 'jayganeshfilmsent@gmail.com',
    // NEW — 2x2 gallery on the event page
    gallery: [
      '/images/shubh-garba/poster-1.jpg',
      '/images/shubh-garba/poster-2.jpg',
      '/images/shubh-garba/poster-3.jpg',
      '/images/shubh-garba/shubh-garba.jpg',
    ],
    // NEW — stats
    stats: [
      { label: 'Expected Footfall', value: '15,000+' },
      { label: 'Social Media Reach', value: '2,00,000+' },
      { label: 'WhatsApp Broadcast', value: '25,000+' },
      { label: 'Nights of Celebration', value: '6' },
    ],
    // NEW — sponsorship info
    sponsorship: {
      headline: 'Be a part of Pune’s biggest Garba celebration!',
      subline: 'Sponsorship Packages — pick a tier that fits your brand.',
      whySponsor: [
        'Massive Brand Visibility',
        'Connect with a Large & Engaged Audience',
        'Strengthen Brand Image',
        'Direct Customer Engagement',
        'High Impact at a Cost-Effective Value',
      ],
      packages: [
        {
          tier: 'Title Sponsor',
          price: '₹5,00,000',
          accent: 'from-amber-500/40 to-yellow-600/20',
          perks: [
            'Event Naming Rights',
            'Stage & Main Gate Branding',
            'Logo on Posters, Banners & Tickets',
            'LED Screen Branding',
            'Social Media Promotion',
            'VIP Passes (20)',
            'Stall Space (Prime Location)',
          ],
        },
        {
          tier: 'Powered By Sponsor',
          price: '₹2,50,000',
          accent: 'from-fuchsia-500/30 to-purple-600/10',
          perks: [
            'Premium Logo Placement',
            'Stage Side Branding',
            'Social Media Mentions',
            'Stall Space',
            'VIP Passes (15)',
          ],
        },
        {
          tier: 'Gold Sponsor',
          price: '₹1,00,000',
          accent: 'from-yellow-500/30 to-amber-600/10',
          perks: [
            'Logo on Event Creatives',
            'Standee & Banner Display',
            'Stage Announcements',
            '10 VIP Passes',
          ],
        },
        {
          tier: 'Silver Sponsor',
          price: '₹50,000',
          accent: 'from-slate-400/30 to-slate-600/10',
          perks: [
            'Logo on Sponsor Board',
            'Social Media Mention',
            '5 VIP Passes',
          ],
        },
        {
          tier: 'Associate Sponsor',
          price: '₹25,000',
          accent: 'from-orange-500/30 to-rose-600/10',
          perks: [
            'Logo on Sponsor Backdrop',
            'Social Media Thank You Post',
            '2 VIP Passes',
          ],
        },
      ],
    },
    faqs: [
      { q: 'When is the next edition?', a: '15th to 20th October 2026 at Vittal Lawns, Laxmi Chowk, Hinjewadi, Pune – 57.' },
      { q: 'Do I need to book passes in advance?', a: 'Yes, early-bird passes are highly recommended — the event sells out every year.' },
      { q: 'Is there a dress code?', a: 'Traditional Navratri attire is encouraged. Best-dressed contests every night!' },
      { q: 'How can I sponsor the event?', a: 'Pick any package (Title / Powered By / Gold / Silver / Associate) and reach us at +91 99239 51535 or jayganeshfilmsent@gmail.com.' },
    ],
    sociablekitId: '25697958',
  },
  {
    slug: 'glamour-gateway',
    name: 'Glamour Gateway',
    tagline: 'Where fashion meets the runway of dreams.',
    since: 'Signature Fashion Event',
    instagram: 'https://www.instagram.com/glamourgatewayfashion007/',
    image: '/images/glamour/event-1.jpg',
    accent: 'from-fuchsia-500 via-pink-600 to-red-600',
    about:
      'Glamour Gateway is our signature fashion showcase — blending runway, cinema and dance into one unforgettable spectacle. It’s where emerging models, designers and choreographers debut on a red-carpet stage.',
    highlights: ['Designer Showcase', 'Live Music', 'Model Auditions', 'Photography Coverage'],
    faqs: [
      { q: 'How can models participate?', a: 'Submit your portfolio via Instagram DM. Auditions are announced 6 weeks before each edition.' },
      { q: 'Can designers apply?', a: 'Yes. We onboard 8–12 designers per edition — apply via our contact page.' },
      { q: 'Is media coverage available?', a: 'Every edition is professionally photographed and filmed. Coverage is shared with participants.' },
    ],
    sociablekitId: '25697974',
  },
];

export const getEvent = (slug) => events.find((e) => e.slug === slug);