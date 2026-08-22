import React, { useState } from 'react';
import { 
  Users, Activity, PlayCircle, BookOpen, TrendingUp, TrendingDown,
  ArrowUpRight, ArrowDownRight, BookCopy, MoreHorizontal, Download,
  Radio, Shield, Award, CheckCircle2, Clock, Globe, Filter, RefreshCw,
  Search, ChevronRight, Server, AlertCircle, Sparkles, Building2, BarChart3
} from 'lucide-react';
import { 
  AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';
import { useNavigate } from 'react-router-dom';
import './MinistryDashboard.css';

const enrollmentTrend = [
  { month: 'Jan', registered: 28.4, active: 11.2, mocks: 4.8 },
  { month: 'Feb', registered: 31.2, active: 12.8, mocks: 5.9 },
  { month: 'Mar', registered: 34.6, active: 14.5, mocks: 7.2 },
  { month: 'Apr', registered: 37.8, active: 15.9, mocks: 8.6 },
  { month: 'May', registered: 40.5, active: 17.2, mocks: 9.8 },
  { month: 'Jun', registered: 42.8, active: 18.6, mocks: 11.4 }
];

const examStreamData = [
  { name: 'UPSC CSE', count: 1240000, pct: 29, color: '#002B7F' },
  { name: 'SSC (CGL/CHSL)', count: 1150000, pct: 27, color: '#FE6500' },
  { name: 'Banking (IBPS/SBI)', count: 680000, pct: 16, color: '#024A00' },
  { name: 'Railway (RRB)', count: 520000, pct: 12, color: '#DC2626' },
  { name: 'NEET UG', count: 340000, pct: 8, color: '#7E22CE' },
  { name: 'JEE (Main/Adv)', count: 210000, pct: 5, color: '#0284C7' },
  { name: 'State PSCs', count: 140000, pct: 3, color: '#D97706' }
];

const liveOperationsFeed = [
  { id: 1, type: 'broadcast', title: 'PM e-VIDYA Ch 22: Constitutional Law Masterclass', stat: '42,800 Concurrent Learners', time: 'Live Now', badge: 'Broadcast' },
  { id: 2, type: 'mock', title: 'All-India SSC CGL Tier-1 Sprint Mock #14', stat: '18,450 Submissions', time: '8 mins ago', badge: 'NTA CBT' },
  { id: 3, type: 'mentor', title: '1-on-1 Civil Services Mentorship by IAS Officer Toppers', stat: '124 Active Rooms', time: 'Ongoing', badge: 'Mentorship' },
  { id: 4, type: 'ai', title: '24/7 AI Doubt Solver queries resolved', stat: '98,400 Doubts Today (99.4% Acc)', time: 'Live Stream', badge: 'AI Engine' }
];

const nationalStateMatrix = [
  { rank: 1, state: 'Uttar Pradesh', code: 'UP', students: '9,42,100', dau: '4,10,000', avgScore: 74.2, topExam: 'SSC CGL', aspirationalReach: '94%', growth: '+14.2%' },
  { rank: 2, state: 'Maharashtra', code: 'MH', students: '7,15,000', dau: '3,25,000', avgScore: 76.8, topExam: 'Banking PO', aspirationalReach: '91%', growth: '+11.8%' },
  { rank: 3, state: 'Bihar', code: 'BR', students: '6,80,000', dau: '3,10,000', avgScore: 71.5, topExam: 'Railway RRB', aspirationalReach: '98%', growth: '+18.4%' },
  { rank: 4, state: 'Rajasthan', code: 'RJ', students: '4,90,000', dau: '2,15,000', avgScore: 75.1, topExam: 'UPSC CSE', aspirationalReach: '88%', growth: '+9.6%' },
  { rank: 5, state: 'Madhya Pradesh', code: 'MP', students: '4,30,000', dau: '1,95,000', avgScore: 72.4, topExam: 'State PSC', aspirationalReach: '92%', growth: '+12.1%' },
  { rank: 6, state: 'Tamil Nadu', code: 'TN', students: '3,45,000', dau: '1,60,000', avgScore: 78.4, topExam: 'NEET UG', aspirationalReach: '86%', growth: '+8.7%' },
  { rank: 7, state: 'West Bengal', code: 'WB', students: '3,10,000', dau: '1,45,000', avgScore: 73.0, topExam: 'SSC / Rail', aspirationalReach: '89%', growth: '+10.4%' }
];

const MinistryDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | 'ytd'>('30d');
  const [searchState, setSearchState] = useState('');

  const filteredStates = nationalStateMatrix.filter(s => 
    s.state.toLowerCase().includes(searchState.toLowerCase()) ||
    s.topExam.toLowerCase().includes(searchState.toLowerCase())
  );

  return (
    <div className="ministry-executive-dashboard">
      {/* Official Top Command Header */}
      <div className="command-top-header">
        <div className="command-brand-block">
          <div className="command-badge-row">
            <span className="scheme-tag">SCHEME ID: PM-NEP-2026</span>
            <span className="cloud-tag"><Server size={12} /> NIC MeghRaj Sovereign Cloud</span>
            <span className="status-live-tag"><span className="pulse-dot-green"></span> SYSTEM NOMINAL</span>
          </div>
          <h1 className="command-main-title">Ministry Executive Command Center</h1>
          <p className="command-sub-title">National Competitive Examination Platform • Department of Higher Education, Govt. of India</p>
        </div>

        <div className="command-actions-bar">
          <div className="ist-clock-chip">
            <Clock size={14} color="#0033A0" />
            <span>IST 21 AUG 2026 • 17:00:00</span>
          </div>
          <button className="btn-cmd-secondary" onClick={() => alert('Exporting Official Parliamentary Digest (PDF)...')}>
            <Download size={14} /> Parliamentary Brief
          </button>
          <button className="btn-cmd-primary" onClick={() => navigate('/ministry/analytics')}>
            <BarChart3 size={14} /> State Analytics →
          </button>
        </div>
      </div>

      {/* 4 Real-time Executive KPI Metric Cards */}
      <div className="executive-kpi-grid">
        {/* KPI 1: Registered Aspirants */}
        <div className="exec-kpi-card highlight-blue">
          <div className="kpi-card-header">
            <span className="kpi-label">TOTAL REGISTERED ASPIRANTS</span>
            <div className="kpi-icon-wrap blue"><Users size={20} color="#002B7F" /></div>
          </div>
          <div className="kpi-big-number">42,84,650</div>
          <div className="kpi-footer-meta">
            <span className="trend-badge positive"><TrendingUp size={13} /> +14,250 today</span>
            <span className="meta-subtext">766 / 766 Districts Active</span>
          </div>
        </div>

        {/* KPI 2: Daily Active Learners */}
        <div className="exec-kpi-card highlight-saffron">
          <div className="kpi-card-header">
            <span className="kpi-label">DAILY ACTIVE LEARNERS (DAU)</span>
            <div className="kpi-icon-wrap saffron"><Activity size={20} color="#FE6500" /></div>
          </div>
          <div className="kpi-big-number">18,62,400</div>
          <div className="kpi-footer-meta">
            <span className="trend-badge positive"><TrendingUp size={13} /> +6.8% vs last week</span>
            <span className="meta-subtext">Peak: 3.4L Concurrent</span>
          </div>
        </div>

        {/* KPI 3: Live Broadcast & Content */}
        <div className="exec-kpi-card highlight-green">
          <div className="kpi-card-header">
            <span className="kpi-label">DIGITAL CONTENT & BROADCAST</span>
            <div className="kpi-icon-wrap green"><PlayCircle size={20} color="#024A00" /></div>
          </div>
          <div className="kpi-big-number">2,450+ Hrs</div>
          <div className="kpi-footer-meta">
            <span className="trend-badge neutral"><Radio size={13} /> 24 Live Channels</span>
            <span className="meta-subtext">SWAYAM Prabha Stream</span>
          </div>
        </div>

        {/* KPI 4: National Readiness Index */}
        <div className="exec-kpi-card highlight-red">
          <div className="kpi-card-header">
            <span className="kpi-label">NATIONAL MOCK READINESS INDEX</span>
            <div className="kpi-icon-wrap red"><Award size={20} color="#DC2626" /></div>
          </div>
          <div className="kpi-big-number">74.8%</div>
          <div className="kpi-footer-meta">
            <span className="trend-badge positive"><TrendingUp size={13} /> +3.2% MoM</span>
            <span className="meta-subtext">NTA CBT Calibration</span>
          </div>
        </div>
      </div>

      {/* Main Analytics Row: Growth Trendline & Exam Streams */}
      <div className="analytics-dual-section">
        {/* Left: National Enrollment Growth Curve */}
        <div className="analytics-panel-card chart-grow">
          <div className="panel-card-head">
            <div>
              <h3>National Enrollment & Active Engagement Growth (Lakhs)</h3>
              <p>Aggregated learner registration trajectory across 28 States & 8 UTs</p>
            </div>
            <div className="panel-controls">
              <button className={`filter-chip ${timeframe === '7d' ? 'active' : ''}`} onClick={() => setTimeframe('7d')}>7 Days</button>
              <button className={`filter-chip ${timeframe === '30d' ? 'active' : ''}`} onClick={() => setTimeframe('30d')}>30 Days</button>
              <button className={`filter-chip ${timeframe === 'ytd' ? 'active' : ''}`} onClick={() => setTimeframe('ytd')}>YTD 2026</button>
            </div>
          </div>

          <div className="chart-wrapper-box" style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={enrollmentTrend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="regGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#002B7F" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#002B7F" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="actGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FE6500" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#FE6500" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#64748B" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748B" fontSize={12} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{ background: '#0B192C', border: 'none', borderRadius: '8px', color: '#FFF' }}
                  formatter={(value: any, name: any) => [`${value} Lakhs`, name === 'registered' ? 'Total Registered' : name === 'active' ? 'Daily Active' : 'Mocks Taken']}
                />
                <Area type="monotone" dataKey="registered" stroke="#002B7F" strokeWidth={3} fillOpacity={1} fill="url(#regGrad)" />
                <Area type="monotone" dataKey="active" stroke="#FE6500" strokeWidth={2.5} fillOpacity={1} fill="url(#actGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-legend-row">
            <div className="leg-item"><span className="leg-bullet blue"></span> <strong>Total Enrolled:</strong> 42.8 Lakh</div>
            <div className="leg-item"><span className="leg-bullet saffron"></span> <strong>Active Learners:</strong> 18.6 Lakh</div>
            <div className="leg-item"><span className="leg-bullet green"></span> <strong>MeghRaj Uptime:</strong> 99.98%</div>
          </div>
        </div>

        {/* Right: Competitive Exam Stream Distribution */}
        <div className="analytics-panel-card chart-streams">
          <div className="panel-card-head">
            <div>
              <h3>Exam Stream Share</h3>
              <p>Curriculum demand breakdown</p>
            </div>
            <span className="exam-count-chip">7 Central & State Streams</span>
          </div>

          <div className="stream-bars-list">
            {examStreamData.map(st => (
              <div key={st.name} className="stream-bar-item">
                <div className="st-info-row">
                  <span className="st-name">{st.name}</span>
                  <span className="st-count">{st.count.toLocaleString('en-IN')} ({st.pct}%)</span>
                </div>
                <div className="st-progress-track">
                  <div className="st-progress-fill" style={{ width: `${st.pct}%`, backgroundColor: st.color }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Operations & Infrastructure Health Row */}
      <div className="live-ops-section">
        <div className="panel-card-head">
          <div className="live-header-lockup">
            <span className="live-pulse-badge">🔴 REAL-TIME OPERATIONS</span>
            <h3>National Streaming, CBT Simulation & AI Activity Feed</h3>
          </div>
          <span className="live-sync-text"><RefreshCw size={12} className="spin-slow" /> Auto-syncing every 5s</span>
        </div>

        <div className="live-ops-grid">
          {liveOperationsFeed.map(op => (
            <div key={op.id} className="live-op-card">
              <div className="op-top-row">
                <span className="op-badge">{op.badge}</span>
                <span className="op-time">{op.time}</span>
              </div>
              <h4>{op.title}</h4>
              <p className="op-stat-highlight">{op.stat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* National State Performance Matrix Table */}
      <div className="state-matrix-card">
        <div className="matrix-head-flex">
          <div>
            <h3>State & UT Performance Matrix</h3>
            <p>Comparative learning adoption across 28 States and 8 Union Territories</p>
          </div>
          
          <div className="matrix-search-box">
            <Search size={15} color="#64748B" />
            <input 
              type="text" 
              placeholder="Search State or Exam..." 
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
            />
          </div>
        </div>

        <div className="matrix-table-container">
          <table className="gov-matrix-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>State / Union Territory</th>
                <th>Enrolled Aspirants</th>
                <th>Daily Active (DAU)</th>
                <th>Avg Mock Score</th>
                <th>Dominant Exam</th>
                <th>Aspirational District Reach</th>
                <th>Monthly Growth</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredStates.map(st => (
                <tr key={st.state}>
                  <td><span className={`rank-badge rank-${st.rank}`}>#{st.rank}</span></td>
                  <td>
                    <div className="state-name-cell">
                      <span className="state-code-pill">{st.code}</span>
                      <strong>{st.state}</strong>
                    </div>
                  </td>
                  <td><strong>{st.students}</strong></td>
                  <td>{st.dau}</td>
                  <td>
                    <span className="score-pill">{st.avgScore}%</span>
                  </td>
                  <td><span className="exam-tag">{st.topExam}</span></td>
                  <td>
                    <div className="reach-bar-box">
                      <span>{st.aspirationalReach}</span>
                      <div className="reach-track"><div className="reach-fill" style={{ width: st.aspirationalReach }}></div></div>
                    </div>
                  </td>
                  <td>
                    <span className="growth-text-green">{st.growth}</span>
                  </td>
                  <td>
                    <button 
                      className="btn-state-drilldown"
                      onClick={() => navigate('/ministry/analytics')}
                      title="Drilldown to State Analytics"
                    >
                      Inspect <ChevronRight size={13} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MinistryDashboard;
