/* ============================================================================
   Capital Campaign Readiness Scorecard.

   12 questions, each scored 0–3, grouped under the seven keys. Raw score is
   normalised to 0–100. Recommendations are built from the respondent's own
   three lowest-scoring answers, so no two reports read the same.

   NOTE FOR DAN: this is diagnostic content going out under HPC's name, and it
   is the first substantive thing a prospect experiences. The question wording
   and the band copy should get a read before launch.
   ========================================================================== */

export type ScorecardQuestion = {
  /** Which of the seven keys this question sits under. Drives the breakdown. */
  key: string;
  text: string;
  /** One line of clarification under the question. */
  help: string;
  /** Four options, worth 0, 1, 2 and 3 in order. */
  answers: [string, string, string, string];
  /** Bolded first line of the recommendation, if this is one of their gaps. */
  fixTitle: string;
  fix: string;
};

export const SCORECARD_QUESTIONS: ScorecardQuestion[] = [
  {
    key: 'Transformational Vision',
    text: 'Do you have a written case for support?',
    help: 'The document that explains what you are raising for, why it matters, and why now.',
    answers: [
      'Nothing written yet',
      'Notes and ideas, nothing assembled',
      'A draft that needs work',
      'Written — and it holds up',
    ],
    fixTitle: 'Write the case for support first.',
    fix: 'Everything downstream of it — the ask amounts, the board pitch, the gift table — depends on a document that says what you are raising for and why it matters now.',
  },
  {
    key: 'Transformational Vision',
    text: 'Do you know what the project actually costs?',
    help: 'Construction, soft costs, contingency, the lot — not the number someone said in a meeting.',
    answers: [
      'It is a guess',
      'A rough number from one source',
      'A costed estimate, not yet firm',
      'A costed budget with contingency',
    ],
    fixTitle: 'Get a real costed budget before you set a goal.',
    fix: 'Campaigns that pick a round number first almost always end up raising the wrong amount — and finding out late, when changing the goal is expensive.',
  },
  {
    key: 'Leadership & Infrastructure',
    text: 'Do you have a campaign chair or cabinet?',
    help: 'Volunteers who will open doors and sit beside you in the ask.',
    answers: [
      'No one identified',
      'A few names on a list',
      'One or two have said yes',
      'Chair confirmed, cabinet forming',
    ],
    fixTitle: 'Recruit a campaign chair before you launch.',
    fix: 'A campaign led only by staff runs out of doors to knock on. The chair is who gets you into rooms you cannot get into yourself.',
  },
  {
    key: 'Leadership & Infrastructure',
    text: 'Who on your team has the time to run this week to week?',
    help: 'Campaigns are lost in the weeks nobody had time for.',
    answers: [
      'Honestly, nobody',
      'Someone, on top of a full job',
      'A staff member with time carved out',
      'A dedicated lead with protected time',
    ],
    fixTitle: 'Protect someone’s time for the campaign.',
    fix: 'Not necessarily a new hire — but someone whose calendar is actually cleared. Campaigns run on weekly momentum, and a full job eats momentum first.',
  },
  {
    key: 'Track Record & Authority',
    text: 'What is the largest single gift you have received in the last three years?',
    help: 'An honest read on the ceiling you have already proven you can reach.',
    answers: ['Under $10,000', '$10,000 – $50,000', '$50,000 – $250,000', 'Over $250,000'],
    fixTitle: 'Test the top of your gift range before committing to a goal.',
    fix: 'If your largest gift to date is well below the lead gift your campaign needs, the work in front of you is relationship-building — not soliciting.',
  },
  {
    key: 'Track Record & Authority',
    text: 'Has your board committed to giving to the campaign themselves?',
    help: 'Every major donor and every foundation asks this. There is no good way around it.',
    answers: [
      'Not discussed',
      'Discussed, no commitments',
      'Some have committed',
      '100% board participation committed',
    ],
    fixTitle: 'Get 100% board participation on paper first.',
    fix: 'It is the first question a major donor asks, and "most of them" is not an answer that lands. Settle it before you approach anyone outside the organization.',
  },
  {
    key: 'Story + Telling',
    text: 'Could someone outside your organization explain this campaign in a sentence?',
    help: 'If your own board cannot, donors will not carry it to the people they know.',
    answers: [
      'No — we struggle to explain it ourselves',
      'Only if we talk them through it',
      'Mostly — the message is close',
      'Yes — and people repeat it back',
    ],
    fixTitle: 'Sharpen the story until people repeat it back to you.',
    fix: 'A campaign spreads through people who are not you. That only happens when the reason it matters fits in a sentence someone can remember.',
  },
  {
    key: 'Donor Identification & Research',
    text: 'Do you have a prospect list with rated capacity?',
    help: 'Not a mailing list — names with an assessment of what each could actually give.',
    answers: [
      'No list',
      'A donor database, unrated',
      'A partial list, roughly rated',
      'A rated prospect list we are working',
    ],
    fixTitle: 'Build a rated prospect list.',
    fix: 'A shortlist of people whose capacity you have actually assessed, ranked from the top down. It is what turns a goal into a plan instead of a hope.',
  },
  {
    key: 'Donor Identification & Research',
    text: 'Do you know who your lead gift might come from?',
    help: 'In a campaign this size the top gift is usually 10–20% of the whole goal.',
    answers: [
      'No idea',
      'One or two long shots',
      'A credible name or two',
      'Yes — and we are already in conversation',
    ],
    fixTitle: 'Identify your lead gift prospect before you go public.',
    fix: 'Campaigns are won at the top of the pyramid. Without a credible name for the largest gift, a public launch is a gamble on strangers.',
  },
  {
    key: 'Discovery Visits',
    text: 'How many one-on-one conversations have you had with top prospects about this project in the last six months?',
    help: 'Conversations, not asks.',
    answers: ['None', 'One or two, informally', 'A handful, deliberately', 'Ongoing — it is a routine'],
    fixTitle: 'Start discovery visits now.',
    fix: 'Every campaign that closes early does it because the lead donors heard about the project months before anyone asked them for anything.',
  },
  {
    key: 'Stewardship',
    text: 'When someone gives, do you have a reliable way to thank them, report back, and stay in touch?',
    help: 'The thing that decides whether year-two and year-three pledge payments actually arrive.',
    answers: [
      'It is ad hoc',
      'We thank people, that is about it',
      'A process exists, inconsistently used',
      'Documented and followed',
    ],
    fixTitle: 'Write down your stewardship process before the gifts start arriving.',
    fix: 'Donors renew when they feel seen in year one — and under campaign pressure that never happens by accident.',
  },
  {
    key: 'Stewardship',
    text: 'Can your donor database handle multi-year pledges and campaign reporting?',
    help: 'Pledge schedules, reminders, campaign-level reporting.',
    answers: [
      'We use spreadsheets',
      'A database, but not for pledges',
      'It can, with workarounds',
      'Set up and tested',
    ],
    fixTitle: 'Sort out pledge tracking before launch.',
    fix: 'Multi-year pledges in a spreadsheet is how campaigns quietly lose money. A missed reminder is a gift that never fully arrives.',
  },
];

export type ScorecardBand = {
  min: number;
  label: string;
  /** Contains markup, so it is rendered with dangerouslySetInnerHTML. */
  headline: string;
  desc: string;
};

export const SCORECARD_BANDS: ScorecardBand[] = [
  {
    min: 75,
    label: 'Campaign-ready',
    headline: 'You are ready to start the <em class="serif">quiet phase</em>.',
    desc: 'Your score puts you in the top band. The fundamentals are in place — a case, leadership, a pipeline you have actually rated, and a board behind you. What matters now is sequencing: lead gifts before the public launch, and a weekly cadence that does not slip. Organizations at this level rarely need to be taught what a campaign is. They need a system, and someone in the room each week keeping them honest about the pace.',
  },
  {
    min: 45,
    label: '90 days of prep',
    headline: 'You are close — and <em class="serif">90 days</em> of focused work would get you there.',
    desc: 'You have real ingredients and real gaps. That is the most common place to be, and it is a fixable one. The risk at this stage is not failure, it is launching early: going public before the lead gifts are in is what turns a campaign into a two-year slog. Close the gaps below first, in order, then launch.',
  },
  {
    min: 0,
    label: 'Pre-campaign',
    headline: 'Not yet — and knowing that now is <em class="serif">worth a lot</em>.',
    desc: 'A low score is not a no. It means the foundations a campaign stands on — a costed project, a written case, a board that has committed, a pipeline you have rated — are not in place yet. Organizations that launch from here tend to stall around 40% of goal and spend a year recovering. What is below is what comes first. It is a season of prep, not a dead end.',
  },
];

export const MAX_ANSWER = 3;

export function bandFor(score: number): ScorecardBand {
  return SCORECARD_BANDS.find((b) => score >= b.min) ?? SCORECARD_BANDS[SCORECARD_BANDS.length - 1]!;
}

export function tierFor(pct: number): 'strong' | 'ok' | 'gap' {
  if (pct >= 75) return 'strong';
  if (pct >= 45) return 'ok';
  return 'gap';
}

export function tierWord(tier: 'strong' | 'ok' | 'gap') {
  return tier === 'strong' ? 'Strong' : tier === 'ok' ? 'Developing' : 'Gap';
}
