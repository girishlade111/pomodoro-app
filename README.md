# Pomodoro App

A sleek, dark-themed Pomodoro focus timer built with Next.js — alternate between 25-minute focus sessions and 5-minute breaks, track completed sessions, and switch between two timer display styles.

## Features

- **25/5 Pomodoro cycle** — classic 25-minute focus blocks with 5-minute breaks
- **Start / pause / reset** controls with a live MM:SS countdown
- **Session counter** — counts completed focus sessions
- **Two display styles** — "modern" card and a retro flip-clock style, toggleable with one tap
- **Animated progress bar** showing session completion
- **Dark gradient UI** with Tailwind CSS + shadcn/ui components and Lucide icons
- Fully client-side — no backend, no database, no login

## Tech Stack

- **Framework:** Next.js 15 (App Router, statically exported)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS 4, shadcn/ui (Radix primitives), Lucide icons
- **Theming:** next-themes (dark mode)

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000 — the timer is ready to use.

### Production build (static)

```bash
npm run build   # outputs to ./out
npx serve out   # preview the static export
```

## Project Structure

```
app/
  page.tsx        # Timer UI: TimerDisplay, SessionCounter, controls
  layout.tsx      # Root layout + theme provider
  globals.css     # Tailwind styles
components/
  theme-provider.tsx
lib/
  utils.ts        # shadcn cn() helper
public/           # Placeholder images
next.config.mjs   # output: 'export' + basePath '/pomodoro-app'
```

## Environment Variables

None required — the app is fully client-side.

## Deployment Notes

- The app is statically exported (`output: 'export'`) and deployed to GitHub Pages at `https://girishlade111.github.io/pomodoro-app/`.
- `basePath: '/pomodoro-app'` is set so asset URLs resolve under the GitHub Pages subpath. **If you deploy to a root domain (e.g. Vercel), remove the `basePath` line.**
- Security: Next.js was bumped from 15.2.4 to 15.2.8 (fixes CVE-2025-55182, CVE-2025-66478).
- Note: this repo was originally generated with v0.app and syncs with v0 deployments; the README and static-export config were added on top.

---

Built by Girish Lade · https://ladestack.in
