import { useState } from 'react';
import { HOMEPAGE_WINS, VISIBLE_WINS, WINS, type Win } from '../data/wins';

function WinCard({ win, tilt }: { win: Win; tilt?: 'l' | 'r' }) {
  const tiltClass = tilt ? ` tilt-${tilt}` : '';
  return (
    <article className={`win-card${tiltClass}`} data-win-category={win.category}>
      <div className="win-card-meta">
        <span className={`win-card-avatar ${win.avatar}`}>{win.initials}</span>
        <div className="win-card-author">
          <div className="win-card-name">{win.name}</div>
          <div className="win-card-org">{win.org}</div>
        </div>
        <span className="win-card-source">{win.source}</span>
      </div>

      {win.milestone ? (
        <div className="win-card-milestone">{win.milestone}</div>
      ) : (
        <div className="win-card-stars">★ ★ ★ ★ ★</div>
      )}

      <div className="win-card-body">
        {win.lead && <strong>{win.lead}</strong>}
        {win.body}
      </div>

      {win.permissionFlag && <div className="win-card-permission-flag">{win.permissionFlag}</div>}
    </article>
  );
}

/** The four-across row on the homepage. */
export function HomeWinsGrid() {
  return (
    <div className="wins-grid">
      {HOMEPAGE_WINS.map((win) => (
        <WinCard key={win.id} win={win} {...(win.tilt ? { tilt: win.tilt } : {})} />
      ))}
    </div>
  );
}

/**
 * The Member Wins page grid, with filtering.
 *
 * The filter bar only renders when there is more than one category to filter —
 * at launch every visible win is a Google review, so it stays out of the way.
 * Un-hide a milestone in src/data/wins.ts and the bar appears on its own, with
 * correct counts. No hard-coded numbers to forget about.
 */
export function WinsGridSection() {
  const [filter, setFilter] = useState<'all' | Win['category']>('all');

  const categories = Array.from(new Set(VISIBLE_WINS.map((w) => w.category)));
  const showFilters = categories.length > 1;

  const shown = filter === 'all' ? VISIBLE_WINS : VISIBLE_WINS.filter((w) => w.category === filter);

  const label: Record<Win['category'], string> = {
    review: 'Google reviews',
    milestone: 'Milestones',
  };

  return (
    <>
      {showFilters && (
        <section className="wins-filters">
          <div className="container">
            <div className="wins-filters-bar">
              <button
                className={`wins-filter${filter === 'all' ? ' active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All wins <span className="wins-filter-count">{VISIBLE_WINS.length}</span>
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`wins-filter${filter === cat ? ' active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {label[cat]}{' '}
                  <span className="wins-filter-count">
                    {VISIBLE_WINS.filter((w) => w.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="wins-page-grid-section">
        <div className="container">
          <div className="wins-page-grid">
            {shown.map((win) => (
              <WinCard key={win.id} win={win} />
            ))}
            {shown.length === 0 && (
              <div className="wins-page-empty-state visible">
                <p>No wins to show in this filter yet.</p>
                <em>More land as members give permission.</em>
              </div>
            )}
          </div>

          <p className="wins-growth-note">
            <strong>A growing collection</strong>
            We add wins as they land and as our members give us the green light to share. If you're
            looking at this page and wondering where everyone is — we're being deliberate about not
            sharing anything without explicit permission.
          </p>
        </div>
      </section>
    </>
  );
}

/** Count of wins still waiting on permission — handy when reviewing the site. */
export const PENDING_WINS = WINS.filter((w) => w.hidden).length;
