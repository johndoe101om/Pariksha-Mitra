import React from 'react';
import { AlertCircle, Clock, CheckCircle2, Ticket } from 'lucide-react';
import './GrievanceDashboard.css';

const GrievanceDashboard: React.FC = () => {
  const tickets = [
    { id: 'TKT-8921', student: 'Ramesh K.', issue: 'Unable to load mock test', status: 'Open', priority: 'High', time: '2 hrs ago' },
    { id: 'TKT-8920', student: 'Priya S.', issue: 'OTP not received for registration', status: 'In Progress', priority: 'Medium', time: '4 hrs ago' },
    { id: 'TKT-8915', student: 'Amit D.', issue: 'Video playback stuttering', status: 'Resolved', priority: 'Low', time: '1 day ago' },
  ];

  return (
    <div className="grievance-page">
      <div className="grievance-header">
        <h1>Student Grievance & Support</h1>
      </div>

      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-icon-wrap bg-red"><AlertCircle /></div>
          <div>
            <h3>234</h3>
            <p>Open Tickets</p>
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon-wrap bg-green"><CheckCircle2 /></div>
          <div>
            <h3>45</h3>
            <p>Resolved Today</p>
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon-wrap bg-blue"><Clock /></div>
          <div>
            <h3>4.2 hrs</h3>
            <p>Avg Resolution Time</p>
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-icon-wrap bg-purple"><Ticket /></div>
          <div>
            <h3>96%</h3>
            <p>SLA Compliance</p>
          </div>
        </div>
      </div>

      <div className="tickets-section">
        <div className="table-card full-width">
          <div className="card-header-flex">
            <h2>Active Tickets</h2>
            <div className="filters">
              <select><option>Status: All</option></select>
              <select><option>Priority: All</option></select>
            </div>
          </div>
          <table className="ministry-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Student</th>
                <th>Issue Summary</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Created</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(t => (
                <tr key={t.id}>
                  <td><strong>{t.id}</strong></td>
                  <td>{t.student}</td>
                  <td>{t.issue}</td>
                  <td><span className={`badge ${t.priority.toLowerCase()}`}>{t.priority}</span></td>
                  <td><span className={`status-badge ${t.status.replace(' ', '-').toLowerCase()}`}>{t.status}</span></td>
                  <td>{t.time}</td>
                  <td><button className="btn-text">Review</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GrievanceDashboard;
