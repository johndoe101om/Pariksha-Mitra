import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Star, CheckCircle, Clock, ArrowRight, Video, 
  Calendar, Users, Award, ShieldCheck, Sparkles, BookOpen, 
  ChevronRight, AlertCircle, X
} from 'lucide-react';
import { MENTORS_LIST, Mentor, getStoredBookings, MentorBooking } from '../data/mentorsData';
import './BrowseMentors.css';

export default function BrowseMentors() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'browse' | 'my-bookings'>('browse');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [bookings, setBookings] = useState<MentorBooking[]>([]);
  const [cancelModalBooking, setCancelModalBooking] = useState<MentorBooking | null>(null);

  useEffect(() => {
    setBookings(getStoredBookings());
  }, []);

  const categories = ['All', 'UPSC', 'SSC', 'Banking', 'Railway', 'Medical'];

  const filteredMentors = MENTORS_LIST.filter(mentor => {
    const matchesCategory = selectedCategory === 'All' || mentor.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mentor.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLanguage = selectedLanguage === 'All' || mentor.languages.includes(selectedLanguage);
    return matchesCategory && matchesSearch && matchesLanguage;
  });

  const handleCancelBooking = (bookingId: string) => {
    const updated = bookings.filter(b => b.id !== bookingId);
    setBookings(updated);
    try {
      localStorage.setItem('pariksha_mitra_mentor_bookings', JSON.stringify(updated));
    } catch (e) {}
    setCancelModalBooking(null);
  };

  return (
    <div className="browse-mentors-container">
      {/* Top Banner */}
      <div className="mentors-hero-banner">
        <div className="hero-badge">
          <ShieldCheck size={16} /> 100% Free Sovereign Mentorship • Govt. of India
        </div>
        <h1 className="hero-title">1-on-1 Mentorship with Toppers & Officers</h1>
        <p className="hero-subtitle">
          Connect directly via HD video with UPSC AIR rankers, retired IAS officers, and national subject experts. Zero fees.
        </p>

        {/* Quick Tabs */}
        <div className="mentors-main-tabs">
          <button 
            className={`mentor-tab-btn ${activeTab === 'browse' ? 'active' : ''}`}
            onClick={() => setActiveTab('browse')}
          >
            <Users size={18} /> Browse Mentors ({MENTORS_LIST.length})
          </button>
          <button 
            className={`mentor-tab-btn ${activeTab === 'my-bookings' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-bookings')}
          >
            <Calendar size={18} /> My Bookings
            {bookings.length > 0 && <span className="bookings-pill-badge">{bookings.length}</span>}
          </button>
        </div>
      </div>

      {activeTab === 'browse' ? (
        <>
          {/* Active Upcoming Booking Quick Alert */}
          {bookings.length > 0 && (
            <div className="active-booking-callout">
              <div className="callout-left">
                <div className="live-pulse-dot"></div>
                <div>
                  <strong>Upcoming Session: {bookings[0].mentorName} ({bookings[0].sessionType})</strong>
                  <p className="callout-meta">{bookings[0].date} at {bookings[0].timeSlot} • 30 mins video session</p>
                </div>
              </div>
              <button 
                className="btn-join-callout"
                onClick={() => navigate(`/mentors/session/${bookings[0].id}`)}
              >
                <Video size={16} /> Join Video Room <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* Search and Category Filters */}
          <div className="mentors-filter-toolbar">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search by mentor name, exam, optional subject, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm('')}>
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="lang-filter-select">
              <span>Language:</span>
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="All">All Languages</option>
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
                <option value="Marathi">Marathi</option>
              </select>
            </div>
          </div>

          {/* Exam Category Pills */}
          <div className="exam-category-pills">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`cat-pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'All' ? '🌟 All Exams' : cat}
              </button>
            ))}
          </div>

          {/* Mentors Grid */}
          <div className="mentor-cards-grid">
            {filteredMentors.map(mentor => (
              <div key={mentor.id} className="mentor-card">
                <div className="card-top">
                  <div className="avatar-wrapper" style={{ backgroundColor: mentor.avatarColor }}>
                    {mentor.initials}
                  </div>
                  <div className="mentor-headline">
                    <div className="name-verified-row">
                      <h3 className="mentor-name">{mentor.name}</h3>
                      {mentor.verified && (
                        <span className="verified-chip" title="Govt. Verified Topper">
                          <CheckCircle size={14} /> Verified
                        </span>
                      )}
                    </div>
                    <p className="mentor-title-text">{mentor.title}</p>
                  </div>
                </div>

                <p className="mentor-bio-text">{mentor.bio}</p>

                {/* Tags */}
                <div className="tags-container">
                  {mentor.tags.map(tag => (
                    <span key={tag} className="mentor-tag-chip">{tag}</span>
                  ))}
                </div>

                {/* Rating & Availability strip */}
                <div className="mentor-stats-strip">
                  <div className="rating-box">
                    <Star size={16} fill="#FE6500" color="#FE6500" />
                    <strong>{mentor.rating}</strong>
                    <span className="rev-count">({mentor.reviews})</span>
                  </div>
                  <div className="avail-box">
                    <span className={`avail-status-dot ${mentor.availability}`}></span>
                    <span className="avail-label">{mentor.availabilityText}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="card-bottom-actions">
                  <div className="free-fee-badge">
                    <span className="fee-amt">₹0</span>
                    <span className="fee-note">Free Session</span>
                  </div>
                  <button 
                    className="btn-book-mentor"
                    onClick={() => navigate(`/mentors/${mentor.id}/book`)}
                  >
                    Book Session <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredMentors.length === 0 && (
            <div className="no-mentors-state">
              <AlertCircle size={40} color="#0033A0" />
              <h3>No mentors match your search criteria</h3>
              <p>Try clearing filters or searching with different keywords.</p>
              <button 
                className="btn-reset-filters" 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedLanguage('All'); }}
              >
                Reset All Filters
              </button>
            </div>
          )}
        </>
      ) : (
        /* My Bookings Tab */
        <div className="my-bookings-section">
          {bookings.length > 0 ? (
            <div className="bookings-list-grid">
              {bookings.map(booking => (
                <div key={booking.id} className="booking-card">
                  <div className="booking-card-header">
                    <div className="booking-status-badge upcoming">
                      <Clock size={14} /> Confirmed Slot
                    </div>
                    <span className="booking-id-text">Ref: #{booking.id.substring(0, 8)}</span>
                  </div>

                  <div className="booking-mentor-info">
                    <div className="booking-avatar">
                      {booking.mentorName.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <div>
                      <h3 className="booking-mentor-name">{booking.mentorName}</h3>
                      <p className="booking-mentor-title">{booking.mentorTitle}</p>
                    </div>
                  </div>

                  <div className="booking-details-box">
                    <div className="detail-item">
                      <Calendar size={16} />
                      <div>
                        <span className="det-label">Date</span>
                        <strong>{booking.date}</strong>
                      </div>
                    </div>
                    <div className="detail-item">
                      <Clock size={16} />
                      <div>
                        <span className="det-label">Time & Duration</span>
                        <strong>{booking.timeSlot} (30 Mins)</strong>
                      </div>
                    </div>
                    <div className="detail-item">
                      <BookOpen size={16} />
                      <div>
                        <span className="det-label">Focus Area</span>
                        <strong>{booking.sessionType}</strong>
                      </div>
                    </div>
                  </div>

                  {booking.notes && (
                    <div className="booking-notes-preview">
                      <span className="notes-tag">Discussion Agenda:</span> {booking.notes}
                    </div>
                  )}

                  <div className="booking-card-actions">
                    <button 
                      className="btn-join-session"
                      onClick={() => navigate(`/mentors/session/${booking.id}`)}
                    >
                      <Video size={18} /> Join Video Session
                    </button>
                    <button 
                      className="btn-cancel-session"
                      onClick={() => setCancelModalBooking(booking)}
                    >
                      Cancel / Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-bookings-empty">
              <Calendar size={48} color="#0033A0" />
              <h3>No Mentorship Sessions Booked Yet</h3>
              <p>Schedule a free 1-on-1 strategy call with verified UPSC & SSC toppers.</p>
              <button 
                className="btn-browse-cta"
                onClick={() => setActiveTab('browse')}
              >
                Browse Available Mentors <ArrowRight size={18} />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Cancel Confirmation Modal */}
      {cancelModalBooking && (
        <div className="cancel-modal-overlay">
          <div className="cancel-modal-card">
            <h3>Cancel Mentorship Session?</h3>
            <p>
              Are you sure you want to cancel your session with <strong>{cancelModalBooking.mentorName}</strong> scheduled for <strong>{cancelModalBooking.date} at {cancelModalBooking.timeSlot}</strong>?
            </p>
            <div className="cancel-modal-actions">
              <button 
                className="btn-modal-back" 
                onClick={() => setCancelModalBooking(null)}
              >
                Keep Session
              </button>
              <button 
                className="btn-modal-confirm-cancel" 
                onClick={() => handleCancelBooking(cancelModalBooking.id)}
              >
                Yes, Cancel Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
