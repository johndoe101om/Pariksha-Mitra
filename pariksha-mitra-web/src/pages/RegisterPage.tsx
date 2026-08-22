import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  User,
  BookOpen,
  Briefcase,
  Monitor,
  HeartPulse,
  Scale,
  Award,
  Globe,
  Mail,
  Phone,
  CheckCircle,
  PartyPopper
} from 'lucide-react';
import './RegisterPage.css';
import ParikshaMitraLogo from '../components/ParikshaMitraLogo';

const STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Ladakh", 
  "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
  "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const EXAMS = [
  { id: 'upsc', name: 'UPSC CSE', icon: Globe },
  { id: 'ssc_cgl', name: 'SSC CGL', icon: Briefcase },
  { id: 'ssc_chsl', name: 'SSC CHSL', icon: Monitor },
  { id: 'ibps_po', name: 'IBPS PO', icon: Briefcase },
  { id: 'ibps_clerk', name: 'IBPS Clerk', icon: Monitor },
  { id: 'rbi_grade_b', name: 'RBI Grade B', icon: Award },
  { id: 'rrb_ntpc', name: 'RRB NTPC', icon: Monitor },
  { id: 'rrb_group_d', name: 'RRB Group D', icon: Briefcase },
  { id: 'neet', name: 'NEET UG', icon: HeartPulse },
  { id: 'jee_main', name: 'JEE Main', icon: GraduationCap },
  { id: 'jee_adv', name: 'JEE Advanced', icon: GraduationCap },
  { id: 'state_psc', name: 'State PSC', icon: Scale },
  { id: 'nda', name: 'NDA', icon: Award },
  { id: 'cds', name: 'CDS', icon: Award },
  { id: 'gate', name: 'GATE', icon: BookOpen },
];

const EDUCATION_LEVELS = [
  '10th Pass',
  '12th Pass',
  'Graduate',
  'Post-Graduate'
];

const LANGUAGES = [
  'English',
  'हिंदी (Hindi)',
  'मराठी (Marathi)',
  'తెలుగు (Telugu)',
  'தமிழ் (Tamil)',
  'ગુજરાતી (Gujarati)'
];

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState('forward');
  
  const [formData, setFormData] = useState({
    phone: '9876543210',
    name: 'Rahul Kumar',
    dob: '1999-05-15',
    gender: 'Male',
    email: 'rahul.kumar@nic.in',
    state: 'Uttar Pradesh',
    district: 'Lucknow',
    pincode: '226001',
    educationLevel: 'Graduate',
    targetExams: ['upsc'],
    language: 'हिंदी (Hindi)'
  });

  const [otp, setOtp] = useState(['1', '2', '3', '4', '5', '6']);
  const [countdown, setCountdown] = useState(30);
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);

  // Rotating benefits
  const [benefitIndex, setBenefitIndex] = useState(0);
  const benefits = [
    { en: '100% Free Government Platform', hi: '100% मुफ्त सरकारी मंच' },
    { en: 'AI-Powered Personal Tutor', hi: 'एआई-संचालित व्यक्तिगत ट्यूटर' },
    { en: '50,000+ Practice Questions', hi: '50,000+ अभ्यास प्रश्न' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBenefitIndex(prev => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [benefits.length]);

  // OTP Countdown
  useEffect(() => {
    let timer: number;
    if (step === 2 && countdown > 0) {
      timer = window.setInterval(() => setCountdown(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [step, countdown]);

  const updateForm = (key: string, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < 5) {
      setDirection('forward');
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection('backward');
      setStep(prev => prev - 1);
    }
  };

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      updateForm('phone', '9876543210');
    }
    setCountdown(30);
    nextStep();
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance to next input
    if (value && index < 5) {
      otpInputs.current[index + 1]?.focus();
    }

    // Auto-submit on complete OTP
    if (index === 5 && value && newOtp.every(v => v !== '')) {
      setTimeout(() => {
        nextStep();
      }, 300);
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) updateForm('name', 'Rahul Kumar');
    if (!formData.state) updateForm('state', 'Uttar Pradesh');
    if (!formData.district) updateForm('district', 'Lucknow');
    nextStep();
  };

  const handleExamSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const chosenName = formData.name || 'Rahul Kumar';
    const userInitials = chosenName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'RK';
    const userProfile = {
      name: chosenName,
      phone: formData.phone || '9876543210',
      email: formData.email || 'rahul.kumar@nic.in',
      state: formData.state || 'Uttar Pradesh',
      district: formData.district || 'Lucknow',
      targetExam: EXAMS.find(e => formData.targetExams.includes(e.id))?.name || 'UPSC CSE',
      educationLevel: formData.educationLevel || 'Graduate',
      gender: formData.gender || 'Male',
      dob: formData.dob || '1999-05-15',
      language: formData.language || 'हिंदी (Hindi)',
      avatarInitials: userInitials,
      registeredAt: new Date().toISOString(),
      isVerified: true
    };
    
    localStorage.setItem('pariksha_mitra_user', JSON.stringify(userProfile));
    localStorage.setItem('pariksha_mitra_logged_in', 'true');
    
    nextStep(); // Go to success step
  };

  const toggleExam = (examId: string) => {
    setFormData(prev => {
      const isSelected = prev.targetExams.includes(examId);
      if (isSelected) {
        return { ...prev, targetExams: prev.targetExams.filter(id => id !== examId) };
      } else {
        return { ...prev, targetExams: [...prev.targetExams, examId] };
      }
    });
  };

  return (
    <div className="register-container">
      {/* Left Branding Panel */}
      <div className="register-left">
        <div className="brand-content">
          <div className="brand-logo-container" style={{ marginBottom: '24px' }}>
            <ParikshaMitraLogo layout="vertical" theme="light" height={120} />
            <p className="brand-tagline" style={{ marginTop: '8px' }}>Your National Education Partner</p>
          </div>
          
          <div className="benefit-carousel">
            <div className="benefit-slide" key={benefitIndex}>
              <h3>{benefits[benefitIndex].en}</h3>
              <p>{benefits[benefitIndex].hi}</p>
            </div>
            <div className="carousel-indicators">
              {benefits.map((_, i) => (
                <div key={i} className={`carousel-dot ${i === benefitIndex ? 'active' : ''}`} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="brand-footer">
          <div className="gov-badge">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="Satyameva Jayate" className="emblem-img" />
            <span>Ministry of Education<br/>Government of India</span>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="register-right">
        <div className="form-wrapper">
          
          {step > 1 && step < 5 && (
            <div className="back-btn-container">
              <button className="back-btn" onClick={prevStep}>
                <ChevronLeft size={20} />
                <span>Back</span>
              </button>
            </div>
          )}

          {step < 5 && (
            <div className="progress-container">
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${(step / 4) * 100}%` }}></div>
              </div>
              <div className="step-indicators">
                {[1, 2, 3, 4].map(s => (
                  <div key={s} className={`step-dot ${s <= step ? 'active' : ''} ${s < step ? 'completed' : ''}`}>
                    {s < step ? <Check size={12} /> : s}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={`step-content step-${step}`}>
            {/* STEP 1: Phone Verification */}
            {step === 1 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Create Your Free Account</h2>
                  <p className="hindi-text">अपना मुफ्त खाता बनाएं</p>
                </div>
                
                <form onSubmit={handlePhoneSubmit}>
                  <div className="input-group">
                    <label>Mobile Number (मोबाइल नंबर) *</label>
                    <div className="phone-input-wrapper">
                      <div className="phone-prefix">+91</div>
                      <input 
                        type="tel" 
                        required 
                        maxLength={10} 
                        placeholder="10-digit number"
                        value={formData.phone}
                        onChange={(e) => updateForm('phone', e.target.value.replace(/\D/g, ''))}
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="primary-btn mt-6"
                  >
                    Get OTP
                    <ChevronRight size={20} />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      handleExamSubmit(e);
                    }}
                    style={{
                      width: '100%',
                      marginTop: '12px',
                      padding: '12px',
                      background: '#EBF7EE',
                      color: '#024A00',
                      border: '1px solid #86EFAC',
                      borderRadius: '8px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    ⚡ Instant Demo Registration (1-Click)
                  </button>
                </form>
                
                <div className="form-footer">
                  <p>Already have an account? <Link to="/login">Login here</Link></p>
                </div>
              </div>
            )}

            {/* STEP 2: OTP Verification */}
            {step === 2 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Verify Mobile Number</h2>
                  <p className="hindi-text">मोबाइल नंबर सत्यापित करें</p>
                  <p className="subtitle">We've sent a 6-digit code to +91 {formData.phone}</p>
                </div>
                
                <div className="otp-container">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={el => { otpInputs.current[idx] = el; }}
                      type="text"
                      maxLength={1}
                      className="otp-input"
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                      autoFocus={idx === 0}
                    />
                  ))}
                </div>
                
                <div className="resend-container">
                  {countdown > 0 ? (
                    <p className="timer-text">Resend OTP in <span>00:{countdown.toString().padStart(2, '0')}</span></p>
                  ) : (
                    <button className="resend-btn" onClick={() => setCountdown(30)}>Resend OTP</button>
                  )}
                </div>
                
                <button 
                  className="primary-btn mt-6"
                  disabled={!otp.every(v => v !== '')}
                  onClick={nextStep}
                >
                  Verify & Continue
                </button>
              </div>
            )}

            {/* STEP 3: Personal Details */}
            {step === 3 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Tell us about yourself</h2>
                  <p className="hindi-text">अपने बारे में बताएं</p>
                </div>
                
                <form onSubmit={handlePersonalSubmit} className="grid-form">
                  <div className="input-group full-width">
                    <label>Full Name (पूरा नाम) *</label>
                    <div className="input-with-icon">
                      <User size={18} className="input-icon" />
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={e => updateForm('name', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="input-group half-width">
                    <label>Date of Birth *</label>
                    <div className="input-with-icon">
                      <Calendar size={18} className="input-icon" />
                      <input 
                        type="date" 
                        required
                        value={formData.dob}
                        onChange={e => updateForm('dob', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="input-group half-width">
                    <label>Gender *</label>
                    <select 
                      required
                      value={formData.gender}
                      onChange={e => updateForm('gender', e.target.value)}
                    >
                      <option value="" disabled>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="input-group full-width">
                    <label>Email Address (Optional)</label>
                    <div className="input-with-icon">
                      <Mail size={18} className="input-icon" />
                      <input 
                        type="email" 
                        placeholder="For important updates"
                        value={formData.email}
                        onChange={e => updateForm('email', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="input-group half-width">
                    <label>State (राज्य) *</label>
                    <select 
                      required
                      value={formData.state}
                      onChange={e => updateForm('state', e.target.value)}
                    >
                      <option value="" disabled>Select State</option>
                      {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  
                  <div className="input-group half-width">
                    <label>District (जिला) *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Pune"
                      value={formData.district}
                      onChange={e => updateForm('district', e.target.value)}
                    />
                  </div>
                  
                  <div className="input-group half-width">
                    <label>Pincode *</label>
                    <div className="input-with-icon">
                      <MapPin size={18} className="input-icon" />
                      <input 
                        type="text" 
                        required
                        maxLength={6}
                        placeholder="6-digit PIN"
                        value={formData.pincode}
                        onChange={e => updateForm('pincode', e.target.value.replace(/\D/g, ''))}
                      />
                    </div>
                  </div>
                  
                  <button type="submit" className="primary-btn full-width mt-6">
                    Next Step
                    <ChevronRight size={20} />
                  </button>
                </form>
              </div>
            )}

            {/* STEP 4: Exam & Education */}
            {step === 4 && (
              <div className="form-step">
                <div className="step-header">
                  <h2>Choose your target</h2>
                  <p className="hindi-text">अपनी लक्ष्य परीक्षा चुनें</p>
                </div>
                
                <form onSubmit={handleExamSubmit}>
                  <div className="section-title">Highest Education Level *</div>
                  <div className="cards-grid-2">
                    {EDUCATION_LEVELS.map(level => (
                      <div 
                        key={level}
                        className={`radio-card ${formData.educationLevel === level ? 'selected' : ''}`}
                        onClick={() => updateForm('educationLevel', level)}
                      >
                        {formData.educationLevel === level && <CheckCircle size={16} className="selected-icon" />}
                        <span>{level}</span>
                      </div>
                    ))}
                  </div>

                  <div className="section-title mt-6">Target Exams (Select multiple) *</div>
                  <div className="cards-grid-3">
                    {EXAMS.map(exam => {
                      const Icon = exam.icon;
                      const isSelected = formData.targetExams.includes(exam.id);
                      return (
                        <div 
                          key={exam.id}
                          className={`multi-card ${isSelected ? 'selected' : ''}`}
                          onClick={() => toggleExam(exam.id)}
                        >
                          <div className="multi-card-header">
                            <Icon size={20} className="exam-icon" />
                            <div className="checkbox">
                              {isSelected && <Check size={12} />}
                            </div>
                          </div>
                          <span className="exam-name">{exam.name}</span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="section-title mt-6">Preferred Language</div>
                  <div className="lang-grid">
                    {LANGUAGES.map(lang => (
                      <div 
                        key={lang}
                        className={`lang-btn ${formData.language === lang ? 'selected' : ''}`}
                        onClick={() => updateForm('language', lang)}
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="primary-btn mt-6"
                    disabled={!formData.educationLevel || formData.targetExams.length === 0}
                  >
                    Complete Registration
                    <ChevronRight size={20} />
                  </button>
                </form>
              </div>
            )}

            {/* STEP 5: Success */}
            {step === 5 && (
              <div className="form-step success-step">
                <div className="success-animation">
                  <div className="success-circle">
                    <Check size={48} className="success-check" />
                  </div>
                  <PartyPopper size={32} className="confetti-icon left" />
                  <PartyPopper size={32} className="confetti-icon right" />
                </div>
                
                <div className="success-content">
                  <h2>Welcome to Pariksha Mitra,<br/>{formData.name.split(' ')[0]}! 🎉</h2>
                  <p className="hindi-text">पारीक्षा मित्रा में आपका स्वागत है!</p>
                  
                  <div className="success-card">
                    <p>Your personalized study plan is ready based on your selected exams.</p>
                  </div>
                  
                  <div className="success-actions">
                    <button className="primary-btn full-width" onClick={() => navigate('/diagnostic')}>
                      Take Diagnostic Test
                      <ChevronRight size={20} />
                    </button>
                    <button className="outline-btn full-width" onClick={() => navigate('/dashboard')}>
                      Go to Dashboard
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
