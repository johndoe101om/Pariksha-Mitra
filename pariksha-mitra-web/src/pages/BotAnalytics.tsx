import React, { useState } from 'react';
import { 
  MessageCircle, Users, Activity, CheckCircle2, PieChart as PieChartIcon, 
  ArrowUpRight, ArrowDownRight, Clock, Zap, Smartphone, Radio, Globe, 
  Download, Filter, Search, Sparkles 
} from 'lucide-react';
import { 
  LineChart, Line, AreaChart, Area, PieChart, Pie, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell 
} from 'recharts';
import './BotAnalytics.css';

const dailyMessages = [
  { date: '1 Aug', msgs: 1200000 },
  { date: '5 Aug', msgs: 1450000 },
  { date: '10 Aug', msgs: 1380000 },
  { date: '15 Aug', msgs: 1620000 },
  { date: '20 Aug', msgs: 1870000 },
  { date: '23 Aug', msgs: 1940000 }
];

const channelData = [
  { name: 'WhatsApp Bot (Official Bhashini API)', value: 72, color: '#25D366' },
  { name: 'Telegram AI Community Desk', value: 18, color: '#0284C7' },
  { name: 'Gov SMS / 2G Offline Bot Sync', value: 10, color: '#FE6500' }
];

const featureUsage = [
  { feature: 'Daily Diagnostic MCQs', users: 850000, color: '#002B7F' },
  { feature: 'Instant Camera Doubt OCR', users: 620000, color: '#FE6500' },
  { feature: 'Live Class Schedule Alerts', users: 410000, color: '#15803D' },
  { feature: 'NTA CBT Result Verification', users: 280000, color: '#7E22CE' },
  { feature: 'Voice Notes (Bhashini Speech)', users: 195000, color: '#0284C7' }
];

const topStates = [
  { state: 'Uttar Pradesh', users: '4.20 Lakh', growth: '+14.2%', accuracy: '99.4%' },
  { state: 'Bihar', users: '3.10 Lakh', growth: '+18.6%', accuracy: '99.1%' },
  { state: 'Madhya Pradesh', users: '2.80 Lakh', growth: '+11.2%', accuracy: '99.6%' },
  { state: 'Rajasthan', users: '2.40 Lakh', growth: '+15.4%', accuracy: '99.3%' },
  { state: 'Maharashtra', users: '2.15 Lakh', growth: '+9.8%', accuracy: '99.5%' },
  { state: 'UT of Ladakh', users: '38,500', growth: '+22.4%', accuracy: '99.8%' }
];

const BotAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('Last 30 Days (August 2026)');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="bot-mgmt-page">
      {/* 1. Header Banner */}
      <div className="ba-top-header">
        <div className="ba-title-lockup">
          <div className="badge-row">
            <span className="bot-tag"><Smartphone size={12} /> AI ASSISTANT TELEMETRY</span>
            <span className="bhashini-engine-tag">Bhashini 22 Indian Languages Engine • v4.2</span>
          </div>
          <h1>WhatsApp &amp; Telegram AI Assistant Command Center</h1>
          <p>Real-time query volume, doubt resolution accuracy, and speech-to-text adoption across mobile chat channels.</p>
        </div>

        <div className="ba-header-actions">
          <button className="btn-export-bot" onClick={() => triggerToast('Exporting Bot Conversations & NLP Accuracy Audit (CSV)...')}>
            <Download size={14} /> Export Bot Telemetry (CSV)
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="ba-toast-banner">
          <CheckCircle2 size={16} color="#15803D" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. 4-Column KPI Grid */}
      <div className="ba-kpi-grid">
        <div className="ba-kpi-card border-blue">
          <div className="kpi-icon bg-blue"><Users size={20} color="#002B7F" /></div>
          <div>
            <span className="kpi-label">Active Bot Aspirants</span>
            <h3>24.8 Lakh</h3>
            <p className="text-blue">+14% Growth this month</p>
          </div>
        </div>

        <div className="ba-kpi-card border-saffron">
          <div className="kpi-icon bg-saffron"><MessageCircle size={20} color="#C2410C" /></div>
          <div>
            <span className="kpi-label">Daily Message Traffic</span>
            <h3>18.7 Lakh / day</h3>
            <p className="text-saffron">Peak: 8:00 PM to 10:00 PM</p>
          </div>
        </div>

        <div className="ba-kpi-card border-green">
          <div className="kpi-icon bg-green"><CheckCircle2 size={20} color="#15803D" /></div>
          <div>
            <span className="kpi-label">AI Doubts Solved</span>
            <h3>4.2 Lakh</h3>
            <p className="text-green">99.4% Verified Accuracy</p>
          </div>
        </div>

        <div className="ba-kpi-card border-purple">
          <div className="kpi-icon bg-purple"><Zap size={20} color="#7E22CE" /></div>
          <div>
            <span className="kpi-label">Avg AI Latency</span>
            <h3>1.8 Seconds</h3>
            <p className="text-purple">Bhashini Edge Inference</p>
          </div>
        </div>
      </div>

      {/* 3. Main Analytics Charts Grid */}
      <div className="ba-charts-grid">
        {/* Daily Message Volume Area Chart */}
        <div className="ba-card main-chart-box">
          <div className="card-header-flex">
            <div>
              <h3>Daily Message &amp; Doubt Volume</h3>
              <p>Combined WhatsApp, Telegram &amp; SMS traffic progression</p>
            </div>
            <span className="badge-live">Live Stream</span>
          </div>

          <div className="chart-container" style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyMessages} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id="msgGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#002B7F" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#002B7F" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: '#64748B' }} />
                <YAxis tickFormatter={(val) => `${(val / 100000).toFixed(0)}L`} tick={{ fontSize: 11, fill: '#64748B' }} />
                <RechartsTooltip formatter={(val: any) => [`${(Number(val) / 100000).toFixed(2)} Lakh Messages`, 'Daily Volume']} />
                <Area type="monotone" dataKey="msgs" stroke="#002B7F" strokeWidth={2.5} fill="url(#msgGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Channel Breakdown Pie Chart */}
        <div className="ba-card">
          <div className="card-header-flex">
            <div>
              <h3>Channel Distribution</h3>
              <p>Platform delivery split across mobile networks</p>
            </div>
          </div>

          <div className="chart-container" style={{ height: 180 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={channelData} innerRadius={50} outerRadius={75} paddingAngle={4} dataKey="value">
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip formatter={(val) => [`${val}% of Traffic`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="channel-legend-list">
            {channelData.map(c => (
              <div key={c.name} className="channel-leg-item">
                <span className="leg-dot" style={{ backgroundColor: c.color }}></span>
                <span className="leg-name">{c.name}</span>
                <strong className="leg-val">{c.value}%</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Bottom Grid: Feature Usage + Top State Adoption */}
      <div className="ba-bottom-grid">
        {/* Feature Usage Bar Chart */}
        <div className="ba-card">
          <div className="card-header-flex">
            <div>
              <h3>Popular Bot Features</h3>
              <p>Monthly unique student interactions by service category</p>
            </div>
          </div>

          <div className="chart-container" style={{ height: 240 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featureUsage} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
                <XAxis type="number" tickFormatter={(v) => `${(v / 100000).toFixed(1)}L`} />
                <YAxis dataKey="feature" type="category" width={160} tick={{ fontSize: 11, fill: '#334155', fontWeight: 600 }} />
                <RechartsTooltip formatter={(val: any) => [`${(Number(val) / 100000).toFixed(1)} Lakh Students`, 'Active Users']} />
                <Bar dataKey="users" radius={[0, 4, 4, 0]}>
                  {featureUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top States Adoption Table */}
        <div className="ba-card">
          <div className="card-header-flex">
            <div>
              <h3>Top Regional Adoption Matrix</h3>
              <p>Highest engagement states on mobile chat assistants</p>
            </div>
          </div>

          <table className="ba-state-table">
            <thead>
              <tr>
                <th>State</th>
                <th>Bot Aspirants</th>
                <th>MoM Growth</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              {topStates.map(s => (
                <tr key={s.state}>
                  <td><strong>{s.state}</strong></td>
                  <td>{s.users}</td>
                  <td><span className="growth-text text-green">{s.growth}</span></td>
                  <td><span className="accuracy-badge">{s.accuracy}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BotAnalytics;
