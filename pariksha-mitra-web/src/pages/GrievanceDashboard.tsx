import React, { useState } from 'react';
import { 
  AlertCircle, Clock, CheckCircle2, Ticket, Search, Filter, 
  Download, Eye, Check, X, ShieldAlert, ArrowUpRight, MessageSquare, 
  Building, User, Phone, MapPin, Sparkles, Send, ShieldCheck, RefreshCw
} from 'lucide-react';
import './GrievanceDashboard.css';

interface GrievanceTicket {
  id: string;
  student: string;
  phone: string;
  state: string;
  district: string;
  exam: string;
  category: 'Mock Test Error' | 'OTP / Login' | 'Video Playback' | 'Content / Doubt' | 'Mentorship';
  issue: string;
  description: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Escalated';
  priority: 'High' | 'Medium' | 'Low';
  created: string;
  slaDeadline: string;
  assignedOfficer: string;
}

const initialTickets: GrievanceTicket[] = [
  { 
    id: 'CPGRAMS-8921', 
    student: 'Ramesh Kumar', 
    phone: '+91 98765 43210',
    state: 'Uttar Pradesh', 
    district: 'Balrampur (Aspirational)', 
    exam: 'UPSC CSE 2026', 
    category: 'Mock Test Error', 
    issue: 'Unable to submit All-India Mock Test #14 due to 2G connection timeout', 
    description: 'Student attempted NTA pattern CBT test from village in Balrampur. Responses were cached locally on device but cloud sync failed at submission.',
    status: 'Open', 
    priority: 'High', 
    created: '2 hrs ago',
    slaDeadline: '4 hrs remaining',
    assignedOfficer: 'NIC Support Node (Lucknow)'
  },
  { 
    id: 'CPGRAMS-8920', 
    student: 'Priya Sharma', 
    phone: '+91 94123 56789',
    state: 'Bihar', 
    district: 'Gaya (Aspirational)', 
    exam: 'SSC CGL', 
    category: 'OTP / Login', 
    issue: 'Aadhaar / Mobile OTP not received for registration on low-signal area', 
    description: 'Carrier BSNL delay in receiving SMS OTP. Requested instant WhatsApp fallback OTP or Digilocker verification.',
    status: 'In Progress', 
    priority: 'Medium', 
    created: '4 hrs ago',
    slaDeadline: '8 hrs remaining',
    assignedOfficer: 'MeghRaj Auth Team'
  },
  { 
    id: 'CPGRAMS-8919', 
    student: 'Amit Roy', 
    phone: '+91 97890 12345',
    state: 'Maharashtra', 
    district: 'Gadchiroli (Aspirational)', 
    exam: 'Banking PO (IBPS)', 
    category: 'Video Playback', 
    issue: 'Offline encrypted video pack corrupt download at 80%', 
    description: 'Downloaded 10 hours offline module for General Studies. Resuming download after power outage caused packet mismatch.',
    status: 'Resolved', 
    priority: 'Low', 
    created: '1 day ago',
    slaDeadline: 'Resolved within SLA (2.1 hrs)',
    assignedOfficer: 'PM e-VIDYA CDN Desk'
  },
  { 
    id: 'CPGRAMS-8918', 
    student: 'Sneha Patel', 
    phone: '+91 93456 78901',
    state: 'Gujarat', 
    district: 'Dahod', 
    exam: 'NEET UG 2026', 
    category: 'Content / Doubt', 
    issue: 'Discrepancy in NCERT Biology Chapter 8 diagram explanation in Gujarati translation', 
    description: 'Translation ambiguity flagged in Cellular Respiration diagram. AI tutor flagged it for subject expert verification.',
    status: 'Open', 
    priority: 'Medium', 
    created: '5 hrs ago',
    slaDeadline: '12 hrs remaining',
    assignedOfficer: 'NCERT Review Board'
  },
  { 
    id: 'CPGRAMS-8917', 
    student: 'Mohammed Farooq', 
    phone: '+91 91234 56780',
    state: 'UT of Ladakh', 
    district: 'Kargil', 
    exam: 'Defence NDA', 
    category: 'Mentorship', 
    issue: 'Live 1-on-1 audio stuttering on VSAT satellite terminal in Dras', 
    description: 'High latency jitter on extreme weather satellite link during topper mentorship session.',
    status: 'Escalated', 
    priority: 'High', 
    created: '6 hrs ago',
    slaDeadline: 'Urgent SLA (1 hr remaining)',
    assignedOfficer: 'State Nodal Officer (Leh)'
  }
];

const GrievanceDashboard: React.FC = () => {
  const [tickets, setTickets] = useState<GrievanceTicket[]>(initialTickets);
  const [activeTab, setActiveTab] = useState<'All' | 'Open' | 'In Progress' | 'Resolved' | 'Escalated'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('All');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  
  // Modal State
  const [selectedTicket, setSelectedTicket] = useState<GrievanceTicket | null>(null);
  const [resolutionNote, setResolutionNote] = useState('');
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);

  // Filtered Tickets
  const filteredTickets = tickets.filter(t => {
    const matchesTab = activeTab === 'All' || t.status === activeTab;
    const matchesPriority = priorityFilter === 'All' || t.priority === priorityFilter;
    const matchesCategory = categoryFilter === 'All' || t.category === categoryFilter;
    const matchesSearch = 
      t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.issue.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTab && matchesPriority && matchesCategory && matchesSearch;
  });

  const handleResolveTicket = (ticketId: string) => {
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: 'Resolved', slaDeadline: 'Resolved Just Now' } : t));
    setActionSuccessMessage(`Ticket ${ticketId} successfully marked as RESOLVED and student notified via SMS/WhatsApp.`);
    setTimeout(() => {
      setSelectedTicket(null);
      setActionSuccessMessage(null);
      setResolutionNote('');
    }, 2000);
  };

  const handleEscalateTicket = (ticketId: string) => {
    setTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: 'Escalated' } : t));
    setActionSuccessMessage(`Ticket ${ticketId} ESCALATED to State Nodal Officer & Joint Secretary desk.`);
    setTimeout(() => {
      setSelectedTicket(null);
      setActionSuccessMessage(null);
    }, 2000);
  };

  return (
    <div className="grievance-mgmt-page">
      {/* 1. Header Banner */}
      <div className="grievance-top-header">
        <div className="title-lockup">
          <div className="badge-row">
            <span className="cpgrams-tag"><ShieldAlert size={12} /> CPGRAMS INTEGRATED</span>
            <span className="citizen-charter-tag">Citizen Charter: 24-Hour Redressal SLA</span>
          </div>
          <h1>Student Grievance Redressal & Support Command</h1>
          <p>Centralized National Grievance Monitoring for 42+ Lakh Aspirants • NITI Aspirational Districts Focus</p>
        </div>

        <div className="header-actions">
          <button className="btn-export-reports" onClick={() => alert('Downloading CPGRAMS Monthly Grievance Digest (PDF)...')}>
            <Download size={14} /> Export CPGRAMS Audit Digest (PDF)
          </button>
        </div>
      </div>

      {/* 2. 4-Column Horizontal KPI Metric Cards */}
      <div className="grievance-kpi-grid">
        <div className="g-kpi-card border-red">
          <div className="kpi-icon-square bg-red-soft">
            <AlertCircle size={22} color="#DC2626" />
          </div>
          <div className="kpi-metric-body">
            <span className="kpi-title">Open Grievances</span>
            <div className="kpi-val-row">
              <h3>234</h3>
              <span className="kpi-micro-badge text-red">+12 today</span>
            </div>
            <p className="kpi-sub">87% from Aspirational Districts</p>
          </div>
        </div>

        <div className="g-kpi-card border-green">
          <div className="kpi-icon-square bg-green-soft">
            <CheckCircle2 size={22} color="#15803D" />
          </div>
          <div className="kpi-metric-body">
            <span className="kpi-title">Resolved Today</span>
            <div className="kpi-val-row">
              <h3>45</h3>
              <span className="kpi-micro-badge text-green">98.2% Satisfaction</span>
            </div>
            <p className="kpi-sub">Avg feedback score: 4.8 / 5.0</p>
          </div>
        </div>

        <div className="g-kpi-card border-blue">
          <div className="kpi-icon-square bg-blue-soft">
            <Clock size={22} color="#002B7F" />
          </div>
          <div className="kpi-metric-body">
            <span className="kpi-title">Avg Resolution Time</span>
            <div className="kpi-val-row">
              <h3>4.2 hrs</h3>
              <span className="kpi-micro-badge text-blue">Target &lt; 6 hrs</span>
            </div>
            <p className="kpi-sub">Fastest: 18 mins (Auth resets)</p>
          </div>
        </div>

        <div className="g-kpi-card border-purple">
          <div className="kpi-icon-square bg-purple-soft">
            <ShieldCheck size={22} color="#7E22CE" />
          </div>
          <div className="kpi-metric-body">
            <span className="kpi-title">SLA Compliance Rate</span>
            <div className="kpi-val-row">
              <h3>96.4%</h3>
              <span className="kpi-micro-badge text-purple">Top Tier</span>
            </div>
            <p className="kpi-sub">Ministry NEP 2020 Benchmark Met</p>
          </div>
        </div>
      </div>

      {/* 3. Main Ticket Workspace Card */}
      <div className="grievance-main-card">
        {/* Filter Controls Bar */}
        <div className="table-controls-bar">
          {/* Status Tabs */}
          <div className="status-tabs-list">
            {(['All', 'Open', 'In Progress', 'Resolved', 'Escalated'] as const).map(tab => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                <span className="tab-counter">
                  {tab === 'All' ? tickets.length : tickets.filter(t => t.status === tab).length}
                </span>
              </button>
            ))}
          </div>

          {/* Search and Dropdowns */}
          <div className="filters-right-cluster">
            <div className="search-input-box">
              <Search size={15} color="#64748B" />
              <input 
                type="text" 
                placeholder="Search ticket, student, district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-select-box">
              <Filter size={13} color="#64748B" />
              <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
                <option value="All">Priority: All</option>
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>

            <div className="filter-select-box">
              <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="All">Category: All</option>
                <option value="Mock Test Error">Mock Test Error</option>
                <option value="OTP / Login">OTP / Login</option>
                <option value="Video Playback">Video Playback</option>
                <option value="Content / Doubt">Content / Doubt</option>
                <option value="Mentorship">Mentorship</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tickets Table */}
        <div className="table-responsive-container">
          <table className="cpgrams-official-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Student &amp; Region</th>
                <th>Category &amp; Exam</th>
                <th>Issue Summary</th>
                <th>Priority</th>
                <th>Status</th>
                <th>SLA Countdown</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map(t => (
                <tr key={t.id} className={`ticket-row-status-${t.status.toLowerCase().replace(' ', '-')}`}>
                  <td>
                    <div className="ticket-id-badge">
                      <strong>{t.id}</strong>
                      <span>{t.created}</span>
                    </div>
                  </td>
                  <td>
                    <div className="student-cell">
                      <span className="s-name">{t.student}</span>
                      <span className="s-loc"><MapPin size={11} /> {t.district}, {t.state}</span>
                    </div>
                  </td>
                  <td>
                    <div className="category-cell">
                      <span className="cat-tag">{t.category}</span>
                      <span className="exam-sub">{t.exam}</span>
                    </div>
                  </td>
                  <td>
                    <div className="issue-cell">
                      <p className="issue-text" title={t.issue}>{t.issue}</p>
                    </div>
                  </td>
                  <td>
                    <span className={`priority-pill ${t.priority.toLowerCase()}`}>
                      {t.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`status-pill ${t.status.toLowerCase().replace(' ', '-')}`}>
                      ● {t.status}
                    </span>
                  </td>
                  <td>
                    <span className="sla-countdown-text">
                      <Clock size={12} /> {t.slaDeadline}
                    </span>
                  </td>
                  <td>
                    <button className="btn-review-ticket" onClick={() => setSelectedTicket(t)}>
                      <Eye size={13} /> Review
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Interactive Review & Resolution Modal */}
      {selectedTicket && (
        <div className="ticket-modal-backdrop" onClick={() => setSelectedTicket(null)}>
          <div className="ticket-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="m-title-row">
                <span className="m-tkt-id">{selectedTicket.id}</span>
                <span className={`priority-pill ${selectedTicket.priority.toLowerCase()}`}>
                  {selectedTicket.priority} Priority
                </span>
                <span className={`status-pill ${selectedTicket.status.toLowerCase().replace(' ', '-')}`}>
                  {selectedTicket.status}
                </span>
              </div>
              <button className="btn-close-modal" onClick={() => setSelectedTicket(null)}>
                <X size={18} />
              </button>
            </div>

            {actionSuccessMessage && (
              <div className="action-success-banner">
                <CheckCircle2 size={16} color="#15803D" />
                <span>{actionSuccessMessage}</span>
              </div>
            )}

            <div className="modal-body-grid">
              {/* Left Details */}
              <div className="modal-left-details">
                <div className="detail-section">
                  <label>Aspirant Information</label>
                  <div className="detail-box">
                    <div className="d-row">
                      <User size={14} color="#002B7F" />
                      <strong>{selectedTicket.student}</strong>
                    </div>
                    <div className="d-row">
                      <Phone size={14} color="#64748B" />
                      <span>{selectedTicket.phone}</span>
                    </div>
                    <div className="d-row">
                      <MapPin size={14} color="#64748B" />
                      <span>{selectedTicket.district}, {selectedTicket.state}</span>
                    </div>
                  </div>
                </div>

                <div className="detail-section">
                  <label>Issue Subject</label>
                  <p className="detail-issue-title">{selectedTicket.issue}</p>
                </div>

                <div className="detail-section">
                  <label>Diagnostic Logs &amp; Telemetry Details</label>
                  <div className="telemetry-box">
                    <p>{selectedTicket.description}</p>
                    <div className="telemetry-meta">
                      <span>Assigned: {selectedTicket.assignedOfficer}</span>
                      <span>Target Exam: {selectedTicket.exam}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Action Desk */}
              <div className="modal-right-actions">
                <label>Official Resolution Notes (CPGRAMS Audit Record)</label>
                <textarea 
                  rows={4}
                  placeholder="Enter official resolution steps, cache-clear instructions, or nodal dispatch remarks..."
                  value={resolutionNote}
                  onChange={(e) => setResolutionNote(e.target.value)}
                  className="resolution-textarea"
                />

                <div className="modal-actions-cta">
                  <button 
                    className="btn-resolve-cpgrams"
                    onClick={() => handleResolveTicket(selectedTicket.id)}
                  >
                    <CheckCircle2 size={16} /> Resolve Grievance &amp; Notify Student
                  </button>

                  <button 
                    className="btn-escalate-nodal"
                    onClick={() => handleEscalateTicket(selectedTicket.id)}
                  >
                    <ShieldAlert size={16} /> Escalate to State Nodal Officer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GrievanceDashboard;
