import React, { useState } from 'react';
import { 
  Trophy, Search, MapPin, Calendar, CheckCircle, Award, Briefcase, 
  IndianRupee, FileText, ArrowRight, ShieldCheck, Sparkles, CheckCircle2,
  Download, ExternalLink, Building, Clock
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './ScholarshipHub.css';

const scholarships = [
  { 
    id: 1, 
    name: 'National Merit UPSC / SSC Super-100 Fellowship', 
    amount: '₹50,000 / Year', 
    deadline: '30 Sep 2026', 
    provider: 'Ministry of Education • भारत सरकार', 
    eligibility: 'Top 5% score in National Mock Tests (Any Category)',
    status: 'Open for Application',
    appliedCount: '12,400 Applied'
  },
  { 
    id: 2, 
    name: 'Eklavya Model Tribal Aspirant Grant (ST)', 
    amount: '₹35,000 / Year', 
    deadline: '15 Oct 2026', 
    provider: 'Ministry of Tribal Affairs', 
    eligibility: 'ST Category Aspirants preparing for SSC / Banking / Railways',
    status: 'Direct Bank Transfer (DBT)',
    appliedCount: '8,200 Applied'
  },
  { 
    id: 3, 
    name: 'Udaan Beti Shiksha Empowerment Award', 
    amount: '₹40,000 / Year', 
    deadline: '31 Oct 2026', 
    provider: 'Ministry of Women & Child Development', 
    eligibility: 'Female Aspirants with 75%+ Mock Accuracy',
    status: 'Open for Application',
    appliedCount: '15,600 Applied'
  },
  { 
    id: 4, 
    name: 'Divyangjan Inclusive Education Fellowship', 
    amount: '₹45,000 / Year', 
    deadline: '15 Nov 2026', 
    provider: 'Department of Empowerment of Persons with Disabilities', 
    eligibility: 'PwD Aspirants with UDID Card',
    status: 'Instant Verification',
    appliedCount: '3,100 Applied'
  }
];

const internships = [
  { id: 1, role: 'Data & AI Research Intern', dept: 'NITI Aayog (Govt of India)', duration: '6 Months', stipend: '₹20,000 / Month', location: 'New Delhi / Remote' },
  { id: 2, role: 'Public Policy Formulation Intern', dept: 'Ministry of Education', duration: '3 Months', stipend: '₹15,000 / Month', location: 'Shastri Bhawan, Delhi' },
  { id: 3, role: 'E-Governance Field Fellow', dept: 'Digital India Corporation', duration: '6 Months', stipend: '₹18,000 / Month', location: 'State Capitals' }
];

export const ScholarshipHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'find' | 'applications' | 'rewards' | 'internships'>('find');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="scholarship-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Scholarships & Rewards', labelHi: 'छात्रवृत्ति एवं पुरस्कार' }
        ]}
        title="National Scholarships & DBT Portal"
        titleHi="राष्ट्रीय छात्रवृत्ति एवं प्रत्यक्ष लाभ अंतरण पोर्टल"
        description="Direct Benefit Transfer (DBT) fellowships, merit rewards, and government internship stipends with Aadhaar DigiLocker auto-verification."
        descriptionHi="आधार एवं डिजीलॉकर द्वारा सत्यापित प्रत्यक्ष लाभ अंतरण छात्रवृत्तियां और इंटर्नशिप।"
        icon={<Trophy size={28} />}
        badge="NSP 2.0 & DBT Integrated"
        actions={
          <div className="scholarship-hero-badge">
            <ShieldCheck size={14} color="#86EFAC" />
            <span>DigiLocker Verified Account</span>
          </div>
        }
      />

      <main role="main" className="scholarship-workspace">
        {/* Navigation Tabs */}
        <div className="scholarship-nav-tabs" role="tablist">
          <button 
            className={`s-nav-tab ${activeTab === 'find' ? 'active' : ''}`}
            onClick={() => setActiveTab('find')}
            role="tab"
            aria-selected={activeTab === 'find'}
          >
            <Trophy size={16} /> Find Scholarships
          </button>
          <button 
            className={`s-nav-tab ${activeTab === 'applications' ? 'active' : ''}`}
            onClick={() => setActiveTab('applications')}
            role="tab"
            aria-selected={activeTab === 'applications'}
          >
            <FileText size={16} /> My DBT Application Status (1)
          </button>
          <button 
            className={`s-nav-tab ${activeTab === 'rewards' ? 'active' : ''}`}
            onClick={() => setActiveTab('rewards')}
            role="tab"
            aria-selected={activeTab === 'rewards'}
          >
            <Award size={16} /> DigiLocker Verified Badges
          </button>
          <button 
            className={`s-nav-tab ${activeTab === 'internships' ? 'active' : ''}`}
            onClick={() => setActiveTab('internships')}
            role="tab"
            aria-selected={activeTab === 'internships'}
          >
            <Briefcase size={16} /> Govt Internships
          </button>
        </div>

        {/* Tab 1: Find Scholarships */}
        {activeTab === 'find' && (
          <div className="s-tab-pane">
            {/* Filter Bar */}
            <div className="s-filter-bar">
              <div className="s-search-input-wrap">
                <Search size={18} color="#64748B" />
                <input 
                  type="text" 
                  placeholder="Search scholarship by name, ministry, or exam..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="s-search-field"
                />
              </div>

              <div className="s-category-pills">
                {['All', 'Merit-Based', 'SC / ST', 'Female Aspirants', 'PwD'].map(cat => (
                  <button 
                    key={cat}
                    className={`s-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Scholarship Cards Grid */}
            <div className="scholarship-cards-grid">
              {scholarships.map(sch => (
                <div key={sch.id} className="sch-card">
                  <div className="sch-card-top">
                    <span className="sch-amount-pill">{sch.amount}</span>
                    <span className="sch-deadline-tag"><Clock size={12} /> Deadline: {sch.deadline}</span>
                  </div>

                  <h3 className="sch-name">{sch.name}</h3>
                  <p className="sch-provider">{sch.provider}</p>

                  <div className="sch-eligibility-box">
                    <strong>Eligibility:</strong> {sch.eligibility}
                  </div>

                  <div className="sch-card-footer">
                    <span className="sch-count-tag">{sch.appliedCount}</span>
                    <button className="sch-apply-btn" aria-label={`Apply for ${sch.name}`}>
                      Apply via DigiLocker <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: My DBT Status */}
        {activeTab === 'applications' && (
          <div className="s-tab-pane">
            <div className="dbt-tracker-card">
              <div className="dbt-tracker-head">
                <div>
                  <h3 className="dbt-title">National Merit UPSC / SSC Super-100 Fellowship</h3>
                  <p className="dbt-app-id">Application ID: <strong>DBT-NSP-2026-884920</strong> • Amount: <strong>₹50,000</strong></p>
                </div>
                <span className="dbt-status-live">● Under Verification</span>
              </div>

              <div className="dbt-timeline-steps">
                <div className="dbt-step completed">
                  <div className="step-circle"><CheckCircle2 size={16} /></div>
                  <strong className="step-name">Aadhaar Linked</strong>
                  <span className="step-date">12 Aug 2026</span>
                </div>
                <div className="dbt-step completed">
                  <div className="step-circle"><CheckCircle2 size={16} /></div>
                  <strong className="step-name">Mock Merit Scored</strong>
                  <span className="step-date">16 Aug 2026</span>
                </div>
                <div className="dbt-step active">
                  <div className="step-circle">3</div>
                  <strong className="step-name">Ministry Approval</strong>
                  <span className="step-date">In Progress</span>
                </div>
                <div className="dbt-step">
                  <div className="step-circle">4</div>
                  <strong className="step-name">Bank DBT Transfer</strong>
                  <span className="step-date">Pending</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Rewards & Verified Badges */}
        {activeTab === 'rewards' && (
          <div className="s-tab-pane">
            <div className="rewards-badges-grid">
              <div className="reward-badge-card gold">
                <Award size={36} color="#FE6500" />
                <h4 className="badge-name">National Top 5% Ranker</h4>
                <p className="badge-desc">Issued by Ministry of Education for excellence in SSC CGL Mock Series.</p>
                <button className="badge-download-btn"><Download size={14} /> Download DigiLocker Certificate</button>
              </div>

              <div className="reward-badge-card blue">
                <Trophy size={36} color="#0033A0" />
                <h4 className="badge-name">30-Day Discipline Streak</h4>
                <p className="badge-desc">Awarded for 30 consecutive days of daily video lessons & quiz practice.</p>
                <button className="badge-download-btn"><Download size={14} /> Download Certificate</button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Govt Internships */}
        {activeTab === 'internships' && (
          <div className="s-tab-pane">
            <div className="internship-cards-grid">
              {internships.map(intern => (
                <div key={intern.id} className="intern-card">
                  <div className="intern-top">
                    <span className="intern-stipend">{intern.stipend}</span>
                    <span className="intern-duration"><Clock size={12} /> {intern.duration}</span>
                  </div>
                  <h3 className="intern-role">{intern.role}</h3>
                  <p className="intern-dept"><Building size={14} /> {intern.dept}</p>
                  <p className="intern-loc"><MapPin size={14} /> {intern.location}</p>
                  <button className="intern-apply-btn">Apply for Internship <ExternalLink size={14} /></button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <GIGWFooter />
    </div>
  );
};

export default ScholarshipHub;
