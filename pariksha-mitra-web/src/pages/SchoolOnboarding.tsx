import React, { useState } from 'react';
import { Building, User, Upload, CheckCircle, Search, UploadCloud, FileSpreadsheet, AlertCircle } from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './SchoolOnboarding.css';

const SchoolOnboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const [udise, setUdise] = useState('');
  const [verified, setVerified] = useState(false);

  const handleVerify = () => {
    if (udise.length > 5) {
      setVerified(true);
    }
  };

  return (
    <main role="main" className="onboarding-container">
      <GIGWPageHeader 
        breadcrumbs={[{ label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' }, { label: 'Institutional Registration', labelHi: 'संस्थागत पंजीकरण' }]}
        title="Institutional Registration"
        titleHi="संस्थागत पंजीकरण"
        description="Onboard your school and students to the Pariksha Mitra platform"
        descriptionHi="अपने स्कूल और छात्रों को परीक्षा मित्र प्लेटफॉर्म पर पंजीकृत करें"
        icon={Building}
        badge="Powered by SAMAGRA Shiksha"
      />

      <nav aria-label="Onboarding Progress" className="onboarding-stepper">
        {[
          { num: 1, label: 'School Verification', icon: <Building size={16} aria-hidden="true" /> },
          { num: 2, label: 'Admin Setup', icon: <User size={16} aria-hidden="true" /> },
          { num: 3, label: 'Bulk Upload', icon: <Upload size={16} aria-hidden="true" /> },
          { num: 4, label: 'Confirmation', icon: <CheckCircle size={16} aria-hidden="true" /> }
        ].map((s) => (
          <React.Fragment key={s.num}>
            <div className={`onboarding-step ${step >= s.num ? 'active' : ''} ${step === s.num ? 'current' : ''}`} aria-current={step === s.num ? 'step' : undefined}>
              <div className="onboarding-step-icon">{s.icon}</div>
              <span className="onboarding-step-label">{s.label}</span>
            </div>
            {s.num < 4 && <div className={`onboarding-step-line ${step > s.num ? 'active' : ''}`} aria-hidden="true"></div>}
          </React.Fragment>
        ))}
      </nav>

      <section className="onboarding-content-card" aria-live="polite">
        {step === 1 && (
          <div className="onboarding-step-content">
            <h2 className="onboarding-step-title">Verify School Identity <span className="hi">स्कूल की पहचान सत्यापित करें</span></h2>
            <div className="onboarding-input-group">
              <label htmlFor="udise-code">UDISE+ Code</label>
              <div className="onboarding-search-wrap">
                <input 
                  id="udise-code"
                  type="text" 
                  placeholder="Enter 11-digit UDISE+ Code" 
                  value={udise}
                  onChange={(e) => setUdise(e.target.value)}
                  className="onboarding-input"
                  aria-required="true"
                />
                <button className="onboarding-verify-btn" onClick={handleVerify} aria-label="Verify UDISE+ Code">Verify</button>
              </div>
            </div>

            {verified && (
              <article className="onboarding-school-card">
                <div className="onboarding-school-info">
                  <h3>Government Senior Secondary School, Sector 12</h3>
                  <p>UDISE: {udise}</p>
                  <p>State: Haryana • District: Karnal</p>
                  <p className="onboarding-status-badge success">Verified via UDISE+ API</p>
                </div>
              </article>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="onboarding-step-content">
            <h2 className="onboarding-step-title">Admin / Nodal Teacher Setup <span className="hi">व्यवस्थापक सेटअप</span></h2>
            <div className="onboarding-form-grid">
              <div className="onboarding-input-group">
                <label htmlFor="admin-name">Full Name</label>
                <input id="admin-name" type="text" className="onboarding-input" placeholder="e.g. Ramesh Kumar" aria-required="true" />
              </div>
              <div className="onboarding-input-group">
                <label htmlFor="admin-designation">Designation</label>
                <select id="admin-designation" className="onboarding-input" aria-required="true">
                  <option>Principal</option>
                  <option>Vice Principal</option>
                  <option>Nodal Officer / Teacher</option>
                </select>
              </div>
              <div className="onboarding-input-group">
                <label htmlFor="admin-email">Official Email</label>
                <input id="admin-email" type="email" className="onboarding-input" placeholder="email@school.edu.in" aria-required="true" />
              </div>
              <div className="onboarding-input-group">
                <label htmlFor="admin-mobile">Mobile Number (for OTP)</label>
                <input id="admin-mobile" type="tel" className="onboarding-input" placeholder="+91" aria-required="true" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="onboarding-step-content">
            <h2 className="onboarding-step-title">Bulk Student Upload <span className="hi">थोक छात्र अपलोड</span></h2>
            <p className="onboarding-help-text">Download the template, fill in student details, and upload the CSV file.</p>
            
            <button className="onboarding-download-template" aria-label="Download CSV Template">
              <FileSpreadsheet size={18} aria-hidden="true" /> Download CSV Template
            </button>

            <div className="onboarding-upload-zone" aria-label="File upload dropzone">
              <UploadCloud size={48} color="var(--color-primary)" aria-hidden="true" />
              <h3>Drag & drop CSV file here</h3>
              <p>or click to browse from your computer</p>
              <button className="onboarding-browse-btn" aria-label="Browse Files">Browse Files</button>
            </div>

            {/* Mock Preview */}
            <div className="onboarding-preview-section">
              <div className="onboarding-preview-header">
                <h3>Preview (35 Students Found)</h3>
                <span className="onboarding-error-text"><AlertCircle size={14} aria-hidden="true" /> 2 Errors Found</span>
              </div>
              <table className="onboarding-table">
                <thead>
                  <tr>
                    <th scope="col">Roll No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Class</th>
                    <th scope="col">Stream</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>101</td><td>Aarav Sharma</td><td>12</td><td>Science</td><td><CheckCircle size={16} color="green" aria-hidden="true"/></td></tr>
                  <tr><td>102</td><td>Diya Patel</td><td>12</td><td>Science</td><td><CheckCircle size={16} color="green" aria-hidden="true"/></td></tr>
                  <tr className="error-row"><td>103</td><td>Missing Info</td><td>12</td><td></td><td><AlertCircle size={16} color="red" aria-hidden="true"/></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="onboarding-step-content success-step">
            <div className="onboarding-success-icon"><CheckCircle size={64} aria-hidden="true" /></div>
            <h2 className="onboarding-step-title">Registration Successful! <span className="hi">पंजीकरण सफल!</span></h2>
            <p>Your school has been successfully registered on Pariksha Mitra. 33 students have been onboarded.</p>
            
            <div className="onboarding-next-steps">
              <div className="onboarding-qr-box">
                <div className="mock-qr" aria-hidden="true">QR CODE</div>
                <p>Print this QR code for students to easily join your school's cohort.</p>
              </div>
            </div>
          </div>
        )}

        <div className="onboarding-actions">
          {step > 1 && step < 4 && (
            <button className="onboarding-btn-secondary" onClick={() => setStep(step - 1)}>Back</button>
          )}
          {step < 4 ? (
            <button 
              className="onboarding-btn-primary" 
              onClick={() => setStep(step + 1)}
              disabled={step === 1 && !verified}
            >
              Continue
            </button>
          ) : (
            <button className="onboarding-btn-primary" onClick={() => window.location.href='/school/dashboard'}>
              Go to School Dashboard
            </button>
          )}
        </div>
      </section>
      <GIGWFooter />
    </main>
  );
};

export default SchoolOnboarding;
