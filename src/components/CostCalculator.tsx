import { useState } from 'react';

const COST_RATE = 0.03; // Industry benchmark is 2–5%; HPC quotes 3%.

const fmt = (n: number) => n.toLocaleString('en-US');

/**
 * Campaign cost calculator.
 *
 * The maths is deliberately the reverse of the usual: the slider is the NET
 * amount the mission needs, and the goal is grossed up by the cost — so
 * net-to-mission stays whole and nothing comes out of the operating budget.
 * (This was Dan's correction in the Loom review. Do not flip it back.)
 */
export default function CostCalculator() {
  const [net, setNet] = useState(3_000_000);
  const cost = Math.round(net * COST_RATE);
  const gross = net + cost;

  return (
    <section className="calc-section">
      <div className="container">
        <div className="calc-grid">
          <div className="calc-copy">
            <span className="eyebrow">A myth worth retiring</span>
            <h2 className="display-2">
              Your campaign should <em className="serif">pay for itself.</em>
            </h2>
            <p className="lede">
              Most of the no's we hear sound like "we don't have the money in our annual budget." But
              your campaign costs aren't supposed to come out of operations. They come out of the
              campaign.
            </p>
            <div className="calc-myth">
              <strong>The reframe</strong>
              If your mission needs $3M and the campaign costs 3% to run, you raise $3,090,000 — the
              $90,000 is folded into the goal as a line item, not a hit on your operating budget. The
              campaign funds itself.
            </div>
          </div>

          <div className="calc-card">
            <div className="calc-card-label">Try it on your campaign</div>
            <h3 className="calc-card-title">Campaign cost calculator</h3>

            <div className="calc-input-wrap">
              <label className="calc-input-label" htmlFor="goalSlider">
                What your mission needs (net)
              </label>
              <div className="calc-input-display">
                $<span id="netTarget">{fmt(net)}</span>
              </div>
              <input
                type="range"
                id="goalSlider"
                className="calc-slider"
                min={1_000_000}
                max={10_000_000}
                step={500_000}
                value={net}
                onChange={(e) => setNet(Number(e.target.value))}
              />
            </div>

            <div className="calc-results">
              <div className="calc-result-row">
                <span className="calc-result-label">Campaign cost (3%, built into the goal)</span>
                <span className="calc-result-value">${fmt(cost)}</span>
              </div>
              <div className="calc-result-row">
                <span className="calc-result-label">Your campaign goal — what you raise</span>
                <span className="calc-result-value">${fmt(gross)}</span>
              </div>
              <div className="calc-result-row highlight">
                <span className="calc-result-label">Out of your annual budget</span>
                <span className="calc-result-value">$0</span>
              </div>
            </div>
            <p className="calc-footnote">
              Industry benchmark: 2–5% of campaign goal. You raise your target plus the cost of
              running the campaign, so your mission keeps the full amount — and nothing comes out of
              your operating budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
