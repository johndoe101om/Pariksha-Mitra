import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Send, Paperclip, Mic, MicOff, ThumbsUp, ThumbsDown, Bookmark, 
  Bot, User, Sparkles, Shield, BookOpen, Volume2, Copy, Check, 
  HelpCircle, ChevronRight, ArrowRight, Image, History, Zap,
  Lightbulb, RefreshCw, X, Share2, CheckCircle2, TrendingUp
} from 'lucide-react';
import './AIDoubtSolver.css';

interface Message {
  id: number;
  sender: 'ai' | 'user';
  text?: string;
  richContent?: {
    topic: string;
    explanation: string[];
    formulaOrTrick?: string;
    ncertReference: string;
    pyqNote?: string;
    followUpSuggestions: string[];
  };
  imagePreview?: string;
  timestamp: string;
  isSaved?: boolean;
}

export default function AIDoubtSolver() {
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [inputStr, setInputStr] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [speakingId, setSpeakingId] = useState<number | null>(null);
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [languageMode, setLanguageMode] = useState<'bilingual' | 'hindi' | 'english'>('bilingual');

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: 'Namaste Rahul! 👋 I am your 24/7 AI Conceptual Mentor, trained on standard NCERTs, PIB, and official UPSC/SSC syllabi. Ask any doubt by typing, speaking, or uploading an image of a problem.',
      timestamp: '10:00 AM'
    },
    {
      id: 2,
      sender: 'user',
      text: 'What is the exact difference between a Money Bill (Article 110) and a Financial Bill (Article 117)?',
      timestamp: '10:01 AM'
    },
    {
      id: 3,
      sender: 'ai',
      richContent: {
        topic: 'Indian Polity: Money Bill vs Financial Bill (Constitutional Difference)',
        explanation: [
          '**1. Definition & Scope:** Every Money Bill is a Financial Bill, but every Financial Bill is NOT a Money Bill.',
          '**2. Article 110 (Money Bill):** Deals exclusively with 7 matters specified in Art 110 (e.g. imposition/abolition of taxes, borrowing by Govt, Consolidated Fund of India withdrawals). Speaker certifies it.',
          '**3. Role of Rajya Sabha:** For Money Bills, Rajya Sabha CANNOT reject or amend; it can only make recommendations within 14 days. For Financial Bill Type-I (Art 117(1)), Rajya Sabha has equal power to reject or amend.',
          '**4. Joint Sitting (Article 108):** NOT available for Money Bills. Joint sitting CAN be summoned for Financial Bills if a deadlock occurs.'
        ],
        formulaOrTrick: '💡 MEMORY MNEMONIC: "All Money Bills are Financial Bills, like all Mangoes are Fruits — but Rajya Sabha has 0 veto on Money!"',
        ncertReference: 'NCERT Class 11: Indian Constitution at Work (Chapter 5: Legislature) & Laxmikanth Ch. 22',
        pyqNote: 'Directly tested in UPSC CSE Prelims 2018 (Q.12) & UPSC Prelims 2013.',
        followUpSuggestions: [
          'Can the Speaker decision on Money Bill be challenged in Court?',
          'Give me 3 practice MCQ questions on Article 110',
          'Explain Consolidated Fund vs Contingency Fund of India'
        ]
      },
      timestamp: '10:01 AM',
      isSaved: true
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputStr;
    if (!query.trim() && !attachedImage) return;

    const userMsgId = Date.now();
    const newMsg: Message = {
      id: userMsgId,
      sender: 'user',
      text: query,
      imagePreview: attachedImage || undefined,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setInputStr('');
    setAttachedImage(null);
    setIsTyping(true);

    // AI Dynamic Intelligent Response Simulator
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = generateSimulatedAIResponse(query);
      setMessages(prev => [...prev, aiResponse]);
    }, 1200);
  };

  const generateSimulatedAIResponse = (query: string): Message => {
    const qLower = query.toLowerCase();

    if (qLower.includes('inflation') || qLower.includes('repo') || qLower.includes('economy')) {
      return {
        id: Date.now(),
        sender: 'ai',
        richContent: {
          topic: 'Indian Economy: Monetary Policy & Inflation Control (RBI Mechanism)',
          explanation: [
            '**1. Repo Rate Impact:** When RBI hikes the Repo Rate (currently 6.50%), commercial banks borrow at higher interest, making loans costlier.',
            '**2. Liquidity Absorption:** Higher borrowing rates discourage excess consumer spending and corporate credit expansion, bringing down aggregate demand.',
            '**3. Monetary Policy Committee (MPC):** 6-member committee (3 RBI + 3 Govt nominees) mandated to maintain CPI inflation target at 4% (+/- 2%).'
          ],
          formulaOrTrick: '💡 EQUATION: ↑ Repo Rate ➔ ↑ Loan EMIs ➔ ↓ Money Supply in Market ➔ ↓ Demand ➔ ↓ Inflation',
          ncertReference: 'NCERT Class 12: Macroeconomics (Chapter 3: Money and Banking) & Economic Survey 2026',
          pyqNote: 'Asked in UPSC Prelims 2020 (Monetary Policy stance) and SSC CGL Tier-1 2023.',
          followUpSuggestions: [
            'What is the difference between Headline CPI vs Core Inflation?',
            'Explain Standing Deposit Facility (SDF) vs Reverse Repo',
            'Take a 5-question quiz on RBI Monetary Tools'
          ]
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
    } else if (qLower.includes('1857') || qLower.includes('history') || qLower.includes('british')) {
      return {
        id: Date.now(),
        sender: 'ai',
        richContent: {
          topic: 'Modern History: Revolt of 1857 (Administrative & Political Causes)',
          explanation: [
            '**1. Doctrine of Lapse:** Lord Dalhousie annexed key states (Satara 1848, Sambalpur 1849, Jhansi 1853, Nagpur 1854), alienating Indian royalty.',
            '**2. Annexation of Awadh (1856):** Nawab Wajid Ali Shah was deposed on charges of "misgovernance", causing severe discontent among sepoy families.',
            '**3. Immediate Spark:** Introduction of the Enfield P-53 rifle with greased cartridges suspected of containing beef and pork fat.',
            '**4. Aftermath:** Government of India Act 1858 transferred power from East India Company to the British Crown. Governor-General became Viceroy.'
          ],
          formulaOrTrick: '💡 CHRONOLOGY TRICK: "Satara First (1848), Awadh Last (1856) — Crown takes over in 1858!"',
          ncertReference: 'NCERT Class 12: Themes in Indian History Part III (Chapter 11: Rebels and the Raj)',
          pyqNote: 'Frequently tested in UPSC Mains GS-1 and Prelims 2019.',
          followUpSuggestions: [
            'Why did the 1857 Revolt fail to spread in South India?',
            'Explain the military reorganizations under the Peel Commission',
            'Generate 3 practice questions on Dalhousie policies'
          ]
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
    } else {
      return {
        id: Date.now(),
        sender: 'ai',
        richContent: {
          topic: `Conceptual Breakdown: "${query.substring(0, 45)}..."`,
          explanation: [
            '**1. Core Principle:** This concept forms an essential pillar of your target exam syllabus.',
            '**2. Analytical Framework:** When evaluating this topic, break it into (a) Definition & Background, (b) Key Mechanisms, and (c) Modern Practical Application.',
            '**3. Exam Perspective:** Focus on remembering key constitutional articles, chronological timelines, or scientific formulas.'
          ],
          formulaOrTrick: '💡 PRO TIP: Always connect static textbook concepts with current PIB & Hindu editorial developments for high marks.',
          ncertReference: 'Aligned with Official NCERT Curriculum & Ministry of Education Syllabus Repository',
          pyqNote: 'Relevant for UPSC CSE GS Papers & SSC Graduate Tier-1.',
          followUpSuggestions: [
            'Explain this in simpler terms with a real-life example',
            'Translate this explanation to pure Hindi (हिंदी)',
            'Give me 3 practice questions on this topic'
          ]
        },
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
    }
  };

  const handleCopy = (id: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleToggleSave = (id: number) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, isSaved: !m.isSaved } : m));
  };

  const handleSpeak = (id: number, text: string) => {
    if (speakingId === id) {
      window.speechSynthesis.cancel();
      setSpeakingId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.onend = () => setSpeakingId(null);
    setSpeakingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleSimulateImageUpload = () => {
    setAttachedImage('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&auto=format&fit=crop&q=60');
  };

  const handleVoiceInput = () => {
    if (isListening) {
      setIsListening(false);
      return;
    }
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      setInputStr('Explain the difference between Monetary Policy vs Fiscal Policy');
    }, 2500);
  };

  const samplePrompts = [
    'Difference between Money Bill and Financial Bill',
    'How does RBI Repo Rate control inflation?',
    'What were the key causes of the 1857 Revolt?',
    'Explain Fundamental Rights vs Directive Principles (DPSP)'
  ];

  return (
    <div className="ai-doubt-solver-page">
      {/* Top Banner Header */}
      <section className="doubt-solver-hero-bar">
        <div className="hero-head-left">
          <div className="hero-seal-tags">
            <span className="gov-seal-chip">
              <Shield size={14} /> National Sovereign AI Tutor • Govt. of India
            </span>
            <span className="ai-status-pulse">
              <span className="live-ai-dot"></span> 24/7 Academic Mentor Active
            </span>
          </div>
          <h1>AI Doubt Solver & Conceptual Mentor / 24x7 संशय समाधान</h1>
          <p>
            Instant, step-by-step bilingual explanations referencing official NCERT textbooks, standard references (Laxmikanth, Spectrum, Ramesh Singh), and past year questions.
          </p>
        </div>

        <div className="hero-head-right">
          <button className="btn-view-history" onClick={() => navigate('/doubt-history')}>
            <History size={16} /> Saved Doubts & History
          </button>
        </div>
      </section>

      {/* Subject Filter Bar */}
      <div className="doubt-subject-filter-strip">
        <div className="subject-pills-list">
          {[
            { id: 'All', label: '🌟 All Subjects' },
            { id: 'Polity', label: '🏛️ Indian Polity & Constitution' },
            { id: 'History', label: '📜 Modern & Ancient History' },
            { id: 'Economy', label: '📈 Indian Economy' },
            { id: 'Geography', label: '🌍 Geography & Climate' },
            { id: 'Science', label: '🧬 Science & Tech' },
            { id: 'CSAT', label: '🔢 CSAT & Quantitative' }
          ].map(subj => (
            <button
              key={subj.id}
              className={`subj-pill-btn ${selectedSubject === subj.id ? 'active' : ''}`}
              onClick={() => setSelectedSubject(subj.id)}
            >
              {subj.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Chat Area */}
      <div className="doubt-chat-layout">
        {/* Main Conversation Stream (Left 70%) */}
        <div className="doubt-chat-main-card">
          <div className="messages-scroll-stream">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-bubble-wrapper ${msg.sender}`}>
                <div className={`sender-avatar-icon ${msg.sender}`}>
                  {msg.sender === 'ai' ? <Bot size={20} color="#FFF" /> : <User size={20} color="#FFF" />}
                </div>

                <div className="bubble-content-card">
                  {/* Image Attachment Preview */}
                  {msg.imagePreview && (
                    <div className="msg-attached-img">
                      <img src={msg.imagePreview} alt="Attached question" />
                      <span className="ocr-pill"><Sparkles size={12} /> Text Extracted via Sovereign OCR</span>
                    </div>
                  )}

                  {/* Simple text message */}
                  {msg.text && <p className="plain-msg-text">{msg.text}</p>}

                  {/* Structured Rich AI Response */}
                  {msg.richContent && (
                    <div className="structured-ai-response">
                      <div className="ai-response-topic-badge">
                        <BookOpen size={16} color="#0033A0" />
                        <strong>{msg.richContent.topic}</strong>
                      </div>

                      {/* Explanation Bullets */}
                      <div className="ai-explanation-bullets">
                        {msg.richContent.explanation.map((bullet, i) => (
                          <div key={i} className="bullet-point">
                            <span className="bullet-dot">•</span>
                            <div className="bullet-text" dangerouslySetInnerHTML={{ 
                              __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                            }} />
                          </div>
                        ))}
                      </div>

                      {/* Formula / Mnemonic Box */}
                      {msg.richContent.formulaOrTrick && (
                        <div className="mnemonic-box">
                          {msg.richContent.formulaOrTrick}
                        </div>
                      )}

                      {/* NCERT & Source Reference */}
                      <div className="ncert-reference-strip">
                        <Shield size={14} color="#024A00" />
                        <span><strong>Source:</strong> {msg.richContent.ncertReference}</span>
                      </div>

                      {/* PYQ Note */}
                      {msg.richContent.pyqNote && (
                        <div className="pyq-relevance-chip">
                          <CheckCircle2 size={14} color="#D97706" />
                          <span>{msg.richContent.pyqNote}</span>
                        </div>
                      )}

                      {/* Follow-up Question Chips */}
                      {msg.richContent.followUpSuggestions && (
                        <div className="followup-chips-section">
                          <span className="followup-heading">💡 Explore deeper with 1-click:</span>
                          <div className="followup-chips-grid">
                            {msg.richContent.followUpSuggestions.map((sug, sIdx) => (
                              <button 
                                key={sIdx} 
                                className="followup-chip"
                                onClick={() => handleSend(sug)}
                              >
                                {sug} <ArrowRight size={12} />
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bubble Footer Actions */}
                  <div className="bubble-footer-meta">
                    <span className="msg-timestamp">{msg.timestamp}</span>

                    {msg.sender === 'ai' && (
                      <div className="msg-action-icons">
                        <button 
                          className={`btn-bubble-action ${msg.isSaved ? 'active' : ''}`}
                          onClick={() => handleToggleSave(msg.id)}
                          title="Save to Flashcards"
                        >
                          <Bookmark size={14} />
                          <span>{msg.isSaved ? 'Saved' : 'Save'}</span>
                        </button>

                        <button 
                          className="btn-bubble-action"
                          onClick={() => handleSpeak(msg.id, msg.text || (msg.richContent?.explanation.join('. ') || ''))}
                          title="Listen with AI Voice"
                        >
                          <Volume2 size={14} />
                          <span>{speakingId === msg.id ? 'Stop' : 'Listen'}</span>
                        </button>

                        <button 
                          className="btn-bubble-action"
                          onClick={() => handleCopy(msg.id, msg.text || (msg.richContent?.explanation.join('\n') || ''))}
                          title="Copy text"
                        >
                          {copiedId === msg.id ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
                          <span>{copiedId === msg.id ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Live Typing Indicator */}
            {isTyping && (
              <div className="message-bubble-wrapper ai">
                <div className="sender-avatar-icon ai">
                  <Bot size={20} color="#FFF" />
                </div>
                <div className="typing-indicator-card">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-text">Consulting NCERT & syllabus repository...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Strip */}
          <div className="quick-suggestions-shelf">
            <span className="shelf-label"><Lightbulb size={14} color="#FE6500" /> Trending Doubts:</span>
            <div className="prompts-slider">
              {samplePrompts.map((prompt, pIdx) => (
                <button 
                  key={pIdx} 
                  className="quick-prompt-btn"
                  onClick={() => handleSend(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Station */}
          <div className="doubt-input-station">
            {/* Attached Image Thumbnail */}
            {attachedImage && (
              <div className="attached-img-preview-bar">
                <div className="attached-img-thumb">
                  <img src={attachedImage} alt="Uploaded problem" />
                  <span>Question Image Attached (OCR Ready)</span>
                </div>
                <button className="btn-remove-attachment" onClick={() => setAttachedImage(null)}>
                  <X size={14} />
                </button>
              </div>
            )}

            <div className="input-bar-flex">
              <button 
                className="btn-input-tool" 
                onClick={handleSimulateImageUpload}
                title="Upload Photo of Textbook Problem"
              >
                <Image size={19} color="#0033A0" />
              </button>

              <button 
                className={`btn-input-tool ${isListening ? 'listening' : ''}`}
                onClick={handleVoiceInput}
                title="Voice Question (Hindi / English)"
              >
                {isListening ? <MicOff size={19} color="#DC2626" /> : <Mic size={19} color="#0033A0" />}
              </button>

              <input
                type="text"
                className="chat-text-input"
                placeholder={isListening ? 'Listening to your voice... Speak now in Hindi or English...' : 'Ask your exam doubt (e.g. Article 32 vs 226, GDP calculation, 1857 Revolt)...'}
                value={inputStr}
                onChange={(e) => setInputStr(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />

              <button 
                className="btn-send-message" 
                onClick={() => handleSend()}
                disabled={!inputStr.trim() && !attachedImage}
              >
                <Send size={18} />
              </button>
            </div>

            <div className="input-bottom-tips">
              <span>Supports Bilingual Queries (हिंदी / English) • Real-time Mathematical & Constitutional Formatting</span>
            </div>
          </div>
        </div>

        {/* Right Sidebar Tools & Suggested Actions (Right 30%) */}
        <aside className="doubt-sidebar-panel">
          {/* Smart Practice Challenge Card */}
          <div className="doubt-side-widget practice-challenge-widget">
            <div className="widget-header-row">
              <Zap size={18} color="#FE6500" />
              <h4>AI Adaptive Quiz Generator</h4>
            </div>
            <p className="widget-desc">
              Test your understanding of recently asked concepts (Money Bills, Inflation, and 1857 Revolt).
            </p>
            <button className="btn-start-adaptive-quiz" onClick={() => navigate('/practice')}>
              Start 5-Minute Concept Quiz <ArrowRight size={15} />
            </button>
          </div>

          {/* Trending Today Across India */}
          <div className="doubt-side-widget trending-doubts-widget">
            <div className="widget-header-row">
              <TrendingUp size={18} color="#0033A0" />
              <h4>Trending Doubts Today</h4>
            </div>
            <div className="trending-doubts-list">
              {[
                { q: 'Doctrine of Basic Structure cases (Kesavananda vs Minerva)', count: '4.2k asked' },
                { q: 'Repo Rate vs Standing Deposit Facility (SDF)', count: '3.8k asked' },
                { q: 'El Niño vs La Niña impact on Indian Monsoon', count: '3.1k asked' },
                { q: 'Difference between Ordinance (Art 123) and Act', count: '2.7k asked' }
              ].map((item, idx) => (
                <div key={idx} className="trending-item" onClick={() => handleSend(item.q)}>
                  <strong>{item.q}</strong>
                  <span>🔥 {item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Academic Sources */}
          <div className="doubt-side-widget sources-widget">
            <div className="widget-header-row">
              <Shield size={18} color="#024A00" />
              <h4>Verified Sovereign Sources</h4>
            </div>
            <div className="sources-tags-stack">
              <span className="source-tag">📚 NCERT Classes 6-12 (All Subjects)</span>
              <span className="source-tag">🏛️ Ministry of Law & Justice Enactments</span>
              <span className="source-tag">📰 Press Information Bureau (PIB) Official</span>
              <span className="source-tag">📊 Economic Survey & Union Budget 2026</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
