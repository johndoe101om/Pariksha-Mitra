import React, { useState, useEffect } from 'react';
import { 
  Clock, CheckCircle2, XCircle, Bookmark, ChevronLeft, ChevronRight, 
  BookOpen, Brain, List, Flame, Target, Sparkles, Award, Volume2, 
  HelpCircle, Shuffle, Filter, ArrowRight, Check, RotateCcw, Share2,
  TrendingUp, Shield, Zap, RefreshCw, Layers, CheckSquare
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './PracticeHub.css';

interface Question {
  id: number;
  subject: string;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pyqTag?: string;
  textEn: string;
  textHi: string;
  options: { id: number; textEn: string; textHi: string }[];
  correctOption: number;
  explanationEn: string;
  explanationHi: string;
  formulaTip?: string;
  ncertRef?: string;
}

const SAMPLE_PRACTICE_QUESTIONS: Question[] = [
  {
    id: 1,
    subject: 'Quantitative Aptitude',
    topic: 'Profit, Loss & Discount',
    difficulty: 'Medium',
    pyqTag: 'SSC CGL 2023 Tier-1',
    textEn: 'A shopkeeper sells an article at a loss of 12.5%. Had he sold it for ₹ 51.80 more, he would have earned a profit of 6%. What is the cost price of the article?',
    textHi: 'एक दुकानदार किसी वस्तु को 12.5% की हानि पर बेचता है। यदि उसने इसे ₹ 51.80 अधिक में बेचा होता, तो उसे 6% का लाभ होता। वस्तु का क्रय मूल्य क्या है?',
    options: [
      { id: 1, textEn: '₹ 260.00', textHi: '₹ 260.00' },
      { id: 2, textEn: '₹ 280.00', textHi: '₹ 280.00' },
      { id: 3, textEn: '₹ 320.00', textHi: '₹ 320.00' },
      { id: 4, textEn: '₹ 350.00', textHi: '₹ 350.00' }
    ],
    correctOption: 2,
    explanationEn: 'Let Cost Price (CP) be x. Initial SP = 0.875x. New SP = 1.06x. Difference = 1.06x - 0.875x = 0.185x. Given 0.185x = 51.80 => x = 51.80 / 0.185 = ₹ 280.00.',
    explanationHi: 'माना क्रय मूल्य (CP) = x है। प्रारंभिक विक्रय मूल्य = 0.875x। नया विक्रय मूल्य = 1.06x। अंतर = 1.06x - 0.875x = 0.185x = 51.80 => x = ₹ 280.00।',
    formulaTip: 'Percentage difference = Loss% + Profit% = 12.5% + 6% = 18.5%. So, 18.5% of CP = ₹ 51.80 => CP = 51.80 / 0.185 = ₹ 280.',
    ncertRef: 'Class 8 NCERT Mathematics • Chapter 8: Comparing Quantities'
  },
  {
    id: 2,
    subject: 'Indian Polity & Constitution',
    topic: 'Fundamental Rights (Art 12-35)',
    difficulty: 'Hard',
    pyqTag: 'UPSC CSE Prelims 2022',
    textEn: 'Which of the following Fundamental Rights are available to Indian citizens only and NOT to foreigners residing in India?',
    textHi: 'निम्नलिखित में से कौन से मौलिक अधिकार केवल भारतीय नागरिकों को उपलब्ध हैं, न कि भारत में रहने वाले विदेशियों को?',
    options: [
      { id: 1, textEn: 'Articles 14, 20, 21, 22', textHi: 'अनुच्छेद 14, 20, 21, 22' },
      { id: 2, textEn: 'Articles 15, 16, 19, 29, 30', textHi: 'अनुच्छेद 15, 16, 19, 29, 30' },
      { id: 3, textEn: 'Articles 21, 21A, 25, 26', textHi: 'अनुच्छेद 21, 21A, 25, 26' },
      { id: 4, textEn: 'Articles 23, 24, 27, 28', textHi: 'अनुच्छेद 23, 24, 27, 28' }
    ],
    correctOption: 2,
    explanationEn: 'Under the Constitution of India, Fundamental Rights exclusively conferred on citizens are: Article 15 (Prohibition of discrimination), Article 16 (Equality of opportunity in public employment), Article 19 (Six freedoms), Article 29 (Protection of language, script and culture of minorities), and Article 30 (Right of minorities to establish educational institutions).',
    explanationHi: 'भारतीय संविधान के तहत, केवल नागरिकों को दिए गए मौलिक अधिकार हैं: अनुच्छेद 15, अनुच्छेद 16, अनुच्छेद 19, अनुच्छेद 29 और अनुच्छेद 30। शेष अधिकार नागरिकों और विदेशियों दोनों को समान रूप से उपलब्ध हैं।',
    formulaTip: 'Mnemonic: "15, 16, 19, 29, 30 — Only for Desi Citizens"',
    ncertRef: 'Class 11 NCERT Political Science • Indian Constitution at Work (Chapter 2)'
  },
  {
    id: 3,
    subject: 'General Science & Tech',
    topic: 'Physics: Thermodynamics & Energy',
    difficulty: 'Easy',
    pyqTag: 'Railway RRB NTPC 2021',
    textEn: 'In an electric iron or toaster, which alloy is commonly used as the heating element due to its high resistivity and high melting point?',
    textHi: 'इलेक्ट्रिक आयरन या टोस्टर में, उच्च प्रतिरोधकता और उच्च गलनांक के कारण हीटिंग तत्व के रूप में आमतौर पर किस मिश्र धातु का उपयोग किया जाता है?',
    options: [
      { id: 1, textEn: 'Copper (तांबा)', textHi: 'कॉपर (तांबा)' },
      { id: 2, textEn: 'Nichrome (नाइक्रोम)', textHi: 'नाइक्रोम (Nichrome)' },
      { id: 3, textEn: 'Tungsten (टंगस्टन)', textHi: 'टंगस्टन (Tungsten)' },
      { id: 4, textEn: 'Constantan (कॉन्स्टेंटन)', textHi: 'कॉन्स्टेंटन (Constantan)' }
    ],
    correctOption: 2,
    explanationEn: 'Nichrome is an alloy of Nickel (80%) and Chromium (20%). It is widely used in electrical heating appliances because of its high resistivity and resistance to oxidation (corrosion) at high temperatures.',
    explanationHi: 'नाइक्रोम निकल (80%) और क्रोमियम (20%) का एक मिश्र धातु है। उच्च तापमान पर उच्च प्रतिरोधकता और ऑक्सीकरण न होने के कारण इसका उपयोग हीटिंग उपकरणों में किया जाता है।',
    formulaTip: 'Joule\'s Law of Heating: H = I²Rt. High resistance (R) produces higher heat output.',
    ncertRef: 'Class 10 NCERT Science • Chapter 12: Electricity'
  },
  {
    id: 4,
    subject: 'Reasoning & Logic',
    topic: 'Syllogism & Deductive Logic',
    difficulty: 'Medium',
    pyqTag: 'IBPS PO Prelims 2023',
    textEn: 'Statements: Some rivers are lakes. All lakes are oceans. No ocean is a pond. Conclusions: I. At least some rivers are oceans. II. No lake is a pond.',
    textHi: 'कथन: कुछ नदियाँ झीलें हैं। सभी झीलें महासागर हैं। कोई महासागर तालाब नहीं है। निष्कर्ष: I. कम से कम कुछ नदियाँ महासागर हैं। II. कोई झील तालाब नहीं है।',
    options: [
      { id: 1, textEn: 'Only Conclusion I follows', textHi: 'केवल निष्कर्ष I अनुसरण करता है' },
      { id: 2, textEn: 'Only Conclusion II follows', textHi: 'केवल निष्कर्ष II अनुसरण करता है' },
      { id: 3, textEn: 'Both Conclusions I and II follow', textHi: 'निष्कर्ष I और II दोनों अनुसरण करते हैं' },
      { id: 4, textEn: 'Neither Conclusion follows', textHi: 'कोई भी निष्कर्ष अनुसरण नहीं करता है' }
    ],
    correctOption: 3,
    explanationEn: 'Since all lakes are oceans and some rivers are lakes, the intersection of rivers and lakes is inside oceans, so Some Rivers are Oceans (Conclusion I follows). Since all lakes are inside oceans and No ocean is a pond, No lake can ever be a pond (Conclusion II follows).',
    explanationHi: 'चूंकि सभी झीलें महासागर हैं और कुछ नदियाँ झीलें हैं, इसलिए कुछ नदियाँ महासागर हैं (निष्कर्ष I सही)। चूंकि सभी झीलें महासागर के भीतर हैं और कोई महासागर तालाब नहीं है, इसलिए कोई झील तालाब नहीं हो सकती (निष्कर्ष II सही)।',
    formulaTip: 'Universal Negative Rule: If All A are B, and No B is C, then No A is C is definitely true.',
    ncertRef: 'Standard Reasoning & Verbal Logic Compendium'
  },
  {
    id: 5,
    subject: 'Modern Indian History',
    topic: 'Freedom Struggle (1919-1947)',
    difficulty: 'Medium',
    pyqTag: 'UPPSC Prelims 2022',
    textEn: 'Who among the following presided over the historic 1929 Lahore Session of the Indian National Congress where the "Purna Swaraj" resolution was officially passed?',
    textHi: 'भारतीय राष्ट्रीय कांग्रेस के ऐतिहासिक 1929 के लाहौर अधिवेशन की अध्यक्षता किसने की थी जहाँ "पूर्ण स्वराज" का प्रस्ताव आधिकारिक रूप से पारित किया गया था?',
    options: [
      { id: 1, textEn: 'Mahatma Gandhi', textHi: 'महात्मा गांधी' },
      { id: 2, textEn: 'Jawaharlal Nehru', textHi: 'जवाहरलाल नेहरू' },
      { id: 3, textEn: 'Subhas Chandra Bose', textHi: 'सुभाष चंद्र बोस' },
      { id: 4, textEn: 'Sardar Vallabhbhai Patel', textHi: 'सरदार वल्लभभाई पटेल' }
    ],
    correctOption: 2,
    explanationEn: 'Jawaharlal Nehru presided over the December 1929 Lahore Session of the INC, where the Purna Swaraj (Complete Independence) resolution was adopted, and 26 January 1930 was declared as Independence Day.',
    explanationHi: 'पंडित जवाहरलाल नेहरू ने दिसंबर 1929 में कांग्रेस के लाहौर अधिवेशन की अध्यक्षता की थी, जहां पूर्ण स्वराज का संकल्प लिया गया था और 26 जनवरी 1930 को स्वतंत्रता दिवस के रूप में घोषित किया गया था।',
    formulaTip: 'Historical Milestone: On 31 Dec 1929, the tricolor was hoisted on the banks of river Ravi in Lahore.',
    ncertRef: 'Class 12 NCERT Themes in Indian History (Part III) • Chapter 13'
  }
];

export default function PracticeHub() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'daily' | 'subject' | 'pyq' | 'custom'>('daily');
  
  // Practice Session State
  const [isPracticing, setIsPracticing] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [bookmarkedQs, setBookmarkedQs] = useState<number[]>([]);
  const [showInstantSolution, setShowInstantSolution] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [langBilingual, setLangBilingual] = useState<'en' | 'hi' | 'both'>('both');
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Subject Tab State
  const [selectedSubject, setSelectedSubject] = useState('Quantitative Aptitude');
  
  // PYQ Tab State
  const [selectedCommission, setSelectedCommission] = useState('SSC');
  const [selectedYear, setSelectedYear] = useState('2023');

  // Custom Quiz Tab State
  const [customSubjectList, setCustomSubjectList] = useState<string[]>(['Quantitative Aptitude', 'Reasoning']);
  const [customQCount, setCustomQCount] = useState<number>(25);
  const [customDifficulty, setCustomDifficulty] = useState<'Balanced' | 'Speed Drill' | 'Topper Tier'>('Balanced');
  const [customMode, setCustomMode] = useState<'Timed' | 'Untimed'>('Timed');

  // Countdown timer in session
  useEffect(() => {
    let interval: any = null;
    if (isPracticing && isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPracticing, isTimerRunning, timeLeft]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartSession = () => {
    setIsPracticing(true);
    setCurrentQIndex(0);
    setUserAnswers({});
    setTimeLeft(15 * 60);
    setIsTimerRunning(true);
  };

  const handleSelectOption = (optId: number) => {
    setUserAnswers(prev => ({
      ...prev,
      [currentQIndex]: optId
    }));
  };

  const handleToggleBookmark = (qId: number) => {
    setBookmarkedQs(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  const handleSpeakQuestion = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.95;
      utterance.lang = langBilingual === 'hi' ? 'hi-IN' : 'en-IN';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleFinishPractice = () => {
    navigate('/practice/result');
  };

  const subjectsData = [
    { name: 'Quantitative Aptitude', icon: '📐', total: 1250, done: 580, acc: 84, color: '#0033A0', chapters: ['Profit & Loss', 'Time & Work', 'Percentages', 'Algebra', 'Number System', 'Geometry'] },
    { name: 'Reasoning & Logic', icon: '🧩', total: 980, done: 620, acc: 89, color: '#7C3AED', chapters: ['Syllogism', 'Blood Relations', 'Seating Arrangement', 'Coding-Decoding', 'Series'] },
    { name: 'General Studies (GS)', icon: '🏛️', total: 2400, done: 950, acc: 76, color: '#024A00', chapters: ['Polity & Constitution', 'Modern History', 'Geography', 'Economy', 'Science & Tech', 'Environment'] },
    { name: 'English Comprehension', icon: '📖', total: 850, done: 410, acc: 82, color: '#FE6500', chapters: ['Reading Comprehension', 'Error Spotting', 'Vocabulary & Idioms', 'Cloze Test'] },
    { name: 'Indian Polity & Law', icon: '⚖️', total: 720, done: 390, acc: 88, color: '#0B4A9E', chapters: ['Preamble', 'Fundamental Rights', 'Parliament & Executive', 'Judiciary', 'Constitutional Bodies'] },
    { name: 'Modern Indian History', icon: '📜', total: 640, done: 280, acc: 79, color: '#D97706', chapters: ['1857 Revolt', 'INC Sessions', 'Gandhian Era', 'Revolutionary Movement', 'Post-Independence'] },
    { name: 'Indian & World Geography', icon: '🌍', total: 580, done: 210, acc: 75, color: '#059669', chapters: ['Physical Geography', 'Rivers & Climate', 'Agriculture & Soils', 'Mapping & Minerals'] },
    { name: 'General Science & Tech', icon: '🔬', total: 910, done: 450, acc: 81, color: '#DC2626', chapters: ['Physics Fundamentals', 'Chemistry in Daily Life', 'Biology & Human Body', 'Space & Defense Tech'] }
  ];

  const pyqCommissions = [
    { id: 'SSC', name: 'SSC CGL & CHSL', desc: '10 Years Solved Tier 1 & Tier 2 Papers', count: '142 Sets' },
    { id: 'UPSC', name: 'UPSC Civil Services (CSE)', desc: '2014-2024 Prelims GS Paper 1 & CSAT', count: '28 Sets' },
    { id: 'BANKING', name: 'Banking (IBPS / SBI PO)', desc: 'Prelims & Mains Speed Question Bank', count: '96 Sets' },
    { id: 'RAILWAY', name: 'Railway RRB NTPC & Group D', desc: 'CBT 1 & CBT 2 Official Solved Shifts', count: '120 Sets' },
    { id: 'NEET_JEE', name: 'NEET & JEE Main', desc: 'NTA Official 10-Yr Chapter-wise PYQs', count: '180 Sets' },
    { id: 'STATE_PSC', name: 'State PSCs (UPPSC / BPSC)', desc: 'State Civil Services GS Prelims Vault', count: '64 Sets' }
  ];

  const currentQ = SAMPLE_PRACTICE_QUESTIONS[currentQIndex] || SAMPLE_PRACTICE_QUESTIONS[0];
  const hasAnsweredCurrent = userAnswers[currentQIndex] !== undefined;

  // Render Live In-Session Practice Engine
  if (isPracticing) {
    return (
      <div className="practice-engine-root">
        {/* Session Topbar */}
        <header className="practice-session-topbar">
          <div className="ps-left-actions">
            <button className="btn-exit-session" onClick={() => setIsPracticing(false)}>
              <ChevronLeft size={18} /> Exit Practice
            </button>
            <div className="ps-topic-badge">
              <span className="ps-subject-name">{currentQ.subject}</span>
              <span className="ps-sep">•</span>
              <span className="ps-topic-name">{currentQ.topic}</span>
            </div>
          </div>

          <div className="ps-center-progress">
            <span className="q-progress-pill">
              Question <strong>{currentQIndex + 1}</strong> of {SAMPLE_PRACTICE_QUESTIONS.length}
            </span>
          </div>

          <div className="ps-right-controls">
            {/* Bilingual View Toggle */}
            <div className="lang-toggle-group">
              <button 
                className={`lang-tbtn ${langBilingual === 'both' ? 'active' : ''}`}
                onClick={() => setLangBilingual('both')}
                title="Bilingual View"
              >
                द्विभाषी
              </button>
              <button 
                className={`lang-tbtn ${langBilingual === 'en' ? 'active' : ''}`}
                onClick={() => setLangBilingual('en')}
                title="English Only"
              >
                EN
              </button>
              <button 
                className={`lang-tbtn ${langBilingual === 'hi' ? 'active' : ''}`}
                onClick={() => setLangBilingual('hi')}
                title="Hindi Only"
              >
                हिन्दी
              </button>
            </div>

            {/* Timer */}
            <div className={`practice-timer-pill ${timeLeft < 180 ? 'warning' : ''}`}>
              <Clock size={16} />
              <span>{formatTimer(timeLeft)}</span>
            </div>

            {/* Mobile Palette Toggle */}
            <button className="btn-mobile-palette-toggle" onClick={() => setPaletteOpen(!paletteOpen)}>
              Palette ({Object.keys(userAnswers).length}/{SAMPLE_PRACTICE_QUESTIONS.length})
            </button>
          </div>
        </header>

        {/* Practice Body */}
        <div className="practice-engine-body">
          {/* Main Question Viewport */}
          <div className="practice-main-viewport">
            <div className="q-viewport-header">
              <div className="q-meta-badges">
                <span className={`badge-difficulty ${currentQ.difficulty.toLowerCase()}`}>
                  {currentQ.difficulty}
                </span>
                {currentQ.pyqTag && (
                  <span className="badge-pyq-citation">
                    <Award size={13} /> {currentQ.pyqTag}
                  </span>
                )}
                <span className="badge-marking-scheme">+2.0 / -0.50 Marks</span>
              </div>

              <div className="q-top-utility-icons">
                <button 
                  className="btn-voice-readout"
                  onClick={() => handleSpeakQuestion(langBilingual === 'hi' ? currentQ.textHi : currentQ.textEn)}
                  title="Audio Narration (Bhashini TTS)"
                >
                  <Volume2 size={16} /> Audio Readout
                </button>
                <button 
                  className={`btn-bookmark-q ${bookmarkedQs.includes(currentQ.id) ? 'bookmarked' : ''}`}
                  onClick={() => handleToggleBookmark(currentQ.id)}
                  title="Bookmark for Revision"
                >
                  <Bookmark size={16} /> {bookmarkedQs.includes(currentQ.id) ? 'Saved' : 'Bookmark'}
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div className="q-text-card">
              {(langBilingual === 'en' || langBilingual === 'both') && (
                <div className="q-lang-block en">
                  <p className="q-primary-text">{currentQ.textEn}</p>
                </div>
              )}
              {(langBilingual === 'hi' || langBilingual === 'both') && (
                <div className="q-lang-block hi">
                  <p className="q-primary-text hindi-font">{currentQ.textHi}</p>
                </div>
              )}
            </div>

            {/* Options List */}
            <div className="q-options-container">
              {currentQ.options.map((opt, idx) => {
                const isSelected = userAnswers[currentQIndex] === opt.id;
                const isCorrect = opt.id === currentQ.correctOption;
                let optionClass = 'option-choice-row';
                if (isSelected) optionClass += ' selected';
                if (showInstantSolution && hasAnsweredCurrent) {
                  if (isCorrect) optionClass += ' correct-highlight';
                  else if (isSelected && !isCorrect) optionClass += ' wrong-highlight';
                }

                return (
                  <div 
                    key={opt.id} 
                    className={optionClass}
                    onClick={() => handleSelectOption(opt.id)}
                  >
                    <div className="opt-letter-bullet">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="opt-text-column">
                      {(langBilingual === 'en' || langBilingual === 'both') && (
                        <span className="opt-en">{opt.textEn}</span>
                      )}
                      {(langBilingual === 'hi' || langBilingual === 'both') && (
                        <span className="opt-hi hindi-font">{opt.textHi}</span>
                      )}
                    </div>
                    {isSelected && (
                      <div className="opt-checked-icon">
                        <Check size={16} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Instant Solution & AI Mentor Explanations */}
            <div className="instant-solution-toggle-bar">
              <label className="solution-toggle-label">
                <input 
                  type="checkbox" 
                  checked={showInstantSolution} 
                  onChange={(e) => setShowInstantSolution(e.target.checked)} 
                />
                <Sparkles size={15} color="#FE6500" />
                <span>Show Instant AI Solution & NCERT References (अभ्यास मोड)</span>
              </label>
            </div>

            {showInstantSolution && hasAnsweredCurrent && (
              <div className="solution-explanation-card">
                <div className="sol-card-header">
                  <div className="sol-status-pill">
                    {userAnswers[currentQIndex] === currentQ.correctOption ? (
                      <span className="status-correct"><CheckCircle2 size={16} /> Correct Answer!</span>
                    ) : (
                      <span className="status-incorrect"><XCircle size={16} /> Incorrect. Correct Option is {String.fromCharCode(64 + currentQ.correctOption)}</span>
                    )}
                  </div>
                  {currentQ.ncertRef && (
                    <span className="ncert-citation-badge">
                      <BookOpen size={13} /> {currentQ.ncertRef}
                    </span>
                  )}
                </div>

                <div className="sol-body-content">
                  <h4>Detailed Step-by-Step Solution:</h4>
                  <p className="sol-text-en">{currentQ.explanationEn}</p>
                  <p className="sol-text-hi hindi-font">{currentQ.explanationHi}</p>

                  {currentQ.formulaTip && (
                    <div className="formula-tip-box">
                      <Zap size={15} color="#FE6500" />
                      <div>
                        <strong>Topper Shortcut / Key Rule:</strong>
                        <p>{currentQ.formulaTip}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="sol-footer-actions">
                  <button 
                    className="btn-ask-ai-doubt"
                    onClick={() => navigate('/doubt-solver')}
                  >
                    <Brain size={15} /> Ask AI Mentor about this Question
                  </button>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="practice-footer-bar">
              <button 
                className="btn-nav-prev"
                disabled={currentQIndex === 0}
                onClick={() => setCurrentQIndex(prev => prev - 1)}
              >
                <ChevronLeft size={18} /> Previous
              </button>

              <div className="footer-right-buttons">
                <button 
                  className="btn-nav-skip"
                  onClick={() => {
                    if (currentQIndex < SAMPLE_PRACTICE_QUESTIONS.length - 1) {
                      setCurrentQIndex(prev => prev + 1);
                    }
                  }}
                >
                  Skip Question
                </button>
                
                {currentQIndex < SAMPLE_PRACTICE_QUESTIONS.length - 1 ? (
                  <button 
                    className="btn-nav-next primary"
                    onClick={() => setCurrentQIndex(prev => prev + 1)}
                  >
                    Save & Next <ChevronRight size={18} />
                  </button>
                ) : (
                  <button 
                    className="btn-nav-submit-final"
                    onClick={handleFinishPractice}
                  >
                    Complete Practice & View Summary <CheckCircle2 size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Palette Overlay for Mobile */}
          {paletteOpen && (
            <div className="practice-palette-backdrop" onClick={() => setPaletteOpen(false)}></div>
          )}

          {/* Question Palette Sidebar */}
          <aside className={`practice-sidebar-palette ${paletteOpen ? 'open' : ''}`}>
            <div className="palette-top-bar">
              <h4>Question Matrix</h4>
              <button className="btn-close-palette" onClick={() => setPaletteOpen(false)}>✕</button>
            </div>

            <div className="palette-boxes-grid">
              {SAMPLE_PRACTICE_QUESTIONS.map((q, idx) => {
                const isAnswered = userAnswers[idx] !== undefined;
                const isCurrent = currentQIndex === idx;
                const isBookmarked = bookmarkedQs.includes(q.id);

                let boxClass = 'palette-tile';
                if (isCurrent) boxClass += ' active';
                if (isAnswered) boxClass += ' answered';
                if (isBookmarked) boxClass += ' bookmarked';

                return (
                  <button 
                    key={q.id}
                    className={boxClass}
                    onClick={() => {
                      setCurrentQIndex(idx);
                      setPaletteOpen(false);
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="palette-status-legend">
              <div className="legend-row">
                <span className="legend-box answered"></span>
                <span>Answered ({Object.keys(userAnswers).length})</span>
              </div>
              <div className="legend-row">
                <span className="legend-box unattempted"></span>
                <span>Unanswered ({SAMPLE_PRACTICE_QUESTIONS.length - Object.keys(userAnswers).length})</span>
              </div>
              <div className="legend-row">
                <span className="legend-box bookmarked"></span>
                <span>Bookmarked ({bookmarkedQs.length})</span>
              </div>
            </div>

            <button className="btn-sidebar-submit" onClick={handleFinishPractice}>
              Finish & View Analysis
            </button>
          </aside>
        </div>
      </div>
    );
  }

  // Main Practice Hub Landing View
  return (
    <div className="practice-hub-redesigned-root">
      {/* 1. Sovereign Government Top Hero Banner */}
      <div className="practice-hero-banner">
        <div className="hero-banner-content">
          <div className="hero-seal-badges">
            <span className="gov-seal-chip">🇮🇳 PM e-VIDYA SOVEREIGN REPOSITORY</span>
            <span className="ncert-certified-chip">100% NCERT & NTA Syllabus Aligned</span>
          </div>
          <h1>
            Adaptive Practice Hub <span className="hi-title">अभ्यास एवं प्रश्नोत्तरी केंद्र</span>
          </h1>
          <p className="hero-subtext">
            Master 50,000+ categorized competitive exam questions with instant AI conceptual explanations, step-by-step mathematical breakdowns, and 10-year official PYQs.
          </p>

          {/* Quick Motivational Stats */}
          <div className="hero-aspirant-kpis">
            <div className="kpi-chip">
              <Flame size={18} color="#FFD54F" />
              <div>
                <strong>12 Days</strong>
                <span>Daily Practice Streak</span>
              </div>
            </div>
            <div className="kpi-chip">
              <Target size={18} color="#86EFAC" />
              <div>
                <strong>35 / 50</strong>
                <span>Today's Target Solved</span>
              </div>
            </div>
            <div className="kpi-chip">
              <TrendingUp size={18} color="#93C5FD" />
              <div>
                <strong>84.2%</strong>
                <span>National Accuracy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-banner-action-card">
          <div className="hcard-live-tag">
            <span className="live-pulse-dot"></span> DAILY POWER CHALLENGE
          </div>
          <h3>Daily Current Affairs & High-Yield GS</h3>
          <p>15 Curated Questions • 10 Minutes • +2.0 / -0.50 Marks</p>
          <button className="btn-start-daily-challenge" onClick={handleStartSession}>
            Start Daily Drill <ArrowRight size={17} />
          </button>
        </div>
      </div>

      {/* 2. Navigation Tabs Bar */}
      <div className="practice-nav-tabs-wrapper">
        <div className="practice-nav-tabs-bar">
          <button 
            className={`pnav-tab ${activeTab === 'daily' ? 'active' : ''}`}
            onClick={() => setActiveTab('daily')}
          >
            <Clock size={17} />
            <span>दैनिक अभ्यास (Daily Adaptive Practice)</span>
          </button>

          <button 
            className={`pnav-tab ${activeTab === 'subject' ? 'active' : ''}`}
            onClick={() => setActiveTab('subject')}
          >
            <BookOpen size={17} />
            <span>विषयवार प्रश्न बैंक (Subject Question Bank)</span>
          </button>

          <button 
            className={`pnav-tab ${activeTab === 'pyq' ? 'active' : ''}`}
            onClick={() => setActiveTab('pyq')}
          >
            <List size={17} />
            <span>10-वर्षीय विगत प्रश्न (10-Yr PYQ Vault)</span>
          </button>

          <button 
            className={`pnav-tab ${activeTab === 'custom' ? 'active' : ''}`}
            onClick={() => setActiveTab('custom')}
          >
            <Brain size={17} />
            <span>AI कस्टम क्विज जनरेटर (Custom AI Quiz)</span>
          </button>
        </div>
      </div>

      {/* 3. TAB 1: DAILY PRACTICE & SUBJECT MASTERY MATRIX */}
      {activeTab === 'daily' && (
        <div className="tab-pane-content">
          <div className="section-head-bar">
            <div>
              <h2>Subject Mastery & Recommended Practice <span className="hi">विषयवार दक्षता</span></h2>
              <p>Pick a subject or let the adaptive engine recommend your weakest chapter based on previous tests.</p>
            </div>
            <button className="btn-smart-recommendation" onClick={handleStartSession}>
              <Sparkles size={16} /> Start Adaptive Spaced Repetition Drill
            </button>
          </div>

          <div className="subjects-matrix-grid">
            {subjectsData.map((sub, idx) => {
              const progressPct = Math.round((sub.done / sub.total) * 100);
              return (
                <div key={idx} className="subject-mastery-card">
                  <div className="sm-card-top">
                    <span className="sm-icon-bullet">{sub.icon}</span>
                    <span className="sm-accuracy-pill" style={{ color: sub.color }}>
                      {sub.acc}% Accuracy
                    </span>
                  </div>

                  <h3 className="sm-subject-name">{sub.name}</h3>

                  <div className="sm-progress-section">
                    <div className="sm-prog-label">
                      <span>Solved: <strong>{sub.done}</strong> / {sub.total}</span>
                      <span>{progressPct}%</span>
                    </div>
                    <div className="sm-progress-bar-bg">
                      <div 
                        className="sm-progress-bar-fill"
                        style={{ width: `${progressPct}%`, backgroundColor: sub.color }}
                      ></div>
                    </div>
                  </div>

                  <div className="sm-chapters-preview">
                    <span className="sm-chap-label">Key Topics:</span>
                    <div className="sm-chap-tags">
                      {sub.chapters.slice(0, 3).map((ch, cidx) => (
                        <span key={cidx} className="chap-pill">{ch}</span>
                      ))}
                    </div>
                  </div>

                  <button className="btn-practice-subject-card" onClick={handleStartSession}>
                    Practice Now <ChevronRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* 4. TAB 2: SUBJECT-WISE DEEP QUESTION BANK */}
      {activeTab === 'subject' && (
        <div className="tab-pane-content">
          <div className="subject-bank-layout">
            {/* Left Subject Sidebar */}
            <div className="subject-bank-sidebar">
              <h3>Select Subject</h3>
              <div className="subject-pills-stack">
                {subjectsData.map((sub, idx) => (
                  <button 
                    key={idx}
                    className={`subject-side-btn ${selectedSubject === sub.name ? 'active' : ''}`}
                    onClick={() => setSelectedSubject(sub.name)}
                  >
                    <span>{sub.icon}</span>
                    <div className="sub-side-text">
                      <strong>{sub.name}</strong>
                      <small>{sub.total} Questions</small>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Chapters & Topics Matrix */}
            <div className="subject-chapters-view">
              <div className="chapters-view-header">
                <div>
                  <h2>{selectedSubject} Chapter Repository</h2>
                  <p>Choose a specific sub-topic or start comprehensive chapter drills.</p>
                </div>
                <button className="btn-chapter-all-practice" onClick={handleStartSession}>
                  <Zap size={16} /> Practice All Chapters (50 Qs)
                </button>
              </div>

              <div className="chapters-cards-list">
                {[
                  { name: 'Concept Fundamentals & Definitions', count: 180, diff: 'Easy', done: 140 },
                  { name: 'Core Problem Solving & Applied Principles', count: 320, diff: 'Medium', done: 180 },
                  { name: 'Advanced High-Yield Numerical & Analytical Cases', count: 240, diff: 'Hard', done: 85 },
                  { name: 'Previous 5-Year High Frequency Question Patterns', count: 190, diff: 'Medium', done: 110 },
                  { name: 'Speed Calculation & Elimination Tricks', count: 150, diff: 'Hard', done: 65 }
                ].map((chap, cidx) => (
                  <div key={cidx} className="chapter-topic-row-card">
                    <div className="chap-left-info">
                      <div className="chap-num-badge">0{cidx + 1}</div>
                      <div>
                        <h4>{chap.name}</h4>
                        <div className="chap-sub-meta">
                          <span>{chap.count} Questions</span>
                          <span className="meta-sep">•</span>
                          <span className={`diff-tag ${chap.diff.toLowerCase()}`}>{chap.diff}</span>
                          <span className="meta-sep">•</span>
                          <span>Completed: {chap.done}/{chap.count}</span>
                        </div>
                      </div>
                    </div>

                    <button className="btn-start-topic-practice" onClick={handleStartSession}>
                      Start Topic Drill →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB 3: 10-YEAR OFFICIAL PYQ VAULT */}
      {activeTab === 'pyq' && (
        <div className="tab-pane-content">
          <div className="section-head-bar">
            <div>
              <h2>Official 10-Year Solved PYQ Repository <span className="hi">विगत प्रश्न पत्र</span></h2>
              <p>Filter official papers by commission, examination, and year with authenticated answer keys and NCERT citations.</p>
            </div>
            <div className="pyq-year-filter">
              <span>Exam Year:</span>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="2024">2024 Official Sets</option>
                <option value="2023">2023 Official Sets</option>
                <option value="2022">2022 Official Sets</option>
                <option value="2021">2021 Official Sets</option>
                <option value="2020">2020 Official Sets</option>
              </select>
            </div>
          </div>

          {/* Commission Cards */}
          <div className="commissions-filter-strip">
            {pyqCommissions.map(comm => (
              <div 
                key={comm.id} 
                className={`commission-card ${selectedCommission === comm.id ? 'active' : ''}`}
                onClick={() => setSelectedCommission(comm.id)}
              >
                <div className="comm-top">
                  <Shield size={18} color="#0033A0" />
                  <span className="comm-sets-count">{comm.count}</span>
                </div>
                <h4>{comm.name}</h4>
                <p>{comm.desc}</p>
              </div>
            ))}
          </div>

          {/* Available Question Sets for Selected Commission */}
          <div className="pyq-sets-grid">
            {[
              { title: `${selectedCommission} ${selectedYear} - Shift 1 General Studies & Reasoning`, qCount: 100, time: '60 Mins', difficulty: 'Official Moderate', attempts: '48.2k Aspirants' },
              { title: `${selectedCommission} ${selectedYear} - Shift 2 Quantitative & English Aptitude`, qCount: 100, time: '60 Mins', difficulty: 'Official Hard', attempts: '39.8k Aspirants' },
              { title: `${selectedCommission} ${selectedYear} - Shift 3 Comprehensive Tier-1 Paper`, qCount: 100, time: '60 Mins', difficulty: 'Official Moderate', attempts: '52.1k Aspirants' },
              { title: `${selectedCommission} ${selectedYear} - Topic-wise High Yield PYQ Compendium`, qCount: 50, time: '35 Mins', difficulty: 'Curated High-Yield', attempts: '64.5k Aspirants' }
            ].map((set, sidx) => (
              <div key={sidx} className="pyq-paper-item-card">
                <div className="pyq-paper-head">
                  <span className="pyq-year-pill">{selectedYear}</span>
                  <span className="pyq-attempts-count">{set.attempts}</span>
                </div>
                <h3>{set.title}</h3>
                <div className="pyq-paper-stats">
                  <span>{set.qCount} Questions</span>
                  <span>•</span>
                  <span>{set.time}</span>
                  <span>•</span>
                  <span className="text-difficulty">{set.difficulty}</span>
                </div>
                <button className="btn-launch-pyq" onClick={handleStartSession}>
                  Solve Paper in CBT Engine <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. TAB 4: CUSTOM AI QUIZ GENERATOR */}
      {activeTab === 'custom' && (
        <div className="tab-pane-content">
          <div className="custom-quiz-builder-card">
            <div className="custom-builder-head">
              <div className="builder-icon-box">
                <Brain size={28} color="#0033A0" />
              </div>
              <div>
                <h2>Custom AI Quiz Builder <span className="hi">अनुकूलित क्विज जनरेटर</span></h2>
                <p>Configure a personalized practice session tailored to your exact target subjects, chapters, and speed goals.</p>
              </div>
            </div>

            <div className="builder-form-grid">
              {/* Step 1: Select Subjects */}
              <div className="builder-step-section">
                <label className="step-label">1. Choose Subject(s) to Combine:</label>
                <div className="subjects-chips-selector">
                  {subjectsData.map((sub, idx) => {
                    const isChecked = customSubjectList.includes(sub.name);
                    return (
                      <button 
                        key={idx}
                        className={`sub-selector-chip ${isChecked ? 'selected' : ''}`}
                        onClick={() => {
                          if (isChecked) {
                            if (customSubjectList.length > 1) {
                              setCustomSubjectList(customSubjectList.filter(s => s !== sub.name));
                            }
                          } else {
                            setCustomSubjectList([...customSubjectList, sub.name]);
                          }
                        }}
                      >
                        {isChecked && <Check size={14} />}
                        <span>{sub.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Question Count */}
              <div className="builder-step-section">
                <label className="step-label">2. Select Number of Questions:</label>
                <div className="qcount-buttons-row">
                  {[10, 20, 25, 50, 100].map(count => (
                    <button 
                      key={count}
                      className={`qcount-btn ${customQCount === count ? 'active' : ''}`}
                      onClick={() => setCustomQCount(count)}
                    >
                      {count} Questions
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Difficulty Mix */}
              <div className="builder-step-section">
                <label className="step-label">3. Difficulty Profile:</label>
                <div className="difficulty-options-grid">
                  {[
                    { id: 'Balanced', label: 'Balanced (60% Med, 20% Easy, 20% Hard)', desc: 'Standard exam simulation' },
                    { id: 'Speed Drill', label: 'Speed Drill (High volume easy-med questions)', desc: 'Focus on speed & accuracy' },
                    { id: 'Topper Tier', label: 'Topper Tier (Advanced & Multi-concept questions)', desc: 'For top 1% percentile rank' }
                  ].map(diff => (
                    <div 
                      key={diff.id}
                      className={`diff-radio-card ${customDifficulty === diff.id ? 'active' : ''}`}
                      onClick={() => setCustomDifficulty(diff.id as any)}
                    >
                      <strong>{diff.label}</strong>
                      <span>{diff.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 4: Mode */}
              <div className="builder-step-section">
                <label className="step-label">4. Practice Mode:</label>
                <div className="mode-selector-duo">
                  <div 
                    className={`mode-card ${customMode === 'Timed' ? 'active' : ''}`}
                    onClick={() => setCustomMode('Timed')}
                  >
                    <Clock size={20} color="#0033A0" />
                    <div>
                      <strong>Timed CBT Simulator</strong>
                      <span>Strict countdown timer with negative marking</span>
                    </div>
                  </div>
                  <div 
                    className={`mode-card ${customMode === 'Untimed' ? 'active' : ''}`}
                    onClick={() => setCustomMode('Untimed')}
                  >
                    <BookOpen size={20} color="#024A00" />
                    <div>
                      <strong>Instant Learning Mode</strong>
                      <span>Untimed with instant step-by-step AI solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="builder-footer-bar">
              <div className="builder-summary-text">
                Generated configuration: <strong>{customQCount} Questions</strong> • {customSubjectList.length} Subjects • {customDifficulty} • {customMode} Mode
              </div>
              <button className="btn-generate-quiz-start" onClick={handleStartSession}>
                <Sparkles size={18} /> Generate & Start Custom Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

