import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  PlayCircle, 
  PenTool, 
  FileText, 
  MessageSquare, 
  Users, 
  Trophy, 
  User, 
  Settings,
  Search,
  Bell,
  Menu,
  X,
  LogOut,
  Bot,
  Eye,
  Server,
  ShieldCheck,
  Globe,
  TrendingUp,
  Smartphone,
  School,
  Mic,
  Landmark,
  UsersRound,
  CalendarClock,
  Newspaper,
  PenLine,
  Compass,
  Accessibility,
  WifiOff,
  GraduationCap,
  Video,
  MapPin,
  Heart
} from 'lucide-react';
import './AppLayout.css';
import ParikshaMitraLogo from '../components/ParikshaMitraLogo';
import FloatingVoiceAssistant from '../components/FloatingVoiceAssistant';

const AppLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userInitials, setUserInitials] = useState('RK');
  const [userName, setUserName] = useState('Rahul Kumar');
  const [userEmail, setUserEmail] = useState('rahul.aspirant@gov.in');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [activeLang, setActiveLang] = useState<'en' | 'hi'>('en');
  
  const navigate = useNavigate();

  useEffect(() => {
    const userDataStr = localStorage.getItem('pariksha_mitra_user');
    if (userDataStr) {
      try {
        const userData = JSON.parse(userDataStr);
        if (userData.name) {
          setUserName(userData.name);
          const initials = userData.name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase();
          setUserInitials(initials || 'RK');
        }
        if (userData.email) {
          setUserEmail(userData.email);
        }
      } catch (e) {}
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('pariksha_mitra_logged_in');
    navigate('/');
  };

  const navItems = [
    { name: 'Dashboard', nameHi: 'डैशबोर्ड', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Syllabus', nameHi: 'पाठ्यक्रम', path: '/syllabus', icon: <BookOpen size={20} /> },
    { name: 'AI Diagnostic', nameHi: 'योग्यता मूल्यांकन', path: '/diagnostic', icon: <Bot size={20} /> },
    { name: 'Videos', nameHi: 'वीडियो व्याख्यान', path: '/videos', icon: <PlayCircle size={20} /> },
    { name: 'Practice', nameHi: 'अभ्यास केंद्र', path: '/practice', icon: <PenTool size={20} /> },
    { name: 'Mock Tests', nameHi: 'मॉक टेस्ट', path: '/mock-tests', icon: <FileText size={20} /> },
    { name: 'Doubt Solver', nameHi: 'संशय समाधान', path: '/doubt-solver', icon: <MessageSquare size={20} /> },
    { name: 'Mentorship', nameHi: 'मार्गदर्शन', path: '/mentors', icon: <Users size={20} /> },
    { name: 'Leaderboard', nameHi: 'मेरिट सूची', path: '/leaderboard', icon: <Trophy size={20} /> },
  ];

  const newFeatureNavItems = [
    { name: 'Exam Predictor', nameHi: 'परीक्षा भविष्यवक्ता', path: '/exam-predictor', icon: <TrendingUp size={20} /> },
    { name: 'WhatsApp Study', nameHi: 'व्हाट्सएप अध्ययन', path: '/whatsapp-bot', icon: <Smartphone size={20} /> },
    { name: 'Voice Assistant', nameHi: 'वॉयस सहायक', path: '/voice-assistant', icon: <Mic size={20} /> },
    { name: 'Current Affairs', nameHi: 'समसामयिक घटनाएं', path: '/current-affairs', icon: <Newspaper size={20} /> },
    { name: 'Study Planner', nameHi: 'अध्ययन योजना', path: '/study-planner', icon: <CalendarClock size={20} /> },
    { name: 'Study Groups', nameHi: 'अध्ययन समूह', path: '/study-groups', icon: <UsersRound size={20} /> },
    { name: 'Answer Writing', nameHi: 'उत्तर लेखन', path: '/answer-writing', icon: <PenLine size={20} /> },
    { name: 'Career Guidance', nameHi: 'कैरियर मार्गदर्शन', path: '/career-guidance', icon: <Compass size={20} /> },
    { name: 'Scholarships', nameHi: 'छात्रवृत्ति', path: '/scholarships', icon: <GraduationCap size={20} /> },
    { name: 'Interview Prep', nameHi: 'साक्षात्कार अभ्यास', path: '/interview-simulator', icon: <Video size={20} /> },
    { name: 'Study Near Me', nameHi: 'पास में पढ़ें', path: '/study-near-me', icon: <MapPin size={20} /> },
    { name: 'Offline Hub', nameHi: 'ऑफलाइन केंद्र', path: '/offline-hub', icon: <WifiOff size={20} /> },
    { name: 'School Portal', nameHi: 'विद्यालय पोर्टल', path: '/school', icon: <School size={20} /> },
    { name: 'UMANG Services', nameHi: 'उमंग सेवाएं', path: '/umang', icon: <Landmark size={20} /> },
    { name: 'Accessibility', nameHi: 'सुगम्यता', path: '/accessibility', icon: <Accessibility size={20} /> },
    { name: 'Parent View', nameHi: 'अभिभावक दृश्य', path: '/parent-dashboard', icon: <Heart size={20} /> },
  ];

  const bottomNavItems = [
    { name: 'Home', path: '/dashboard', icon: <LayoutDashboard size={24} /> },
    { name: 'Videos', path: '/videos', icon: <PlayCircle size={24} /> },
    { name: 'Practice', path: '/practice', icon: <PenTool size={24} /> },
    { name: 'Tests', path: '/mock-tests', icon: <FileText size={24} /> },
    { name: 'Profile', path: '/profile', icon: <User size={24} /> },
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className={`app-layout ${highContrast ? 'high-contrast-mode' : ''} font-${fontSize}`}>
      {/* 1. Official GIGW 3.0 Tricolor Ribbon */}
      <div className="app-tricolor-strip">
        <div className="tri-saffron"></div>
        <div className="tri-white"></div>
        <div className="tri-green"></div>
      </div>

      {/* 2. Official Sovereign Utility Header */}
      <div className="gov-header">
        <div className="gov-header-content">
          <div className="gov-branding">
            <span className="gov-flag">🇮🇳</span>
            <span className="gov-text-en">GOVERNMENT OF INDIA</span>
            <span className="gov-sep">|</span>
            <span className="gov-text-hi">भारत सरकार</span>
            <span className="gov-sep">|</span>
            <span className="gov-text">Ministry of Education (शिक्षा मंत्रालय)</span>
          </div>

          <div className="gov-header-right">
            {/* GIGW Accessibility Tools */}
            <div className="access-tools-group">
              <span className="access-lbl">Accessibility:</span>
              <button 
                className={`font-btn ${fontSize === 'normal' ? 'active' : ''}`}
                onClick={() => setFontSize('normal')}
                title="Default Font Size"
              >
                A
              </button>
              <button 
                className={`font-btn ${fontSize === 'large' ? 'active' : ''}`}
                onClick={() => setFontSize('large')}
                title="Large Font Size"
              >
                A+
              </button>
              <button 
                className={`contrast-btn ${highContrast ? 'active' : ''}`}
                onClick={() => setHighContrast(!highContrast)}
                title="Toggle High Contrast"
              >
                <Eye size={12} /> Contrast
              </button>
            </div>

            <span className="gov-sep">|</span>

            {/* Language Switcher */}
            <div className="lang-toggle">
              <button 
                className={`lang-btn ${activeLang === 'en' ? 'active' : ''}`}
                onClick={() => setActiveLang('en')}
              >
                EN
              </button>
              <span className="lang-sep">|</span>
              <button 
                className={`lang-btn ${activeLang === 'hi' ? 'active' : ''}`}
                onClick={() => setActiveLang('hi')}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="app-container">
        {/* Sidebar */}
        <aside className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-header">
            <div className="sidebar-brand-box" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
              <ParikshaMitraLogo theme="dark" height={44} />
            </div>
            <button className="close-menu-btn" onClick={closeMobileMenu}>
              <X size={24} />
            </button>
          </div>
          
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon-wrap">{item.icon}</span>
                <div className="nav-label-block">
                  <span className="nav-label">{activeLang === 'hi' ? item.nameHi : item.name}</span>
                  <span className="nav-sublabel">{activeLang === 'hi' ? item.name : item.nameHi}</span>
                </div>
              </NavLink>
            ))}

            {/* New Features Section */}
            <div className="nav-section-divider">
              <span className="nav-section-label">
                {activeLang === 'hi' ? 'नई सरकारी सुविधाएं' : 'New Features'} <span className="hi">{activeLang === 'hi' ? 'New Features' : 'नई सुविधाएं'}</span>
              </span>
            </div>
            {newFeatureNavItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav-icon-wrap">{item.icon}</span>
                <div className="nav-label-block">
                  <span className="nav-label">{activeLang === 'hi' ? item.nameHi : item.name}</span>
                  <span className="nav-sublabel">{activeLang === 'hi' ? item.name : item.nameHi}</span>
                </div>
              </NavLink>
            ))}
          </nav>
          
          <div className="sidebar-footer">
            <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              <User size={20} />
              <div className="nav-label-block">
                <span className="nav-label">{activeLang === 'hi' ? 'प्रोफ़ाइल' : 'Profile'}</span>
                <span className="nav-sublabel">{activeLang === 'hi' ? 'Profile' : 'प्रोफ़ाइल'}</span>
              </div>
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={closeMobileMenu}>
              <Settings size={20} />
              <div className="nav-label-block">
                <span className="nav-label">{activeLang === 'hi' ? 'सेटिंग्स व 2G' : 'Settings & 2G'}</span>
                <span className="nav-sublabel">{activeLang === 'hi' ? 'Settings' : 'सेटिंग्स व डेटा सेवर'}</span>
              </div>
            </NavLink>

            {/* Cloud Sovereign Security Seal */}
            <div className="sidebar-cloud-seal">
              <ShieldCheck size={14} color="#0033A0" />
              <span>NIC MeghRaj Sovereign Cloud</span>
            </div>
          </div>
        </aside>

        {mobileMenuOpen && <div className="sidebar-overlay" onClick={closeMobileMenu}></div>}

        <div className="main-wrapper">
          {/* Topbar */}
          <header className="topbar">
            <div className="topbar-left">
              <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
              
              <div className="search-container">
                <Search size={18} className="search-icon" />
                <input 
                  type="text" 
                  placeholder={activeLang === 'hi' ? 'पाठ्यक्रम, वीडियो व्याख्यान, मॉक टेस्ट खोजें...' : 'Search syllabus, lectures, mock tests...'} 
                  className="search-input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      navigate('/videos');
                    }
                  }}
                />
              </div>
            </div>
            
            <div className="topbar-right">
              {/* Notification Bell */}
              <div style={{ position: 'relative' }}>
                <button className="icon-btn" onClick={() => setNotificationsOpen(!notificationsOpen)} title="Notifications">
                  <Bell size={20} />
                  <span className="badge">5</span>
                </button>
                {notificationsOpen && (
                  <div className="notifications-dropdown">
                    <div className="notif-dropdown-head">
                      <h4>सद्यतन सूचनाएं (Notifications)</h4>
                      <span className="notif-count-tag">5 New</span>
                    </div>
                    <div className="notif-items-list">
                      <div className="notif-item highlight">
                        <strong>Live Masterclass: Indian Polity</strong>
                        <p>Starts in 30 mins with Dr. S. Mehta (Ex-IAS)</p>
                      </div>
                      <div className="notif-item">
                        <strong>Mock Test Result Ready</strong>
                        <p>All-India Prelims Score: 156/200 (#4,521)</p>
                      </div>
                      <div className="notif-item">
                        <strong>New Video Module Added</strong>
                        <p>Modern Indian History Ch. 5: Freedom Struggle</p>
                      </div>
                      <div className="notif-item">
                        <strong>1-on-1 Mentorship Confirmed</strong>
                        <p>Tomorrow at 05:00 PM with CSE Ranker</p>
                      </div>
                      <div className="notif-item">
                        <strong>Study Streak Milestone! 🔥</strong>
                        <p>12 Days Consistent Practice! +250 XP earned</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* User Avatar & Dropdown */}
              <div className="user-dropdown" style={{ position: 'relative' }}>
                <div className="avatar-capsule" onClick={() => setDropdownOpen(!dropdownOpen)} style={{ cursor: 'pointer' }}>
                  <div className="avatar-circle">{userInitials}</div>
                  <span className="user-name-text">{userName.split(' ')[0]}</span>
                </div>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <div className="user-dropdown-info">
                      <div className="user-full-name">{userName}</div>
                      <div className="user-email-text">{userEmail}</div>
                      <span className="user-verified-pill">✓ Verified Citizen Aspirant</span>
                    </div>
                    <div className="dropdown-link" onClick={() => { setDropdownOpen(false); navigate('/profile'); }}>
                      <User size={15} /> My Profile (प्रोफ़ाइल)
                    </div>
                    <div className="dropdown-link" onClick={() => { setDropdownOpen(false); navigate('/settings'); }}>
                      <Settings size={15} /> Settings & 2G Data Saver
                    </div>
                    <div className="dropdown-link logout" onClick={handleLogout}>
                      <LogOut size={15} /> Logout (लॉग आउट)
                    </div>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="main-content">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="bottom-nav">
        {bottomNavItems.map((item) => (
          <NavLink 
            key={item.path} 
            to={item.path} 
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span className="bottom-nav-label">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Floating Sovereign Bhashini Voice Assistant */}
      <FloatingVoiceAssistant />
    </div>
  );
};

export default AppLayout;
