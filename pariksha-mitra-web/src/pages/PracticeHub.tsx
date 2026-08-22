import React, { useState } from 'react';
import { Clock, CheckCircle, XCircle, AlertCircle, Bookmark, ChevronLeft, ChevronRight, BookOpen, Brain, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PracticeHub.css';

export default function PracticeHub() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('daily');
  const [isPracticing, setIsPracticing] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const subjects = [
    { name: 'General Studies', total: 500, done: 120 },
    { name: 'Quantitative Aptitude', total: 1000, done: 450 },
    { name: 'English Language', total: 800, done: 200 },
    { name: 'Reasoning', total: 600, done: 300 },
    { name: 'History', total: 400, done: 50 },
    { name: 'Geography', total: 350, done: 30 },
    { name: 'Polity', total: 300, done: 150 },
    { name: 'Economy', total: 250, done: 20 }
  ];

  const handleStartPractice = () => {
    setIsPracticing(true);
  };

  const handleSubmit = () => {
    navigate('/practice/result');
  };

  if (isPracticing) {
    return (
      <div className="practice-session-container">
        <div className="ps-header">
          <div className="ps-nav" onClick={() => setIsPracticing(false)}>
            <ChevronLeft size={20} /> Exit
          </div>
          <div className="ps-meta">
            <span className="q-count">Q. 5 of 20</span>
            <span className="q-topic">Quantitative Aptitude • Profit & Loss</span>
          </div>
          <div className="ps-timer">
            <Clock size={18} /> 12:45
          </div>
        </div>

        <div className="ps-main">
          <div className="question-card">
            <div className="q-badges">
              <span className="badge-diff medium">Medium</span>
              <span className="badge-pyq">SSC CGL 2022</span>
            </div>
            
            <div className="q-text">
              <p>A shopkeeper sells an article at a loss of 12.5%. Had he sold it for ₹ 51.80 more, he would have earned a profit of 6%. The cost price of the article is:</p>
              <p className="hi">एक दुकानदार किसी वस्तु को 12.5% की हानि पर बेचता है। यदि उसने इसे ₹ 51.80 अधिक में बेचा होता, तो उसे 6% का लाभ होता। वस्तु का क्रय मूल्य है:</p>
            </div>

            <div className="q-options">
              {[
                { id: 1, text: '₹ 280' },
                { id: 2, text: '₹ 300' },
                { id: 3, text: '₹ 380' },
                { id: 4, text: '₹ 400' }
              ].map((opt) => (
                <div 
                  key={opt.id} 
                  className={`option-card ${selectedOption === opt.id ? 'selected' : ''}`}
                  onClick={() => setSelectedOption(opt.id)}
                >
                  <div className="opt-radio">
                    {selectedOption === opt.id && <div className="opt-radio-inner"></div>}
                  </div>
                  <span className="opt-text">{opt.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ps-footer">
          <button className="btn-secondary"><ChevronLeft size={18} /> Previous</button>
          <div className="footer-actions">
            <button className="btn-icon"><Bookmark size={18} /> Bookmark</button>
            <button className="btn-secondary">Skip</button>
            <button className="btn-primary" onClick={handleSubmit}>Submit & Next <ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="practice-hub-container">
      <div className="ph-header">
        <h1>Practice Hub <span className="hi">अभ्यास केंद्र</span></h1>
        <p>Master your subjects with adaptive practice</p>
      </div>

      <div className="ph-tabs">
        <button className={`tab-btn ${activeTab === 'daily' ? 'active' : ''}`} onClick={() => setActiveTab('daily')}>
          <Clock size={18} /> Daily Practice
        </button>
        <button className={`tab-btn ${activeTab === 'subject' ? 'active' : ''}`} onClick={() => setActiveTab('subject')}>
          <BookOpen size={18} /> Subject-wise
        </button>
        <button className={`tab-btn ${activeTab === 'pyq' ? 'active' : ''}`} onClick={() => setActiveTab('pyq')}>
          <List size={18} /> PYQ Bank
        </button>
        <button className={`tab-btn ${activeTab === 'custom' ? 'active' : ''}`} onClick={() => setActiveTab('custom')}>
          <Brain size={18} /> Custom Quiz
        </button>
      </div>

      <div className="ph-content">
        {activeTab === 'daily' && (
          <>
            <div className="daily-challenge-card">
              <div className="dc-info">
                <span className="badge-today">TODAY'S CHALLENGE</span>
                <h2>Daily Current Affairs Quiz</h2>
                <p>15 Questions • 10 Minutes • +2 Marks for correct, -0.5 for incorrect</p>
              </div>
              <button className="btn-start-large" onClick={handleStartPractice}>Start Challenge</button>
            </div>

            <h3 className="section-title">Subject Breakdown <span className="hi">विषयवार</span></h3>
            <div className="subjects-grid">
              {subjects.map((sub, idx) => {
                const percent = Math.round((sub.done / sub.total) * 100);
                return (
                  <div key={idx} className="subject-card">
                    <div className="sub-header">
                      <h4>{sub.name}</h4>
                      <div className="progress-ring">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                          <path className="circle-bg"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path className="circle"
                            strokeDasharray={`${percent}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <text x="18" y="20.35" className="percentage">{percent}%</text>
                        </svg>
                      </div>
                    </div>
                    <div className="sub-stats">
                      <span>{sub.done}/{sub.total} Qs</span>
                      <span className="acc">Accuracy: 85%</span>
                    </div>
                    <button className="btn-practice-sub" onClick={handleStartPractice}>Practice <ChevronRight size={16} /></button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
