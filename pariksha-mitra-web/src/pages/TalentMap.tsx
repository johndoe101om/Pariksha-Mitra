import React, { useState } from 'react';
import { Download, Filter, Search, TrendingUp, AlertTriangle, Users, MapPin, Target, BookOpen } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './TalentMap.css';

// Mock Data
const subjectGaps = [
  { subject: 'Physics', gap: 45, fill: 'var(--color-error)' },
  { subject: 'Mathematics', gap: 38, fill: '#ff8a00' },
  { subject: 'Chemistry', gap: 32, fill: '#ff8a00' },
  { subject: 'Biology', gap: 20, fill: 'var(--color-primary)' },
  { subject: 'English', gap: 15, fill: 'var(--color-tertiary)' },
];

const topPerformers = [
  { id: 1, name: 'Rahul Sharma', state: 'Uttar Pradesh', exam: 'JEE Main', score: '99.8 PR', subject: 'Physics' },
  { id: 2, name: 'Priya Patel', state: 'Gujarat', exam: 'NEET', score: '710/720', subject: 'Biology' },
  { id: 3, name: 'Arun Kumar', state: 'Bihar', exam: 'UPSC', score: 'Top 0.5%', subject: 'History' },
  { id: 4, name: 'Sneha Reddy', state: 'Telangana', exam: 'JEE Adv', score: 'Rank 142', subject: 'Maths' },
];

const stateMetrics = {
  'Uttar Pradesh': { students: '2.4L', topPercentile: '1.2%', risk: 'High', strength: 'Mathematics' },
  'Maharashtra': { students: '1.8L', topPercentile: '2.1%', risk: 'Medium', strength: 'Physics' },
  'Kerala': { students: '0.8L', topPercentile: '3.5%', risk: 'Low', strength: 'Biology' },
};

const TalentMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'top' | 'gaps' | 'growth' | 'risk'>('top');
  const [selectedState, setSelectedState] = useState<string | null>('Uttar Pradesh');

  return (
    <main role="main" className="talentmap-container">
      <GIGWPageHeader 
        breadcrumbs={[{ label: 'Ministry Dashboard', labelHi: 'मंत्रालय डैशबोर्ड', path: '/ministry/dashboard' }]}
        title="National Talent Heat Map"
        titleHi="राष्ट्रीय प्रतिभा मानचित्र"
        description="Geographic distribution of academic excellence and learning gaps across India"
        descriptionHi="भारत भर में अकादमिक उत्कृष्टता और सीखने के अंतराल का भौगोलिक वितरण"
        icon={MapPin}
        badge="National Talent Telemetry"
      />

      <div className="talentmap-actions mb-4" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <div className="talentmap-filter-group">
          <button className="talentmap-btn-outline" aria-label="Filter by Exam"><Filter size={16} aria-hidden="true" /> Exam</button>
          <button className="talentmap-btn-outline" aria-label="Filter by Date"><Filter size={16} aria-hidden="true" /> Date</button>
          <button className="talentmap-btn-outline" aria-label="Filter by Level"><Filter size={16} aria-hidden="true" /> Level</button>
        </div>
        <button className="talentmap-btn-primary" aria-label="Download Talent Report PDF"><Download size={16} aria-hidden="true" /> Download Talent Report PDF</button>
      </div>

      <div className="talentmap-tabs" role="tablist" aria-label="Talent Map Views">
        <button role="tab" aria-selected={activeTab === 'top'} aria-controls="tab-content" className={`talentmap-tab ${activeTab === 'top' ? 'active' : ''}`} onClick={() => setActiveTab('top')}>
          Top Performers <span className="hi">शीर्ष प्रदर्शन करने वाले</span>
        </button>
        <button role="tab" aria-selected={activeTab === 'gaps'} aria-controls="tab-content" className={`talentmap-tab ${activeTab === 'gaps' ? 'active' : ''}`} onClick={() => setActiveTab('gaps')}>
          Subject Gaps <span className="hi">विषय अंतराल</span>
        </button>
        <button role="tab" aria-selected={activeTab === 'growth'} aria-controls="tab-content" className={`talentmap-tab ${activeTab === 'growth' ? 'active' : ''}`} onClick={() => setActiveTab('growth')}>
          Growth Rate <span className="hi">विकास दर</span>
        </button>
        <button role="tab" aria-selected={activeTab === 'risk'} aria-controls="tab-content" className={`talentmap-tab ${activeTab === 'risk' ? 'active' : ''}`} onClick={() => setActiveTab('risk')}>
          Drop-off Risk <span className="hi">छोड़ने का जोखिम</span>
        </button>
      </div>

      <div id="tab-content" className="talentmap-content">
        <div className="talentmap-main">
          <section aria-labelledby="map-heading" className="talentmap-card talentmap-map-card">
            <div className="talentmap-card-header">
              <h2 id="map-heading" className="talentmap-card-title">India Heat Map <span className="hi">भारत मानचित्र</span></h2>
              <div className="talentmap-legend" aria-hidden="true">
                <span>Low</span>
                <div className="talentmap-gradient-bar"></div>
                <span>High</span>
              </div>
            </div>
            <div className="talentmap-map-container">
              <div className="talentmap-map-placeholder" aria-hidden="true">
                <MapPin size={48} color="var(--color-primary)" />
                <p>Interactive SVG Map rendered here</p>
                <div className="talentmap-mock-states">
                  <button aria-label="Select Uttar Pradesh" onClick={() => setSelectedState('Uttar Pradesh')} className={selectedState === 'Uttar Pradesh' ? 'active' : ''}>UP</button>
                  <button aria-label="Select Maharashtra" onClick={() => setSelectedState('Maharashtra')} className={selectedState === 'Maharashtra' ? 'active' : ''}>MH</button>
                  <button aria-label="Select Kerala" onClick={() => setSelectedState('Kerala')} className={selectedState === 'Kerala' ? 'active' : ''}>KL</button>
                </div>
              </div>
            </div>
          </section>

          <section aria-labelledby="gap-analysis-heading" className="talentmap-card mt-4">
            <h2 id="gap-analysis-heading" className="talentmap-card-title">Subject-wise National Gap Analysis <span className="hi">विषय-वार राष्ट्रीय अंतराल विश्लेषण</span></h2>
            <div className="talentmap-chart-container">
              <ResponsiveContainer width="100%" height={250} aria-hidden="true">
                <BarChart data={subjectGaps} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="subject" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="gap" name="% Students Weak">
                    {subjectGaps.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        <aside className="talentmap-sidebar">
          {selectedState && (
            <section aria-labelledby="state-details-heading" className="talentmap-card talentmap-state-panel">
              <h2 id="state-details-heading" className="talentmap-card-title">{selectedState} Details <span className="hi">राज्य विवरण</span></h2>
              <div className="talentmap-state-metrics">
                <div className="talentmap-metric-item">
                  <div className="talentmap-metric-icon" aria-hidden="true"><Users size={20} /></div>
                  <div className="talentmap-metric-info">
                    <span className="talentmap-metric-label">Registered</span>
                    <span className="talentmap-metric-value">{stateMetrics[selectedState as keyof typeof stateMetrics]?.students}</span>
                  </div>
                </div>
                <div className="talentmap-metric-item">
                  <div className="talentmap-metric-icon" aria-hidden="true"><Target size={20} /></div>
                  <div className="talentmap-metric-info">
                    <span className="talentmap-metric-label">Top 1%</span>
                    <span className="talentmap-metric-value">{stateMetrics[selectedState as keyof typeof stateMetrics]?.topPercentile}</span>
                  </div>
                </div>
                <div className="talentmap-metric-item">
                  <div className="talentmap-metric-icon" aria-hidden="true"><AlertTriangle size={20} /></div>
                  <div className="talentmap-metric-info">
                    <span className="talentmap-metric-label">Risk Level</span>
                    <span className="talentmap-metric-value">{stateMetrics[selectedState as keyof typeof stateMetrics]?.risk}</span>
                  </div>
                </div>
                <div className="talentmap-metric-item">
                  <div className="talentmap-metric-icon" aria-hidden="true"><BookOpen size={20} /></div>
                  <div className="talentmap-metric-info">
                    <span className="talentmap-metric-label">Top Strength</span>
                    <span className="talentmap-metric-value">{stateMetrics[selectedState as keyof typeof stateMetrics]?.strength}</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section aria-labelledby="toppers-heading" className="talentmap-card talentmap-toppers-card mt-4">
            <h2 id="toppers-heading" className="talentmap-card-title">Topper Trajectory (Top 1%) <span className="hi">टॉपर प्रक्षेपवक्र</span></h2>
            <div className="talentmap-toppers-list">
              {topPerformers.map(topper => (
                <article key={topper.id} className="talentmap-topper-item">
                  <div className="talentmap-topper-avatar" aria-hidden="true">{topper.name.charAt(0)}</div>
                  <div className="talentmap-topper-details">
                    <h4>{topper.name}</h4>
                    <p>{topper.exam} • {topper.state}</p>
                  </div>
                  <div className="talentmap-topper-score" aria-label={`Score: ${topper.score}`}>{topper.score}</div>
                </article>
              ))}
            </div>
          </section>
        </aside>
      </div>

      <GIGWFooter />
    </main>
  );
};

export default TalentMap;
