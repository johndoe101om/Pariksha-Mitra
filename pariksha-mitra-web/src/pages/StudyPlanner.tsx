import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, Clock, Play, Pause, RotateCcw, Plus, RefreshCw, 
  BookOpen, AlertCircle, BarChart2, CheckCircle2, Sparkles, Flame, Target, 
  ArrowRight, ShieldCheck, Check, Calendar
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './StudyPlanner.css';

const mockWeeklyData = [
  { name: 'Mon', hours: 4.5 },
  { name: 'Tue', hours: 5.2 },
  { name: 'Wed', hours: 3.8 },
  { name: 'Thu', hours: 6.0 },
  { name: 'Fri', hours: 4.0 },
  { name: 'Sat', hours: 7.5 },
  { name: 'Sun', hours: 2.0 },
];

const mockTodayPlan = [
  { id: '1', time: '09:00 AM – 11:00 AM', subject: 'Quantitative Aptitude', topic: 'Algebra Basics & Quadratic Equations', color: '#0033A0', completed: true },
  { id: '2', time: '11:30 AM – 01:00 PM', subject: 'English Comprehension', topic: 'Reading Comprehension & Cloze Test', color: '#FE6500', completed: false },
  { id: '3', time: '02:30 PM – 04:30 PM', subject: 'Logical Reasoning', topic: 'Syllogism & Circular Seating Arrangement', color: '#024A00', completed: false },
];

const mockRevisions = [
  { id: '1', topic: 'Indian Polity – Fundamental Rights (Art 12–35)', urgency: 'High', days: '2 days overdue', icon: '⚡' },
  { id: '2', topic: 'Quantitative – Number System Divisibility Rules', urgency: 'Medium', days: 'Due today', icon: '📝' },
  { id: '3', topic: 'Modern History – Governor Generals & Acts', urgency: 'Normal', days: 'Due tomorrow', icon: '🏛️' },
];

export const StudyPlanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(3);
  const [todayTasks, setTodayTasks] = useState(mockTodayPlan);

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      if (!isBreak) {
        setIsBreak(true);
        setTimeLeft(5 * 60);
        setSessionsCompleted(prev => prev + 1);
      } else {
        setIsBreak(false);
        setTimeLeft(25 * 60);
      }
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, isBreak]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  const toggleTask = (id: string) => {
    setTodayTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="planner-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Study Planner', labelHi: 'अध्ययन योजनाकार' }
        ]}
        title="AI Dynamic Study Planner"
        titleHi="एआई अध्ययन समय-सारणी एवं योजनाकार"
        description="Smart time-blocked daily scheduling, Pomodoro deep focus intervals, and automated spaced repetition tracking."
        descriptionHi="दैनिक अध्ययन समय-सारणी, पोमोडोरो फोकस टाइमर और वैज्ञानिक अंतराल पुनरावृत्ति प्रणाली।"
        icon={<CalendarIcon size={28} />}
        badge="NEP 2020 Study Framework"
        actions={
          <div className="planner-hero-actions">
            <button className="hero-sync-btn" aria-label="Sync schedule to Google Calendar">
              <RefreshCw size={14} /> Sync Calendar
            </button>
            <button className="hero-add-btn" aria-label="Add study block">
              <Plus size={16} /> Add Block
            </button>
          </div>
        }
      />

      <main role="main" className="planner-workspace-grid">
        {/* Left Column: Schedule & Overview */}
        <div className="planner-left-col">
          {/* Target Countdown Card */}
          <section className="planner-card target-exam-card" aria-label="Target Exam Countdown">
            <div className="target-left-info">
              <div className="target-head-badge">
                <Target size={14} color="#FE6500" />
                <span>Target: SSC CGL Tier 1 (2026)</span>
              </div>
              <h2 className="target-title">
                47 Days Remaining <span className="hi">परीक्षा में 47 दिन शेष</span>
              </h2>
              <p className="target-quote">
                "Small daily disciplines repeated with consistency every day lead to monumental success."
              </p>
              <div className="target-progress-row">
                <div className="target-progress-bar">
                  <div className="target-progress-fill" style={{ width: '68%' }}></div>
                </div>
                <span className="target-progress-lbl">68% Syllabus Covered</span>
              </div>
            </div>

            <div className="target-circle-counter">
              <span className="target-days-num">47</span>
              <span className="target-days-lbl">DAYS LEFT</span>
            </div>
          </section>

          {/* Today's Schedule Time-Blocks */}
          <section className="planner-card" aria-labelledby="today-plan-head">
            <div className="pcard-head">
              <div className="pcard-title-group">
                <Clock size={20} color="#0033A0" />
                <h2 id="today-plan-head" className="pcard-title">
                  Today's Structured Time Blocks <span className="hi">आज की समय सारणी</span>
                </h2>
              </div>
              <span className="pcard-badge">3 Sessions Planned</span>
            </div>

            <div className="planner-blocks-list">
              {todayTasks.map((block) => (
                <div 
                  key={block.id} 
                  className={`plan-block-item ${block.completed ? 'completed' : ''}`}
                  style={{ borderLeftColor: block.color }}
                >
                  <div className="block-check-area" onClick={() => toggleTask(block.id)}>
                    <div className={`block-checkbox ${block.completed ? 'checked' : ''}`}>
                      {block.completed && <Check size={14} color="#FFFFFF" />}
                    </div>
                  </div>

                  <div className="block-content">
                    <div className="block-time-row">
                      <span className="block-time">{block.time}</span>
                      <span className="block-subj-tag" style={{ color: block.color, background: `${block.color}15` }}>
                        {block.subject}
                      </span>
                    </div>
                    <h3 className="block-topic">{block.topic}</h3>
                  </div>

                  <div className="block-right-action">
                    <button 
                      className="block-start-btn"
                      onClick={() => {
                        setIsActive(true);
                        setTimeLeft(25 * 60);
                      }}
                      title="Start Focus Timer for this block"
                    >
                      <Play size={14} /> Focus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Weekly Hours Analytics */}
          <section className="planner-card" aria-labelledby="weekly-head">
            <div className="pcard-head">
              <div className="pcard-title-group">
                <BarChart2 size={20} color="#FE6500" />
                <h2 id="weekly-head" className="pcard-title">
                  Weekly Study Hours Log <span className="hi">साप्ताहिक अध्ययन अवलोकन</span>
                </h2>
              </div>
              <span className="pcard-badge">Total: 33.0 hrs</span>
            </div>

            <div className="planner-chart-wrap">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={mockWeeklyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="name" tick={{ fill: '#64748B', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#64748B', fontSize: 12 }} />
                  <RechartsTooltip />
                  <Bar dataKey="hours" fill="#0033A0" radius={[6, 6, 0, 0]} name="Study Hours" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Right Column: Pomodoro & Spaced Repetition */}
        <div className="planner-right-col">
          {/* Pomodoro Focus Station */}
          <section className="planner-card pomodoro-card" aria-labelledby="pomo-head">
            <div className="pomodoro-header">
              <div className="pcard-title-group">
                <Flame size={22} color="#FFD54F" />
                <h2 id="pomo-head" className="pomo-title">
                  Pomodoro Deep Focus <span className="hi">फोकस टाइमर</span>
                </h2>
              </div>
              <span className="pomo-session-pill">Session {sessionsCompleted}/4</span>
            </div>

            <div className="pomodoro-visual-center">
              <div className={`pomo-ring-circle ${isActive ? 'pulsing' : ''}`}>
                <div className="pomo-ring-inner">
                  <span className="pomo-time-digits">{formatTime(timeLeft)}</span>
                  <span className="pomo-phase-lbl">{isBreak ? '☕ 5-Min Break' : '🧠 25-Min Study'}</span>
                </div>
              </div>

              <div className="pomo-controls-row">
                <button 
                  className={`pomo-ctrl-btn play ${isActive ? 'pause' : ''}`}
                  onClick={toggleTimer}
                  aria-label={isActive ? 'Pause timer' : 'Start timer'}
                >
                  {isActive ? <Pause size={20} /> : <Play size={20} />}
                  <span>{isActive ? 'Pause' : 'Start Focus'}</span>
                </button>
                <button 
                  className="pomo-ctrl-btn reset"
                  onClick={resetTimer}
                  aria-label="Reset timer"
                >
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>

            <div className="pomo-tip-box">
              <Sparkles size={16} color="#FFD54F" />
              <span>Scientific 25/5 rhythm boosts memory retention by up to 40%.</span>
            </div>
          </section>

          {/* Spaced Repetition Queue */}
          <section className="planner-card" aria-labelledby="revision-head">
            <div className="pcard-head">
              <div className="pcard-title-group">
                <BookOpen size={20} color="#024A00" />
                <h2 id="revision-head" className="pcard-title">
                  Spaced Repetition Queue <span className="hi">अंतराल पुनरावृत्ति</span>
                </h2>
              </div>
              <span className="pcard-badge warning">3 Due</span>
            </div>

            <div className="revision-queue-list">
              {mockRevisions.map((rev) => (
                <div key={rev.id} className={`revision-card ${rev.urgency.toLowerCase()}`}>
                  <div className="rev-icon-wrap">{rev.icon}</div>
                  <div className="rev-info">
                    <h3 className="rev-topic-name">{rev.topic}</h3>
                    <div className="rev-meta-row">
                      <span className={`rev-tag ${rev.urgency.toLowerCase()}`}>{rev.days}</span>
                      <span className="rev-sub-txt">Ebbinghaus Retention Matrix</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default StudyPlanner;
