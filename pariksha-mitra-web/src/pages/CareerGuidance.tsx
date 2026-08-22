import React, { useState } from 'react';
import { 
  Target, Compass, BookOpen, Briefcase, ChevronRight, Award, PlayCircle, 
  BarChart2, TrendingUp, Sparkles, ShieldCheck, ArrowUpRight, CheckCircle2,
  DollarSign, GraduationCap, MapPin, Building2
} from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './CareerGuidance.css';

const mockAptitudeData = [
  { subject: 'Quantitative Aptitude', score: 88, fullMark: 100, level: 'High' },
  { subject: 'Verbal & English', score: 76, fullMark: 100, level: 'Good' },
  { subject: 'Logical Reasoning', score: 94, fullMark: 100, level: 'Exceptional' },
  { subject: 'General Awareness', score: 68, fullMark: 100, level: 'Moderate' },
  { subject: 'Decision Making', score: 82, fullMark: 100, level: 'Strong' },
];

const mockRecommendations = [
  { 
    id: 1, 
    name: 'SSC CGL (Combined Graduate Level)', 
    match: 94, 
    posts: '8,400+ Vacancies', 
    salary: '₹44,900 – ₹1,42,400 (Level 7/8)', 
    tag: 'Highest Match',
    role: 'Inspector (Central Excise/IT/ED), ASO',
    topSubjects: 'Reasoning (94%), Quant (88%)'
  },
  { 
    id: 2, 
    name: 'IBPS / SBI Probationary Officer (PO)', 
    match: 88, 
    posts: '4,500+ Vacancies', 
    salary: '₹52,000 – ₹85,000 + Perquisites', 
    tag: 'Strong Fit',
    role: 'Assistant Manager (Scale-I)',
    topSubjects: 'Reasoning, Data Interpretation'
  },
  { 
    id: 3, 
    name: 'UPSC Civil Services Examination (CSE)', 
    match: 82, 
    posts: '1,050+ Vacancies', 
    salary: '₹56,100 – ₹2,50,000 (Cabinet Secy)', 
    tag: 'High Prestige',
    role: 'IAS, IPS, IFS, IRS Officer',
    topSubjects: 'General Studies, Essay Writing'
  },
];

const careerRoadmap = [
  { stage: 'Year 1–3', rank: 'Assistant Section Officer / Inspector', pay: 'Level 7 (₹44,900)', scope: 'Field investigation & file drafting' },
  { stage: 'Year 4–8', rank: 'Superintendent / Section Officer', pay: 'Level 8/9 (₹53,100)', scope: 'Supervisory role & policy execution' },
  { stage: 'Year 9–15', rank: 'Assistant Commissioner / Under Secy', pay: 'Level 11 (₹67,700)', scope: 'Divisional administration & ministry policy' },
  { stage: 'Year 16+', rank: 'Joint Commissioner / Deputy Secy', pay: 'Level 12 (₹78,800+)', scope: 'State & national level decision making' }
];

export const CareerGuidance: React.FC = () => {
  const [selectedExam, setSelectedExam] = useState<number>(1);

  return (
    <div className="cg-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Career Guidance Engine', labelHi: 'करियर मार्गदर्शन' }
        ]}
        title="AI Career Alignment & Exam Matcher"
        titleHi="राष्ट्रीय करियर व परीक्षा चयन प्रणाली"
        description="Discover which government services match your cognitive strengths, educational profile, and pay-scale aspirations."
        descriptionHi="अपनी शैक्षणिक पृष्ठभूमि, तार्किक क्षमता और वेतन लक्ष्यों के आधार पर सर्वश्रेष्ठ सरकारी परीक्षा चुनें।"
        icon={<Target size={28} />}
        badge="NCS AI Career Matrix"
        actions={
          <div className="cg-hero-pills">
            <span className="cg-pill"><Compass size={14} /> Aptitude Verified</span>
          </div>
        }
      />

      <main role="main" className="cg-workspace-grid">
        {/* Top 3 Exam Match Showcase Cards */}
        <section className="cg-match-showcase-grid" aria-label="Top Exam Recommendations">
          {mockRecommendations.map(exam => (
            <div 
              key={exam.id} 
              className={`cg-exam-card ${selectedExam === exam.id ? 'active-exam' : ''}`}
              onClick={() => setSelectedExam(exam.id)}
            >
              <div className="cg-exam-card-head">
                <span className={`cg-match-badge ${exam.id === 1 ? 'gold' : ''}`}>
                  <Sparkles size={12} /> {exam.match}% Fit Score
                </span>
                <span className="cg-tag-pill">{exam.tag}</span>
              </div>

              <h2 className="cg-exam-name">{exam.name}</h2>
              <p className="cg-role-desc"><strong>Target Posts:</strong> {exam.role}</p>

              <div className="cg-exam-meta-block">
                <div className="cg-meta-row">
                  <Briefcase size={14} color="#0033A0" />
                  <span>{exam.posts}</span>
                </div>
                <div className="cg-meta-row">
                  <DollarSign size={14} color="#16A34A" />
                  <span>{exam.salary}</span>
                </div>
              </div>

              <div className="cg-card-footer">
                <span className="cg-match-reason">Aligns with: {exam.topSubjects}</span>
                <span className="cg-select-indicator">
                  {selectedExam === exam.id ? '● Selected Profile' : 'Click to View Path'}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* 2-Column Analytics & Career Ladder */}
        <div className="cg-dual-columns">
          {/* Left: Aptitude Radar Chart */}
          <div className="cg-chart-panel">
            <section className="cg-panel-card" aria-labelledby="radar-head">
              <div className="cg-panel-header">
                <div className="cg-panel-title-lockup">
                  <BarChart2 size={20} color="#0033A0" />
                  <h2 id="radar-head" className="cg-panel-title">
                    Cognitive Aptitude Matrix <span className="hi">क्षमता प्रोफ़ाइल</span>
                  </h2>
                </div>
                <span className="cg-score-pill">Overall Aptitude: 82%</span>
              </div>

              <div className="cg-radar-wrap">
                <ResponsiveContainer width="100%" height={260}>
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={mockAptitudeData}>
                    <PolarGrid stroke="#E2E8F0" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#CBD5E1" />
                    <Radar name="Aptitude Score" dataKey="score" stroke="#0033A0" fill="#0033A0" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Subject Breakdown Pills */}
              <div className="cg-apt-pills-row">
                {mockAptitudeData.map(item => (
                  <div key={item.subject} className="cg-apt-pill">
                    <span className="apt-name">{item.subject.split(' ')[0]}</span>
                    <span className="apt-val">{item.score}%</span>
                    <span className="apt-lvl">{item.level}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Career Ladder & Promotion Hierarchy */}
          <div className="cg-roadmap-panel">
            <section className="cg-panel-card" aria-labelledby="roadmap-head">
              <div className="cg-panel-header">
                <div className="cg-panel-title-lockup">
                  <TrendingUp size={20} color="#FE6500" />
                  <h2 id="roadmap-head" className="cg-panel-title">
                    Promotion & Growth Hierarchy <span className="hi">करियर पदोन्नति मार्ग</span>
                  </h2>
                </div>
                <span className="cg-ladder-tag">7th Pay Commission</span>
              </div>

              <p className="cg-ladder-desc">
                Estimated career trajectory for <strong>{mockRecommendations.find(e => e.id === selectedExam)?.name}</strong>:
              </p>

              <div className="cg-roadmap-steps">
                {careerRoadmap.map((step, idx) => (
                  <div key={idx} className="cg-step-card">
                    <div className="cg-step-num-pill">{step.stage}</div>
                    <div className="cg-step-content">
                      <h3 className="cg-step-rank">{step.rank}</h3>
                      <span className="cg-step-pay">{step.pay}</span>
                      <p className="cg-step-scope">{step.scope}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cg-action-box">
                <button className="cg-start-prep-btn" aria-label="Start personalized syllabus prep">
                  Start Personalized Preparation for {mockRecommendations.find(e => e.id === selectedExam)?.name.split(' ')[0]} <ArrowUpRight size={16} />
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default CareerGuidance;
