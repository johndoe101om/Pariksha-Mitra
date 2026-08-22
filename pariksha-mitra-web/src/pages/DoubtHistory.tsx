import React, { useState } from 'react';
import { Search, Filter, Folder, Bookmark, Share2, Copy, Trash2, ChevronDown } from 'lucide-react';
import './DoubtHistory.css';

const MOCK_DOUBTS = [
  {
    id: 1,
    question: "Explain the difference between Fundamental Rights and Directive Principles.",
    subject: "Polity",
    date: "2026-08-19",
    source: "AI Tutor",
    bookmarked: true,
    preview: "Fundamental Rights are justifiable in court, whereas Directive Principles are not justifiable..."
  },
  {
    id: 2,
    question: "How to solve syllogism problems quickly?",
    subject: "Reasoning",
    date: "2026-08-18",
    source: "Mentor Session",
    bookmarked: false,
    preview: "Use the Venn diagram method. Start by drawing circles for each premise..."
  },
  {
    id: 3,
    question: "What were the main causes of the Revolt of 1857?",
    subject: "History",
    date: "2026-08-15",
    source: "AI Tutor",
    bookmarked: true,
    preview: "The main causes can be grouped into Political, Economic, Social, and Military factors..."
  }
];

const DoubtHistory: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All Doubts');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="doubt-history-container">
      <div className="page-header">
        <h1 className="display-title">Doubt History & Notebook / प्रश्न इतिहास और नोटबुक</h1>
        <p className="subtitle">Review your past queries and access your saved notes.</p>
      </div>

      <div className="filters-bar">
        <div className="tabs">
          {['All Doubts', 'Saved to Notebook', 'Bookmarked'].map(tab => (
            <button 
              key={tab} 
              className={`tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="search-filter-group">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={18} />
            <input type="text" placeholder="Search your doubts..." />
          </div>
          <button className="filter-btn"><Filter size={18}/> Filter</button>
        </div>
      </div>

      <div className="content-area">
        {activeTab === 'Saved to Notebook' ? (
          <div className="notebook-view">
            {['Polity', 'History', 'Reasoning'].map(subject => (
              <div key={subject} className="folder-card">
                <Folder size={40} color="#0033A0" fill="#E8F0FF" />
                <h3>{subject}</h3>
                <p>12 Saved items</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="doubt-list">
            {MOCK_DOUBTS.map(doubt => (
              <div key={doubt.id} className="doubt-card">
                <div 
                  className="doubt-header" 
                  onClick={() => setExpandedId(expandedId === doubt.id ? null : doubt.id)}
                >
                  <div className="doubt-meta">
                    <span className="subject-tag">{doubt.subject}</span>
                    <span className="date-tag">{doubt.date}</span>
                    <span className="source-tag">{doubt.source}</span>
                  </div>
                  <div className="doubt-question-row">
                    <h3 className="doubt-question">{doubt.question}</h3>
                    <ChevronDown 
                      size={20} 
                      className={`expand-icon ${expandedId === doubt.id ? 'rotated' : ''}`} 
                    />
                  </div>
                </div>

                {expandedId === doubt.id && (
                  <div className="doubt-body">
                    <div className="doubt-answer">
                      <p>{doubt.preview}</p>
                      {/* Normally full markdown answer here */}
                    </div>
                    <div className="doubt-actions">
                      <button className="action-btn"><Bookmark size={16} fill={doubt.bookmarked ? "#0033A0" : "none"} color="#0033A0"/> {doubt.bookmarked ? 'Saved' : 'Save'}</button>
                      <button className="action-btn"><Copy size={16} /> Copy</button>
                      <button className="action-btn"><Share2 size={16} /> Share</button>
                      <button className="action-btn danger"><Trash2 size={16} /> Delete</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DoubtHistory;
