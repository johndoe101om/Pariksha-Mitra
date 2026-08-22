import React from 'react';
import { CheckCircle, XCircle, Clock, Target, ArrowRight, RotateCcw, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PracticeResult.css';

export default function PracticeResult() {
  const navigate = useNavigate();

  return (
    <div className="practice-result-container">
      <div className="pr-header">
        <h1>Practice Summary <span className="hi">अभ्यास सारांश</span></h1>
        <p>SSC CGL 2022 PYQ Mock Test</p>
      </div>

      <div className="pr-top-cards">
        <div className="score-card">
          <div className="score-circle">
            <div className="inner-circle">
              <span className="score-num">15</span>
              <span className="score-div">/20</span>
            </div>
            <svg viewBox="0 0 36 36" className="score-svg">
              <path className="score-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="score-path" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <h3>Excellent Score!</h3>
          <p>You are in the top 10% of students.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <Target size={24} color="var(--color-primary)" />
            <div className="stat-val">75%</div>
            <div className="stat-label">Accuracy</div>
          </div>
          <div className="stat-box">
            <Clock size={24} color="var(--color-secondary)" />
            <div className="stat-val">12m 45s</div>
            <div className="stat-label">Time Taken</div>
          </div>
          <div className="stat-box">
            <CheckCircle size={24} color="var(--color-tertiary)" />
            <div className="stat-val">15</div>
            <div className="stat-label">Correct</div>
          </div>
          <div className="stat-box">
            <XCircle size={24} color="var(--color-error)" />
            <div className="stat-val">5</div>
            <div className="stat-label">Incorrect</div>
          </div>
        </div>
      </div>

      <div className="pr-actions">
        <button className="btn-primary" onClick={() => navigate('/practice')}>
          <RotateCcw size={18} /> Retry Incorrect
        </button>
        <button className="btn-secondary" onClick={() => navigate('/practice')}>
          Next Practice <ArrowRight size={18} />
        </button>
      </div>

      <div className="pr-section">
        <h2>Subject Breakdown <span className="hi">विषयवार विश्लेषण</span></h2>
        <div className="breakdown-table">
          <div className="table-row th">
            <div>Topic</div>
            <div>Questions</div>
            <div>Correct</div>
            <div>Accuracy</div>
          </div>
          <div className="table-row">
            <div>Profit & Loss</div>
            <div>8</div>
            <div>6</div>
            <div>75%</div>
          </div>
          <div className="table-row weak-area">
            <div>Time & Work</div>
            <div>6</div>
            <div>2</div>
            <div>33%</div>
          </div>
          <div className="table-row">
            <div>Number System</div>
            <div>6</div>
            <div>5</div>
            <div>83%</div>
          </div>
        </div>
      </div>

      <div className="pr-section">
        <h2>Review Answers <span className="hi">उत्तरों की समीक्षा करें</span></h2>
        <div className="review-list">
          {[1, 2, 3].map(i => (
            <div key={i} className="review-item">
              <div className="review-header">
                <span className={`q-status ${i === 2 ? 'wrong' : 'correct'}`}>
                  {i === 2 ? <XCircle size={16} /> : <CheckCircle size={16} />}
                  Q{i}
                </span>
                <span className="q-time">45s</span>
                <ChevronDown size={20} className="expand-icon" />
              </div>
              <div className="review-q-text">
                A shopkeeper sells an article at a loss of 12.5%...
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
