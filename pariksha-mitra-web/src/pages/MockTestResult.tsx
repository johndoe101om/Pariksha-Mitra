import React from 'react';
import { Share2, Download, RefreshCw, ArrowRight, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import './MockTestResult.css';

const performanceData = [
  { name: 'Gen Intel', score: 42, avg: 30, top: 48 },
  { name: 'Quant', score: 38, avg: 25, top: 50 },
  { name: 'English', score: 45, avg: 35, top: 48 },
  { name: 'Gen Aware', score: 31, avg: 20, top: 40 },
];

export default function MockTestResult() {
  const navigate = useNavigate();

  return (
    <div className="result-container">
      <header className="result-header">
        <h1>Result Analysis / परिणाम विश्लेषण</h1>
        <div className="header-actions">
          <button className="btn-icon"><Share2 size={18} /> Share</button>
          <button className="btn-icon"><Download size={18} /> Report</button>
        </div>
      </header>

      <div className="result-top-cards">
        <div className="score-card">
          <div className="score-circle">
            <div className="inner">
              <span className="big-score">156</span>
              <span className="out-of">/ 200</span>
            </div>
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray="78, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <div className="score-details">
            <h3>SSC CGL Tier 1 - Full Mock 1</h3>
            <p className="rank-text">All India Rank: <strong>#4,521</strong> out of 1,80,000</p>
            <div className="percentile-badge">97.5th Percentile</div>
          </div>
        </div>

        <div className="accuracy-card">
          <div className="stat-row">
            <div className="stat-box">
              <span className="stat-val correct"><CheckCircle size={16}/> 82</span>
              <span className="stat-lbl">Correct</span>
            </div>
            <div className="stat-box">
              <span className="stat-val incorrect"><XCircle size={16}/> 16</span>
              <span className="stat-lbl">Incorrect</span>
            </div>
            <div className="stat-box">
              <span className="stat-val unattempted"><AlertTriangle size={16}/> 2</span>
              <span className="stat-lbl">Skipped</span>
            </div>
          </div>
          <div className="accuracy-bar-container">
            <div className="accuracy-label">Accuracy: 83.6%</div>
            <div className="accuracy-bar">
              <div className="fill" style={{ width: '83.6%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Score Comparison</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <RechartsTooltip />
                <Bar dataKey="score" name="Your Score" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="avg" name="Average" fill="#C4C5D5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="top" name="Topper" fill="var(--tertiary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <h3>Subject Mastery</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performanceData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 50]} />
                <Radar name="Score" dataKey="score" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="section-breakdown">
        <h3>Section-wise Breakdown</h3>
        <div className="table-responsive">
          <table className="breakdown-table">
            <thead>
              <tr>
                <th>Section</th>
                <th>Attempted</th>
                <th>Correct</th>
                <th>Incorrect</th>
                <th>Score</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>General Intelligence</td>
                <td>25</td>
                <td>22</td>
                <td>3</td>
                <td>42.5</td>
                <td>88%</td>
              </tr>
              <tr>
                <td>Quantitative Aptitude</td>
                <td>24</td>
                <td>20</td>
                <td>4</td>
                <td>38.0</td>
                <td>83%</td>
              </tr>
              <tr>
                <td>English Language</td>
                <td>25</td>
                <td>23</td>
                <td>2</td>
                <td>45.0</td>
                <td>92%</td>
              </tr>
              <tr>
                <td>General Awareness</td>
                <td>24</td>
                <td>17</td>
                <td>7</td>
                <td>30.5</td>
                <td>70%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="result-actions">
        <button className="btn-primary" onClick={() => navigate('/mock-test-hub')}>
          Review All Answers <ArrowRight size={18} />
        </button>
        <button className="btn-secondary" onClick={() => navigate('/mock-test-hub')}>
          <RefreshCw size={18} /> Retake Test
        </button>
      </div>
    </div>
  );
}
