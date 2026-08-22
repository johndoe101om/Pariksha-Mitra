import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, Medal, ChevronUp, ChevronDown, Award, Flame, 
  Search, Filter, MapPin, Target, Sparkles, ArrowRight, 
  Crown, CheckCircle, HelpCircle, ThumbsUp, Shield, BookOpen, Clock
} from 'lucide-react';
import './Leaderboard.css';

interface AspirantRank {
  rank: number;
  name: string;
  avatar: string;
  state: string;
  district: string;
  exam: string;
  score: number;
  accuracy: number;
  streak: number;
  trend: 'up' | 'down' | 'same';
  trendVal?: number;
  isUser?: boolean;
  kudosCount: number;
}

export default function Leaderboard() {
  const navigate = useNavigate();

  // Filters State
  const [scope, setScope] = useState<'National' | 'State' | 'District' | 'Exam' | 'Subject'>('National');
  const [timeframe, setTimeframe] = useState<'Today' | 'Weekly' | 'Monthly' | 'AllTime'>('Weekly');
  const [selectedState, setSelectedState] = useState('Uttar Pradesh');
  const [selectedDistrict, setSelectedDistrict] = useState('Lucknow');
  const [selectedExam, setSelectedExam] = useState('UPSC Civil Services');
  const [selectedSubject, setSelectedSubject] = useState('Indian Polity');
  const [searchQuery, setSearchQuery] = useState('');
  const [kudosGiven, setKudosGiven] = useState<{ [key: number]: boolean }>({});

  // States & Districts Map
  const stateDistricts: { [key: string]: string[] } = {
    'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Prayagraj', 'Varanasi', 'Gorakhpur', 'Noida', 'Agra'],
    'Bihar': ['Patna', 'Gaya', 'Muzaffarpur', 'Bhagalpur', 'Darbhanga'],
    'Delhi (NCT)': ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'Dwarka'],
    'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Nashik', 'Aurangabad'],
    'Rajasthan': ['Jaipur', 'Jodhpur', 'Kota', 'Udaipur', 'Bikaner'],
    'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Ujjain']
  };

  const handleKudos = (rank: number) => {
    setKudosGiven(prev => ({
      ...prev,
      [rank]: !prev[rank]
    }));
  };

  // Dynamic Dataset Generation based on Scope & Timeframe
  const aspirantsList: AspirantRank[] = useMemo(() => {
    const multiplier = timeframe === 'Today' ? 0.25 : timeframe === 'Weekly' ? 1 : timeframe === 'Monthly' ? 3.8 : 12;

    if (scope === 'National') {
      return [
        { rank: 1, name: 'Aarav Sharma', avatar: 'AS', state: 'Delhi (NCT)', district: 'New Delhi', exam: 'UPSC Civil Services', score: Math.round(3450 * multiplier), accuracy: 96, streak: 28, trend: 'up', trendVal: 2, kudosCount: 142 },
        { rank: 2, name: 'Priya Sundaram', avatar: 'PS', state: 'Tamil Nadu', district: 'Chennai', exam: 'UPSC Civil Services', score: Math.round(3380 * multiplier), accuracy: 94, streak: 24, trend: 'same', kudosCount: 98 },
        { rank: 3, name: 'Amitabh Tiwari', avatar: 'AT', state: 'Bihar', district: 'Patna', exam: 'BPSC / UPSC', score: Math.round(3290 * multiplier), accuracy: 92, streak: 19, trend: 'up', trendVal: 5, kudosCount: 84 },
        { rank: 4, name: 'Rahul Kumar (You)', avatar: 'RK', state: 'Uttar Pradesh', district: 'Lucknow', exam: 'UPSC Civil Services', score: Math.round(3140 * multiplier), accuracy: 88, streak: 12, trend: 'up', trendVal: 4, isUser: true, kudosCount: 65 },
        { rank: 5, name: 'Sneha Mukherjee', avatar: 'SM', state: 'West Bengal', district: 'Kolkata', exam: 'SSC CGL', score: Math.round(2980 * multiplier), accuracy: 91, streak: 16, trend: 'down', trendVal: 1, kudosCount: 52 },
        { rank: 6, name: 'Vikash Deshmukh', avatar: 'VD', state: 'Maharashtra', district: 'Pune', exam: 'UPSC Civil Services', score: Math.round(2910 * multiplier), accuracy: 86, streak: 14, trend: 'up', trendVal: 3, kudosCount: 44 },
        { rank: 7, name: 'Neha Gupta', avatar: 'NG', state: 'Uttar Pradesh', district: 'Kanpur', exam: 'IBPS Bank PO', score: Math.round(2840 * multiplier), accuracy: 89, streak: 21, trend: 'down', trendVal: 2, kudosCount: 39 },
        { rank: 8, name: 'Jaspreet Singh', avatar: 'JS', state: 'Punjab', district: 'Chandigarh', exam: 'UPSC Civil Services', score: Math.round(2760 * multiplier), accuracy: 85, streak: 11, trend: 'up', trendVal: 1, kudosCount: 31 },
        { rank: 9, name: 'Ananya Reddy', avatar: 'AR', state: 'Telangana', district: 'Hyderabad', exam: 'NEET UG', score: Math.round(2720 * multiplier), accuracy: 93, streak: 18, trend: 'same', kudosCount: 29 },
        { rank: 10, name: 'Manish Rawat', avatar: 'MR', state: 'Uttarakhand', district: 'Dehradun', exam: 'Railway NTPC', score: Math.round(2680 * multiplier), accuracy: 84, streak: 9, trend: 'up', trendVal: 6, kudosCount: 22 },
      ];
    } else if (scope === 'State') {
      return [
        { rank: 1, name: 'Divya Prakash', avatar: 'DP', state: selectedState, district: 'Prayagraj', exam: 'UPPSC / UPSC', score: Math.round(3310 * multiplier), accuracy: 95, streak: 22, trend: 'up', trendVal: 1, kudosCount: 112 },
        { rank: 2, name: 'Rahul Kumar (You)', avatar: 'RK', state: selectedState, district: 'Lucknow', exam: 'UPSC Civil Services', score: Math.round(3140 * multiplier), accuracy: 88, streak: 12, trend: 'up', trendVal: 3, isUser: true, kudosCount: 65 },
        { rank: 3, name: 'Neha Gupta', avatar: 'NG', state: selectedState, district: 'Kanpur', exam: 'IBPS Bank PO', score: Math.round(2840 * multiplier), accuracy: 89, streak: 21, trend: 'same', kudosCount: 39 },
        { rank: 4, name: 'Ankit Singh Yadav', avatar: 'AY', state: selectedState, district: 'Varanasi', exam: 'UPPSC PCS', score: Math.round(2790 * multiplier), accuracy: 86, streak: 15, trend: 'up', trendVal: 2, kudosCount: 34 },
        { rank: 5, name: 'Pooja Verma', avatar: 'PV', state: selectedState, district: 'Gorakhpur', exam: 'SSC CGL', score: Math.round(2640 * multiplier), accuracy: 87, streak: 10, trend: 'down', trendVal: 1, kudosCount: 28 },
        { rank: 6, name: 'Saurabh Tripathi', avatar: 'ST', state: selectedState, district: 'Agra', exam: 'UPSC Civil Services', score: Math.round(2580 * multiplier), accuracy: 83, streak: 14, trend: 'up', trendVal: 4, kudosCount: 21 },
        { rank: 7, name: 'Harshita Mishra', avatar: 'HM', state: selectedState, district: 'Lucknow', exam: 'UPPSC PCS', score: Math.round(2490 * multiplier), accuracy: 85, streak: 8, trend: 'down', trendVal: 2, kudosCount: 19 },
      ];
    } else if (scope === 'District') {
      return [
        { rank: 1, name: 'Rahul Kumar (You)', avatar: 'RK', state: selectedState, district: selectedDistrict, exam: 'UPSC Civil Services', score: Math.round(3140 * multiplier), accuracy: 88, streak: 12, trend: 'up', trendVal: 1, isUser: true, kudosCount: 65 },
        { rank: 2, name: 'Harshita Mishra', avatar: 'HM', state: selectedState, district: selectedDistrict, exam: 'UPPSC PCS', score: Math.round(2490 * multiplier), accuracy: 85, streak: 8, trend: 'up', trendVal: 2, kudosCount: 19 },
        { rank: 3, name: 'Mohit Srivastava', avatar: 'MS', state: selectedState, district: selectedDistrict, exam: 'SSC CGL', score: Math.round(2380 * multiplier), accuracy: 82, streak: 7, trend: 'down', trendVal: 1, kudosCount: 15 },
        { rank: 4, name: 'Kavita Chaurasia', avatar: 'KC', state: selectedState, district: selectedDistrict, exam: 'UPSC Civil Services', score: Math.round(2290 * multiplier), accuracy: 80, streak: 11, trend: 'same', kudosCount: 12 },
        { rank: 5, name: 'Gaurav Pandey', avatar: 'GP', state: selectedState, district: selectedDistrict, exam: 'Banking PO', score: Math.round(2180 * multiplier), accuracy: 81, streak: 6, trend: 'up', trendVal: 3, kudosCount: 9 },
      ];
    } else if (scope === 'Exam') {
      return [
        { rank: 1, name: 'Aarav Sharma', avatar: 'AS', state: 'Delhi (NCT)', district: 'New Delhi', exam: selectedExam, score: Math.round(3450 * multiplier), accuracy: 96, streak: 28, trend: 'up', trendVal: 1, kudosCount: 142 },
        { rank: 2, name: 'Priya Sundaram', avatar: 'PS', state: 'Tamil Nadu', district: 'Chennai', exam: selectedExam, score: Math.round(3380 * multiplier), accuracy: 94, streak: 24, trend: 'same', kudosCount: 98 },
        { rank: 3, name: 'Rahul Kumar (You)', avatar: 'RK', state: 'Uttar Pradesh', district: 'Lucknow', exam: selectedExam, score: Math.round(3140 * multiplier), accuracy: 88, streak: 12, trend: 'up', trendVal: 2, isUser: true, kudosCount: 65 },
        { rank: 4, name: 'Vikash Deshmukh', avatar: 'VD', state: 'Maharashtra', district: 'Pune', exam: selectedExam, score: Math.round(2910 * multiplier), accuracy: 86, streak: 14, trend: 'down', trendVal: 1, kudosCount: 44 },
        { rank: 5, name: 'Jaspreet Singh', avatar: 'JS', state: 'Punjab', district: 'Chandigarh', exam: selectedExam, score: Math.round(2760 * multiplier), accuracy: 85, streak: 11, trend: 'up', trendVal: 3, kudosCount: 31 },
      ];
    } else {
      return [
        { rank: 1, name: 'Priya Sundaram', avatar: 'PS', state: 'Tamil Nadu', district: 'Chennai', exam: 'UPSC CSE', score: Math.round(1880 * multiplier), accuracy: 98, streak: 24, trend: 'up', trendVal: 1, kudosCount: 88 },
        { rank: 2, name: 'Rahul Kumar (You)', avatar: 'RK', state: 'Uttar Pradesh', district: 'Lucknow', exam: 'UPSC CSE', score: Math.round(1750 * multiplier), accuracy: 94, streak: 12, trend: 'up', trendVal: 3, isUser: true, kudosCount: 65 },
        { rank: 3, name: 'Aarav Sharma', avatar: 'AS', state: 'Delhi (NCT)', district: 'New Delhi', exam: 'UPSC CSE', score: Math.round(1690 * multiplier), accuracy: 91, streak: 28, trend: 'down', trendVal: 1, kudosCount: 54 },
        { rank: 4, name: 'Amitabh Tiwari', avatar: 'AT', state: 'Bihar', district: 'Patna', exam: 'BPSC', score: Math.round(1580 * multiplier), accuracy: 89, streak: 19, trend: 'same', kudosCount: 42 },
      ];
    }
  }, [scope, timeframe, selectedState, selectedDistrict, selectedExam, selectedSubject]);

  // Filter by search query
  const filteredAspirants = useMemo(() => {
    if (!searchQuery.trim()) return aspirantsList;
    return aspirantsList.filter(a => 
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.exam.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [aspirantsList, searchQuery]);

  const top3 = filteredAspirants.slice(0, 3);
  const userStanding = filteredAspirants.find(a => a.isUser) || aspirantsList[3];

  return (
    <div className="leaderboard-page-container">
      {/* Hero Header */}
      <div className="leaderboard-hero-banner">
        <div className="hero-content">
          <div className="hero-tag-strip">
            <span className="hero-gov-badge">
              <Shield size={14} /> National Sovereign Merit System • Govt. of India
            </span>
            <span className="live-pulse-chip">
              <span className="live-dot"></span> Real-Time Ranks Updated
            </span>
          </div>
          <h1>All-India Aspirant Leaderboard / राष्ट्रीय लीडरबोर्ड</h1>
          <p>
            Track your competitive standing across India, your state, district, or exam batch. Earn merit badges and unlock exclusive mentorship with AIR toppers.
          </p>
        </div>

        <div className="rewards-strip-card">
          <div className="reward-header">
            <Trophy size={18} color="#FFD700" />
            <strong>Weekly Top Performer Perks</strong>
          </div>
          <div className="reward-perks-grid">
            <div className="perk-item">
              <span className="rank-tag gold">Rank 1-10</span>
              <span>1-on-1 AIR Mentorship + Ministry Merit Certificate</span>
            </div>
            <div className="perk-item">
              <span className="rank-tag silver">Rank 11-50</span>
              <span>Standard Book Pack Delivered + Elite Badge</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Filter & Scope Bar */}
      <div className="leaderboard-filter-panel">
        {/* Scope Pill Tabs */}
        <div className="scope-tabs-row">
          {[
            { id: 'National', label: '🇮🇳 All India (National)' },
            { id: 'State', label: '🏛️ State Level' },
            { id: 'District', label: '🏙️ District Level' },
            { id: 'Exam', label: '🎯 Exam Specific' },
            { id: 'Subject', label: '📚 Subject League' }
          ].map(tab => (
            <button
              key={tab.id}
              className={`scope-pill-btn ${scope === tab.id ? 'active' : ''}`}
              onClick={() => setScope(tab.id as any)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Dropdown Selectors based on Scope */}
        <div className="dynamic-subfilters-row">
          {scope === 'State' && (
            <div className="filter-select-group">
              <label>Select State / UT:</label>
              <select 
                value={selectedState} 
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedDistrict(stateDistricts[e.target.value]?.[0] || 'District');
                }}
              >
                {Object.keys(stateDistricts).map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          )}

          {scope === 'District' && (
            <>
              <div className="filter-select-group">
                <label>State:</label>
                <select 
                  value={selectedState} 
                  onChange={(e) => {
                    setSelectedState(e.target.value);
                    setSelectedDistrict(stateDistricts[e.target.value]?.[0] || 'District');
                  }}
                >
                  {Object.keys(stateDistricts).map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>
              <div className="filter-select-group">
                <label>District / City:</label>
                <select 
                  value={selectedDistrict} 
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                >
                  {(stateDistricts[selectedState] || []).map(dist => (
                    <option key={dist} value={dist}>{dist}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {scope === 'Exam' && (
            <div className="filter-select-group">
              <label>Target Competitive Exam:</label>
              <select value={selectedExam} onChange={(e) => setSelectedExam(e.target.value)}>
                <option value="UPSC Civil Services">UPSC Civil Services Examination</option>
                <option value="SSC CGL">SSC CGL (Combined Graduate Level)</option>
                <option value="IBPS Bank PO">IBPS / SBI Bank PO</option>
                <option value="Railway NTPC">Railway RRB NTPC</option>
                <option value="NEET UG">NEET UG (Medical Entrance)</option>
                <option value="JEE Main">JEE Main (Engineering)</option>
                <option value="UPPSC PCS">UPPSC State Civil Services</option>
              </select>
            </div>
          )}

          {scope === 'Subject' && (
            <div className="filter-select-group">
              <label>Subject League:</label>
              <select value={selectedSubject} onChange={(e) => setSelectedSubject(e.target.value)}>
                <option value="Indian Polity">Indian Polity & Constitution Blitz</option>
                <option value="Modern History">Modern Indian History Sprint</option>
                <option value="Economy">Economy & Budget Challenge</option>
                <option value="Current Affairs">Daily Current Affairs Grand Prix</option>
              </select>
            </div>
          )}

          {/* Timeframe Filter Buttons */}
          <div className="timeframe-buttons-group">
            {[
              { id: 'Today', label: '⚡ Daily Sprint' },
              { id: 'Weekly', label: '📅 This Week' },
              { id: 'Monthly', label: '🗓️ This Month' },
              { id: 'AllTime', label: '👑 All-Time' }
            ].map(tf => (
              <button
                key={tf.id}
                className={`time-chip-btn ${timeframe === tf.id ? 'active' : ''}`}
                onClick={() => setTimeframe(tf.id as any)}
              >
                {tf.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="leaderboard-search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search by student name or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Visual Podium for Top 3 */}
      {top3.length >= 3 && !searchQuery && (
        <div className="podium-showcase-container">
          {/* Rank 2 (Silver) */}
          <div className="podium-column silver">
            <div className="podium-card-body">
              <div className="podium-avatar-ring silver">
                <span className="avatar-text">{top3[1].avatar}</span>
                <span className="rank-badge silver">2</span>
              </div>
              <h3 className="podium-name">{top3[1].name}</h3>
              <span className="podium-loc">{top3[1].district}, {top3[1].state}</span>
              <span className="podium-exam-tag">{top3[1].exam}</span>
              <div className="podium-score-pill">
                <strong>{top3[1].score.toLocaleString()}</strong> pts
              </div>
              <div className="podium-meta">
                <span>🎯 {top3[1].accuracy}% Accuracy</span>
                <span>🔥 {top3[1].streak}d Streak</span>
              </div>
            </div>
            <div className="podium-pedestal silver">
              <span className="pedestal-number">#2</span>
            </div>
          </div>

          {/* Rank 1 (Gold) */}
          <div className="podium-column gold">
            <div className="crown-icon-top">
              <Crown size={32} color="#FFD700" />
            </div>
            <div className="podium-card-body">
              <div className="podium-avatar-ring gold">
                <span className="avatar-text">{top3[0].avatar}</span>
                <span className="rank-badge gold">1</span>
              </div>
              <h3 className="podium-name">{top3[0].name}</h3>
              <span className="podium-loc">{top3[0].district}, {top3[0].state}</span>
              <span className="podium-exam-tag">{top3[0].exam}</span>
              <div className="podium-score-pill gold">
                <strong>{top3[0].score.toLocaleString()}</strong> pts
              </div>
              <div className="podium-meta">
                <span>🎯 {top3[0].accuracy}% Accuracy</span>
                <span>🔥 {top3[0].streak}d Streak</span>
              </div>
            </div>
            <div className="podium-pedestal gold">
              <span className="pedestal-number">#1</span>
            </div>
          </div>

          {/* Rank 3 (Bronze) */}
          <div className="podium-column bronze">
            <div className="podium-card-body">
              <div className="podium-avatar-ring bronze">
                <span className="avatar-text">{top3[2].avatar}</span>
                <span className="rank-badge bronze">3</span>
              </div>
              <h3 className="podium-name">{top3[2].name}</h3>
              <span className="podium-loc">{top3[2].district}, {top3[2].state}</span>
              <span className="podium-exam-tag">{top3[2].exam}</span>
              <div className="podium-score-pill">
                <strong>{top3[2].score.toLocaleString()}</strong> pts
              </div>
              <div className="podium-meta">
                <span>🎯 {top3[2].accuracy}% Accuracy</span>
                <span>🔥 {top3[2].streak}d Streak</span>
              </div>
            </div>
            <div className="podium-pedestal bronze">
              <span className="pedestal-number">#3</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Leaderboard Rankings Grid */}
      <div className="leaderboard-table-card">
        <div className="table-header-toolbar">
          <h3>
            Rankings Table • <span className="text-highlight">{scope} Scope</span> ({filteredAspirants.length} Aspirants)
          </h3>
          <span className="table-subtext">Updated 5 minutes ago via National NTA Engine</span>
        </div>

        {/* Scrollable Container with Robust Grid Structure */}
        <div className="rankings-grid-container">
          {/* Grid Header */}
          <div className="rankings-grid-header">
            <div className="grid-cell col-rank">RANK</div>
            <div className="grid-cell col-aspirant">ASPIRANT</div>
            <div className="grid-cell col-region">REGION</div>
            <div className="grid-cell col-exam">EXAM CATEGORY</div>
            <div className="grid-cell col-streak">DAILY STREAK</div>
            <div className="grid-cell col-accuracy">ACCURACY</div>
            <div className="grid-cell col-score">MERIT POINTS</div>
            <div className="grid-cell col-kudos">KUDOS</div>
          </div>

          {/* Grid Rows */}
          <div className="rankings-grid-body">
            {filteredAspirants.map((aspirant) => {
              const isKudos = !!kudosGiven[aspirant.rank];
              return (
                <div 
                  key={aspirant.rank} 
                  className={`ranking-row-card ${aspirant.isUser ? 'user-highlight-card' : ''}`}
                >
                  {/* Col 1: Rank */}
                  <div className="grid-cell col-rank">
                    <div className="rank-badge-cell">
                      <span className={`rank-num-pill ${aspirant.rank <= 3 ? `top-${aspirant.rank}` : ''}`}>
                        #{aspirant.rank}
                      </span>
                      {aspirant.trend === 'up' && (
                        <span className="trend-indicator up" title={`Moved up ${aspirant.trendVal || 1} spots`}>
                          <ChevronUp size={14} /> {aspirant.trendVal || ''}
                        </span>
                      )}
                      {aspirant.trend === 'down' && (
                        <span className="trend-indicator down" title={`Moved down ${aspirant.trendVal || 1} spots`}>
                          <ChevronDown size={14} /> {aspirant.trendVal || ''}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Col 2: Aspirant Identity */}
                  <div className="grid-cell col-aspirant">
                    <div className="aspirant-info-cell">
                      <div className={`cell-avatar ${aspirant.isUser ? 'user-avatar' : ''}`}>
                        {aspirant.avatar}
                      </div>
                      <div className="name-and-sub">
                        <strong className="cell-name">
                          {aspirant.name}
                          {aspirant.isUser && <span className="you-badge">YOU</span>}
                        </strong>
                        <span className="cell-sub">{aspirant.district}</span>
                      </div>
                    </div>
                  </div>

                  {/* Col 3: Region */}
                  <div className="grid-cell col-region">
                    <span className="region-tag">{aspirant.state}</span>
                  </div>

                  {/* Col 4: Exam Category */}
                  <div className="grid-cell col-exam">
                    <span className="exam-badge-tag">{aspirant.exam}</span>
                  </div>

                  {/* Col 5: Daily Streak */}
                  <div className="grid-cell col-streak">
                    <span className="streak-pill">
                      <Flame size={14} color="#FE6500" /> {aspirant.streak}d
                    </span>
                  </div>

                  {/* Col 6: Accuracy */}
                  <div className="grid-cell col-accuracy">
                    <div className="accuracy-cell">
                      <span>{aspirant.accuracy}%</span>
                      <div className="acc-bar-bg">
                        <div className="acc-bar-fill" style={{ width: `${aspirant.accuracy}%` }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Col 7: Merit Score */}
                  <div className="grid-cell col-score">
                    <span className="score-text">{aspirant.score.toLocaleString()} XP</span>
                  </div>

                  {/* Col 8: Kudos */}
                  <div className="grid-cell col-kudos">
                    <button 
                      className={`btn-kudos ${isKudos ? 'given' : ''}`}
                      onClick={() => handleKudos(aspirant.rank)}
                      title="Send encouragement kudos"
                    >
                      <ThumbsUp size={14} />
                      <span>{aspirant.kudosCount + (isKudos ? 1 : 0)}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Docked Sticky Bottom Standing Banner (Respects Sidebar on Desktop) */}
      <div className="docked-user-standing-bar">
        <div className="standing-bar-content">
          <div className="standing-user-profile">
            <div className="standing-avatar">{userStanding?.avatar || 'RK'}</div>
            <div className="standing-info">
              <h4>
                Your {scope} Standing: <span className="standing-rank-highlight">#{userStanding?.rank || 4}</span>
                <span className="standing-total-count"> (Top {scope === 'District' ? '2%' : '8%'} of aspirants)</span>
              </h4>
              <p className="standing-subtext">
                <ChevronUp size={14} color="#22C55E" /> <strong>+4 ranks gained</strong> this week • Need <strong>+140 XP</strong> to reach Rank #{Math.max(1, (userStanding?.rank || 4) - 1)}!
              </p>
            </div>
          </div>

          <div className="standing-actions">
            <div className="standing-score-pill">
              <strong>{(userStanding?.score || 3140).toLocaleString()} XP</strong>
            </div>
            <button className="btn-practice-climb" onClick={() => navigate('/practice')}>
              Solve Questions to Climb <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
