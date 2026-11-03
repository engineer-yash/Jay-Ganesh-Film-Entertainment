# Jay Ganesh Films Entertainment

> **Dance. Films. Culture. Crafted since 2003.**

A modern, responsive digital presence for **Jay Ganesh Films Entertainment Pvt. Ltd.** — a Pune-based dance, film, and cultural-entertainment organisation founded by **Mukesh (Rudra) Chaudhari**.

**Live website:** [jay-ganesh-films-jet.vercel.app](https://jay-ganesh-films-jet.vercel.app/)  
**Developed by:** [YG Web Studio](https://ygwebstudio.vercel.app/) — Yash Gohel

---

## About the Organisation

Jay Ganesh Films Entertainment brings together dance education, choreography, film production, creative studios, and cultural events. Its online platform presents the organisation, its founder, studio network, classes, signature events, gallery, and ways for students and collaborators to get in touch.

### Founder — Mukesh (Rudra) Chaudhari

Mukesh (Rudra) Chaudhari is presented on the website as the **Founder, Choreographer, Film Producer & Mentor** behind Jay Ganesh Films Entertainment. His public profile also describes him as the founder of Jay Ganesh Films Entertainment.

The founder profile in this project describes a journey that began in Kesarpur village, Pali district, Rajasthan, and grew through a lifelong commitment to dance, teaching, choreography, and creating opportunities for other performers. The profile highlights his appearances and wins on Sony TV's *Boogie Woogie* (1999 and 2004), the founding of My Style Dance Studio in 2003, and the launch of Jay Ganesh Films Entertainment in 2017.

The website also showcases his work as an organiser of the Tandav Dance Competition, his awards and honours, and his role in mentoring dancers. These biographical milestones and achievement figures are reproduced from the organisation's supplied website content; this README does not independently verify them.

---

## Project Overview

This project was delivered as a **freelance web development engagement by YG Web Studio**. The goal was to build a polished, brand-led website that does more than act as a static brochure: it gives visitors a clear view of the organisation, helps them discover studios and programmes, highlights events and achievements, and provides practical enquiry paths.

### Key areas of the website

- **Home:** Brand introduction, animated hero, founder highlights, key statistics, and featured event content.
- **Founder / About:** Biography, career timeline, achievements, awards showcase, and social profile link.
- **Branches:** Individual studio/location information, addresses, maps, class highlights, and branch-specific details.
- **Classes:** Dance, fitness, music, and other learning programmes with descriptions and fee information maintained in structured data.
- **Events:** Signature event listings and dynamic detail pages for event information, media, FAQs, and enquiries.
- **Gallery:** Category-based image filtering and an interactive full-size lightbox.
- **Contact:** Contact information, location map, and studio enquiry form.
- **Policy pages:** Privacy policy and terms and conditions.

---

## Technology Stack

| Area | Technologies |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI library | React 18 |
| Language | JavaScript (ES6+) and JSX |
| Styling | Tailwind CSS 3, custom CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| UI primitives | Radix UI Accordion |
| Form-related dependencies | React Hook Form, Zod, and Hook Form Resolvers (present in project dependencies) |
| Notifications | Sonner |
| Class and style utilities | clsx, tailwind-merge, class-variance-authority |
| Backend/API | Next.js Route Handlers |
| Database integration | MongoDB Node.js Driver |
| Deployment | Vercel |

> **State-management note:** Redux is not included in the current `package.json` and is not used by the inspected implementation. Interactive component state is managed with React hooks such as `useState`, `useEffect`, and `useMemo`, while Framer Motion provides animation and scroll hooks. This documentation describes the technologies present in the repository rather than adding Redux as an unverified claim.

---

## What I Built

As the developer behind YG Web Studio, I worked across the presentation layer, component architecture, data organisation, interactions, and application-level integrations.

### 1. Component-based React architecture

The interface is split into reusable components rather than keeping all page markup in large route files. Examples include:

- `Navbar` and `Footer` for shared site navigation and organisation details.
- `Breadcrumbs` for consistent page context.
- `HeroClient` for the animated homepage hero.
- `Reveal`, `Stagger`, and `StaggerItem` for reusable entrance and scroll-reveal effects.
- `FAQ` and Radix-based accordion primitives for expandable question-and-answer content.
- `Testimonials` for structured community feedback.
- `Reels` and `InstagramReelsWidget` for embedded social video content.
- `JoinStudioForm` for collecting prospective student details and preparing a WhatsApp enquiry.

This structure made the UI easier to reason about, reuse, maintain, and extend across multiple routes.

### 2. React hooks and interactive UI

React hooks manage focused, component-level behaviour:

- **`useState`:** Manages mobile navigation visibility, gallery category selection, lightbox state, and form values/submission state.
- **`useEffect`:** Supports client-side effects where a component needs to respond to browser or navigation state.
- **`useMemo`:** Builds the Instagram widget's iframe document from its embed configuration without recreating it unnecessarily.
- **Framer Motion hooks:** `useScroll`, `useSpring`, and `useTransform` support scroll progress and animated presentation.

Working with these patterns strengthened my practical understanding of local state, controlled inputs, derived UI, memoisation, component lifecycle, and the separation between server-rendered and client-interactive components in Next.js.

### 3. Next.js App Router and page composition

The project uses the App Router with route-level pages and dynamic segments. Examples include:

- `/founder`, `/branches`, `/classes`, `/events`, `/gallery`, and `/contact`.
- Dynamic routes such as `/branches/[slug]` and `/events/[slug]`.
- Dynamic event metadata and static parameter generation for event detail pages.
- A shared root layout for navigation, footer, fonts, notifications, and global UI.

This provided practical experience with route organisation, layouts, dynamic route parameters, metadata, and composing server and client components.

### 4. Structured content and reusable data

Content that changes independently of page layout is organised in the `data/` directory. This includes:

- `founder.js` — founder details, biography, achievements, statistics, philosophy, and timeline.
- `branches.js` — studio locations and branch information.
- `classes.js` — programme descriptions and class information.
- `events.js` — event details and presentation data.
- `gallery.js`, `awards.js`, `reels.js`, `faqs.js`, and `testimonials.js` — supporting website content.
- `site.js` — brand details, navigation, social links, and developer credit.

Separating content from components keeps the presentation reusable and makes routine content updates easier.

### 5. Motion, visual design, and responsive layouts

Tailwind CSS utilities and custom global styles create a consistent visual language, including responsive grids, typography, colour tokens, gradients, spacing, and interactive states.

Framer Motion is used for animated hero text, scroll-reveal sections, staggered cards, mobile navigation transitions, hover interactions, and the reading-progress indicator. The layouts are designed to adapt across mobile, tablet, and desktop screen sizes.

### 6. Forms, WhatsApp, and API integration

The site includes visitor enquiry experiences:

- The studio registration form manages input values with React state.
- On submission, it formats the entered details and opens a WhatsApp chat with a pre-filled message, allowing the visitor to review and send it.
- The Next.js route handler exposes a POST endpoint at `/api/contact`, validates required fields, and can insert messages into MongoDB when the database connection is configured.
- A lightweight health response is available through the API route.

The currently rendered studio registration form uses the WhatsApp flow. The contact API exists as a separate backend route; database persistence depends on configuring the MongoDB environment variables.

### 7. External content and media

The implementation includes:

- Instagram Reels content embedded through SociableKit.
- An iframe-based embed component that isolates the widget's browser context, helping it initialise reliably after client-side route changes.
- Local image assets for founder profiles, studios, awards, event posters, and gallery content.
- Google Maps embeds and outbound social/contact links.

### 8. Metadata and discoverability

The root layout and route pages define page titles, descriptions, canonical URLs, Open Graph and Twitter metadata, robots directives, and structured organisation/website data. The project also includes sitemap and robots route files.

---

## Architecture at a Glance

```text
Jay-Ganesh-Film-Entertainment/
├── app/                      # Next.js App Router pages and route handlers
│   ├── about/
│   ├── api/[[...path]]/       # Contact API and health response
│   ├── branches/
│   │   └── [slug]/
│   ├── classes/
│   ├── contact/
│   ├── events/
│   │   └── [slug]/
│   ├── founder/
│   ├── gallery/
│   ├── privacy-policy/
│   ├── terms-and-conditions/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   ├── site/                  # Reusable website sections and behaviours
│   └── ui/                    # Reusable UI primitives
├── data/                      # Structured site content
├── lib/                       # Shared utility functions
├── public/
│   └── images/                # Brand, founder, studio, event and gallery assets
├── next.config.js
├── tailwind.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js (use a current LTS release)
- npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/engineer-yash/Jay-Ganesh-Film-Entertainment.git

# Move into the project directory
cd Jay-Ganesh-Film-Entertainment

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the Next.js development server on port 3000 |
| `npm run build` | Creates a production build |
| `npm start` | Starts the production server |
| `npm run lint` | Runs the configured Next.js lint command |

### Environment configuration

MongoDB persistence is optional for the contact API. To enable it, configure the following environment variables in a local `.env.local` file and in the deployment environment:

```env
MONGO_URL=your_mongodb_connection_string
DB_NAME=jayganesh
```

Do not commit real credentials or private environment files to source control. Without `MONGO_URL`, the API can still return its health response, while contact messages are acknowledged without database persistence.

---

## Developer Credit

**Designed and developed by YG Web Studio**  
**Developer:** Yash Gohel

This freelance project gave me practical, end-to-end experience in building a real business website: translating an organisation's identity and content into reusable React components, implementing responsive pages and interaction patterns, structuring a Next.js application, integrating third-party media, and connecting frontend enquiry flows to API and database services.

It strengthened my ability to work with React, Next.js, JavaScript, Tailwind CSS, Framer Motion, reusable components, hooks, route handlers, and practical deployment workflows in a client-facing project.

- **YG Web Studio:** [ygwebstudio.vercel.app](https://ygwebstudio.vercel.app/)
- **Live project:** [jay-ganesh-films-jet.vercel.app](https://jay-ganesh-films-jet.vercel.app/)
- **Founder profile:** [Mukesh (Rudra) Chaudhari](https://in.linkedin.com/in/mukesh-rudra-chaudhari-60190426a)

---

## Acknowledgements

The website content, brand assets, founder story, studio information, event details, and media are presented for Jay Ganesh Films Entertainment. All organisation-specific information belongs to the respective organisation and content owners.
