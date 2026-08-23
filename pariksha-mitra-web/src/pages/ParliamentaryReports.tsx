import React, { useState } from 'react';
import { 
  FileText, Download, Printer, CheckCircle2, 
  Calendar, Landmark, Shield, Filter, Search, Award, Eye 
} from 'lucide-react';
import './ParliamentaryReports.css';

const ParliamentaryReports: React.FC = () => {
  const [reportType, setReportType] = useState('Starred Question (Lok Sabha)');
  const [questionNo, setQuestionNo] = useState('SQ-442');
  const [sessionPeriod, setSessionPeriod] = useState('Budget Session 2026');
  const [stateFilter, setStateFilter] = useState('All-India (28 States & 8 UTs)');
  const [generating, setGenerating] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setToastMessage('Official Parliamentary Digest formatted and verified for tabling.');
      setTimeout(() => setToastMessage(null), 3000);
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="reports-mgmt-page">
      {/* 1. Header Banner */}
      <div className="rep-top-header">
        <div className="rep-title-lockup">
          <div className="badge-row">
            <span className="parliament-tag"><Landmark size={12} /> SANSAD PARLIAMENTARY VAULT</span>
            <span className="rti-tag">RTI Act 2005 &amp; Starred Questions Compliant</span>
          </div>
          <h1>Parliamentary Digest &amp; Official Legislative Reports</h1>
          <p>Automated compilation of national coaching metrics, state expenditures, and equity data for Lok Sabha &amp; Rajya Sabha queries.</p>
        </div>

        <div className="rep-header-actions">
          <button className="btn-print-doc" onClick={handlePrint}>
            <Printer size={14} /> Print Official Document
          </button>
          <button className="btn-download-pdf" onClick={() => alert('Downloading official Signed Parliamentary Digest (PDF)...')}>
            <Download size={14} /> Download Certified PDF
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="rep-toast-banner">
          <CheckCircle2 size={16} color="#15803D" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. 4-Column KPI Grid */}
      <div className="rep-kpi-grid">
        <div className="rep-kpi-card border-blue">
          <div className="kpi-icon bg-blue"><Landmark size={20} color="#002B7F" /></div>
          <div>
            <span className="kpi-label">Starred Questions</span>
            <h3>28 Answered</h3>
            <p>100% On-Time Tabling</p>
          </div>
        </div>

        <div className="rep-kpi-card border-green">
          <div className="kpi-icon bg-green"><FileText size={20} color="#15803D" /></div>
          <div>
            <span className="kpi-label">Unstarred Queries</span>
            <h3>64 Answered</h3>
            <p>Lok Sabha &amp; Rajya Sabha</p>
          </div>
        </div>

        <div className="rep-kpi-card border-saffron">
          <div className="kpi-icon bg-saffron"><Shield size={20} color="#C2410C" /></div>
          <div>
            <span className="kpi-label">RTI Compliance</span>
            <h3>100% Resolved</h3>
            <p>Zero Overdue Filings</p>
          </div>
        </div>

        <div className="rep-kpi-card border-purple">
          <div className="kpi-icon bg-purple"><Award size={20} color="#7E22CE" /></div>
          <div>
            <span className="kpi-label">Audited Beneficiaries</span>
            <h3>42.8 Lakh</h3>
            <p>Aspirants Tracked</p>
          </div>
        </div>
      </div>

      {/* 3. Main Workspace Grid */}
      <div className="rep-workspace-grid">
        {/* Left: Configuration Form */}
        <div className="generator-form-card">
          <div className="card-top-title">
            <h3>Legislative Digest Parameters</h3>
            <span className="badge-official">Official Template (Form 14A)</span>
          </div>

          <form className="rep-form-body">
            <div className="form-item">
              <label>Query / Report Classification</label>
              <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
                <option value="Starred Question (Lok Sabha)">Starred Question (Lok Sabha) — Oral Answer</option>
                <option value="Unstarred Question (Rajya Sabha)">Unstarred Question (Rajya Sabha) — Written Answer</option>
                <option value="Annual Performance Audit (NEP 2020)">Annual Performance Audit (NEP 2020)</option>
                <option value="RTI Section 4 Mandatory Disclosure">RTI Section 4 Mandatory Disclosure</option>
              </select>
            </div>

            <div className="form-grid-2">
              <div className="form-item">
                <label>Parliamentary Question Ref No.</label>
                <input type="text" value={questionNo} onChange={(e) => setQuestionNo(e.target.value)} />
              </div>
              <div className="form-item">
                <label>Session Period</label>
                <input type="text" value={sessionPeriod} onChange={(e) => setSessionPeriod(e.target.value)} />
              </div>
            </div>

            <div className="form-item">
              <label>Territorial Scope</label>
              <select value={stateFilter} onChange={(e) => setStateFilter(e.target.value)}>
                <option value="All-India (28 States & 8 UTs)">All-India (28 States &amp; 8 Union Territories)</option>
                <option value="NITI Aspirational Districts (112)">NITI Aspirational Districts (112 Districts)</option>
                <option value="Northern Region">Northern Region (UP, Rajasthan, Punjab, J&amp;K, Ladakh)</option>
                <option value="North East Special Region">North Eastern States (Assam, Tripura, etc.)</option>
              </select>
            </div>

            <div className="metrics-checklist-box">
              <label className="section-sub-label">Include Authenticated Data Modules:</label>
              <div className="chk-grid">
                <label className="chk-label"><input type="checkbox" defaultChecked /> Total Aspirant Registrations (State-wise)</label>
                <label className="chk-label"><input type="checkbox" defaultChecked /> Female &amp; Rural Participation Ratio (46.8%)</label>
                <label className="chk-label"><input type="checkbox" defaultChecked /> NITI Aspirational Districts Progress Matrix</label>
                <label className="chk-label"><input type="checkbox" defaultChecked /> PM e-VIDYA &amp; DD Free Dish Satellite Reach</label>
                <label className="chk-label"><input type="checkbox" defaultChecked /> Zero Student Cost &amp; Free Tier Verification</label>
              </div>
            </div>

            <button type="button" className="btn-generate-digest" onClick={handleGenerate}>
              {generating ? 'Compiling Official Digest...' : 'Recompile Document Preview'}
            </button>
          </form>
        </div>

        {/* Right: Certified Official Document Preview */}
        <div className="official-document-preview-card">
          <div className="doc-paper">
            {/* Document Header */}
            <div className="doc-letterhead">
              <div className="emblem-center">
                <span className="gov-emblem-text">🇮🇳</span>
                <h4>GOVERNMENT OF INDIA • भारत सरकार</h4>
                <h5>MINISTRY OF EDUCATION • शिक्षा मंत्रालय</h5>
                <h6>DEPARTMENT OF HIGHER EDUCATION</h6>
              </div>
              <div className="doc-meta-bar">
                <span>{reportType.toUpperCase()}</span>
                <span>QUESTION NO: {questionNo}</span>
                <span>DATE: 23 AUGUST 2026</span>
              </div>
            </div>

            {/* Document Subject */}
            <div className="doc-subject-box">
              <strong>SUBJECT:</strong> IMPLEMENTATION AND FREE ACCESS METRICS UNDER PARIKSHASETU (NATIONAL AI-POWERED COACHING REPOSITORY)
            </div>

            {/* Document Table */}
            <div className="doc-body-text">
              <p><strong>STATEMENT REFERRED TO IN REPLY TO {questionNo} REGARDING NATIONWIDE STUDENT COACHING:</strong></p>
              
              <div className="doc-stat-table-wrapper">
                <table className="doc-table">
                  <thead>
                    <tr>
                      <th>S.No.</th>
                      <th>Administrative Zone</th>
                      <th>Enrolled Aspirants</th>
                      <th>Aspirational Coverage</th>
                      <th>Female Ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Northern States &amp; UTs (incl. Ladakh &amp; J&amp;K)</td>
                      <td>16,85,000</td>
                      <td>94.2%</td>
                      <td>47.1%</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Western States &amp; UTs</td>
                      <td>10,25,000</td>
                      <td>91.8%</td>
                      <td>46.2%</td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Eastern &amp; North-Eastern States</td>
                      <td>12,40,000</td>
                      <td>96.4%</td>
                      <td>48.5%</td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Southern States &amp; UTs</td>
                      <td>9,80,000</td>
                      <td>89.6%</td>
                      <td>45.4%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="doc-certification-notes">
                <p>
                  (a) Under the National Education Policy (NEP 2020), 100% of study modules, mock examinations, and AI tutoring are provided free of cost with zero commercial advertisements.
                </p>
                <p>
                  (b) Survey of India (13th Edition/2026) verified territorial maps are integrated across all educational analytics.
                </p>
              </div>

              <div className="doc-signature-block">
                <strong>(Dr. A. Sharma, IAS)</strong>
                <span>Joint Secretary to the Government of India</span>
                <span>Ministry of Education, Shastri Bhawan, New Delhi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParliamentaryReports;
