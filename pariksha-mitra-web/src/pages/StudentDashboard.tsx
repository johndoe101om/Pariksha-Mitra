import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, PlayCircle, Clock, Trophy, Flame, Brain, Target, 
  Calendar, Download, Users, CheckCircle2, Circle, ArrowRight, 
  ChevronRight, BarChart2, Bell, Sparkles, Shield, Compass,
  TrendingUp, Award, Zap, FileText, Check, AlertCircle
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './StudentDashboard.css';

export const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState('Good Morning');
  const [hindiGreeting, setHindiGreeting] = useState('शुभ प्रभात');
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState('1h 24m 10s');
  const [userName, setUserName] = useState('Rahul Kumar');
  const [userExam, setUserExam] = useState('UPSC Civil Services (CSE 2026)');
  const [completedTasks, setCompletedTasks] = useState<{ [key: number]: boolean }>({ 1: true, 2: true, 3: true });
  const [reminderSet, setReminderSet] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good Morning');
      setHindiGreeting('शुभ प्रभात');
    } else if (hour < 18) {
      setGreeting('Good Afternoon');
      setHindiGreeting('शुभ दोपहर');
    } else {
      setGreeting('Good Evening');
      setHindiGreeting('शुभ संध्या');
    }

    const interval = setInterval(() => {
      const now = new Date();
      setTimeRemaining(`1h 24m ${59 - (now.getSeconds() % 60)}s`);
    }, 1000);
    
    const userDataStr = localStorage.getItem('pariksha_mitra_user');
    if (userDataStr) {
      try {
        const userData = JSON.parse(userDataStr);
        if (userData.name) setUserName(userData.name);
        if (userData.targetExam || userData.exam) setUserExam(userData.targetExam || userData.exam);
      } catch (e) {}
    }

    return () => clearInterval(interval);
  }, []);

  const dateString = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  const dateStringHindi = new Date().toLocaleDateString('hi-IN', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  const readinessData = [
    { name: 'Ready', value: 78 },
    { name: 'Remaining', value: 22 },
  ];
  const COLORS = ['#0033A0', '#E2E8F0'];

  const toggleTask = (day: number) => {
    setCompletedTasks(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const revisionPlan = [
    { day: 1, subject: 'Indian Polity', topic: 'Preamble & Fundamental Rights (Art 12-35)', time: '45 mins' },
    { day: 2, subject: 'Modern History', topic: 'Revolt of 1857 & Administrative Impact', time: '60 mins' },
    { day: 3, subject: 'Geography', topic: 'Himalayan Drainage System & Monsoons', time: '50 mins' },
    { day: 4, subject: 'Indian Economy', topic: 'National Income, GDP & RBI Monetary Policy', time: '55 mins' },
    { day: 5, subject: 'Environment', topic: 'Biodiversity Hotspots & Wildlife Protection Act', time: '40 mins' },
    { day: 6, subject: 'Science & Tech', topic: 'ISRO Space Missions (Gaganyaan, Chandrayaan)', time: '45 mins' },
    { day: 7, subject: 'Current Affairs', topic: 'Weekly Editorial Analysis & Mock Test', time: '90 mins' },
  ];

  const quickStats = [
    { title: 'Readiness Score', value: '78%', sub: 'Target: 85%+', icon: TrendingUp, color: '#0033A0', bg: '#EFF6FF', path: '/diagnostic/result' },
    { title: 'Questions Solved', value: '3,456', sub: '+142 this week • 84% acc', icon: CheckCircle2, color: '#024A00', bg: '#DCFCE7', path: '/practice' },
    { title: 'Study Time', value: '24.5h', sub: 'Weekly Goal: 30 Hours', icon: Clock, color: '#0033A0', bg: '#EBF2FF', path: '/videos' },
    { title: 'Daily Streak', value: '12 Days 🔥', sub: 'Top 8% consistent learners', icon: Flame, color: '#C2410C', bg: '#FFF0E5', path: '/leaderboard' },
  ];

  const upcomingClasses = [
    { title: 'Indian Polity: Art 32 & Constitutional Remedies', faculty: 'Dr. S. Mehta (Ex-IAS)', time: 'Today, 04:00 PM', enrolled: '1,420 Aspirants' },
    { title: 'Geography Map Practice: Passes & Himalayan Peaks', faculty: 'Prof. Ananya Roy', time: 'Tomorrow, 10:00 AM', enrolled: '980 Aspirants' },
    { title: 'CSAT Speed Math & Data Interpretation', faculty: 'Vikramaditya Sir', time: 'Tomorrow, 06:00 PM', enrolled: '2,150 Aspirants' },
  ];

  return (
    <div className="aspirant-dashboard-root">
      {/* Top Banner Hero */}
      <section className="dash-hero-banner">
        <div className="dash-hero-inner">
          <div className="hero-left-info">
            <div className="hero-badges-row">
              <span className="gov-seal-badge">
                <Shield size={14} /> Ministry of Education • Govt. of India
              </span>
              <span className="exam-target-badge">
                <Target size={14} /> {userExam}
              </span>
              <span className="days-left-chip">
                <Calendar size={14} /> 274 Days to Prelims 2026
              </span>
            </div>

            <h1 className="hero-greeting-text">
              {greeting}, <span className="highlight-name">{userName}</span>! 👋
            </h1>
            <p className="hero-hindi-sub">
              {hindiGreeting}! आपकी तैयारी सही दिशा में अग्रसर है। आज का लक्ष्य पूरा करें।
            </p>

            <div className="hero-quote-box">
              <Sparkles size={16} className="quote-spark" />
              <span>"Arise, awake, and stop not till the goal is reached." — Swami Vivekananda</span>
            </div>
          </div>

          <div className="hero-right-kpi">
            <div className="kpi-ring-card" onClick={() => navigate('/diagnostic/result')}>
              <div className="kpi-chart-wrap">
                <ResponsiveContainer width={76} height={76}>
                  <PieChart>
                    <Pie
                      data={readinessData}
                      cx="50%"
                      cy="50%"
                      innerRadius={28}
                      outerRadius={36}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                      stroke="none"
                    >
                      {readinessData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="kpi-chart-center-val">78%</div>
              </div>
              <div className="kpi-ring-labels">
                <strong>AI Exam Readiness</strong>
                <span>Click to view breakdown →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Priority Action Hubs */}
      <section className="priority-actions-section">
        <div className="priority-grid">
          {/* Card 1: Resume Lecture */}
          <div className="priority-card blue-theme">
            <div className="pcard-top">
              <div className="pcard-icon-circle blue">
                <PlayCircle size={22} color="#0033A0" />
              </div>
              <span className="pcard-tag">Resume Learning</span>
            </div>
            <h3 className="pcard-title">Modern Indian History</h3>
            <p className="pcard-sub">Chapter 4: The Revolt of 1857 & British Impact</p>
            <div className="pcard-prog-bar">
              <div className="prog-label">
                <span>Progress</span>
                <strong>65% Completed</strong>
              </div>
              <div className="prog-track">
                <div className="prog-fill" style={{ width: '65%', backgroundColor: '#0033A0' }}></div>
              </div>
            </div>
            <button className="btn-pcard-primary" onClick={() => navigate('/videos/history-1857')}>
              Continue Watching <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 2: Upcoming Live Class */}
          <div className="priority-card red-theme">
            <div className="pcard-top">
              <div className="live-pulse-badge">
                <span className="live-dot-pulse"></span> LIVE SOON
              </div>
              <span className="pcard-time-tag">
                <Clock size={13} /> in {timeRemaining}
              </span>
            </div>
            <h3 className="pcard-title">Indian Polity: Fundamental Rights</h3>
            <p className="pcard-sub">By Dr. S. Mehta • 1,420 Aspirants Attending</p>
            <div className="live-fac-info">
              <span className="fac-pill">Free Sovereign Masterclass</span>
            </div>
            <div className="pcard-actions-duo">
              <button className="btn-pcard-primary red" onClick={() => navigate('/videos/v2')}>
                Join Room <ArrowRight size={16} />
              </button>
              <button 
                className={`btn-pcard-ghost ${reminderSet ? 'set' : ''}`}
                onClick={() => {
                  setReminderSet(true);
                  setTimeout(() => setReminderSet(false), 4000);
                }}
              >
                <Bell size={14} /> {reminderSet ? 'Alert Set! ✓' : 'Remind Me'}
              </button>
            </div>
          </div>

          {/* Card 3: Daily Quiz */}
          <div className="priority-card orange-theme">
            <div className="pcard-top">
              <div className="pcard-icon-circle orange">
                <Target size={22} color="#FE6500" />
              </div>
              <span className="streak-fire-pill">
                <Flame size={14} color="#C2410C" /> 12d Streak
              </span>
            </div>
            <h3 className="pcard-title">Daily Current Affairs Sprint</h3>
            <p className="pcard-sub">15 High-Yield Questions • 15 Mins • All India Rank</p>
            <div className="quiz-highlights">
              <span>🎯 +25 XP</span>
              <span>⚡ Timed Test</span>
              <span>📜 NTA Format</span>
            </div>
            <button className="btn-pcard-primary orange" onClick={() => navigate('/practice')}>
              Start Daily Quiz <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 4: 24/7 AI Doubt Mentor */}
          <div className="priority-card purple-theme">
            <div className="pcard-top">
              <div className="pcard-icon-circle purple">
                <Brain size={22} color="#7C3AED" />
              </div>
              <span className="pcard-tag purple">AI 24/7 Mentor</span>
            </div>
            <h3 className="pcard-title">Ask Instant Doubts</h3>
            <p className="pcard-sub">Bilingual voice & text assistance aligned with NCERT & standard UPSC references.</p>
            <div className="ai-chips-list">
              <span className="ai-chip">Polity</span>
              <span className="ai-chip">Economy</span>
              <span className="ai-chip">Geography</span>
            </div>
            <button className="btn-pcard-primary purple" onClick={() => navigate('/doubt-solver')}>
              Ask AI Doubt <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Main 2-Column Grid: Left Content (70%) + Right Sidebar (30%) */}
      <div className="dash-main-layout">
        {/* Left Column */}
        <div className="dash-content-left">
          {/* Quick Metrics Strip */}
          <section className="dash-metrics-grid">
            {quickStats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="metric-tile-card" 
                  onClick={() => navigate(stat.path)}
                  title="Click to view full details"
                >
                  <div className="metric-icon-box" style={{ backgroundColor: stat.bg, color: stat.color }}>
                    <IconComp size={20} />
                  </div>
                  <div className="metric-text-box">
                    <span className="metric-val">{stat.value}</span>
                    <span className="metric-label">{stat.title}</span>
                    <span className="metric-sub">{stat.sub}</span>
                  </div>
                </div>
              );
            })}
          </section>

          {/* 30-Day Revision Plan */}
          <section className="dash-section-card">
            <div className="section-head-bar">
              <div className="head-title-group">
                <Calendar size={20} color="#0033A0" />
                <h3>Your 30-Day High-Yield Revision Plan</h3>
              </div>
              <button className="btn-link-action" onClick={() => navigate('/diagnostic/result')}>
                Full Roadmap →
              </button>
            </div>

            {/* Week Selector Tabs */}
            <div className="week-pills-row">
              {[1, 2, 3, 4].map(week => (
                <button 
                  key={week} 
                  className={`week-pill ${selectedWeek === week ? 'active' : ''}`}
                  onClick={() => setSelectedWeek(week)}
                >
                  Week {week} {week === 1 ? '(Current)' : ''}
                </button>
              ))}
            </div>

            {/* Task Item Rows */}
            <div className="revision-tasks-list">
              {revisionPlan.map((task) => {
                const isDone = !!completedTasks[task.day];
                return (
                  <div 
                    key={task.day} 
                    className={`task-row-card ${isDone ? 'done' : ''}`}
                  >
                    <button 
                      className={`task-check-circle ${isDone ? 'checked' : ''}`}
                      onClick={() => toggleTask(task.day)}
                      title={isDone ? 'Mark as Incomplete' : 'Mark as Done'}
                    >
                      {isDone ? <Check size={14} color="#FFF" /> : <Circle size={14} color="#CBD5E1" />}
                    </button>

                    <div className="task-day-badge">Day {task.day}</div>

                    <div className="task-info-col">
                      <strong className="task-sub-name">{task.subject}</strong>
                      <p className="task-topic-desc">{task.topic}</p>
                    </div>

                    <div className="task-time-chip">
                      <Clock size={12} /> {task.time}
                    </div>

                    <button className="btn-task-action" onClick={() => navigate('/practice')}>
                      Practice <ChevronRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Upcoming Faculty Schedule */}
          <section className="dash-section-card">
            <div className="section-head-bar">
              <div className="head-title-group">
                <BookOpen size={20} color="#024A00" />
                <h3>Upcoming Live Sovereign Lectures</h3>
              </div>
              <button className="btn-link-action" onClick={() => navigate('/videos')}>
                View Timetable →
              </button>
            </div>

            <div className="faculty-lectures-list">
              {upcomingClasses.map((item, idx) => (
                <div key={idx} className="fac-lecture-tile">
                  <div className="fac-avatar-box">
                    <PlayCircle size={22} color="#0033A0" />
                  </div>
                  <div className="fac-lecture-details">
                    <strong>{item.title}</strong>
                    <p>{item.faculty} • <span className="text-green-strong">{item.enrolled}</span></p>
                  </div>
                  <div className="fac-time-col">
                    <span className="fac-time-badge">{item.time}</span>
                    <button className="btn-fac-join" onClick={() => navigate('/videos/v2')}>
                      Join Class
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar) */}
        <aside className="dash-content-right">
          {/* National Standing Card */}
          <div className="dash-side-card standing-widget" onClick={() => navigate('/leaderboard')}>
            <div className="widget-top-flex">
              <div className="widget-icon-wrap gold">
                <Trophy size={22} color="#D97706" />
              </div>
              <span className="widget-tag">All India Standing</span>
            </div>
            <div className="widget-rank-number">
              #4,521 <span className="total-span">/ 1,80,000 Aspirants</span>
            </div>
            <p className="widget-sub-note">
              <Flame size={14} color="#FE6500" /> <strong>Top 2.5%</strong> in UPSC Civil Services
            </p>
            <div className="widget-progress-strip">
              <div className="prog-track">
                <div className="prog-fill gold" style={{ width: '97.5%' }}></div>
              </div>
            </div>
            <button className="btn-side-action" onClick={() => navigate('/leaderboard')}>
              Open Leaderboard <ChevronRight size={16} />
            </button>
          </div>

          {/* 1-on-1 Topper Mentorship Card */}
          <div className="dash-side-card mentorship-widget">
            <div className="widget-top-flex">
              <div className="widget-icon-wrap blue">
                <Users size={22} color="#0033A0" />
              </div>
              <span className="widget-tag green">100% Free Sovereign Seat</span>
            </div>
            <h4 className="side-card-title">1-on-1 Topper Mentorship</h4>
            <p className="side-card-desc">
              Book a free 30-min strategy video session with verified UPSC toppers & serving civil servants.
            </p>
            <div className="topper-avatars-cluster">
              <div className="topper-avatar" title="Dr. S. Mehta (AIR 14)">SM</div>
              <div className="topper-avatar" title="Anjali Sharma (AIR 45)">AS</div>
              <div className="topper-avatar" title="Ravi Verma (AIR 82)">RV</div>
              <span className="topper-count-tag">+6 Available Today</span>
            </div>
            <button className="btn-side-action primary" onClick={() => navigate('/mentors')}>
              Book Free Mentorship Session <ArrowRight size={16} />
            </button>
          </div>

          {/* Aspirant Quick Tools */}
          <div className="dash-side-card tools-widget">
            <h4 className="side-card-title">Aspirant Tool Vault</h4>
            <div className="tools-button-stack">
              <button className="tool-row-btn" onClick={() => navigate('/mock-tests')}>
                <FileText size={18} color="#0033A0" />
                <div className="tool-text">
                  <strong>NTA Mock Test Engine</strong>
                  <span>Full-length simulated tests</span>
                </div>
                <ChevronRight size={16} />
              </button>

              <button className="tool-row-btn" onClick={() => navigate('/syllabus')}>
                <Compass size={18} color="#024A00" />
                <div className="tool-text">
                  <strong>Official Syllabus Tracker</strong>
                  <span>68% of Syllabus Covered</span>
                </div>
                <ChevronRight size={16} />
              </button>

              <button className="tool-row-btn" onClick={() => navigate('/videos')}>
                <Download size={18} color="#FE6500" />
                <div className="tool-text">
                  <strong>NCERT PDF Capsules</strong>
                  <span>Offline study materials</span>
                </div>
                <ChevronRight size={16} />
              </button>

              <button className="tool-row-btn" onClick={() => navigate('/profile')}>
                <Award size={18} color="#7C3AED" />
                <div className="tool-text">
                  <strong>My Merit Badges & Dossier</strong>
                  <span>6 Badges Earned</span>
                </div>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default StudentDashboard;
