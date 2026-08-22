import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings, Globe, Bell, Wifi, Shield, Trash2, 
  Save, CheckCircle, Key, Download, LogOut
} from 'lucide-react';
import './SettingsPage.css';

export default function SettingsPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<'app' | 'notifications' | 'data' | 'security'>('app');
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [settings, setSettings] = useState({
    // App & Language
    appLanguage: 'Hindi',
    lectureAudio: 'Bilingual (Hindi + English)',
    voiceSpeed: '1.0x',
    fontSize: 'Medium',
    highContrast: false,
    autoPlayNext: true,

    // Notifications
    pushNotifs: true,
    liveClassReminders: true,
    smsAlerts: true,
    whatsappDigest: true,
    weeklyEmailReport: true,
    reminderTime: '08:00 AM',

    // Data & Storage
    dataSaverMode: true,
    downloadQuality: '720p HD',
    downloadOverWifiOnly: false,
    offlineStorageLimit: '8 GB',

    // Security & Account
    phone: '9876543210',
    email: 'rahul.kumar@nic.in',
    twoFactorAuth: true
  });

  useEffect(() => {
    const dataStr = localStorage.getItem('pariksha_mitra_user');
    if (dataStr) {
      try {
        const parsed = JSON.parse(dataStr);
        setSettings(prev => ({
          ...prev,
          phone: parsed.phone || prev.phone,
          email: parsed.email || prev.email,
          appLanguage: parsed.primaryLanguage || parsed.language || prev.appLanguage
        }));
      } catch (e) {}
    }
  }, []);

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    try {
      const userStr = localStorage.getItem('pariksha_mitra_user');
      const currentUser = userStr ? JSON.parse(userStr) : {};
      const updated = {
        ...currentUser,
        primaryLanguage: settings.appLanguage,
        contentLanguage: settings.lectureAudio,
        dataSaverMode: settings.dataSaverMode,
        pushNotifs: settings.pushNotifs,
        smsNotifs: settings.smsAlerts,
        whatsappAlerts: settings.whatsappDigest
      };
      localStorage.setItem('pariksha_mitra_user', JSON.stringify(updated));
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (e) {}
  };

  const handleLogout = () => {
    localStorage.removeItem('pariksha_mitra_logged_in');
    navigate('/');
  };

  return (
    <div className="settings-page-container">
      {/* Top Header */}
      <div className="settings-header-card">
        <div className="header-info">
          <div className="settings-icon-bubble">
            <Settings size={28} color="#0033A0" />
          </div>
          <div>
            <h1>Application & System Settings</h1>
            <p>Manage app preferences, notifications, data saver, and sovereign privacy controls.</p>
          </div>
        </div>

        <button className="btn-header-save" onClick={handleSave}>
          <Save size={18} /> Save Settings
        </button>
      </div>

      {saveSuccess && (
        <div className="settings-toast-banner">
          <CheckCircle size={18} />
          <span>Settings saved successfully! / सेटिंग्स सफलतापूर्वक सहेजी गईं!</span>
        </div>
      )}

      {/* Main Settings Grid */}
      <div className="settings-layout-grid">
        {/* Sidebar Tabs */}
        <div className="settings-nav-sidebar">
          <button 
            className={`settings-nav-item ${activeSection === 'app' ? 'active' : ''}`}
            onClick={() => setActiveSection('app')}
          >
            <Globe size={18} />
            <div className="nav-text">
              <strong>App & Language</strong>
              <span>Languages, Voice speed, Display</span>
            </div>
          </button>

          <button 
            className={`settings-nav-item ${activeSection === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveSection('notifications')}
          >
            <Bell size={18} />
            <div className="nav-text">
              <strong>Notifications & Alerts</strong>
              <span>Push, SMS, WhatsApp, Email</span>
            </div>
          </button>

          <button 
            className={`settings-nav-item ${activeSection === 'data' ? 'active' : ''}`}
            onClick={() => setActiveSection('data')}
          >
            <Wifi size={18} />
            <div className="nav-text">
              <strong>Data & Offline Storage</strong>
              <span>2G data saver, Download quality</span>
            </div>
          </button>

          <button 
            className={`settings-nav-item ${activeSection === 'security' ? 'active' : ''}`}
            onClick={() => setActiveSection('security')}
          >
            <Shield size={18} />
            <div className="nav-text">
              <strong>Security & DPDP Privacy</strong>
              <span>2FA, Active sessions, Data export</span>
            </div>
          </button>

          <div className="sidebar-divider"></div>

          <button className="settings-logout-btn" onClick={handleLogout}>
            <LogOut size={18} /> Sign Out of App
          </button>
        </div>

        {/* Settings Content Area */}
        <div className="settings-content-card">
          {/* SECTION 1: APP & LANGUAGE */}
          {activeSection === 'app' && (
            <div className="settings-section">
              <div className="section-heading">
                <h2>🌐 App & Accessibility Preferences</h2>
                <p>Customize how Pariksha Mitra displays lectures, AI chat responses, and audio.</p>
              </div>

              <div className="settings-group">
                <div className="setting-row">
                  <div className="setting-label">
                    <strong>Primary Interface Language</strong>
                    <p>Select your default language for menus, AI chat tutor, and dashboard.</p>
                  </div>
                  <select 
                    name="appLanguage" 
                    value={settings.appLanguage} 
                    onChange={handleSelectChange}
                    className="setting-select"
                  >
                    <option value="Hindi">Hindi (हिंदी)</option>
                    <option value="English">English</option>
                    <option value="Tamil">Tamil (தமிழ்)</option>
                    <option value="Telugu">Telugu (తెలుగు)</option>
                    <option value="Marathi">Marathi (मराठी)</option>
                    <option value="Bengali">Bengali (বাংলা)</option>
                    <option value="Gujarati">Gujarati (ગુજરાતી)</option>
                  </select>
                </div>

                <div className="setting-row">
                  <div className="setting-label">
                    <strong>Video Lecture Audio / Subtitles</strong>
                    <p>Preferred language for recorded live faculty sessions and auto-captions.</p>
                  </div>
                  <select 
                    name="lectureAudio" 
                    value={settings.lectureAudio} 
                    onChange={handleSelectChange}
                    className="setting-select"
                  >
                    <option value="Bilingual (Hindi + English)">Bilingual (Hindi + English)</option>
                    <option value="Pure Hindi">Pure Hindi</option>
                    <option value="Pure English">Pure English</option>
                  </select>
                </div>

                <div className="setting-row">
                  <div className="setting-label">
                    <strong>AI Voice Tutor Speaking Rate</strong>
                    <p>Adjust the speed of AI doubt voice answers and audio summaries.</p>
                  </div>
                  <select 
                    name="voiceSpeed" 
                    value={settings.voiceSpeed} 
                    onChange={handleSelectChange}
                    className="setting-select"
                  >
                    <option value="0.75x">0.75x (Slower & Clear)</option>
                    <option value="1.0x">1.0x (Standard)</option>
                    <option value="1.25x">1.25x (Fast Revision)</option>
                    <option value="1.5x">1.5x (Speed)</option>
                  </select>
                </div>

                <div className="setting-row">
                  <div className="setting-label">
                    <strong>Font Size / Text Scaling</strong>
                    <p>Adjust question text and explanation size for comfortable reading.</p>
                  </div>
                  <select 
                    name="fontSize" 
                    value={settings.fontSize} 
                    onChange={handleSelectChange}
                    className="setting-select"
                  >
                    <option value="Normal">Normal (Default)</option>
                    <option value="Medium">Medium (110%)</option>
                    <option value="Large">Large (125% - High Readability)</option>
                  </select>
                </div>

                <div className="setting-toggle-row">
                  <div className="setting-label">
                    <strong>High Contrast Accessibility Mode</strong>
                    <p>Enhance border visibility and text crispness for visually impaired students.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.highContrast} 
                      onChange={() => handleToggle('highContrast')} 
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="setting-toggle-row">
                  <div className="setting-label">
                    <strong>Auto-Play Next Lecture</strong>
                    <p>Automatically play the next chapter in the syllabus playlist.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.autoPlayNext} 
                      onChange={() => handleToggle('autoPlayNext')} 
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 2: NOTIFICATIONS */}
          {activeSection === 'notifications' && (
            <div className="settings-section">
              <div className="section-heading">
                <h2>🔔 Notification & Reminder Channels</h2>
                <p>Configure how and when you want to receive class alerts, quizzes, and mentor reminders.</p>
              </div>

              <div className="settings-group">
                <div className="setting-toggle-row">
                  <div className="setting-label">
                    <strong>Browser Push Notifications</strong>
                    <p>Receive immediate alerts for live classes 15 minutes before they begin.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.pushNotifs} 
                      onChange={() => handleToggle('pushNotifs')} 
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="setting-toggle-row">
                  <div className="setting-label">
                    <strong>Sovereign SMS Alerts (Free)</strong>
                    <p>Direct SMS with join room link for 1-on-1 mentorship sessions (+91 {settings.phone}).</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.smsAlerts} 
                      onChange={() => handleToggle('smsAlerts')} 
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="setting-toggle-row">
                  <div className="setting-label">
                    <strong>WhatsApp Daily Target Digests</strong>
                    <p>Morning study targets, daily current affairs summary, and quiz streak updates.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.whatsappDigest} 
                      onChange={() => handleToggle('whatsappDigest')} 
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="setting-toggle-row">
                  <div className="setting-label">
                    <strong>Weekly Performance & Rank Report (Email)</strong>
                    <p>Weekly diagnostic summary and subject mastery analytics sent to {settings.email}.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.weeklyEmailReport} 
                      onChange={() => handleToggle('weeklyEmailReport')} 
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="setting-row">
                  <div className="setting-label">
                    <strong>Daily Morning Quiz Reminder Time</strong>
                    <p>Set the time for your daily current affairs practice notification.</p>
                  </div>
                  <select 
                    name="reminderTime" 
                    value={settings.reminderTime} 
                    onChange={handleSelectChange}
                    className="setting-select"
                  >
                    <option value="07:00 AM">07:00 AM</option>
                    <option value="08:00 AM">08:00 AM (Recommended)</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="08:00 PM">08:00 PM (Evening Review)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: DATA & OFFLINE */}
          {activeSection === 'data' && (
            <div className="settings-section">
              <div className="section-heading">
                <h2>📱 Low-Bandwidth & Offline Storage</h2>
                <p>Designed for low-connectivity rural regions with 2G/3G networks and offline video playback.</p>
              </div>

              <div className="settings-group">
                <div className="setting-toggle-row highlight">
                  <div className="setting-label">
                    <strong>2G Data Saver Mode (Adaptive Bitrate)</strong>
                    <p>Compresses live video streams and reduces bandwidth usage by 75% without interrupting audio.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.dataSaverMode} 
                      onChange={() => handleToggle('dataSaverMode')} 
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="setting-row">
                  <div className="setting-label">
                    <strong>Offline Video Download Resolution</strong>
                    <p>Higher resolution requires more storage and mobile data.</p>
                  </div>
                  <select 
                    name="downloadQuality" 
                    value={settings.downloadQuality} 
                    onChange={handleSelectChange}
                    className="setting-select"
                  >
                    <option value="360p Data Saver">360p Data Saver (80 MB / hr)</option>
                    <option value="720p HD">720p HD Standard (250 MB / hr)</option>
                    <option value="1080p Full HD">1080p Full HD (600 MB / hr)</option>
                  </select>
                </div>

                <div className="setting-toggle-row">
                  <div className="setting-label">
                    <strong>Download Over Wi-Fi Only</strong>
                    <p>Prevent accidental downloads over your cellular mobile data plan.</p>
                  </div>
                  <label className="switch">
                    <input 
                      type="checkbox" 
                      checked={settings.downloadOverWifiOnly} 
                      onChange={() => handleToggle('downloadOverWifiOnly')} 
                    />
                    <span className="slider round"></span>
                  </label>
                </div>

                <div className="storage-status-card">
                  <div className="storage-status-header">
                    <strong>Device Storage Meter</strong>
                    <span>1.4 GB / 8.0 GB Used</span>
                  </div>
                  <div className="storage-progress-bar">
                    <div className="storage-progress-fill" style={{ width: '17.5%' }}></div>
                  </div>
                  <div className="storage-meta-row">
                    <span>3 Downloaded Lectures • 45 Practice Sets Cached</span>
                    <button className="btn-clear-cache-pill" onClick={() => alert('Local cache cleared! 240 MB freed.')}>
                      <Trash2 size={14} /> Clear Cache (240 MB)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 4: SECURITY & PRIVACY */}
          {activeSection === 'security' && (
            <div className="settings-section">
              <div className="section-heading">
                <h2>🔒 Account Security & Sovereign Privacy</h2>
                <p>Your educational data is protected under the Digital Personal Data Protection (DPDP) Act 2023.</p>
              </div>

              <div className="settings-group">
                <div className="sec-banner-item">
                  <div className="sec-badge-left">
                    <Shield size={22} color="#024A00" />
                  </div>
                  <div className="sec-info-text">
                    <strong>Two-Factor OTP Login (Active)</strong>
                    <p>Verified mobile number +91 {settings.phone}. OTP delivered via Government NIC Gateway.</p>
                  </div>
                  <span className="badge-chip verified">Active</span>
                </div>

                <div className="sec-banner-item">
                  <div className="sec-badge-left">
                    <Key size={22} color="#0033A0" />
                  </div>
                  <div className="sec-info-text">
                    <strong>Sovereign Cloud Encryption</strong>
                    <p>All test attempts and diagnostic logs are AES-256 encrypted on MeghRaj Government Cloud.</p>
                  </div>
                  <span className="badge-chip encrypted">Protected</span>
                </div>

                <div className="data-rights-box">
                  <h3>Your Sovereign Data Rights</h3>
                  <p>You can export your complete learning dossier, mock test analytics, and mentor notes at any time.</p>
                  <button className="btn-export-dossier" onClick={() => alert('Exporting full learning trajectory dossier as PDF...')}>
                    <Download size={16} /> Export Learning Trajectory (PDF Dossier)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Save Action */}
          <div className="settings-footer-actions">
            <button className="btn-save-settings" onClick={handleSave}>
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
