import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, ArrowRight, Lock, Mail, KeyRound, 
  Building2, Landmark, Globe, CheckCircle2, Shield, Sparkles, UserCheck 
} from 'lucide-react';
import './MinistryLogin.css';
import ParikshaSetuLogo from '../components/ParikshaSetuLogo';

const MinistryLogin: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('a.sharma.ias@gov.in');
  const [password, setPassword] = useState('••••••••••••');
  const [otp, setOtp] = useState('882190');
  const [authMethod, setAuthMethod] = useState<'password' | 'jan_parichay'>('password');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      localStorage.setItem('parikshasetu_ministry_logged_in', 'true');
      navigate('/ministry/dashboard');
    }
  };

  const handleQuickDemoLogin = () => {
    localStorage.setItem('parikshasetu_ministry_logged_in', 'true');
    navigate('/ministry/dashboard');
  };

  return (
    <div className="ministry-login-container">
      {/* Official Government Tricolor Strip */}
      <div className="gov-tricolor-strip">
        <div className="tri-saffron"></div>
        <div className="tri-white"></div>
        <div className="tri-green"></div>
      </div>

      <div className="ministry-login-inner">
        {/* Left Branding Panel */}
        <div className="ministry-login-left">
          <div className="left-content-wrapper">
            <div className="moe-top-emblem-badge">
              <span className="gov-flag-em">🇮🇳</span>
              <div>
                <strong>GOVERNMENT OF INDIA</strong>
                <span>Ministry of Education • शिक्षा मंत्रालय</span>
              </div>
            </div>

            <div className="logo-center-box">
              <ParikshaSetuLogo layout="vertical" theme="light" height={130} />
            </div>

            <div className="sovereign-mission-text">
              <h2>National Command & Policy Center</h2>
              <p>
                Real-time oversight for 28 States, 8 Union Territories, and 42+ Lakh competitive examination aspirants across India.
              </p>
            </div>

            <div className="feature-bullets-list">
              <div className="bullet-item">
                <CheckCircle2 size={16} color="#4ADE80" />
                <span>Survey of India (13th Edition/2026) Geospatial Integration</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} color="#4ADE80" />
                <span>PM e-VIDYA & DD Free Dish Satellite Streaming Hub</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} color="#4ADE80" />
                <span>NITI Aayog Aspirational Districts (112) Live Radar</span>
              </div>
              <div className="bullet-item">
                <CheckCircle2 size={16} color="#4ADE80" />
                <span>Centralized CPGRAMS Student Grievance Redressal</span>
              </div>
            </div>

            <div className="cloud-security-badge">
              <Shield size={14} color="#93C5FD" />
              <span>Secured by NIC MeghRaj Sovereign Cloud (DEL-PROD-01)</span>
            </div>
          </div>
        </div>

        {/* Right Authentication Form Panel */}
        <div className="ministry-login-right">
          <div className="form-card-wrapper">
            {/* Restricted Official Notice */}
            <div className="official-security-alert">
              <ShieldCheck size={18} color="#C2410C" />
              <div>
                <strong>Restricted Official Access</strong>
                <span>Authorized for Ministry Personnel & State Education Secretaries only</span>
              </div>
            </div>

            <div className="auth-header">
              <span className="auth-step-pill">
                {step === 1 ? 'Step 1 of 2: Credential Verification' : 'Step 2 of 2: Two-Factor Authentication'}
              </span>
              <h2>{step === 1 ? 'Ministry Officer Sign-In' : 'Enter Sovereign OTP'}</h2>
              <p>
                {step === 1 
                  ? 'Access the Centralized Administration & Telemetry Console' 
                  : 'Enter the 6-digit secure token sent to your registered Gov NIC mobile (+91 98*** **210)'}
              </p>
            </div>

            {/* Quick Demo Access Button */}
            <div className="quick-demo-login-box">
              <button type="button" className="btn-quick-demo" onClick={handleQuickDemoLogin}>
                <Sparkles size={16} />
                <span>Instant Officer Access • Dr. A. Sharma, IAS (Joint Secretary)</span>
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="or-divider">
              <span>OR ENTER OFFICIAL CREDENTIALS</span>
            </div>

            <form onSubmit={handleLogin} className="ministry-form-body">
              {step === 1 ? (
                <>
                  <div className="m-input-group">
                    <label>Official Email ID (NIC / Gov Domain)</label>
                    <div className="input-with-icon">
                      <Mail size={18} className="field-icon" />
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="officer.name@nic.in or @gov.in"
                      />
                    </div>
                  </div>

                  <div className="m-input-group">
                    <label>Officer Password</label>
                    <div className="input-with-icon">
                      <KeyRound size={18} className="field-icon" />
                      <input 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary-auth">
                    <span>Verify & Request 2FA OTP</span>
                    <ArrowRight size={18} />
                  </button>

                  <div className="alternative-sso-group">
                    <button type="button" className="btn-sso-janparichay" onClick={handleQuickDemoLogin}>
                      <UserCheck size={16} /> Sign-In via Jan Parichay (Single Sign-On)
                    </button>
                    <button type="button" className="btn-sso-esign" onClick={handleQuickDemoLogin}>
                      <KeyRound size={16} /> Authenticate via Digital e-Sign / Aadhaar OTP
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="m-input-group">
                    <label>6-Digit Sovereign OTP</label>
                    <div className="input-with-icon">
                      <Lock size={18} className="field-icon" />
                      <input 
                        type="text" 
                        maxLength={6}
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="882190"
                        className="otp-styled-field"
                      />
                    </div>
                  </div>

                  <button type="submit" className="btn-primary-auth">
                    <span>Authenticate & Enter Ministry Dashboard</span>
                    <ArrowRight size={18} />
                  </button>

                  <button type="button" className="btn-back-step" onClick={() => setStep(1)}>
                    ← Back to Credential Sign-In
                  </button>
                </>
              )}
            </form>

            <div className="auth-compliance-footer">
              <span>🇮🇳 Audited under Information Technology Act 2000 • ISO 27001 Certified</span>
              <p>© 2026 ParikshaSetu • Ministry of Education, Government of India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryLogin;
