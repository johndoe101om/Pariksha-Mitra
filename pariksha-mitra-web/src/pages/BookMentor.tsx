import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  CheckCircle, Star, Calendar, Clock, ChevronLeft, ChevronRight, 
  Info, ShieldCheck, ArrowLeft, ArrowRight, Video, Sparkles, BookOpen 
} from 'lucide-react';
import { MENTORS_LIST, saveBooking, MentorBooking } from '../data/mentorsData';
import './BookMentor.css';

const BookMentor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find selected mentor or default to first
  const mentor = MENTORS_LIST.find(m => m.id === id) || MENTORS_LIST[0];

  const [selectedDate, setSelectedDate] = useState<number>(24);
  const [selectedMonth] = useState('August 2026');
  const [selectedSlot, setSelectedSlot] = useState<string>(mentor.availableSlots[0] || '10:00 AM');
  const [sessionType, setSessionType] = useState('Strategy & Study Plan Discussion');
  const [notes, setNotes] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [createdBookingId, setCreatedBookingId] = useState('');

  const sessionTypes = [
    'Strategy & Study Plan Discussion',
    'Mains Answer Writing & Evaluation',
    'Subject Doubts & Concept Mastery',
    'Mock Interview & Personality Test'
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const newBookingId = `book-${Date.now().toString().slice(-6)}`;
    
    const newBooking: MentorBooking = {
      id: newBookingId,
      mentorId: mentor.id,
      mentorName: mentor.name,
      mentorTitle: mentor.title,
      date: `${selectedMonth.split(' ')[0]} ${selectedDate}, 2026`,
      timeSlot: selectedSlot,
      sessionType: sessionType,
      notes: notes.trim() || 'General guidance & subject roadmap discussion.',
      status: 'upcoming',
      createdAt: new Date().toISOString()
    };

    saveBooking(newBooking);
    setCreatedBookingId(newBookingId);
    setShowModal(true);
  };

  return (
    <div className="book-mentor-container">
      {/* Top Navigation */}
      <div className="bm-top-nav">
        <button className="btn-back-link" onClick={() => navigate('/mentors')}>
          <ArrowLeft size={18} /> Back to All Mentors
        </button>
        <span className="bm-gov-badge">
          <ShieldCheck size={16} /> Ministry of Education 1-on-1 Mentorship
        </span>
      </div>

      <div className="bm-layout-grid">
        {/* LEFT COLUMN: Mentor Profile & Achievements */}
        <div className="bm-left-col">
          <div className="bm-mentor-card">
            <div className="bm-profile-header">
              <div className="bm-avatar" style={{ backgroundColor: mentor.avatarColor }}>
                {mentor.initials}
              </div>
              <div className="bm-info">
                <div className="bm-name-row">
                  <h2>{mentor.name}</h2>
                  {mentor.verified && <CheckCircle className="bm-verified-icon" size={20} />}
                </div>
                <p className="bm-title">{mentor.title}</p>
                <div className="bm-rating-pill">
                  <Star fill="#FE6500" size={15} color="#FE6500" />
                  <strong>{mentor.rating}</strong>
                  <span>({mentor.reviews} student reviews)</span>
                </div>
              </div>
            </div>

            <div className="bm-section">
              <h4>About the Mentor</h4>
              <p className="bm-bio">{mentor.bio}</p>
            </div>

            <div className="bm-section">
              <h4>Qualifications & Credentials</h4>
              <ul className="bm-qualifications-list">
                {mentor.qualifications.map((q, i) => (
                  <li key={i}>
                    <CheckCircle size={15} className="bm-list-icon" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bm-metrics-grid">
              {mentor.metrics.map((m, i) => (
                <div key={i} className="bm-metric-box">
                  <span className="bm-metric-val">{m.value}</span>
                  <span className="bm-metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="bm-section">
              <h4>Recent Aspirant Feedback</h4>
              <div className="bm-reviews-list">
                {mentor.testimonials.map((t, i) => (
                  <div key={i} className="bm-review-item">
                    <div className="bm-review-stars">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} fill="#FE6500" size={13} color="#FE6500"/>
                      ))}
                    </div>
                    <p className="bm-review-text">"{t.text}"</p>
                    <p className="bm-review-author">— {t.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Booking Form */}
        <div className="bm-right-col">
          <form className="bm-booking-form-card" onSubmit={handleBooking}>
            <div className="form-header">
              <h3>Schedule Your 1-on-1 Session</h3>
              <p>Choose an available slot for a 30-minute private HD video conference.</p>
            </div>

            {/* Calendar Date Picker */}
            <div className="bm-form-section">
              <label className="bm-field-label">
                <Calendar size={18} /> Select Date ({selectedMonth})
              </label>
              <div className="bm-calendar-widget">
                <div className="bm-cal-header">
                  <button type="button" className="cal-nav-btn"><ChevronLeft size={18}/></button>
                  <span className="cal-month-title">{selectedMonth}</span>
                  <button type="button" className="cal-nav-btn"><ChevronRight size={18}/></button>
                </div>
                <div className="bm-cal-weekdays">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
                    <div key={d} className="bm-cal-day-name">{d}</div>
                  ))}
                </div>
                <div className="bm-cal-grid">
                  {[21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((date) => (
                    <button
                      type="button"
                      key={date}
                      className={`bm-cal-date-btn ${selectedDate === date ? 'active' : ''}`}
                      onClick={() => setSelectedDate(date)}
                    >
                      <span className="date-number">{date}</span>
                      <span className="date-sub">Aug</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Time Slots */}
            <div className="bm-form-section">
              <label className="bm-field-label">
                <Clock size={18} /> Select Time Slot (30 Mins)
              </label>
              <div className="bm-slots-grid">
                {mentor.availableSlots.map(slot => (
                  <button 
                    type="button"
                    key={slot} 
                    className={`bm-slot-pill ${selectedSlot === slot ? 'active' : ''}`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    <Clock size={14} /> {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Session Type */}
            <div className="bm-form-section">
              <label className="bm-field-label">
                <BookOpen size={18} /> Mentorship Focus Area
              </label>
              <div className="bm-session-types-list">
                {sessionTypes.map(type => (
                  <button 
                    type="button"
                    key={type} 
                    className={`bm-type-card ${sessionType === type ? 'active' : ''}`}
                    onClick={() => setSessionType(type)}
                  >
                    <span className="radio-dot"></span>
                    <span className="type-title">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Discussion Notes */}
            <div className="bm-form-section">
              <label className="bm-field-label">
                <Info size={18} /> Questions or Doubts to Discuss (Optional)
              </label>
              <textarea 
                className="bm-notes-textarea"
                placeholder="E.g., I need feedback on my Modern History timeline and GS-2 Polity answer writing speed..." 
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Booking Summary Box */}
            <div className="bm-booking-summary-box">
              <div className="summary-row">
                <span>Mentor</span>
                <strong>{mentor.name}</strong>
              </div>
              <div className="summary-row">
                <span>Selected Schedule</span>
                <strong>August {selectedDate}, 2026 at {selectedSlot}</strong>
              </div>
              <div className="summary-row">
                <span>Format</span>
                <strong>1-on-1 Live Video Call (30 Mins)</strong>
              </div>
              <div className="summary-price-row">
                <span>Session Fee</span>
                <span className="free-tag">₹0 Free (Govt. Backed)</span>
              </div>
            </div>

            <button type="submit" className="btn-confirm-booking">
              Confirm & Schedule Session <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="bm-modal-overlay">
          <div className="bm-modal-card">
            <div className="bm-modal-success-icon">
              <CheckCircle size={54} color="#024A00" />
            </div>
            <h2>Mentorship Session Confirmed! 🎉</h2>
            <p className="bm-modal-subtitle">
              Your 1-on-1 guidance session with <strong>{mentor.name}</strong> is scheduled.
            </p>

            <div className="bm-modal-details-card">
              <div className="modal-det-item">
                <Calendar size={18} color="#0033A0" />
                <div>
                  <span className="det-label">Date</span>
                  <strong>August {selectedDate}, 2026</strong>
                </div>
              </div>
              <div className="modal-det-item">
                <Clock size={18} color="#0033A0" />
                <div>
                  <span className="det-label">Time</span>
                  <strong>{selectedSlot} (30 Minutes)</strong>
                </div>
              </div>
              <div className="modal-det-item">
                <Video size={18} color="#0033A0" />
                <div>
                  <span className="det-label">Meeting Room</span>
                  <strong>ParikshaSetu HD Room #{createdBookingId.substring(0, 8)}</strong>
                </div>
              </div>
            </div>

            <p className="bm-modal-notice">
              📧 An invitation with meeting instructions has been saved to your dashboard. You can join the room directly.
            </p>

            <div className="bm-modal-actions">
              <button 
                className="btn-modal-join-now"
                onClick={() => navigate(`/mentors/session/${createdBookingId}`)}
              >
                <Video size={18} /> Join Video Room Now
              </button>
              <button 
                className="btn-modal-view-bookings"
                onClick={() => navigate('/mentors')}
              >
                View My Bookings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookMentor;
