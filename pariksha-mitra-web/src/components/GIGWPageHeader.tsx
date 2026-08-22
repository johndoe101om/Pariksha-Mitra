import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Server, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';
import './GIGWPageHeader.css';

export interface BreadcrumbItem {
  label: string;
  labelHi?: string;
  path?: string;
}

export interface GIGWPageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  titleHi: string;
  description?: string;
  descriptionHi?: string;
  icon?: React.ReactNode | React.ComponentType<any>;
  badge?: string;
  actions?: React.ReactNode;
}

export const GIGWPageHeader: React.FC<GIGWPageHeaderProps> = ({
  breadcrumbs,
  title,
  titleHi,
  description,
  descriptionHi,
  icon,
  badge,
  actions
}) => {
  return (
    <header className="gigw-hero-banner" role="banner">
      {/* 1. Top Sovereign Badges & Single-Line Breadcrumb Strip */}
      <div className="gigw-hero-top-strip">
        <nav className="gigw-hero-breadcrumbs" aria-label="Breadcrumb navigation / पृष्ठ पथ">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <ChevronRight size={13} className="crumb-sep" aria-hidden="true" />
                )}
                {crumb.path && !isLast ? (
                  <Link to={crumb.path} className="crumb-link">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="crumb-current" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        <div className="gigw-hero-badges-row">
          <span className="hero-seal-chip">
            <span aria-hidden="true">🇮🇳</span> Ministry of Education • भारत सरकार
          </span>
          <span className="hero-gov-badge">
            <ShieldCheck size={12} aria-hidden="true" /> {badge || 'GIGW 3.0 & WCAG 2.1 AA'}
          </span>
          <span className="hero-cloud-chip">
            <Server size={12} aria-hidden="true" /> NIC MeghRaj Cloud
          </span>
        </div>
      </div>

      {/* 2. Main Hero Content Lockup */}
      <div className="gigw-hero-main-inner">
        <div className="gigw-hero-left">
          <div className="gigw-hero-title-group">
            {icon && (
              <div className="gigw-hero-icon-orb" aria-hidden="true">
                {React.isValidElement(icon)
                  ? icon
                  : React.createElement(icon as React.ComponentType<any>, { size: 28, color: '#FFFFFF' })}
              </div>
            )}
            <div className="gigw-hero-texts">
              <h1 className="gigw-hero-title">
                {title} <span className="gigw-title-hi">{titleHi}</span>
              </h1>
              {(description || descriptionHi) && (
                <p className="gigw-hero-subtitle">
                  {description} {descriptionHi && <span className="sub-hi"> • {descriptionHi}</span>}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* 3. Optional Right Hero Actions or KPI Block */}
        {actions && (
          <div className="gigw-hero-right-actions" role="toolbar" aria-label="Page quick actions">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
};

export default GIGWPageHeader;
