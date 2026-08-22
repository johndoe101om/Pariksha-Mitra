import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Play, CheckCircle, Lock, Calendar, Filter, ChevronDown, Clock, 
  BookOpen, Award, RotateCcw, BarChart2, Shield, Sparkles, 
  AlertCircle, ArrowRight, Download, Users, Bell, Search, Star,
  TrendingUp, CheckCircle2, ChevronRight, Zap
} from 'lucide-react';
import './MockTestHub.css';

interface MockTestItem {
  id: number;
  title: string;
  category: string;
  format: 'full' | 'sectional' | 'mini' | 'pyp' | 'live';
  duration: number; // mins
  questions: number;
  marks: number;
  negativeMark: string;
  difficulty: 'Easy' | 'Moderate' | 'High-Yield' | 'Hard';
  status: 'new' | 'attempted' | 'live-upcoming';
  score?: number;
  percentile?: number;
  rank?: number;
  attemptsCount: number;
  liveDate?: string;
  tags: string[];
}

export default function MockTestHub() {
  const navigate = useNavigate();

  const [activeFormat, setActiveFormat] = useState<'all' | 'full' | 'sectional' | 'mini' | 'pyp' | 'live'>('all');
  const [selectedExam, setSelectedExam] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [registeredLive, setRegisteredLive] = useState<{ [key: number]: boolean }>({});

  const mockTestsData: MockTestItem[] = [
    {
      id: 1,
      title: 'UPSC CSE Prelims 2026 - All India Full Mock #1',
      category: 'UPSC CSE',
      format: 'full',
      duration: 120,
      questions: 100,
      marks: 200,
      negativeMark: '-0.66',
      difficulty: 'High-Yield',
      status: 'attempted',
      score: 142,
      percentile: 94.5,
      rank: 421,
      attemptsCount: 38450,
      tags: ['GS Paper 1', 'NTA Pattern', 'Bilingual']
    },
    {
      id: 2,
      title: 'UPSC CSE Prelims 2026 - All India Full Mock #2',
      category: 'UPSC CSE',
      format: 'full',
      duration: 120,
      questions: 100,
      marks: 200,
      negativeMark: '-0.66',
      difficulty: 'High-Yield',
      status: 'new',
      attemptsCount: 29120,
      tags: ['GS Paper 1', 'Curated by AIR 14', 'Detailed Solutions']
    },
    {
      id: 3,
      title: 'National Live Championship: All-India UPSC Prelims Open Mock',
      category: 'UPSC CSE',
      format: 'live',
      duration: 120,
      questions: 100,
      marks: 200,
      negativeMark: '-0.66',
      difficulty: 'Hard',
      status: 'live-upcoming',
      liveDate: 'Sunday, 10:00 AM',
      attemptsCount: 64200,
      tags: ['Live All-India Rank', 'Ministry Merit Certificate', 'Cash Prizes']
    },
    {
      id: 4,
      title: 'SSC CGL 2026 Tier-1 - Full Mock Test #1',
      category: 'SSC CGL',
      format: 'full',
      duration: 60,
      questions: 100,
      marks: 200,
      negativeMark: '-0.50',
      difficulty: 'Moderate',
      status: 'new',
      attemptsCount: 45200,
      tags: ['Quant & Reasoning', 'English', 'General Awareness']
    },
    {
      id: 5,
      title: 'SSC CGL Tier-1 - Speed Reasoning & Quant Sectional',
      category: 'SSC CGL',
      format: 'sectional',
      duration: 30,
      questions: 50,
      marks: 100,
      negativeMark: '-0.50',
      difficulty: 'Easy',
      status: 'attempted',
      score: 88,
      percentile: 91.2,
      rank: 820,
      attemptsCount: 22400,
      tags: ['Sectional Blitz', 'Shortcuts Enabled']
    },
    {
      id: 6,
      title: 'Indian Polity & Constitution - Sectional Mastery Test',
      category: 'UPSC CSE',
      format: 'sectional',
      duration: 45,
      questions: 40,
      marks: 80,
      negativeMark: '-0.66',
      difficulty: 'Moderate',
      status: 'new',
      attemptsCount: 18900,
      tags: ['Articles 1-51A', 'Judiciary', 'Amendments']
    },
    {
      id: 7,
      title: 'Daily Current Affairs Mini Mock - August Week 3',
      category: 'All',
      format: 'mini',
      duration: 15,
      questions: 20,
      marks: 40,
      negativeMark: '-0.33',
      difficulty: 'Moderate',
      status: 'new',
      attemptsCount: 52100,
      tags: ['Daily Sprint', 'The Hindu & PIB Summary']
    },
    {
      id: 8,
      title: 'UPSC CSE Prelims 2024 - Official Solved Paper with AI Breakdown',
      category: 'UPSC CSE',
      format: 'pyp',
      duration: 120,
      questions: 100,
      marks: 200,
      negativeMark: '-0.66',
      difficulty: 'High-Yield',
      status: 'new',
      attemptsCount: 88200,
      tags: ['Official UPSC Paper', 'Cutoff: 75.41', 'Key Explanations']
    },
    {
      id: 9,
      title: 'IBPS PO Prelims 2026 - Speed Full Mock #1',
      category: 'Banking',
      format: 'full',
      duration: 60,
      questions: 100,
      marks: 100,
      negativeMark: '-0.25',
      difficulty: 'Moderate',
      status: 'new',
      attemptsCount: 31000,
      tags: ['Sectional Timers', 'Banking Awareness']
    },
    {
      id: 10,
      title: 'Railway RRB NTPC Stage 1 - Comprehensive Mock #1',
      category: 'Railways',
      format: 'full',
      duration: 90,
      questions: 100,
      marks: 100,
      negativeMark: '-0.33',
      difficulty: 'Easy',
      status: 'new',
      attemptsCount: 34500,
      tags: ['General Science', 'General Awareness']
    }
  ];

  const handleRegisterLive = (id: number) => {
    setRegisteredLive(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredTests = useMemo(() => {
    return mockTestsData.filter(test => {
      // Format match
      if (activeFormat !== 'all' && test.format !== activeFormat) return false;
      // Exam match
      if (selectedExam !== 'All' && test.category !== selectedExam && test.category !== 'All') return false;
      // Difficulty match
      if (selectedDifficulty !== 'All' && test.difficulty !== selectedDifficulty) return false;
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = test.title.toLowerCase().includes(query);
        const matchesCategory = test.category.toLowerCase().includes(query);
        const matchesTags = test.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesCategory && !matchesTags) return false;
      }
      return true;
    });
  }, [activeFormat, selectedExam, selectedDifficulty, searchQuery]);

  return (
    <div className="mock-hub-page-container">
      {/* Top Banner Hero */}
      <section className="mock-hero-banner">
        <div className="mock-hero-grid">
          <div className="hero-left-content">
            <div className="hero-badge-strip">
              <span className="gov-seal-pill">
                <Shield size={14} /> Official NTA & UPSC CBT Pattern Simulation
              </span>
              <span className="free-seal-pill">100% Free Sovereign Seat</span>
            </div>
            <h1>All-India Mock Test Hub / अखिल भारतीय मॉक टेस्ट हब</h1>
            <p>
              Simulate real examination conditions with timer countdowns, sectional cutoffs, negative marking, and instant All-India AI percentile analytics.
            </p>

            {/* Test KPI Ribbon */}
            <div className="hero-stats-ribbon">
              <div className="hero-stat-box">
                <span className="hstat-val">14 Mocks</span>
                <span className="hstat-label">Tests Completed</span>
              </div>
              <div className="hero-stat-sep"></div>
              <div className="hero-stat-box">
                <span className="hstat-val">89.4%ile</span>
                <span className="hstat-label">Average Percentile</span>
              </div>
              <div className="hero-stat-sep"></div>
              <div className="hero-stat-box">
                <span className="hstat-val">#421</span>
                <span className="hstat-label">Best National Rank</span>
              </div>
              <div className="hero-stat-sep"></div>
              <div className="hero-stat-box">
                <span className="hstat-val">48s / Q</span>
                <span className="hstat-label">Average Speed</span>
              </div>
            </div>
          </div>

          <div className="hero-right-cta">
            <div className="live-championship-teaser" onClick={() => navigate('/mock-tests/3')}>
              <div className="teaser-top-row">
                <span className="live-badge-glow">🔴 LIVE THIS SUNDAY</span>
                <Clock size={15} />
              </div>
              <h4>All-India National UPSC Prelims Open Championship</h4>
              <p>Compete with 60,000+ aspirants nationwide. Instant merit rankings & solutions.</p>
              <button className="btn-teaser-register">
                Register Free for Live Test <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Filtering Toolbar */}
      <section className="mock-filter-card">
        {/* Format Selector Pills */}
        <div className="format-pills-row">
          {[
            { id: 'all', label: '🌟 All Tests' },
            { id: 'full', label: '📜 Full Length Mocks' },
            { id: 'sectional', label: '📑 Sectional Tests' },
            { id: 'mini', label: '⚡ Mini Speed Mocks' },
            { id: 'pyp', label: '🏛️ Previous Year Papers (PYPs)' },
            { id: 'live', label: '🔴 Live Championships' }
          ].map(fmt => (
            <button
              key={fmt.id}
              className={`format-pill-btn ${activeFormat === fmt.id ? 'active' : ''}`}
              onClick={() => setActiveFormat(fmt.id as any)}
            >
              {fmt.label}
            </button>
          ))}
        </div>

        {/* Sub-Filters Row: Exam, Difficulty, Search */}
        <div className="subfilters-bar-row">
          <div className="filter-dropdown-group">
            <label>Target Exam:</label>
            <select value={selectedExam} onChange={(e) => setSelectedExam(e.target.value)}>
              <option value="All">All Competitive Exams</option>
              <option value="UPSC CSE">UPSC Civil Services (CSE)</option>
              <option value="SSC CGL">SSC CGL / CHSL</option>
              <option value="Banking">IBPS / SBI Bank PO & Clerk</option>
              <option value="Railways">Railway RRB NTPC</option>
            </select>
          </div>

          <div className="filter-dropdown-group">
            <label>Difficulty Level:</label>
            <select value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
              <option value="All">All Difficulties</option>
              <option value="Easy">Easy (Foundation)</option>
              <option value="Moderate">Moderate (Exam Level)</option>
              <option value="High-Yield">High-Yield (Top Rankers)</option>
              <option value="Hard">Hard (Challenger)</option>
            </select>
          </div>

          <div className="search-input-box">
            <Search size={16} className="search-ico" />
            <input 
              type="text" 
              placeholder="Search tests by subject, topic or year..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2-Column Grid: Left Mock Test Directory + Right Sidebar Widgets */}
      <div className="mock-directory-layout">
        {/* Left Column: Test Cards Grid */}
        <div className="mock-cards-column">
          <div className="directory-header-row">
            <h3>Available Mock Test Series ({filteredTests.length} Tests)</h3>
            <span className="directory-sub">Official NTA Marking Scheme & Solutions Included</span>
          </div>

          <div className="test-cards-grid">
            {filteredTests.map((test) => {
              const isLiveRegistered = !!registeredLive[test.id];

              return (
                <div 
                  key={test.id} 
                  className={`mock-test-item-card ${test.status === 'attempted' ? 'attempted-card' : ''} ${test.format === 'live' ? 'live-special-card' : ''}`}
                >
                  {/* Card Header */}
                  <div className="card-top-badges">
                    <div className="badges-left">
                      <span className="exam-cat-pill">{test.category}</span>
                      <span className={`diff-pill ${test.difficulty.toLowerCase().replace('-', '')}`}>
                        {test.difficulty}
                      </span>
                    </div>

                    {test.format === 'live' && (
                      <span className="live-countdown-badge">
                        <Clock size={13} /> {test.liveDate}
                      </span>
                    )}

                    {test.status === 'attempted' && (
                      <span className="attempted-status-badge">
                        <CheckCircle2 size={13} /> Completed
                      </span>
                    )}
                  </div>

                  {/* Title & Tags */}
                  <h3 className="test-card-title">{test.title}</h3>

                  <div className="test-tags-list">
                    {test.tags.map(tag => (
                      <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                  </div>

                  {/* Test Parameters Bar */}
                  <div className="test-params-ribbon">
                    <div className="param-item">
                      <Clock size={15} color="#0033A0" />
                      <span>{test.duration} Mins</span>
                    </div>
                    <div className="param-item">
                      <BookOpen size={15} color="#FE6500" />
                      <span>{test.questions} Questions</span>
                    </div>
                    <div className="param-item">
                      <Award size={15} color="#024A00" />
                      <span>{test.marks} Marks</span>
                    </div>
                    <div className="param-item">
                      <AlertCircle size={15} color="#DC2626" />
                      <span>{test.negativeMark} Neg.</span>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="test-card-footer-box">
                    {test.status === 'new' && (
                      <div className="footer-action-row">
                        <span className="attempts-count-text">
                          <Users size={14} /> {test.attemptsCount.toLocaleString()} Aspirants Attempted
                        </span>
                        <button className="btn-start-test" onClick={() => navigate(`/mock-tests/${test.id}`)}>
                          <Play size={16} /> Start Test Now
                        </button>
                      </div>
                    )}

                    {test.status === 'attempted' && (
                      <div className="attempted-footer-split">
                        <div className="attempted-scores">
                          <div className="score-badge-main">
                            <strong>{test.score}</strong> / {test.marks}
                          </div>
                          <span className="percentile-label">🎯 {test.percentile}%ile (Rank #{test.rank})</span>
                        </div>
                        <div className="attempted-btn-duo">
                          <button className="btn-review-analytics" onClick={() => navigate(`/mock-tests/${test.id}/result`)}>
                            <BarChart2 size={15} /> View AI Report
                          </button>
                          <button className="btn-retake-icon" onClick={() => navigate(`/mock-tests/${test.id}`)} title="Retake test">
                            <RotateCcw size={15} /> Retake
                          </button>
                        </div>
                      </div>
                    )}

                    {test.status === 'live-upcoming' && (
                      <div className="footer-action-row">
                        <span className="attempts-count-text">
                          <Users size={14} /> {test.attemptsCount.toLocaleString()} Pre-Registered
                        </span>
                        <button 
                          className={`btn-register-live ${isLiveRegistered ? 'registered' : ''}`}
                          onClick={() => handleRegisterLive(test.id)}
                        >
                          <Bell size={16} /> {isLiveRegistered ? 'Registered! (SMS Alert Set)' : 'Register Free for Live Test'}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Widgets */}
        <aside className="mock-sidebar-column">
          {/* Upcoming Live Championship Widget */}
          <div className="mock-widget-card live-schedule-widget">
            <div className="widget-header-clean">
              <Calendar size={18} color="#0033A0" />
              <h4>Live National Championship Schedule</h4>
            </div>

            <div className="live-tests-schedule-list">
              <div className="schedule-item">
                <div className="schedule-date-box">
                  <span className="date-num">24</span>
                  <span className="date-month">AUG</span>
                </div>
                <div className="schedule-info">
                  <strong>UPSC CSE All India Open Mock #3</strong>
                  <p>10:00 AM - 12:00 PM • GS Paper 1</p>
                  <span className="schedule-pill">Sovereign Certificate</span>
                </div>
              </div>

              <div className="schedule-item">
                <div className="schedule-date-box">
                  <span className="date-num">28</span>
                  <span className="date-month">AUG</span>
                </div>
                <div className="schedule-info">
                  <strong>SSC CGL Tier-1 Grand Marathon</strong>
                  <p>02:00 PM - 03:00 PM • 100 Qs</p>
                  <span className="schedule-pill">Live Leaderboard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subject Mastery & Weakness Analysis Widget */}
          <div className="mock-widget-card analytics-widget">
            <div className="widget-header-clean">
              <TrendingUp size={18} color="#024A00" />
              <h4>Subject Weakness & Speed Radar</h4>
            </div>

            <div className="subject-bars-stack">
              <div className="subj-bar-item">
                <div className="subj-label">
                  <span>Indian Polity & Constitution</span>
                  <strong className="text-green">92% Acc (Fast)</strong>
                </div>
                <div className="subj-track">
                  <div className="subj-fill green" style={{ width: '92%' }}></div>
                </div>
              </div>

              <div className="subj-bar-item">
                <div className="subj-label">
                  <span>Modern Indian History</span>
                  <strong className="text-blue">78% Acc (Moderate)</strong>
                </div>
                <div className="subj-track">
                  <div className="subj-fill blue" style={{ width: '78%' }}></div>
                </div>
              </div>

              <div className="subj-bar-item">
                <div className="subj-label">
                  <span>Indian Economy & Budget</span>
                  <strong className="text-orange">64% Acc (Needs Review)</strong>
                </div>
                <div className="subj-track">
                  <div className="subj-fill orange" style={{ width: '64%' }}></div>
                </div>
              </div>

              <div className="subj-bar-item">
                <div className="subj-label">
                  <span>Environment & Ecology</span>
                  <strong className="text-purple">82% Acc (Good)</strong>
                </div>
                <div className="subj-track">
                  <div className="subj-fill purple" style={{ width: '82%' }}></div>
                </div>
              </div>
            </div>

            <button className="btn-full-diagnostic" onClick={() => navigate('/diagnostic/result')}>
              View Full AI Diagnostic Trajectory <ChevronRight size={16} />
            </button>
          </div>

          {/* Download Official Question Paper PDFs */}
          <div className="mock-widget-card download-widget">
            <div className="widget-header-clean">
              <Download size={18} color="#FE6500" />
              <h4>Download Solved PDF Question Papers</h4>
            </div>
            <p className="widget-desc">
              Get offline printable question papers with detailed step-by-step Hindi/English explanations.
            </p>
            <div className="pdf-items-list">
              <a href="#download" className="pdf-row" onClick={(e) => { e.preventDefault(); alert('Downloading UPSC CSE 2024 Solved Mock PDF (Bilingual)...'); }}>
                <span>📄 UPSC CSE 2024 Prelims Paper (Solved)</span>
                <Download size={15} />
              </a>
              <a href="#download" className="pdf-row" onClick={(e) => { e.preventDefault(); alert('Downloading SSC CGL 2024 25-Shift Compendium...'); }}>
                <span>📄 SSC CGL 2024 25-Shift Question Vault</span>
                <Download size={15} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
