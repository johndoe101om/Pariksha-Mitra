import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Lock } from 'lucide-react';
import './MinistryLogin.css';
import ParikshaMitraLogo from '../components/ParikshaMitraLogo';

const MinistryLogin: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      navigate('/ministry');
    }
  };

  return (
    <div className="ministry-login-container">
      <div className="ministry-login-left">
        <div className="ministry-login-branding">
          <div style={{ marginBottom: '24px' }}>
            <ParikshaMitraLogo layout="vertical" theme="light" height={130} />
          </div>
          <h1>Government of India</h1>
          <p>Ministry of Education National Portal</p>
        </div>
      </div>
      
      <div className="ministry-login-right">
        <div className="ministry-login-form-container">
          <div className="ministry-security-notice">
            <ShieldCheck size={20} />
            <p>This portal is restricted to authorized Ministry personnel only</p>
          </div>

          <h2>{step === 1 ? 'Official Login' : 'Two-Factor Authentication'}</h2>
          <p className="ministry-login-subtitle">
            {step === 1 ? 'Enter your credentials to access the dashboard' : 'Enter the OTP sent to your registered mobile'}
          </p>

          <form onSubmit={handleLogin} className="ministry-login-form">
            {step === 1 ? (
              <>
                <div className="form-group">
                  <label>Official Email (NIC)</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@nic.in or name@gov.in"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                </div>
              </>
            ) : (
              <div className="form-group">
                <label>Enter OTP</label>
                <div className="otp-input-group">
                  <Lock size={20} className="otp-icon" />
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="000000"
                    className="otp-input"
                  />
                </div>
              </div>
            )}

            <button type="submit" className="ministry-btn-primary">
              {step === 1 ? 'Proceed' : 'Verify & Login'}
              <ArrowRight size={18} />
            </button>
            
            {step === 1 && (
              <button type="button" className="ministry-btn-secondary">
                Login with eSign / Jan Parichay
              </button>
            )}
          </form>

          <div className="ministry-login-footer">
            <p>Powered by NIC & MeitY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinistryLogin;
