import React, { useState } from 'react';
import { 
  Users, PhoneCall, MessageCircle, Bell, TrendingUp, BookOpen, Clock, CheckCircle, 
  AlertTriangle, PlayCircle, Smartphone, Flame, Target, ShieldCheck, ArrowRight,
  Radio, Phone, Volume2, Sparkles, CheckCircle2, ChevronRight, UserCheck
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, CartesianGrid } from 'recharts';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './ParentDashboard.css';

const studyData = [
  { day: 'Mon', hours: 3.2, goal: 3.0 },
  { day: 'Tue', hours: 4.0, goal: 3.0 },
  { day: 'Wed', hours: 2.8, goal: 3.0 },
  { day: 'Thu', hours: 4.5, goal: 3.0 },
  { day: 'Fri', hours: 3.0, goal: 3.0 },
  { day: 'Sat', hours: 2.5, goal: 3.0 },
  { day: 'Sun', hours: 1.5, goal: 3.0 }
];

export const ParentDashboard: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState('Rahul Kumar (SSC CGL 2026)');
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [waEnabled, setWaEnabled] = useState(true);
  const [parentPhone, setParentPhone] = useState('9876543210');
  const [reportFreq, setReportFreq] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [reportLang, setReportLang] = useState<'hi' | 'en'>('hi');

  return (
    <div className="parent-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Parent Dashboard', labelHi: 'अभिभावक डैशबोर्ड' }
        ]}
        title="Parent & Guardian Progress Portal"
        titleHi="अभिभावक प्रगति व निगरानी पोर्टल"
        description="Transparent student progress tracking with automated Hindi SMS reports, Toll-Free 1800 IVR updates, and WhatsApp report cards."
        descriptionHi="मुफ्त साप्ताहिक एसएमएस, टोल-फ्री आईवीआर और व्हाट्सएप प्रगति पत्र के माध्यम से बच्चे की पढ़ाई की निगरानी।"
        icon={<Users size={28} />}
        badge="Zero-Internet IVR & SMS Fallback"
        actions={
          <div className="parent-child-switcher">
            <UserCheck size={16} color="#FFD54F" />
            <select 
              className="parent-child-select"
              value={selectedChild}
              onChange={(e) => setSelectedChild(e.target.value)}
              aria-label="Select Child"
            >
              <option value="Rahul Kumar (SSC CGL 2026)">Rahul Kumar • SSC CGL 2026</option>
              <option value="Priya Kumar (NEET UG 2027)">Priya Kumar • NEET UG 2027</option>
            </select>
          </div>
        }
      />

      <main role="main" className="parent-workspace">
        {/* 2. Top 4 KPI Metrics */}
        <section className="parent-kpi-grid" aria-label="Student Weekly Highlights">
          <div className="parent-kpi-card blue-top">
            <div className="pkpi-icon-wrap blue">
              <Clock size={22} />
            </div>
            <div className="pkpi-info">
              <span className="pkpi-val">21.5 hrs</span>
              <span className="pkpi-lbl">Study Time This Week</span>
              <span className="pkpi-delta positive">+4.5 hrs above target</span>
            </div>
          </div>

          <div className="parent-kpi-card green-top">
            <div className="pkpi-icon-wrap green">
              <PlayCircle size={22} />
            </div>
            <div className="pkpi-info">
              <span className="pkpi-val">28 Lectures</span>
              <span className="pkpi-lbl">Video Modules Completed</span>
              <span className="pkpi-delta">100% attendance rate</span>
            </div>
          </div>

          <div className="parent-kpi-card saffron-top">
            <div className="pkpi-icon-wrap saffron">
              <Target size={22} />
            </div>
            <div className="pkpi-info">
              <span className="pkpi-val">84.2%</span>
              <span className="pkpi-lbl">Practice Test Accuracy</span>
              <span className="pkpi-delta positive">All-India Rank: Top 6%</span>
            </div>
          </div>

          <div className="parent-kpi-card amber-top">
            <div className="pkpi-icon-wrap amber">
              <Flame size={22} />
            </div>
            <div className="pkpi-info">
              <span className="pkpi-val">14 Days 🔥</span>
              <span className="pkpi-lbl">Daily Consistency Streak</span>
              <span className="pkpi-delta">Excellent Discipline</span>
            </div>
          </div>
        </section>

        {/* 3. Study Hours Chart & Subject Performance Dual Panel */}
        <div className="parent-dual-row">
          {/* Study Hours Chart */}
          <section className="parent-card" aria-labelledby="chart-head">
            <div className="pcard-head">
              <div className="pcard-title-group">
                <TrendingUp size={20} color="#0033A0" />
                <h2 id="chart-head" className="pcard-title">
                  Daily Study Hours Breakdown <span className="hi">दैनिक अध्ययन घंटे</span>
                </h2>
              </div>
              <span className="pcard-badge">Goal: 3.0 hrs/day</span>
            </div>

            <div className="parent-chart-wrap">
              <ResponsiveContainer width="100%" height={240}>
                <BarChart data={studyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="day" tick={{ fill: '#64748B', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#64748B', fontSize: 12 }} />
                  <RechartsTooltip />
                  <Bar dataKey="hours" fill="#0033A0" radius={[6, 6, 0, 0]} name="Hours Studied" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Academic Strengths & Attention Needed */}
          <section className="parent-card" aria-labelledby="sw-head">
            <div className="pcard-head">
              <div className="pcard-title-group">
                <BookOpen size={20} color="#FE6500" />
                <h2 id="sw-head" className="pcard-title">
                  Subject Performance Audit <span className="hi">विषयवार स्थिति</span>
                </h2>
              </div>
            </div>

            <div className="parent-sw-grid">
              <div className="sw-card strength-box">
                <div className="sw-head">
                  <CheckCircle2 size={18} color="#16A34A" />
                  <strong>Strengths (सबल पक्ष)</strong>
                </div>
                <ul className="sw-list">
                  <li><strong>Logical Reasoning:</strong> 92% accuracy, very high speed</li>
                  <li><strong>English Comprehension:</strong> 86% accuracy, strong vocabulary</li>
                </ul>
              </div>

              <div className="sw-card attention-box">
                <div className="sw-head">
                  <AlertTriangle size={18} color="#D97706" />
                  <strong>Needs Attention (सुधार की आवश्यकता)</strong>
                </div>
                <ul className="sw-list">
                  <li><strong>Quantitative Aptitude:</strong> Needs revision in Algebra & Geometry</li>
                  <li><strong>Target:</strong> Attempt 20 extra practice questions daily</li>
                </ul>
              </div>
            </div>

            <div className="parent-advice-pill">
              <Sparkles size={16} color="#0033A0" />
              <span><strong>Parent Tip:</strong> Encourage Rahul to take the weekly Sunday mock test without distraction.</span>
            </div>
          </section>
        </div>

        {/* 4. Automated SMS & Toll-Free IVR Hub */}
        <div className="parent-dual-row">
          {/* SMS Report Dispatcher */}
          <section className="parent-card" aria-labelledby="sms-head">
            <div className="pcard-head">
              <div className="pcard-title-group">
                <Smartphone size={20} color="#0033A0" />
                <h2 id="sms-head" className="pcard-title">
                  Automated Mobile SMS Dispatch <span className="hi">मुफ्त एसएमएस रिपोर्ट</span>
                </h2>
              </div>
              <span className="pcard-badge free">100% Free Govt Service</span>
            </div>

            <div className="parent-sms-settings">
              <div className="psms-row">
                <label className="psms-lbl">Guardian Mobile Number:</label>
                <div className="psms-input-wrap">
                  <span>🇮🇳 +91</span>
                  <input 
                    type="tel"
                    className="psms-input"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                  />
                </div>
              </div>

              <div className="psms-options-grid">
                <div>
                  <label className="psms-lbl">Frequency:</label>
                  <div className="psms-pill-group">
                    <button 
                      className={`psms-pill ${reportFreq === 'daily' ? 'active' : ''}`}
                      onClick={() => setReportFreq('daily')}
                    >
                      Daily
                    </button>
                    <button 
                      className={`psms-pill ${reportFreq === 'weekly' ? 'active' : ''}`}
                      onClick={() => setReportFreq('weekly')}
                    >
                      Weekly (Sunday 8 PM)
                    </button>
                  </div>
                </div>

                <div>
                  <label className="psms-lbl">Language:</label>
                  <div className="psms-pill-group">
                    <button 
                      className={`psms-pill ${reportLang === 'hi' ? 'active' : ''}`}
                      onClick={() => setReportLang('hi')}
                    >
                      हिन्दी
                    </button>
                    <button 
                      className={`psms-pill ${reportLang === 'en' ? 'active' : ''}`}
                      onClick={() => setReportLang('en')}
                    >
                      English
                    </button>
                  </div>
                </div>
              </div>

              {/* Realistic SMS Bubble Mockup */}
              <div className="psms-preview-box">
                <div className="sms-bubble-head">
                  <Smartphone size={14} /> Sample SMS to +91 {parentPhone}
                </div>
                <div className="sms-bubble-body">
                  {reportLang === 'hi' ? (
                    <p>
                      <strong>परीक्षा मित्र रिपोर्ट:</strong> राहुल ने इस सप्ताह 21.5 घंटे पढ़ाई की और 145 प्रश्न 84% सटीकता के साथ हल किए। मॉक टेस्ट रैंक: Top 6%। पूरी रिपोर्ट देखें: <u>pm.gov.in/r/9921</u>
                    </p>
                  ) : (
                    <p>
                      <strong>Pariksha Mitra Update:</strong> Rahul studied 21.5h this week & solved 145 MCQs with 84% accuracy. Test Rank: Top 6%. Full report: <u>pm.gov.in/r/9921</u>
                    </p>
                  )}
                  <span className="sms-timestamp">Sunday, 08:00 PM • NIC Gateway</span>
                </div>
              </div>
            </div>
          </section>

          {/* Toll-Free 1800 IVR Audio & WhatsApp Cards */}
          <section className="parent-card" aria-labelledby="ivr-head">
            <div className="pcard-head">
              <div className="pcard-title-group">
                <PhoneCall size={20} color="#16A34A" />
                <h2 id="ivr-head" className="pcard-title">
                  Toll-Free 1800 IVR Audio System <span className="hi">टोल-फ्री फोन सेवा</span>
                </h2>
              </div>
              <span className="pcard-badge green">Zero Internet Needed</span>
            </div>

            <div className="ivr-hero-box">
              <div className="ivr-phone-banner">
                <div className="ivr-call-circle">
                  <Phone size={24} color="#FFFFFF" />
                </div>
                <div>
                  <span className="ivr-call-lbl">Toll-Free Helpline for Parents</span>
                  <strong className="ivr-call-num">1800-11-8002</strong>
                </div>
              </div>

              <p className="ivr-desc">
                Parents with basic keypad feature phones can call this toll-free number from their registered mobile to listen to their child's weekly marks and attendance in Hindi.
              </p>

              <div className="ivr-steps-list">
                <div className="ivr-step-item">
                  <span className="step-num">1</span>
                  <span>Dial 1800-11-8002 (Toll Free)</span>
                </div>
                <div className="ivr-step-item">
                  <span className="step-num">2</span>
                  <span>Press 1 for Hindi / 2 for Regional Language</span>
                </div>
                <div className="ivr-step-item">
                  <span className="step-num">3</span>
                  <span>Listen to Rahul's weekly test score and study streak</span>
                </div>
              </div>
            </div>

            <div className="parent-whatsapp-link-box">
              <div className="wa-link-left">
                <MessageCircle size={22} color="#128C7E" />
                <div>
                  <strong>WhatsApp Weekly Progress Card</strong>
                  <span>Receive high-resolution visual report cards on WhatsApp</span>
                </div>
              </div>
              <button className="parent-wa-btn">
                Subscribe WhatsApp <ArrowRight size={14} />
              </button>
            </div>
          </section>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default ParentDashboard;
