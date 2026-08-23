import React, { useState } from 'react';
import { 
  Users, FilePlus, BarChart2, BookOpen, Download, UserCheck, Search, 
  PlusCircle, CheckCircle, School, Sparkles, ShieldCheck, ArrowRight,
  TrendingUp, Award, Calendar, ExternalLink
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './SchoolIntegration.css';

const classes = [
  { id: 1, name: 'Class 12-A (PCM Stream)', subject: 'Physics & General Science', students: 45, progress: 78, nextTest: '28 Aug 2026', topScorer: 'Aarav Sharma (94%)' },
  { id: 2, name: 'Class 12-B (Commerce Stream)', subject: 'Mathematics & Quantitative Aptitude', students: 42, progress: 85, nextTest: '30 Aug 2026', topScorer: 'Rohan Patel (96%)' },
  { id: 3, name: 'Class 11-A (Science Foundation)', subject: 'Chemistry & Reasoning Basics', students: 50, progress: 64, nextTest: '02 Sep 2026', topScorer: 'Priya Singh (88%)' },
];

const studentsData = [
  { id: 1, name: 'Aarav Sharma', apaarId: 'APAAR-2026-9921', videos: 45, practice: '88%', mockScore: '154/200', active: '2h ago', status: 'Exemplary' },
  { id: 2, name: 'Rohan Patel', apaarId: 'APAAR-2026-9922', videos: 50, practice: '92%', mockScore: '162/200', active: '1h ago', status: 'Exemplary' },
  { id: 3, name: 'Priya Singh', apaarId: 'APAAR-2026-9923', videos: 32, practice: '75%', mockScore: '128/200', active: '5h ago', status: 'On Track' },
  { id: 4, name: 'Neha Gupta', apaarId: 'APAAR-2026-9924', videos: 20, practice: '65%', mockScore: '110/200', active: '1d ago', status: 'Needs Support' },
];

export const SchoolIntegration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classrooms' | 'progress' | 'assign' | 'reports'>('classrooms');

  return (
    <div className="si-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'School Integration', labelHi: 'विद्यालय एकीकरण' }
        ]}
        title="Kendriya Vidyalaya • Teacher Command Portal"
        titleHi="केंद्रीय विद्यालय शिक्षक एवं कक्षा प्रबंधन पोर्टल"
        description="UDISE+ Code: 06180504102 • APAAR One Nation One Student ID • Academic Bank of Credits (ABC) Synced."
        descriptionHi="UDISE+ 06180504102 | अपार आईडी और अकादमिक बैंक ऑफ क्रेडिट्स द्वारा संबद्ध।"
        icon={<School size={28} />}
        badge="NEP 2020 School Hub"
        actions={
          <div className="si-hero-action-pill">
            <ShieldCheck size={14} color="#86EFAC" /> <span>CBSE Affiliation: Verified</span>
          </div>
        }
      />

      <main role="main" className="si-workspace">
        {/* Navigation Tabs */}
        <div className="si-nav-tabs" role="tablist">
          <button 
            className={`si-tab ${activeTab === 'classrooms' ? 'active' : ''}`}
            onClick={() => setActiveTab('classrooms')}
            role="tab"
            aria-selected={activeTab === 'classrooms'}
          >
            <Users size={16} /> My Enrolled Classrooms ({classes.length})
          </button>
          <button 
            className={`si-tab ${activeTab === 'progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('progress')}
            role="tab"
            aria-selected={activeTab === 'progress'}
          >
            <BarChart2 size={16} /> Student Analytics & APAAR ID
          </button>
          <button 
            className={`si-tab ${activeTab === 'assign' ? 'active' : ''}`}
            onClick={() => setActiveTab('assign')}
            role="tab"
            aria-selected={activeTab === 'assign'}
          >
            <FilePlus size={16} /> Homework & Mock Assignment
          </button>
          <button 
            className={`si-tab ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
            role="tab"
            aria-selected={activeTab === 'reports'}
          >
            <Download size={16} /> Export CBSE / UDISE+ Report
          </button>
        </div>

        {/* Tab 1: Classrooms Grid */}
        {activeTab === 'classrooms' && (
          <div className="si-tab-pane">
            <div className="si-classrooms-grid">
              {classes.map(cls => (
                <div key={cls.id} className="si-class-card">
                  <div className="class-card-top">
                    <span className="class-students-pill">{cls.students} Enrolled Aspirants</span>
                    <span className="class-test-tag"><Calendar size={12} /> Next Test: {cls.nextTest}</span>
                  </div>

                  <h3 className="class-name">{cls.name}</h3>
                  <p className="class-subject">{cls.subject}</p>

                  <div className="class-progress-block">
                    <div className="cp-header">
                      <span>Syllabus Completion</span>
                      <strong>{cls.progress}%</strong>
                    </div>
                    <div className="cp-bar">
                      <div className="cp-fill" style={{ width: `${cls.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="class-card-footer">
                    <span className="class-top-scorer">🏆 Top: {cls.topScorer}</span>
                    <button className="class-manage-btn">Manage Class <ArrowRight size={14} /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Student Progress Table */}
        {activeTab === 'progress' && (
          <div className="si-tab-pane">
            <div className="si-students-table-card">
              <div className="table-header-row">
                <h3>APAAR Student Telemetry</h3>
                <span className="sync-badge">Live Synced with MeghRaj Cloud</span>
              </div>

              <div className="table-wrapper">
                <table className="si-table">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>APAAR ID</th>
                      <th>Videos Watched</th>
                      <th>Practice Accuracy</th>
                      <th>Latest Mock Score</th>
                      <th>Performance Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentsData.map(st => (
                      <tr key={st.id}>
                        <td><strong>{st.name}</strong></td>
                        <td><span className="apaar-code">{st.apaarId}</span></td>
                        <td>{st.videos} Modules</td>
                        <td><strong className="text-blue">{st.practice}</strong></td>
                        <td><strong className="text-green">{st.mockScore}</strong></td>
                        <td>
                          <span className={`status-pill ${st.status.toLowerCase().replace(' ', '-')}`}>
                            {st.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Assign Work */}
        {activeTab === 'assign' && (
          <div className="si-tab-pane">
            <div className="si-assign-card">
              <h3>Create Digital Homework / Mock Test Task</h3>
              <p>Select syllabus chapters from DIKSHA or ParikshaSetu vault to assign to all 45 students in Class 12-A.</p>
              <button className="si-create-task-btn">
                <PlusCircle size={16} /> Broadcast 25-Question Test to Class 12-A
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Export Reports */}
        {activeTab === 'reports' && (
          <div className="si-tab-pane">
            <div className="si-report-card">
              <h3>Download Official UDISE+ / CBSE Compliance Digest</h3>
              <p>Generates an official verified PDF/Excel summary formatted as per National Education Policy (NEP 2020) norms.</p>
              <button className="si-download-report-btn">
                <Download size={16} /> Download Verified School PDF Report
              </button>
            </div>
          </div>
        )}
      </main>

      <GIGWFooter />
    </div>
  );
};

export default SchoolIntegration;
