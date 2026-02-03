import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

const smells = [
  {
    slug: 'update-addict',
    title: 'The Update Addict',
    description:
      "Leaders who ask 'any updates?' instead of checking existing documentation",
    pubDate: new Date('2024-01-15'),
  },
  {
    slug: 'sync-maximalist',
    title: 'The Sync Maximalist',
    description:
      'Everything must be a meeting, async communication is forbidden',
    pubDate: new Date('2024-01-16'),
  },
  {
    slug: 'micromanager',
    title: 'The Micromanager',
    description:
      'Cannot delegate, needs to approve everything, grants no autonomy',
    pubDate: new Date('2024-01-17'),
  },
  {
    slug: 'priority-spinner',
    title: 'The Priority Spinner',
    description: 'Changes priorities constantly, everything is always urgent',
    pubDate: new Date('2024-01-18'),
  },
  {
    slug: 'talent-squeezer',
    title: 'The Talent Squeezer',
    description: 'Extracts maximum output without investing in growth',
    pubDate: new Date('2024-01-19'),
  },
  {
    slug: 'firefighter-hero',
    title: 'The Firefighter Hero',
    description: 'Creates or allows crises to solve them heroically',
    pubDate: new Date('2024-01-20'),
  },
  {
    slug: 'invisible-goalpost',
    title: 'The Invisible Goalpost',
    description:
      'Unclear expectations, moving targets, "that\'s not what I meant"',
    pubDate: new Date('2024-01-21'),
  },
  {
    slug: 'calendar-tetris',
    title: 'The Calendar Tetris Master',
    description:
      'Fills every time slot, no focus time, back-to-back meetings forever',
    pubDate: new Date('2024-01-22'),
  },
];

export function GET(context: APIContext) {
  return rss({
    title: 'Leader Smells',
    description:
      'Anti-patterns in leadership that hurt teams. Backed by research.',
    site: context.site ?? 'https://leadersmells.com',
    items: smells.map((smell) => ({
      title: smell.title,
      description: smell.description,
      link: `/${smell.slug}/`,
      pubDate: smell.pubDate,
    })),
    customData: `<language>en-us</language>`,
  });
}
