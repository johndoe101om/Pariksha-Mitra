import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  AreaChart, Area, LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { 
  Download, Filter, Map, ChevronRight, Users, Activity, Award, 
  TrendingUp, WifiOff, FileText, CheckCircle2, AlertTriangle, Building,
  Search, ArrowLeft, ArrowUpRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './StateAnalytics.css';

interface DistrictInfo {
  name: string;
  category: 'Aspirational' | 'Tier-1' | 'Tier-2' | 'Tribal/Hilly';
  users: number;
  activeDau: number;
  avgScore: number;
  lowBandwidthPct: number;
  grievanceResolved: number;
}

interface StateDataModel {
  name: string;
  code: string;
  totalAspirants: string;
  dau: string;
  femaleRatio: string;
  aspirationalCoverage: string;
  topDistrict: string;
  avgScore: number;
  districts: DistrictInfo[];
  demographics: { cohort: string; male: number; female: number; rural: number }[];
  benchmark: { month: string; state: number; national: number }[];
}

const STATES_DATABASE: Record<string, StateDataModel> = {
  'Uttar Pradesh': {
    name: 'Uttar Pradesh',
    code: 'UP',
    totalAspirants: '9,42,100',
    dau: '4,10,000 (43.5%)',
    femaleRatio: '46.8%',
    aspirationalCoverage: '94% (8/8 Dist)',
    topDistrict: 'Lucknow',
    avgScore: 74.2,
    districts: [
      { name: 'Lucknow', category: 'Tier-1', users: 142000, activeDau: 68000, avgScore: 78.4, lowBandwidthPct: 18, grievanceResolved: 99.2 },
      { name: 'Prayagraj', category: 'Tier-1', users: 128000, activeDau: 62000, avgScore: 77.1, lowBandwidthPct: 22, grievanceResolved: 98.6 },
      { name: 'Varanasi', category: 'Tier-2', users: 96000, activeDau: 44000, avgScore: 74.5, lowBandwidthPct: 34, grievanceResolved: 97.4 },
      { name: 'Kanpur Nagar', category: 'Tier-1', users: 91000, activeDau: 41000, avgScore: 73.8, lowBandwidthPct: 26, grievanceResolved: 98.1 },
      { name: 'Gorakhpur', category: 'Tier-2', users: 84000, activeDau: 37000, avgScore: 72.0, lowBandwidthPct: 42, grievanceResolved: 96.8 },
      { name: 'Balrampur', category: 'Aspirational', users: 48000, activeDau: 21000, avgScore: 68.4, lowBandwidthPct: 68, grievanceResolved: 95.2 },
      { name: 'Chitrakoot', category: 'Aspirational', users: 42000, activeDau: 19500, avgScore: 67.2, lowBandwidthPct: 74, grievanceResolved: 94.8 },
      { name: 'Bahraich', category: 'Aspirational', users: 39000, activeDau: 17200, avgScore: 66.8, lowBandwidthPct: 76, grievanceResolved: 94.1 }
    ],
    demographics: [
      { cohort: '15-18 (12th/Foundational)', male: 84000, female: 72000, rural: 64 },
      { cohort: '19-21 (College/Grads)', male: 240000, female: 195000, rural: 58 },
      { cohort: '22-25 (Core Aspirants)', male: 320000, female: 260000, rural: 48 },
      { cohort: '26-30 (Senior Career)', male: 110000, female: 85000, rural: 42 }
    ],
    benchmark: [
      { month: 'Jan', state: 68.2, national: 65.4 },
      { month: 'Feb', state: 70.1, national: 66.2 },
      { month: 'Mar', state: 71.8, national: 67.9 },
      { month: 'Apr', state: 72.9, national: 69.1 },
      { month: 'May', state: 73.8, national: 71.0 },
      { month: 'Jun', state: 74.2, national: 72.4 }
    ]
  },
  'Maharashtra': {
    name: 'Maharashtra',
    code: 'MH',
    totalAspirants: '7,15,000',
    dau: '3,25,000 (45.4%)',
    femaleRatio: '49.2%',
    aspirationalCoverage: '91% (4/4 Dist)',
    topDistrict: 'Pune',
    avgScore: 76.8,
    districts: [
      { name: 'Pune', category: 'Tier-1', users: 165000, activeDau: 82000, avgScore: 81.2, lowBandwidthPct: 12, grievanceResolved: 99.4 },
      { name: 'Mumbai Suburban', category: 'Tier-1', users: 142000, activeDau: 69000, avgScore: 80.5, lowBandwidthPct: 8, grievanceResolved: 99.8 },
      { name: 'Nagpur', category: 'Tier-1', users: 88000, activeDau: 39000, avgScore: 76.4, lowBandwidthPct: 24, grievanceResolved: 98.2 },
      { name: 'Chhatrapati Sambhajinagar', category: 'Tier-2', users: 74000, activeDau: 32000, avgScore: 74.1, lowBandwidthPct: 35, grievanceResolved: 97.6 },
      { name: 'Gadchiroli', category: 'Aspirational', users: 38000, activeDau: 16500, avgScore: 69.8, lowBandwidthPct: 72, grievanceResolved: 95.8 },
      { name: 'Nandurbar', category: 'Aspirational', users: 32000, activeDau: 14000, avgScore: 68.2, lowBandwidthPct: 78, grievanceResolved: 94.6 }
    ],
    demographics: [
      { cohort: '15-18 (12th/Foundational)', male: 62000, female: 58000, rural: 48 },
      { cohort: '19-21 (College/Grads)', male: 175000, female: 168000, rural: 44 },
      { cohort: '22-25 (Core Aspirants)', male: 235000, female: 228000, rural: 38 },
      { cohort: '26-30 (Senior Career)', male: 82000, female: 79000, rural: 32 }
    ],
    benchmark: [
      { month: 'Jan', state: 71.4, national: 65.4 },
      { month: 'Feb', state: 72.8, national: 66.2 },
      { month: 'Mar', state: 74.5, national: 67.9 },
      { month: 'Apr', state: 75.6, national: 69.1 },
      { month: 'May', state: 76.2, national: 71.0 },
      { month: 'Jun', state: 76.8, national: 72.4 }
    ]
  },
  'Bihar': {
    name: 'Bihar',
    code: 'BR',
    totalAspirants: '6,80,000',
    dau: '3,10,000 (45.5%)',
    femaleRatio: '43.5%',
    aspirationalCoverage: '98% (13/13 Dist)',
    topDistrict: 'Patna',
    avgScore: 71.5,
    districts: [
      { name: 'Patna', category: 'Tier-1', users: 175000, activeDau: 88000, avgScore: 78.9, lowBandwidthPct: 22, grievanceResolved: 98.9 },
      { name: 'Gaya', category: 'Aspirational', users: 82000, activeDau: 38000, avgScore: 71.2, lowBandwidthPct: 56, grievanceResolved: 96.4 },
      { name: 'Muzaffarpur', category: 'Tier-2', users: 78000, activeDau: 35000, avgScore: 70.8, lowBandwidthPct: 48, grievanceResolved: 97.1 },
      { name: 'Bhagalpur', category: 'Tier-2', users: 65000, activeDau: 29000, avgScore: 69.5, lowBandwidthPct: 52, grievanceResolved: 96.2 },
      { name: 'Katihar', category: 'Aspirational', users: 54000, activeDau: 24000, avgScore: 67.8, lowBandwidthPct: 78, grievanceResolved: 95.0 },
      { name: 'Purnia', category: 'Aspirational', users: 49000, activeDau: 22000, avgScore: 66.9, lowBandwidthPct: 82, grievanceResolved: 94.2 }
    ],
    demographics: [
      { cohort: '15-18 (12th/Foundational)', male: 72000, female: 54000, rural: 74 },
      { cohort: '19-21 (College/Grads)', male: 195000, female: 145000, rural: 68 },
      { cohort: '22-25 (Core Aspirants)', male: 260000, female: 190000, rural: 62 },
      { cohort: '26-30 (Senior Career)', male: 95000, female: 65000, rural: 58 }
    ],
    benchmark: [
      { month: 'Jan', state: 64.8, national: 65.4 },
      { month: 'Feb', state: 66.5, national: 66.2 },
      { month: 'Mar', state: 68.2, national: 67.9 },
      { month: 'Apr', state: 69.8, national: 69.1 },
      { month: 'May', state: 70.9, national: 71.0 },
      { month: 'Jun', state: 71.5, national: 72.4 }
    ]
  },
  'Rajasthan': {
    name: 'Rajasthan',
    code: 'RJ',
    totalAspirants: '4,90,000',
    dau: '2,15,000 (43.8%)',
    femaleRatio: '45.2%',
    aspirationalCoverage: '88% (5/5 Dist)',
    topDistrict: 'Jaipur',
    avgScore: 75.1,
    districts: [
      { name: 'Jaipur', category: 'Tier-1', users: 135000, activeDau: 65000, avgScore: 79.4, lowBandwidthPct: 15, grievanceResolved: 99.1 },
      { name: 'Jodhpur', category: 'Tier-1', users: 78000, activeDau: 36000, avgScore: 76.2, lowBandwidthPct: 28, grievanceResolved: 98.4 },
      { name: 'Kota', category: 'Tier-2', users: 84000, activeDau: 42000, avgScore: 82.1, lowBandwidthPct: 18, grievanceResolved: 99.0 },
      { name: 'Udaipur', category: 'Tier-2', users: 56000, activeDau: 24000, avgScore: 73.8, lowBandwidthPct: 44, grievanceResolved: 97.2 },
      { name: 'Jaisalmer', category: 'Aspirational', users: 28000, activeDau: 12000, avgScore: 68.4, lowBandwidthPct: 84, grievanceResolved: 95.1 }
    ],
    demographics: [
      { cohort: '15-18 (12th/Foundational)', male: 48000, female: 39000, rural: 64 },
      { cohort: '19-21 (College/Grads)', male: 135000, female: 110000, rural: 58 },
      { cohort: '22-25 (Core Aspirants)', male: 185000, female: 145000, rural: 52 },
      { cohort: '26-30 (Senior Career)', male: 68000, female: 52000, rural: 46 }
    ],
    benchmark: [
      { month: 'Jan', state: 69.2, national: 65.4 },
      { month: 'Feb', state: 71.0, national: 66.2 },
      { month: 'Mar', state: 72.8, national: 67.9 },
      { month: 'Apr', state: 73.9, national: 69.1 },
      { month: 'May', state: 74.6, national: 71.0 },
      { month: 'Jun', state: 75.1, national: 72.4 }
    ]
  }
};

const StateAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const [selectedStateKey, setSelectedStateKey] = useState<string>('Uttar Pradesh');
  const [timeRange, setTimeRange] = useState<'30d' | '3m' | 'ytd'>('30d');
  const [districtFilter, setDistrictFilter] = useState<'all' | 'aspirational' | 'tier1'>('all');

  const stateInfo = STATES_DATABASE[selectedStateKey] || STATES_DATABASE['Uttar Pradesh'];

  const filteredDistricts = stateInfo.districts.filter(d => {
    if (districtFilter === 'aspirational') return d.category === 'Aspirational';
    if (districtFilter === 'tier1') return d.category === 'Tier-1';
    return true;
  });

  return (
    <div className="state-analytics-deepdive">
      {/* Top Header & State Selector */}
      <div className="state-top-header">
        <div className="state-header-left">
          <div className="breadcrumb-nav">
            <span onClick={() => navigate('/ministry/dashboard')} className="crumb-link">Executive Dashboard</span>
            <span className="crumb-sep">/</span>
            <span className="crumb-current">State & District Analytics</span>
          </div>
          <div className="state-title-lockup">
            <Building className="state-title-icon" size={24} color="#002B7F" />
            <div>
              <h1>{stateInfo.name} ({stateInfo.code}) Analytics Deep-Dive</h1>
              <p>District-level participation, demographic inclusion, and NTA mock calibration</p>
            </div>
          </div>
        </div>

        <div className="state-header-controls">
          <div className="selector-group">
            <label>Select State / UT:</label>
            <select 
              className="state-dropdown"
              value={selectedStateKey}
              onChange={(e) => setSelectedStateKey(e.target.value)}
            >
              {Object.keys(STATES_DATABASE).map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div className="selector-group">
            <label>Timeframe:</label>
            <select 
              className="time-dropdown"
              value={timeRange}
              onChange={(e: any) => setTimeRange(e.target.value)}
            >
              <option value="30d">Last 30 Days</option>
              <option value="3m">Last Quarter (Q2 2026)</option>
              <option value="ytd">Fiscal Year 2025-26</option>
            </select>
          </div>

          <button className="btn-export-digest" onClick={() => alert(`Exporting ${stateInfo.name} State Parliamentary Report (PDF/CSV)...`)}>
            <Download size={14} /> Export State Report
          </button>
        </div>
      </div>

      {/* State Strategic KPI Strip */}
      <div className="state-kpi-strip">
        <div className="state-kpi-box">
          <span className="skpi-label">TOTAL REGISTERED IN {stateInfo.code}</span>
          <div className="skpi-val">{stateInfo.totalAspirants}</div>
          <span className="skpi-sub">Across all administrative districts</span>
        </div>

        <div className="state-kpi-box">
          <span className="skpi-label">DAILY ACTIVE LEARNERS (DAU)</span>
          <div className="skpi-val text-blue">{stateInfo.dau}</div>
          <span className="skpi-sub">Peak hours: 07:00 - 11:00 PM</span>
        </div>

        <div className="state-kpi-box">
          <span className="skpi-label">FEMALE ASPIRANT RATIO</span>
          <div className="skpi-val text-green">{stateInfo.femaleRatio}</div>
          <span className="skpi-sub">National Target: 50.0%</span>
        </div>

        <div className="state-kpi-box">
          <span className="skpi-label">ASPIRATIONAL DISTRICTS PENETRATION</span>
          <div className="skpi-val text-saffron">{stateInfo.aspirationalCoverage}</div>
          <span className="skpi-sub">NITI Aayog Priority Covered</span>
        </div>

        <div className="state-kpi-box">
          <span className="skpi-label">AVERAGE STATE MOCK SCORE</span>
          <div className="skpi-val text-indigo">{stateInfo.avgScore}%</div>
          <span className="skpi-sub">Top District: <strong>{stateInfo.topDistrict}</strong></span>
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="state-charts-grid">
        {/* Chart 1: District-wise Enrolled vs Active Users */}
        <div className="analytics-card chart-card-large">
          <div className="card-top-title">
            <div>
              <h3>District-wise User Base & Active DAU (Top Districts)</h3>
              <p>Comparison of total enrolled students vs active daily participants</p>
            </div>
            <div className="chart-legend-box">
              <span className="dot blue"></span> Total Enrolled
              <span className="dot saffron"></span> Daily Active (DAU)
            </div>
          </div>

          <div className="chart-canvas" style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stateInfo.districts} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" stroke="#64748B" fontSize={11} tickLine={false} />
                <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{ background: '#0B192C', border: 'none', borderRadius: '8px', color: '#FFF' }}
                  formatter={(val: any) => [val.toLocaleString('en-IN'), 'Students']}
                />
                <Bar dataKey="users" fill="#002B7F" radius={[4, 4, 0, 0]} name="Total Enrolled" />
                <Bar dataKey="activeDau" fill="#FE6500" radius={[4, 4, 0, 0]} name="Daily Active" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: State vs National Benchmark Curve */}
        <div className="analytics-card chart-card-side">
          <div className="card-top-title">
            <div>
              <h3>State vs National Mock Benchmark</h3>
              <p>Monthly average percentile trend</p>
            </div>
          </div>

          <div className="chart-canvas" style={{ height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={stateInfo.benchmark} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="month" stroke="#64748B" fontSize={11} tickLine={false} />
                <YAxis domain={[60, 85]} stroke="#64748B" fontSize={11} tickLine={false} />
                <RechartsTooltip 
                  contentStyle={{ background: '#0B192C', border: 'none', borderRadius: '8px', color: '#FFF' }}
                  formatter={(val: any) => [`${val}%`, 'Score']}
                />
                <Line type="monotone" dataKey="state" stroke="#002B7F" strokeWidth={3} dot={{ r: 4 }} name={`${stateInfo.code} Avg`} />
                <Line type="monotone" dataKey="national" stroke="#16A34A" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 3 }} name="National Avg" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="benchmark-stat-note">
            <span>{stateInfo.name} is currently <strong>+{(stateInfo.avgScore - 72.4).toFixed(1)}%</strong> compared to the All-India benchmark.</span>
          </div>
        </div>
      </div>

      {/* District Performance Matrix Table */}
      <div className="district-matrix-card">
        <div className="district-head-flex">
          <div>
            <h3>{stateInfo.name} Administrative District Matrix</h3>
            <p>Granular breakdown of enrollment density, 2G rural data saver utilization, and grievance resolution rate</p>
          </div>

          <div className="district-filter-buttons">
            <button 
              className={`dfilter-btn ${districtFilter === 'all' ? 'active' : ''}`}
              onClick={() => setDistrictFilter('all')}
            >
              All Districts ({stateInfo.districts.length})
            </button>
            <button 
              className={`dfilter-btn ${districtFilter === 'aspirational' ? 'active' : ''}`}
              onClick={() => setDistrictFilter('aspirational')}
            >
              ⭐ NITI Aayog Aspirational
            </button>
            <button 
              className={`dfilter-btn ${districtFilter === 'tier1' ? 'active' : ''}`}
              onClick={() => setDistrictFilter('tier1')}
            >
              Tier-1 Urban Centers
            </button>
          </div>
        </div>

        <div className="table-responsive-box">
          <table className="gov-district-table">
            <thead>
              <tr>
                <th>District Name</th>
                <th>Category</th>
                <th>Total Enrolled</th>
                <th>Active DAU</th>
                <th>Avg Mock Score</th>
                <th>2G Low-Bandwidth Mode</th>
                <th>CPGRAMS Grievance Resolution</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredDistricts.map(d => (
                <tr key={d.name}>
                  <td><strong>{d.name}</strong></td>
                  <td>
                    <span className={`category-tag cat-${d.category.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                      {d.category === 'Aspirational' ? '⭐ Aspirational District' : d.category}
                    </span>
                  </td>
                  <td><strong>{d.users.toLocaleString('en-IN')}</strong></td>
                  <td>{d.activeDau.toLocaleString('en-IN')}</td>
                  <td>
                    <span className="mock-score-pill">{d.avgScore}%</span>
                  </td>
                  <td>
                    <div className="bw-usage-flex">
                      <span>{d.lowBandwidthPct}%</span>
                      <div className="bw-track"><div className="bw-fill" style={{ width: `${d.lowBandwidthPct}%` }}></div></div>
                    </div>
                  </td>
                  <td>
                    <span className="res-rate-text">{d.grievanceResolved}% Resolved</span>
                  </td>
                  <td>
                    <span className="online-district-pill">● Operational</span>
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

export default StateAnalytics;
