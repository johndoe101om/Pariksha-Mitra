import React, { useState } from 'react';
import { 
  Video, Mic, StopCircle, PlayCircle, Clock, Star, AlertCircle, 
  History, List, Users, CheckCircle, HelpCircle, Sparkles, ShieldCheck,
  RotateCcw, Play, CheckCircle2, ArrowRight, UserCheck, MessageSquare
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './InterviewSimulator.css';

type InterviewState = 'setup' | 'interviewing' | 'feedback';

const boardMembers = [
  { id: 1, name: 'Dr. S. K. Verma, IAS (Retd.)', role: 'Board Chairman', area: 'Governance & Ethics', avatar: '👨‍💼' },
  { id: 2, name: 'Prof. Ananya Sen', role: 'Subject Expert', area: 'Economics & Policy', avatar: '👩‍🏫' },
  { id: 3, name: 'Col. Rajesh Bakshi', role: 'Psychology Expert', area: 'Stress & Composure', avatar: '🎖️' },
  { id: 4, name: 'Dr. M. K. Rao', role: 'Current Affairs Specialist', area: 'Geo-politics & Science', avatar: '👨‍🔬' },
];

export const InterviewSimulator: React.FC = () => {
  const [exam, setExam] = useState('UPSC CSE Personality Test');
  const [appState, setAppState] = useState<InterviewState>('interviewing');
  const [isRecording, setIsRecording] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);

  const questions = [
    {
      asker: 'Dr. S. K. Verma (Chairman)',
      text: 'Mr. Rahul, you have a degree in Political Science and chose SSC/Civil Services. If appointed in a flood-affected district, how will you resolve conflicting demands between urgent medical evacuation and grain supply security?',
      textHi: 'यदि आपको बाढ़ प्रभावित जिले में तैनात किया जाए, तो आप आपातकालीन चिकित्सा निकासी और खाद्यान्न सुरक्षा के बीच संतुलन कैसे बनाएंगे?'
    },
    {
      asker: 'Prof. Ananya Sen (Economics)',
      text: 'India is aiming to become a $5 Trillion economy. What structural reforms in manufacturing and MSMEs are crucial to bridge the trade deficit?',
      textHi: 'भारत के 5 ट्रिलियन डॉलर अर्थव्यवस्था बनने के लक्ष्य में विनिर्माण और एमएसएमई सुधारों की क्या भूमिका है?'
    }
  ];

  const handleNextQuestion = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
      setIsRecording(false);
    } else {
      setAppState('feedback');
    }
  };

  return (
    <div className="interview-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'AI Interview Simulator', labelHi: 'साक्षात्कार सिम्युलेटर' }
        ]}
        title="AI Personality Test & Interview Simulator"
        titleHi="राष्ट्रीय एआई मॉक साक्षात्कार कक्ष"
        description="Experience realistic 5-member board interviews with real-time speech sentiment analysis, tone evaluation, and body language feedback."
        descriptionHi="5-सदस्यीय बोर्ड पैनल के साथ वास्तविक मॉक साक्षात्कार और विस्तृत एआई प्रतिक्रिया।"
        icon={<Video size={28} />}
        badge="UPSC / Bank Board Calibrated"
        actions={
          <div className="interview-hero-exam-pill">
            <UserCheck size={14} color="#FFD54F" /> {exam}
          </div>
        }
      />

      <main role="main" className="interview-workspace">
        {/* State 1: Interviewing Chamber */}
        {appState === 'interviewing' && (
          <div className="interview-chamber-grid">
            {/* Left: 4-Member Board Panel Display */}
            <div className="interview-board-panel">
              <div className="board-header">
                <Users size={18} color="#0033A0" />
                <h3>UPSC / Bank Board Panel (4 Members)</h3>
              </div>

              <div className="board-members-grid">
                {boardMembers.map(member => (
                  <div key={member.id} className={`member-card ${member.id === 1 ? 'speaking-active' : ''}`}>
                    <div className="member-avatar-box">
                      <span className="member-emoji">{member.avatar}</span>
                      {member.id === 1 && <span className="speaking-badge">● Speaking</span>}
                    </div>
                    <div className="member-info">
                      <strong className="member-name">{member.name}</strong>
                      <span className="member-role">{member.role}</span>
                      <span className="member-area">{member.area}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Interactive Question & Candidate Response Console */}
            <div className="interview-candidate-console">
              {/* Question Card */}
              <div className="interview-question-box">
                <div className="iq-top-bar">
                  <span className="iq-asker-tag">
                    <Sparkles size={13} /> {questions[currentQIndex].asker} asks:
                  </span>
                  <span className="iq-counter">Question {currentQIndex + 1} of {questions.length}</span>
                </div>

                <p className="iq-question-text">{questions[currentQIndex].text}</p>
                <p className="iq-question-hi">{questions[currentQIndex].textHi}</p>
              </div>

              {/* Video Camera & Audio Recording Simulator */}
              <div className="interview-camera-box">
                <div className="cam-placeholder">
                  <Video size={36} color="#64748B" />
                  <span>Camera Active • AI Facial & Speech Tracking</span>
                  {isRecording && (
                    <div className="cam-rec-pill">
                      <span className="rec-dot"></span> RECORDING (01:24)
                    </div>
                  )}
                </div>

                <div className="interview-audio-controls">
                  <button 
                    className={`interview-mic-btn ${isRecording ? 'recording' : ''}`}
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    <Mic size={22} />
                    <span>{isRecording ? 'Stop Answering' : 'Start Spoken Answer'}</span>
                  </button>

                  <button 
                    className="interview-next-btn"
                    onClick={handleNextQuestion}
                  >
                    Next Question <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* State 2: Comprehensive AI Feedback Report */}
        {appState === 'feedback' && (
          <div className="interview-feedback-workspace">
            <div className="feedback-score-hero">
              <div className="score-hero-left">
                <span className="score-label">Overall Personality Test Score</span>
                <div className="score-numbers">
                  <span className="score-big">8.4</span>
                  <span className="score-total">/ 10</span>
                </div>
                <p className="score-verdict">
                  <strong>Verdict: Strong Selection Grade (Top 8%).</strong> Excellent composure and balanced administrative judgment.
                </p>
              </div>

              <button className="retake-interview-btn" onClick={() => { setAppState('interviewing'); setCurrentQIndex(0); }}>
                <RotateCcw size={16} /> Retake Simulation
              </button>
            </div>

            {/* 4 Score Parameters */}
            <div className="feedback-parameters-grid">
              <div className="param-card">
                <span className="param-name">Speech Clarity & Tone</span>
                <span className="param-val">88%</span>
                <div className="param-bar"><div className="param-fill" style={{ width: '88%' }}></div></div>
                <p className="param-note">Even pacing, very low filler word count (2%).</p>
              </div>

              <div className="param-card">
                <span className="param-name">Administrative Content Depth</span>
                <span className="param-val">84%</span>
                <div className="param-bar"><div className="param-fill" style={{ width: '84%' }}></div></div>
                <p className="param-note">Balanced constitutional view with actionable ground steps.</p>
              </div>

              <div className="param-card">
                <span className="param-name">Composure under Stress</span>
                <span className="param-val">80%</span>
                <div className="param-bar"><div className="param-fill" style={{ width: '80%' }}></div></div>
                <p className="param-note">Handled follow-up cross questioning with poise.</p>
              </div>

              <div className="param-card">
                <span className="param-name">Eye Contact & Posture</span>
                <span className="param-val">76%</span>
                <div className="param-bar"><div className="param-fill" style={{ width: '76%' }}></div></div>
                <p className="param-note">Maintain central camera focus during rebuttal.</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <GIGWFooter />
    </div>
  );
};

export default InterviewSimulator;
