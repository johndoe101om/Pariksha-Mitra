import React, { useState } from 'react';
import { 
  FileText, GraduationCap, Calendar, Award, ExternalLink, ShieldCheck, 
  ChevronRight, Landmark, Sparkles, CheckCircle2, UserCheck, ArrowRight,
  Download, RefreshCw, KeyRound
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './UMANGIntegration.css';

const linkedDocs = [
  { id: 1, title: 'Class 10 High School Marksheet', issuer: 'CBSE Board • 2020', docId: 'DOC-CBSE-X-882910', status: 'DigiLocker Verified' },
  { id: 2, title: 'Class 12 Senior Secondary Marksheet', issuer: 'CBSE Board • 2022', docId: 'DOC-CBSE-XII-774829', status: 'DigiLocker Verified' },
  { id: 3, title: 'APAAR One Nation Student ID Card', issuer: 'Ministry of Education', docId: 'APAAR-2026-9921', status: 'Govt. Synced' },
  { id: 4, title: 'OBC / NCL Category Certificate', issuer: 'Revenue Dept, Govt of UP', docId: 'CERT-UP-2024-1182', status: 'UIDAI Linked' }
];

const examAlerts = [
  { id: 1, exam: 'SSC CGL Tier 1 (2026)', date: '12 Sep 2026', status: 'Admit Card Available' },
  { id: 2, exam: 'IBPS PO Prelims', date: '04 Oct 2026', status: 'City Intimation Active' },
  { id: 3, exam: 'UPSC Civil Services Prelims', date: '24 May 2026', status: 'Notification Out' },
];

export const UMANGIntegration: React.FC = () => {
  const [isLinked, setIsLinked] = useState(true);

  return (
    <div className="umang-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'UMANG Citizen Services', labelHi: 'उमंग नागरिक सेवाएं' }
        ]}
        title="UMANG & DigiLocker Unified Citizen Services"
        titleHi="उमंग, डिजिलॉकर व राष्ट्रीय सेवा सेतु"
        description="Unified single sign-on access to DigiLocker educational certificates, National Scholarship Portal (NSP), and official NTA/UPSC examination notifications."
        descriptionHi="उमंग और डिजिलॉकर के माध्यम से सभी सरकारी शैक्षिक सेवाओं, प्रमाण पत्रों और छात्रवृत्ति का एकीकृत मंच।"
        icon={<Landmark size={28} />}
        badge="Digital India UMANG & MeriPehchaan"
        actions={
          <div className="umang-hero-pill">
            <ShieldCheck size={14} color="#86EFAC" /> <span>MeriPehchaan SSO Active</span>
          </div>
        }
      />

      <main role="main" className="umang-workspace">
        {/* Top Citizen Profile Bar */}
        <section className="umang-card citizen-profile-card" aria-label="Aadhaar e-KYC Verified Citizen">
          <div className="citizen-info-left">
            <div className="citizen-avatar-orb">
              <UserCheck size={28} color="#FFFFFF" />
            </div>
            <div className="citizen-texts">
              <div className="citizen-name-row">
                <h3 className="citizen-name">Rahul Kumar</h3>
                <span className="kyc-badge">
                  <CheckCircle2 size={13} /> UIDAI e-KYC Verified
                </span>
              </div>
              <p className="citizen-meta">
                Aadhaar: <strong>XXXX-XXXX-4829</strong> • APAAR ID: <strong>APAAR-2026-9921</strong> • DigiLocker Status: <strong>Active (4 Docs)</strong>
              </p>
            </div>
          </div>

          <div className="citizen-actions-right">
            <button className="umang-sync-btn">
              <RefreshCw size={14} /> Re-Sync Credentials
            </button>
          </div>
        </section>

        {/* 2-Column Grid: DigiLocker Vault + UMANG Services */}
        <div className="umang-dual-grid">
          {/* Left Column: DigiLocker Verified Documents */}
          <div className="umang-column">
            <section className="umang-card" aria-labelledby="digi-head">
              <div className="ucard-head">
                <div className="ucard-title-group">
                  <FileText size={20} color="#0033A0" />
                  <h2 id="digi-head" className="ucard-title">
                    DigiLocker Document Vault <span className="hi">डिजिलॉकर दस्तावेज़</span>
                  </h2>
                </div>
                <span className="ucard-count-pill">{linkedDocs.length} Verified</span>
              </div>

              <div className="docs-list">
                {linkedDocs.map(doc => (
                  <div key={doc.id} className="doc-item-row">
                    <div className="doc-icon-box">
                      <FileText size={20} color="#0033A0" />
                    </div>
                    <div className="doc-info-block">
                      <h4 className="doc-title">{doc.title}</h4>
                      <span className="doc-issuer">{doc.issuer} • <span className="doc-code">{doc.docId}</span></span>
                    </div>
                    <span className="doc-status-chip">
                      <CheckCircle2 size={12} /> {doc.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="ucard-footer">
                <button className="fetch-doc-btn">
                  Fetch New Document from DigiLocker <ArrowRight size={14} />
                </button>
              </div>
            </section>
          </div>

          {/* Right Column: Unified Exam Notices & Auto-Fill Service */}
          <div className="umang-column">
            <section className="umang-card" aria-labelledby="notices-head">
              <div className="ucard-head">
                <div className="ucard-title-group">
                  <Calendar size={20} color="#FE6500" />
                  <h2 id="notices-head" className="ucard-title">
                    Official Exam Schedules (NTA/SSC) <span className="hi">परीक्षा कार्यक्रम</span>
                  </h2>
                </div>
                <span className="ucard-count-pill orange">Real-Time Sync</span>
              </div>

              <div className="exam-alerts-list">
                {examAlerts.map(alert => (
                  <div key={alert.id} className="exam-alert-row">
                    <div className="alert-text-block">
                      <h4 className="alert-exam-title">{alert.exam}</h4>
                      <span className="alert-exam-date"><Calendar size={12} /> Exam Date: {alert.date}</span>
                    </div>
                    <span className="alert-status-pill">{alert.status}</span>
                  </div>
                ))}
              </div>

              {/* 1-Tap Form Autofill Feature Box */}
              <div className="autofill-feature-box">
                <div className="af-left">
                  <KeyRound size={22} color="#0033A0" />
                  <div>
                    <h4 className="af-title">1-Click AutoFill for SSC / UPSC Forms</h4>
                    <p className="af-desc">Autofill photograph, signature, and marksheet data directly from DigiLocker into official portals.</p>
                  </div>
                </div>
                <button className="af-btn">Enable AutoFill</button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default UMANGIntegration;
