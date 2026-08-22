import React from 'react';
import { 
  Database, Download, CheckCircle, Clock, 
  BarChart2, FileJson, Users, ShieldCheck
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './OpenDataPortal.css';

const datasets = [
  { id: 1, name: 'Registration Data', desc: 'Anonymized user registration counts by state and district', date: '2 hours ago', format: 'CSV' },
  { id: 2, name: 'Engagement Metrics', desc: 'Daily active users, videos watched, mock tests taken', date: '5 hours ago', format: 'JSON' },
  { id: 3, name: 'Exam-wise Stats', desc: 'Breakdown of enrollments across various competitive exams', date: '1 day ago', format: 'CSV' },
  { id: 4, name: 'State-wise Performance', desc: 'Average mock test scores grouped by state', date: '1 day ago', format: 'Excel' },
];

const OpenDataPortal: React.FC = () => {
  return (
    <div className="opendata-container">
      <GIGWPageHeader
        breadcrumbs={[{ label: 'Ministry Dashboard', labelHi: 'मंत्रालय डैशबोर्ड', path: '/ministry/dashboard' }]}
        title="Open Data Portal"
        titleHi="ओपन डेटा पोर्टल"
        description="Providing researchers, policymakers, and citizens access to anonymized learning metrics."
        descriptionHi="शोधकर्ताओं, नीति निर्माताओं और नागरिकों को अनाम शिक्षण मीट्रिक तक पहुंच प्रदान करना।"
        icon={<Database size={32} />}
        badge="RTI Proactive Disclosure"
      />

      <main role="main">
        <section className="sync-status-section" aria-label="Data Synchronization Status">
          <div className="sync-status">
            <CheckCircle size={16} aria-hidden="true" />
            <span>Synced with Data.gov.in | Last push: 2 hours ago</span>
          </div>
        </section>

        <section className="stats-grid" aria-labelledby="stats-title">
          <h2 id="stats-title" className="visually-hidden">Global Statistics</h2>
          <article className="stat-card">
            <Users className="stat-icon" aria-hidden="true" />
            <div className="stat-info">
              <span className="stat-value">5.2M</span>
              <span className="stat-label">Total Students <span className="hi">कुल छात्र</span></span>
            </div>
          </article>
          <article className="stat-card">
            <Database className="stat-icon" aria-hidden="true" />
            <div className="stat-info">
              <span className="stat-value">28 + 8</span>
              <span className="stat-label">States & UTs Covered <span className="hi">शामिल राज्य</span></span>
            </div>
          </article>
          <article className="stat-card">
            <BarChart2 className="stat-icon" aria-hidden="true" />
            <div className="stat-info">
              <span className="stat-value">42K</span>
              <span className="stat-label">Videos Available <span className="hi">उपलब्ध वीडियो</span></span>
            </div>
          </article>
          <article className="stat-card">
            <ShieldCheck className="stat-icon" aria-hidden="true" />
            <div className="stat-info">
              <span className="stat-value">1.1M</span>
              <span className="stat-label">Questions Answered <span className="hi">उत्तर दिए गए प्रश्न</span></span>
            </div>
          </article>
        </section>

        <div className="content-grid">
          <section className="datasets-section" aria-labelledby="datasets-title">
            <h3 id="datasets-title">Available Datasets <span className="hi">उपलब्ध डेटासेट</span></h3>
            <div className="dataset-list">
              {datasets.map(ds => (
                <article key={ds.id} className="dataset-row" aria-labelledby={`dataset-${ds.id}`}>
                  <div className="dataset-info">
                    <h4 id={`dataset-${ds.id}`}>{ds.name}</h4>
                    <p>{ds.desc}</p>
                    <span className="dataset-meta"><Clock size={14} aria-hidden="true" /> Updated: {ds.date}</span>
                  </div>
                  <div className="dataset-action">
                    <span className="format-badge" aria-label={`Format: ${ds.format}`}>{ds.format}</span>
                    <button className="btn-download" aria-label={`Download ${ds.name} in ${ds.format} format`}><Download size={16} aria-hidden="true" /> Download</button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="api-section" aria-labelledby="api-title">
            <h3 id="api-title">API Documentation <span className="hi">एपीआई दस्तावेज़ीकरण</span></h3>
            <article className="api-card" aria-labelledby="api-docs-title">
              <h4 id="api-docs-title" className="visually-hidden">API Details</h4>
              <div className="api-usage">
                <p>API calls this month: <strong>12,400</strong></p>
                <p>Unique researchers: <strong>234</strong></p>
              </div>
              <h4>REST Endpoints</h4>
              <div className="endpoint">
                <span className="method get">GET</span>
                <code>/api/v1/stats/engagement</code>
              </div>
              <div className="endpoint">
                <span className="method get">GET</span>
                <code>/api/v1/stats/state-performance</code>
              </div>
              <button className="btn-secondary" aria-label="View Full API Documentation"><FileJson size={16} aria-hidden="true"/> View Full API Docs</button>
            </article>

            <section className="reports-section" aria-labelledby="reports-title">
              <h3 id="reports-title">Quarterly Transparency Reports <span className="hi">पारदर्शिता रिपोर्ट</span></h3>
              <ul className="report-list">
                <li><button className="link-button" aria-label="Download Q3 2025 Report PDF"><Download size={16} aria-hidden="true" /> Q3 2025 Report (PDF)</button></li>
                <li><button className="link-button" aria-label="Download Q2 2025 Report PDF"><Download size={16} aria-hidden="true" /> Q2 2025 Report (PDF)</button></li>
                <li><button className="link-button" aria-label="Download Q1 2025 Report PDF"><Download size={16} aria-hidden="true" /> Q1 2025 Report (PDF)</button></li>
              </ul>
            </section>
          </aside>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default OpenDataPortal;
