import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Map, 
  FileEdit, 
  Calendar, 
  Radio, 
  FileText, 
  ShieldAlert, 
  LogOut, 
  Menu, 
  X, 
  ChevronDown,
  Eye,
  Server,
  ShieldCheck,
  Building2,
  Clock,
  Landmark,
  Brain,
  Smartphone,
  Vote,
  Database
} from 'lucide-react';
import './MinistryLayout.css';
import ParikshaSetuLogo from '../components/ParikshaSetuLogo';
import FloatingVoiceAssistant from '../components/FloatingVoiceAssistant';

const MinistryLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [activeLang, setActiveLang] = useState<'en' | 'hi'>('en');
  const [adminDropdown, setAdminDropdown] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    { name: 'Overview Dashboard', nameHi: 'राष्ट्रीय अवलोकन', path: '/ministry/dashboard', icon: <BarChart3 size={19} /> },
    { name: 'State Analytics', nameHi: 'राज्यवार विश्लेषिकी', path: '/ministry/analytics', icon: <Building2 size={19} /> },
    { name: 'Map & Infrastructure', nameHi: 'भौगोलिक अवसंरचना', path: '/ministry/map', icon: <Map size={19} /> },
    { name: 'Content Management', nameHi: 'पाठ्यक्रम प्रबंधन', path: '/ministry/content', icon: <FileEdit size={19} /> },
    { name: 'Live Class Scheduler', nameHi: 'प्रसारण समय-सारिणी', path: '/ministry/live-scheduler', icon: <Calendar size={19} /> },
    { name: 'Broadcast Center', nameHi: 'राष्ट्रीय अलर्ट केंद्र', path: '/ministry/notifications', icon: <Radio size={19} /> },
    { name: 'Parliamentary Reports', nameHi: 'संसदीय रिपोर्ट', path: '/ministry/reports', icon: <FileText size={19} /> },
    { name: 'Grievance Redressal', nameHi: 'CPGRAMS निवारण', path: '/ministry/support', icon: <ShieldAlert size={19} /> },
    { name: 'National Talent Map', nameHi: 'राष्ट्रीय प्रतिभा मानचित्र', path: '/ministry/talent-map', icon: <Brain size={19} /> },
    { name: 'Bot Analytics', nameHi: 'बॉट विश्लेषण', path: '/ministry/bot-analytics', icon: <Smartphone size={19} /> },
    { name: 'Constituency View', nameHi: 'निर्वाचन क्षेत्र दृश्य', path: '/ministry/constituency', icon: <Vote size={19} /> },
    { name: 'Open Data Portal', nameHi: 'खुला डेटा पोर्टल', path: '/ministry/open-data', icon: <Database size={19} /> },
  ];

  const handleLogout = () => {
    navigate('/ministry/login');
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className={`ministry-layout ${highContrast ? 'high-contrast-mode' : ''} font-${fontSize}`}>
      {/* 1. Official GIGW 3.0 Sovereign Tricolor Strip */}
      <div className="gov-tricolor-strip">
        <div className="tri-saffron"></div>
        <div className="tri-white"></div>
        <div className="tri-green"></div>
      </div>

      {/* 2. Official Sovereign Top Utility Bar */}
      <div className="ministry-utility-topbar">
        <div className="utility-inner-content">
          <div className="utility-brand-left">
            <span className="gov-flag">🇮🇳</span>
            <span className="gov-bold">GOVERNMENT OF INDIA</span>
            <span className="sep">|</span>
            <span>भारत सरकार</span>
            <span className="sep">|</span>
            <span className="moe-name">Ministry of Education (शिक्षा मंत्रालय)</span>
          </div>

          <div className="utility-tools-right">
            <div className="access-tools-box">
              <span className="tool-lbl">Accessibility:</span>
              <button 
                className={`font-tool-btn ${fontSize === 'normal' ? 'active' : ''}`}
                onClick={() => setFontSize('normal')}
              >
                A
              </button>
              <button 
                className={`font-tool-btn ${fontSize === 'large' ? 'active' : ''}`}
                onClick={() => setFontSize('large')}
              >
                A+
              </button>
              <button 
                className={`contrast-tool-btn ${highContrast ? 'active' : ''}`}
                onClick={() => setHighContrast(!highContrast)}
              >
                <Eye size={12} /> Contrast
              </button>
            </div>

            <span className="sep">|</span>

            <div className="lang-box">
              <button className={`l-btn ${activeLang === 'en' ? 'active' : ''}`} onClick={() => setActiveLang('en')}>EN</button>
              <span className="sep-dot">•</span>
              <button className={`l-btn ${activeLang === 'hi' ? 'active' : ''}`} onClick={() => setActiveLang('hi')}>हिन्दी</button>
            </div>

            <span className="sep">|</span>

            <div className="cloud-indicator-tag">
              <Server size={12} color="#93C5FD" />
              <span>NIC MeghRaj Instance: DEL-PROD-01</span>
            </div>
          </div>
        </div>
      </div>

      <div className="ministry-workspace-body">
        {/* Sovereign Dark Sidebar */}
        <aside className={`ministry-sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="ministry-brand">
            <div className="logo-wrap" onClick={() => navigate('/ministry/dashboard')} style={{ cursor: 'pointer' }}>
              <ParikshaSetuLogo theme="light" height={44} />
            </div>
            <button className="close-menu-btn" onClick={closeMobileMenu}>
              <X size={24} />
            </button>
          </div>

          <nav className="ministry-nav">
            <div className="nav-section-title">SOVEREIGN OVERSIGHT MODULES</div>
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path} 
                className={({ isActive }) => `ministry-nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="m-icon-wrap">{item.icon}</span>
                <div className="m-label-block">
                  <span className="m-main-label">{item.name}</span>
                  <span className="m-sub-label">{item.nameHi}</span>
                </div>
              </NavLink>
            ))}
          </nav>

          <div className="ministry-sidebar-footer">
            <div className="security-notice-card">
              <ShieldCheck size={16} color="#4ADE80" />
              <div>
                <strong>Restricted Official Access</strong>
                <span>Audit Logging Enabled (IT Act 2000)</span>
              </div>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={16} />
              <span>Secure Officer Logout</span>
            </button>
          </div>
        </aside>

        {mobileMenuOpen && <div className="sidebar-overlay" onClick={closeMobileMenu}></div>}

        <div className="ministry-main">
          {/* Topbar */}
          <header className="ministry-topbar">
            <div className="topbar-left">
              <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
              <div className="page-title-lockup">
                <Landmark size={20} color="#002B7F" />
                <div>
                  <h1 className="page-title">Ministry Command & Administrative Center</h1>
                  <span className="page-sub-badge">National Education Policy (NEP 2020) Monitoring System</span>
                </div>
              </div>
            </div>
            
            <div className="topbar-right">
              <div className="admin-profile" onClick={() => setAdminDropdown(!adminDropdown)}>
                <div className="admin-avatar">AS</div>
                <div className="admin-info">
                  <span className="admin-name">Dr. A. Sharma, IAS</span>
                  <span className="admin-role">Joint Secretary (Higher Education)</span>
                </div>
                <ChevronDown size={15} className="dropdown-icon" />
              </div>

              {adminDropdown && (
                <div className="admin-dropdown-menu">
                  <div className="admin-dropdown-header">
                    <strong>Dr. A. Sharma, IAS</strong>
                    <span>Officer ID: MOE-JS-88219</span>
                    <span className="status-pill">● Verified Administrator</span>
                  </div>
                  <div className="admin-dropdown-link" onClick={() => navigate('/ministry/dashboard')}>
                    📊 Executive Dashboard
                  </div>
                  <div className="admin-dropdown-link" onClick={() => navigate('/ministry/reports')}>
                    📑 Parliamentary Digest Vault
                  </div>
                  <div className="admin-dropdown-link logout" onClick={handleLogout}>
                    <LogOut size={14} /> Exit Command Portal
                  </div>
                </div>
              )}
            </div>
          </header>

          {/* Main Body Content */}
          <main className="ministry-content">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Floating Sovereign Bhashini Voice Assistant */}
      <FloatingVoiceAssistant />
    </div>
  );
};

export default MinistryLayout;
