# Contributing to Leader Smells

Thank you for your interest in contributing! Leader Smells is an open project that welcomes contributions from anyone who wants to help make leadership better.

## Ways to Contribute

### 1. Suggest a New Smell

The best leader smells are:
- **Specific** — A clear, recognizable behavior pattern
- **Research-backed** — Has evidence showing it's harmful
- **Fixable** — There's a better alternative
- **Professional** — Can be shared in a work context

To suggest a new smell:
1. [Open a GitHub issue](https://github.com/marlonbarreto-git/leader-smells/issues/new)
2. Include:
   - A catchy name and one-line description
   - Description of the pattern (2-3 paragraphs)
   - At least 2 supporting sources (studies, HBR, etc.)
   - What good leaders do instead
   - Advice for those affected

### 2. Improve Existing Content

Found a typo? Have a better source? Want to improve an explanation?

1. Fork the repository
2. Make your changes
3. Submit a pull request

Or simply [open an issue](https://github.com/marlonbarreto-git/leader-smells/issues/new) describing the improvement.

### 3. Add Resources

Know a book, paper, or talk that should be on the Resources page?

Open an issue or PR with:
- Title and author
- Why it's relevant to leadership anti-patterns
- A working link

## Development Setup

```bash
# Clone the repo
git clone https://github.com/marlonbarreto-git/leader-smells.git
cd leader-smells

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Adding a New Smell Page

1. **Research first**: Create notes in `research/XX-smell-name.md`
2. **Find sources**: At least 2 legitimate sources (academic papers, HBR, McKinsey, etc.)
3. **Create the page**: Copy an existing smell page as a template
4. **Update index**: Add the smell to `src/pages/index.astro`
5. **Update RSS**: Add to `src/pages/rss.xml.ts`
6. **Update service worker**: Add to `public/sw.js` cache list

### Smell Page Structure

Each smell page should include:

```astro
<SmellLayout
  title="The Smell Name"
  emoji="🎯"
  tagline="One-line description of the behavior"
  description="SEO description for meta tags"
>
  <h2 class="section-title">The Pattern</h2>
  <!-- 2-3 paragraphs describing the behavior -->

  <h2 class="section-title">Why It Hurts</h2>
  <!-- Statistics and research in study-ref divs -->
  <!-- Explanation connecting research to harm -->

  <h2 class="section-title">The Fix</h2>
  <!-- ul.fix-list with solutions -->

  <h2 class="section-title">If You're Affected</h2>
  <!-- ul.affected-list with advice -->

  <h2 class="section-title">References</h2>
  <!-- Links to sources -->
</SmellLayout>
```

## Guidelines

All contributions should:

- **Be professional** — Content should be shareable in a work context
- **Be evidence-based** — Claims need legitimate sources
- **Be actionable** — Include what to do instead
- **Be kind** — The goal is improvement, not shaming

## Code Style

- TypeScript with strict mode
- Prettier for formatting
- ESLint for linting

Run before submitting:
```bash
npm run lint
npm run format
npm run build
```

## License

By contributing, you agree that your contributions will be licensed under:
- **Content**: [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- **Code**: MIT
