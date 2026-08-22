import React, { useState } from 'react';
import { 
  MessageCircle, CheckCircle, Send, HelpCircle, FileText, Bell, Phone, QrCode, 
  Sparkles, Check, ArrowRight, ShieldCheck, Camera, Mic, Play, RefreshCw
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './WhatsAppBot.css';

export const WhatsAppBot: React.FC = () => {
  const [phone, setPhone] = useState('9876543210');
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'telegram'>('whatsapp');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isJoined, setIsJoined] = useState(false);

  const [features, setFeatures] = useState({
    mcq: true,
    doubt: true,
    alerts: true,
    voice: true
  });

  const handleToggle = (key: keyof typeof features) => {
    setFeatures(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="wab-root">
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'WhatsApp Bot', labelHi: 'व्हाट्सएप बॉट' }
        ]}
        title="Study on WhatsApp & Telegram"
        titleHi="व्हाट्सएप व टेलीग्राम अध्ययन केंद्र"
        description="Zero App Installation Required. Receive 7 AM daily MCQ capsules, solve doubts via photo OCR, and track exam updates directly in chat."
        descriptionHi="बिना किसी ऐप के व्हाट्सएप पर प्रतिदिन 5 प्रश्न, फोटो खींचकर तुरंत संदेह समाधान और अलर्ट प्राप्त करें।"
        icon={<MessageCircle size={28} />}
        badge="Zero-Data Learning Reach"
      />

      <main role="main" className="wab-workspace-grid">
        {/* Left Column: Link Account & Preferences */}
        <div className="wab-controls-column">
          <section className="wab-card wab-enrollment-card" aria-labelledby="link-heading">
            <div className="wab-card-header-bar">
              <div className="wab-card-title-lockup">
                <div className="wab-icon-orb green">
                  <Phone size={20} />
                </div>
                <div>
                  <h2 id="link-heading" className="wab-card-title">
                    Enroll Your Mobile Number <span className="hi">मोबाइल नंबर जोड़ें</span>
                  </h2>
                  <p className="wab-card-subtitle">Connect your active WhatsApp or Telegram account</p>
                </div>
              </div>
            </div>

            {/* Channel Tabs */}
            <div className="wab-channel-pills" role="tablist">
              <button 
                className={`wab-channel-tab ${activeChannel === 'whatsapp' ? 'active whatsapp' : ''}`}
                onClick={() => setActiveChannel('whatsapp')}
                role="tab"
                aria-selected={activeChannel === 'whatsapp'}
              >
                <MessageCircle size={16} /> WhatsApp Bot
              </button>
              <button 
                className={`wab-channel-tab ${activeChannel === 'telegram' ? 'active telegram' : ''}`}
                onClick={() => setActiveChannel('telegram')}
                role="tab"
                aria-selected={activeChannel === 'telegram'}
              >
                <Send size={16} /> Telegram Bot
              </button>
            </div>

            {/* Phone Input */}
            <div className="wab-form-block">
              <label htmlFor="wa-phone-input" className="wab-input-label">
                Enter Mobile Number (Aadhaar linked preferred)
              </label>
              <div className="wab-phone-input-wrap">
                <span className="wab-country-flag">🇮🇳 +91</span>
                <input 
                  id="wa-phone-input"
                  type="tel"
                  maxLength={10}
                  className="wab-phone-field"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="Enter 10-digit number"
                  aria-required="true"
                />
                <span className="wab-verified-tick" title="Citizen Verified">
                  <CheckCircle size={18} color="#16A34A" />
                </span>
              </div>
            </div>

            {/* Feature Customization Switches */}
            <div className="wab-features-box">
              <h3 className="wab-features-title">Select Daily Learning Capsules <span className="hi">सुविधाएं चुनें</span></h3>

              <div className="wab-feature-toggle-list">
                <div className="wab-feature-toggle-row" onClick={() => handleToggle('mcq')}>
                  <div className="toggle-left">
                    <div className="feature-icon-circle blue">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <strong className="toggle-label">Daily 5 MCQs (7:00 AM)</strong>
                      <span className="toggle-desc">Syllabus-aligned morning questions with explanations</span>
                    </div>
                  </div>
                  <input 
                    type="checkbox" 
                    className="wab-switch-input" 
                    checked={features.mcq} 
                    onChange={() => {}} 
                    aria-label="Toggle Daily 5 MCQs"
                  />
                </div>

                <div className="wab-feature-toggle-row" onClick={() => handleToggle('doubt')}>
                  <div className="toggle-left">
                    <div className="feature-icon-circle green">
                      <Camera size={16} />
                    </div>
                    <div>
                      <strong className="toggle-label">Photo Doubt Solving (OCR AI)</strong>
                      <span className="toggle-desc">Send question photo, get step-by-step solution in 3 secs</span>
                    </div>
                  </div>
                  <input 
                    type="checkbox" 
                    className="wab-switch-input" 
                    checked={features.doubt} 
                    onChange={() => {}} 
                    aria-label="Toggle Photo Doubt Solving"
                  />
                </div>

                <div className="wab-feature-toggle-row" onClick={() => handleToggle('alerts')}>
                  <div className="toggle-left">
                    <div className="feature-icon-circle saffron">
                      <Bell size={16} />
                    </div>
                    <div>
                      <strong className="toggle-label">Exam Admit Cards & Result Alerts</strong>
                      <span className="toggle-desc">Official NTA, SSC, UPSC announcements to your chat</span>
                    </div>
                  </div>
                  <input 
                    type="checkbox" 
                    className="wab-switch-input" 
                    checked={features.alerts} 
                    onChange={() => {}} 
                    aria-label="Toggle Exam Alerts"
                  />
                </div>

                <div className="wab-feature-toggle-row" onClick={() => handleToggle('voice')}>
                  <div className="toggle-left">
                    <div className="feature-icon-circle purple">
                      <Mic size={16} />
                    </div>
                    <div>
                      <strong className="toggle-label">Voice Note Doubts (Bhashini)</strong>
                      <span className="toggle-desc">Ask doubts by sending audio notes in 14 Indian languages</span>
                    </div>
                  </div>
                  <input 
                    type="checkbox" 
                    className="wab-switch-input" 
                    checked={features.voice} 
                    onChange={() => {}} 
                    aria-label="Toggle Voice Note Doubts"
                  />
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <button 
              className={`wab-connect-cta-btn ${isJoined ? 'connected' : ''}`}
              onClick={() => setIsJoined(!isJoined)}
              aria-label="Activate WhatsApp Learning Bot"
            >
              {isJoined ? (
                <>
                  <CheckCircle size={18} /> Account Connected • Daily Capsule Active
                </>
              ) : (
                <>
                  <MessageCircle size={18} /> Connect on WhatsApp Now <ArrowRight size={16} />
                </>
              )}
            </button>
          </section>

          {/* Social Proof & Metrics */}
          <div className="wab-stats-banner">
            <div className="stats-left">
              <div className="stats-number">2,42,800+</div>
              <div className="stats-lbl">Active Students on WhatsApp & Telegram</div>
            </div>
            <div className="stats-badge">
              <ShieldCheck size={16} color="#FFD54F" />
              <span>Free Sovereign Service</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Fidelity Smartphone Mockup */}
        <div className="wab-preview-column">
          <div className="wab-phone-shell">
            {/* Phone Bezel & Speaker Notch */}
            <div className="phone-notch-bar">
              <span className="speaker-slot"></span>
              <span className="camera-dot"></span>
            </div>

            {/* WhatsApp App Header */}
            <div className="wa-app-header">
              <div className="wa-profile-block">
                <div className="wa-avatar-box">
                  <span>🇮🇳</span>
                </div>
                <div className="wa-name-col">
                  <div className="wa-name-row">
                    <strong>Pariksha Mitra Bot</strong>
                    <span className="wa-verified-badge" title="Official Government Bot">✓</span>
                  </div>
                  <span className="wa-status-text">Official AI Tutor • Online</span>
                </div>
              </div>
              <div className="wa-header-actions">
                <span className="wa-live-pill">Live Demo</span>
              </div>
            </div>

            {/* WhatsApp Chat Canvas */}
            <div className="wa-chat-canvas">
              <div className="wa-date-pill">Today</div>

              {/* Message 1: Daily Greeting & 7 AM Capsule */}
              <div className="wa-bubble incoming">
                <div className="wa-sender-tag">Pariksha Mitra AI • 7:00 AM</div>
                <p>
                  🇮🇳 <strong>Good Morning Rahul!</strong> Here is your Daily 5-MCQ Capsule for <strong>SSC CGL 2026</strong>.
                </p>
                <div className="wa-quiz-card">
                  <span className="wa-q-num">Question 1 of 5 (General Awareness):</span>
                  <p className="wa-q-txt">
                    Which Article of the Indian Constitution guarantees the <strong>'Right to Constitutional Remedies'</strong>?
                  </p>
                  
                  <div className="wa-quiz-options">
                    <button 
                      className={`wa-opt-btn ${selectedOption === 'A' ? 'incorrect' : ''}`}
                      onClick={() => setSelectedOption('A')}
                    >
                      A. Article 19 (Freedom of Speech)
                    </button>
                    <button 
                      className={`wa-opt-btn ${selectedOption === 'B' ? 'correct' : ''}`}
                      onClick={() => setSelectedOption('B')}
                    >
                      B. Article 32 (Heart & Soul of Constitution)
                    </button>
                    <button 
                      className={`wa-opt-btn ${selectedOption === 'C' ? 'incorrect' : ''}`}
                      onClick={() => setSelectedOption('C')}
                    >
                      C. Article 21 (Right to Life)
                    </button>
                  </div>
                </div>
                <span className="wa-msg-time">07:01 AM</span>
              </div>

              {/* Message 2: Instant Response on selection */}
              {selectedOption && (
                <div className="wa-bubble incoming solution-bubble">
                  <div className="solution-head">
                    {selectedOption === 'B' ? (
                      <span className="text-correct">🎉 Correct Answer! (+2 Marks)</span>
                    ) : (
                      <span className="text-incorrect">❌ Incorrect. Correct is Option B (Art 32).</span>
                    )}
                  </div>
                  <p className="solution-body">
                    <strong>Explanation:</strong> Dr. B.R. Ambedkar termed Article 32 as the "heart and soul" of the Constitution as it empowers citizens to directly approach the Supreme Court for writ remedies.
                  </p>
                  <span className="wa-msg-time">07:02 AM</span>
                </div>
              )}

              {/* Message 3: Photo OCR Doubts Demonstration */}
              <div className="wa-bubble incoming">
                <div className="wa-sender-tag">Photo Doubt Solver Demo</div>
                <p>
                  📸 <strong>Stuck on a math problem?</strong> Just snap a photo and send it here. Instant step-by-step Hindi & English solutions!
                </p>
                <span className="wa-msg-time">07:03 AM</span>
              </div>
            </div>

            {/* WhatsApp Chat Input Footer */}
            <div className="wa-phone-footer">
              <div className="wa-input-bar">
                <input 
                  type="text" 
                  placeholder="Type an answer or doubt..." 
                  className="wa-sim-input" 
                  readOnly 
                />
                <Camera size={18} className="wa-cam-icon" />
              </div>
              <div className="wa-mic-round">
                <Mic size={18} color="#FFFFFF" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default WhatsAppBot;
