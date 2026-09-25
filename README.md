# SmileCraft Dental

A polished, responsive dental clinic website concept built as a portfolio demonstration. It showcases modern clinic branding, dental treatment information, appointment-request UX, lead capture, responsive navigation, and a frontend AI dental assistant concept.

> This is a demo website, not a real dental clinic. Names, contact details, team profiles, opening hours, and workflows are editable placeholders. The forms do not create appointments or send messages until a backend is connected.

## Features

- Premium responsive homepage with original clinic imagery
- About, treatments, dentist team, FAQ, contact, and emergency pages
- Eight statically generated treatment detail pages
- Six-step appointment request flow
- Demo-safe AI dental assistant with non-diagnostic responses
- WhatsApp, telephone, and mobile appointment actions
- Contact form with frontend validation and demo confirmation
- Patient journey and clinic automation concepts
- Centralized clinic, treatment, team, FAQ, and navigation data
- Accessible semantic markup, keyboard support, and reduced-motion handling
- SEO metadata, Open Graph data, `robots.txt`, and `sitemap.xml`

## Tech Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Lucide React icons

## Getting Started

```bash
git clone https://github.com/yogita-06/dentalclinic.git
cd dentalclinic
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Commands

```bash
npm run dev        # Start the development server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript checks
npm run build      # Create a production build
npm run start      # Serve the production build
```

## Customization

| Content | File |
| --- | --- |
| Clinic name, phone, address, hours, WhatsApp, feature toggles | `config/site.ts` |
| Treatments and service descriptions | `data/treatments.ts` |
| Dentist profiles | `data/team.ts` |
| Frequently asked questions | `data/faqs.ts` |
| Main navigation | `data/navigation.ts` |
| Dental images | `public/images/dental/` |

Replace all placeholder clinic information and demo team profiles with verified details before using the website for a real business.

## Connecting Production Services

The current appointment and contact forms are demonstration-only. Connect them to a secure Next.js route handler, a clinic CRM, Formspree, Resend, or another approved service. Add server-side validation, spam protection, consent handling, and appropriate privacy controls before accepting real patient information.

The dental assistant currently uses curated frontend responses. A production implementation can call an LLM through a secured server-side endpoint. Keep medical safety rules, prevent diagnosis, avoid exposing API keys in browser code, and provide a clear path to human assistance.

## Deploying to Vercel

1. Import this GitHub repository at [vercel.com/new](https://vercel.com/new).
2. Keep the detected framework as Next.js.
3. Use the default build command, `npm run build`.
4. Deploy and add a custom domain if required.

No environment variables are required for the demo version.

## Quality Checks

The project is configured for ESLint, strict TypeScript checking, and an optimized Next.js production build.

## Disclaimer

Treatment content is general information and does not provide medical diagnosis. Treatment recommendations depend on an individual dental assessment. This portfolio project does not represent a real clinic or active appointment system.
