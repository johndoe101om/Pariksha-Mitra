import React, { useState } from 'react';
import { 
  Calendar, PlayCircle, PauseCircle, Download, FileText, CheckCircle, 
  Search, TrendingUp, Newspaper, Volume2, Sparkles, ShieldCheck, 
  CheckCircle2, ArrowRight, Share2, Bookmark, Flame
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './CurrentAffairs.css';

const categories = ['All Topics', 'Economy & Banking', 'Polity & Governance', 'Science & Tech', 'International Relations', 'Environment & Ecology'];

const mockNews = [
  {
    id: 1,
    headline: 'RBI Announces New Liquidity Management Framework to Combat Inflation',
    summary: 'The Reserve Bank of India introduced a refined standing deposit facility (SDF) and maintained the benchmark repo rate at 6.50% to align headline CPI inflation with the 4% target.',
    category: 'Economy & Banking',
    source: 'The Hindu & PIB',
    appearedIn: 'High Probability for SSC CGL Tier 1 & SBI PO',
    examTag: 'GS Paper 3 / Banking',
    date: '22 Aug 2026',
    audioDuration: '03:45 min'
  },
  {
    id: 2,
    headline: 'ISRO Successfully Places EOS-08 Satellite into Orbit via SSLV-D3',
    summary: 'Indian Space Research Organisation accomplished the third developmental flight of the Small Satellite Launch Vehicle (SSLV-D3) from Satish Dhawan Space Centre, Sriharikota.',
    category: 'Science & Tech',
    source: 'PIB Press Release',
    appearedIn: 'UPSC CSE Prelims & CDS 2026',
    examTag: 'Science & Space Tech',
    date: '21 Aug 2026',
    audioDuration: '02:30 min'
  },
  {
    id: 3,
    headline: 'Digital Personal Data Protection (DPDP) Rules Notified by MeitY',
    summary: 'The statutory framework establishes the Data Protection Board of India and delineates rights of Principal Data Owners, introducing stringent consent architectures for intermediaries.',
    category: 'Polity & Governance',
    source: 'Indian Express & Gazette of India',
    appearedIn: 'UPSC GS-2 & SSC GA',
    examTag: 'Governance & Fundamental Rights',
    date: '20 Aug 2026',
    audioDuration: '04:10 min'
  },
];

const mockQuiz = [
  { 
    id: 1, 
    question: 'Which launch vehicle was utilized by ISRO for launching the EOS-08 Earth Observation Satellite?', 
    options: ['PSLV-C58', 'GSLV-MkIII', 'SSLV-D3', 'LVM3-M4'], 
    correct: 2,
    explanation: 'ISRO used the Small Satellite Launch Vehicle (SSLV-D3) on its third developmental flight from Sriharikota.'
  },
  { 
    id: 2, 
    question: 'Under the Digital Personal Data Protection Act, which statutory body adjudicates data breaches?', 
    options: ['TRAI', 'Data Protection Board of India', 'NITI Aayog', 'Central Vigilance Commission'], 
    correct: 1,
    explanation: 'The Data Protection Board of India is established under the DPDP Act to inquire into non-compliance and impose penalties.'
  },
];

export const CurrentAffairs: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  const filteredNews = activeCategory === 'All Topics' 
    ? mockNews 
    : mockNews.filter(n => n.category === activeCategory);

  const handleSelectOption = (qId: number, optIdx: number) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
    setShowExplanation(prev => ({ ...prev, [qId]: true }));
  };

  return (
    <div className="ca-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Current Affairs Digest', labelHi: 'दैनिक समसामयिकी' }
        ]}
        title="Daily Current Affairs & PIB Digest"
        titleHi="राष्ट्रीय दैनिक समसामयिकी व पीआईबी डाइजेस्ट"
        description="Exam-curated daily news briefs, bilingual audio summaries, and 5-question daily recall quizzes mapped to official syllabi."
        descriptionHi="प्रतियोगी परीक्षाओं के लिए दैनिक समाचार, ऑडियो सारांश और 5-प्रश्नोत्तरी।"
        icon={<Newspaper size={28} />}
        badge="PIB & Govt. Gazette Verified"
        actions={
          <div className="ca-hero-pdf-pill">
            <Download size={14} color="#FFD54F" /> <span>Download Today's PDF Digest</span>
          </div>
        }
      />

      <main role="main" className="ca-workspace">
        {/* Audio Briefing Player Banner */}
        <section className="ca-card audio-briefing-card" aria-label="Daily Audio Briefing Player">
          <div className="ab-left">
            <button 
              className={`ab-play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause 5-minute audio briefing' : 'Play 5-minute audio briefing'}
            >
              {isPlaying ? <PauseCircle size={32} /> : <PlayCircle size={32} />}
            </button>
            <div className="ab-texts">
              <div className="ab-title-row">
                <span className="ab-badge">🎙️ 5-Minute Morning Audio Digest</span>
                <span className="ab-date">22 August 2026</span>
              </div>
              <h3 className="ab-headline">Top 7 National & Economic Updates for UPSC, SSC, & Banking</h3>
              <div className="ab-progress-row">
                <div className="ab-bar"><div className="ab-bar-fill" style={{ width: isPlaying ? '45%' : '0%' }}></div></div>
                <span className="ab-time">{isPlaying ? '02:15 / 05:00' : '05:00 min'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Category Chips */}
        <div className="ca-category-chips-row" role="tablist">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`ca-cat-chip ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 2-Column Grid: News Feed + Daily 5-MCQ Quiz Card */}
        <div className="ca-dual-grid">
          {/* Left Column: Curated News Feed */}
          <div className="ca-feed-column">
            <div className="ca-news-list">
              {filteredNews.map(item => (
                <article key={item.id} className="ca-news-card">
                  <div className="news-top-row">
                    <span className="news-cat-pill">{item.category}</span>
                    <span className="news-source-tag">{item.source} • {item.date}</span>
                  </div>

                  <h3 className="news-headline">{item.headline}</h3>
                  <p className="news-summary">{item.summary}</p>

                  <div className="news-exam-relevance">
                    <Flame size={14} color="#FE6500" />
                    <strong>Exam Target:</strong> <span>{item.appearedIn}</span>
                  </div>

                  <div className="news-card-footer">
                    <span className="news-audio-duration"><Volume2 size={13} /> {item.audioDuration} Audio Note</span>
                    <button className="news-bookmark-btn"><Bookmark size={14} /> Save for Revision</button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Column: Daily 5-MCQ Recall Quiz Card */}
          <div className="ca-quiz-column">
            <section className="ca-card quiz-card" aria-labelledby="quiz-head">
              <div className="qcard-head">
                <div className="qcard-title-group">
                  <Sparkles size={18} color="#FE6500" />
                  <h2 id="quiz-head" className="qcard-title">
                    Daily 5-MCQ Recall Quiz <span className="hi">दैनिक अभ्यास क्विज़</span>
                  </h2>
                </div>
                <span className="qcard-count">Score: {Object.keys(selectedAnswers).length}/5</span>
              </div>

              <div className="quiz-questions-list">
                {mockQuiz.map((q, qIdx) => {
                  const userAns = selectedAnswers[q.id];
                  const isAnswered = userAns !== undefined;

                  return (
                    <div key={q.id} className="quiz-item-block">
                      <h4 className="q-title">Q{qIdx + 1}. {q.question}</h4>

                      <div className="q-options-list">
                        {q.options.map((opt, optIdx) => {
                          let optClass = 'q-opt-btn';
                          if (isAnswered) {
                            if (optIdx === q.correct) optClass += ' correct';
                            else if (userAns === optIdx) optClass += ' wrong';
                          }

                          return (
                            <button
                              key={optIdx}
                              className={optClass}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={isAnswered}
                            >
                              <span className="opt-letter">{String.fromCharCode(65 + optIdx)}</span>
                              <span className="opt-txt">{opt}</span>
                            </button>
                          );
                        })}
                      </div>

                      {showExplanation[q.id] && (
                        <div className="q-explanation-box">
                          <strong>{userAns === q.correct ? '✓ Correct Answer!' : '✗ Incorrect'}</strong>
                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default CurrentAffairs;
