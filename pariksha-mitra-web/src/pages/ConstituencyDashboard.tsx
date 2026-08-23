import React, { useState } from 'react';
import { 
  Search, Users, Activity, PlayCircle, FileText, 
  Share2, Download, TrendingUp, MapPin, Award, Vote, 
  Building, CheckCircle2, ChevronRight, Sparkles 
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, 
  ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import './ConstituencyDashboard.css';

interface ConstituencyData {
  id: string;
  name: string;
  nameHi: string;
  state: string;
  district: string;
  mpName: string;
  mpParty: string;
  nationalRank: string;
  enrolledStudents: string;
  activeDau: string;
  videosWatched: string;
  mocksTaken: string;
  blocks: { name: string; active: number; score: number }[];
  trend: { day: string; active: number }[];
}

const CONSTITUENCIES_DB: Record<string, ConstituencyData> = {
  'Varanasi': {
    id: 'PC-UP-77',
    name: 'Varanasi',
    nameHi: 'वाराणसी',
    state: 'Uttar Pradesh',
    district: 'Varanasi District',
    mpName: 'Shri Narendra Modi',
    mpParty: 'BJP',
    nationalRank: '#1 of 543',
    enrolledStudents: '96,400',
    activeDau: '44,200',
    videosWatched: '4.8 Lakh',
    mocksTaken: '32,100',
    blocks: [
      { name: 'Kashi Urban Center', active: 18400, score: 88 },
      { name: 'Pindra Block', active: 14200, score: 82 },
      { name: 'Rohaniya Block', active: 12800, score: 79 },
      { name: 'Sevapuri Model Block', active: 11400, score: 85 },
      { name: 'Arajiline Block', active: 9800, score: 76 }
    ],
    trend: [
      { day: 'Day 1', active: 38200 },
      { day: 'Day 5', active: 39800 },
      { day: 'Day 10', active: 41200 },
      { day: 'Day 15', active: 42500 },
      { day: 'Day 20', active: 43800 },
      { day: 'Day 23', active: 44200 }
    ]
  },
  'Lucknow': {
    id: 'PC-UP-35',
    name: 'Lucknow',
    nameHi: 'लखनऊ',
    state: 'Uttar Pradesh',
    district: 'Lucknow District',
    mpName: 'Shri Rajnath Singh',
    mpParty: 'BJP',
    nationalRank: '#4 of 543',
    enrolledStudents: '88,200',
    activeDau: '39,400',
    videosWatched: '4.1 Lakh',
    mocksTaken: '28,400',
    blocks: [
      { name: 'Lucknow Central', active: 16200, score: 86 },
      { name: 'Bakshi Ka Talab', active: 11800, score: 80 },
      { name: 'Sarojini Nagar', active: 10400, score: 78 }
    ],
    trend: [
      { day: 'Day 1', active: 34000 },
      { day: 'Day 5', active: 36200 },
      { day: 'Day 10', active: 37800 },
      { day: 'Day 15', active: 38900 },
      { day: 'Day 20', active: 39100 },
      { day: 'Day 23', active: 39400 }
    ]
  },
  'Ladakh': {
    id: 'PC-LA-01',
    name: 'Ladakh',
    nameHi: 'लद्दाख',
    state: 'UT of Ladakh',
    district: 'Leh & Kargil',
    mpName: 'Shri Mohmad Haneefa',
    mpParty: 'Independent',
    nationalRank: '#82 of 543',
    enrolledStudents: '42,000',
    activeDau: '18,500',
    videosWatched: '1.4 Lakh',
    mocksTaken: '12,600',
    blocks: [
      { name: 'Leh Main Block', active: 8400, score: 82 },
      { name: 'Kargil Town Block', active: 6200, score: 79 },
      { name: 'Nubra Valley Block', active: 2400, score: 74 },
      { name: 'Dras / Zanskar Sub-Division', active: 1500, score: 72 }
    ],
    trend: [
      { day: 'Day 1', active: 14200 },
      { day: 'Day 5', active: 15800 },
      { day: 'Day 10', active: 16900 },
      { day: 'Day 15', active: 17800 },
      { day: 'Day 20', active: 18200 },
      { day: 'Day 23', active: 18500 }
    ]
  }
};

const ConstituencyDashboard: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('Varanasi');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const currentData = CONSTITUENCIES_DB[selectedKey] || CONSTITUENCIES_DB['Varanasi'];

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleSearchSelect = (key: string) => {
    setSelectedKey(key);
    setSearchQuery('');
  };

  return (
    <div className="constituency-mgmt-page">
      {/* 1. Top Header */}
      <div className="cd-top-header">
        <div className="cd-title-lockup">
          <div className="badge-row">
            <span className="loksabha-tag"><Vote size={12} /> LOK SABHA 543 SEATS RADAR</span>
            <span className="mp-card-tag">18th Lok Sabha Parliamentary Dashboard</span>
          </div>
          <h1>Parliamentary Constituency Education Radar</h1>
          <p>Constituency-wise academic participation, block-level engagement, and Member of Parliament report card generation.</p>
        </div>

        <div className="cd-header-actions">
          <button className="btn-mp-report" onClick={() => triggerToast(`Generating Official MP Report Card for ${currentData.name} Constituency...`)}>
            <Download size={14} /> Download MP Report Card (PDF)
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="cd-toast-banner">
          <CheckCircle2 size={16} color="#15803D" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. Constituency Switcher Bar */}
      <div className="constituency-search-ribbon">
        <div className="search-box-wrap">
          <Search size={15} color="#64748B" />
          <input 
            type="text" 
            placeholder="Search 543 Lok Sabha Constituencies (e.g. Varanasi, Lucknow, Ladakh)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="quick-seats-pills">
          {Object.keys(CONSTITUENCIES_DB).map(seat => (
            <button 
              key={seat}
              className={`seat-pill ${selectedKey === seat ? 'active' : ''}`}
              onClick={() => handleSearchSelect(seat)}
            >
              <Vote size={12} /> {seat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Selected MP Spotlight Banner */}
      <div className="mp-spotlight-card">
        <div className="mp-main-details">
          <div className="mp-avatar-seal">
            <Vote size={28} color="#002B7F" />
          </div>
          <div className="mp-text-block">
            <div className="mp-title-row">
              <h2>{currentData.name} ({currentData.nameHi})</h2>
              <span className="mp-seat-id">{currentData.id}</span>
            </div>
            <p className="mp-rep-name">
              Hon'ble MP: <strong>{currentData.mpName}</strong> ({currentData.mpParty}) • {currentData.state}
            </p>
          </div>
        </div>

        <div className="mp-rank-badge-box">
          <Award size={24} color="#C2410C" />
          <div>
            <strong className="rank-number">{currentData.nationalRank}</strong>
            <span>All-India Education Rank</span>
          </div>
        </div>
      </div>

      {/* 4. 4-Column KPI Grid */}
      <div className="cd-kpi-grid">
        <div className="cd-kpi-card border-blue">
          <div className="kpi-icon bg-blue"><Users size={20} color="#002B7F" /></div>
          <div>
            <span className="kpi-label">Registered Aspirants</span>
            <h3>{currentData.enrolledStudents}</h3>
            <p className="text-blue">Students in {currentData.name}</p>
          </div>
        </div>

        <div className="cd-kpi-card border-saffron">
          <div className="kpi-icon bg-saffron"><Activity size={20} color="#C2410C" /></div>
          <div>
            <span className="kpi-label">Daily Active Learners</span>
            <h3>{currentData.activeDau}</h3>
            <p className="text-saffron">45.8% Daily Engagement</p>
          </div>
        </div>

        <div className="cd-kpi-card border-green">
          <div className="kpi-icon bg-green"><PlayCircle size={20} color="#15803D" /></div>
          <div>
            <span className="kpi-label">Video Hours Watched</span>
            <h3>{currentData.videosWatched}</h3>
            <p className="text-green">Free PM e-VIDYA Stream</p>
          </div>
        </div>

        <div className="cd-kpi-card border-purple">
          <div className="kpi-icon bg-purple"><FileText size={20} color="#7E22CE" /></div>
          <div>
            <span className="kpi-label">Mocks Completed</span>
            <h3>{currentData.mocksTaken}</h3>
            <p className="text-purple">NTA Pattern CBT Tests</p>
          </div>
        </div>
      </div>

      {/* 5. Main Workspace: Trend Chart + Blocks Table */}
      <div className="cd-workspace-grid">
        {/* Engagement Trend Chart */}
        <div className="cd-card">
          <div className="card-header-flex">
            <div>
              <h3>30-Day Student Engagement Trend</h3>
              <p>Daily active study sessions logged in {currentData.name}</p>
            </div>
            <span className="badge-live">Live Telemetry</span>
          </div>

          <div className="chart-container" style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={currentData.trend} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#64748B' }} />
                <YAxis tick={{ fontSize: 11, fill: '#64748B' }} />
                <RechartsTooltip formatter={(val: any) => [`${Number(val).toLocaleString()} Daily Learners`, 'Active Sessions']} />
                <Line type="monotone" dataKey="active" stroke="#002B7F" strokeWidth={3} dot={{ r: 4, fill: '#FE6500' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Block-wise Leaderboard Table */}
        <div className="cd-card">
          <div className="card-header-flex">
            <div>
              <h3>Block &amp; Panchayat Breakdown</h3>
              <p>Performance benchmarks across constituency sub-divisions</p>
            </div>
          </div>

          <table className="cd-block-table">
            <thead>
              <tr>
                <th>Block / Panchayat</th>
                <th>Active Learners</th>
                <th>Avg Mock Score</th>
              </tr>
            </thead>
            <tbody>
              {currentData.blocks.map(b => (
                <tr key={b.name}>
                  <td><strong>{b.name}</strong></td>
                  <td>{b.active.toLocaleString()}</td>
                  <td>
                    <span className={`score-badge ${b.score >= 80 ? 'high' : 'medium'}`}>
                      {b.score}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConstituencyDashboard;
