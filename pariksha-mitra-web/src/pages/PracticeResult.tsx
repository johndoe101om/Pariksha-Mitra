import React, { useState } from 'react';
import { 
  CheckCircle2, XCircle, Clock, Target, ArrowRight, RotateCcw, 
  ChevronDown, ChevronUp, Award, Zap, BookOpen, Brain, Sparkles, 
  Share2, ArrowLeft, Shield, AlertTriangle, TrendingUp, Check
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PracticeResult.css';

interface ReviewQuestion {
  id: number;
  subject: string;
  topic: string;
  userOpt: number;
  correctOpt: number;
  timeSpent: string;
  status: 'correct' | 'wrong' | 'unattempted';
  textEn: string;
  textHi: string;
  options: { id: number; textEn: string; textHi: string }[];
  explanationEn: string;
  explanationHi: string;
  ncertRef: string;
}

export default function PracticeResult() {
  const navigate = useNavigate();
  const [expandedQId, setExpandedQId] = useState<number | null>(null);

  const reviewQuestions: ReviewQuestion[] = [
    {
      id: 1,
      subject: 'Quantitative Aptitude',
      topic: 'Profit & Loss',
      userOpt: 2,
      correctOpt: 2,
      timeSpent: '42s',
      status: 'correct',
      textEn: 'A shopkeeper sells an article at a loss of 12.5%. Had he sold it for ₹ 51.80 more, he would have earned a profit of 6%. What is the cost price of the article?',
      textHi: 'एक दुकानदार किसी वस्तु को 12.5% की हानि पर बेचता है। यदि उसने इसे ₹ 51.80 अधिक में बेचा होता, तो उसे 6% का लाभ होता। वस्तु का क्रय मूल्य क्या है?',
      options: [
        { id: 1, textEn: '₹ 260.00', textHi: '₹ 260.00' },
        { id: 2, textEn: '₹ 280.00', textHi: '₹ 280.00' },
        { id: 3, textEn: '₹ 320.00', textHi: '₹ 320.00' },
        { id: 4, textEn: '₹ 350.00', textHi: '₹ 350.00' }
      ],
      explanationEn: 'Let CP be x. Difference in percentages = 12.5% + 6% = 18.5%. 18.5% of x = 51.80 => x = 51.80 / 0.185 = ₹ 280.00.',
      explanationHi: 'माना क्रय मूल्य = x। प्रतिशत में अंतर = 12.5% + 6% = 18.5% = ₹ 51.80 => x = ₹ 280.00।',
      ncertRef: 'Class 8 NCERT Mathematics • Chapter 8: Comparing Quantities'
    },
    {
      id: 2,
      subject: 'Indian Polity',
      topic: 'Fundamental Rights',
      userOpt: 2,
      correctOpt: 2,
      timeSpent: '28s',
      status: 'correct',
      textEn: 'Which of the following Fundamental Rights are available to Indian citizens only and NOT to foreigners residing in India?',
      textHi: 'निम्नलिखित में से कौन से मौलिक अधिकार केवल भारतीय नागरिकों को उपलब्ध हैं, न कि भारत में रहने वाले विदेशियों को?',
      options: [
        { id: 1, textEn: 'Articles 14, 20, 21, 22', textHi: 'अनुच्छेद 14, 20, 21, 22' },
        { id: 2, textEn: 'Articles 15, 16, 19, 29, 30', textHi: 'अनुच्छेद 15, 16, 19, 29, 30' },
        { id: 3, textEn: 'Articles 21, 21A, 25, 26', textHi: 'अनुच्छेद 21, 21A, 25, 26' },
        { id: 4, textEn: 'Articles 23, 24, 27, 28', textHi: 'अनुच्छेद 23, 24, 27, 28' }
      ],
      explanationEn: 'Articles 15, 16, 19, 29, and 30 are available exclusively to Indian citizens.',
      explanationHi: 'अनुच्छेद 15, 16, 19, 29 और 30 विशेष रूप से केवल भारतीय नागरिकों को प्राप्त हैं।',
      ncertRef: 'Class 11 NCERT Political Science • Indian Constitution at Work'
    },
    {
      id: 3,
      subject: 'General Science',
      topic: 'Physics: Electricity',
      userOpt: 2,
      correctOpt: 2,
      timeSpent: '18s',
      status: 'correct',
      textEn: 'In an electric iron or toaster, which alloy is commonly used as the heating element due to its high resistivity?',
      textHi: 'इलेक्ट्रिक आयरन में उच्च प्रतिरोधकता के कारण हीटिंग तत्व के रूप में किस मिश्र धातु का उपयोग किया जाता है?',
      options: [
        { id: 1, textEn: 'Copper (तांबा)', textHi: 'कॉपर (तांबा)' },
        { id: 2, textEn: 'Nichrome (नाइक्रोम)', textHi: 'नाइक्रोम (Nichrome)' },
        { id: 3, textEn: 'Tungsten (टंगस्टन)', textHi: 'टंगस्टन (Tungsten)' },
        { id: 4, textEn: 'Constantan (कॉन्स्टेंटन)', textHi: 'कॉन्स्टेंटन (Constantan)' }
      ],
      explanationEn: 'Nichrome has high electrical resistivity and high resistance to oxidation.',
      explanationHi: 'नाइक्रोम की विद्युत प्रतिरोधकता अधिक होती है और यह उच्च तापमान पर ऑक्सीकृत नहीं होता।',
      ncertRef: 'Class 10 NCERT Science • Chapter 12: Electricity'
    },
    {
      id: 4,
      subject: 'Reasoning',
      topic: 'Syllogism',
      userOpt: 1,
      correctOpt: 3,
      timeSpent: '65s',
      status: 'wrong',
      textEn: 'Statements: Some rivers are lakes. All lakes are oceans. No ocean is a pond. Conclusions: I. At least some rivers are oceans. II. No lake is a pond.',
      textHi: 'कथन: कुछ नदियाँ झीलें हैं। सभी झीलें महासागर हैं। कोई महासागर तालाब नहीं है। निष्कर्ष: I. कम से कम कुछ नदियाँ महासागर हैं। II. कोई झील तालाब नहीं है।',
      options: [
        { id: 1, textEn: 'Only Conclusion I follows', textHi: 'केवल निष्कर्ष I अनुसरण करता है' },
        { id: 2, textEn: 'Only Conclusion II follows', textHi: 'केवल निष्कर्ष II अनुसरण करता है' },
        { id: 3, textEn: 'Both Conclusions I and II follow', textHi: 'निष्कर्ष I और II दोनों अनुसरण करते हैं' },
        { id: 4, textEn: 'Neither Conclusion follows', textHi: 'कोई भी निष्कर्ष अनुसरण नहीं करता है' }
      ],
      explanationEn: 'Both I and II follow. Rivers intersecting lakes are in oceans, and no lake can be a pond because no ocean is a pond.',
      explanationHi: 'दोनों निष्कर्ष I और II सही हैं। महासागर और तालाब में कोई संबंध नहीं होने से झील और तालाब में भी कोई संबंध नहीं हो सकता।',
      ncertRef: 'Standard Logical Deductive Reasoning Compendium'
    },
    {
      id: 5,
      subject: 'Modern History',
      topic: 'Freedom Struggle',
      userOpt: 2,
      correctOpt: 2,
      timeSpent: '22s',
      status: 'correct',
      textEn: 'Who presided over the historic 1929 Lahore Session of the Indian National Congress where Purna Swaraj was passed?',
      textHi: '1929 के लाहौर अधिवेशन की अध्यक्षता किसने की थी जहाँ पूर्ण स्वराज का प्रस्ताव पारित हुआ था?',
      options: [
        { id: 1, textEn: 'Mahatma Gandhi', textHi: 'महात्मा गांधी' },
        { id: 2, textEn: 'Jawaharlal Nehru', textHi: 'जवाहरलाल नेहरू' },
        { id: 3, textEn: 'Subhas Chandra Bose', textHi: 'सुभाष चंद्र बोस' },
        { id: 4, textEn: 'Sardar Vallabhbhai Patel', textHi: 'सरदार वल्लभभाई पटेल' }
      ],
      explanationEn: 'Jawaharlal Nehru presided over the 1929 Lahore Session of the INC.',
      explanationHi: 'पंडित जवाहरलाल नेहरू ने 1929 के लाहौर अधिवेशन की अध्यक्षता की थी।',
      ncertRef: 'Class 12 NCERT Themes in Indian History (Part III)'
    }
  ];

  const totalQs = reviewQuestions.length;
  const correctCount = reviewQuestions.filter(q => q.status === 'correct').length;
  const wrongCount = reviewQuestions.filter(q => q.status === 'wrong').length;
  const accuracyPct = Math.round((correctCount / totalQs) * 100);
  const netScore = (correctCount * 2.0 - wrongCount * 0.50).toFixed(2);

  const toggleExpand = (id: number) => {
    setExpandedQId(prev => prev === id ? null : id);
  };

  return (
    <div className="practice-result-root">
      {/* Header Banner */}
      <div className="result-top-banner">
        <button className="btn-back-hub" onClick={() => navigate('/practice')}>
          <ArrowLeft size={16} /> Back to Practice Hub
        </button>
        <div className="res-banner-center">
          <div className="res-national-rank-chip">
            <Award size={16} color="#FFD54F" /> Top 8% All-India Percentile • National Rank #1,248
          </div>
          <h1>Practice Performance Report <span className="hi">अभ्यास परिणाम सारांश</span></h1>
          <p>Adaptive CBT Diagnostic Assessment • 5 Questions Solved in 2m 55s</p>
        </div>
        <button className="btn-share-result" onClick={() => window.print()}>
          <Share2 size={16} /> Export Report
        </button>
      </div>

      {/* Main Scorecard & KPI Row */}
      <div className="result-summary-grid">
        {/* Left Score Gauge Card */}
        <div className="score-summary-card">
          <div className="gauge-circle-container">
            <svg viewBox="0 0 36 36" className="circular-score-svg">
              <path 
                className="score-circle-bg" 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
              />
              <path 
                className="score-circle-fill" 
                strokeDasharray={`${accuracyPct}, 100`} 
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
              />
            </svg>
            <div className="gauge-inner-stats">
              <span className="gauge-score-value">{accuracyPct}%</span>
              <span className="gauge-score-label">Accuracy</span>
            </div>
          </div>

          <div className="score-grade-badge">
            <strong>Excellent Mastery!</strong>
            <span>Net Score: <strong>+{netScore}</strong> / 10.00</span>
          </div>
        </div>

        {/* Right 4-Stat Metric Tiles */}
        <div className="kpi-metrics-tiles-grid">
          <div className="metric-tile green">
            <div className="tile-icon-box">
              <CheckCircle2 size={22} color="#15803D" />
            </div>
            <div className="tile-text">
              <span className="tile-value">{correctCount} Correct</span>
              <span className="tile-sub">+{(correctCount * 2.0).toFixed(1)} Marks Earned</span>
            </div>
          </div>

          <div className="metric-tile red">
            <div className="tile-icon-box">
              <XCircle size={22} color="#DC2626" />
            </div>
            <div className="tile-text">
              <span className="tile-value">{wrongCount} Incorrect</span>
              <span className="tile-sub">-{(wrongCount * 0.50).toFixed(2)} Negative Penalty</span>
            </div>
          </div>

          <div className="metric-tile blue">
            <div className="tile-icon-box">
              <Clock size={22} color="#0033A0" />
            </div>
            <div className="tile-text">
              <span className="tile-value">35s / Q</span>
              <span className="tile-sub">Average Speed (Target: 45s)</span>
            </div>
          </div>

          <div className="metric-tile purple">
            <div className="tile-icon-box">
              <TrendingUp size={22} color="#7C3AED" />
            </div>
            <div className="tile-text">
              <span className="tile-value">92.4%</span>
              <span className="tile-sub">Concept Retention Index</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Buttons */}
      <div className="result-actions-strip">
        <button className="btn-retry-weak-topics" onClick={() => navigate('/practice')}>
          <RotateCcw size={16} /> Practice Weak Topics Drill (Syllogism)
        </button>
        <button className="btn-start-next-practice" onClick={() => navigate('/practice')}>
          Start Next Chapter Drill <ArrowRight size={16} />
        </button>
      </div>

      {/* Topic Breakdown & Diagnostic Insights */}
      <div className="result-diagnostic-section">
        <div className="diag-header">
          <h2>Subject & Chapter Analysis <span className="hi">विषयवार दक्षता विश्लेषण</span></h2>
          <span className="diag-badge-rec">Adaptive Recommendation Ready</span>
        </div>

        <div className="topic-analysis-table-card">
          <div className="topic-table-header">
            <div>Subject & Topic</div>
            <div>Questions</div>
            <div>Result</div>
            <div>Time Taken</div>
            <div>Status</div>
          </div>

          {[
            { subject: 'Quantitative Aptitude', topic: 'Profit & Loss', q: 1, correct: 1, time: '42s', acc: '100%', status: 'Mastered' },
            { subject: 'Indian Polity & Law', topic: 'Fundamental Rights', q: 1, correct: 1, time: '28s', acc: '100%', status: 'Mastered' },
            { subject: 'General Science', topic: 'Physics: Thermodynamics', q: 1, correct: 1, time: '18s', acc: '100%', status: 'Mastered' },
            { subject: 'Reasoning & Logic', topic: 'Syllogism & Deductive Logic', q: 1, correct: 0, time: '65s', acc: '0%', status: 'Needs Revision' },
            { subject: 'Modern History', topic: 'Freedom Struggle (1919-1947)', q: 1, correct: 1, time: '22s', acc: '100%', status: 'Mastered' }
          ].map((row, idx) => (
            <div key={idx} className={`topic-table-row ${row.status === 'Needs Revision' ? 'weak-row' : ''}`}>
              <div className="col-topic-name">
                <strong>{row.topic}</strong>
                <small>{row.subject}</small>
              </div>
              <div>{row.q} Q</div>
              <div>{row.correct}/{row.q} ({row.acc})</div>
              <div>{row.time}</div>
              <div>
                <span className={`status-pill ${row.status === 'Mastered' ? 'mastered' : 'revision'}`}>
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Question-by-Question Solution Review */}
      <div className="result-review-section">
        <div className="review-section-head">
          <h2>Detailed Question Review & NCERT Explanations <span className="hi">विस्तृत समाधान</span></h2>
          <p>Click any question to view step-by-step solution, mathematical formulas, and official citations.</p>
        </div>

        <div className="review-accordion-list">
          {reviewQuestions.map((q, idx) => {
            const isExpanded = expandedQId === q.id;
            return (
              <div key={q.id} className={`review-accordion-card ${isExpanded ? 'expanded' : ''}`}>
                <div className="review-card-head" onClick={() => toggleExpand(q.id)}>
                  <div className="head-left">
                    <span className={`q-status-chip ${q.status}`}>
                      {q.status === 'correct' ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                      Q{idx + 1}
                    </span>
                    <span className="q-head-topic">{q.subject} • {q.topic}</span>
                  </div>

                  <div className="head-right">
                    <span className="q-time-spent"><Clock size={13} /> {q.timeSpent}</span>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>

                <div className="review-snippet-preview">
                  <p>{q.textEn}</p>
                </div>

                {isExpanded && (
                  <div className="review-expanded-content">
                    {/* Hindi Translation */}
                    <div className="hindi-trans-box">
                      <p className="hindi-font">{q.textHi}</p>
                    </div>

                    {/* Options Review */}
                    <div className="review-options-grid">
                      {q.options.map(opt => {
                        const isCorrect = opt.id === q.correctOpt;
                        const isUserChoice = opt.id === q.userOpt;
                        let optClass = 'review-opt-tile';
                        if (isCorrect) optClass += ' correct';
                        else if (isUserChoice && !isCorrect) optClass += ' wrong';

                        return (
                          <div key={opt.id} className={optClass}>
                            <span className="opt-marker">
                              {String.fromCharCode(64 + opt.id)}
                            </span>
                            <div className="opt-names">
                              <strong>{opt.textEn}</strong>
                              <span className="hindi-font">{opt.textHi}</span>
                            </div>
                            {isCorrect && <span className="badge-correct-choice">✓ Correct Answer</span>}
                            {isUserChoice && !isCorrect && <span className="badge-user-choice">✕ Your Choice</span>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Full Explanation */}
                    <div className="review-explanation-box">
                      <div className="exp-head">
                        <Sparkles size={16} color="#0033A0" />
                        <strong>Step-by-Step Conceptual Breakdown:</strong>
                      </div>
                      <p className="exp-en">{q.explanationEn}</p>
                      <p className="exp-hi hindi-font">{q.explanationHi}</p>
                      <div className="ncert-citation-strip">
                        <BookOpen size={14} /> Official Reference: <strong>{q.ncertRef}</strong>
                      </div>
                    </div>

                    {/* Ask AI Doubt Button */}
                    <div className="review-card-footer">
                      <button className="btn-ai-doubt-launch" onClick={() => navigate('/doubt-solver')}>
                        <Brain size={15} /> Ask AI Doubt Solver about Question #{idx + 1}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

