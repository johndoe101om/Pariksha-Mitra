import React from 'react';
import { ShieldCheck, Lock, Globe } from 'lucide-react';

export const GIGWFooter: React.FC = () => {
  return (
    <footer className="gigw-compliance-footer" role="contentinfo" aria-label="Official Government Compliance and Security Footer">
      <div className="gigw-footer-left">
        <ShieldCheck size={16} color="var(--color-primary)" aria-hidden="true" />
        <span>
          <strong>National Free Competitive Exam Coaching Platform</strong> • Ministry of Education, Government of India
        </span>
      </div>
      <div className="gigw-footer-right">
        <span>
          <Lock size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '4px' }} aria-hidden="true" />
          DPDP Act 2023 & CERT-In Compliant
        </span>
        <span>•</span>
        <span>
          <Globe size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '4px' }} aria-hidden="true" />
          Hosted on NIC MeghRaj Cloud
        </span>
        <span>•</span>
        <span>NeSDA Rating: 4.2/5.0</span>
      </div>
    </footer>
  );
};

export default GIGWFooter;
