import React, { useState } from 'react';
import { 
  Camera, Upload, PenTool, CheckCircle, BarChart2, Star, Clock, 
  FileText, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, RefreshCw,
  Award, BookOpen, AlertCircle
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './AnswerWriting.css';

export const AnswerWriting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'type' | 'ocr'>('type');
  const [answerText, setAnswerText] = useState(
    `The office of the Governor under Article 153 occupies a pivotal position in Indian federalism. Article 163 mandates that the Governor shall act on the aid and advice of the Council of Ministers headed by the Chief Minister, except where the Constitution requires discretionary action.\n\nHowever, controversies often arise regarding discretionary powers under Article 163(2), particularly during government formation, floor tests, and reservation of state bills under Article 200. In S.R. Bommai v. Union of India (1994) and Nabam Rebia (2016), the Supreme Court held that the Governor is not an all-pervading authority and discretionary powers are circumscribed by constitutional propriety.\n\nWay Forward: The recommendations of the Sarkaria and Punchhi Commissions regarding non-partisan appointment and strict adherence to floor tests must be implemented in letter and spirit.`
  );
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showResults, setShowResults] = useState(true);

  const wordCount = answerText.trim() ? answerText.trim().split(/\s+/).length : 0;

  const handleEvaluation = () => {
    setIsEvaluating(true);
    setTimeout(() => {
      setIsEvaluating(false);
      setShowResults(true);
    }, 1800);
  };

  return (
    <div className="aw-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader 
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Descriptive Answer Writing Lab', labelHi: 'मुख्य परीक्षा उत्तर लेखन' }
        ]}
        title="UPSC & State PSC Descriptive Answer Lab"
        titleHi="राष्ट्रीय मुख्य परीक्षा उत्तर लेखन व हस्तलिखित मूल्यांकन"
        description="Write on digital canvas or upload handwritten ruled-sheet answer photos for AI rubric evaluation benchmarked to UPSC evaluation standards."
        descriptionHi="डिजिटल या हस्तलिखित उत्तर लिखकर यूपीएससी मानकों के अनुसार तुरंत अंक और सुधार सुझाव प्राप्त करें।"
        icon={<PenTool size={28} />}
        badge="UPSC / State PSC Calibrated"
        actions={
          <div className="aw-hero-exam-pill">
            <Sparkles size={14} color="#FFD54F" /> <span>Target: UPSC GS Paper 2</span>
          </div>
        }
      />

      <main role="main" className="aw-workspace">
        {/* Official Question Prompt Card */}
        <section className="aw-card question-prompt-card" aria-label="Selected Exam Question">
          <div className="qp-top-row">
            <span className="qp-tag">UPSC Civil Services Mains (GS-2) • Polity & Governance</span>
            <span className="qp-marks-pill">15 Marks • 250 Words • 11 Minutes</span>
          </div>

          <h2 className="qp-question">
            "Discuss the constitutional role of the Governor under Article 163 and the recurring controversies surrounding the exercise of discretionary powers in state administration."
          </h2>
          <p className="qp-question-hi">
            "अनुच्छेद 163 के तहत राज्यपाल की संवैधानिक भूमिका और राज्य प्रशासन में विवेकाधीन शक्तियों के प्रयोग से जुड़े विवादों पर चर्चा कीजिए।"
          </p>
        </section>

        {/* 2-Column Grid: Editor / OCR Upload + AI Evaluation Scorecard */}
        <div className="aw-dual-grid">
          {/* Left Column: Editor or Handwriting Upload */}
          <div className="aw-editor-column">
            <div className="aw-card editor-card">
              {/* Tab Selector */}
              <div className="aw-editor-tabs">
                <button 
                  className={`aw-ed-tab ${activeTab === 'type' ? 'active' : ''}`}
                  onClick={() => setActiveTab('type')}
                >
                  <PenTool size={15} /> Type Descriptive Answer
                </button>
                <button 
                  className={`aw-ed-tab ${activeTab === 'ocr' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ocr')}
                >
                  <Camera size={15} /> Upload Ruled Sheet Photo (OCR)
                </button>
              </div>

              {activeTab === 'type' ? (
                <div className="type-area-wrap">
                  <textarea 
                    className="aw-textarea"
                    rows={12}
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                    placeholder="Structure your answer into Introduction, Core Arguments (with Article numbers & Case Laws), and Conclusion..."
                  />

                  <div className="aw-editor-statusbar">
                    <span className="word-count-badge">
                      Words: <strong>{wordCount}</strong> / 250 words
                    </span>
                    <button 
                      className="aw-eval-trigger-btn"
                      onClick={handleEvaluation}
                      disabled={isEvaluating}
                    >
                      {isEvaluating ? (
                        <>
                          <RefreshCw size={15} className="spinning" /> Evaluating Rubric...
                        </>
                      ) : (
                        <>
                          <Sparkles size={15} /> Run AI Evaluation
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="ocr-upload-zone">
                  <Upload size={36} color="#0033A0" />
                  <h4>Upload or Drag Handwritten Answer Photo</h4>
                  <p>Our Bhashini Vision OCR digitizes and evaluates English & Hindi handwritten answer scripts.</p>
                  <button className="ocr-select-btn">Select Image / PDF</button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: AI Evaluation Scorecard */}
          <div className="aw-eval-column">
            {showResults && (
              <div className="aw-card scorecard-card">
                <div className="sc-header">
                  <div>
                    <span className="sc-rubric-label">Official Evaluation Scorecard</span>
                    <h3 className="sc-score-main">
                      10.5 <span className="sc-total">/ 15 Marks</span>
                    </h3>
                  </div>
                  <span className="sc-rank-grade">Top 5% Model Answer</span>
                </div>

                {/* 4 Rubric Breakdowns */}
                <div className="rubric-bars-list">
                  <div className="rubric-item">
                    <div className="ri-head">
                      <span>Introduction & Context (Art. 153/163)</span>
                      <strong>2.5 / 3.0</strong>
                    </div>
                    <div className="ri-bar"><div className="ri-fill" style={{ width: '83%' }}></div></div>
                  </div>

                  <div className="rubric-item">
                    <div className="ri-head">
                      <span>Content & Constitutional Body Arguments</span>
                      <strong>5.5 / 8.0</strong>
                    </div>
                    <div className="ri-bar"><div className="ri-fill" style={{ width: '70%' }}></div></div>
                  </div>

                  <div className="rubric-item">
                    <div className="ri-head">
                      <span>Supreme Court Judgments (Bommai & Nabam Rebia)</span>
                      <strong>1.5 / 2.0</strong>
                    </div>
                    <div className="ri-bar"><div className="ri-fill" style={{ width: '75%' }}></div></div>
                  </div>

                  <div className="rubric-item">
                    <div className="ri-head">
                      <span>Way Forward & Sarkaria Commission Ref</span>
                      <strong>1.0 / 2.0</strong>
                    </div>
                    <div className="ri-bar"><div className="ri-fill" style={{ width: '50%' }}></div></div>
                  </div>
                </div>

                {/* AI Improvement Pointers */}
                <div className="sc-pointers-box">
                  <strong>💡 Evaluator's Strategic Enhancement:</strong>
                  <ul>
                    <li>Excellent mention of S.R. Bommai (1994) case and Article 200 bill reservation.</li>
                    <li>Add the Venkatachaliah Commission recommendation regarding 6-month limit on Governor's assent to strengthen the conclusion.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default AnswerWriting;
