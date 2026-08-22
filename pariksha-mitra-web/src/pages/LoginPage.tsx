import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Lock, Eye, EyeOff, ArrowLeft, Info, CheckCircle, Sparkles } from 'lucide-react';
import './LoginPage.css';
import ParikshaMitraLogo from '../components/ParikshaMitraLogo';

const LoginPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [aadhaar, setAadhaar] = useState('9876543210');
  const [showAadhaar, setShowAadhaar] = useState(true);
  const [consent, setConsent] = useState(true);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  
  const [otp, setOtp] = useState(['1', '2', '3', '4', '5', '6']);
  const [timer, setTimer] = useState(30);
  
  const navigate = useNavigate();
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  const handleAadhaarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length <= 12) {
      setAadhaar(val);
    }
  };

  const handleGetOTP = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setStep(2);
    setTimer(30);
  };

  const handleOtpChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '');
    if (val.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
    
    if (val && index === 5 && newOtp.every(d => d !== '')) {
      handleVerify();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (!localStorage.getItem('pariksha_mitra_user')) {
      const defaultUser = {
        name: 'Rahul Kumar',
        phone: aadhaar.length >= 10 ? aadhaar : '9876543210',
        email: 'rahul.kumar@nic.in',
        state: 'Uttar Pradesh',
        district: 'Lucknow',
        targetExam: 'UPSC CSE',
        educationLevel: 'Graduate',
        gender: 'Male',
        dob: '1999-05-15',
        language: 'Hindi',
        avatarInitials: 'RK',
        registeredAt: new Date().toISOString(),
        isVerified: true
      };
      localStorage.setItem('pariksha_mitra_user', JSON.stringify(defaultUser));
    }
    localStorage.setItem('pariksha_mitra_logged_in', 'true');
    navigate('/dashboard');
  };

  const getMaskedForOTP = () => {
    if (aadhaar.length >= 4) {
      return `XXXX-XXXX-${aadhaar.slice(-4)}`;
    }
    return 'XXXX-XXXX-3210';
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div style={{ marginBottom: '20px' }}>
          <ParikshaMitraLogo layout="vertical" theme="light" height={130} />
        </div>
        <p className="branding-subtitle">National Education Platform<br />Ministry of Education, Govt of India</p>
      </div>
      
      <div className="login-right">
        <div className="login-box">
          <div className="pm-logo-mobile" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <ParikshaMitraLogo layout="horizontal" theme="dark" height={44} />
          </div>
          
          {step === 1 ? (
            <>
              <h2 className="login-heading"><Shield color="#0033A0" /> Secure Login / सुरक्षित लॉगिन</h2>
              
              <form onSubmit={handleGetOTP}>
                <div className="form-group">
                  <label className="form-label">Mobile Number or Aadhaar / मोबाइल या आधार</label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      className="form-input"
                      value={aadhaar}
                      onChange={handleAadhaarChange}
                      placeholder="Enter 10-digit mobile or 12-digit Aadhaar"
                      autoFocus
                    />
                    <button type="button" className="toggle-visibility" onClick={() => setShowAadhaar(!showAadhaar)}>
                      {showAadhaar ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="privacy-notice">
                  <div className="privacy-header" onClick={() => setPrivacyOpen(!privacyOpen)}>
                    <Info size={16} /> Privacy Notice / गोपनीयता सूचना
                  </div>
                  {privacyOpen && (
                    <div className="privacy-body">
                      Your credentials are used solely for demo and verification per DPDP Act 2023.
                    </div>
                  )}
                </div>

                <div className="consent-group">
                  <input 
                    type="checkbox" 
                    id="consent" 
                    className="consent-checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <label htmlFor="consent" className="consent-label">
                    I consent to OTP-based authentication<br/>
                    मैं OTP आधारित सत्यापन के लिए सहमत हूँ
                  </label>
                </div>

                <button 
                  type="submit"
                  className="login-btn"
                >
                  Get OTP / OTP प्राप्त करें
                </button>
              </form>
              
              <div style={{ textAlign: 'center', margin: '14px 0', color: 'var(--token-outline)', fontSize: '0.85rem' }}>OR / या</div>
              
              <button type="button" className="digilocker-btn" onClick={handleVerify}>
                <CheckCircle size={20} color="#0033A0" /> Login with DigiLocker
              </button>

              <button 
                type="button" 
                onClick={handleVerify}
                style={{
                  width: '100%',
                  marginTop: '10px',
                  padding: '10px',
                  background: '#EBF7EE',
                  color: '#024A00',
                  border: '1px solid #A3E635',
                  borderRadius: '4px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Sparkles size={18} /> Quick Demo Login (Instant Access)
              </button>

              <Link to="/register" className="link-text" style={{ cursor: 'pointer', display: 'block', marginTop: '16px', textAlign: 'center' }}>
                New to Pariksha Mitra? Register Free / नया खाता बनाएं
              </Link>
            </>
          ) : (
            <>
              <button type="button" className="back-link" onClick={() => setStep(1)}>
                <ArrowLeft size={16} /> Back
              </button>
              
              <h2 className="login-heading"><Lock color="#0033A0" /> OTP Verification</h2>
              
              <p className="otp-message">
                Demo OTP (123456) auto-filled for linked number <strong>{getMaskedForOTP()}</strong>
              </p>
              
              <div className="otp-boxes">
                {otp.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => { otpRefs.current[idx] = el; }}
                    type="text"
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleOtpChange(idx, e)}
                    onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                    maxLength={1}
                  />
                ))}
              </div>

              <div className="timer-text">
                {timer > 0 ? (
                  `Resend OTP in ${timer}s`
                ) : (
                  <span onClick={() => { setTimer(30); setOtp(['1','2','3','4','5','6']); }}>Resend OTP now</span>
                )}
              </div>

              <button 
                type="button"
                className="login-btn" 
                onClick={handleVerify}
              >
                Verify & Login / सत्यापित करें
              </button>
              
              <a className="link-text" onClick={() => setStep(1)} style={{ cursor: 'pointer', display: 'block', marginTop: '12px', textAlign: 'center' }}>Change Mobile Number</a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
