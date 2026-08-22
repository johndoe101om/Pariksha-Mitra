import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  X, 
  Minimize2, 
  Maximize2, 
  Globe, 
  Sparkles, 
  Send, 
  BookOpen, 
  HelpCircle, 
  Languages, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import './FloatingVoiceAssistant.css';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  textHi?: string;
  audioDuration?: string;
  timestamp: string;
}

const INDIAN_LANGUAGES = [
  { code: 'hi', name: 'हिन्दी', label: 'Hindi' },
  { code: 'en', name: 'English', label: 'English' },
  { code: 'bn', name: 'বাংলা', label: 'Bengali' },
  { code: 'te', name: 'తెలుగు', label: 'Telugu' },
  { code: 'mr', name: 'मराठी', label: 'Marathi' },
  { code: 'ta', name: 'தமிழ்', label: 'Tamil' },
  { code: 'gu', name: 'ગુજરાતી', label: 'Gujarati' },
  { code: 'kn', name: 'ಕನ್ನಡ', label: 'Kannada' },
  { code: 'ml', name: 'മലയാളം', label: 'Malayalam' },
  { code: 'or', name: 'ଓଡ଼ିଆ', label: 'Odia' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', label: 'Punjabi' },
  { code: 'as', name: 'অসমীয়া', label: 'Assamese' },
  { code: 'ur', name: 'اردو', label: 'Urdu' },
  { code: 'sa', name: 'संस्कृतम्', label: 'Sanskrit' }
];

export const FloatingVoiceAssistant: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState(INDIAN_LANGUAGES[0]);
  const [showLangMenu, setShowLangMenu] = useState<boolean>(false);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [textInput, setTextInput] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'assistant',
      text: 'Namaste! I am your Bhashini AI voice partner. How can I help with your exam preparation today?',
      textHi: 'नमस्ते! मैं आपका भाषिणी AI वॉयस साथी हूँ। आज मैं आपकी परीक्षा की तैयारी में क्या मदद कर सकता हूँ?',
      timestamp: 'Just now'
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const toggleVoiceRecording = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }

    setIsListening(true);
    setIsProcessing(false);

    // Simulate speech-to-text response after 3 seconds of voice interaction
    setTimeout(() => {
      setIsListening(false);
      setIsProcessing(true);

      const sampleQueries = [
        {
          q: 'Explain the difference between Fundamental Rights and DPSP in Indian Constitution',
          qHi: 'भारतीय संविधान में मौलिक अधिकार और नीति निर्देशक तत्वों में क्या अंतर है?',
          a: 'Fundamental Rights (Part III, Art 12-35) are justiciable and enforceable by courts. DPSPs (Part IV, Art 36-51) are non-justiciable guidelines for state policy to establish a welfare state.',
          aHi: 'मौलिक अधिकार (भाग III, अनु 12-35) न्यायोचित हैं और न्यायालय द्वारा लागू किए जा सकते हैं। जबकि नीति निर्देशक तत्व (भाग IV, अनु 36-51) गैर-न्यायोचित हैं और कल्याणकारी राज्य की स्थापना के दिशानिर्देश हैं।'
        },
        {
          q: 'What is the cutoff score for SSC CGL Tier 1 this year?',
          qHi: 'इस वर्ष एसएससी सीजीएल टियर 1 का संभावित कटऑफ क्या है?',
          a: 'Based on our AI Exam Predictor, the expected UR cutoff for SSC CGL 2026 is between 145-152 marks. Practice Tier 1 mock tests to secure a 160+ safe score.',
          aHi: 'हमारे AI परीक्षा भविष्यवक्ता के अनुसार, SSC CGL 2026 के लिए संभावित सामान्य कटऑफ 145-152 अंक है। सुरक्षित स्कोर के लिए 160+ का लक्ष्य रखें।'
        },
        {
          q: 'Quiz me with 3 questions on Modern Indian History',
          qHi: 'आधुनिक भारतीय इतिहास पर 3 महत्वपूर्ण प्रश्न पूछें।',
          a: 'Q1: Who founded the Asiatic Society of Bengal in 1784? (Ans: Sir William Jones). Q2: In which year was the Treaty of Salbai signed? (Ans: 1782). Would you like to practice more?',
          aHi: 'प्रश्न 1: 1784 में एशियाटिक सोसाइटी ऑफ बंगाल की स्थापना किसने की? (उत्तर: सर विलियम जोन्स)। प्रश्न 2: सालबाई की संधि किस वर्ष हुई थी? (उत्तर: 1782)। क्या आप और अभ्यास करना चाहते हैं?'
        }
      ];

      const randomSample = sampleQueries[Math.floor(Math.random() * sampleQueries.length)];

      setTimeout(() => {
        setIsProcessing(false);
        const userMsg: Message = {
          id: Date.now().toString(),
          sender: 'user',
          text: randomSample.q,
          textHi: randomSample.qHi,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: randomSample.a,
          textHi: randomSample.aHi,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg, aiMsg]);
        if (!isMuted) {
          playAudioSpeech();
        }
      }, 1000);
    }, 3000);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!textInput.trim()) return;

    const userText = textInput;
    setTextInput('');

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: `Got your query: "${userText}". According to official syllabus guidelines, focus on revision chapters and attempt diagnostic tests to improve speed.`,
        textHi: `आपका प्रश्न प्राप्त हुआ। आधिकारिक पाठ्यक्रम के अनुसार, पुनरीक्षण अध्यायों पर ध्यान दें और गति में सुधार के लिए टेस्ट दें।`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiResponse]);
      if (!isMuted) {
        playAudioSpeech();
      }
    }, 1200);
  };

  const playAudioSpeech = () => {
    setIsSpeaking(true);
    setTimeout(() => {
      setIsSpeaking(false);
    }, 3500);
  };

  const handleQuickCommand = (promptText: string) => {
    setTextInput(promptText);
    setTimeout(() => {
      const userMsg: Message = {
        id: Date.now().toString(),
        sender: 'user',
        text: promptText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, userMsg]);
      setIsProcessing(true);

      setTimeout(() => {
        setIsProcessing(false);
        const aiResponse: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: `Executing: "${promptText}". Loading tailored study material and voice explanation in ${selectedLang.name}.`,
          textHi: `"${promptText}" पर कार्य प्रारंभ। ${selectedLang.name} में संबंधित अध्ययन सामग्री और वॉयस व्याख्या लोड हो रही है।`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiResponse]);
        if (!isMuted) playAudioSpeech();
      }, 1000);
    }, 100);
  };

  return (
    <aside className="floating-voice-root" aria-label="Bhashini Floating Voice Assistant">
      {/* 1. Floating Action Button (FAB) */}
      {!isOpen && (
        <button 
          className="floating-voice-fab"
          onClick={() => { setIsOpen(true); setIsMinimized(false); }}
          aria-label="Open Bhashini Voice Assistant / भाषिणी वॉयस असिस्टेंट खोलें"
          title="Bhashini AI Voice Assistant"
        >
          <span className="fab-pulse-ring"></span>
          <div className="fab-icon-wrap">
            <Mic size={24} className="fab-mic-icon" />
          </div>
          <div className="fab-label-capsule">
            <span className="fab-lang-dot"></span>
            <span className="fab-main-txt">Bhashini Voice</span>
            <span className="fab-hi-txt">भाषिणी वॉयस</span>
          </div>
        </button>
      )}

      {/* 2. Floating Assistant Popover Window */}
      {isOpen && (
        <div 
          className={`floating-voice-window ${isMinimized ? 'minimized' : ''}`}
          role="dialog"
          aria-labelledby="voice-assistant-title"
        >
          {/* Header */}
          <div className="fvw-header">
            <div className="fvw-header-left">
              <div className="fvw-bhashini-badge">
                <span className="fvw-tricolor-dot">🇮🇳</span>
                <span className="fvw-title" id="voice-assistant-title">
                  Bhashini AI <span className="hi">भाषिणी</span>
                </span>
              </div>
              
              {/* Language Pill Selector */}
              <div className="fvw-lang-selector-wrap">
                <button 
                  className="fvw-lang-pill"
                  onClick={() => setShowLangMenu(!showLangMenu)}
                  aria-label="Change voice language"
                  aria-expanded={showLangMenu}
                >
                  <Languages size={14} />
                  <span>{selectedLang.name}</span>
                  <ChevronDown size={12} />
                </button>

                {showLangMenu && (
                  <div className="fvw-lang-dropdown" role="menu">
                    <div className="fvw-lang-dropdown-head">Select Voice Language</div>
                    <div className="fvw-lang-list">
                      {INDIAN_LANGUAGES.map(lang => (
                        <button
                          key={lang.code}
                          className={`fvw-lang-item ${selectedLang.code === lang.code ? 'active' : ''}`}
                          onClick={() => { setSelectedLang(lang); setShowLangMenu(false); }}
                          role="menuitem"
                        >
                          <span className="fvw-lang-native">{lang.name}</span>
                          <span className="fvw-lang-en">{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Window Controls */}
            <div className="fvw-header-controls">
              <button 
                className="fvw-ctrl-btn" 
                onClick={() => setIsMuted(!isMuted)} 
                aria-label={isMuted ? 'Unmute voice playback' : 'Mute voice playback'}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              <button 
                className="fvw-ctrl-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                aria-label={isMinimized ? 'Expand window' : 'Minimize window'}
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>

              <button 
                className="fvw-ctrl-btn close"
                onClick={() => setIsOpen(false)}
                aria-label="Close voice assistant window"
                title="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Window Body (Hidden when minimized) */}
          {!isMinimized && (
            <>
              {/* Sovereign Cloud & Speed Banner */}
              <div className="fvw-sub-banner">
                <span className="fvw-cloud-tag">
                  <Sparkles size={12} /> NIC Sovereign AI • 14 Languages
                </span>
                <button 
                  className="fvw-fullpage-link"
                  onClick={() => { setIsOpen(false); navigate('/voice-assistant'); }}
                  title="Open Dedicated Full Page Studio"
                >
                  Full Studio <ExternalLink size={11} />
                </button>
              </div>

              {/* Chat & Audio Stream */}
              <div className="fvw-chat-body" role="log" aria-live="polite">
                {messages.map(msg => (
                  <div key={msg.id} className={`fvw-msg-row ${msg.sender}`}>
                    <div className="fvw-msg-bubble">
                      <p className="fvw-msg-text-en">{msg.text}</p>
                      {msg.textHi && <p className="fvw-msg-text-hi">{msg.textHi}</p>}
                      <div className="fvw-msg-meta">
                        <span className="fvw-msg-time">{msg.timestamp}</span>
                        {msg.sender === 'assistant' && (
                          <button 
                            className="fvw-speak-btn"
                            onClick={playAudioSpeech}
                            aria-label="Replay audio translation"
                            title="Listen"
                          >
                            <Volume2 size={13} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isListening && (
                  <div className="fvw-listening-card" role="status" aria-live="assertive">
                    <div className="fvw-pulse-waves">
                      <span className="wave bar1"></span>
                      <span className="wave bar2"></span>
                      <span className="wave bar3"></span>
                      <span className="wave bar4"></span>
                      <span className="wave bar5"></span>
                    </div>
                    <span className="fvw-listen-text">Listening in {selectedLang.name}... Speak clearly</span>
                  </div>
                )}

                {isProcessing && (
                  <div className="fvw-thinking-card">
                    <div className="fvw-typing-dots">
                      <span></span><span></span><span></span>
                    </div>
                    <span>Processing with Bhashini Neural Engine...</span>
                  </div>
                )}

                {isSpeaking && (
                  <div className="fvw-speaking-indicator">
                    <Volume2 size={14} className="speaking-icon-pulse" />
                    <span>Speaking in {selectedLang.name} audio stream...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Command Suggestions */}
              <div className="fvw-quick-chips" aria-label="Suggested voice commands">
                <button className="fvw-chip" onClick={() => handleQuickCommand('Explain Article 21 Right to Life')}>
                  <BookOpen size={12} /> Article 21
                </button>
                <button className="fvw-chip" onClick={() => handleQuickCommand('Daily Current Affairs 5 MCQ Quiz')}>
                  <Sparkles size={12} /> 5-MCQ Quiz
                </button>
                <button className="fvw-chip" onClick={() => handleQuickCommand('Exam Cutoff & Safe Score Guide')}>
                  <HelpCircle size={12} /> Cutoff Guide
                </button>
                <button className="fvw-chip" onClick={() => handleQuickCommand('Read this screen notes aloud')}>
                  <Volume2 size={12} /> Read Screen
                </button>
              </div>

              {/* Voice Interaction & Text Input Bar */}
              <div className="fvw-footer">
                <form onSubmit={handleSendMessage} className="fvw-input-form">
                  <input
                    type="text"
                    className="fvw-text-input"
                    placeholder={`Ask in ${selectedLang.label} or type query...`}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    aria-label="Type your doubt or question"
                  />
                  {textInput.trim() ? (
                    <button type="submit" className="fvw-send-btn" aria-label="Send message">
                      <Send size={16} />
                    </button>
                  ) : null}
                </form>

                {/* Central Large Microphone Trigger */}
                <div className="fvw-mic-action-box">
                  <button 
                    className={`fvw-central-mic-btn ${isListening ? 'active-listening' : ''}`}
                    onClick={toggleVoiceRecording}
                    aria-label={isListening ? 'Stop listening' : 'Start speaking with AI'}
                  >
                    {isListening ? <MicOff size={22} color="#FFFFFF" /> : <Mic size={22} color="#FFFFFF" />}
                  </button>
                  <span className="fvw-mic-hint">
                    {isListening ? 'Tap to Stop' : 'Tap & Speak'}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </aside>
  );
};

export default FloatingVoiceAssistant;
