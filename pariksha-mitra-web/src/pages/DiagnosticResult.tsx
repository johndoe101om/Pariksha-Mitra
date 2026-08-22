import React from 'react';
import { Calendar as CalendarIcon, CheckCircle, ArrowRight, AlertCircle, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './DiagnosticResult.css';

const subjectData = [
  { subject: 'History', score: 80, fullMark: 100 },
  { subject: 'Polity', score: 65, fullMark: 100 },
  { subject: 'Geography', score: 40, fullMark: 100 },
  { subject: 'Economy', score: 50, fullMark: 100 },
  { subject: 'Science', score: 90, fullMark: 100 },
  { subject: 'Maths', score: 30, fullMark: 100 },
  { subject: 'English', score: 75, fullMark: 100 },
  { subject: 'Reasoning', score: 85, fullMark: 100 },
];

export default function DiagnosticResult() {
  const navigate = useNavigate();

  return (
    <div className="diag-result-container">
      <div className="diag-result-header">
        <div className="header-text">
          <h1>Diagnostic Results</h1>
          <p>We've analyzed your strengths and weaknesses to build your personalized plan.</p>
        </div>
        <div className="overall-grade">
          <span>Overall Grade</span>
          <div className="grade-circle">B+</div>
        </div>
      </div>

      <div className="diag-content-grid">
        <div className="left-column">
          <div className="radar-card">
            <h3>Subject Proficiency Profile</h3>
            <div className="radar-wrapper">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={subjectData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar name="Score" dataKey="score" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="analysis-card">
            <h3>Key Insights</h3>
            <div className="insight-list">
              <div className="insight-item strength">
                <CheckCircle size={20} className="icon"/>
                <div>
                  <strong>Strong Areas:</strong> Science, Reasoning, History
                  <p>You have a solid foundation here. We'll focus on advanced practice.</p>
                </div>
              </div>
              <div className="insight-item weakness">
                <AlertCircle size={20} className="icon"/>
                <div>
                  <strong>Focus Areas:</strong> Maths, Geography, Economy
                  <p>These subjects need conceptual building from the basics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-column">
          <div className="study-plan-card">
            <div className="plan-header">
              <div className="title">
                <CalendarIcon size={24} color="var(--secondary)" />
                <h2>Your 30-Day Master Plan</h2>
              </div>
              <span className="badge">Auto-Generated</span>
            </div>

            <p className="plan-desc">Based on your diagnostic, we recommend <strong>4 hours/day</strong> focusing heavily on Quant and Geography in Week 1.</p>

            <div className="week-timeline">
              <div className="week-item active">
                <div className="week-marker">W1</div>
                <div className="week-content">
                  <h4>Foundation Building</h4>
                  <ul>
                    <li><BookOpen size={14}/> Maths: Number System & Percentages</li>
                    <li><BookOpen size={14}/> Geography: Physical Geography basics</li>
                  </ul>
                </div>
              </div>
              <div className="week-item">
                <div className="week-marker">W2</div>
                <div className="week-content">
                  <h4>Core Concepts</h4>
                  <p>Economy & Polity focus</p>
                </div>
              </div>
              <div className="week-item">
                <div className="week-marker">W3</div>
                <div className="week-content">
                  <h4>Advanced Practice</h4>
                  <p>Mixed practice & sectional tests</p>
                </div>
              </div>
            </div>

            <button className="btn-start-plan" onClick={() => navigate('/')}>
              Start Your Plan <ArrowRight size={20} />
            </button>
            <div className="retake-link" onClick={() => navigate('/diagnostic')}>
              Retake Assessment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
