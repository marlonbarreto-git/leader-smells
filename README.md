# Leader Smells

A collection of anti-patterns in leadership, styled like [nohello.net](https://nohello.net/en/). Each "smell" is a dedicated page explaining a toxic leadership behavior, why it's harmful (backed by real research), and what to do instead.

**Repository:** [github.com/marlonbarreto-git/leader-smells](https://github.com/marlonbarreto-git/leader-smells)

![Leader Smells Screenshot](/public/screenshot.png)

## Leader Smells

| Smell | Description |
|-------|-------------|
| 🔔 [The Update Addict](/update-addict) | Leaders who ask "any updates?" instead of checking existing documentation |
| 📅 [The Sync Maximalist](/sync-maximalist) | Everything must be a meeting, async communication is forbidden |
| 🔬 [The Micromanager](/micromanager) | Cannot delegate, needs to approve everything, grants no autonomy |
| 🎰 [The Priority Spinner](/priority-spinner) | Changes priorities constantly, everything is always urgent |
| 🍋 [The Talent Squeezer](/talent-squeezer) | Extracts maximum output without investing in growth |
| 🚒 [The Firefighter Hero](/firefighter-hero) | Creates or allows crises to solve them heroically |
| 👻 [The Invisible Goalpost](/invisible-goalpost) | Unclear expectations, moving targets, "that's not what I meant" |
| 🧩 [The Calendar Tetris Master](/calendar-tetris) | Fills every time slot, no focus time, back-to-back meetings forever |

## Tech Stack

- **Framework:** [Astro](https://astro.build/) with TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Content:** Static pages with Astro components
- **PWA:** Service worker for offline support
- **Deploy:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
leader-smells/
├── public/           # Static assets
├── research/         # Research notes and sources
├── src/
│   ├── components/   # Reusable Astro components
│   ├── layouts/      # Page layouts
│   ├── pages/        # All routes
│   └── styles/       # Global CSS
├── astro.config.mjs  # Astro configuration
└── package.json
```

## Adding a New Smell

1. Create research notes in `research/XX-smell-name.md`
2. Find 2+ legitimate sources (studies, HBR, etc.)
3. Create page in `src/pages/smell-name.astro` using `SmellLayout`
4. Add to the index page and RSS feed
5. Update the manifest for PWA caching

Each smell page should include:
- Catchy title with emoji
- One-liner tagline
- The Pattern (2-3 paragraphs describing the behavior)
- Why It Hurts (consequences with data/studies)
- The Fix (what good leaders do instead)
- If You're Affected (advice for those experiencing it)
- References (links to sources)

## Research Sources

Key researchers and sources informing this project:

- **Gloria Mark** (UC Irvine) — Context switching and interruptions
- **Amy Edmondson** (Harvard) — Psychological safety
- **Mihaly Csikszentmihalyi** — Flow states
- **Deci & Ryan** — Self-determination theory
- **Locke & Latham** — Goal-setting theory
- **Cal Newport** — Deep work, attention residue
- **Paul Graham** — Maker's schedule vs manager's schedule
- **Google Project Oxygen** — Manager effectiveness research

Full source list available on the [Resources page](/resources).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) or the [Contribute page](/contribute) on the site.

## License

Content is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

Code is licensed under MIT.
