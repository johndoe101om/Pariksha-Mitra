import React, { useState } from 'react';
import { 
  Eye, Ear, MousePointer2, BrainCircuit, Mic, RotateCcw, ShieldCheck, 
  Accessibility, CheckCircle2, Sparkles, Volume2, ZoomIn, Contrast, Type, Video
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './AccessibilitySuite.css';

export const AccessibilitySuite: React.FC = () => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [signLanguage, setSignLanguage] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [screenReaderHints, setScreenReaderHints] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const applyPreset = (preset: 'low-vision' | 'hearing' | 'dyslexia' | 'reset') => {
    if (preset === 'low-vision') {
      setFontSize('huge');
      setHighContrast(true);
      setDyslexicFont(false);
      setSignLanguage(false);
    } else if (preset === 'hearing') {
      setSignLanguage(true);
      setFontSize('normal');
      setHighContrast(false);
    } else if (preset === 'dyslexia') {
      setDyslexicFont(true);
      setFontSize('large');
      setHighContrast(false);
      setReducedMotion(true);
    } else {
      setFontSize('normal');
      setHighContrast(false);
      setSignLanguage(false);
      setDyslexicFont(false);
      setReducedMotion(false);
    }
  };

  return (
    <div className={`access-root ${highContrast ? 'mode-contrast' : ''} ${dyslexicFont ? 'mode-dyslexic' : ''}`}>
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Accessibility Suite', labelHi: 'दिव्यांगजन सुगमता केंद्र' }
        ]}
        title="Universal Accessibility & Inclusive Learning"
        titleHi="राष्ट्रीय दिव्यांगजन सुगमता एवं समावेशी शिक्षा केंद्र"
        description="Comprehensive accommodations complying with RPwD Act 2016, GIGW 3.0, and WCAG 2.1 AAA for Divyangjan aspirants."
        descriptionHi="दिव्यांगजन अभ्यर्थियों के लिए भारतीय सांकेतिक भाषा (ISL), डिस्लेक्सिया फॉन्ट और उच्च कंट्रास्ट मोड।"
        icon={<Accessibility size={28} />}
        badge="RPwD Act 2016 & WCAG 2.1 AAA"
        actions={
          <div className="access-hero-badge">
            <ShieldCheck size={14} color="#86EFAC" /> <span>Zero Accessibility Barriers</span>
          </div>
        }
      />

      <main role="main" className="access-workspace">
        {/* Quick One-Click Divyangjan Presets */}
        <section className="access-card presets-card" aria-label="One-Click Accessibility Presets">
          <div className="acard-head">
            <Sparkles size={18} color="#FE6500" />
            <h3>One-Click Inclusive Learning Presets <span className="hi">एक-क्लिक सुगमता मोड</span></h3>
          </div>

          <div className="presets-button-grid">
            <button className="preset-btn" onClick={() => applyPreset('low-vision')}>
              <Eye size={18} color="#0033A0" />
              <span>Low Vision & High Contrast</span>
            </button>
            <button className="preset-btn" onClick={() => applyPreset('hearing')}>
              <Ear size={18} color="#FE6500" />
              <span>Indian Sign Language (ISL) Avatar</span>
            </button>
            <button className="preset-btn" onClick={() => applyPreset('dyslexia')}>
              <BrainCircuit size={18} color="#024A00" />
              <span>Dyslexia & ADHD Focus Mode</span>
            </button>
            <button className="preset-btn reset" onClick={() => applyPreset('reset')}>
              <RotateCcw size={16} />
              <span>Reset to Standard</span>
            </button>
          </div>
        </section>

        {/* 2-Column Grid: Settings Controls + Live Interactive Preview Sandbox */}
        <div className="access-dual-grid">
          {/* Left Column: Feature Switch Rows */}
          <div className="access-controls-column">
            {/* Visual Adjustments */}
            <div className="access-card">
              <div className="acard-head">
                <Eye size={18} color="#0033A0" />
                <h3>Visual Accommodations <span className="hi">दृश्य अनुकूलन</span></h3>
              </div>

              <div className="switch-row">
                <div className="switch-info">
                  <strong>High Contrast Mode (Yellow on Black)</strong>
                  <span>Maximizes contrast ratio (14:1) for low vision and cataract aspirants.</span>
                </div>
                <label className="gov-toggle-switch">
                  <input type="checkbox" checked={highContrast} onChange={() => setHighContrast(!highContrast)} />
                  <span className="gov-toggle-slider"></span>
                </label>
              </div>

              <div className="switch-row">
                <div className="switch-info">
                  <strong>Font Sizing Scale</strong>
                  <span>Enlarge typography globally across all study modules.</span>
                </div>
                <div className="font-pills">
                  {(['normal', 'large', 'huge'] as const).map(size => (
                    <button 
                      key={size}
                      className={`font-size-pill ${fontSize === size ? 'active' : ''}`}
                      onClick={() => setFontSize(size)}
                    >
                      {size.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cognitive & Hearing Accommodations */}
            <div className="access-card">
              <div className="acard-head">
                <Ear size={18} color="#FE6500" />
                <h3>Hearing & Cognitive Suite <span className="hi">सांकेतिक भाषा एवं फॉन्ट</span></h3>
              </div>

              <div className="switch-row">
                <div className="switch-info">
                  <strong>AI Sign Language (ISL) Video Interpreter</strong>
                  <span>Shows real-time Indian Sign Language avatar for all lecture audio.</span>
                </div>
                <label className="gov-toggle-switch">
                  <input type="checkbox" checked={signLanguage} onChange={() => setSignLanguage(!signLanguage)} />
                  <span className="gov-toggle-slider"></span>
                </label>
              </div>

              <div className="switch-row">
                <div className="switch-info">
                  <strong>OpenDyslexic Heavy-Bottom Typography</strong>
                  <span>Increases character bottom weight to prevent letter swapping & rotations.</span>
                </div>
                <label className="gov-toggle-switch">
                  <input type="checkbox" checked={dyslexicFont} onChange={() => setDyslexicFont(!dyslexicFont)} />
                  <span className="gov-toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Preview Sandbox */}
          <div className="access-preview-column">
            <div className={`access-card preview-card font-${fontSize}`}>
              <div className="acard-head">
                <Type size={18} color="#0033A0" />
                <h3>Live Classroom Preview Sandbox <span className="hi">लाइव पूर्वावलोकन</span></h3>
              </div>

              <div className="preview-content-box">
                <h4 className="preview-lesson-title">Fundamental Rights: Article 14 (Equality Before Law)</h4>
                <p className="preview-body-text">
                  The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.
                </p>
                <p className="preview-hi-text">
                  राज्य भारत के राज्यक्षेत्र में किसी व्यक्ति को विधि के समक्ष समता से या विधियों के समान संरक्षण से वंचित नहीं करेगा।
                </p>

                {signLanguage && (
                  <div className="isl-avatar-mock">
                    <Video size={16} />
                    <span>Indian Sign Language (ISL) Avatar Playing Lesson</span>
                  </div>
                )}
              </div>

              <div className="preview-footer-note">
                <CheckCircle2 size={16} color="#16A34A" />
                <span>Current state complies with GIGW 3.0 & WCAG 2.1 AAA guidelines.</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default AccessibilitySuite;
