import React from 'react';
import { MessageCircle, Users, Activity, CheckCircle, PieChart as PieChartIcon, ArrowUpRight, ArrowDownRight, Clock, Zap } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './BotAnalytics.css';

// Mock Data
const dailyMessages = [
  { date: '1 Aug', msgs: 1200000 }, { date: '5 Aug', msgs: 1450000 },
  { date: '10 Aug', msgs: 1300000 }, { date: '15 Aug', msgs: 1600000 },
  { date: '20 Aug', msgs: 1870000 }, { date: '25 Aug', msgs: 1750000 },
];

const channelData = [
  { name: 'WhatsApp', value: 72, color: '#25D366' },
  { name: 'Telegram', value: 18, color: '#0088cc' },
  { name: 'SMS', value: 10, color: 'var(--color-outline)' },
];

const featureUsage = [
  { feature: 'Daily MCQs', users: 850000 },
  { feature: 'Doubt Solving', users: 620000 },
  { feature: 'Reminders', users: 410000 },
  { feature: 'Results', users: 280000 },
  { feature: 'Voice Notes', users: 150000 },
];

const topStates = [
  { state: 'Uttar Pradesh', users: '4.2L', growth: '+12%' },
  { state: 'Bihar', users: '3.1L', growth: '+18%' },
  { state: 'Madhya Pradesh', users: '2.8L', growth: '+8%' },
  { state: 'Rajasthan', users: '2.4L', growth: '+15%' },
];

const funnelData = [
  { stage: 'Enrolled', value: 100, label: '100%' },
  { stage: 'First Interaction', value: 85, label: '85%' },
  { stage: 'Daily Active', value: 45, label: '45%' },
  { stage: '7-Day Retention', value: 32, label: '32%' },
];

const BotAnalytics: React.FC = () => {
  return (
    <main role="main" className="bot-analytics-container">
      <GIGWPageHeader 
        breadcrumbs={[{ label: 'Ministry Dashboard', labelHi: 'मंत्रालय डैशबोर्ड', path: '/ministry/dashboard' }]}
        title="Bot Analytics Dashboard"
        titleHi="बॉट एनालिटिक्स डैशबोर्ड"
        description="WhatsApp & Telegram AI Assistant Performance"
        descriptionHi="व्हाट्सएप और टेलीग्राम एआई सहायक प्रदर्शन"
        icon={Activity}
        badge="Bot Telemetry"
      />

      <div className="bot-date-picker mb-4" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className="btn-outline" aria-label="Select Date Range">Last 30 Days (Aug 2026)</button>
      </div>

      <section aria-label="Top Level Metrics" className="bot-metrics-grid">
        <article className="bot-metric-card">
          <div className="bot-metric-icon" style={{ background: '#e0f2fe', color: '#0ea5e9' }} aria-hidden="true"><Users /></div>
          <div className="bot-metric-content">
            <p className="bot-metric-label">Total Bot Users <span className="hi">कुल उपयोगकर्ता</span></p>
            <h3 className="bot-metric-value">24.3L</h3>
            <p className="bot-metric-trend positive"><ArrowUpRight size={16} aria-hidden="true" /> 12% vs last month</p>
          </div>
        </article>
        <article className="bot-metric-card">
          <div className="bot-metric-icon" style={{ background: '#fef3c7', color: '#d97706' }} aria-hidden="true"><MessageCircle /></div>
          <div className="bot-metric-content">
            <p className="bot-metric-label">Messages Today <span className="hi">आज के संदेश</span></p>
            <h3 className="bot-metric-value">18.7L</h3>
            <p className="bot-metric-trend positive"><ArrowUpRight size={16} aria-hidden="true" /> 5% vs yesterday</p>
          </div>
        </article>
        <article className="bot-metric-card">
          <div className="bot-metric-icon" style={{ background: '#dcfce7', color: '#16a34a' }} aria-hidden="true"><CheckCircle /></div>
          <div className="bot-metric-content">
            <p className="bot-metric-label">Doubts Solved <span className="hi">सुलझाए गए संदेह</span></p>
            <h3 className="bot-metric-value">4.2L</h3>
            <p className="bot-metric-trend positive"><ArrowUpRight size={16} aria-hidden="true" /> 8% vs last month</p>
          </div>
        </article>
        <article className="bot-metric-card">
          <div className="bot-metric-icon" style={{ background: '#f3e8ff', color: '#9333ea' }} aria-hidden="true"><Activity /></div>
          <div className="bot-metric-content">
            <p className="bot-metric-label">MCQs Answered <span className="hi">उत्तर दिए गए MCQ</span></p>
            <h3 className="bot-metric-value">12.1L</h3>
            <p className="bot-metric-trend negative"><ArrowDownRight size={16} aria-hidden="true" /> 2% vs last month</p>
          </div>
        </article>
      </section>

      <div className="bot-charts-row mt-4">
        <section aria-labelledby="daily-messages-heading" className="bot-chart-card main-chart">
          <h2 id="daily-messages-heading" className="bot-card-title">Daily Message Volume <span className="hi">दैनिक संदेश मात्रा</span></h2>
          <div className="bot-chart-wrap">
            <ResponsiveContainer width="100%" height={300} aria-hidden="true">
              <AreaChart data={dailyMessages} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorMsgs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis tickFormatter={(val) => `${val / 100000}L`} />
                <Tooltip formatter={(value: any) => [`${(Number(value || 0) / 100000).toFixed(1)}L`, 'Messages']} />
                <Area type="monotone" dataKey="msgs" stroke="var(--color-primary)" fillOpacity={1} fill="url(#colorMsgs)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section aria-labelledby="channel-breakdown-heading" className="bot-chart-card side-chart">
          <h2 id="channel-breakdown-heading" className="bot-card-title">Channel Breakdown <span className="hi">चैनल विवरण</span></h2>
          <div className="bot-chart-wrap">
            <ResponsiveContainer width="100%" height={200} aria-hidden="true">
              <PieChart>
                <Pie data={channelData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="bot-pie-legend" aria-label="Legend">
              {channelData.map(item => (
                <div key={item.name} className="bot-legend-item">
                  <span className="bot-legend-dot" style={{ backgroundColor: item.color }} aria-hidden="true"></span>
                  <span className="bot-legend-name">{item.name}</span>
                  <span className="bot-legend-value">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="bot-bottom-grid mt-4">
        <section aria-labelledby="engagement-funnel-heading" className="bot-card">
          <h2 id="engagement-funnel-heading" className="bot-card-title">Engagement Funnel <span className="hi">सगाई फ़नल</span></h2>
          <div className="bot-funnel-container">
            {funnelData.map((item, index) => (
              <div key={item.stage} className="bot-funnel-stage">
                <div className="bot-funnel-label">{item.stage}</div>
                <div className="bot-funnel-bar-wrap" aria-hidden="true">
                  <div className="bot-funnel-bar" style={{ width: `${item.value}%`, opacity: 1 - (index * 0.2) }}></div>
                  <span className="bot-funnel-percent">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="popular-features-heading" className="bot-card">
          <h2 id="popular-features-heading" className="bot-card-title">Popular Features <span className="hi">लोकप्रिय सुविधाएँ</span></h2>
          <div className="bot-chart-wrap">
            <ResponsiveContainer width="100%" height={220} aria-hidden="true">
              <BarChart data={featureUsage} layout="vertical" margin={{ top: 0, right: 20, left: 30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="feature" type="category" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="users" fill="var(--color-secondary)" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section aria-labelledby="performance-metrics-heading" className="bot-card">
          <h2 id="performance-metrics-heading" className="bot-card-title">Performance Metrics <span className="hi">प्रदर्शन मेट्रिक्स</span></h2>
          <div className="bot-perf-metrics">
            <div className="bot-perf-item">
              <Clock className="bot-perf-icon" aria-hidden="true" />
              <div>
                <p className="bot-perf-label">Avg. AI Response Time</p>
                <p className="bot-perf-value">2.3s</p>
              </div>
            </div>
            <div className="bot-perf-item">
              <Zap className="bot-perf-icon" aria-hidden="true" />
              <div>
                <p className="bot-perf-label">Photo OCR Processing</p>
                <p className="bot-perf-value">4.1s</p>
              </div>
            </div>
          </div>
          
          <h3 className="bot-sub-title mt-4">Top States by Usage</h3>
          <table className="bot-table">
            <thead>
              <tr>
                <th scope="col">State</th>
                <th scope="col">Users</th>
                <th scope="col">Growth</th>
              </tr>
            </thead>
            <tbody>
              {topStates.map(state => (
                <tr key={state.state}>
                  <td>{state.state}</td>
                  <td>{state.users}</td>
                  <td className="positive">{state.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      
      <GIGWFooter />
    </main>
  );
};

export default BotAnalytics;
