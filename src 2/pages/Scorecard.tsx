import { useEffect, useMemo, useState } from 'react';
import { Link } from '../router';
import { BookLink } from '../components/Links';
import {
  MAX_ANSWER,
  SCORECARD_QUESTIONS,
  bandFor,
  tierFor,
  tierWord,
} from '../data/scorecard';

type Stage = 'intro' | 'quiz' | 'results';

export default function ScorecardPage() {
  const [stage, setStage] = useState<Stage>('intro');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(SCORECARD_QUESTIONS.length).fill(null)
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [stage]);

  const start = () => {
    setIndex(0);
    setStage('quiz');
  };

  const retake = () => {
    setIndex(0);
    setAnswers(new Array(SCORECARD_QUESTIONS.length).fill(null));
    setStage('intro');
  };

  const select = (value: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    // Brief pause so the selection is visible before advancing.
    window.setTimeout(() => {
      if (index < SCORECARD_QUESTIONS.length - 1) setIndex((i) => i + 1);
      else setStage('results');
    }, 220);
  };

  return (
    <main id="page-scorecard" className="page active">
      {stage === 'intro' && <Intro onStart={start} />}
      {stage === 'quiz' && (
        <Quiz
          index={index}
          answers={answers}
          onSelect={select}
          onBack={() => setIndex((i) => Math.max(0, i - 1))}
        />
      )}
      {stage === 'results' && <Results answers={answers} onRetake={retake} />}
    </main>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="scorecard-stage active">
      <section className="scorecard-intro-section">
        <div className="scorecard-intro-container">
          <span className="eyebrow">Capital Campaign Readiness Scorecard</span>
          <h1 className="scorecard-intro-headline">
            Are you <em className="serif">ready</em> to launch a capital campaign?
          </h1>
          <p className="scorecard-intro-sub">
            12 honest questions. 8 minutes. A real readiness score at the end — and the specific gaps
            you need to address before launch.
          </p>

          <div className="scorecard-intro-promise">
            <span className="eyebrow scorecard-intro-promise-eyebrow">What you'll get</span>
            <h2 className="scorecard-intro-promise-title">A real read — not a sales pitch.</h2>
            <ul className="scorecard-intro-promise-list">
              <li>A readiness score from 0 to 100 — based on your actual answers, not your hopes</li>
              <li>A breakdown of where you're strong and where the gaps are</li>
              <li>
                A clear recommendation: launch now, do 90 days of prep, or pause for strategic
                planning
              </li>
            </ul>
          </div>

          <button className="btn btn-primary btn-large" id="scorecard-start" onClick={onStart}>
            Begin the scorecard <span className="arrow">→</span>
          </button>
          <p className="scorecard-intro-meta">
            <span>Free</span>·<span>No email required</span>·<span>8 minutes</span>
          </p>
        </div>
      </section>
    </div>
  );
}

function Quiz({
  index,
  answers,
  onSelect,
  onBack,
}: {
  index: number;
  answers: (number | null)[];
  onSelect: (v: number) => void;
  onBack: () => void;
}) {
  const q = SCORECARD_QUESTIONS[index];
  const total = SCORECARD_QUESTIONS.length;

  return (
    <div className="scorecard-stage active">
      <section className="scorecard-quiz-section">
        <div className="scorecard-quiz-container">
          <div className="quiz-progress">
            <div className="quiz-progress-meta">
              <span>
                <span className="quiz-progress-current">{index + 1}</span> of <span>{total}</span>
              </span>
              <span className="quiz-progress-label">{q.key}</span>
            </div>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-fill" style={{ width: `${(index / total) * 100}%` }} />
            </div>
          </div>

          {/* key={index} restarts the fade animation on each question */}
          <div className="quiz-question-card" key={index}>
            <span className="quiz-question-num">
              Question {String(index + 1).padStart(2, '0')}
            </span>
            <h2 className="quiz-question-text">{q.text}</h2>
            <p className="quiz-question-help">{q.help}</p>
            <div className="quiz-answers">
              {q.answers.map((text, value) => (
                <button
                  key={value}
                  type="button"
                  className={`quiz-answer${answers[index] === value ? ' selected' : ''}`}
                  onClick={() => onSelect(value)}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <div className="quiz-nav">
            <button className="quiz-back" onClick={onBack} disabled={index === 0}>
              ← Back
            </button>
            <span className="quiz-hint">Pick the option that's most honest.</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function Results({ answers, onRetake }: { answers: (number | null)[]; onRetake: () => void }) {
  const filled = useMemo(() => answers.map((a) => a ?? 0), [answers]);

  const score = useMemo(() => {
    const max = SCORECARD_QUESTIONS.length * MAX_ANSWER;
    const raw = filled.reduce((sum, v) => sum + v, 0);
    return Math.round((raw / max) * 100);
  }, [filled]);

  // Count the headline number up rather than snapping to it.
  const [shown, setShown] = useState(0);
  useEffect(() => {
    setShown(0);
    const step = Math.max(1, Math.round(score / 28));
    const id = window.setInterval(() => {
      setShown((prev) => {
        if (prev >= score) {
          window.clearInterval(id);
          return score;
        }
        return Math.min(score, prev + step);
      });
    }, 22);
    return () => window.clearInterval(id);
  }, [score]);

  const band = bandFor(score);

  // Per-key breakdown, in the order the seven keys appear on the site.
  const breakdown = useMemo(() => {
    const order: string[] = [];
    const totals: Record<string, { got: number; max: number }> = {};
    SCORECARD_QUESTIONS.forEach((q, i) => {
      if (!totals[q.key]) {
        totals[q.key] = { got: 0, max: 0 };
        order.push(q.key);
      }
      totals[q.key].got += filled[i];
      totals[q.key].max += MAX_ANSWER;
    });
    return order.map((key) => ({
      key,
      pct: Math.round((totals[key].got / totals[key].max) * 100),
    }));
  }, [filled]);

  // Recommendations: the three lowest-scoring answers, weakest first.
  const recommendations = useMemo(
    () =>
      SCORECARD_QUESTIONS.map((q, i) => ({ q, score: filled[i], i }))
        .sort((a, b) => a.score - b.score || a.i - b.i)
        .slice(0, 3),
    [filled]
  );

  return (
    <div className="scorecard-stage active">
      <section className="scorecard-results-section">
        <div className="scorecard-results-container">
          <span className="eyebrow results-eyebrow">Your readiness score</span>
          <div className="results-score-display">
            <span className="results-score-num">{shown}</span>
            <span className="results-score-pct">%</span>
          </div>
          <span className="results-score-of">Out of 100 possible</span>

          <div className="results-band">
            <span className="results-band-label">{band.label}</span>
            <h2
              className="results-band-headline"
              dangerouslySetInnerHTML={{ __html: band.headline }}
            />
            <p className="results-band-desc">{band.desc}</p>
          </div>

          <div className="results-breakdown">
            <span className="eyebrow results-breakdown-eyebrow">Where you stand</span>
            <h3 className="results-breakdown-title">
              The seven keys, <em className="serif">scored</em>.
            </h3>
            <div>
              {breakdown.map(({ key, pct }) => {
                const tier = tierFor(pct);
                return (
                  <div className="results-bar-row" key={key}>
                    <span className="results-bar-label">{key}</span>
                    <span className={`results-bar-score ${tier}`}>
                      {tierWord(tier)} · {pct}%
                    </span>
                    <span className="results-bar-track">
                      <span className={`results-bar-fill ${tier}`} style={{ width: `${pct}%` }} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="results-recs">
            <span className="eyebrow results-recs-eyebrow">Recommended next steps</span>
            <h3 className="results-recs-title">
              Based on your <em className="serif">specific</em> answers.
            </h3>
            <ol className="results-recs-list">
              {recommendations.map(({ q, i }) => (
                <li key={i}>
                  <strong>{q.fixTitle}</strong>
                  {q.fix}
                </li>
              ))}
            </ol>
          </div>

          <div className="results-ctas">
            <BookLink className="btn btn-primary btn-large">
              Book a call <span className="arrow">→</span>
            </BookLink>
            <Link to="/campaigns" className="btn btn-ghost btn-large">
              See the Accelerator
            </Link>
          </div>
          <button className="results-retake" onClick={onRetake}>
            ↻ Retake the scorecard
          </button>
        </div>
      </section>
    </div>
  );
}
