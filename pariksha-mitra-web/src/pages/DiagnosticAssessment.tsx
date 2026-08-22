import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RefreshCw, 
  HelpCircle, 
  Brain, 
  Award, 
  Layers,
  Clock,
  Check
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import './DiagnosticAssessment.css';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  hindiText?: string;
  timestamp: string;
  type?: 'intro' | 'choice' | 'question' | 'feedback' | 'summary' | 'text';
  options?: {
    id: string;
    text: string;
    isCorrect?: boolean;
  }[];
  questionData?: {
    qIndex: number;
    subject: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
  scoreSummary?: {
    score: number;
    total: number;
    strengths: string[];
    weaknesses: string[];
    readiness: string;
  };
}

const EXAM_QUESTIONS: Record<string, any[]> = {
  'upsc': [
    {
      subject: 'Indian Polity (भारतीय राजव्यवस्था)',
      question: 'Which Article of the Indian Constitution guarantees the "Right to Protection of Life and Personal Liberty"?',
      options: ['Article 19', 'Article 21', 'Article 32', 'Article 14'],
      correctIndex: 1,
      explanation: 'Article 21 states that no person shall be deprived of his life or personal liberty except according to procedure established by law.'
    },
    {
      subject: 'Modern History (आधुनिक भारत)',
      question: 'The historic Champaran Satyagraha (1917) led by Mahatma Gandhi was associated with which cultivation?',
      options: ['Cotton', 'Indigo (नील)', 'Opium', 'Tea'],
      correctIndex: 1,
      explanation: 'Mahatma Gandhi organized the 1917 Champaran Satyagraha in Bihar against the Tinkathia system imposed on Indigo farmers.'
    },
    {
      subject: 'Economy (भारतीय अर्थव्यवस्था)',
      question: 'Which institution in India is exclusively empowered to formulate and operate Monetary Policy?',
      options: ['Ministry of Finance', 'NITI Aayog', 'Reserve Bank of India (RBI)', 'Securities & Exchange Board (SEBI)'],
      correctIndex: 2,
      explanation: 'The Monetary Policy Committee (MPC) of the Reserve Bank of India (RBI) sets the repo rate to maintain price stability with growth.'
    },
    {
      subject: 'Geography (भूगोल)',
      question: 'Through which of the following Indian states does the Tropic of Cancer (23.5° N) NOT pass?',
      options: ['Rajasthan', 'Gujarat', 'Odisha', 'Tripura'],
      correctIndex: 2,
      explanation: 'Tropic of Cancer passes through 8 Indian states: Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram. It does NOT pass through Odisha.'
    },
    {
      subject: 'CSAT / Aptitude (सीसैट)',
      question: 'If a train 150 meters long crosses a pole in 9 seconds, what is the speed of the train in km/h?',
      options: ['40 km/h', '50 km/h', '60 km/h', '75 km/h'],
      correctIndex: 2,
      explanation: 'Speed = Distance / Time = 150m / 9s = (50/3) m/s. In km/h = (50/3) × (18/5) = 60 km/h.'
    }
  ],
  'ssc': [
    {
      subject: 'Quantitative Aptitude',
      question: 'If the price of sugar increases by 25%, by what percentage must a household reduce consumption to keep expenditure constant?',
      options: ['20%', '25%', '15%', '16.66%'],
      correctIndex: 0,
      explanation: 'Reduction % = [r / (100 + r)] × 100 = [25 / 125] × 100 = 20%.'
    },
    {
      subject: 'Reasoning Ability',
      question: 'Find the missing number in the series: 3, 7, 15, 31, 63, ?',
      options: ['125', '127', '129', '131'],
      correctIndex: 1,
      explanation: 'Pattern: (x × 2) + 1. So 63 × 2 + 1 = 127.'
    },
    {
      subject: 'English Comprehension',
      question: 'Choose the antonym for the word "BENEVOLENT":',
      options: ['Generous', 'Malevolent', 'Kind', 'Affectionate'],
      correctIndex: 1,
      explanation: 'Benevolent means kind and well-meaning. Its direct antonym is Malevolent (wishing evil).'
    },
    {
      subject: 'General Awareness',
      question: 'Who is regarded as the Father of the Indian Constitution?',
      options: ['Dr. B.R. Ambedkar', 'Jawaharlal Nehru', 'Dr. Rajendra Prasad', 'Sardar Patel'],
      correctIndex: 0,
      explanation: 'Dr. B.R. Ambedkar was the Chairman of the Drafting Committee of the Constituent Assembly.'
    }
  ]
};

export default function DiagnosticAssessment() {
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [userName, setUserName] = useState('Aspirant');
  const [targetExam, setTargetExam] = useState('UPSC Civil Services');
  const [examKey, setExamKey] = useState<'upsc' | 'ssc'>('upsc');
  const [userStage, setUserStage] = useState<string>('');
  
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ isCorrect: boolean; subject: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [assessmentComplete, setAssessmentComplete] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const userStr = localStorage.getItem('pariksha_mitra_user');
    let uName = 'Rahul';
    let uExam = 'UPSC CSE';
    if (userStr) {
      try {
        const u = JSON.parse(userStr);
        if (u.name) uName = u.name.split(' ')[0];
        if (u.targetExam) uExam = u.targetExam;
      } catch (e) {}
    }
    setUserName(uName);
    setTargetExam(uExam);

    const isSSC = uExam.toLowerCase().includes('ssc') || uExam.toLowerCase().includes('cgl');
    const selectedKey = isSSC ? 'ssc' : 'upsc';
    setExamKey(selectedKey);

    // Initial AI Welcome Message
    const initialMsg: Message = {
      id: 'msg-1',
      sender: 'ai',
      text: `Namaste ${uName}! 🙏 I am your Pariksha Mitra AI Diagnostic Tutor. I will guide you through an adaptive diagnostic assessment for **${uExam}** to identify your syllabus strengths and weak areas.`,
      hindiText: `नमस्ते ${uName}! मैं आपका AI नैदानिक शिक्षक हूँ। मैं आपकी तैयारी के स्तर का मूल्यांकन करूँगा।`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'intro'
    };

    const stagePromptMsg: Message = {
      id: 'msg-2',
      sender: 'ai',
      text: `To calibrate the diagnostic engine, please tell me your current preparation stage:`,
      hindiText: `कृपया अपनी वर्तमान तैयारी का चरण चुनें:`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'choice',
      options: [
        { id: 'beg', text: '🌱 Beginner (0 - 3 Months Preparation)' },
        { id: 'int', text: '📚 Intermediate (Studied Core Syllabus Once)' },
        { id: 'adv', text: '🎯 Revision & Test Series Stage' }
      ]
    };

    setMessages([initialMsg, stagePromptMsg]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const addAiMessage = (msg: Omit<Message, 'id' | 'timestamp' | 'sender'>) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          ...msg,
          id: `msg-${Date.now()}-${Math.random()}`,
          sender: 'ai',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 700);
  };

  const handleStageSelect = (stageText: string) => {
    setUserStage(stageText);
    
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: `msg-u-${Date.now()}`,
        sender: 'user',
        text: stageText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    // AI acknowledges and presents Question 1
    const questions = EXAM_QUESTIONS[examKey] || EXAM_QUESTIONS['upsc'];
    const q1 = questions[0];

    addAiMessage({
      text: `Understood! Let's begin Question 1 of ${questions.length}. Tap the best option below:`,
      type: 'question',
      questionData: {
        qIndex: 0,
        subject: q1.subject,
        question: q1.question,
        options: q1.options,
        correctIndex: q1.correctIndex,
        explanation: q1.explanation
      }
    });
  };

  const handleAnswerSelect = (optionIndex: number, qData: any) => {
    const isCorrect = optionIndex === qData.correctIndex;
    const selectedOptionText = qData.options[optionIndex];
    
    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: `msg-u-${Date.now()}`,
        sender: 'user',
        text: `Option ${String.fromCharCode(65 + optionIndex)}: ${selectedOptionText}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    const newAnswers = [...userAnswers, { isCorrect, subject: qData.subject }];
    setUserAnswers(newAnswers);

    // AI feedback message
    const feedbackText = isCorrect 
      ? `✅ **Correct! Great job!**\n\n💡 *Explanation:* ${qData.explanation}`
      : `❌ **Incorrect.** The correct answer is **Option ${String.fromCharCode(65 + qData.correctIndex)}: ${qData.options[qData.correctIndex]}**.\n\n💡 *Explanation:* ${qData.explanation}`;

    addAiMessage({
      text: feedbackText,
      type: 'feedback'
    });

    const questions = EXAM_QUESTIONS[examKey] || EXAM_QUESTIONS['upsc'];
    const nextIndex = qData.qIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQIndex(nextIndex);
      const nextQ = questions[nextIndex];
      setTimeout(() => {
        addAiMessage({
          text: `Here is Question ${nextIndex + 1} of ${questions.length} (${nextQ.subject}):`,
          type: 'question',
          questionData: {
            qIndex: nextIndex,
            subject: nextQ.subject,
            question: nextQ.question,
            options: nextQ.options,
            correctIndex: nextQ.correctIndex,
            explanation: nextQ.explanation
          }
        });
      }, 1200);
    } else {
      // Complete Assessment & Generate Summary
      setAssessmentComplete(true);
      setTimeout(() => {
        const correctCount = newAnswers.filter(a => a.isCorrect).length;
        const total = questions.length;
        const pct = Math.round((correctCount / total) * 100);

        const strengths = newAnswers.filter(a => a.isCorrect).map(a => a.subject.split(' (')[0]);
        const weaknesses = newAnswers.filter(a => !a.isCorrect).map(a => a.subject.split(' (')[0]);

        addAiMessage({
          text: `🎉 **Diagnostic Assessment Completed!**\n\nHere is your performance breakdown:`,
          type: 'summary',
          scoreSummary: {
            score: correctCount,
            total: total,
            strengths: strengths.length > 0 ? strengths : ['Basic General Knowledge'],
            weaknesses: weaknesses.length > 0 ? weaknesses : ['Advanced Question Speed'],
            readiness: pct >= 75 ? 'High Readiness (Ready for Advanced Mocks)' : pct >= 50 ? 'Moderate Foundation (Focus on Weak Subjects)' : 'Foundational Stage (Syllabus Coverage Needed)'
          }
        });
      }, 1200);
    }
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userText = inputVal;
    setInputVal('');

    setMessages(prev => [
      ...prev,
      {
        id: `msg-u-${Date.now()}`,
        sender: 'user',
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);

    // AI response to user doubt/question
    addAiMessage({
      text: `Thank you for asking! Regarding "${userText}": In ${targetExam}, consistent daily PYQ practice and concept mapping are key to high scores. Let's continue testing your core syllabus baseline, or review your 30-day master timetable!`,
      type: 'text'
    });
  };

  return (
    <div className="diagnostic-chat-container">
      {/* TOP CHAT HEADER */}
      <div className="chat-header-bar">
        <div className="bot-profile">
          <div className="bot-avatar-ring">
            <Bot size={24} color="#FFFFFF" />
            <span className="online-indicator"></span>
          </div>
          <div className="bot-title-group">
            <h2>AI Diagnostic Tutor <span className="bot-badge">Gov AI Model</span></h2>
            <p className="bot-sub">Ministry of Education • Adaptive Evaluation Engine</p>
          </div>
        </div>

        <div className="chat-header-meta">
          <div className="exam-tag-pill">
            <Award size={14} />
            <span>Target: <strong>{targetExam}</strong></span>
          </div>
          <Link to="/syllabus" className="btn-view-syllabus">
            <Layers size={14} /> View Syllabus
          </Link>
        </div>
      </div>

      {/* CHAT MESSAGES SCROLL AREA */}
      <div className="chat-messages-area">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-message-row ${msg.sender === 'ai' ? 'ai-row' : 'user-row'}`}>
            {msg.sender === 'ai' && (
              <div className="msg-avatar ai-avatar">
                <Bot size={18} color="#0033A0" />
              </div>
            )}

            <div className={`msg-bubble ${msg.sender === 'ai' ? 'ai-bubble' : 'user-bubble'}`}>
              <div className="msg-text">
                {msg.text.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              {msg.hindiText && (
                <div className="msg-hindi-hint">
                  {msg.hindiText}
                </div>
              )}

              {/* RENDER STAGE CHOICE OPTIONS */}
              {msg.type === 'choice' && !userStage && (
                <div className="interactive-options-stack">
                  {msg.options?.map((opt) => (
                    <button
                      key={opt.id}
                      className="choice-btn"
                      onClick={() => handleStageSelect(opt.text)}
                    >
                      <span>{opt.text}</span>
                      <ArrowRight size={16} />
                    </button>
                  ))}
                </div>
              )}

              {/* RENDER QUESTION CARD */}
              {msg.type === 'question' && msg.questionData && (
                <div className="chat-question-card">
                  <div className="q-badge-bar">
                    <span className="q-subject">{msg.questionData.subject}</span>
                    <span className="q-number">Question {msg.questionData.qIndex + 1}</span>
                  </div>

                  <h3 className="q-title-text">{msg.questionData.question}</h3>

                  <div className="q-options-grid">
                    {msg.questionData.options.map((optionText, optIdx) => (
                      <button
                        key={optIdx}
                        className="q-option-pill"
                        onClick={() => handleAnswerSelect(optIdx, msg.questionData)}
                      >
                        <span className="opt-letter">{String.fromCharCode(65 + optIdx)}</span>
                        <span className="opt-val">{optionText}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* RENDER SUMMARY CARD */}
              {msg.type === 'summary' && msg.scoreSummary && (
                <div className="chat-summary-card">
                  <div className="summary-score-header">
                    <div className="score-circle">
                      <span className="score-num">{msg.scoreSummary.score} / {msg.scoreSummary.total}</span>
                      <span className="score-lbl">Score</span>
                    </div>
                    <div className="score-desc">
                      <h4>{msg.scoreSummary.readiness}</h4>
                      <p>Profile mapped to national standard syllabus benchmark.</p>
                    </div>
                  </div>

                  <div className="summary-insights-grid">
                    <div className="insight-box box-strengths">
                      <div className="box-header">
                        <CheckCircle2 size={16} color="#024A00" />
                        <strong>Strengths</strong>
                      </div>
                      <ul>
                        {msg.scoreSummary.strengths.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>

                    <div className="insight-box box-weaknesses">
                      <div className="box-header">
                        <XCircle size={16} color="#B91C1C" />
                        <strong>Recommended Focus</strong>
                      </div>
                      <ul>
                        {msg.scoreSummary.weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                      </ul>
                    </div>
                  </div>

                  <div className="summary-action-box">
                    <button 
                      className="btn-launch-studyplan"
                      onClick={() => navigate('/diagnostic/result')}
                    >
                      <Sparkles size={18} /> View Auto-Generated 30-Day Master Plan <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              <span className="msg-time">{msg.timestamp}</span>
            </div>

            {msg.sender === 'user' && (
              <div className="msg-avatar user-avatar">
                <User size={18} color="#FFFFFF" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="chat-message-row ai-row">
            <div className="msg-avatar ai-avatar">
              <Bot size={18} color="#0033A0" />
            </div>
            <div className="typing-indicator-bubble">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* CHAT INPUT BAR */}
      <form className="chat-input-bar" onSubmit={handleCustomSend}>
        <input 
          type="text"
          className="chat-text-input"
          placeholder="Ask AI tutor anything about syllabus, concepts, or diagnostic results..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button 
          type="submit" 
          className="chat-send-btn"
          disabled={!inputVal.trim()}
          aria-label="Send message"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
