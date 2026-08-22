import React, { useState, useEffect } from 'react';
import { Flag, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './MockTestEngine.css';
import ParikshaMitraLogo from '../components/ParikshaMitraLogo';

const MOCK_QUESTIONS = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  section: i < 25 ? 'General Intelligence' : i < 50 ? 'Quantitative Aptitude' : i < 75 ? 'English Language' : 'General Awareness',
  text: `Sample question ${i + 1} text goes here. This is a placeholder for actual exam content which might include equations, passages, or statements to evaluate.`,
  options: ['Option A is incorrect', 'Option B is the right choice possibly', 'Option C might be an distractor', 'Option D is definitely not the answer'],
}));

export default function MockTestEngine() {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(1);
  const [timeLeft, setTimeLeft] = useState(180 * 60); // 180 minutes
  const [showConfirm, setShowConfirm] = useState(false);
  
  // State: 0=not visited, 1=not answered, 2=answered, 3=marked, 4=answered&marked
  const [qStates, setQStates] = useState(Array(100).fill(0));
  const [answers, setAnswers] = useState(Array(100).fill(null));

  const currentSection = MOCK_QUESTIONS[currentQ - 1].section;
  
  // Mark current as not answered if not visited
  useEffect(() => {
    if (qStates[currentQ - 1] === 0) {
      const newStates = [...qStates];
      newStates[currentQ - 1] = 1;
      setQStates(newStates);
    }
  }, [currentQ, qStates]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ - 1] = optIndex;
    setAnswers(newAnswers);

    const newStates = [...qStates];
    if (newStates[currentQ - 1] === 3 || newStates[currentQ - 1] === 4) {
      newStates[currentQ - 1] = 4; // Answered & Marked
    } else {
      newStates[currentQ - 1] = 2; // Answered
    }
    setQStates(newStates);
  };

  const handleClear = () => {
    const newAnswers = [...answers];
    newAnswers[currentQ - 1] = null;
    setAnswers(newAnswers);

    const newStates = [...qStates];
    if (newStates[currentQ - 1] === 4) {
      newStates[currentQ - 1] = 3; // Marked
    } else {
      newStates[currentQ - 1] = 1; // Not Answered
    }
    setQStates(newStates);
  };

  const handleMark = () => {
    const newStates = [...qStates];
    if (newStates[currentQ - 1] === 2) {
      newStates[currentQ - 1] = 4;
    } else if (newStates[currentQ - 1] === 1 || newStates[currentQ - 1] === 0) {
      newStates[currentQ - 1] = 3;
    } else if (newStates[currentQ - 1] === 3) {
      newStates[currentQ - 1] = 1;
    } else if (newStates[currentQ - 1] === 4) {
      newStates[currentQ - 1] = 2;
    }
    setQStates(newStates);
  };

  const handleNext = () => {
    if (currentQ < 100) setCurrentQ(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentQ > 1) setCurrentQ(prev => prev - 1);
  };

  const sections = ['General Intelligence', 'Quantitative Aptitude', 'English Language', 'General Awareness'];

  const stats = {
    answered: qStates.filter(s => s === 2 || s === 4).length,
    notAnswered: qStates.filter(s => s === 1).length,
    marked: qStates.filter(s => s === 3 || s === 4).length,
    notVisited: qStates.filter(s => s === 0).length,
  };

  return (
    <div className="engine-layout">
      {/* Topbar */}
      <header className="engine-topbar">
        <div className="engine-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <ParikshaMitraLogo theme="dark" height={38} />
        </div>
        <div className="test-title">SSC CGL Tier 1 - Full Mock 1</div>
        <div className={`engine-timer ${timeLeft < 300 ? 'danger' : ''}`}>
          <Clock /> {formatTime(timeLeft)}
        </div>
      </header>

      {/* Sections */}
      <div className="engine-sections">
        {sections.map((sec, idx) => (
          <div key={idx} className={`section-tab ${currentSection === sec ? 'active' : ''}`}>
            {sec}
          </div>
        ))}
      </div>

      <div className="engine-body">
        {/* Left main area */}
        <div className="engine-main">
          <div className="question-header">
            <h3>Question {currentQ} of 100</h3>
            <div className="q-actions">
              <label className="mark-review">
                <input type="checkbox" checked={qStates[currentQ - 1] === 3 || qStates[currentQ - 1] === 4} onChange={handleMark} />
                <Flag size={16} /> Mark for Review
              </label>
            </div>
          </div>
          
          <div className="question-content">
            <p className="q-text">{MOCK_QUESTIONS[currentQ - 1].text}</p>
            <div className="options-container">
              {MOCK_QUESTIONS[currentQ - 1].options.map((opt, idx) => (
                <div 
                  key={idx} 
                  className={`option-card ${answers[currentQ - 1] === idx ? 'selected' : ''}`}
                  onClick={() => handleOptionSelect(idx)}
                >
                  <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="opt-text">{opt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="engine-footer-actions">
            <button className="btn-engine-clear" onClick={handleClear}>Clear Response</button>
            <div className="nav-buttons">
              <button className="btn-engine-nav" onClick={handlePrev} disabled={currentQ === 1}>
                <ChevronLeft size={20} /> Previous
              </button>
              <button className="btn-engine-nav primary" onClick={handleNext}>
                Save & Next <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Palette */}
        <div className="engine-sidebar">
          <div className="palette-section">
            <h4>Question Palette</h4>
            <div className="palette-grid">
              {qStates.map((state, idx) => (
                <div 
                  key={idx} 
                  className={`palette-box state-${state} ${currentQ === idx + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentQ(idx + 1)}
                >
                  {idx + 1}
                </div>
              ))}
            </div>
          </div>

          <div className="palette-legend">
            <div className="legend-item"><span className="box state-2">{stats.answered}</span> Answered</div>
            <div className="legend-item"><span className="box state-1">{stats.notAnswered}</span> Not Answered</div>
            <div className="legend-item"><span className="box state-0">{stats.notVisited}</span> Not Visited</div>
            <div className="legend-item"><span className="box state-3">{qStates.filter(s=>s===3).length}</span> Marked</div>
            <div className="legend-item"><span className="box state-4">{qStates.filter(s=>s===4).length}</span> Ans & Marked</div>
          </div>

          <button className="btn-engine-submit" onClick={() => setShowConfirm(true)}>
            Submit Test
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <AlertCircle size={32} color="var(--secondary)" />
              <h2>Submit Test</h2>
            </div>
            <p>Are you sure you want to submit? You still have <strong>{stats.notAnswered + stats.notVisited}</strong> unanswered questions.</p>
            <table className="summary-table">
              <tbody>
                <tr><td>Answered</td><td>{stats.answered}</td></tr>
                <tr><td>Not Answered</td><td>{stats.notAnswered}</td></tr>
                <tr><td>Marked for Review</td><td>{stats.marked}</td></tr>
                <tr><td>Not Visited</td><td>{stats.notVisited}</td></tr>
              </tbody>
            </table>
            <div className="modal-actions">
              <button className="btn-cancel" onClick={() => setShowConfirm(false)}>Cancel</button>
              <button className="btn-confirm" onClick={() => navigate('/mock-test-result')}>Yes, Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Clock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
  );
}
