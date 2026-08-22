import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  BookOpen, Play, Brain, Video, Target, FileText, Users, 
  GraduationCap, Briefcase, Landmark, Train, Stethoscope, Calculator, 
  Shield, BookMarked, UserPlus, FileQuestion, ArrowRight, Star, 
  Globe, Share2, Mail, MessageCircle, ExternalLink, Sparkles, X, CheckCircle2,
  Bell, Search, Download, Award, Clock, ChevronRight, Phone, Eye, Volume2,
  TrendingUp, WifiOff, Check, Radio, ShieldCheck
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import './LandingPage.css';
import ParikshaMitraLogo from '../components/ParikshaMitraLogo';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [currentTickerIdx, setCurrentTickerIdx] = useState(0);
  const [heroServiceTab, setHeroServiceTab] = useState<'services' | 'notices' | 'broadcast'>('services');

  const tickerItems = [
    '📢 Notification: All-India UPSC Prelims Open Mock #3 registrations now open • 100% Free Sovereign Seat',
    '📢 Scheme Update: 2,450+ Hours of Bilingual Video Lectures added under PM e-VIDYA initiative',
    '📢 Student Support: 1-on-1 Free Civil Services Mentorship slots released for UPSC 2026 aspirants',
    '📢 Accessibility: 2G Low-Bandwidth Data Saver Mode operational across all 766 districts of India'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTickerIdx(prev => (prev + 1) % tickerItems.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [tickerItems.length]);

  const handleQuickDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      login();
    } catch (err) {
      localStorage.setItem('pariksha_mitra_logged_in', 'true');
    }
    navigate('/dashboard');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const examsList = [
    { id: 'upsc', name: 'UPSC Civil Services', nameHi: 'संघ लोक सेवा आयोग (CSE)', icon: Landmark, count: '850+ Lectures', desc: 'IAS, IPS, IFS & Central Group A Services Prelims & Mains curriculum.' },
    { id: 'ssc', name: 'SSC CGL / CHSL', nameHi: 'कर्मचारी चयन आयोग', icon: BookMarked, count: '1,250+ Lectures', desc: 'Combined Graduate Level Tier-1 & Tier-2 Quant, Reasoning, English & GA.' },
    { id: 'banking', name: 'Banking (IBPS / SBI)', nameHi: 'बैंकिंग भर्ती (PO / Clerk)', icon: Briefcase, count: '920+ Lectures', desc: 'Probationary Officer & Clerical cadre speed tests with banking awareness.' },
    { id: 'railway', name: 'Railway RRB NTPC', nameHi: 'रेलवे भर्ती बोर्ड', icon: Train, count: '640+ Lectures', desc: 'RRB NTPC, Group D & ALP general science and numerical aptitude.' },
    { id: 'neet', name: 'NEET UG (Medical)', nameHi: 'राष्ट्रीय पात्रता परीक्षा', icon: Stethoscope, count: '1,500+ Lectures', desc: 'Complete NCERT-based Physics, Chemistry & Biology video modules.' },
    { id: 'jee', name: 'JEE Main & Advanced', nameHi: 'संयुक्त प्रवेश परीक्षा', icon: Calculator, count: '1,800+ Lectures', desc: 'NTA-pattern problem solving and advanced numerical question sets.' },
    { id: 'psc', name: 'State PSCs (UPPSC, BPSC)', nameHi: 'राज्य लोक सेवा आयोग', icon: GraduationCap, count: '1,100+ Lectures', desc: 'State-specific administrative civil services General Studies and regional history.' },
    { id: 'defence', name: 'Defence (NDA / CDS)', nameHi: 'रक्षा सेवाएं परीक्षा', icon: Shield, count: '420+ Lectures', desc: 'National Defence Academy & Combined Defence Services mathematics & English.' }
  ];

  return (
    <div className={`gov-landing-root ${highContrast ? 'high-contrast-mode' : ''} font-${fontSize}`}>
      {/* 1. Official GIGW 3.0 Sovereign Tricolor Strip */}
      <div className="gov-top-tricolor-strip">
        <div className="tri-saffron"></div>
        <div className="tri-white"></div>
        <div className="tri-green"></div>
      </div>

      {/* 2. Official GIGW Utility Top Bar */}
      <div className="gov-utility-topbar">
        <div className="gov-container utility-flex">
          <div className="utility-left">
            <span className="gov-flag-emblem">🇮🇳</span>
            <span className="gov-text-en">GOVERNMENT OF INDIA</span>
            <span className="gov-sep">|</span>
            <span className="gov-text-hi">भारत सरकार</span>
            <span className="gov-sep">|</span>
            <span className="moe-text">Ministry of Education (शिक्षा मंत्रालय)</span>
          </div>

          <div className="utility-right">
            {/* Accessibility Toolset */}
            <div className="access-tools-group">
              <span className="access-label">Accessibility:</span>
              <button 
                className={`font-tool ${fontSize === 'normal' ? 'active' : ''}`} 
                onClick={() => setFontSize('normal')}
                title="Normal Font Size"
              >
                A
              </button>
              <button 
                className={`font-tool ${fontSize === 'large' ? 'active' : ''}`} 
                onClick={() => setFontSize('large')}
                title="Large Font Size"
              >
                A+
              </button>
              <button 
                className={`contrast-tool ${highContrast ? 'active' : ''}`} 
                onClick={() => setHighContrast(!highContrast)}
                title="Toggle High Contrast"
              >
                <Eye size={13} /> Contrast
              </button>
            </div>

            <span className="gov-sep">|</span>

            {/* Language Switch */}
            <div className="lang-pill-box">
              <span className="lang-btn active">English</span>
              <span className="lang-sep-dot">•</span>
              <span className="lang-btn">हिन्दी</span>
            </div>

            <span className="gov-sep">|</span>

            <Link to="/ministry/login" className="ministry-portal-link">
              <Landmark size={14} /> Ministry Official Portal
            </Link>
          </div>
        </div>
      </div>

      {/* 3. National Institutional Branding Bar */}
      <header className="gov-institutional-header">
        <div className="gov-container inst-header-grid">
          {/* Left: National Emblem & Logo */}
          <div className="inst-brand-left">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="State Emblem of India" 
              className="national-emblem-svg" 
            />
            <div className="emblem-divider"></div>
            <div className="brand-lockup-box">
              <ParikshaMitraLogo theme="dark" height={52} />
              <div className="sub-ministry-label">
                Department of Higher Education & School Education • Ministry of Education, Govt. of India
              </div>
            </div>
          </div>

          {/* Right: National Scheme Badges & Student Helpline */}
          <div className="inst-badges-right">
            <div className="scheme-badges-row">
              <div className="scheme-badge-item">
                <span className="badge-title">PM e-VIDYA</span>
                <span className="badge-sub">One Nation Digital</span>
              </div>
              <div className="scheme-badge-item">
                <span className="badge-title">NEP 2020</span>
                <span className="badge-sub">Education For All</span>
              </div>
              <div className="scheme-badge-item">
                <span className="badge-title">MeghRaj</span>
                <span className="badge-sub">NIC Sovereign Cloud</span>
              </div>
            </div>

            <div className="student-helpline-box">
              <Phone size={15} color="#0033A0" />
              <div className="helpline-text">
                <span className="help-label">National Student Toll-Free</span>
                <strong className="help-num">1800-11-2026</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 4. Sovereign Navigation Menu Bar */}
      <nav className="gov-main-navbar">
        <div className="gov-container nav-items-flex">
          <div className="nav-links-cluster">
            <button className="gov-nav-btn active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              मुख्य पृष्ठ (Home)
            </button>
            <button className="gov-nav-btn" onClick={() => scrollToSection('about-scheme')}>
              योजना परिचय (About Scheme)
            </button>
            <button className="gov-nav-btn" onClick={() => scrollToSection('target-exams')}>
              परीक्षाएं (Exams)
            </button>
            <button className="gov-nav-btn" onClick={() => scrollToSection('key-services')}>
              सेवाएं (Features)
            </button>
            <Link to="/videos" className="gov-nav-btn">
              ई-व्याख्यान (E-Lectures)
            </Link>
            <Link to="/doubt-solver" className="gov-nav-btn">
              AI संशय समाधान (AI Mentor)
            </Link>
            <Link to="/mock-tests" className="gov-nav-btn">
              मॉक टेस्ट (Mock Tests)
            </Link>
            <Link to="/mentors" className="gov-nav-btn">
              मार्गदर्शन (Mentorship)
            </Link>
          </div>

          <div className="nav-auth-cluster">
            <button className="btn-nav-demo" onClick={handleQuickDemo}>
              <Sparkles size={15} /> Explore as Guest
            </button>
            <Link to="/login" className="btn-nav-login">
              लॉगिन (Login)
            </Link>
            <Link to="/register" className="btn-nav-register">
              निःशुल्क पंजीकरण (Register Free)
            </Link>
          </div>
        </div>
      </nav>

      {/* 5. Live Official Notification Scrolling Ticker */}
      <div className="gov-live-ticker-strip">
        <div className="gov-container ticker-flex">
          <div className="ticker-badge">
            <Bell size={14} className="bell-pulse" /> सद्यतन सूचनाएं (Latest Updates):
          </div>
          <div className="ticker-content-box">
            <span className="ticker-text-line">{tickerItems[currentTickerIdx]}</span>
          </div>
          <span className="ticker-archive-link" onClick={() => navigate('/videos')}>
            View All Archives →
          </span>
        </div>
      </div>

      {/* 6. Sovereign National Hero Section */}
      <section className="gov-hero-section">
        <div className="gov-container hero-layout-grid">
          {/* Left Hero Column */}
          <div className="hero-content-column">
            <div className="hero-flagship-pill">
              <Shield size={15} color="#0033A0" />
              <span>National Flagship Initiative under NEP 2020 & PM e-VIDYA</span>
            </div>

            <h1 className="hero-national-title">
              India's Free <span className="text-saffron">AI-Powered</span> National Exam Coaching Platform
            </h1>
            <h2 className="hero-national-subtitle-hi">
              परीक्षा मित्र — भारत सरकार का निःशुल्क राष्ट्रीय परीक्षा कोचिंग एवं मार्गदर्शन पोर्टल
            </h2>

            <p className="hero-mission-desc">
              Democratizing top-tier competitive examination coaching for <strong>UPSC, SSC, Banking, Railways, State PSC, NEET, and JEE</strong> across every district of India. 100% free of cost, government backed, and hosted on secure NIC MeghRaj sovereign cloud infrastructure.
            </p>

            {/* Action CTA Buttons */}
            <div className="hero-actions-cluster">
              <Link to="/register" className="btn-hero-primary-register">
                निःशुल्क खाता बनाएं (Register Free) <ArrowRight size={17} />
              </Link>

              <button className="btn-hero-guest-demo" onClick={handleQuickDemo}>
                <Sparkles size={16} /> Enter Live Student Dashboard
              </button>

              <button className="btn-hero-brochure" onClick={() => alert('Downloading Pariksha Mitra National Scheme Citizen Charter (PDF)...')}>
                <Download size={15} /> Scheme Brochure (PDF)
              </button>
            </div>

            {/* Verified NIC Certified Statistics Bar */}
            <div className="hero-verified-stats-strip">
              <div className="vstat-item">
                <span className="vstat-number">42.8 Lakh+</span>
                <span className="vstat-label">Registered Aspirants</span>
              </div>
              <div className="vstat-divider"></div>
              <div className="vstat-item">
                <span className="vstat-number">766 / 766</span>
                <span className="vstat-label">Districts Covered</span>
              </div>
              <div className="vstat-divider"></div>
              <div className="vstat-item">
                <span className="vstat-number">2,450+ Hours</span>
                <span className="vstat-label">Video Masterclasses</span>
              </div>
              <div className="vstat-divider"></div>
              <div className="vstat-item">
                <span className="vstat-number">₹0 (100% Free)</span>
                <span className="vstat-label">Sovereign Cloud Service</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Official Citizen Services & Examination Command Hub */}
          <div className="hero-preview-column">
            <div className="gov-service-command-hub">
              {/* Hub Header with Official Seal */}
              <div className="hub-top-header">
                <div className="hub-title-lockup">
                  <Landmark size={18} color="#002B7F" />
                  <div>
                    <span className="hub-main-heading">नागरिक परीक्षा सेवा केंद्र</span>
                    <span className="hub-sub-heading">Citizen Aspirant Services & Notice Board</span>
                  </div>
                </div>
                <span className="hub-live-status-pill">
                  <span className="hub-dot"></span> LIVE 24x7
                </span>
              </div>

              {/* Service Hub Navigation Tabs */}
              <div className="hub-nav-tabs-bar">
                <button 
                  className={`hub-tab-btn ${heroServiceTab === 'services' ? 'active' : ''}`}
                  onClick={() => setHeroServiceTab('services')}
                >
                  ⚡ त्वरित सेवाएं (Quick Services)
                </button>
                <button 
                  className={`hub-tab-btn ${heroServiceTab === 'notices' ? 'active' : ''}`}
                  onClick={() => setHeroServiceTab('notices')}
                >
                  📢 परीक्षा कैलेंडर (Notices)
                </button>
                <button 
                  className={`hub-tab-btn ${heroServiceTab === 'broadcast' ? 'active' : ''}`}
                  onClick={() => setHeroServiceTab('broadcast')}
                >
                  🔴 लाइव प्रसारण (Broadcast)
                </button>
              </div>

              {/* Tab 1: Quick Citizen Services */}
              {heroServiceTab === 'services' && (
                <div className="hub-tab-panel">
                  {/* Spotlight Item 1: Live Sunday Mock Test */}
                  <div className="hub-action-card highlight-saffron" onClick={() => navigate('/mock-tests')}>
                    <div className="hcard-top-row">
                      <span className="hcard-badge-red">🔴 LIVE THIS SUNDAY 10:00 AM</span>
                      <span className="hcard-tag-free">100% Free Seat</span>
                    </div>
                    <h4>All-India National UPSC Prelims Open CBT Mock</h4>
                    <p>Simulate real NTA examination with 64,000+ candidates across 766 districts. All-India percentile & solutions.</p>
                    <div className="hcard-action-bar">
                      <span className="aspirants-count-pill"><Users size={12} /> 64,200 Registered</span>
                      <span className="btn-hub-cta-text">Register Free →</span>
                    </div>
                  </div>

                  {/* 2-Grid Fast Shortcuts */}
                  <div className="hub-shortcuts-grid">
                    <div className="shortcut-box-card" onClick={() => navigate('/doubt-solver')}>
                      <div className="sc-icon-circle blue"><Brain size={18} color="#0033A0" /></div>
                      <div className="sc-info">
                        <strong>AI Doubt Solver</strong>
                        <span>24/7 NCERT Solutions</span>
                      </div>
                      <ChevronRight size={14} color="#64748B" />
                    </div>

                    <div className="shortcut-box-card" onClick={() => navigate('/videos')}>
                      <div className="sc-icon-circle green"><Video size={18} color="#024A00" /></div>
                      <div className="sc-info">
                        <strong>Faculty Lectures</strong>
                        <span>2,450+ Hours HD</span>
                      </div>
                      <ChevronRight size={14} color="#64748B" />
                    </div>

                    <div className="shortcut-box-card" onClick={() => navigate('/mentors')}>
                      <div className="sc-icon-circle purple"><Users size={18} color="#7E22CE" /></div>
                      <div className="sc-info">
                        <strong>Topper Mentorship</strong>
                        <span>Book 30-Min Strategy</span>
                      </div>
                      <ChevronRight size={14} color="#64748B" />
                    </div>

                    <div className="shortcut-box-card" onClick={() => navigate('/practice')}>
                      <div className="sc-icon-circle red"><FileText size={18} color="#DC2626" /></div>
                      <div className="sc-info">
                        <strong>10-Yr PYQs Vault</strong>
                        <span>Official Solved Papers</span>
                      </div>
                      <ChevronRight size={14} color="#64748B" />
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Examination Notices & Calendar */}
              {heroServiceTab === 'notices' && (
                <div className="hub-tab-panel">
                  <div className="notices-timeline-list">
                    <div className="notice-timeline-item" onClick={() => navigate('/mock-tests')}>
                      <div className="notice-date-pill">
                        <span className="n-day">24</span>
                        <span className="n-mon">AUG</span>
                      </div>
                      <div className="notice-info">
                        <strong>UPSC Civil Services (CSE) 2026 Grand Mock #3</strong>
                        <p>General Studies Paper 1 • Bilingual format • National Rank List</p>
                        <span className="notice-status-open">● Admissions Open</span>
                      </div>
                    </div>

                    <div className="notice-timeline-item" onClick={() => navigate('/mock-tests')}>
                      <div className="notice-date-pill">
                        <span className="n-day">28</span>
                        <span className="n-mon">AUG</span>
                      </div>
                      <div className="notice-info">
                        <strong>SSC CGL 2026 Tier-1 Marathon Mock Series</strong>
                        <p>100 Questions • 60 Mins • Speed Aptitude & Reasoning</p>
                        <span className="notice-status-open">● Admissions Open</span>
                      </div>
                    </div>

                    <div className="notice-timeline-item" onClick={() => navigate('/mock-tests')}>
                      <div className="notice-date-pill">
                        <span className="n-day">02</span>
                        <span className="n-mon">SEP</span>
                      </div>
                      <div className="notice-info">
                        <strong>IBPS PO & Clerk 2026 Speed Sectional Blitz</strong>
                        <p>High-Yield Quantitative Aptitude & Banking Awareness</p>
                        <span className="notice-status-open">● Registrations Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Live Broadcast & DD Free Dish Schedule */}
              {heroServiceTab === 'broadcast' && (
                <div className="hub-tab-panel">
                  <div className="broadcast-hub-content">
                    <div className="broadcast-card-highlight">
                      <div className="bcast-top">
                        <span className="bcast-live-chip"><Radio size={12} /> DD FREE DISH • PM e-VIDYA CH 22</span>
                        <span className="bcast-time">10:00 AM TODAY</span>
                      </div>
                      <h4>Indian Polity & Constitution: Fundamental Rights</h4>
                      <p>Faculty: Dr. S. Mehta (Ex-IAS) • NLSIU Constitutional Law Scholar</p>
                      <button className="btn-watch-broadcast-now" onClick={() => navigate('/videos/history-1857')}>
                        <Play size={13} fill="#FFF" /> Watch Web Simulcast Free
                      </button>
                    </div>

                    <div className="broadcast-channels-list">
                      <div className="bchan-row">
                        <span className="bchan-num">Channel 22</span>
                        <span className="bchan-prog">UPSC & State Administrative Services</span>
                        <span className="bchan-timing">09:00 AM - 01:00 PM</span>
                      </div>
                      <div className="bchan-row">
                        <span className="bchan-num">Channel 23</span>
                        <span className="bchan-prog">SSC CGL, Railway RRB & Banking</span>
                        <span className="bchan-timing">02:00 PM - 06:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Sovereign Cloud Security Footer */}
              <div className="hub-security-footer">
                <ShieldCheck size={14} color="#024A00" />
                <span>NIC MeghRaj Cloud Verified • 100% Free Sovereign Seat • Zero Commercial Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Leadership & Vision Banner */}
      <section className="gov-leadership-strip" id="about-scheme">
        <div className="gov-container leadership-grid">
          <div className="lead-quote-card">
            <div className="lead-quote-mark">“</div>
            <p className="lead-quote-text">
              "Technology and digital public infrastructure must ensure that no aspirant in India, regardless of geography or financial background, is denied top-quality competitive exam coaching."
            </p>
            <div className="lead-author-meta">
              <strong>National Mission on Accessible Digital Education</strong>
              <span>Ministry of Education, Government of India</span>
            </div>
          </div>

          <div className="scheme-core-attributes">
            <div className="attribute-item">
              <CheckCircle2 size={20} color="#024A00" />
              <div>
                <strong>Zero Financial Burden:</strong>
                <p>100% free coaching, mock tests, and mentor guidance funded by the Government of India.</p>
              </div>
            </div>

            <div className="attribute-item">
              <CheckCircle2 size={20} color="#024A00" />
              <div>
                <strong>Inclusive 2G Low-Bandwidth Technology:</strong>
                <p>Engineered for rural connectivity with offline audio-first mode and 360p compression.</p>
              </div>
            </div>

            <div className="attribute-item">
              <CheckCircle2 size={20} color="#024A00" />
              <div>
                <strong>Curated by Top Academicians:</strong>
                <p>Video courses delivered by university professors, retired civil servants, and subject matter experts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Six Key Pillars of the Initiative */}
      <section className="gov-section-container" id="key-services">
        <div className="gov-container">
          <div className="section-head-center">
            <span className="sec-tag-pill">NATIONAL LEARNING PILLARS</span>
            <h2 className="sec-main-title">Key Services & Digital Modules / योजना के प्रमुख स्तंभ</h2>
            <p className="sec-desc-text">
              Comprehensive suite of tools built on open digital public infrastructure to empower every competitive exam aspirant.
            </p>
          </div>

          <div className="services-six-grid">
            <div className="service-card-tile" onClick={() => navigate('/doubt-solver')}>
              <div className="service-icon-circle blue">
                <Brain size={28} color="#0033A0" />
              </div>
              <h3>24/7 AI Personal Doubt Mentor</h3>
              <p>Multilingual conceptual assistant trained on official NCERTs, PIB, and standard syllabi with instant step-by-step solutions.</p>
              <span className="service-link-btn">Explore AI Doubt Solver →</span>
            </div>

            <div className="service-card-tile" onClick={() => navigate('/videos')}>
              <div className="service-icon-circle green">
                <Video size={28} color="#024A00" />
              </div>
              <h3>Faculty Masterclass Repository</h3>
              <p>2,450+ hours of structured video lectures with downloadable synchronized slide decks and NCERT references.</p>
              <span className="service-link-btn">Browse Video Lectures →</span>
            </div>

            <div className="service-card-tile" onClick={() => navigate('/mock-tests')}>
              <div className="service-icon-circle saffron">
                <Target size={28} color="#FE6500" />
              </div>
              <h3>Official NTA CBT Mock Test Simulator</h3>
              <p>Real exam environment simulation with negative marking, timers, and All-India percentile rank prediction.</p>
              <span className="service-link-btn">Start Mock Test Series →</span>
            </div>

            <div className="service-card-tile" onClick={() => navigate('/mentors')}>
              <div className="service-icon-circle purple">
                <Users size={28} color="#7E22CE" />
              </div>
              <h3>1-on-1 Free Civil Services Mentorship</h3>
              <p>Book 30-minute private strategy calls with verified UPSC/SSC toppers and serving administrative mentors.</p>
              <span className="service-link-btn">Book Free Mentor Session →</span>
            </div>

            <div className="service-card-tile" onClick={() => navigate('/practice')}>
              <div className="service-icon-circle red">
                <FileText size={28} color="#DC2626" />
              </div>
              <h3>Adaptive Practice Hub & PYQ Compendium</h3>
              <p>50,000+ categorized questions with past 10-year official question papers and instant diagnostic scoring.</p>
              <span className="service-link-btn">Practice Question Bank →</span>
            </div>

            <div className="service-card-tile" onClick={() => navigate('/dashboard')}>
              <div className="service-icon-circle teal">
                <WifiOff size={28} color="#0D9488" />
              </div>
              <h3>Rural 2G Low-Bandwidth Mode</h3>
              <p>Adaptive data-saver system allowing complete syllabus revision even in low network areas with offline downloads.</p>
              <span className="service-link-btn">Learn About Offline Mode →</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Target Examination Categories */}
      <section className="gov-section-container bg-light-section" id="target-exams">
        <div className="gov-container">
          <div className="section-head-center">
            <span className="sec-tag-pill">COMPREHENSIVE EXAM COVERAGE</span>
            <h2 className="sec-main-title">Supported Competitive Examinations / समर्थित परीक्षाएं</h2>
            <p className="sec-desc-text">
              Official syllabus modules curated according to notifications of central and state recruiting commissions.
            </p>
          </div>

          <div className="exams-showcase-grid">
            {examsList.map(exam => {
              const ExamIcon = exam.icon;
              return (
                <div 
                  key={exam.id} 
                  className="exam-showcase-card"
                  onClick={() => navigate('/videos')}
                >
                  <div className="exam-card-head">
                    <div className="exam-icon-wrap">
                      <ExamIcon size={24} color="#0033A0" />
                    </div>
                    <span className="exam-lec-count">{exam.count}</span>
                  </div>
                  <h3>{exam.name}</h3>
                  <span className="exam-hindi-title">{exam.nameHi}</span>
                  <p>{exam.desc}</p>
                  <div className="exam-card-foot">
                    <span>Explore Complete Syllabus</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. Pan-India District Reach & Inclusion */}
      <section className="gov-section-container">
        <div className="gov-container">
          <div className="inclusion-banner-card">
            <div className="inclusion-text">
              <span className="inc-badge">🇮🇳 100% PAN-INDIA COVERAGE</span>
              <h2>Bridging the Urban-Rural Education Divide</h2>
              <p>
                From Jammu & Kashmir to Kanyakumari, and Gujarat to Arunachal Pradesh — Pariksha Mitra is actively serving aspirants across all 28 States and 8 Union Territories in 12 regional languages.
              </p>
              <div className="inc-stats-row">
                <div className="inc-stat">
                  <strong>72%</strong>
                  <span>Enrolled from Rural & Semi-Urban Areas</span>
                </div>
                <div className="inc-stat">
                  <strong>48%</strong>
                  <span>Female Aspirants Preparing from Home</span>
                </div>
                <div className="inc-stat">
                  <strong>12</strong>
                  <span>Regional Indian Audio Languages</span>
                </div>
              </div>
            </div>

            <div className="inclusion-cta-box">
              <h3>Are you preparing for an upcoming competitive exam?</h3>
              <p>Join over 42 Lakh aspirants on India's sovereign learning platform today.</p>
              <Link to="/register" className="btn-inc-register">
                Register Free (No Credit Card / 100% Free) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Official GIGW Compliant Government Footer */}
      <footer className="gov-official-footer">
        {/* Ministry Partners Strip */}
        <div className="gov-partners-strip">
          <div className="gov-container partners-flex">
            <span className="partner-label">Digital Public Infrastructure Partners:</span>
            <div className="partner-logos-list">
              <span className="p-item">Ministry of Education</span>
              <span className="p-sep">•</span>
              <span className="p-item">National Informatics Centre (NIC)</span>
              <span className="p-sep">•</span>
              <span className="p-item">Digital India</span>
              <span className="p-sep">•</span>
              <span className="p-item">MeghRaj Cloud</span>
              <span className="p-sep">•</span>
              <span className="p-item">SWAYAM / DIKSHA</span>
              <span className="p-sep">•</span>
              <span className="p-item">NTA (National Testing Agency)</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="gov-footer-main">
          <div className="gov-container footer-grid-four">
            {/* Col 1: Brand & Office */}
            <div className="footer-col-brand">
              <ParikshaMitraLogo theme="light" height={48} />
              <p className="footer-office-address">
                Department of Higher Education,<br />
                Ministry of Education, Government of India,<br />
                Shastri Bhawan, New Delhi - 110001
              </p>
              <div className="footer-contact-item">
                <Mail size={14} /> <strong>support@parikshamitra.gov.in</strong>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} /> <strong>1800-11-2026 (Toll-Free 9 AM - 6 PM)</strong>
              </div>
            </div>

            {/* Col 2: Learning Streams */}
            <div className="footer-col-links">
              <h4>Examination Streams</h4>
              <ul>
                <li><Link to="/videos">UPSC Civil Services (CSE)</Link></li>
                <li><Link to="/videos">SSC CGL & CHSL Tier-1/2</Link></li>
                <li><Link to="/videos">Banking PO & Clerical Cadre</Link></li>
                <li><Link to="/videos">Railway RRB NTPC & Group D</Link></li>
                <li><Link to="/videos">NEET UG Medical Entrance</Link></li>
                <li><Link to="/videos">JEE Main & Advanced</Link></li>
              </ul>
            </div>

            {/* Col 3: Student Tools */}
            <div className="footer-col-links">
              <h4>Digital Public Tools</h4>
              <ul>
                <li><Link to="/doubt-solver">24/7 AI Conceptual Doubt Solver</Link></li>
                <li><Link to="/mock-tests">All-India NTA CBT Mock Engine</Link></li>
                <li><Link to="/mentors">Free 1-on-1 Topper Mentorship</Link></li>
                <li><Link to="/syllabus">Official Syllabus Tracker</Link></li>
                <li><Link to="/leaderboard">National Merit Leaderboard</Link></li>
                <li><Link to="/settings">2G Data Saver Configuration</Link></li>
              </ul>
            </div>

            {/* Col 4: Official Compliance & Portals */}
            <div className="footer-col-links">
              <h4>Government Portals</h4>
              <ul>
                <li><a href="https://www.india.gov.in" target="_blank" rel="noreferrer">National Portal of India (india.gov.in) ↗</a></li>
                <li><a href="https://www.education.gov.in" target="_blank" rel="noreferrer">Ministry of Education (education.gov.in) ↗</a></li>
                <li><a href="https://www.nic.in" target="_blank" rel="noreferrer">National Informatics Centre (nic.in) ↗</a></li>
                <li><a href="https://www.digitalindia.gov.in" target="_blank" rel="noreferrer">Digital India Initiative ↗</a></li>
                <li><a href="https://pgportal.gov.in" target="_blank" rel="noreferrer">CPGRAMS Grievance Redressal ↗</a></li>
                <li><Link to="/ministry/login">Ministry Official Command Center</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal & GIGW Mandatory Statements */}
        <div className="gov-footer-bottom">
          <div className="gov-container footer-bottom-flex">
            <div className="legal-links-row">
              <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Use</a>
              <span>|</span>
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy (DPDP 2023)</a>
              <span>|</span>
              <a href="#copyright" onClick={(e) => e.preventDefault()}>Copyright Policy</a>
              <span>|</span>
              <a href="#hyperlink" onClick={(e) => e.preventDefault()}>Hyperlinking Policy</a>
              <span>|</span>
              <a href="#disclaimer" onClick={(e) => e.preventDefault()}>Disclaimer</a>
              <span>|</span>
              <a href="#accessibility" onClick={(e) => e.preventDefault()}>Accessibility Statement</a>
              <span>|</span>
              <a href="#help" onClick={(e) => e.preventDefault()}>Help & FAQs</a>
            </div>

            <div className="copyright-line">
              © 2026 Pariksha Mitra. Designed and Developed by Ministry of Education, Hosted on NIC MeghRaj Cloud.
            </div>

            <div className="cert-statement">
              Certified GIGW 3.0 (Guidelines for Indian Government Websites) • Last Reviewed: 21 August 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
