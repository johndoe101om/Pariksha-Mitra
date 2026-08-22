import React, { useState } from 'react';
import { 
  Search, Users, Activity, PlayCircle, FileText, 
  Share2, Download, TrendingUp, MapPin, Award 
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './ConstituencyDashboard.css';

const engagementData = [
  { day: '1', active: 10200 },
  { day: '5', active: 11000 },
  { day: '10', active: 10500 },
  { day: '15', active: 11800 },
  { day: '20', active: 12200 },
  { day: '25', active: 12000 },
  { day: '30', active: 12400 },
];

const topBlocks = [
  { id: 1, name: 'Sadar Block', active: 4500, score: 85 },
  { id: 2, name: 'North Zone', active: 3200, score: 82 },
  { id: 3, name: 'East Village', active: 2800, score: 79 },
  { id: 4, name: 'West Panchayat', active: 1900, score: 75 },
];

const ConstituencyDashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="constituency-container">
      <GIGWPageHeader
        breadcrumbs={[{ label: 'Ministry Dashboard', labelHi: 'मंत्रालय डैशबोर्ड', path: '/ministry/dashboard' }]}
        title="Constituency Dashboard"
        titleHi="निर्वाचन क्षेत्र डैशबोर्ड"
        description="Lok Sabha constituency-wise education overview"
        descriptionHi="लोकसभा निर्वाचन क्षेत्र-वार शिक्षा अवलोकन"
        icon={<TrendingUp size={32} />}
        badge="Lok Sabha 543 Telemetry"
      />

      <main role="main">
        <section className="search-section" aria-labelledby="search-heading">
          <h2 id="search-heading" className="visually-hidden">Search Constituencies</h2>
          <form className="search-bar" role="search" onSubmit={e => e.preventDefault()}>
            <Search size={20} className="search-icon" aria-hidden="true" />
            <label htmlFor="constituency-search" className="visually-hidden">Search 543 Constituencies</label>
            <input 
              id="constituency-search"
              type="text" 
              placeholder="Search 543 Constituencies..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-required="false"
            />
          </form>
        </section>

        <section className="constituency-overview" aria-labelledby="overview-title">
          <h2 id="overview-title" className="visually-hidden">Overview</h2>
          <article className="overview-card">
            <div className="mp-details">
              <h3>Varanasi <span className="hi">वाराणसी</span></h3>
              <p className="mp-name">Shri Narendra Modi (BJP)</p>
              <p className="mp-location"><MapPin size={16} aria-hidden="true" /> Uttar Pradesh, Varanasi District</p>
            </div>
            <div className="mp-ranking">
              <Award size={32} color="var(--color-secondary)" aria-hidden="true" />
              <div className="ranking-text">
                <span className="rank-value">#127 of 543</span>
                <span className="rank-label">in engagement</span>
              </div>
            </div>
          </article>
        </section>

        <section className="metrics-grid" aria-labelledby="metrics-title">
          <h2 id="metrics-title" className="visually-hidden">Key Metrics</h2>
          <article className="metric-card">
            <Users size={24} className="metric-icon" aria-hidden="true" />
            <div className="metric-info">
              <h4>Active Students <span className="hi">सक्रिय छात्र</span></h4>
              <span className="metric-value">45,000</span>
            </div>
          </article>
          <article className="metric-card">
            <Activity size={24} className="metric-icon" aria-hidden="true" />
            <div className="metric-info">
              <h4>Daily Active <span className="hi">दैनिक सक्रिय</span></h4>
              <span className="metric-value">12,400</span>
            </div>
          </article>
          <article className="metric-card">
            <PlayCircle size={24} className="metric-icon" aria-hidden="true" />
            <div className="metric-info">
              <h4>Videos Watched <span className="hi">देखे गए वीडियो</span></h4>
              <span className="metric-value">2.3L</span>
            </div>
          </article>
          <article className="metric-card">
            <FileText size={24} className="metric-icon" aria-hidden="true" />
            <div className="metric-info">
              <h4>Mocks Completed <span className="hi">मॉक पूर्ण</span></h4>
              <span className="metric-value">8,400</span>
            </div>
          </article>
        </section>

        <div className="dashboard-content">
          <section className="chart-section" aria-labelledby="chart-title">
            <h3 id="chart-title">Engagement Trend (30 Days) <span className="hi">जुड़ाव प्रवृत्ति</span></h3>
            <div className="chart-container" aria-hidden="true">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="active" stroke="var(--color-primary)" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="tables-section" aria-labelledby="tables-title">
            <h3 id="tables-title">Top Performing Blocks <span className="hi">शीर्ष प्रदर्शन करने वाले ब्लॉक</span></h3>
            <div className="table-responsive">
              <table className="blocks-table" aria-label="Top Performing Blocks Data">
                <thead>
                  <tr>
                    <th scope="col">Block/Village</th>
                    <th scope="col">Active Students</th>
                    <th scope="col">Avg. Score</th>
                  </tr>
                </thead>
                <tbody>
                  {topBlocks.map(block => (
                    <tr key={block.id}>
                      <td>{block.name}</td>
                      <td>{block.active}</td>
                      <td>{block.score}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <section className="report-actions" aria-labelledby="actions-title">
          <h3 id="actions-title">MP Report Card <span className="hi">सांसद रिपोर्ट कार्ड</span></h3>
          <div className="action-buttons">
            <button className="btn-primary" aria-label="Share MP Report Card on Social Media">
              <Share2 size={18} aria-hidden="true" /> Share on Social Media
            </button>
            <button className="btn-secondary" aria-label="Download Constituency Report PDF">
              <Download size={18} aria-hidden="true" /> Download Constituency Report PDF
            </button>
          </div>
        </section>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default ConstituencyDashboard;
