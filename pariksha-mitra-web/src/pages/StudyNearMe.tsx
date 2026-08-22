import React, { useState } from 'react';
import { 
  MapPin, Navigation, Wifi, BookOpen, Building, Monitor, Clock, 
  Users, Calendar, AlertCircle, Sparkles, ShieldCheck, ArrowRight,
  Star, ExternalLink, Compass, CheckCircle2, Zap
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './StudyNearMe.css';

const filters = ['All Spaces', 'Public Libraries', 'PM-WANI Wi-Fi Zones', 'CSC Kiosks', 'Study Cafes'];

const locations = [
  { 
    id: 1, 
    name: 'State Central Public Library & Reading Hall', 
    type: 'Public Library', 
    address: 'Hazratganj, Near High Court, Lucknow', 
    distance: '1.2 km away', 
    timings: '08:00 AM – 09:00 PM', 
    rating: 4.8, 
    open: true, 
    amenities: ['High-Speed Wi-Fi', 'AC Study Hall', 'RO Water', 'Silent Zone'],
    seatsAvailable: '45 Seats Free'
  },
  { 
    id: 2, 
    name: 'PM-WANI Free Sovereign Wi-Fi Hotspot', 
    type: 'PM-WANI Hotspot', 
    address: 'Charbagh Railway Station Concourse, Lucknow', 
    distance: '2.8 km away', 
    timings: '24 Hours Open', 
    rating: 4.5, 
    open: true, 
    amenities: ['100 Mbps Free Wi-Fi', 'Charging Points', 'CCTV Security'],
    seatsAvailable: 'Open Public Access'
  },
  { 
    id: 3, 
    name: 'Gomti Nagar Common Service Center (CSC)', 
    type: 'CSC Kiosk', 
    address: 'Vikas Khand 2, Gomti Nagar, Lucknow', 
    distance: '3.4 km away', 
    timings: '09:00 AM – 06:00 PM', 
    rating: 4.6, 
    open: true, 
    amenities: ['Online Mock Terminals', 'Print & Scan Kiosk', 'Form Submission'],
    seatsAvailable: '12 Terminals Free'
  },
  { 
    id: 4, 
    name: 'Aspirants Knowledge Study Hub & Cafe', 
    type: 'Study Space', 
    address: 'Kapoorthala, Aliganj, Lucknow', 
    distance: '4.1 km away', 
    timings: '07:00 AM – 11:00 PM', 
    rating: 4.9, 
    open: true, 
    amenities: ['Personal Cubicles', 'High Speed Wi-Fi', 'Power Backup', 'Coffee'],
    seatsAvailable: '8 Seats Free'
  }
];

const meetups = [
  { id: 1, topic: 'UPSC Mains GS-2 Answer Writing Group', date: 'Tomorrow, Sunday', time: '04:00 PM', location: 'State Central Library (Room 4)', attendees: '16 Aspirants' },
  { id: 2, topic: 'SSC CGL Tier 1 Math Speed Tricks Meet', date: 'Tuesday', time: '05:30 PM', location: 'Aspirants Knowledge Hub', attendees: '9 Aspirants' }
];

export const StudyNearMe: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Spaces');
  const [searchQuery, setSearchQuery] = useState('Hazratganj, Lucknow (226001)');

  return (
    <div className="snm-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Study Near Me', labelHi: 'निकटतम अध्ययन केंद्र' }
        ]}
        title="Study Near Me & PM-WANI Wi-Fi Finder"
        titleHi="आस-पास के पुस्तकालय, वाई-फाई और अध्ययन केंद्र"
        description="Locate nearby public reading rooms, PM-WANI free sovereign Wi-Fi hotspots, CSC mock test kiosks, and local peer study groups."
        descriptionHi="निकटतम सार्वजनिक पुस्तकालय, पीएम-वाणी वाई-फाई केंद्र और सीएससी कियोस्क खोजें।"
        icon={<MapPin size={28} />}
        badge="PM-WANI & BharatNet GPS"
        actions={
          <div className="snm-hero-location-pill">
            <Navigation size={14} color="#86EFAC" /> <span>Live GPS: Lucknow, UP</span>
          </div>
        }
      />

      <main role="main" className="snm-workspace">
        {/* Search & Location Bar */}
        <section className="snm-search-header-card" aria-label="Search study spaces">
          <div className="snm-search-input-wrap">
            <MapPin size={20} color="#0033A0" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter Pincode, Landmark, or City (e.g. 226001)..."
              className="snm-search-field"
            />
            <button className="snm-locate-btn" aria-label="Use Current GPS Location">
              <Navigation size={16} /> Auto-Detect GPS
            </button>
          </div>

          <div className="snm-filter-chips" role="tablist">
            {filters.map(f => (
              <button 
                key={f}
                className={`snm-chip ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
                role="tab"
                aria-selected={activeFilter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* Dual Layout: Map Preview + Study Location Cards */}
        <div className="snm-dual-grid">
          {/* Left Column: Interactive GIS Map Simulation */}
          <div className="snm-map-column">
            <div className="snm-map-card">
              <div className="map-visual-canvas">
                <div className="map-grid-overlay"></div>

                {/* Map Pins */}
                <div className="map-pin pin-1" title="State Central Library">
                  <div className="pin-pulse-ring"></div>
                  <BookOpen size={16} />
                  <span className="pin-tooltip">State Central Library (1.2 km)</span>
                </div>

                <div className="map-pin pin-2" title="PM-WANI Wi-Fi Zone">
                  <div className="pin-pulse-ring green"></div>
                  <Wifi size={16} />
                  <span className="pin-tooltip">PM-WANI 100 Mbps (2.8 km)</span>
                </div>

                <div className="map-pin pin-user" title="Your Current Location">
                  <Navigation size={18} />
                  <span className="pin-tooltip user">You are here</span>
                </div>

                <div className="map-controls-overlay">
                  <span className="map-source-tag"><ShieldCheck size={12} /> Bhashini / BharatMaps GIS</span>
                </div>
              </div>

              {/* Physical Study Meetups Banner */}
              <div className="snm-meetups-box">
                <div className="meetups-head">
                  <Users size={18} color="#0033A0" />
                  <strong>Peer Study Meetups This Week</strong>
                </div>

                <div className="meetup-cards-list">
                  {meetups.map(m => (
                    <div key={m.id} className="meetup-mini-card">
                      <div>
                        <h4 className="meetup-topic">{m.topic}</h4>
                        <span className="meetup-time">{m.date} • {m.time} • {m.location}</span>
                      </div>
                      <button className="meetup-join-btn">Join ({m.attendees})</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Location Cards Grid */}
          <div className="snm-places-column">
            <div className="snm-places-list">
              {locations.map(place => (
                <article key={place.id} className="snm-place-card">
                  <div className="place-card-top">
                    <div className="place-type-lockup">
                      <span className="place-type-pill">{place.type}</span>
                      <span className="place-dist">{place.distance}</span>
                    </div>
                    <span className="place-seats-free">
                      <Zap size={13} color="#16A34A" /> {place.seatsAvailable}
                    </span>
                  </div>

                  <h3 className="place-name">{place.name}</h3>
                  <p className="place-address"><MapPin size={14} /> {place.address}</p>

                  <div className="place-amenities-row">
                    {place.amenities.map(a => (
                      <span key={a} className="amenity-chip">{a}</span>
                    ))}
                  </div>

                  <div className="place-card-footer">
                    <span className="place-timing"><Clock size={12} /> {place.timings}</span>
                    <button className="place-nav-btn">
                      Get Directions <ExternalLink size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default StudyNearMe;
