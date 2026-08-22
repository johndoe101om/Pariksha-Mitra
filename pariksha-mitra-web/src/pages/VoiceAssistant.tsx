import React, { useState } from 'react';
import { 
  Mic, Volume2, Globe, Book, MessageSquare, Sparkles, VolumeX, Play, 
  RotateCcw, ArrowRight, ShieldCheck, CheckCircle2, Headphones, Radio, Flame
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './VoiceAssistant.css';

const languages = [
  { id: 'hi', name: 'हिन्दी', code: 'Hindi', native: 'नमस्ते' },
  { id: 'bn', name: 'বাংলা', code: 'Bengali', native: 'নমস্কার' },
  { id: 'te', name: 'తెలుగు', code: 'Telugu', native: 'నమస్కారం' },
  { id: 'mr', name: 'मराठी', code: 'Marathi', native: 'नमस्कार' },
  { id: 'ta', name: 'தமிழ்', code: 'Tamil', native: 'வணக்கம்' },
  { id: 'gu', name: 'ગુજરાતી', code: 'Gujarati', native: 'નમસ્તે' },
  { id: 'kn', name: 'ಕನ್ನಡ', code: 'Kannada', native: 'ನಮಸ್ಕಾರ' },
  { id: 'ml', name: 'മലയാളം', code: 'Malayalam', native: 'നമസ്കാരം' },
  { id: 'pa', name: 'ਪੰਜਾਬੀ', code: 'Punjabi', native: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ' },
  { id: 'or', name: 'ଓଡ଼ିଆ', code: 'Odia', native: 'ନମସ୍କାର' },
  { id: 'as', name: 'অসমীয়া', code: 'Assamese', native: 'নমস্কাৰ' },
  { id: 'en', name: 'English', code: 'Indian English', native: 'Hello' },
];

export const VoiceAssistant: React.FC = () => {
  const [activeLang, setActiveLang] = useState('hi');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSpeed, setSpeechSpeed] = useState('1.0x');

  const [messages, setMessages] = useState<Array<{
    role: 'user' | 'ai';
    text: string;
    textHi?: string;
    timestamp: string;
  }>>([
    { 
      role: 'ai', 
      text: 'Namaste Rahul! I am your Bhashini Sovereign Voice Tutor. Speak in any of 14 Indian languages to ask doubts, request topic audio summaries, or take spoken mock quizzes.',
      textHi: 'नमस्ते राहुल! मैं आपका भाषिणी वॉयस ट्यूटर हूँ। किसी भी विषय पर संदेह पूछने या ऑडियो सारांश सुनने के लिए बोलें।',
      timestamp: 'Just now'
    }
  ]);

  const handleCommand = (prompt: string, queryHi?: string, replyEn?: string, replyHi?: string) => {
    setMessages(prev => [
      ...prev,
      { role: 'user', text: prompt, textHi: queryHi, timestamp: 'Just now' }
    ]);

    setIsSpeaking(true);
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          role: 'ai', 
          text: replyEn || 'Under Article 21 of the Indian Constitution, the Right to Life & Personal Liberty is a fundamental right that cannot be suspended even during a National Emergency.',
          textHi: replyHi || 'भारतीय संविधान के अनुच्छेद 21 के तहत जीवन और व्यक्तिगत स्वतंत्रता का अधिकार एक मौलिक अधिकार है।',
          timestamp: 'Just now'
        }
      ]);
      setIsSpeaking(false);
    }, 900);
  };

  const toggleListen = () => {
    if (!isListening) {
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        handleCommand(
          'What are the key provisions of Article 21 in Constitution?',
          'भारतीय संविधान में अनुच्छेद 21 के मुख्य प्रावधान क्या हैं?',
          'Article 21 guarantees that "No person shall be deprived of his life or personal liberty except according to procedure established by law". In Maneka Gandhi case (1978), the Supreme Court ruled that procedure must be fair, just, and reasonable.',
          'अनुच्छेद 21 यह सुनिश्चित करता है कि विधि द्वारा स्थापित प्रक्रिया के अतिरिक्त किसी को उसके जीवन से वंचित नहीं किया जाएगा।'
        );
      }, 2500);
    } else {
      setIsListening(false);
    }
  };

  return (
    <div className="va-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Bhashini Voice Assistant', labelHi: 'भाषिणी वॉयस ट्यूटर' }
        ]}
        title="Bhashini Sovereign Voice Studio"
        titleHi="राष्ट्रीय भाषिणी बहुभाषी वॉयस स्टूडियो"
        description="Learn in your mother tongue with sovereign speech-to-speech AI models benchmarked for 14 Indian languages and competitive exams."
        descriptionHi="14 भारतीय भाषाओं में अपनी मातृभाषा में आवाज के माध्यम से पढ़ाई करें और परीक्षा संदेह दूर करें।"
        icon={<Mic size={28} />}
        badge="Digital India Bhashini AI"
        actions={
          <div className="va-hero-speed-pills">
            <span className="speed-lbl"><Headphones size={14} /> Voice Speed:</span>
            {['1.0x', '1.25x', '1.5x'].map(s => (
              <button 
                key={s} 
                className={`speed-btn ${speechSpeed === s ? 'active' : ''}`}
                onClick={() => setSpeechSpeed(s)}
              >
                {s}
              </button>
            ))}
          </div>
        }
      />

      <main role="main" className="va-workspace-grid">
        {/* Left Column: Language Selector & One-Tap Prompt Chips */}
        <div className="va-left-sidebar">
          {/* 1. Language Selector Card */}
          <section className="va-card" aria-labelledby="lang-head">
            <div className="vacard-header">
              <div className="vacard-title-group">
                <Globe size={18} color="#0033A0" />
                <h2 id="lang-head" className="vacard-title">
                  Select Language <span className="hi">भाषा चुनें</span>
                </h2>
              </div>
              <span className="vacard-count">{languages.length} Languages</span>
            </div>

            <div className="va-lang-grid" role="radiogroup" aria-label="Language selection">
              {languages.map(lang => (
                <button
                  key={lang.id}
                  className={`va-lang-pill ${activeLang === lang.id ? 'active' : ''}`}
                  onClick={() => setActiveLang(lang.id)}
                  role="radio"
                  aria-checked={activeLang === lang.id}
                >
                  <span className="lang-native-txt">{lang.name}</span>
                  <span className="lang-code-txt">{lang.code}</span>
                </button>
              ))}
            </div>
          </section>

          {/* 2. One-Tap Prompt Capsules */}
          <section className="va-card" aria-labelledby="prompts-head">
            <div className="vacard-header">
              <div className="vacard-title-group">
                <Sparkles size={18} color="#FE6500" />
                <h2 id="prompts-head" className="vacard-title">
                  Instant Voice Commands <span className="hi">त्वरित प्रश्न</span>
                </h2>
              </div>
            </div>

            <div className="va-chips-list">
              <button 
                className="va-cmd-chip"
                onClick={() => handleCommand(
                  'Explain Fundamental Rights in Constitution',
                  'संविधान के मौलिक अधिकारों को समझाएं',
                  'Part III (Articles 12 to 35) contains 6 Fundamental Rights: Equality, Freedom, Protection against Exploitation, Freedom of Religion, Cultural & Educational Rights, and Constitutional Remedies.',
                  'भाग III (अनुच्छेद 12-35) में 6 मौलिक अधिकार वर्णित हैं।'
                )}
              >
                <Book size={14} color="#0033A0" />
                <span>"Explain Fundamental Rights"</span>
              </button>

              <button 
                className="va-cmd-chip"
                onClick={() => handleCommand(
                  'Start 5-MCQ Voice Quiz for SSC CGL',
                  'एसएससी सीजीएल के लिए 5 प्रश्नों का क्विज शुरू करें',
                  'Question 1: Who was the first Governor-General of independent India? Options: (A) Lord Mountbatten (B) C. Rajagopalachari (C) Dr. Rajendra Prasad.',
                  'प्रश्न 1: स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?'
                )}
              >
                <Radio size={14} color="#FE6500" />
                <span>"Start 5-MCQ Daily Quiz"</span>
              </button>

              <button 
                className="va-cmd-chip"
                onClick={() => handleCommand(
                  'What is the expected cutoff for SSC CGL 2026?',
                  'एसएससी सीजीएल 2026 के लिए अनुमानित कटऑफ क्या है?',
                  'Based on current difficulty matrices and aspirant scoring trends, the predicted Tier 1 qualifying cutoff is 135 ± 3 marks for UR category.',
                  'अनुमानित टियर 1 कटऑफ 135 ± 3 अंक रहने की संभावना है।'
                )}
              >
                <Flame size={14} color="#D97706" />
                <span>"SSC CGL Safe Score & Cutoff"</span>
              </button>
            </div>
          </section>
        </div>

        {/* Right Column: Interactive Voice Canvas */}
        <div className="va-right-canvas">
          <section className="va-card va-canvas-card" aria-label="Live Voice Session">
            {/* Session Status Bar */}
            <div className="va-session-topbar">
              <div className="session-status-left">
                <span className="live-pulse-dot"></span>
                <strong>Live Voice Session: {languages.find(l => l.id === activeLang)?.code}</strong>
              </div>
              <div className="session-badges">
                <span className="va-trust-chip">
                  <ShieldCheck size={13} color="#024A00" /> NIC MeghRaj AI Node (DEL-01)
                </span>
              </div>
            </div>

            {/* Conversation History */}
            <div className="va-dialog-stream" role="log" aria-live="polite">
              {messages.map((msg, idx) => (
                <div key={idx} className={`va-chat-row ${msg.role}`}>
                  <div className="va-chat-bubble">
                    <div className="bubble-header">
                      <strong className="bubble-sender">{msg.role === 'ai' ? '🇮🇳 Bhashini AI Tutor' : 'You (Aspirant)'}</strong>
                      <span className="bubble-time">{msg.timestamp}</span>
                    </div>

                    <p className="bubble-text-en">{msg.text}</p>
                    {msg.textHi && (
                      <p className="bubble-text-hi">{msg.textHi}</p>
                    )}

                    {msg.role === 'ai' && (
                      <div className="bubble-audio-actions">
                        <button className="bubble-audio-btn" aria-label="Listen to message audio">
                          <Volume2 size={15} /> Listen Audio ({speechSpeed})
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Listening Active Waveform */}
              {isListening && (
                <div className="va-listening-box" role="status">
                  <div className="va-equalizer-waves">
                    <div className="eq-bar bar1"></div>
                    <div className="eq-bar bar2"></div>
                    <div className="eq-bar bar3"></div>
                    <div className="eq-bar bar4"></div>
                    <div className="eq-bar bar5"></div>
                    <div className="eq-bar bar6"></div>
                    <div className="eq-bar bar7"></div>
                  </div>
                  <span className="listening-txt">Listening in {languages.find(l => l.id === activeLang)?.name}... Speak now</span>
                </div>
              )}
            </div>

            {/* Central Giant Voice Trigger Control */}
            <div className="va-bottom-control-bar">
              <div className="va-mic-capsule">
                <button 
                  className={`va-giant-mic-btn ${isListening ? 'listening' : ''}`}
                  onClick={toggleListen}
                  aria-label={isListening ? 'Stop voice recording' : 'Start speaking'}
                >
                  <Mic size={36} color="#FFFFFF" />
                  {isListening && <div className="giant-pulse-ring"></div>}
                </button>
                <span className="mic-hint-text">
                  {isListening ? 'Tap to submit voice query...' : 'Tap & Speak your question in any language'}
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default VoiceAssistant;
