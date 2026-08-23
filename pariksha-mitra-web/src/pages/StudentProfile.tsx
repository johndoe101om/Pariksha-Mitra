import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, Award, Clock, BookOpen, Target, Flame, 
  CheckCircle, Edit3, ShieldCheck, TrendingUp, 
  FileText, Star, Calendar, MapPin, Zap, ChevronRight,
  BookMarked, Sparkles, X, Save
} from 'lucide-react';
import './StudentProfile.css';

export default function StudentProfile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [userData, setUserData] = useState({
    name: 'Rahul Kumar',
    phone: '9876543210',
    email: 'rahul.kumar@nic.in',
    dob: '2001-08-15',
    gender: 'Male',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    category: 'General / Unreserved',
    educationLevel: 'Graduate (B.A. Political Science)',
    exam: 'UPSC Civil Services Examination (CSE)',
    targetYear: '2026',
    secondaryExams: ['UPPSC PCS', 'SSC CGL'],
    optionalSubject: 'History Optional',
    dailyGoal: '6 Hours / Day',
    registrationDate: 'August 2026'
  });

  const [initials, setInitials] = useState('RK');

  useEffect(() => {
    const dataStr = (localStorage.getItem('parikshasetu_user') || localStorage.getItem('pariksha_mitra_user'));
    if (dataStr) {
      try {
        const parsed = JSON.parse(dataStr);
        setUserData(prev => ({
          ...prev,
          ...parsed,
          name: parsed.name || prev.name,
          exam: parsed.targetExam || parsed.exam || prev.exam,
          state: parsed.state || prev.state,
          email: parsed.email || prev.email,
          phone: parsed.phone || prev.phone
        }));

        if (parsed.name) {
          const init = parsed.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase();
          setInitials(init || 'RK');
        }
      } catch (e) {}
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      localStorage.setItem('parikshasetu_user', JSON.stringify(userData));
      setIsEditing(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (e) {}
  };

  const masteryData = [
    { subject: 'Indian Polity & Constitution', score: 88, level: 'Advanced', color: '#0033A0' },
    { subject: 'Current Affairs & Editorials', score: 92, level: 'Expert', color: '#024A00' },
    { subject: 'Geography & Environment', score: 82, level: 'Proficient', color: '#0D47A1' },
    { subject: 'Modern & Ancient History', score: 76, level: 'Proficient', color: '#FE6500' },
    { subject: 'Indian Economy & Budget', score: 68, level: 'Intermediate', color: '#D97706' },
    { subject: 'General Science & Tech', score: 72, level: 'Intermediate', color: '#7C3AED' },
  ];

  const badges = [
    { id: 'b1', title: 'Streak Master', desc: '12 consecutive days of active study', icon: '🔥', tier: 'Gold' },
    { id: 'b2', title: 'Polity Wizard', desc: 'Top 5% score in Constitution Mock', icon: '📜', tier: 'Diamond' },
    { id: 'b3', title: 'Speed Demon', desc: 'Solved 50 questions in under 25 mins', icon: '⚡', tier: 'Silver' },
    { id: 'b4', title: 'Library Scholar', desc: 'Completed 30+ video lecture series', icon: '📚', tier: 'Gold' },
    { id: 'b5', title: 'Doubt Crusher', desc: 'Resolved 25+ conceptual queries', icon: '💡', tier: 'Silver' },
    { id: 'b6', title: 'Mentorship Pioneer', desc: 'Attended 1-on-1 strategy call', icon: '🤝', tier: 'Special' },
  ];

  const recentActivity = [
    { title: 'Completed UPSC Prelims Mock Test #4', meta: 'Score: 142/200 • Accuracy: 86%', time: 'Today, 10:30 AM', icon: Target, color: '#0033A0' },
    { title: '1-on-1 Mentorship Call with Anjali Sharma (AIR 45)', meta: 'Discussion: Modern History Timeline & Answer Writing', time: 'Yesterday, 04:00 PM', icon: Award, color: '#024A00' },
    { title: 'Completed Video: 1857 Revolt & British Administrative Impact', meta: 'Watch Time: 48 mins • Quiz: 5/5', time: '2 days ago', icon: BookOpen, color: '#FE6500' },
    { title: 'Daily Current Affairs Quiz Challenge', meta: 'Score: 10/10 • Streak Extended to 12 Days', time: '3 days ago', icon: Flame, color: '#DC2626' },
  ];

  return (
    <div className="aspirant-profile-page">
      {/* Top Banner Hero */}
      <div className="profile-hero-card">
        <div className="hero-grid">
          <div className="hero-identity">
            <div className="hero-avatar">
              {initials}
              <span className="hero-verified-dot" title="National Student ID Verified">
                <ShieldCheck size={16} />
              </span>
            </div>

            <div className="hero-details">
              <div className="name-row">
                <h1>{userData.name}</h1>
                <span className="gov-roll-tag">ID: PM-2026-8842</span>
              </div>
              <p className="hero-primary-exam">🎯 {userData.exam} ({userData.targetYear})</p>
              <div className="hero-location-row">
                <span><MapPin size={14} /> {userData.district}, {userData.state}</span>
                <span>•</span>
                <span><Calendar size={14} /> Enrolled {userData.registrationDate}</span>
                <span>•</span>
                <span className="gov-free-pill">100% Free Sovereign Seat</span>
              </div>
            </div>
          </div>

          <div className="hero-actions-right">
            <button className="btn-edit-profile" onClick={() => setIsEditing(true)}>
              <Edit3 size={16} /> Edit Academic Info
            </button>
            <button className="btn-open-settings" onClick={() => navigate('/settings')}>
              Manage App Settings <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {saveSuccess && (
        <div className="profile-save-banner">
          <CheckCircle size={18} />
          <span>Profile updated successfully! / आपकी प्रोफ़ाइल सफलतापूर्वक अपडेट हो गई!</span>
        </div>
      )}

      {/* Metrics Row */}
      <div className="profile-kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon-wrap blue">
            <Clock size={22} color="#0033A0" />
          </div>
          <div>
            <span className="kpi-val">245.5h</span>
            <span className="kpi-label">Total Study Time</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap orange">
            <BookOpen size={22} color="#FE6500" />
          </div>
          <div>
            <span className="kpi-val">34 Tests</span>
            <span className="kpi-label">Full Mocks Taken</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap green">
            <Target size={22} color="#024A00" />
          </div>
          <div>
            <span className="kpi-val">84.2%</span>
            <span className="kpi-label">Overall Accuracy</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap red">
            <Flame size={22} color="#DC2626" />
          </div>
          <div>
            <span className="kpi-val">12 Days</span>
            <span className="kpi-label">Current Streak</span>
          </div>
        </div>

        <div className="kpi-card">
          <div className="kpi-icon-wrap purple">
            <Award size={22} color="#7C3AED" />
          </div>
          <div>
            <span className="kpi-val">Top 8%</span>
            <span className="kpi-label">National Rank</span>
          </div>
        </div>
      </div>

      {/* 2-Column Main Dossier */}
      <div className="dossier-layout-grid">
        {/* Left Column */}
        <div className="dossier-left-col">
          {/* Academic & Exam Portfolio */}
          <div className="dossier-card">
            <div className="card-header-clean">
              <div className="header-title-flex">
                <BookMarked size={20} color="#0033A0" />
                <h3>Academic & Exam Portfolio</h3>
              </div>
              <button className="btn-text-action" onClick={() => setIsEditing(true)}>Edit</button>
            </div>

            <div className="dossier-info-list">
              <div className="dossier-item">
                <span className="det-title">Primary Target Examination</span>
                <strong>{userData.exam}</strong>
              </div>
              <div className="dossier-item">
                <span className="det-title">Target Year & Daily Target</span>
                <strong>{userData.targetYear} • {userData.dailyGoal}</strong>
              </div>
              <div className="dossier-item">
                <span className="det-title">Educational Background</span>
                <strong>{userData.educationLevel}</strong>
              </div>
              <div className="dossier-item">
                <span className="det-title">Reservation Category</span>
                <strong>{userData.category}</strong>
              </div>
              <div className="dossier-item">
                <span className="det-title">Optional / Specialization Subject</span>
                <strong>{userData.optionalSubject || 'Not Selected'}</strong>
              </div>
              <div className="dossier-item">
                <span className="det-title">Secondary Parallel Exams</span>
                <div className="secondary-tags-list">
                  {userData.secondaryExams && userData.secondaryExams.map((e: string) => (
                    <span key={e} className="secondary-tag-pill">{e}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Subject Mastery Progress Breakdown */}
          <div className="dossier-card">
            <div className="card-header-clean">
              <div className="header-title-flex">
                <TrendingUp size={20} color="#024A00" />
                <h3>Subject Mastery & AI Diagnostics</h3>
              </div>
              <span className="badge-subtitle">Adaptive Evaluation</span>
            </div>

            <div className="mastery-bars-list">
              {masteryData.map(item => (
                <div key={item.subject} className="mastery-item">
                  <div className="mastery-label-row">
                    <span className="subject-name">{item.subject}</span>
                    <div className="mastery-level-box">
                      <span className="level-text" style={{ color: item.color }}>{item.level}</span>
                      <strong>{item.score}%</strong>
                    </div>
                  </div>
                  <div className="mastery-bar-bg">
                    <div 
                      className="mastery-bar-fill" 
                      style={{ width: `${item.score}%`, backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="dossier-right-col">
          {/* Badges & Accomplishments */}
          <div className="dossier-card">
            <div className="card-header-clean">
              <div className="header-title-flex">
                <Award size={20} color="#FE6500" />
                <h3>Aspirant Badges & Honors</h3>
              </div>
              <span className="badge-count-pill">{badges.length} Earned</span>
            </div>

            <div className="badges-grid-2">
              {badges.map(b => (
                <div key={b.id} className="badge-tile">
                  <span className="badge-emoji">{b.icon}</span>
                  <div className="badge-tile-info">
                    <strong>{b.title}</strong>
                    <p>{b.desc}</p>
                  </div>
                  <span className={`badge-tier-tag ${b.tier.toLowerCase()}`}>{b.tier}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Learning Activity Timeline */}
          <div className="dossier-card">
            <div className="card-header-clean">
              <div className="header-title-flex">
                <Sparkles size={20} color="#0033A0" />
                <h3>Recent Activity & Milestones</h3>
              </div>
            </div>

            <div className="activity-timeline">
              {recentActivity.map((act, idx) => {
                const IconComponent = act.icon;
                return (
                  <div key={idx} className="timeline-item">
                    <div className="timeline-icon-dot" style={{ backgroundColor: `${act.color}15`, color: act.color }}>
                      <IconComponent size={16} />
                    </div>
                    <div className="timeline-content">
                      <strong>{act.title}</strong>
                      <p>{act.meta}</p>
                      <span className="timeline-time">{act.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="profile-modal-overlay">
          <div className="profile-modal-card">
            <div className="modal-header-row">
              <h3>Edit Academic & Personal Info</h3>
              <button className="btn-close-modal" onClick={() => setIsEditing(false)}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="modal-form-grid">
              <div className="form-input-group">
                <label>Full Name</label>
                <input type="text" name="name" value={userData.name} onChange={handleInputChange} required />
              </div>

              <div className="form-input-group">
                <label>Mobile Number (+91)</label>
                <input type="tel" name="phone" value={userData.phone} onChange={handleInputChange} required />
              </div>

              <div className="form-input-group">
                <label>Email Address</label>
                <input type="email" name="email" value={userData.email} onChange={handleInputChange} />
              </div>

              <div className="form-input-group">
                <label>Target Competitive Exam</label>
                <select name="exam" value={userData.exam} onChange={handleInputChange}>
                  <option value="UPSC Civil Services Examination (CSE)">UPSC Civil Services Examination (CSE)</option>
                  <option value="SSC CGL (Combined Graduate Level)">SSC CGL (Combined Graduate Level)</option>
                  <option value="IBPS / SBI Bank PO">IBPS / SBI Bank PO</option>
                  <option value="Railway RRB NTPC / Group D">Railway RRB NTPC / Group D</option>
                  <option value="State PCS (UPPSC / BPSC / MPPSC)">State PCS (State Civil Services)</option>
                  <option value="NEET UG (Medical Entrance)">NEET UG (Medical Entrance)</option>
                  <option value="JEE Main / Advanced">JEE Main / Advanced</option>
                </select>
              </div>

              <div className="form-input-group">
                <label>Target Year</label>
                <select name="targetYear" value={userData.targetYear} onChange={handleInputChange}>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>

              <div className="form-input-group">
                <label>State / UT</label>
                <input type="text" name="state" value={userData.state} onChange={handleInputChange} />
              </div>

              <div className="form-input-group">
                <label>District / City</label>
                <input type="text" name="district" value={userData.district} onChange={handleInputChange} />
              </div>

              <div className="form-input-group">
                <label>Optional Subject</label>
                <input type="text" name="optionalSubject" value={userData.optionalSubject} onChange={handleInputChange} />
              </div>

              <div className="form-input-group full-span">
                <label>Educational Background</label>
                <input type="text" name="educationLevel" value={userData.educationLevel} onChange={handleInputChange} />
              </div>

              <div className="modal-actions-bar full-span">
                <button type="button" className="btn-modal-cancel" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-modal-save">
                  <Save size={16} /> Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
