/* ============================================================================
   Member wins.

   Adding a review: append an entry here. Array order is the order cards appear
   on the Member Wins page. Give it a `homeOrder` to also place it in the
   four-card row on the homepage.

   Restoring a permission-pending milestone: set `hidden: false` on that entry,
   and restore the filter bar on the Member Wins page (see WinsFilterBar).

   Nothing here is invented — every review is a real Google review and every
   milestone is a real campaign. The hidden ones are waiting on written
   permission from the client, which is why they ship hidden rather than deleted.
   ========================================================================== */

export type WinAvatar = 'blueprint' | 'orange' | 'ochre' | 'glacier' | 'midnight';

export type Win = {
  id: string;
  category: 'review' | 'milestone';
  initials: string;
  avatar: WinAvatar;
  name: string;
  org: string;
  source: string;
  /** Bolded opening line — the pull-quote. */
  lead?: string;
  /** The rest of the quote. */
  body: string;
  /** Milestone headline, e.g. "$1M raised in 90 days". */
  milestone?: string;
  /** Shown under milestone cards that are not cleared for publication. */
  permissionFlag?: string;
  /** LAUNCH-HIDDEN: awaiting client sign-off. Set false to publish. */
  hidden?: boolean;
  /** Position in the four-card homepage row. Omit to keep it off the homepage. */
  homeOrder?: number;
  /** Homepage-only paper tilt. */
  tilt?: 'l' | 'r';
};

export const WINS: Win[] = [
  /* Array order = the order cards appear on the Member Wins page.
     Entries marked `hidden` are LAUNCH-HIDDEN, awaiting written client
     permission. They keep their place in the sequence so restoring one is
     just `hidden: false`. */
  {
    id: 'margaret-lucas',
    homeOrder: 1,
    category: 'review',
    initials: 'ML',
    avatar: 'blueprint',
    name: 'Margaret Lucas',
    org: 'House of Friendship',
    source: 'Google',
    lead: '"HPC\'s wisdom and strategic advice for our capital fundraising campaign has been invaluable."',
    body: ' They lead with heart and expertise — I would not hesitate to recommend them to execute a successful campaign.',
    tilt: 'l',
  },
  {
    id: 'lynne-short',
    homeOrder: 2,
    category: 'review',
    initials: 'LS',
    avatar: 'glacier',
    name: 'Lynne Short',
    org: 'Waterloo Region Community Foundation',
    source: 'Google',
    lead: '"If you get the chance to work with HPC — you are fortunate."',
    body: ' Engaging, extremely well-thought-out, and very practical.',
    tilt: 'r',
  },
  {
    id: 'laura-hill',
    category: 'review',
    initials: 'LH',
    avatar: 'orange',
    name: 'Laura Hill',
    org: 'SASC of Waterloo Region',
    source: 'Google',
    lead: '"HPC instantly calmed our anxiety and set us on the right path."',
    body: " Our first major campaign exceeded its year-one projections — we can't imagine going through it with anyone else.",
  },
  {
    id: 'act-5',
    homeOrder: 5,
    category: 'milestone',
    initials: 'A5',
    avatar: 'orange',
    name: 'Act 5',
    org: 'Hamilton, ON',
    source: 'Milestone',
    milestone: '$1M raised in 90 days',
    body: 'John reached out the day his landlord said he was selling the building. Down payment secured in three months. Now renovating.',
    permissionFlag: 'Permission pending',
    hidden: true,
  },
  {
    id: 'danny-sirmis',
    homeOrder: 3,
    category: 'review',
    initials: 'DS',
    avatar: 'ochre',
    name: 'Danny Sirmis',
    org: 'ErinoakKids',
    source: 'Google',
    lead: '"We were moved by their values-based approach to fundraising — not sales."',
    body: ' Very happy to recommend HPC to any organization, large or small.',
  },
  {
    id: 'daniel-potvin',
    category: 'review',
    initials: 'DP',
    avatar: 'midnight',
    name: 'Daniel Potvin',
    org: 'St. Faustina Parish',
    source: 'Google',
    lead: '"Our capital campaign was stuck."',
    body: ' After my first meeting with HPC, I knew we were headed in the right direction — confidence is at a new level.',
  },
  {
    id: 'cambridge-shelter',
    homeOrder: 6,
    category: 'milestone',
    initials: 'CS',
    avatar: 'ochre',
    name: 'Cambridge Shelter Corp',
    org: 'Cambridge, ON',
    source: 'Milestone',
    milestone: '$3M campaign',
    body: 'A $3M first-time capital campaign in Cambridge, Ontario.',
    permissionFlag: 'Permission & quote pending',
    hidden: true,
  },
  {
    id: 'michael-mcdonald',
    homeOrder: 4,
    category: 'review',
    initials: 'MM',
    avatar: 'orange',
    name: 'Michael McDonald',
    org: 'Bruce Trail Conservancy',
    source: 'Google',
    lead: '"Our organization has been transformed thanks to their advice."',
    body: ' These are our trusted advisors, and we are extremely happy with their service.',
    tilt: 'l',
  },
  {
    id: 'mark-matheson',
    category: 'review',
    initials: 'MM',
    avatar: 'glacier',
    name: 'Mark Matheson',
    org: "Governor General's Foot Guards",
    source: 'Google',
    lead: '"HPC stands out for their leadership, hands-on support and genuine commitment."',
    body: " 4+ years supporting our 150th Anniversary Campaign — insight and support that's been simply outstanding.",
  },
  {
    id: 'st-patricks',
    homeOrder: 7,
    category: 'milestone',
    initials: 'SP',
    avatar: 'midnight',
    name: "St. Patrick's",
    org: 'Capital campaign',
    source: 'Milestone',
    milestone: '$3–4M goal',
    body: "A multi-million-dollar campaign in HPC's active portfolio.",
    permissionFlag: 'Permission & quote pending',
    hidden: true,
  },
];

export const VISIBLE_WINS = WINS.filter((w) => !w.hidden);

/** The homepage row, in the approved order. */
export const HOMEPAGE_WINS = VISIBLE_WINS
  .filter((w) => w.homeOrder !== undefined)
  .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0));
