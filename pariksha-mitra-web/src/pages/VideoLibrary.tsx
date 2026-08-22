import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Filter, PlayCircle, Download, Clock, BookOpen, 
  Award, Shield, Sparkles, CheckCircle2, ChevronRight, 
  Star, Users, Bookmark, Volume2, Globe, ArrowRight, Play,
  TrendingUp, WifiOff, FileText, Check
} from 'lucide-react';
import './VideoLibrary.css';

interface CoursePlaylist {
  id: string;
  title: string;
  category: string;
  subject: string;
  faculty: string;
  facultyTitle: string;
  facultyAvatar: string;
  totalVideos: number;
  totalHours: string;
  rating: number;
  enrolledCount: string;
  thumbnail: string;
  language: string;
  progress?: number;
  tags: string[];
}

export default function VideoLibrary() {
  const navigate = useNavigate();

  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedLang, setSelectedLang] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [downloadedCourses, setDownloadedCourses] = useState<{ [key: string]: boolean }>({});

  const coursesData: CoursePlaylist[] = [
    {
      id: 'history-1857',
      title: 'Modern Indian History: From 1857 Revolt to Independence 1947',
      category: 'UPSC CSE',
      subject: 'History',
      faculty: 'Dr. S. Mehta',
      facultyTitle: 'Former Civil Servant & Senior Historian',
      facultyAvatar: 'SM',
      totalVideos: 36,
      totalHours: '28.5h',
      rating: 4.9,
      enrolledCount: '84,200',
      thumbnail: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&auto=format&fit=crop&q=60',
      language: 'Bilingual (Hindi + English)',
      progress: 65,
      tags: ['GS Paper 1', 'NCERT Spectrum', 'High Yield']
    },
    {
      id: 'v2',
      title: 'Indian Polity & Constitutional Framework: Complete Masterclass',
      category: 'UPSC CSE',
      subject: 'Polity',
      faculty: 'Prof. Ananya Roy',
      facultyTitle: 'NLSIU Constitutional Law Scholar',
      facultyAvatar: 'AR',
      totalVideos: 42,
      totalHours: '34.0h',
      rating: 4.95,
      enrolledCount: '1,12,000',
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop&q=60',
      language: 'Hindi (हिंदी)',
      progress: 30,
      tags: ['Laxmikanth Complete', 'Articles 1-395', 'Judicial Cases']
    },
    {
      id: 'quant-speed-cgl',
      title: 'SSC CGL Tier 1 & 2: Complete Quantitative Aptitude & Speed Math',
      category: 'SSC CGL',
      subject: 'Quant',
      faculty: 'Rakesh Yadav Sir',
      facultyTitle: 'Renowned Math Faculty • 12+ Years Exp',
      facultyAvatar: 'RY',
      totalVideos: 54,
      totalHours: '42.0h',
      rating: 4.85,
      enrolledCount: '1,45,000',
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&auto=format&fit=crop&q=60',
      language: 'Hindi (हिंदी)',
      progress: 15,
      tags: ['Shortcuts Enabled', 'Arithmetic & Advance', 'PYQs 2020-25']
    },
    {
      id: 'economy-macro',
      title: 'Indian Economy, Union Budget 2026 & Banking Systems',
      category: 'Banking',
      subject: 'Economy',
      faculty: 'Dr. Vivek Sharma',
      facultyTitle: 'Ex-RBI Research Fellow',
      facultyAvatar: 'VS',
      totalVideos: 28,
      totalHours: '22.5h',
      rating: 4.9,
      enrolledCount: '62,000',
      thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&auto=format&fit=crop&q=60',
      language: 'Bilingual (Hindi + English)',
      tags: ['Monetary Policy', 'Economic Survey', 'IBPS PO Core']
    },
    {
      id: 'geography-india',
      title: 'Physical & Indian Geography with Map Work Analysis',
      category: 'UPSC CSE',
      subject: 'Geography',
      faculty: 'Prof. K. Swaminathan',
      facultyTitle: 'Geographical Survey Specialist',
      facultyAvatar: 'KS',
      totalVideos: 32,
      totalHours: '26.0h',
      rating: 4.8,
      enrolledCount: '58,400',
      thumbnail: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&auto=format&fit=crop&q=60',
      language: 'English',
      tags: ['Atlas & Maps', 'Monsoons', 'NCERT Class 11-12']
    },
    {
      id: 'general-science-rrb',
      title: 'Railway RRB NTPC: General Science (Physics, Chemistry, Biology)',
      category: 'Railways',
      subject: 'Science',
      faculty: 'Dr. Neha Verma',
      facultyTitle: 'Senior Science Educator',
      facultyAvatar: 'NV',
      totalVideos: 40,
      totalHours: '30.0h',
      rating: 4.75,
      enrolledCount: '92,000',
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&auto=format&fit=crop&q=60',
      language: 'Hindi (हिंदी)',
      tags: ['NCERT 9-10th', 'Diagrams & Numerical', 'RRB Special']
    }
  ];

  const handleDownload = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setDownloadedCourses(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      if (selectedExam !== 'All' && course.category !== selectedExam) return false;
      if (selectedSubject !== 'All' && course.subject !== selectedSubject) return false;
      if (selectedLang !== 'All' && !course.language.toLowerCase().includes(selectedLang.toLowerCase())) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesFaculty = course.faculty.toLowerCase().includes(query);
        const matchesSubject = course.subject.toLowerCase().includes(query);
        const matchesTags = course.tags.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesFaculty && !matchesSubject && !matchesTags) return false;
      }
      return true;
    });
  }, [selectedExam, selectedSubject, selectedLang, searchQuery]);

  return (
    <div className="video-library-page-container">
      {/* Top Banner Hero */}
      <section className="vl-hero-banner">
        <div className="vl-hero-grid">
          <div className="hero-left-content">
            <div className="hero-badge-strip">
              <span className="gov-seal-pill">
                <Shield size={14} /> National Sovereign Video Lecture Repository
              </span>
              <span className="data-saver-pill">
                <WifiOff size={14} /> 2G Low-Bandwidth Mode Enabled
              </span>
            </div>
            <h1>Free Faculty Masterclasses / राष्ट्रीय वीडियो व्याख्यान भंडार</h1>
            <p>
              2,450+ hours of structured video lectures recorded by India's top educators, retired civil servants, and university professors. 100% free with offline downloads and synchronized AI notes.
            </p>

            {/* Quick Metrics Bar */}
            <div className="hero-metrics-ribbon">
              <div className="hmetric-box">
                <span className="hmetric-val">2,450+ Hours</span>
                <span className="hmetric-label">Curated Video Content</span>
              </div>
              <div className="hmetric-sep"></div>
              <div className="hmetric-box">
                <span className="hmetric-val">12 Languages</span>
                <span className="hmetric-label">Regional Indian Audio</span>
              </div>
              <div className="hmetric-sep"></div>
              <div className="hmetric-box">
                <span className="hmetric-val">100% Free</span>
                <span className="hmetric-label">Sovereign Cloud Access</span>
              </div>
              <div className="hmetric-sep"></div>
              <div className="hmetric-box">
                <span className="hmetric-val">360p / 2G</span>
                <span className="hmetric-label">Adaptive Data Saver</span>
              </div>
            </div>
          </div>

          {/* Spotlight Resume Learning Card */}
          <div className="hero-right-spotlight">
            <div className="spotlight-card" onClick={() => navigate('/videos/history-1857')}>
              <div className="spotlight-badge-row">
                <span className="spotlight-tag">CONTINUE LEARNING</span>
                <span className="spotlight-prog-text">65% Done</span>
              </div>
              <h4 className="spotlight-title">Modern Indian History: Chapter 4 (1857 Revolt)</h4>
              <p className="spotlight-fac">Dr. S. Mehta • 48 mins remaining</p>
              <div className="spotlight-prog-bar">
                <div className="prog-track">
                  <div className="prog-fill" style={{ width: '65%' }}></div>
                </div>
              </div>
              <button className="btn-resume-spotlight">
                <Play size={15} fill="#FFF" /> Resume Lecture Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Search & Filters Card */}
      <section className="vl-filter-card">
        {/* Exam Pills Row */}
        <div className="exam-pills-row">
          {[
            { id: 'All', label: '🌟 All Exams' },
            { id: 'UPSC CSE', label: '🏛️ UPSC Civil Services' },
            { id: 'SSC CGL', label: '⚡ SSC CGL / CHSL' },
            { id: 'Banking', label: '🏦 IBPS / SBI Banking' },
            { id: 'Railways', label: '🚆 Railway RRB' }
          ].map(ex => (
            <button
              key={ex.id}
              className={`exam-pill-btn ${selectedExam === ex.id ? 'active' : ''}`}
              onClick={() => setSelectedExam(ex.id)}
            >
              {ex.label}
            </button>
          ))}
        </div>

        {/* Subfilters Row */}
        <div className="subfilters-bar-row">
          <div className="filter-dropdown-group">
            <label>Subject Focus:</label>
            <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
              <option value="All">All Subjects</option>
              <option value="History">Indian History</option>
              <option value="Polity">Indian Polity & Constitution</option>
              <option value="Economy">Indian Economy & Banking</option>
              <option value="Geography">Geography & Mapping</option>
              <option value="Quant">Quantitative Aptitude</option>
              <option value="Science">General Science</option>
            </select>
          </div>

          <div className="filter-dropdown-group">
            <label>Audio Language:</label>
            <select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)}>
              <option value="All">All Languages</option>
              <option value="Hindi">Hindi (हिंदी)</option>
              <option value="English">English</option>
              <option value="Bilingual">Bilingual</option>
            </select>
          </div>

          <div className="search-input-box">
            <Search size={16} className="search-ico" />
            <input 
              type="text" 
              placeholder="Search lectures by topic, faculty, or NCERT chapter..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Courses & Lectures Grid */}
      <section className="courses-grid-section">
        <div className="grid-header-row">
          <h3>Full Lecture Series & Masterclasses ({filteredCourses.length} Courses)</h3>
          <span className="grid-subtext">Includes PDF Lecture Slides, NCERT Chapter References & AI Notes</span>
        </div>

        <div className="courses-cards-grid">
          {filteredCourses.map((course) => {
            const isDownloaded = !!downloadedCourses[course.id];

            return (
              <div 
                key={course.id} 
                className="course-card-tile"
                onClick={() => navigate(`/videos/${course.id}`)}
              >
                {/* Thumbnail Image Container */}
                <div className="course-thumb-box">
                  <img src={course.thumbnail} alt={course.title} />
                  <div className="thumb-overlay-gradient"></div>

                  <span className="thumb-lang-badge">
                    <Globe size={12} /> {course.language}
                  </span>

                  <span className="thumb-duration-pill">
                    <Clock size={12} /> {course.totalHours}
                  </span>

                  <div className="thumb-play-hover-icon">
                    <PlayCircle size={48} color="#FFF" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="course-card-body">
                  <div className="course-category-strip">
                    <span className="exam-tag-pill">{course.category}</span>
                    <span className="subject-tag-pill">{course.subject}</span>
                    <div className="rating-pill">
                      <Star size={13} fill="#FFD700" color="#FFD700" />
                      <strong>{course.rating}</strong>
                    </div>
                  </div>

                  <h3 className="course-main-title">{course.title}</h3>

                  {/* Faculty Credential */}
                  <div className="faculty-meta-row">
                    <div className="fac-avatar">{course.facultyAvatar}</div>
                    <div className="fac-info">
                      <strong>{course.faculty}</strong>
                      <p>{course.facultyTitle}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="course-tags-list">
                    {course.tags.map(t => (
                      <span key={t} className="tag-pill">{t}</span>
                    ))}
                  </div>

                  {/* Progress bar if ongoing */}
                  {course.progress && course.progress > 0 && (
                    <div className="course-prog-section">
                      <div className="prog-label">
                        <span>Progress</span>
                        <strong>{course.progress}% Completed</strong>
                      </div>
                      <div className="prog-track">
                        <div className="prog-fill" style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                  )}

                  {/* Card Bottom Actions */}
                  <div className="course-bottom-actions">
                    <span className="enrolled-count-text">
                      <Users size={14} /> {course.enrolledCount} Learners
                    </span>

                    <div className="action-buttons-duo">
                      <button 
                        className={`btn-offline-download ${isDownloaded ? 'downloaded' : ''}`}
                        onClick={(e) => handleDownload(e, course.id)}
                        title={isDownloaded ? 'Available in Offline Storage' : 'Download for 2G Offline'}
                      >
                        {isDownloaded ? <Check size={14} color="#16A34A" /> : <Download size={14} />}
                      </button>

                      <button className="btn-watch-course">
                        <Play size={14} fill="#FFF" /> Watch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
