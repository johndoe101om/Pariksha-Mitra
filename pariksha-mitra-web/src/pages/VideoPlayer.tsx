import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Settings, Download, 
  Share2, Bookmark, CheckCircle, ChevronDown, ChevronUp, Star, 
  ChevronLeft, FastForward, Rewind, MessageSquare, BookOpen, 
  FileText, Shield, Sparkles, CheckCircle2, Bot, ArrowRight, Save
} from 'lucide-react';
import './VideoPlayer.css';

export default function VideoPlayer() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  const [videoQuality, setVideoQuality] = useState('720p HD');
  const [currentProgress, setCurrentProgress] = useState(35); // 35%
  const [currentTimeSec, setCurrentTimeSec] = useState(945); // 15:45
  const [totalTimeSec] = useState(2900); // 48:20
  const [activeTab, setActiveTab] = useState<'chapters' | 'transcript' | 'notes' | 'resources'>('chapters');
  const [notesText, setNotesText] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const savedNotes = localStorage.getItem(`pariksha_notes_${id || 'default'}`);
    if (savedNotes) {
      setNotesText(savedNotes);
    }
  }, [id]);

  const handleSaveNotes = () => {
    localStorage.setItem(`pariksha_notes_${id || 'default'}`, notesText);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2500);
  };

  const formatSeconds = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSeek = (newSec: number) => {
    setCurrentTimeSec(newSec);
    setCurrentProgress((newSec / totalTimeSec) * 100);
    setIsPlaying(true);
  };

  const chapters = [
    { id: 1, title: 'Introduction & Socio-Religious Grievances', timeSec: 0, timeStr: '0:00', watched: true },
    { id: 2, title: 'Doctrine of Lapse: Annexation of Satara, Jhansi & Nagpur', timeSec: 332, timeStr: '5:32', watched: true },
    { id: 3, title: 'The Awadh Crisis (1856) & British Administrative Impact', timeSec: 735, timeStr: '12:15', watched: true },
    { id: 4, title: 'Immediate Spark: The Greased Cartridges & Mangal Pandey', timeSec: 1340, timeStr: '22:20', watched: false },
    { id: 5, title: 'Major Storm Centers: Delhi, Kanpur, Lucknow & Arrah', timeSec: 1980, timeStr: '33:00', watched: false },
    { id: 6, title: 'Government of India Act 1858 & Peel Commission Reforms', timeSec: 2520, timeStr: '42:00', watched: false }
  ];

  const transcript = [
    { time: '00:15', speaker: 'Dr. S. Mehta', text: 'Welcome back aspirants. In today’s session, we are analyzing Chapter 4: The Revolt of 1857.' },
    { time: '05:32', speaker: 'Dr. S. Mehta', text: 'Lord Dalhousie implemented the Doctrine of Lapse rigorously between 1848 and 1856.' },
    { time: '12:15', speaker: 'Dr. S. Mehta', text: 'Awadh was not annexed via Doctrine of Lapse, but on the pretext of "maladministration" by Nawab Wajid Ali Shah.' },
    { time: '22:20', speaker: 'Dr. S. Mehta', text: 'The introduction of Enfield rifles in early 1857 triggered immediate unrest at Barrackpore and Meerut.' },
    { time: '42:00', speaker: 'Dr. S. Mehta', text: 'The Queen’s Proclamation of 1858 ended Company rule and introduced direct governance by the British Crown.' }
  ];

  const playlistEpisodes = [
    { ep: 1, title: 'Decline of the Mughal Empire & Rise of Regional Powers', duration: '52:10', active: false },
    { ep: 2, title: 'Carnatic Wars & British Ascendancy in Bengal (Plassey & Buxar)', duration: '48:30', active: false },
    { ep: 3, title: 'British Land Revenue Systems: Permanent, Ryotwari & Mahalwari', duration: '55:00', active: false },
    { ep: 4, title: 'The Revolt of 1857: Causes, Centers & Administrative Impact', duration: '48:20', active: true },
    { ep: 5, title: 'Socio-Religious Reform Movements: Raja Ram Mohan Roy & Brahmo Samaj', duration: '46:15', active: false },
    { ep: 6, title: 'Rise of Indian Nationalism & Formation of INC (1885)', duration: '50:40', active: false }
  ];

  return (
    <div className="video-player-page-root">
      {/* Top Breadcrumb Nav */}
      <div className="player-top-nav">
        <button className="btn-back-to-library" onClick={() => navigate('/videos')}>
          <ChevronLeft size={18} /> Back to Video Library
        </button>
        <span className="exam-series-tag">UPSC CSE GS Paper 1 • Modern Indian History</span>
      </div>

      <div className="player-main-grid">
        {/* Left Column: Player & Interactive Tabs */}
        <div className="player-left-stage">
          {/* Custom Simulated Video Screen */}
          <div className="video-viewport-wrapper">
            <div className="video-screen-content">
              <img 
                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1000&auto=format&fit=crop&q=80" 
                alt="Lecture Visual" 
                className="video-poster-img"
              />
              <div className="video-overlay-gradient"></div>

              {/* Big Center Play Button when paused */}
              {!isPlaying && (
                <button className="center-play-button" onClick={() => setIsPlaying(true)}>
                  <Play size={44} fill="#FFF" />
                </button>
              )}

              {/* Live Sovereign Watermark */}
              <div className="sovereign-video-badge">
                <Shield size={13} /> Pariksha Mitra Sovereign Stream (100% Free)
              </div>
            </div>

            {/* Custom Interactive Player Controls Bar */}
            <div className="player-controls-strip">
              {/* Progress Seek Bar with Chapter Markers */}
              <div 
                className="progress-seek-track"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = clickX / rect.width;
                  handleSeek(Math.floor(ratio * totalTimeSec));
                }}
              >
                <div className="progress-seek-fill" style={{ width: `${currentProgress}%` }}></div>
                <div className="progress-seek-knob" style={{ left: `${currentProgress}%` }}></div>

                {/* Chapter Pin Markers */}
                {chapters.map(ch => (
                  <div 
                    key={ch.id} 
                    className="chapter-seek-pin" 
                    style={{ left: `${(ch.timeSec / totalTimeSec) * 100}%` }}
                    title={`${ch.timeStr} - ${ch.title}`}
                  ></div>
                ))}
              </div>

              {/* Controls Action Row */}
              <div className="controls-action-flex">
                <div className="controls-left-group">
                  <button className="ctrl-btn" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause size={20} fill="#FFF" /> : <Play size={20} fill="#FFF" />}
                  </button>

                  <button className="ctrl-btn" onClick={() => handleSeek(Math.max(0, currentTimeSec - 10))} title="Rewind 10s">
                    <Rewind size={18} />
                  </button>

                  <button className="ctrl-btn" onClick={() => handleSeek(Math.min(totalTimeSec, currentTimeSec + 10))} title="Forward 10s">
                    <FastForward size={18} />
                  </button>

                  <button className="ctrl-btn" onClick={() => setIsMuted(!isMuted)}>
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <span className="time-display-readout">
                    {formatSeconds(currentTimeSec)} / {formatSeconds(totalTimeSec)}
                  </span>
                </div>

                <div className="controls-right-group">
                  {/* Quality Selector */}
                  <select 
                    className="ctrl-dropdown" 
                    value={videoQuality} 
                    onChange={(e) => setVideoQuality(e.target.value)}
                  >
                    <option value="360p Data Saver">360p (2G Data Saver)</option>
                    <option value="720p HD">720p HD</option>
                    <option value="1080p Full HD">1080p FHD</option>
                  </select>

                  {/* Speed Selector */}
                  <select 
                    className="ctrl-dropdown" 
                    value={playbackSpeed} 
                    onChange={(e) => setPlaybackSpeed(e.target.value)}
                  >
                    <option value="0.75x">0.75x</option>
                    <option value="1x">1.0x (Normal)</option>
                    <option value="1.25x">1.25x</option>
                    <option value="1.5x">1.5x</option>
                    <option value="2x">2.0x</option>
                  </select>

                  <button className="ctrl-btn" onClick={() => alert('Fullscreen toggled')}>
                    <Maximize size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Metadata Header */}
          <div className="video-title-actions-bar">
            <div className="title-left">
              <h2>Chapter 4: The Revolt of 1857 & British Administrative Impact</h2>
              <div className="video-meta-tags">
                <span className="fac-name-tag">By Dr. S. Mehta (Former Civil Servant)</span>
                <span>•</span>
                <span>48:20 mins</span>
                <span>•</span>
                <span className="views-count">84,200 Aspirants Completed</span>
              </div>
            </div>

            <div className="actions-right">
              <button 
                className={`btn-action-pill ${isBookmarked ? 'active' : ''}`}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark size={15} /> {isBookmarked ? 'Bookmarked' : 'Bookmark'}
              </button>

              <button className="btn-action-pill" onClick={() => alert('Lecture link copied!')}>
                <Share2 size={15} /> Share
              </button>

              <button className="btn-action-pill download" onClick={() => alert('Downloading offline lecture (720p)...')}>
                <Download size={15} /> Download (140 MB)
              </button>
            </div>
          </div>

          {/* Interactive Workspace Tabs */}
          <div className="workspace-tabs-card">
            <div className="tab-headers-row">
              {[
                { id: 'chapters', label: '📑 Chapters & Timestamps', icon: BookOpen },
                { id: 'transcript', label: '📝 Live Synchronized Transcript', icon: FileText },
                { id: 'notes', label: '✍️ My Study Notes', icon: Sparkles },
                { id: 'resources', label: '📥 Lecture Slides & NCERT PDFs', icon: Download }
              ].map(tab => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    className={`workspace-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id as any)}
                  >
                    <TabIcon size={15} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="tab-content-container">
              {/* Tab 1: Chapters */}
              {activeTab === 'chapters' && (
                <div className="chapters-tab-view">
                  <p className="tab-desc">Click any timestamp below to seek directly to that milestone:</p>
                  <div className="chapters-interactive-list">
                    {chapters.map(ch => (
                      <div 
                        key={ch.id} 
                        className={`chapter-row-item ${currentTimeSec >= ch.timeSec ? 'active-point' : ''}`}
                        onClick={() => handleSeek(ch.timeSec)}
                      >
                        <div className="ch-time-pill">
                          <Play size={12} fill="#0033A0" /> {ch.timeStr}
                        </div>
                        <div className="ch-info">
                          <strong>{ch.id}. {ch.title}</strong>
                        </div>
                        {ch.watched && <CheckCircle2 size={16} color="#16A34A" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 2: Transcript */}
              {activeTab === 'transcript' && (
                <div className="transcript-tab-view">
                  <p className="tab-desc">Bilingual Synchronized Speech-to-Text Transcript:</p>
                  <div className="transcript-items-stream">
                    {transcript.map((line, idx) => (
                      <div key={idx} className="transcript-line">
                        <span className="transcript-time">{line.time}</span>
                        <div className="transcript-text">
                          <span className="speaker-name">{line.speaker}:</span> {line.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Notes */}
              {activeTab === 'notes' && (
                <div className="notes-tab-view">
                  <div className="notes-top-bar">
                    <p className="tab-desc">Take timestamped notes while watching. Auto-saved to your student account:</p>
                    <button className="btn-save-notes" onClick={handleSaveNotes}>
                      <Save size={14} /> {noteSaved ? 'Saved! ✓' : 'Save Notes'}
                    </button>
                  </div>
                  <textarea
                    className="notes-editor-textarea"
                    placeholder="E.g. Lord Dalhousie annexed Satara (1848) and Jhansi (1853). Key causes of 1857 revolt were Doctrine of Lapse + Annexation of Awadh on maladministration..."
                    value={notesText}
                    onChange={(e) => setNotesText(e.target.value)}
                  ></textarea>
                </div>
              )}

              {/* Tab 4: Resources */}
              {activeTab === 'resources' && (
                <div className="resources-tab-view">
                  <p className="tab-desc">Official Study Material & Lecture Slide Decks:</p>
                  <div className="resources-download-grid">
                    <div className="resource-card" onClick={() => alert('Downloading Chapter 4 Slides (PDF)...')}>
                      <FileText size={24} color="#0033A0" />
                      <div className="res-details">
                        <strong>1857 Revolt Faculty Presentation Slides</strong>
                        <span>PDF • 14 Pages • 3.2 MB</span>
                      </div>
                      <Download size={16} />
                    </div>

                    <div className="resource-card" onClick={() => alert('Downloading NCERT Class 12 Themes in History Ch. 11...')}>
                      <BookOpen size={24} color="#024A00" />
                      <div className="res-details">
                        <strong>NCERT Class 12 Chapter 11 Extract (Rebels & Raj)</strong>
                        <span>PDF • 28 Pages • 5.8 MB</span>
                      </div>
                      <Download size={16} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Playlist & Mentor Hub */}
        <aside className="player-right-sidebar">
          {/* Playlist Card */}
          <div className="player-side-card playlist-card">
            <div className="playlist-head-row">
              <h3>Course Playlist (6 Lectures)</h3>
              <span className="playlist-total-time">4h 45m Total</span>
            </div>

            <div className="playlist-episodes-list">
              {playlistEpisodes.map(ep => (
                <div 
                  key={ep.ep} 
                  className={`playlist-ep-item ${ep.active ? 'current-active' : ''}`}
                  onClick={() => alert(`Switching to Episode ${ep.ep}: ${ep.title}`)}
                >
                  <div className="ep-num-box">
                    {ep.active ? <Play size={13} fill="#0033A0" /> : ep.ep}
                  </div>
                  <div className="ep-info">
                    <strong>{ep.title}</strong>
                    <span>{ep.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick AI Doubt Ask for this Video */}
          <div className="player-side-card ai-ask-card">
            <div className="ai-ask-head">
              <Bot size={20} color="#0033A0" />
              <h4>Have a doubt on this video?</h4>
            </div>
            <p>Ask our AI Tutor for an instant explanation at timestamp {formatSeconds(currentTimeSec)}.</p>
            <button className="btn-ask-video-ai" onClick={() => navigate('/doubt-solver')}>
              Ask AI Doubt Solver <ArrowRight size={15} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
