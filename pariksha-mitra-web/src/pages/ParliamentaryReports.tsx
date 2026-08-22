import React from 'react';
import { FileText, Download, Printer } from 'lucide-react';
import './ParliamentaryReports.css';

const ParliamentaryReports: React.FC = () => {
  return (
    <div className="reports-page">
      <div className="reports-header">
        <h1>Parliamentary & Official Reports</h1>
        <p>Generate formal reports for RTI queries and ministry reviews</p>
      </div>

      <div className="reports-grid">
        <div className="generator-card">
          <h2>Report Generator</h2>
          <form className="report-form">
            <div className="form-group">
              <label>Report Type</label>
              <select>
                <option>Parliamentary Question Response (Starred)</option>
                <option>Parliamentary Question Response (Unstarred)</option>
                <option>Quarterly Performance Review</option>
                <option>RTI Response Data</option>
              </select>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>From Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>To Date</label>
                <input type="date" />
              </div>
            </div>
            <div className="form-group">
              <label>Include Metrics</label>
              <div className="metrics-grid">
                <label><input type="checkbox" defaultChecked /> Registration Stats</label>
                <label><input type="checkbox" defaultChecked /> State-wise Data</label>
                <label><input type="checkbox" defaultChecked /> Exam Categories</label>
                <label><input type="checkbox" /> Financials (Budget)</label>
                <label><input type="checkbox" /> Server Uptime</label>
              </div>
            </div>
            <button type="button" className="btn-primary mt-4">Generate Preview</button>
          </form>
        </div>

        <div className="preview-card">
          <div className="preview-header">
            <h2>Document Preview</h2>
            <div className="actions">
              <button className="btn-icon"><Printer size={18}/></button>
              <button className="btn-icon"><Download size={18}/></button>
            </div>
          </div>
          <div className="document-mock">
            <div className="doc-header">
              <img src="/emblem.svg" alt="Emblem" style={{width: 50, filter: 'grayscale(1)'}} />
              <h3>Government of India</h3>
              <h4>Ministry of Education</h4>
            </div>
            <div className="doc-body">
              <p className="subject"><strong>Subject:</strong> Status of Pariksha Mitra National Platform implementation</p>
              <p>In response to the query regarding the digital education initiative, the following data is submitted for the period specified:</p>
              <ul>
                <li>Total active registrations stand at <strong>42,35,678</strong>.</li>
                <li>Highest participation observed from Uttar Pradesh, Maharashtra, and Bihar.</li>
                <li>Over 2,450 hours of free educational content has been provisioned.</li>
              </ul>
              <p className="footer-note">*Generated automatically from live platform data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParliamentaryReports;
