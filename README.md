# TechToJob

TechToJob is a bilingual community platform where developers and technology
companies connect before a job vacancy exists. The product is based on
participation, real work, technical tournaments and direct conversations, not
on sending a CV into an anonymous job board.

The public website is built with Next.js, React, TypeScript and Tailwind CSS.
It supports Spanish and English through `next-intl`.

## Product scope

The home page is composed of the following sections:

- Hero: explains the community and sends users to Discord.
- How it works: describes the path from joining the community to finding an
  opportunity through participation.
- Talent: presents profiles with stack, level and availability.
- Companies: explains how companies publish needs and review real profiles.
- Tournaments: showcases practical challenges and their results.
- Networking: highlights topic-based channels and professional connections.
- News: displays community updates, events and tournament announcements.
- Testimonials: presents member stories and profile links.
- Newsletter: collects a name and email address for future communications.
- Pre-footer call to action and footer navigation.

The main positioning is intentional: TechToJob is a community, not another
job listing website. The site must not promise guaranteed employment, fixed
deadlines or unverified member and company numbers.

## Technology stack

- Next.js `16` with the App Router.
- React `19` and TypeScript.
- Tailwind CSS `4` with PostCSS.
- `next-intl` for routing and client translations.
- `next-intl/server` for routing and server translations.
- ESLint using the Next.js configuration.
- Sora variable font through `@fontsource-variable/sora`.
- Google Analytics and Cookie Script integrations prepared through Next.js.

## Requirements

- Node.js compatible with the installed Next.js version.
- npm.
- Access to the environment variables described below for production builds.

## Getting started

Install dependencies:

```bash
npm ci
```

Create a local environment file. The values below match the current project
configuration; replace optional integration values with the credentials for
the target environment:

```env
NEXT_PUBLIC_BASE_URL="https://techtojob-omega.vercel.app/"
NEXT_PUBLIC_LINK_DISCORD="https://discord.gg/zRj82mvgE"
NEXT_PUBLIC_GA_ANALYTICS_ID=""
NEXT_PUBLIC_COOKIE_SCRIPT=""
```

Start the development server:

```bash
npm run dev
```

The development server listens on `http://localhost:3000`.

## Available scripts

| Command         | Purpose                                                 |
| --------------- | ------------------------------------------------------- |
| `npm run dev`   | Starts Next.js in development mode on all interfaces.   |
| `npm run build` | Creates the optimized production build.                 |
| `npm run start` | Serves the production build. Run `npm run build` first. |
| `npm run lint`  | Runs ESLint across the project.                         |

## Project structure

```text
src/
	app/                 Next.js routes, layouts and metadata
		[locale]/          Localized public route and home page
	assets/              Global CSS, reset and vendor styles
	common/              Shared atoms, icons and reusable primitives
	config/              Navigation, routes and application configuration
	constants/           Shared constants and external links
	content/             Static content for news, tournaments and categories
	helpers/             Small pure helper functions
	hooks/               Reusable React hooks
	i18n/                Locale routing and request configuration
	layout/              Header, footer and content layout primitives
	lib/                 Shared utilities such as metadata and date formatting
	messages/            Translation dictionaries grouped by feature
	pods/                Page sections and feature-level components
	types/               View-model and shared TypeScript types
public/                Public images, icons and crawlable files
```

The `pods` directory contains feature sections rather than route-level pages.
The localized page composes those sections in this order:

```text
Hero -> Steps -> Talent -> CompanySteps -> Tournaments -> Networking
-> News -> Testimonials -> Newsletter -> PreFooter
```

## Internationalization

The supported locales are:

- `es`: default locale.
- `en`: English translation.

Locale routing is configured in `src/i18n/routing.ts` with
`localePrefix: "as-needed"`. The request configuration validates the locale
and dynamically loads the dictionaries from:

```text
src/messages/
	nav/es.json       nav/en.json
	home/es.json      home/en.json
	tournaments/es.json  tournaments/en.json
```

When adding a user-facing string:

1. Add the same translation key to both locale dictionaries.
2. Read it with `useTranslations` in client components or
   `getTranslations` in server components.
3. Keep metadata strings in the `Metadata` namespace.

## SEO and social metadata

Localized metadata is generated in `src/app/[locale]/layout.tsx`. The
reusable helper in `src/lib/metadata.ts` supports page titles, descriptions,
keywords, alternate languages and Open Graph/Twitter data.

Social previews use the square WebP asset:

```text
/techtojob-social.webp
```

This format and aspect ratio are intentional because WhatsApp and other social
crawlers can crop wide assets in link previews. `NEXT_PUBLIC_BASE_URL` is used
to produce absolute image URLs, which are required by most social crawlers.

## Integrations

### Discord

The public Discord invitation is configured through
`NEXT_PUBLIC_LINK_DISCORD` and currently points to:

```text
https://discord.gg/zRj82mvgE
```

### Google Analytics

The Google Analytics component is already wired into the localized layout.
Set `NEXT_PUBLIC_GA_ANALYTICS_ID` in Vercel to enable the production property.
Leave it empty in local development when analytics are not required.

### Cookie Script

Cookie Script is conditionally loaded when `NEXT_PUBLIC_COOKIE_SCRIPT` has a
value. Keep it empty until the production script identifier is available.

### Newsletter

The newsletter UI, validation state and success/error feedback are prepared in
`src/pods/newsletter/newsletter.tsx`. The external email provider or API is
still to be selected. Once selected, replace the current submission handler
with a server-side integration and keep provider credentials out of
`NEXT_PUBLIC_*` variables.

## Content and assets

Static feature content is kept in `src/content`. Publicly served assets belong
in `public` and can be referenced with root-relative paths such as
`/techtojob-social.webp`.

## Validation checklist

Before opening a pull request or deploying:

```bash
npm run lint
npm run build
```

Also verify:

- Spanish and English routes render correctly.
- All translation keys exist in both locales.
- Discord links point to the current invitation.
- Open Graph and Twitter metadata contain an absolute WebP image URL.
- The newsletter does not claim an email frequency until the provider and
  schedule are defined.
- Production-only integrations are configured in Vercel, not committed to the
  repository.

## Credits

**Hero Image:** Generated with AI [Gemini](https://gemini.google.com/) on 2026-09-18 for the Hero component background. Royalty-free image.
![Tech Community Hero](/public/hero.webp)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
