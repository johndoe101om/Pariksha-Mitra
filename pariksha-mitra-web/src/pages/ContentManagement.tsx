import React, { useState } from 'react';
import { 
  UploadCloud, CheckCircle2, XCircle, Clock, Video, FileText, 
  Search, Filter, BookOpen, Sparkles, ShieldCheck, Eye, Plus, 
  Trash2, AlertTriangle, Layers, Play, Check 
} from 'lucide-react';
import './ContentManagement.css';

interface ContentItem {
  id: string;
  title: string;
  subject: string;
  exam: string;
  teacher: string;
  type: 'Video Lecture' | 'NCERT PDF' | 'Mock Question Bank' | 'Practice Notes';
  duration: string;
  quality: '4K Ultra-HD' | '1080p' | '720p (2G Optimized)';
  status: 'Pending Review' | 'Approved & Live' | 'Revision Requested';
  uploadedDate: string;
  language: string;
}

const initialContent: ContentItem[] = [
  {
    id: 'CNT-901',
    title: 'Indian Polity: Basic Structure Doctrine & Kesavananda Bharati Landmark Case',
    subject: 'Constitutional Law',
    exam: 'UPSC CSE',
    teacher: 'Dr. R.K. Sharma, Ex-IRS',
    type: 'Video Lecture',
    duration: '48 mins',
    quality: '720p (2G Optimized)',
    status: 'Pending Review',
    uploadedDate: '24 mins ago',
    language: 'Bilingual (Hindi + English)'
  },
  {
    id: 'CNT-902',
    title: 'Quantitative Aptitude: Advanced Time, Speed & Distance Shortcut Mastery',
    subject: 'Mathematics',
    exam: 'SSC CGL',
    teacher: 'Amit Verma, Quantitative Expert',
    type: 'Video Lecture',
    duration: '35 mins',
    quality: '1080p',
    status: 'Pending Review',
    uploadedDate: '2 hrs ago',
    language: 'Hindi'
  },
  {
    id: 'CNT-903',
    title: 'NCERT Class 11 Chemistry: Organic Reaction Mechanisms & Hand-Written Notes',
    subject: 'Chemistry',
    exam: 'NEET UG',
    teacher: 'Prof. Sunita Rao',
    type: 'NCERT PDF',
    duration: '24 Pages',
    quality: '1080p',
    status: 'Approved & Live',
    uploadedDate: 'Yesterday',
    language: 'English'
  },
  {
    id: 'CNT-904',
    title: 'Banking Awareness: RBI Monetary Policy & Repo Rate Transmission 2026',
    subject: 'Financial Awareness',
    exam: 'Banking (IBPS PO)',
    teacher: 'P.K. Mohanty, Ex-Banker',
    type: 'Practice Notes',
    duration: '18 Pages',
    quality: '1080p',
    status: 'Approved & Live',
    uploadedDate: '2 days ago',
    language: 'Bilingual'
  }
];

const ContentManagement: React.FC = () => {
  const [items, setItems] = useState<ContentItem[]>(initialContent);
  const [activeTab, setActiveTab] = useState<'review' | 'library' | 'upload'>('review');
  const [searchQuery, setSearchQuery] = useState('');
  const [examFilter, setExamFilter] = useState('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Upload Form State
  const [newTitle, setNewTitle] = useState('');
  const [newExam, setNewExam] = useState('UPSC CSE');
  const [newSubject, setNewSubject] = useState('');
  const [newTeacher, setNewTeacher] = useState('');
  const [newType, setNewType] = useState<'Video Lecture' | 'NCERT PDF' | 'Mock Question Bank' | 'Practice Notes'>('Video Lecture');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleApprove = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, status: 'Approved & Live' } : item));
    showToast(`Content item ${id} approved & published to national DIKSHA/PM e-VIDYA stream.`);
  };

  const handleReject = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, status: 'Revision Requested' } : item));
    showToast(`Content item ${id} marked for educator revision.`);
  };

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const newItem: ContentItem = {
      id: `CNT-${Math.floor(1000 + Math.random() * 9000)}`,
      title: newTitle,
      subject: newSubject || 'General Studies',
      exam: newExam,
      teacher: newTeacher || 'Ministry Verified Faculty',
      type: newType,
      duration: '42 mins',
      quality: '720p (2G Optimized)',
      status: 'Pending Review',
      uploadedDate: 'Just Now',
      language: 'Bilingual'
    };
    setItems([newItem, ...items]);
    setNewTitle('');
    setNewSubject('');
    setNewTeacher('');
    setActiveTab('review');
    showToast('New educational resource uploaded to National Moderation Queue.');
  };

  const filteredItems = items.filter(item => {
    const matchesTab = 
      activeTab === 'review' ? item.status === 'Pending Review' :
      activeTab === 'library' ? item.status === 'Approved & Live' : true;
    const matchesExam = examFilter === 'All' || item.exam === examFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesExam && matchesSearch;
  });

  return (
    <div className="content-mgmt-page">
      {/* 1. Header Banner */}
      <div className="cm-top-header">
        <div className="cm-title-lockup">
          <div className="badge-row">
            <span className="curriculum-tag"><BookOpen size={12} /> NEP 2020 DIGITAL CURRICULUM</span>
            <span className="pm-evidya-tag">PM e-VIDYA &amp; DIKSHA Syndication</span>
          </div>
          <h1>Content Moderation &amp; Curriculum Control Center</h1>
          <p>Review, approve, and syndicate video lectures and notes for national distribution across 28 States &amp; 8 UTs.</p>
        </div>

        <div className="cm-header-actions">
          <button className="btn-upload-new" onClick={() => setActiveTab('upload')}>
            <Plus size={14} /> Upload National Resource
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="cm-toast-banner">
          <CheckCircle2 size={16} color="#15803D" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. 4-Column KPI Metric Cards */}
      <div className="cm-kpi-grid">
        <div className="cm-kpi-card border-blue">
          <div className="kpi-icon-wrap bg-blue"><Video size={20} color="#002B7F" /></div>
          <div>
            <span className="kpi-label">Total Video Hours</span>
            <h3>2,450 hrs</h3>
            <p>100% Free &amp; Ad-Free</p>
          </div>
        </div>

        <div className="cm-kpi-card border-saffron">
          <div className="kpi-icon-wrap bg-saffron"><Clock size={20} color="#C2410C" /></div>
          <div>
            <span className="kpi-label">Pending Review</span>
            <h3>{items.filter(i => i.status === 'Pending Review').length} Modules</h3>
            <p>Avg turnaround: 2.4 hrs</p>
          </div>
        </div>

        <div className="cm-kpi-card border-green">
          <div className="kpi-icon-wrap bg-green"><CheckCircle2 size={20} color="#15803D" /></div>
          <div>
            <span className="kpi-label">Approved Resources</span>
            <h3>1,420 Items</h3>
            <p>Live across PM e-VIDYA</p>
          </div>
        </div>

        <div className="cm-kpi-card border-purple">
          <div className="kpi-icon-wrap bg-purple"><ShieldCheck size={20} color="#7E22CE" /></div>
          <div>
            <span className="kpi-label">Quality Score</span>
            <h3>99.6%</h3>
            <p>NCERT &amp; NTA Standard</p>
          </div>
        </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="cm-tabs-bar">
        <div className="cm-tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'review' ? 'active' : ''}`}
            onClick={() => setActiveTab('review')}
          >
            Review Queue
            <span className="counter-pill">{items.filter(i => i.status === 'Pending Review').length}</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setActiveTab('library')}
          >
            Curriculum Library
            <span className="counter-pill">{items.filter(i => i.status === 'Approved & Live').length}</span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            <UploadCloud size={14} /> Upload Resource
          </button>
        </div>

        {activeTab !== 'upload' && (
          <div className="cm-filters-cluster">
            <div className="cm-search-box">
              <Search size={14} color="#64748B" />
              <input 
                type="text" 
                placeholder="Search topic or educator..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select value={examFilter} onChange={(e) => setExamFilter(e.target.value)} className="cm-exam-select">
              <option value="All">All Exams</option>
              <option value="UPSC CSE">UPSC CSE</option>
              <option value="SSC CGL">SSC CGL</option>
              <option value="NEET UG">NEET UG</option>
              <option value="Banking (IBPS PO)">Banking</option>
            </select>
          </div>
        )}
      </div>

      {/* 4. Tab Content */}
      <div className="cm-content-area">
        {activeTab !== 'upload' ? (
          <div className="cm-cards-grid">
            {filteredItems.map(item => (
              <div key={item.id} className="resource-card">
                <div className="resource-card-header">
                  <div className="resource-thumb-box">
                    <Video size={24} color="#002B7F" />
                    <span className="quality-pill">{item.quality}</span>
                  </div>
                  <div className="resource-meta-top">
                    <span className="exam-badge-tag">{item.exam}</span>
                    <span className="date-text">{item.uploadedDate}</span>
                  </div>
                </div>

                <div className="resource-body">
                  <h4>{item.title}</h4>
                  <div className="meta-lines">
                    <span><strong>Educator:</strong> {item.teacher}</span>
                    <span><strong>Subject:</strong> {item.subject} • {item.duration}</span>
                    <span><strong>Language:</strong> {item.language}</span>
                  </div>
                </div>

                <div className="resource-actions">
                  {item.status === 'Pending Review' ? (
                    <>
                      <button className="btn-action-approve" onClick={() => handleApprove(item.id)}>
                        <CheckCircle2 size={14} /> Approve &amp; Push
                      </button>
                      <button className="btn-action-reject" onClick={() => handleReject(item.id)}>
                        <XCircle size={14} /> Request Revision
                      </button>
                    </>
                  ) : (
                    <div className="live-status-bar">
                      <Check size={14} color="#15803D" />
                      <span>Live on PM e-VIDYA &amp; Web App</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="upload-resource-card">
            <h3>Upload Educational Resource to National Repository</h3>
            <p>Authorized upload for PM e-VIDYA, SWAYAM Prabha &amp; ParikshaSetu live streaming channels.</p>
            
            <form onSubmit={handleUploadSubmit} className="upload-form-grid">
              <div className="upload-input-group full-width">
                <label>Resource Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Modern Indian History Ch. 4: Revolt of 1857 Comprehensive Analysis"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>

              <div className="upload-input-group">
                <label>Target Competitive Exam</label>
                <select value={newExam} onChange={(e) => setNewExam(e.target.value)}>
                  <option value="UPSC CSE">UPSC Civil Services (CSE)</option>
                  <option value="SSC CGL">SSC CGL / CHSL</option>
                  <option value="Banking (IBPS PO)">Banking (IBPS / SBI PO)</option>
                  <option value="Railway RRB">Railway RRB NTPC</option>
                  <option value="NEET UG">NEET UG</option>
                  <option value="JEE Main">JEE Main</option>
                </select>
              </div>

              <div className="upload-input-group">
                <label>Subject / Topic Domain</label>
                <input 
                  type="text" 
                  placeholder="e.g. General Studies Paper 1 (History)"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                />
              </div>

              <div className="upload-input-group">
                <label>Faculty / Resource Person</label>
                <input 
                  type="text" 
                  placeholder="e.g. Dr. K.S. Rathore (Ministry Empaneled)"
                  value={newTeacher}
                  onChange={(e) => setNewTeacher(e.target.value)}
                />
              </div>

              <div className="upload-input-group">
                <label>Resource Type</label>
                <select value={newType} onChange={(e) => setNewType(e.target.value as any)}>
                  <option value="Video Lecture">High-Definition Video Lecture</option>
                  <option value="NCERT PDF">Official NCERT Study PDF</option>
                  <option value="Mock Question Bank">NTA CBT Question Bank</option>
                  <option value="Practice Notes">Curated Practice Notes</option>
                </select>
              </div>

              <div className="dropzone-box full-width">
                <UploadCloud size={36} color="#002B7F" />
                <p>Drag &amp; drop video files (MP4, MKV) or curriculum PDFs here</p>
                <span>MeghRaj Edge Transcoding to 720p / 480p / 2G Data Saver supported automatically</span>
              </div>

              <div className="form-submit-row full-width">
                <button type="submit" className="btn-submit-upload">
                  <CheckCircle2 size={16} /> Publish to Moderation Queue
                </button>
                <button type="button" className="btn-cancel-upload" onClick={() => setActiveTab('review')}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;
