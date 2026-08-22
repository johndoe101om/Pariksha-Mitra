import React, { useState } from 'react';
import { Calendar, Plus, Clock, Users, Video } from 'lucide-react';
import './LiveClassScheduler.css';

const LiveClassScheduler: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const upcomingClasses = [
    { id: 1, title: 'Constitution Framework', teacher: 'Dr. Sharma', time: '10:00 AM Today', enrolled: 4500, exam: 'UPSC' },
    { id: 2, title: 'Advanced Algebra', teacher: 'Prof. Verma', time: '2:00 PM Today', enrolled: 3200, exam: 'SSC' }
  ];

  return (
    <div className="scheduler-page">
      <div className="scheduler-header">
        <h1>Live Class Operations</h1>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} /> Schedule New Class
        </button>
      </div>

      <div className="scheduler-layout">
        <div className="calendar-view">
          <div className="calendar-placeholder">
            <h3>Calendar View</h3>
            <p>Select dates to view scheduled operations</p>
            {/* Real implementation would use fullcalendar or similar */}
            <div className="mock-calendar">
               <div className="mock-day active">
                 <span className="date">24</span>
                 <div className="event blue">UPSC History (10 AM)</div>
                 <div className="event green">SSC Math (2 PM)</div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="upcoming-list">
          <h2>Upcoming Today</h2>
          {upcomingClasses.map(cls => (
            <div key={cls.id} className="upcoming-card">
              <div className="card-top">
                <span className="exam-badge">{cls.exam}</span>
                <span className="time"><Clock size={14} /> {cls.time}</span>
              </div>
              <h3>{cls.title}</h3>
              <p>by {cls.teacher}</p>
              <div className="card-stats">
                <span><Users size={14}/> {cls.enrolled} enrolled</span>
                <span><Video size={14}/> DD Free Dish Simulcast</span>
              </div>
              <div className="card-actions">
                <button className="btn-outline-sm">Edit</button>
                <button className="btn-outline-sm red">Cancel</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Schedule New Live Class</h2>
            <form className="schedule-form">
              <div className="form-group">
                <label>Class Title</label>
                <input type="text" placeholder="e.g. Introduction to Polity" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Teacher</label>
                  <select><option>Select verified educator</option></select>
                </div>
                <div className="form-group">
                  <label>Exam</label>
                  <select><option>UPSC</option></select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input type="time" />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn-outline" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="button" className="btn-primary" onClick={() => setShowModal(false)}>Schedule</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveClassScheduler;
