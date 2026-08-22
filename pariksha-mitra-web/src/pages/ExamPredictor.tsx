import React, { useState } from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, AreaChart, Area
} from 'recharts';
import { 
  Target, TrendingUp, CheckCircle, Clock, BookOpen, ChevronRight, Award, Zap, Brain, 
  Flame, CheckCircle2, AlertTriangle, ArrowUpRight, Sparkles, ShieldCheck, BarChart3,
  Calendar, Layers, Filter
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './ExamPredictor.css';

const radarData = [
  { subject: 'Quantitative Aptitude', score: 128, max: 150, grade: 'Strong' },
  { subject: 'Logical Reasoning', score: 136, max: 150, grade: 'Excellent' },
  { subject: 'English Comprehension', score: 115, max: 150, grade: 'Average' },
  { subject: 'General Awareness', score: 98, max: 150, grade: 'Needs Focus' },
  { subject: 'Computer Knowledge', score: 120, max: 150, grade: 'Good' },
];

const trendData = [
  { week: 'Week 1', score: 110, cutoff: 135 },
  { week: 'Week 2', score: 118, cutoff: 135 },
  { week: 'Week 3', score: 126, cutoff: 135 },
  { week: 'Week 4', score: 138, cutoff: 135 },
  { week: 'Week 5', score: 152, cutoff: 135 },
];

const strategicActions = [
  {
    id: 1,
    priority: 'high',
    subject: 'General Awareness',
    topic: 'Modern Indian History & Govt Schemes',
    expectedGain: '+8 to 12 Marks',
    timeEstimate: '4 hours',
    status: 'pending'
  },
  {
    id: 2,
    priority: 'medium',
    subject: 'English Comprehension',
    topic: 'Reading Comprehension & Cloze Test',
    expectedGain: '+6 to 8 Marks',
    timeEstimate: '3 hours',
    status: 'in-progress'
  },
  {
    id: 3,
    priority: 'maintain',
    subject: 'Logical Reasoning',
    topic: 'Syllogism & Seating Arrangement Speed',
    expectedGain: '+4 Marks',
    timeEstimate: '2 hours',
    status: 'completed'
  }
];

export const ExamPredictor: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState('SSC CGL Tier 1 (2026)');

  return (
    <div className="exam-predictor-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'AI Exam Predictor', labelHi: 'परीक्षा भविष्यवक्ता' }
        ]}
        title="AI Exam Success Predictor"
        titleHi="राष्ट्रीय परीक्षा सफलता भविष्यवक्ता"
        description="Machine-learning calibrated score forecasting powered by 1.2M+ historical mock test attempts & official syllabus matrices."
        descriptionHi="12 लाख से अधिक परीक्षा डेटा व आधिकारिक पाठ्यक्रम पर आधारित सटीक एआई स्कोर भविष्यवाणी।"
        icon={<Brain size={28} />}
        badge="NIC Sovereign AI Engine"
        actions={
          <div className="ep-hero-actions">
            <span className="ep-exam-pill">
              <Sparkles size={14} /> {selectedExam}
            </span>
          </div>
        }
      />

      <main role="main" className="ep-main-workspace">
        {/* Top 3 KPI Showcase Cards */}
        <section className="ep-kpi-showcase-grid" aria-label="Key Performance Indicators">
          {/* Card 1: Main Predicted Score Gauge Card */}
          <div className="ep-kpi-card ep-score-hero-card">
            <div className="ep-kpi-head">
              <div className="ep-kpi-icon-wrap saffron">
                <Target size={22} />
              </div>
              <div>
                <span className="ep-kpi-label">Predicted Score Range</span>
                <span className="ep-kpi-label-hi">अनुमानित स्कोर सीमा</span>
              </div>
              <span className="ep-confidence-chip">High Confidence (88%)</span>
            </div>

            <div className="ep-score-display-block">
              <div className="ep-score-numbers">
                <span className="ep-score-val">142 – 158</span>
                <span className="ep-score-max">/ 200</span>
              </div>
              <p className="ep-score-subtext">
                Target Cutoff: <strong>135 Marks</strong> • Expected Buffer: <span className="text-green">+15 Marks</span>
              </p>
            </div>

            <div className="ep-meter-wrap">
              <div className="ep-meter-track">
                <div className="ep-meter-fill" style={{ width: '78%' }}></div>
                <div className="ep-cutoff-marker" style={{ left: '67.5%' }}>
                  <span className="cutoff-tag">Cutoff 135</span>
                </div>
              </div>
              <div className="ep-meter-labels">
                <span>0</span>
                <span>Qualifying Zone (135+)</span>
                <span>200</span>
              </div>
            </div>

            <div className="ep-rank-pill-box">
              <Award size={16} color="#FE6500" />
              <span>Predicted All-India Rank: <strong>Top 4.8%</strong> (AIR 4,200 – 6,100)</span>
            </div>
          </div>

          {/* Card 2: Probability of Selection Ring */}
          <div className="ep-kpi-card ep-prob-card">
            <div className="ep-kpi-head">
              <div className="ep-kpi-icon-wrap blue">
                <TrendingUp size={22} />
              </div>
              <div>
                <span className="ep-kpi-label">Selection Probability</span>
                <span className="ep-kpi-label-hi">चयन की संभावना</span>
              </div>
              <span className="ep-badge-safe">Safe Zone</span>
            </div>

            <div className="ep-prob-center-visual">
              <div className="ep-circle-gauge">
                <div className="ep-gauge-inner">
                  <span className="ep-prob-percent">86%</span>
                  <span className="ep-prob-lbl">Probability</span>
                </div>
              </div>
              <div className="ep-prob-details">
                <div className="ep-stat-row">
                  <span className="dot green"></span>
                  <span>Prelims Qualifying: <strong>94%</strong></span>
                </div>
                <div className="ep-stat-row">
                  <span className="dot saffron"></span>
                  <span>Mains Merit Entry: <strong>78%</strong></span>
                </div>
                <div className="ep-stat-row">
                  <span className="dot blue"></span>
                  <span>Final Allocation: <strong>72%</strong></span>
                </div>
              </div>
            </div>

            <div className="ep-ai-note">
              <Sparkles size={14} color="#0033A0" />
              <span>Based on 15 Full Mocks & 120 hrs video revisions completed.</span>
            </div>
          </div>

          {/* Card 3: 4 Behavioral Calibration Factors */}
          <div className="ep-kpi-card ep-factors-card">
            <div className="ep-kpi-head">
              <div className="ep-kpi-icon-wrap green">
                <Zap size={22} />
              </div>
              <div>
                <span className="ep-kpi-label">Prediction Factors</span>
                <span className="ep-kpi-label-hi">आकलन कारक</span>
              </div>
            </div>

            <div className="ep-factors-grid">
              <div className="ep-factor-item">
                <div className="factor-icon-pill blue">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="factor-val">120 hrs</span>
                  <span className="factor-name">Lectures Watched</span>
                </div>
              </div>

              <div className="ep-factor-item">
                <div className="factor-icon-pill green">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <span className="factor-val">15 Tests</span>
                  <span className="factor-name">Full Mocks Taken</span>
                </div>
              </div>

              <div className="ep-factor-item">
                <div className="factor-icon-pill saffron">
                  <Target size={16} />
                </div>
                <div>
                  <span className="factor-val">82.4%</span>
                  <span className="factor-name">Practice Accuracy</span>
                </div>
              </div>

              <div className="ep-factor-item">
                <div className="factor-icon-pill amber">
                  <Flame size={16} />
                </div>
                <div>
                  <span className="factor-val">12 Days</span>
                  <span className="factor-name">Active Streak 🔥</span>
                </div>
              </div>
            </div>

            <div className="ep-benchmark-strip">
              <ShieldCheck size={14} color="#024A00" />
              <span>NIC Benchmarked: 85.2% accuracy in SSC CGL 2025</span>
            </div>
          </div>
        </section>

        {/* 2-Column Analytics & Recommendations Grid */}
        <div className="ep-content-dual-grid">
          {/* Left: Subject Radar & Progression Chart */}
          <div className="ep-chart-column">
            {/* Subject Strength Radar */}
            <section className="ep-panel-card" aria-labelledby="radar-head">
              <div className="ep-panel-header">
                <div className="ep-panel-title-lockup">
                  <BarChart3 size={20} color="#0033A0" />
                  <h2 id="radar-head" className="ep-panel-title">
                    Subject Competency Matrix <span className="hi">विषयवार दक्षता विश्लेषण</span>
                  </h2>
                </div>
                <span className="ep-panel-tag">5 Subjects Tracked</span>
              </div>

              <div className="ep-radar-wrap">
                <ResponsiveContainer width="100%" height={260}>
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                    <PolarGrid stroke="#E2E8F0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} stroke="#CBD5E1" />
                    <Radar name="Your Score" dataKey="score" stroke="#0033A0" fill="#0033A0" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Subject Breakdown Pills */}
              <div className="ep-subj-pills-row">
                {radarData.map(item => (
                  <div key={item.subject} className="ep-subj-pill">
                    <span className="subj-name">{item.subject.split(' ')[0]}</span>
                    <span className="subj-score">{item.score}/150</span>
                    <span className={`subj-grade ${item.grade.toLowerCase().replace(' ', '-')}`}>
                      {item.grade}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Score Progression Trend */}
            <section className="ep-panel-card" aria-labelledby="trend-head">
              <div className="ep-panel-header">
                <div className="ep-panel-title-lockup">
                  <TrendingUp size={20} color="#FE6500" />
                  <h2 id="trend-head" className="ep-panel-title">
                    5-Week Score Trajectory <span className="hi">साप्ताहिक स्कोर वृद्धि रुझान</span>
                  </h2>
                </div>
                <span className="ep-trend-delta">+42 Marks Growth</span>
              </div>

              <div className="ep-line-chart-wrap">
                <ResponsiveContainer width="100%" height={220}>
                  <AreaChart data={trendData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0033A0" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0033A0" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="week" tick={{ fill: '#64748B', fontSize: 11 }} />
                    <YAxis domain={[90, 170]} tick={{ fill: '#64748B', fontSize: 11 }} />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="cutoff" stroke="#FE6500" strokeDasharray="4 4" name="Target Cutoff" />
                    <Area type="monotone" dataKey="score" stroke="#0033A0" strokeWidth={3} fill="url(#scoreGradient)" name="Your Predicted Score" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>
          </div>

          {/* Right: AI Strategic Action Roadmap */}
          <div className="ep-strategy-column">
            <section className="ep-panel-card" aria-labelledby="actions-head">
              <div className="ep-panel-header">
                <div className="ep-panel-title-lockup">
                  <Layers size={20} color="#024A00" />
                  <h2 id="actions-head" className="ep-panel-title">
                    AI Strategic Action Plan <span className="hi">स्कोर वृद्धि कार्ययोजना</span>
                  </h2>
                </div>
                <span className="ep-potential-gain">+18 Marks Opportunity</span>
              </div>

              <p className="ep-strategy-desc">
                Addressing these 3 algorithmic weakness clusters can push your score from <strong>150</strong> to <strong>168+</strong>.
              </p>

              <div className="ep-action-cards-list">
                {strategicActions.map(action => (
                  <article key={action.id} className={`ep-action-item ${action.priority}`}>
                    <div className="ep-action-top">
                      <span className={`ep-priority-tag ${action.priority}`}>
                        {action.priority.toUpperCase()} PRIORITY
                      </span>
                      <span className="ep-gain-badge">{action.expectedGain}</span>
                    </div>

                    <h3 className="ep-action-topic">{action.topic}</h3>
                    <p className="ep-action-subject">{action.subject} • Est. Time: {action.timeEstimate}</p>

                    <div className="ep-action-footer">
                      <button className="ep-start-plan-btn" aria-label={`Start practice for ${action.topic}`}>
                        Start Adaptive Practice <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="ep-ai-disclaimer-box">
                <Brain size={16} color="#0033A0" />
                <p>
                  Predictions refresh automatically after every mock test and diagnostic assessment. Data is sovereignly processed on MeghRaj Cloud.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Sovereign GIGW 3.0 Compliance Footer */}
      <GIGWFooter />
    </div>
  );
};

export default ExamPredictor;
