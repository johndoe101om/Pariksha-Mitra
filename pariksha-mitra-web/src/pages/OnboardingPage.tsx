import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Brain, Smartphone, CheckCircle, ChevronRight } from 'lucide-react';
import './OnboardingPage.css';

const LANGUAGES = [
  { id: 'hi', native: 'हिन्दी', english: 'Hindi' },
  { id: 'en', native: 'English', english: 'English' },
  { id: 'bn', native: 'বাংলা', english: 'Bengali' },
  { id: 'te', native: 'తెలుగు', english: 'Telugu' },
  { id: 'mr', native: 'मराठी', english: 'Marathi' },
  { id: 'ta', native: 'தமிழ்', english: 'Tamil' },
  { id: 'gu', native: 'ગુજરાતી', english: 'Gujarati' },
  { id: 'kn', native: 'ಕನ್ನಡ', english: 'Kannada' },
  { id: 'ml', native: 'മലയാളം', english: 'Malayalam' },
  { id: 'or', native: 'ଓଡ଼ିଆ', english: 'Odia' },
  { id: 'pa', native: 'ਪੰਜਾਬੀ', english: 'Punjabi' },
  { id: 'as', native: 'অসমীয়া', english: 'Assamese' },
  { id: 'ur', native: 'اُردُو', english: 'Urdu' },
  { id: 'mai', native: 'मैथिली', english: 'Maithili' },
];

const OnboardingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [splashVisible, setSplashVisible] = useState(true);
  const [selectedLang, setSelectedLang] = useState('hi');
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => {
        setSplashVisible(false);
        setTimeout(() => setStep(2), 500); // transition delay
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
    else navigate('/login');
  };

  const handleSkip = () => setStep(5);

  if (step === 1) {
    return (
      <div className={`splash-screen ${!splashVisible ? 'fade-out' : ''}`}>
        <div className="pm-logo-large">
          PM
          <div className="chakra-overlay"></div>
        </div>
        <div className="splash-tagline">
          Every Student's Personal AI Coaching Partner<br />
          हर छात्र का व्यक्तिगत AI कोचिंग साथी
        </div>
        <div className="splash-subtext">Ministry of Education, Government of India</div>
        <div className="tricolor-strip">
          <div className="saffron-strip"></div>
          <div className="white-strip"></div>
          <div className="green-strip"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="onboarding-container">
      {step < 5 && (
        <div className="top-bar">
          <button className="skip-btn" onClick={handleSkip}>Skip</button>
        </div>
      )}

      <div className="step-container" key={step}>
        {step === 2 && (
          <>
            <div className="illustration-area">
              <div className="css-art">
                <BookOpen size={80} />
              </div>
            </div>
            <div className="content-area">
              <h2 className="step-heading">Free Quality Coaching for Every Aspirant<br />हर उम्मीदवार के लिए मुफ़्त गुणवत्तापूर्ण कोचिंग</h2>
              <p className="step-body">Pariksha Mitra is 100% free, government-backed coaching for SSC, Banking, Railway, UPSC, NEET, JEE, and State PSC exams.</p>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="illustration-area">
              <div className="css-art" style={{ background: 'linear-gradient(135deg, rgba(254,101,0,0.1) 0%, rgba(0,51,160,0.1) 100%)' }}>
                <Brain size={80} />
              </div>
            </div>
            <div className="content-area">
              <h2 className="step-heading">Your Personal AI Tutor That Adapts to You<br />आपका व्यक्तिगत AI ट्यूटर जो आपके अनुसार ढलता है</h2>
              <p className="step-body">Takes a 20-minute Diagnostic Test on Day 1. Identifies your weak areas. Auto-creates your personalised 30-day study plan.</p>
              <div className="feature-chips">
                <span className="chip">🎯 Personalised</span>
                <span className="chip">📅 30-Day Plan</span>
                <span className="chip">🔄 Adaptive</span>
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="illustration-area">
              <div className="css-art" style={{ background: 'linear-gradient(135deg, rgba(2,74,0,0.1) 0%, rgba(0,51,160,0.1) 100%)' }}>
                <Smartphone size={80} />
              </div>
            </div>
            <div className="content-area">
              <h2 className="step-heading">Live Classes + Offline Videos — Works Everywhere<br />लाइव क्लासेस + ऑफलाइन वीडियो — हर जगह काम करे</h2>
              <p className="step-body">Daily live classes from expert teachers. Download videos for offline study. Works on 2G. Works without internet.</p>
              <div className="feature-chips">
                <span className="chip">📡 Daily Live Classes</span>
                <span className="chip">⬇ Offline Download</span>
                <span className="chip">📶 2G Ready</span>
              </div>
            </div>
          </>
        )}

        {step === 5 && (
          <>
            <div className="content-area" style={{ marginTop: '32px' }}>
              <h2 className="step-heading">Choose Your Language / अपनी भाषा चुनें</h2>
              <p className="step-body">You can change this later in Settings</p>
            </div>
            <div className="lang-grid">
              {LANGUAGES.map((lang) => (
                <div 
                  key={lang.id} 
                  className={`lang-card ${selectedLang === lang.id ? 'selected' : ''}`}
                  onClick={() => setSelectedLang(lang.id)}
                >
                  {selectedLang === lang.id && <CheckCircle className="check-icon" size={20} />}
                  <div className="lang-native">{lang.native}</div>
                  <div className="lang-english">{lang.english}</div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="bottom-controls">
          <div className="progress-dots">
            {[2, 3, 4, 5].map(d => (
              <div 
                key={d} 
                className={`dot ${step === d ? 'active' : ''}`}
                onClick={() => setStep(d)}
              />
            ))}
          </div>
          <button className="primary-btn" onClick={handleNext}>
            {step === 5 ? 'Start Learning / सीखना शुरू करें' : 'Next / आगे बढ़ें'}
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
