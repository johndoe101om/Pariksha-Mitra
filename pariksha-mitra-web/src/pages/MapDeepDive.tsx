import React, { useState } from 'react';
import { 
  Map, Layers, Globe, Server, Users, Activity, Award, 
  WifiOff, CheckCircle2, ChevronRight, Search, Filter,
  Building, Download, Radio, ShieldCheck, MapPin, Eye, Info, Landmark, Shield
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { 
  OFFICIAL_SOI_ENTITIES, 
  SURVEY_OF_INDIA_METADATA, 
  OfficialSurveyOfIndiaEntity 
} from '../data/indiaMapData';
import './MapDeepDive.css';

const aspirationalDistrictsHighlight = [
  { district: 'Balrampur (Uttar Pradesh)', students: '48,200', score: '68.4%', status: '+24% Improvement', flag: 'High Growth' },
  { district: 'Gaya (Bihar)', students: '82,400', score: '71.2%', status: '+18% Improvement', flag: 'High Growth' },
  { district: 'Gadchiroli (Maharashtra)', students: '38,100', score: '69.8%', status: '+21% Improvement', flag: 'Offline 2G Star' },
  { district: 'Jaisalmer (Rajasthan)', students: '28,400', score: '68.4%', status: '+16% Improvement', flag: 'Aspirational' },
  { district: 'Dhalai (Tripura)', students: '18,600', score: '70.1%', status: '+28% Improvement', flag: 'North East Star' }
];

const MapDeepDive: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'State' | 'Union Territory'>('All');
  const [selectedZone, setSelectedZone] = useState<string>('All');
  const [activeLayer, setActiveLayer] = useState<'density' | 'dau' | 'aspirational' | 'lowbw'>('density');
  
  // Default to Ladakh
  const [selectedEntity, setSelectedEntity] = useState<OfficialSurveyOfIndiaEntity>(
    OFFICIAL_SOI_ENTITIES.find(s => s.name === 'Ladakh') || OFFICIAL_SOI_ENTITIES[0]
  );
  const [hoveredEntity, setHoveredEntity] = useState<OfficialSurveyOfIndiaEntity | null>(null);

  // Filter entities based on Category and Zone
  const filteredEntities = OFFICIAL_SOI_ENTITIES.filter(entity => {
    const matchesCategory = selectedCategory === 'All' || entity.type === selectedCategory;
    const matchesZone = selectedZone === 'All' || entity.zone === selectedZone;
    return matchesCategory && matchesZone;
  });

  return (
    <div className="geospatial-map-page">
      {/* 1. Official Survey of India Top Header */}
      <div className="map-top-header">
        <div className="map-title-block">
          <div className="map-badge-row">
            <span className="geo-tag">
              <Globe size={12} /> SURVEY OF INDIA • 13TH EDITION/2026 MASTER REFERENCE
            </span>
            <span className="dist-count-tag">28 States & 8 Union Territories</span>
            <span className="sovereign-tag">🇮🇳 Sovereign Indian Territory</span>
          </div>
          <h1>National Administrative & Sovereign Territory Radar</h1>
          <p>
            Official Political Map of India with 28 States and 8 Union Territories • Authoritative Survey of India Geometry
          </p>
        </div>

        <div className="map-top-actions">
          <button className="btn-drill-analytics" onClick={() => navigate('/ministry/analytics')}>
            <Building size={14} /> State Analytics Deep-Dive →
          </button>
        </div>
      </div>

      {/* 2. Official Boundary Classification & Map Controls Ribbon */}
      <div className="map-controls-ribbon">
        {/* Category Filter (All / 28 States / 8 UTs) */}
        <div className="category-toggle-group">
          <span className="ctrl-label"><Landmark size={14} /> Unit Type:</span>
          <button 
            className={`cat-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All (36 Units)
          </button>
          <button 
            className={`cat-btn ${selectedCategory === 'State' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('State')}
          >
            🏛️ 28 States
          </button>
          <button 
            className={`cat-btn ${selectedCategory === 'Union Territory' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('Union Territory')}
          >
            🇮🇳 8 Union Territories
          </button>
        </div>

        {/* Heatmap Layer Selector */}
        <div className="layer-selector-group">
          <span className="ctrl-label"><Layers size={14} /> Metric Layer:</span>
          <button 
            className={`layer-btn ${activeLayer === 'density' ? 'active' : ''}`}
            onClick={() => setActiveLayer('density')}
          >
            👥 Enrollment Density
          </button>
          <button 
            className={`layer-btn ${activeLayer === 'dau' ? 'active' : ''}`}
            onClick={() => setActiveLayer('dau')}
          >
            ⚡ Daily Active (DAU)
          </button>
          <button 
            className={`layer-btn ${activeLayer === 'aspirational' ? 'active' : ''}`}
            onClick={() => setActiveLayer('aspirational')}
          >
            ⭐ NITI Aspirational (112)
          </button>
          <button 
            className={`layer-btn ${activeLayer === 'lowbw' ? 'active' : ''}`}
            onClick={() => setActiveLayer('lowbw')}
          >
            📶 Rural 2G Data Saver
          </button>
        </div>

        {/* Regional Zone Pills */}
        <div className="zone-filter-group">
          <span className="ctrl-label"><Filter size={14} /> Zone:</span>
          {['All', 'North', 'Central', 'West', 'South', 'East & NE', 'Islands'].map(zone => (
            <button 
              key={zone}
              className={`zone-pill ${selectedZone === zone ? 'active' : ''}`}
              onClick={() => setSelectedZone(zone)}
            >
              {zone}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Main Map Workspace Grid */}
      <div className="map-workspace-grid">
        {/* Left: Native Clean SVG Vector Map of India */}
        <div className="interactive-map-canvas-card">
          <div className="canvas-header-row">
            <div>
              <h3>Political Map of India (भारत का संपूर्ण राजनीतिक मानचित्र)</h3>
              <p>English 13th Edition/2026 Master Reference • UT of Ladakh with Full Sovereign Northwest & Eastern Crown</p>
            </div>
            <div className="map-legend-pill">
              <span>{SURVEY_OF_INDIA_METADATA.edition}</span>
            </div>
          </div>

          <div className="svg-map-wrapper">
            <svg viewBox="0 0 740 820" className="pan-india-vector-svg">
              <defs>
                <filter id="soiSoftShadow" x="-5%" y="-5%" width="110%" height="110%">
                  <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#00216E" floodOpacity="0.12"/>
                </filter>
                <filter id="textGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#001A4D" floodOpacity="0.5"/>
                </filter>
              </defs>

              {/* Clean White Background Plate */}
              <rect width="740" height="820" fill="#FFFFFF" rx="12" />

              {/* All Official Sovereign Vector State & UT Polygons */}
              <g filter="url(#soiSoftShadow)">
                {filteredEntities.map(entity => {
                  const isSelected = selectedEntity.id === entity.id;
                  const isHovered = hoveredEntity?.id === entity.id;

                  // Dynamic Layer Shading
                  let fillColor = entity.color;
                  if (activeLayer === 'aspirational') {
                    fillColor = entity.aspirationalCount > 8 ? '#FCA5A5' : entity.aspirationalCount > 2 ? '#FED7AA' : '#FEF3C7';
                  } else if (activeLayer === 'lowbw') {
                    fillColor = entity.lowBwPct > 50 ? '#93C5FD' : entity.lowBwPct > 30 ? '#BAE6FD' : '#E0F2FE';
                  }

                  return (
                    <g 
                      key={entity.id}
                      className={`state-vector-group ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedEntity(entity)}
                      onMouseEnter={() => setHoveredEntity(entity)}
                      onMouseLeave={() => setHoveredEntity(null)}
                      style={{ cursor: 'pointer' }}
                    >
                      {/* State / UT Polygon Contour with crisp white boundary */}
                      <path 
                        d={entity.path} 
                        fill={fillColor}
                        stroke={isSelected ? '#FE6500' : '#FFFFFF'}
                        strokeWidth={isSelected ? 3.5 : 1.5}
                        className="state-boundary-polygon"
                      />

                      {/* Specialized Typography matching reference image */}
                      {entity.name === 'Ladakh' && (
                        <text 
                          x={entity.centroid[0]} 
                          y={entity.centroid[1]} 
                          fill="#FFFFFF" 
                          stroke="#00216E"
                          strokeWidth="0.4"
                          fontSize="13" 
                          fontWeight="900" 
                          textAnchor="middle"
                          filter="url(#textGlow)"
                          className="state-name-svg-label"
                        >
                          Ladakh
                        </text>
                      )}

                      {entity.name === 'Jammu & Kashmir' && (
                        <text 
                          x={entity.centroid[0]} 
                          y={entity.centroid[1] - 5} 
                          fill="#1E293B" 
                          fontSize="9.5" 
                          fontWeight={isSelected ? '900' : '700'} 
                          textAnchor="middle"
                          className="state-name-svg-label"
                        >
                          <tspan x={entity.centroid[0]} dy="0">Jammu &amp;</tspan>
                          <tspan x={entity.centroid[0]} dy="11">Kashmir</tspan>
                        </text>
                      )}

                      {entity.name !== 'Ladakh' && entity.name !== 'Jammu & Kashmir' && entity.centroid && entity.centroid[0] > 0 && entity.centroid[1] > 0 && (
                        <text 
                          x={entity.centroid[0]} 
                          y={entity.centroid[1]} 
                          fill="#1E293B" 
                          fontSize={entity.name.length > 15 ? '8' : '9.5'} 
                          fontWeight={isSelected ? '900' : '700'} 
                          textAnchor="middle"
                          className="state-name-svg-label"
                        >
                          {entity.name}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* Static MeghRaj Cloud PoP Server Node Pins (No animation) */}
              <g className="server-pin-node" transform="translate(265, 275)">
                <circle cx="0" cy="0" r="4.5" fill="#DC2626" stroke="#FFF" strokeWidth="1.5" />
                <rect x="7" y="-9" width="68" height="17" rx="3" fill="#0B192C" />
                <text x="11" y="3" fill="#FFF" fontSize="8" fontWeight="700">PoP Delhi (HQ)</text>
              </g>

              <g className="server-pin-node" transform="translate(325, 535)">
                <circle cx="0" cy="0" r="4.5" fill="#DC2626" stroke="#FFF" strokeWidth="1.5" />
                <rect x="7" y="-9" width="80" height="17" rx="3" fill="#0B192C" />
                <text x="11" y="3" fill="#FFF" fontSize="8" fontWeight="700">PoP Hyderabad</text>
              </g>

              <g className="server-pin-node" transform="translate(215, 505)">
                <circle cx="0" cy="0" r="4.5" fill="#DC2626" stroke="#FFF" strokeWidth="1.5" />
                <rect x="7" y="-9" width="58" height="17" rx="3" fill="#0B192C" />
                <text x="11" y="3" fill="#FFF" fontSize="8" fontWeight="700">PoP Pune</text>
              </g>

              <g className="server-pin-node" transform="translate(455, 485)">
                <circle cx="0" cy="0" r="4.5" fill="#DC2626" stroke="#FFF" strokeWidth="1.5" />
                <rect x="7" y="-9" width="88" height="17" rx="3" fill="#0B192C" />
                <text x="11" y="3" fill="#FFF" fontSize="8" fontWeight="700">PoP Bhubaneswar</text>
              </g>
            </svg>
          </div>

          {/* Official Survey of India Mandatory Footer Metadata */}
          <div className="soi-map-footer-metadata">
            <div className="soi-footer-badge">
              <Shield size={14} color="#002B7F" />
              <strong>Source: Survey of India — Political Map of India, English 13th Edition/2026</strong>
            </div>
            <p className="soi-disclaimer-text">
              The external boundaries and sovereign coastline of India agree with the Record/Master Copy certified by the Survey of India (English 13th Edition/2026). The Union Territory of Jammu & Kashmir and the Union Territory of Ladakh are integral sovereign parts of the Republic of India.
            </p>
          </div>
        </div>

        {/* Right: State/UT Inspection Card & Aspirational Tracker */}
        <div className="map-side-inspector">
          {/* Active Unit Spotlight */}
          <div className="inspected-state-card">
            <div className="inspect-header-top">
              <div className="ins-title-row">
                <span className="ins-code-badge">{selectedEntity.code}</span>
                <div>
                  <h4>{selectedEntity.name}</h4>
                  <span className="ins-type-pill">{selectedEntity.type} • {selectedEntity.zone} India</span>
                </div>
              </div>
              <button className="btn-drill-state" onClick={() => navigate('/ministry/analytics')}>
                Full Report →
              </button>
            </div>

            {/* Official Constitutional Note */}
            <div className="constitutional-note-box">
              <Info size={13} color="#002B7F" />
              <span>{selectedEntity.note}</span>
            </div>

            <div className="inspect-metrics-grid">
              <div className="ins-m-item">
                <span className="m-title">Total Enrolled</span>
                <strong className="m-val text-blue">{selectedEntity.students}</strong>
              </div>
              <div className="ins-m-item">
                <span className="m-title">Daily Active (DAU)</span>
                <strong className="m-val text-saffron">{selectedEntity.dau}</strong>
              </div>
              <div className="ins-m-item">
                <span className="m-title">Avg Mock Percentile</span>
                <strong className="m-val text-green">{selectedEntity.avgScore}%</strong>
              </div>
              <div className="ins-m-item">
                <span className="m-title">NITI Aspirational</span>
                <strong className="m-val text-red">{selectedEntity.aspirationalCount} Districts</strong>
              </div>
              <div className="ins-m-item">
                <span className="m-title">Rural 2G Adoption</span>
                <strong className="m-val text-teal">{selectedEntity.lowBwPct}%</strong>
              </div>
              <div className="ins-m-item">
                <span className="m-title">NIC Edge Latency</span>
                <strong className="m-val text-gray">{selectedEntity.nicPopLatency}</strong>
              </div>
            </div>
          </div>

          {/* NITI Aayog Aspirational Districts Spotlight */}
          <div className="aspirational-spotlight-card">
            <div className="spotlight-title-row">
              <Award size={18} color="#C2410C" />
              <div>
                <h4>NITI Aayog Aspirational Districts Spotlight</h4>
                <p>112 Remote & Tribal Districts Progress Index</p>
              </div>
            </div>

            <div className="aspirational-list">
              {aspirationalDistrictsHighlight.map(dist => (
                <div key={dist.district} className="asp-item-row">
                  <div className="asp-info">
                    <strong>{dist.district}</strong>
                    <span>{dist.students} Aspirants • Mock Score: {dist.score}</span>
                  </div>
                  <span className="asp-flag-badge">{dist.flag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MeghRaj Cloud Edge Nodes Monitor */}
          <div className="meghraj-nodes-card">
            <div className="nodes-title-row">
              <Server size={16} color="#002B7F" />
              <h4>MeghRaj Sovereign Cloud PoP Nodes</h4>
            </div>

            <div className="node-status-list">
              <div className="node-row">
                <span className="node-name">Delhi Central (NIC HQ)</span>
                <span className="node-status-ok">● 99.99% Uptime</span>
              </div>
              <div className="node-row">
                <span className="node-name">Hyderabad South Node</span>
                <span className="node-status-ok">● 99.98% Uptime</span>
              </div>
              <div className="node-row">
                <span className="node-name">Pune West Node</span>
                <span className="node-status-ok">● 99.97% Uptime</span>
              </div>
              <div className="node-row">
                <span className="node-name">Bhubaneswar East Node</span>
                <span className="node-status-ok">● 99.98% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapDeepDive;
