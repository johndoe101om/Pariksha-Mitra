import React, { useState } from 'react';
import { 
  Calendar, Plus, Clock, Users, Video, Radio, 
  CheckCircle2, XCircle, Globe, Shield, Sparkles, Filter, ChevronRight 
} from 'lucide-react';
import './LiveClassScheduler.css';

interface ScheduledClass {
  id: string;
  title: string;
  subject: string;
  exam: string;
  teacher: string;
  date: string;
  time: string;
  channel: string;
  status: 'Live Now' | 'Scheduled' | 'Completed';
  enrolledStudents: string;
  studio: string;
}

const initialSchedule: ScheduledClass[] = [
  {
    id: 'LIVE-101',
    title: 'Constitutional Law: Preamble & Fundamental Rights Comprehensive Revision',
    subject: 'General Studies (Paper II)',
    exam: 'UPSC CSE 2026',
    teacher: 'Dr. Sharma, Ex-IRS Topper',
    date: 'Today',
    time: '10:00 AM - 11:30 AM',
    channel: 'PM e-VIDYA Ch 22 (UPSC Live)',
    status: 'Live Now',
    enrolledStudents: '42,800',
    studio: 'NIC Studio-1 (Delhi Central)'
  },
  {
    id: 'LIVE-102',
    title: 'Quantitative Mastery: High-Yield Arithmetic & Data Interpretation',
    subject: 'Quantitative Aptitude',
    exam: 'SSC CGL Tier-1',
    teacher: 'Prof. Amit Verma',
    date: 'Today',
    time: '02:00 PM - 03:30 PM',
    channel: 'PM e-VIDYA Ch 23 (SSC & Railways)',
    status: 'Scheduled',
    enrolledStudents: '31,500',
    studio: 'MeghRaj Virtual Studio-2'
  },
  {
    id: 'LIVE-103',
    title: 'Target NEET UG: Cell Division, Mitosis & Meiosis Problem Workshop',
    subject: 'Biology / Cytology',
    exam: 'NEET UG 2026',
    teacher: 'Dr. Sunita Rao (AIIMS Alumnus)',
    date: 'Tomorrow',
    time: '11:00 AM - 12:30 PM',
    channel: 'SWAYAM Prabha DTH Ch 14',
    status: 'Scheduled',
    enrolledStudents: '28,400',
    studio: 'Studio-4 (Bhopal Hub)'
  },
  {
    id: 'LIVE-104',
    title: 'Banking Awareness: Union Budget 2026 Key Fiscal Indicators Analysis',
    subject: 'Financial & Economy',
    exam: 'Banking (IBPS PO)',
    teacher: 'P.K. Mohanty, Ex-SBI GM',
    date: 'Yesterday',
    time: '04:00 PM - 05:30 PM',
    channel: 'PM e-VIDYA Ch 24',
    status: 'Completed',
    enrolledStudents: '36,200',
    studio: 'Studio-3 (Hyderabad Hub)'
  }
];

const LiveClassScheduler: React.FC = () => {
  const [classes, setClasses] = useState<ScheduledClass[]>(initialSchedule);
  const [showModal, setShowModal] = useState(false);
  const [filterExam, setFilterExam] = useState('All');
  const [notificationBanner, setNotificationBanner] = useState<string | null>(null);

  // Form State
  const [fTitle, setFTitle] = useState('');
  const [fExam, setFExam] = useState('UPSC CSE');
  const [fTeacher, setFTeacher] = useState('');
  const [fDate, setFDate] = useState('');
  const [fTime, setFTime] = useState('');
  const [fChannel, setFChannel] = useState('PM e-VIDYA Ch 22');

  const triggerToast = (msg: string) => {
    setNotificationBanner(msg);
    setTimeout(() => setNotificationBanner(null), 3000);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fTitle) return;
    const newClass: ScheduledClass = {
      id: `LIVE-${Math.floor(100 + Math.random() * 900)}`,
      title: fTitle,
      subject: 'Special Masterclass',
      exam: fExam,
      teacher: fTeacher || 'Ministry Faculty',
      date: fDate || 'Tomorrow',
      time: fTime || '10:00 AM - 11:30 AM',
      channel: fChannel,
      status: 'Scheduled',
      enrolledStudents: '12,000+',
      studio: 'NIC Delhi Central'
    };
    setClasses([newClass, ...classes]);
    setShowModal(false);
    setFTitle('');
    triggerToast(`New broadcast "${newClass.title}" scheduled and uplinked to DD Free Dish.`);
  };

  const filteredClasses = classes.filter(c => filterExam === 'All' || c.exam.includes(filterExam));

  return (
    <div className="scheduler-mgmt-page">
      {/* 1. Header Banner */}
      <div className="sch-top-header">
        <div className="sch-title-lockup">
          <div className="badge-row">
            <span className="live-broadcast-tag"><Radio size={12} /> SATELLITE &amp; DTH UPLINK</span>
            <span className="evidya-hub-tag">PM e-VIDYA 24x7 Broadcast Control</span>
          </div>
          <h1>Live Class Operations &amp; Satellite Broadcast Grid</h1>
          <p>Coordinate daily nationwide live classes, DD Free Dish simulcasts, and two-way interactive student Q&amp;A sessions.</p>
        </div>

        <div className="sch-header-actions">
          <button className="btn-schedule-class" onClick={() => setShowModal(true)}>
            <Plus size={14} /> Schedule Satellite Masterclass
          </button>
        </div>
      </div>

      {notificationBanner && (
        <div className="sch-toast-banner">
          <CheckCircle2 size={16} color="#15803D" />
          <span>{notificationBanner}</span>
        </div>
      )}

      {/* 2. 4-Column KPI Cards */}
      <div className="sch-kpi-grid">
        <div className="sch-kpi-card border-red">
          <div className="kpi-icon-square bg-red-soft"><Radio size={20} color="#DC2626" /></div>
          <div>
            <span className="kpi-label">Active Live Streams</span>
            <h3>8 Channels</h3>
            <p>DD Free Dish &amp; Web App</p>
          </div>
        </div>

        <div className="sch-kpi-card border-blue">
          <div className="kpi-icon-square bg-blue-soft"><Users size={20} color="#002B7F" /></div>
          <div>
            <span className="kpi-label">Live Viewers Now</span>
            <h3>1.42 Lakh</h3>
            <p>Concurrent Aspirants</p>
          </div>
        </div>

        <div className="sch-kpi-card border-green">
          <div className="kpi-icon-square bg-green-soft"><Calendar size={20} color="#15803D" /></div>
          <div>
            <span className="kpi-label">Today's Broadcasts</span>
            <h3>24 Sessions</h3>
            <p>Across 8 Exam Streams</p>
          </div>
        </div>

        <div className="sch-kpi-card border-purple">
          <div className="kpi-icon-square bg-purple-soft"><Globe size={20} color="#7E22CE" /></div>
          <div>
            <span className="kpi-label">DTH Reach</span>
            <h3>34 Channels</h3>
            <p>100% Free Pan-India</p>
          </div>
        </div>
      </div>

      {/* 3. Class List */}
      <div className="sch-main-card">
        <div className="sch-card-header">
          <div>
            <h3>Scheduled Operations Grid</h3>
            <p>National live timetable coordinated across Ministry satellite hubs</p>
          </div>
          <div className="sch-filter-box">
            <Filter size={13} color="#64748B" />
            <select value={filterExam} onChange={(e) => setFilterExam(e.target.value)}>
              <option value="All">All Streams</option>
              <option value="UPSC">UPSC CSE</option>
              <option value="SSC">SSC CGL</option>
              <option value="NEET">NEET UG</option>
              <option value="Banking">Banking</option>
            </select>
          </div>
        </div>

        <div className="classes-grid-list">
          {filteredClasses.map(cls => (
            <div key={cls.id} className={`class-schedule-card status-${cls.status.toLowerCase().replace(' ', '-')}`}>
              <div className="card-top-row">
                <span className="exam-tag">{cls.exam}</span>
                <span className={`status-badge-live ${cls.status.toLowerCase().replace(' ', '-')}`}>
                  {cls.status === 'Live Now' && <span className="live-dot-pulse">●</span>} {cls.status}
                </span>
              </div>

              <h4>{cls.title}</h4>
              <p className="teacher-line">by <strong>{cls.teacher}</strong> • {cls.subject}</p>

              <div className="time-channel-box">
                <div className="tc-item"><Clock size={13} color="#002B7F" /> <span>{cls.date} • {cls.time}</span></div>
                <div className="tc-item"><Video size={13} color="#002B7F" /> <span>{cls.channel}</span></div>
                <div className="tc-item"><Users size={13} color="#002B7F" /> <span>{cls.enrolledStudents} registered</span></div>
              </div>

              <div className="card-footer-actions">
                <span className="studio-tag">{cls.studio}</span>
                {cls.status === 'Live Now' ? (
                  <button className="btn-monitor-live" onClick={() => triggerToast(`Connecting to master control room for ${cls.id}...`)}>
                    Monitor Stream →
                  </button>
                ) : (
                  <button className="btn-edit-sch" onClick={() => triggerToast(`Opening scheduler settings for ${cls.id}...`)}>
                    Modify Slot
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Schedule Modal */}
      {showModal && (
        <div className="sch-modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="sch-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title-row">
              <h3>Schedule New Satellite Broadcast Session</h3>
              <button className="btn-close" onClick={() => setShowModal(false)}>✕</button>
            </div>

            <form onSubmit={handleScheduleSubmit} className="modal-form-body">
              <div className="form-item">
                <label>Masterclass Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Modern Indian History Ch. 6: Indian Freedom Movement"
                  value={fTitle}
                  onChange={(e) => setFTitle(e.target.value)}
                />
              </div>

              <div className="form-grid-2">
                <div className="form-item">
                  <label>Target Exam</label>
                  <select value={fExam} onChange={(e) => setFExam(e.target.value)}>
                    <option value="UPSC CSE">UPSC Civil Services (CSE)</option>
                    <option value="SSC CGL">SSC CGL</option>
                    <option value="NEET UG">NEET UG</option>
                    <option value="Banking PO">Banking PO</option>
                  </select>
                </div>
                <div className="form-item">
                  <label>Faculty / Educator</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Dr. A.P. Singh, Empaneled Faculty"
                    value={fTeacher}
                    onChange={(e) => setFTeacher(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-item">
                  <label>Broadcast Date</label>
                  <input type="text" placeholder="e.g. Today, Tomorrow, 26 Aug" value={fDate} onChange={(e) => setFDate(e.target.value)} />
                </div>
                <div className="form-item">
                  <label>Time Slot</label>
                  <input type="text" placeholder="e.g. 10:00 AM - 11:30 AM" value={fTime} onChange={(e) => setFTime(e.target.value)} />
                </div>
              </div>

              <div className="form-item">
                <label>DTH Uplink Channel</label>
                <select value={fChannel} onChange={(e) => setFChannel(e.target.value)}>
                  <option value="PM e-VIDYA Ch 22 (UPSC Live)">PM e-VIDYA Ch 22 (UPSC Live)</option>
                  <option value="PM e-VIDYA Ch 23 (SSC & Railways)">PM e-VIDYA Ch 23 (SSC &amp; Railways)</option>
                  <option value="SWAYAM Prabha DTH Ch 14 (NEET/JEE)">SWAYAM Prabha DTH Ch 14 (NEET/JEE)</option>
                </select>
              </div>

              <div className="modal-cta-row">
                <button type="submit" className="btn-confirm-sch">Confirm &amp; Uplink</button>
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveClassScheduler;
