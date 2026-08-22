import React, { useState } from 'react';
import { 
  Users, Search, MessageCircle, UserPlus, Shield, MapPin, Globe, Clock, 
  Filter, Plus, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, Radio,
  Lock, Unlock, MessageSquare, Send, X, Flame
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './StudyGroups.css';

interface Group {
  id: string;
  name: string;
  exam: string;
  members: number;
  maxMembers: number;
  recentActivity: string;
  language: string;
  online: number;
  tags: string[];
  isPrivate?: boolean;
}

const mockMyGroups: Group[] = [
  { 
    id: '1', 
    name: 'SSC CGL 2026 Tier 1 Super-8', 
    exam: 'SSC CGL', 
    members: 6, 
    maxMembers: 8, 
    recentActivity: '2 mins ago (Amit sent Mock Test #4)', 
    language: 'Hindi & English', 
    online: 4,
    tags: ['Daily 50 MCQs', 'Speed Math', 'GK Quiz']
  },
  { 
    id: '2', 
    name: 'Quant & Advanced Algebra Masters', 
    exam: 'SSC / Banking', 
    members: 4, 
    maxMembers: 6, 
    recentActivity: '15 mins ago (Priya shared Geometry notes)', 
    language: 'English', 
    online: 2,
    tags: ['Geometry', 'Calculus', 'Shortcuts']
  },
];

const mockDiscover: Group[] = [
  { 
    id: '3', 
    name: 'UPSC CSE Daily Answer Writing Circle', 
    exam: 'UPSC CSE', 
    members: 8, 
    maxMembers: 10, 
    recentActivity: 'Just now (GS-2 Review live)', 
    language: 'English', 
    online: 6,
    tags: ['GS Paper 2', 'Peer Review', 'Editorial Notes']
  },
  { 
    id: '4', 
    name: 'IBPS / SBI PO Banking Awareness Hub', 
    exam: 'Banking Exams', 
    members: 7, 
    maxMembers: 10, 
    recentActivity: '8 mins ago', 
    language: 'Hindi', 
    online: 5,
    tags: ['Financial GA', 'Banking Terms', 'Budget 2026']
  },
  { 
    id: '5', 
    name: 'Railway RRB NTPC Super 30 Practice Batch', 
    exam: 'RRB NTPC', 
    members: 24, 
    maxMembers: 30, 
    recentActivity: '12 mins ago', 
    language: 'Hindi', 
    online: 14,
    tags: ['General Science', 'Railway PYQs']
  },
];

const mockForums = [
  { 
    id: '1', 
    title: 'Expected cutoff & safe attempt analysis for SSC CGL 2026 Tier 1?', 
    replies: 142, 
    lastReply: '5 mins ago by Rohit_AIR45', 
    exam: 'SSC CGL', 
    pinned: true,
    author: 'Admin / Verified Mentor'
  },
  { 
    id: '2', 
    title: 'How to structure Ethics (GS-4) Case Studies: 6-Step Framework', 
    replies: 88, 
    lastReply: '30 mins ago by Pooja_UPSC', 
    exam: 'UPSC CSE', 
    pinned: true,
    author: 'Pooja K. (Selected 2024)'
  },
  { 
    id: '3', 
    title: 'Best strategy for Banking Sectional Timing in Reasoning & DI?', 
    replies: 64, 
    lastReply: '1 hr ago by BankAspirant99', 
    exam: 'IBPS PO', 
    pinned: false,
    author: 'Kunal Verma'
  },
];

const mockBuddies = [
  { id: '1', name: 'Rahul Sharma', exam: 'SSC CGL Tier 1 & 2', location: 'Lucknow, UP (Hazratganj)', distance: '1.8 km away', streak: '18 Days', match: '95% Schedule Match' },
  { id: '2', name: 'Priya Singh', exam: 'UPSC CSE (Polity Optional)', location: 'Lucknow, UP (Gomti Nagar)', distance: '4.2 km away', streak: '24 Days', match: '88% Subject Match' },
  { id: '3', name: 'Aman Verma', exam: 'IBPS PO / SBI Clerk', location: 'Lucknow, UP (Aliganj)', distance: '3.1 km away', streak: '12 Days', match: '82% Schedule Match' },
];

export const StudyGroups: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'my_groups' | 'discover' | 'forums' | 'buddy'>('my_groups');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groupExam, setGroupExam] = useState('SSC CGL');
  const [maxMembers, setMaxMembers] = useState('8');

  return (
    <div className="sg-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Study Groups & Peer Hub', labelHi: 'अध्ययन समूह' }
        ]}
        title="Peer Study Circles & Community Hub"
        titleHi="राष्ट्रीय सहपाठी अध्ययन समूह एवं विमर्श मंच"
        description="Collaborate with serious aspirants, form focused 8-member study circles, solve peer doubts, and participate in moderated exam forums."
        descriptionHi="गंभीर अभ्यर्थियों के साथ अध्ययन समूह बनाएं, प्रश्न हल करें और विमर्श मंचों में भाग लें।"
        icon={<Users size={28} />}
        badge="AI-Moderated Safe Community"
        actions={
          <button 
            className="sg-hero-create-btn"
            onClick={() => setShowCreateModal(true)}
            aria-label="Create a new study group"
          >
            <Plus size={16} /> Create Study Circle
          </button>
        }
      />

      <main role="main" className="sg-workspace">
        {/* Top 3 Metric Stat Capsules */}
        <section className="sg-metrics-grid" aria-label="Community Telemetry">
          <div className="sg-metric-card">
            <span className="sg-m-lbl">My Active Study Circles</span>
            <div className="sg-m-val-row">
              <strong className="sg-m-num">{mockMyGroups.length}</strong>
              <span className="sg-m-sub">Enrolled</span>
            </div>
          </div>

          <div className="sg-metric-card">
            <span className="sg-m-lbl">Peers Studying Online Now</span>
            <div className="sg-m-val-row">
              <span className="online-live-dot"></span>
              <strong className="sg-m-num">184</strong>
              <span className="sg-m-sub">in Lucknow Zone</span>
            </div>
          </div>

          <div className="sg-metric-card">
            <span className="sg-m-lbl">Daily Peer Doubt Resolution Rate</span>
            <div className="sg-m-val-row">
              <strong className="sg-m-num text-green">96.4%</strong>
              <span className="sg-m-sub">Answered in &lt;15m</span>
            </div>
          </div>
        </section>

        {/* Tab Strip */}
        <nav className="sg-nav-tabs" role="tablist" aria-label="Study Group Sections">
          <button 
            className={`sg-tab ${activeTab === 'my_groups' ? 'active' : ''}`}
            onClick={() => setActiveTab('my_groups')}
            role="tab"
            aria-selected={activeTab === 'my_groups'}
          >
            <Users size={16} /> My Circles ({mockMyGroups.length})
          </button>
          <button 
            className={`sg-tab ${activeTab === 'discover' ? 'active' : ''}`}
            onClick={() => setActiveTab('discover')}
            role="tab"
            aria-selected={activeTab === 'discover'}
          >
            <Search size={16} /> Discover Circles ({mockDiscover.length})
          </button>
          <button 
            className={`sg-tab ${activeTab === 'forums' ? 'active' : ''}`}
            onClick={() => setActiveTab('forums')}
            role="tab"
            aria-selected={activeTab === 'forums'}
          >
            <MessageCircle size={16} /> Official Moderated Forums
          </button>
          <button 
            className={`sg-tab ${activeTab === 'buddy' ? 'active' : ''}`}
            onClick={() => setActiveTab('buddy')}
            role="tab"
            aria-selected={activeTab === 'buddy'}
          >
            <UserPlus size={16} /> Study Buddy Matcher
          </button>
        </nav>

        {/* Tab 1: My Circles */}
        {activeTab === 'my_groups' && (
          <div className="sg-tab-pane">
            <div className="sg-groups-grid">
              {mockMyGroups.map(grp => (
                <article key={grp.id} className="sg-group-card my-card">
                  <div className="sg-card-top">
                    <span className="sg-exam-tag">{grp.exam}</span>
                    <span className="sg-online-status">
                      <span className="online-live-dot"></span> {grp.online} Online Now
                    </span>
                  </div>

                  <h3 className="sg-group-name">{grp.name}</h3>

                  <div className="sg-tags-row">
                    {grp.tags.map(t => (
                      <span key={t} className="sg-tag-pill">{t}</span>
                    ))}
                  </div>

                  <div className="sg-members-bar">
                    <div className="sg-m-info">
                      <Users size={14} color="#0033A0" />
                      <span>{grp.members} / {grp.maxMembers} Aspirants</span>
                    </div>
                    <span className="sg-lang"><Globe size={13} /> {grp.language}</span>
                  </div>

                  <div className="sg-card-footer">
                    <span className="sg-activity"><Clock size={12} /> {grp.recentActivity}</span>
                    <button className="sg-enter-btn" aria-label={`Enter ${grp.name} Room`}>
                      Enter Study Room <ArrowRight size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Discover Circles */}
        {activeTab === 'discover' && (
          <div className="sg-tab-pane">
            <div className="sg-filter-alert">
              <Sparkles size={16} color="#FE6500" />
              <span>AI Recommended Study Circles matching your target exam (SSC CGL 2026) and active study hours (06:00 PM – 10:00 PM).</span>
            </div>

            <div className="sg-groups-grid">
              {mockDiscover.map(grp => (
                <article key={grp.id} className="sg-group-card">
                  <div className="sg-card-top">
                    <span className="sg-exam-tag">{grp.exam}</span>
                    <span className="sg-online-status">
                      <span className="online-live-dot"></span> {grp.online} Active
                    </span>
                  </div>

                  <h3 className="sg-group-name">{grp.name}</h3>

                  <div className="sg-tags-row">
                    {grp.tags.map(t => (
                      <span key={t} className="sg-tag-pill">{t}</span>
                    ))}
                  </div>

                  <div className="sg-members-bar">
                    <div className="sg-m-info">
                      <Users size={14} color="#0033A0" />
                      <span>{grp.members} / {grp.maxMembers} Aspirants</span>
                    </div>
                    <span className="sg-lang"><Globe size={13} /> {grp.language}</span>
                  </div>

                  <div className="sg-card-footer">
                    <span className="sg-activity"><Clock size={12} /> {grp.recentActivity}</span>
                    <button className="sg-join-btn" aria-label={`Join ${grp.name}`}>
                      Request to Join
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Moderated Forums */}
        {activeTab === 'forums' && (
          <div className="sg-tab-pane">
            <div className="sg-forums-list">
              {mockForums.map(forum => (
                <article key={forum.id} className={`sg-forum-item ${forum.pinned ? 'pinned' : ''}`}>
                  <div className="forum-left">
                    <div className="forum-badge-row">
                      {forum.pinned && <span className="pinned-chip">📌 Pinned Discussion</span>}
                      <span className="forum-exam-chip">{forum.exam}</span>
                    </div>
                    <h4 className="forum-thread-title">{forum.title}</h4>
                    <span className="forum-meta">Started by <strong>{forum.author}</strong> • {forum.lastReply}</span>
                  </div>

                  <div className="forum-right">
                    <div className="forum-replies-box">
                      <MessageSquare size={16} color="#0033A0" />
                      <strong>{forum.replies} Replies</strong>
                    </div>
                    <button className="forum-open-btn">View Thread</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Study Buddy Matcher */}
        {activeTab === 'buddy' && (
          <div className="sg-tab-pane">
            <div className="sg-buddy-grid">
              {mockBuddies.map(buddy => (
                <div key={buddy.id} className="sg-buddy-card">
                  <div className="buddy-card-top">
                    <div className="buddy-avatar-circle">{buddy.name.charAt(0)}</div>
                    <div className="buddy-info-main">
                      <h4 className="buddy-name">{buddy.name}</h4>
                      <span className="buddy-exam">{buddy.exam}</span>
                    </div>
                    <span className="buddy-match-pill">{buddy.match}</span>
                  </div>

                  <div className="buddy-details-block">
                    <p><MapPin size={13} /> {buddy.location} ({buddy.distance})</p>
                    <p><Flame size={13} color="#FE6500" /> Consistency Streak: <strong>{buddy.streak}</strong></p>
                  </div>

                  <button className="buddy-connect-btn">
                    <UserPlus size={14} /> Send Study Buddy Invite
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Modal: Create Study Group */}
      {showCreateModal && (
        <div className="sg-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="sg-modal-card">
            <div className="sg-modal-head">
              <h3 id="modal-title">Create New Sovereign Study Circle</h3>
              <button className="sg-close-btn" onClick={() => setShowCreateModal(false)} aria-label="Close modal">
                <X size={18} />
              </button>
            </div>

            <div className="sg-form-body">
              <div className="form-field">
                <label>Study Circle Name</label>
                <input 
                  type="text" 
                  value={groupName} 
                  onChange={(e) => setGroupName(e.target.value)} 
                  placeholder="e.g. SSC CGL 2026 Speed & Accuracy Circle" 
                />
              </div>

              <div className="form-field">
                <label>Target Competitive Exam</label>
                <select value={groupExam} onChange={(e) => setGroupExam(e.target.value)}>
                  <option>SSC CGL</option>
                  <option>UPSC Civil Services</option>
                  <option>IBPS / SBI PO</option>
                  <option>Railway RRB NTPC</option>
                </select>
              </div>

              <div className="form-field">
                <label>Maximum Circle Members (Strict Limit for Focus)</label>
                <select value={maxMembers} onChange={(e) => setMaxMembers(e.target.value)}>
                  <option value="6">6 Aspirants (Recommended - High Focus)</option>
                  <option value="8">8 Aspirants</option>
                  <option value="10">10 Aspirants</option>
                </select>
              </div>
            </div>

            <div className="sg-modal-actions">
              <button className="sg-btn-cancel" onClick={() => setShowCreateModal(false)}>Cancel</button>
              <button className="sg-btn-submit" onClick={() => setShowCreateModal(false)}>Create Circle</button>
            </div>
          </div>
        </div>
      )}

      <GIGWFooter />
    </div>
  );
};

export default StudyGroups;
