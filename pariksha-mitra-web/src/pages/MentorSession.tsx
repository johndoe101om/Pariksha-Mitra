import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Mic, MicOff, Video as VideoIcon, VideoOff, MonitorUp, 
  MessageSquare, PhoneOff, Circle, Send, Star, CheckCircle, 
  FileText, ArrowLeft, ThumbsUp, ShieldCheck, Sparkles, X, Download, Clock
} from 'lucide-react';
import { MENTORS_LIST, getStoredBookings } from '../data/mentorsData';
import './MentorSession.css';

interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  time: string;
  isSelf: boolean;
}

const MentorSession: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find booking or mentor
  const bookings = getStoredBookings();
  const currentBooking = bookings.find(b => b.id === id);
  const mentor = currentBooking 
    ? MENTORS_LIST.find(m => m.id === currentBooking.mentorId) || MENTORS_LIST[0]
    : MENTORS_LIST.find(m => m.id === id) || MENTORS_LIST[0];

  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [activeSidePanel, setActiveSidePanel] = useState<'chat' | 'notes' | null>('chat');
  const [timer, setTimer] = useState(0);
  const [chatInput, setChatInput] = useState('');
  const [notes, setNotes] = useState('• Focus on timeline breakdown for 1857 revolt.\n• Maintain 150-word structure in GS-1 history.\n• Practice PYQ answer writing every morning.');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: mentor.name,
      text: `Namaste! Welcome to our 1-on-1 session. I have reviewed your target preparation for ${mentor.category}. Let's discuss your key doubts and study schedule!`,
      time: '10:00 AM',
      isSelf: false
    }
  ]);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'You',
      text: chatInput,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSelf: true
    };

    setMessages(prev => [...prev, userMsg]);
    const query = chatInput;
    setChatInput('');

    // Simulated mentor smart answer
    setTimeout(() => {
      let replyText = `That's a very important point regarding your preparation. For ${mentor.category}, make sure to divide your time 70-30 between conceptual revision and active question practice.`;
      if (query.toLowerCase().includes('history') || query.toLowerCase().includes('polity')) {
        replyText = `Great question! For GS, create concise 1-page timeline sheets and link historical events directly with modern constitutional implications.`;
      } else if (query.toLowerCase().includes('test') || query.toLowerCase().includes('mock')) {
        replyText = `For mock tests, analyze every wrong question within 2 hours of test completion. Focus heavily on elimination technique!`;
      }

      const mentorReply: ChatMessage = {
        id: `mnt-${Date.now()}`,
        sender: mentor.name,
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSelf: false
      };
      setMessages(prev => [...prev, mentorReply]);
    }, 1200);
  };

  const handleEndCall = () => {
    setShowFeedbackModal(true);
  };

  const submitFeedbackAndExit = () => {
    setFeedbackSubmitted(true);
    setTimeout(() => {
      navigate('/mentors');
    }, 1000);
  };

  return (
    <div className="session-container">
      {/* Top Bar */}
      <div className="session-top-bar">
        <div className="session-info">
          <button className="session-exit-btn" onClick={handleEndCall} title="Leave Call">
            <ArrowLeft size={18} />
          </button>
          <div className="session-mentor-header">
            <h2>{mentor.name}</h2>
            <span className="session-badge-topic">
              {currentBooking?.sessionType || '1-on-1 Strategy Session'}
            </span>
          </div>
          <div className="recording-indicator">
            <Circle size={10} fill="#BA1A1A" color="#BA1A1A" />
            <span>HD Encrypted</span>
          </div>
        </div>

        <div className="session-timer-badge">
          <Clock size={16} />
          <span>{formatTime(timer)} / 30:00</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="session-main">
        {/* Video Area */}
        <div className={`video-area ${activeSidePanel ? 'with-panel' : ''}`}>
          <div className="mentor-video-box">
            {screenSharing ? (
              <div className="screen-share-display">
                <div className="screen-watermark">
                  <MonitorUp size={36} color="#0033A0" />
                  <h3>{mentor.name}'s Shared Strategy Screen</h3>
                  <p>Displaying High-Yield Topic Roadmap & Answer Writing Rubric</p>
                </div>
              </div>
            ) : (
              <div className="mentor-live-feed">
                <div className="mentor-live-avatar" style={{ backgroundColor: mentor.avatarColor }}>
                  {mentor.initials}
                </div>
                <div className="audio-wave-anim">
                  <span></span><span></span><span></span><span></span><span></span>
                </div>
              </div>
            )}

            <div className="mentor-watermark-overlay">
              <ShieldCheck size={16} /> Pariksha Mitra Sovereign Mentorship
            </div>
            
            <div className="participant-tag mentor-tag">
              <span className="live-mic-dot"></span>
              {mentor.name} (Mentor)
            </div>
          </div>
          
          {/* Self Video PIP */}
          <div className="self-video-pip">
            {videoOn ? (
              <div className="self-video-feed">
                <div className="self-avatar">You</div>
              </div>
            ) : (
              <div className="video-off-state">
                <VideoOff size={24} color="#CBD5E1" />
                <span>Camera Off</span>
              </div>
            )}
            <div className="participant-tag self-tag">
              {micOn ? <span className="mic-on-icon">🎤</span> : <MicOff size={12} color="#BA1A1A" />}
              You
            </div>
          </div>
        </div>

        {/* Side Panel (Chat & Notes) */}
        {activeSidePanel && (
          <div className="session-side-panel">
            <div className="panel-tabs-header">
              <button 
                className={`panel-tab ${activeSidePanel === 'chat' ? 'active' : ''}`}
                onClick={() => setActiveSidePanel('chat')}
              >
                <MessageSquare size={16} /> Live Chat
              </button>
              <button 
                className={`panel-tab ${activeSidePanel === 'notes' ? 'active' : ''}`}
                onClick={() => setActiveSidePanel('notes')}
              >
                <FileText size={16} /> Session Notes
              </button>
              <button 
                className="panel-close-btn" 
                onClick={() => setActiveSidePanel(null)}
              >
                <X size={18} />
              </button>
            </div>

            {activeSidePanel === 'chat' ? (
              <div className="chat-container">
                <div className="chat-messages-scroll">
                  {messages.map(msg => (
                    <div key={msg.id} className={`chat-bubble ${msg.isSelf ? 'sent' : 'received'}`}>
                      <div className="bubble-header">
                        <span className="sender-name">{msg.sender}</span>
                        <span className="msg-time">{msg.time}</span>
                      </div>
                      <div className="msg-content">{msg.text}</div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                <form className="chat-input-bar" onSubmit={handleSendMessage}>
                  <input 
                    type="text" 
                    placeholder="Ask a question or type doubt..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                  />
                  <button type="submit" className="btn-chat-send" disabled={!chatInput.trim()}>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            ) : (
              <div className="notes-container">
                <div className="notes-toolbar">
                  <span>Takeaway Points</span>
                  <button className="btn-download-notes" onClick={() => alert('Session summary notes downloaded!')}>
                    <Download size={14} /> Export PDF
                  </button>
                </div>
                <textarea 
                  className="notes-textarea"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Type your notes and key strategy points here..."
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Controls Bar */}
      <div className="session-controls-bar">
        <div className="controls-group left">
          <span className="session-status-text">Encrypted 1-on-1 Call</span>
        </div>
        
        <div className="controls-group center">
          <button 
            className={`btn-ctrl ${!micOn ? 'danger' : ''}`}
            onClick={() => setMicOn(!micOn)}
            title={micOn ? "Mute Microphone" : "Unmute Microphone"}
          >
            {micOn ? <Mic size={20} /> : <MicOff size={20} />}
          </button>
          
          <button 
            className={`btn-ctrl ${!videoOn ? 'danger' : ''}`}
            onClick={() => setVideoOn(!videoOn)}
            title={videoOn ? "Turn Camera Off" : "Turn Camera On"}
          >
            {videoOn ? <VideoIcon size={20} /> : <VideoOff size={20} />}
          </button>
          
          <button 
            className={`btn-ctrl ${screenSharing ? 'active' : ''}`}
            onClick={() => setScreenSharing(!screenSharing)}
            title="Share Screen"
          >
            <MonitorUp size={20} />
          </button>
          
          <button 
            className="btn-ctrl btn-end-call"
            onClick={handleEndCall}
            title="End Session"
          >
            <PhoneOff size={20} />
          </button>
        </div>
        
        <div className="controls-group right">
          <button 
            className={`btn-ctrl ${activeSidePanel === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveSidePanel(activeSidePanel === 'chat' ? null : 'chat')}
            title="Toggle Live Chat"
          >
            <MessageSquare size={20} />
          </button>
          <button 
            className={`btn-ctrl ${activeSidePanel === 'notes' ? 'active' : ''}`}
            onClick={() => setActiveSidePanel(activeSidePanel === 'notes' ? null : 'notes')}
            title="Toggle Session Notes"
          >
            <FileText size={20} />
          </button>
        </div>
      </div>

      {/* Session Feedback / Rating Modal */}
      {showFeedbackModal && (
        <div className="feedback-modal-overlay">
          <div className="feedback-modal-card">
            {!feedbackSubmitted ? (
              <>
                <div className="feedback-header">
                  <div className="feedback-icon-top">
                    <Sparkles size={36} color="#0033A0" />
                  </div>
                  <h2>Session Completed! 🎉</h2>
                  <p>How was your mentorship call with <strong>{mentor.name}</strong>?</p>
                </div>

                <div className="star-rating-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="star-btn"
                      onClick={() => setRating(star)}
                    >
                      <Star 
                        size={32} 
                        fill={star <= rating ? "#FE6500" : "#E2E8F0"} 
                        color={star <= rating ? "#FE6500" : "#CBD5E1"} 
                      />
                    </button>
                  ))}
                </div>

                <textarea 
                  className="feedback-input"
                  rows={3}
                  placeholder="Share feedback on mentor clarity, strategy tips, or recommendations..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                />

                <div className="feedback-modal-actions">
                  <button className="btn-submit-feedback" onClick={submitFeedbackAndExit}>
                    Submit Feedback & Return <CheckCircle size={16} />
                  </button>
                  <button className="btn-skip-feedback" onClick={() => navigate('/mentors')}>
                    Skip & Go to Dashboard
                  </button>
                </div>
              </>
            ) : (
              <div className="feedback-success-state">
                <CheckCircle size={54} color="#024A00" />
                <h3>Thank You for Your Feedback!</h3>
                <p>Your response helps us maintain national coaching excellence.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorSession;
