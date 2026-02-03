# Ralph Prompt: Leader Smells

## Project Overview

Build a webapp called **"Leader Smells"** - a collection of anti-patterns in leadership, styled like [nohello.net](https://nohello.net/en/). Each "smell" is a dedicated page explaining a toxic leadership behavior, why it's harmful (backed by real studies), and what to do instead.

**Repository:** Create in `marlonbarreto-git` GitHub user (NOT any organization)
**Repo name:** `leader-smells`
**Deploy target:** Vercel or Netlify (free tier)

---

## Tech Stack

- **Framework:** Astro, Next.js, or SvelteKit (your choice based on simplicity for static content)
- **Styling:** Tailwind CSS
- **Content:** Markdown files for each smell (easy to add more later)
- **No backend** - fully static, deployable anywhere
- **PWA ready** - installable, works offline

---

## Content Requirements

### Minimum 8 Leader Smells (launch requirement):

1. **The Update Addict** (`/update-addict`)
   - Leaders who ask "any updates?" constantly instead of checking existing docs/tickets/PRs
   - Studies: Context switching costs, maker's schedule vs manager's schedule (Paul Graham)

2. **The Sync Maximalist** (`/sync-maximalist`)
   - Everything must be a meeting, can't communicate async
   - Studies: Meeting overload research, async-first remote work studies

3. **The Micromanager** (`/micromanager`)
   - Can't delegate, needs to approve everything, no autonomy
   - Studies: Self-determination theory, Google's Project Oxygen

4. **The Priority Spinner** (`/priority-spinner`)
   - Changes priorities daily/weekly, everything is urgent
   - Studies: WIP limits research, flow state research, Agile principles

5. **The Talent Squeezer** (`/talent-squeezer`)
   - Extracts maximum output without investing in growth
   - Studies: Employee development ROI, burnout research

6. **The Firefighter Hero** (`/firefighter-hero`)
   - Creates or allows crises to solve them heroically
   - Studies: Incident management, blameless culture research

7. **The Invisible Goalpost** (`/invisible-goalpost`)
   - Unclear expectations, moves targets, "that's not what I meant"
   - Studies: Goal-setting theory, psychological safety (Amy Edmondson)

8. **The Calendar Tetris Master** (`/calendar-tetris`)
   - Fills every slot, no focus time, back-to-back meetings
   - Studies: Deep work (Cal Newport), attention residue research

### Each Smell Page Must Include:

1. **Catchy title** with icon/emoji
2. **One-liner** that summarizes the problem
3. **The Pattern** - describe the behavior (2-3 paragraphs)
4. **Why It Hurts** - consequences with data/studies (cite sources)
5. **The Fix** - what good leaders do instead
6. **If You're Affected** - actionable advice for the person suffering this
7. **References** - real links to studies, books, articles (HBR, research papers, etc.)

---

## Design Requirements

- **Clean, minimal** - like nohello.net
- **Dark mode support**
- **Mobile-first responsive**
- **Fast** - 100 Lighthouse performance score target
- **Shareable** - good OG meta tags for each smell (preview when shared on Slack/Twitter)
- **Accessible** - WCAG AA compliant

### Visual Style:
- Monospace or clean sans-serif font
- High contrast
- Subtle illustrations or icons (optional, can use emoji)
- No clutter, lots of whitespace

---

## Site Structure

```
/                     → Landing page with all smells listed
/[smell-slug]         → Individual smell page
/about                → Why this exists, who made it
/contribute           → How to suggest new smells (GitHub issues link)
/resources            → Curated list of books, articles, talks on good leadership
```

## Research Phase (do this first)

Before writing any code:
1. Research each smell topic thoroughly
2. Find 2-3 legitimate sources per smell (academic papers, HBR, reputable books)
3. Create a `research/` folder with notes and source links
4. Draft all content in Markdown before building UI

---

## Git Workflow

1. Create repo: `gh repo create leader-smells --public --clone`
2. Commit frequently with descriptive messages
3. Use conventional commits (feat:, fix:, docs:, etc.)
4. Tag v1.0.0 when all completion criteria met

---

## Commands to Start

```bash
# Create and clone repo
cd ~/Projects  # or wherever personal projects live
gh repo create marlonbarreto-git/leader-smells --public --clone
cd leader-smells

# Initialize project (example with Astro)
npm create astro@latest . -- --template minimal --typescript strict

# Install dependencies
npm install -D tailwindcss @tailwindcss/typography prettier eslint

# Start building
```

---

## Definition of Done

This project is COMPLETE when:
1. ALL checkboxes in "Completion Criteria" are checked
2. Site is live and accessible via public URL
3. At least one other person has reviewed the content for clarity
4. README includes: screenshot, live URL, how to add new smells

Do not stop iterating until every single criterion is met. If something is unclear, make a reasonable decision and document it. Quality over speed.

---

## Notes

- Tone matters: this should be something you could share with a colleague or even a manager without it being seen as an attack. Educational, not aggressive.
- The goal is to help people recognize patterns and have language for them, not to shame anyone.
- Content is king: spend 60% of time on research/writing, 40% on code/design.
