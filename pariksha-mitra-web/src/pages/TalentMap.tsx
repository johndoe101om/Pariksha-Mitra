import React, { useState } from 'react';
import { 
  Download, Filter, Search, TrendingUp, AlertTriangle, 
  Users, MapPin, Target, BookOpen, Brain, Award, Sparkles, 
  ArrowUpRight, ArrowDownRight, ShieldCheck, ChevronRight, CheckCircle2 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, 
  ResponsiveContainer, Cell, AreaChart, Area 
} from 'recharts';
import './TalentMap.css';

const subjectGaps = [
  { subject: 'Physics (Numerical & Mechanics)', gap: 45, fill: '#DC2626' },
  { subject: 'Quantitative Aptitude (Advanced)', gap: 38, fill: '#EA580C' },
  { subject: 'Organic Chemistry Reactions', gap: 32, fill: '#D97706' },
  { subject: 'Indian Polity & Constitutional Law', gap: 24, fill: '#002B7F' },
  { subject: 'English Reading Comprehension', gap: 18, fill: '#15803D' },
];

const stateTalentLeaderboard = [
  { state: 'Uttar Pradesh', code: 'UP', students: '9.42 Lakh', top1Pct: '9,420 Toppers', avgScore: 74.2, strength: 'General Studies & Hindi', gap: 'Physics & Quant' },
  { state: 'Maharashtra', code: 'MH', students: '7.15 Lakh', top1Pct: '7,150 Toppers', avgScore: 76.8, strength: 'Mathematics & Reasoning', gap: 'Biology' },
  { state: 'Bihar', code: 'BR', students: '6.80 Lakh', top1Pct: '6,800 Toppers', avgScore: 71.5, strength: 'Railway & SSC Quant', gap: 'English Comprehension' },
  { state: 'Rajasthan', code: 'RJ', students: '4.90 Lakh', top1Pct: '4,900 Toppers', avgScore: 75.1, strength: 'NEET / JEE Physics', gap: 'Current Affairs' },
  { state: 'Kerala', code: 'KL', students: '1.95 Lakh', top1Pct: '2,900 Toppers', avgScore: 79.4, strength: 'Biology & English', gap: 'Quantitative Speed' },
  { state: 'UT of Ladakh', code: 'LA', students: '42,000', top1Pct: '420 Toppers', avgScore: 72.8, strength: 'Defence Studies', gap: '2G Bandwidth Sync' }
];

const topPerformers = [
  { id: 1, name: 'Rahul Sharma', state: 'Uttar Pradesh', district: 'Lucknow', exam: 'UPSC CSE 2026', score: 'Top 0.1% (Score: 188/200)', subject: 'Polity & Ethics', coachingHrs: '420 hrs' },
  { id: 2, name: 'Priya Patel', state: 'Gujarat', district: 'Ahmedabad', exam: 'NEET UG 2026', score: '710 / 720 (99.96 PR)', subject: 'Biology & Genetics', coachingHrs: '380 hrs' },
  { id: 3, name: 'Arun Kumar', state: 'Bihar', district: 'Gaya (Aspirational)', exam: 'SSC CGL', score: '194.5 / 200 (Rank #14)', subject: 'Quantitative Speed', coachingHrs: '510 hrs' },
  { id: 4, name: 'Sneha Reddy', state: 'Telangana', district: 'Hyderabad', exam: 'JEE Advanced', score: 'Top 0.2% (Maths: 98%)', subject: 'Advanced Calculus', coachingHrs: '460 hrs' },
  { id: 5, name: 'Tsering Namgyal', state: 'UT of Ladakh', district: 'Leh', exam: 'NDA & Defence', score: 'Top 0.5% (Rank #42)', subject: 'General Ability', coachingHrs: '340 hrs' }
];

const TalentMap: React.FC = () => {
  const [selectedState, setSelectedState] = useState('Uttar Pradesh');
  const [filterExam, setFilterExam] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const selectedStateData = stateTalentLeaderboard.find(s => s.state === selectedState) || stateTalentLeaderboard[0];

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredToppers = topPerformers.filter(t => 
    (filterExam === 'All' || t.exam.includes(filterExam)) &&
    (t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.state.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="talent-mgmt-page">
      {/* 1. Top Header */}
      <div className="tm-top-header">
        <div className="tm-title-lockup">
          <div className="badge-row">
            <span className="talent-tag"><Brain size={12} /> NATIONAL TALENT TELEMETRY</span>
            <span className="ai-gap-tag">AI Learning Gap &amp; Excellence Radar</span>
          </div>
          <h1>National Talent Intelligence &amp; Learning Gap Radar</h1>
          <p>Geospatial tracking of academic excellence, subject-wise bottlenecks, and high-potential rural toppers across India.</p>
        </div>

        <div className="tm-header-actions">
          <button className="btn-export-talent" onClick={() => triggerToast('Generating National Talent Distribution & Equity Report (PDF)...')}>
            <Download size={14} /> Export Talent Report (PDF)
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="tm-toast-banner">
          <CheckCircle2 size={16} color="#15803D" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. 4-Column KPI Grid */}
      <div className="tm-kpi-grid">
        <div className="tm-kpi-card border-blue">
          <div className="kpi-icon bg-blue"><Award size={20} color="#002B7F" /></div>
          <div>
            <span className="kpi-label">Top 1% Super-Aspirants</span>
            <h3>42,800 Aspirants</h3>
            <p className="text-blue">98th+ Percentile in Mocks</p>
          </div>
        </div>

        <div className="tm-kpi-card border-saffron">
          <div className="kpi-icon bg-saffron"><AlertTriangle size={20} color="#C2410C" /></div>
          <div>
            <span className="kpi-label">Critical Subject Gaps</span>
            <h3>Physics &amp; Quant</h3>
            <p className="text-saffron">38% to 45% Error Rate</p>
          </div>
        </div>

        <div className="tm-kpi-card border-green">
          <div className="kpi-icon bg-green"><TrendingUp size={20} color="#15803D" /></div>
          <div>
            <span className="kpi-label">Aspirational Growth Star</span>
            <h3>+24% Score Lift</h3>
            <p className="text-green">Balrampur &amp; Gaya Districts</p>
          </div>
        </div>

        <div className="tm-kpi-card border-purple">
          <div className="kpi-icon bg-purple"><Target size={20} color="#7E22CE" /></div>
          <div>
            <span className="kpi-label">Proactive Interventions</span>
            <h3>18,400 Dispatched</h3>
            <p className="text-purple">1-on-1 Mentorship Pairings</p>
          </div>
        </div>
      </div>

      {/* 3. Main Analytics Grid */}
      <div className="tm-workspace-grid">
        {/* Left: Charts & Matrices */}
        <div className="tm-charts-col">
          {/* State Performance Matrix */}
          <div className="tm-card">
            <div className="card-header-flex">
              <div>
                <h3>State-wise Academic Benchmarks</h3>
                <p>Click on any state to inspect localized learning gap telemetry</p>
              </div>
              <span className="badge-live">Pan-India Telemetry</span>
            </div>

            <div className="state-selection-ribbon">
              {stateTalentLeaderboard.map(s => (
                <button 
                  key={s.state} 
                  className={`state-select-pill ${selectedState === s.state ? 'active' : ''}`}
                  onClick={() => setSelectedState(s.state)}
                >
                  <span className="pill-code">{s.code}</span>
                  <span className="pill-name">{s.state}</span>
                </button>
              ))}
            </div>

            <div className="state-spotlight-box">
              <div className="spot-header">
                <h4>{selectedStateData.state} ({selectedStateData.code})</h4>
                <span className="spot-score">Avg Percentile: {selectedStateData.avgScore}%</span>
              </div>
              <div className="spot-grid-3">
                <div className="spot-item">
                  <label>Total Registered</label>
                  <strong>{selectedStateData.students}</strong>
                </div>
                <div className="spot-item">
                  <label>Top 1% Talent Pool</label>
                  <strong className="text-blue">{selectedStateData.top1Pct}</strong>
                </div>
                <div className="spot-item">
                  <label>Primary Academic Strength</label>
                  <strong className="text-green">{selectedStateData.strength}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Subject-wise Learning Gap Analysis Chart */}
          <div className="tm-card">
            <div className="card-header-flex">
              <div>
                <h3>National Subject-Wise Learning Gap Analysis</h3>
                <p>AI diagnostic question error rate across 50,000+ test submissions</p>
              </div>
            </div>

            <div className="chart-container" style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={subjectGaps} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                  <XAxis type="number" unit="%" domain={[0, 50]} />
                  <YAxis dataKey="subject" type="category" width={180} tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }} />
                  <RechartsTooltip formatter={(val) => [`${val}% of Students Struggle`, 'Learning Gap']} />
                  <Bar dataKey="gap" radius={[0, 4, 4, 0]}>
                    {subjectGaps.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right: Topper Trajectories */}
        <div className="tm-toppers-col">
          <div className="tm-card full-height">
            <div className="card-header-flex">
              <div>
                <h3>All-India Topper Trajectories</h3>
                <p>Rural &amp; Tier-2/3 stars on track for top national ranks</p>
              </div>
            </div>

            <div className="topper-filters-row">
              <div className="tm-search-box">
                <Search size={13} color="#64748B" />
                <input 
                  type="text" 
                  placeholder="Search topper or state..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <select value={filterExam} onChange={(e) => setFilterExam(e.target.value)} className="tm-exam-filter">
                <option value="All">All Exams</option>
                <option value="UPSC">UPSC CSE</option>
                <option value="NEET">NEET UG</option>
                <option value="SSC">SSC CGL</option>
                <option value="JEE">JEE Main/Adv</option>
              </select>
            </div>

            <div className="topper-cards-list">
              {filteredToppers.map(topper => (
                <div key={topper.id} className="topper-item-card">
                  <div className="topper-avatar-circle">
                    {topper.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="topper-info-block">
                    <div className="topper-name-row">
                      <h4>{topper.name}</h4>
                      <span className="score-badge">{topper.score}</span>
                    </div>
                    <p className="topper-meta">
                      <MapPin size={11} /> {topper.district}, {topper.state} • <strong>{topper.exam}</strong>
                    </p>
                    <div className="topper-extra-bar">
                      <span><strong>Key Strength:</strong> {topper.subject}</span>
                      <span><strong>AI App Usage:</strong> {topper.coachingHrs}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="intervention-action-footer">
              <button className="btn-dispatch-mentors" onClick={() => triggerToast('Dispatched 50 IAS/IPS Topper Mentorship Invites to Rural Stars.')}>
                <Sparkles size={14} /> Dispatch Free 1-on-1 Topper Mentorship Invites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentMap;
