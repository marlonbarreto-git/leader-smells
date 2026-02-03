# Deployment Guide

## GitHub Repository Setup

Since the CLI token doesn't have repository creation permissions, create the repository manually:

1. Go to https://github.com/new
2. Repository name: `leader-smells`
3. Description: "A collection of anti-patterns in leadership, backed by research"
4. Visibility: Public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

Then push the existing code:

```bash
cd /Users/marlonbarreto/Work/leader-smells
git remote set-url origin https://github.com/marlonbarreto-git/leader-smells.git
git push -u origin main
```

## Vercel Deployment

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/new
2. Import the `marlonbarreto-git/leader-smells` repository
3. Framework Preset: Astro (should auto-detect)
4. Build settings (auto-configured via vercel.json):
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click Deploy

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
cd /Users/marlonbarreto/Work/leader-smells
vercel
```

## Custom Domain (Optional)

1. In Vercel dashboard, go to Project Settings > Domains
2. Add `leadersmells.com` (or your preferred domain)
3. Configure DNS:
   - A Record: `76.76.21.21`
   - Or CNAME: `cname.vercel-dns.com`

## Netlify Alternative

If using Netlify instead:

1. Go to https://app.netlify.com/start
2. Connect to GitHub
3. Select `leader-smells` repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy

## Post-Deployment Checks

After deployment, verify:

1. [ ] All pages load correctly
2. [ ] Dark mode toggle works and persists
3. [ ] Service worker registers (check DevTools > Application)
4. [ ] Run Lighthouse audit (target: 95+ on all categories)
5. [ ] Verify RSS feed at `/rss.xml`
6. [ ] Check sitemap at `/sitemap-index.xml`
7. [ ] Test on mobile device

## Continuous Deployment

Both Vercel and Netlify automatically redeploy when:
- You push to the `main` branch
- You merge a pull request to `main`

No additional CI/CD configuration needed.
