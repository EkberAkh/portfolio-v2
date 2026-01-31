# AGENTS.md - AI Agent Guidelines

This document provides guidelines for AI coding agents working on this portfolio project.

## Project Overview

This is a **personal portfolio website** built with Next.js 13 (Pages Router), TypeScript, Tailwind CSS, and Framer Motion. It features a contact form powered by Nodemailer.

## Tech Stack

| Technology    | Version | Purpose                        |
| ------------- | ------- | ------------------------------ |
| Next.js       | 13.4.4  | React framework (Pages Router) |
| React         | 18.2.0  | UI library                     |
| TypeScript    | 5.1.3   | Type safety                    |
| Tailwind CSS  | 3.3.0   | Styling                        |
| Framer Motion | 10.x    | Animations                     |
| Nodemailer    | 6.x     | Email sending                  |
| Formik + Yup  | Latest  | Form handling & validation     |

## Project Structure

```
src/
├── animation/        # Reusable animation components (FadeUp, FadeRight, etc.)
├── components/       # UI components organized by feature
│   ├── contact-form/ # Contact form modal & related components
│   ├── experience/   # Work experience components
│   ├── projects/     # Project showcase components
│   ├── skills/       # Skills display components
│   └── utility/      # Reusable UI utilities (inputs, toasts, menus)
├── data/             # Static data files (projects, skills, experience, etc.)
├── hooks/            # Custom React hooks
├── layout/           # Layout components (navbar, footer, main-layout)
├── pages/            # Next.js pages (index, about, projects, 404)
│   └── api/          # API routes (sendmail.ts)
├── scripts/          # Build scripts (sitemap generation)
├── styles/           # Global CSS and theme definitions
└── utility/          # Helper functions and types
public/
├── icons/            # SVG icons
├── images/           # Images including project logos
└── static/           # Static assets (og images, etc.)
```

## Path Aliases

Use these TypeScript path aliases:

- `@/*` → `./src/*`
- `@/public/*` → `./public/*`

**Example:**

```typescript
import { classNames } from "@/utility/classNames";
import MainLayout from "@/layout/main-layout";
```

## Commands

| Command             | Description                           |
| ------------------- | ------------------------------------- |
| `pnpm dev`          | Start development server on port 3000 |
| `pnpm build`        | Build for production                  |
| `pnpm start`        | Start production server               |
| `pnpm lint`         | Run ESLint                            |
| `pnpm format:check` | Check Prettier formatting             |
| `pnpm format:fix`   | Fix Prettier formatting               |
| `pnpm sitemap`      | Generate sitemap.xml                  |
| `pnpm analyze`      | Analyze bundle size                   |

## Coding Conventions

### TypeScript

- Use strict TypeScript (`strict: true` in tsconfig)
- Define interfaces for component props with `Props` suffix (e.g., `MainLayoutProps`)
- Export types from `@/utility/types.ts`

### Components

- Use functional components with TypeScript
- Place reusable components in `src/components/`
- Feature-specific components go in subdirectories (e.g., `components/projects/`)
- Use `classNames` utility from `@/utility/classNames.ts` for conditional classes

### Styling

- Use Tailwind CSS exclusively for styling
- Theme uses HSL CSS variables defined in `globals.css`
- Available color tokens: `background`, `foreground`, `border`, `accent`, `destructive`, `muted`
- Dark mode is class-based (`.dark` class on root)
- Custom breakpoint: `xs: 360px`

### Animations

- Use Framer Motion for animations
- Reusable animation components in `src/animation/`
- Use `AnimatePresence` for exit animations (already set up in `_app.tsx`)

### Data Management

- Static data lives in `src/data/` as TypeScript/JavaScript files
- Projects: `src/data/projects.ts`
- Skills: `src/data/skills.ts`
- Experience: `src/data/experience.ts`
- Site metadata: `src/data/siteMetaData.mjs`

## Environment Variables

Required for contact form functionality:

```env
NODEMAILER_USER=your-email@gmail.com
NODEMAILER_PASS=your-app-password
```

**⚠️ NEVER commit `.env` files or expose credentials in code.**

## Important Patterns

### Adding a New Page

1. Create file in `src/pages/` (e.g., `src/pages/new-page.tsx`)
2. Use `PageTransitionAnimation` component for consistent transitions
3. Add SEO using `next-seo` package
4. Update navigation in `src/data/navigationRoutes.ts` if needed

### Adding a New Component

1. Create in appropriate `src/components/` subdirectory
2. Use TypeScript interfaces for props
3. Follow existing component patterns for consistency

### Modifying Theme

1. Edit CSS variables in `src/styles/globals.css`
2. Variables use HSL format: `--accent: 183 65% 35%;`
3. Reference `src/styles/theme-examples.css` for premade themes

### API Routes

- Located in `src/pages/api/`
- Server-side only (safe for secrets)
- Use rate limiting from `@/utility/rate-limiter.ts`

## Testing Guidelines

- No test framework is currently configured
- Verify changes by running `pnpm dev` and checking in browser
- Run `pnpm lint` before committing
- Run `pnpm format:check` to verify formatting

## Common Tasks

### Add a New Project

Edit `src/data/projects.ts` and add project logo to `public/images/projects/logos/`

### Add a New Skill

Edit `src/data/skills.ts`

### Update Site Metadata

Edit `src/data/siteMetaData.mjs`

### Customize Theme Colors

1. Modify CSS variables in `src/styles/globals.css`
2. For AnimatedLogo, colors must be hardcoded in the component

## Git Workflow

- Husky is configured for pre-commit hooks
- lint-staged runs ESLint and Prettier on staged files
- Commit only after passing all checks

## Deployment

- Optimized for Vercel deployment
- Docker support available via `Dockerfile`
- Set `BUILD_STANDALONE=true` for Docker builds
- Sitemap auto-generates after build

## Do NOT

- Expose Nodemailer credentials in client-side code
- Commit `.env` files
- Use inline styles (use Tailwind instead)
- Skip TypeScript types
- Modify `node_modules/` or `pnpm-lock.yaml` manually
