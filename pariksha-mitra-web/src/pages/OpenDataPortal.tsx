import React, { useState } from 'react';
import { 
  Database, Download, CheckCircle2, Clock, 
  BarChart2, FileJson, Users, ShieldCheck, Code, Copy, 
  Search, Filter, ExternalLink, Globe, Sparkles 
} from 'lucide-react';
import './OpenDataPortal.css';

interface DatasetItem {
  id: string;
  name: string;
  nameHi: string;
  desc: string;
  category: 'Enrollment' | 'Academic Performance' | 'Sovereign Telemetry' | 'Aspirational Districts';
  date: string;
  format: 'CSV' | 'JSON' | 'XLSX';
  size: string;
  downloads: string;
}

const datasets: DatasetItem[] = [
  { 
    id: 'DS-01', 
    name: 'National State & District Registration Telemetry', 
    nameHi: 'राष्ट्रीय राज्य और जिला पंजीकरण टेलीमेट्री',
    desc: 'Anonymized user registration counts, gender ratio, and rural demographic metrics aggregated by 28 States & 8 UTs.', 
    category: 'Enrollment', 
    date: '2 hours ago', 
    format: 'CSV',
    size: '14.2 MB',
    downloads: '1,840'
  },
  { 
    id: 'DS-02', 
    name: 'NTA-Pattern CBT Mock Test Percentile Aggregates', 
    nameHi: 'एनटीए पैटर्न सीबीटी मॉक टेस्ट परसेंटाइल समुच्चय',
    desc: 'Subject-wise learning scores, average percentiles, and accuracy benchmarks grouped by exam stream.', 
    category: 'Academic Performance', 
    date: '5 hours ago', 
    format: 'JSON',
    size: '28.6 MB',
    downloads: '2,450'
  },
  { 
    id: 'DS-03', 
    name: 'NITI Aayog Aspirational Districts (112) Progress Index', 
    nameHi: 'नीति आयोग आकांक्षी जिले (112) प्रगति सूचकांक',
    desc: 'Deep-dive equity tracking, 2G Data Saver adoption, and student improvement velocity across 112 backward districts.', 
    category: 'Aspirational Districts', 
    date: '1 day ago', 
    format: 'CSV',
    size: '8.4 MB',
    downloads: '3,120'
  },
  { 
    id: 'DS-04', 
    name: 'PM e-VIDYA & DD Free Dish Satellite Streaming Logs', 
    nameHi: 'पीएम ई-विद्या और डीडी फ्री डिश सैटेलाइट स्ट्रीमिंग लॉग',
    desc: 'Concurrent learner viewership, studio broadcast hours, and DTH transponder load statistics.', 
    category: 'Sovereign Telemetry', 
    date: '1 day ago', 
    format: 'XLSX',
    size: '18.1 MB',
    downloads: '1,290'
  }
];

const OpenDataPortal: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDownload = (ds: DatasetItem) => {
    triggerToast(`Downloading certified open dataset ${ds.name} (${ds.format})...`);
  };

  const filteredDatasets = datasets.filter(d => {
    const matchesCat = selectedCategory === 'All' || d.category === selectedCategory;
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="opendata-mgmt-page">
      {/* 1. Header Banner */}
      <div className="od-top-header">
        <div className="od-title-lockup">
          <div className="badge-row">
            <span className="datagov-tag"><Database size={12} /> SYNCED WITH DATA.GOV.IN</span>
            <span className="rti-disclosure-tag">RTI Act Section 4 Proactive Public Disclosure</span>
          </div>
          <h1>National Open Data &amp; Academic Research Portal</h1>
          <p>Open access to machine-readable, anonymized education datasets for researchers, university faculties, and policy think-tanks.</p>
        </div>

        <div className="od-header-actions">
          <button className="btn-api-key" onClick={() => triggerToast('Your API Access Key: ps_live_gov_882194a9bf (Valid for 100k requests/month)')}>
            <Code size={14} /> Request API Developer Key
          </button>
        </div>
      </div>

      {toastMessage && (
        <div className="od-toast-banner">
          <CheckCircle2 size={16} color="#15803D" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. 4-Column KPI Grid */}
      <div className="od-kpi-grid">
        <div className="od-kpi-card border-blue">
          <div className="kpi-icon bg-blue"><Database size={20} color="#002B7F" /></div>
          <div>
            <span className="kpi-label">Open Datasets Available</span>
            <h3>18 Catalogs</h3>
            <p className="text-blue">CSV, JSON, GeoJSON, XLSX</p>
          </div>
        </div>

        <div className="od-kpi-card border-saffron">
          <div className="kpi-icon bg-saffron"><Code size={20} color="#C2410C" /></div>
          <div>
            <span className="kpi-label">REST API Hits (This Month)</span>
            <h3>1.24 Lakh</h3>
            <p className="text-saffron">99.99% Edge Gateway Uptime</p>
          </div>
        </div>

        <div className="od-kpi-card border-green">
          <div className="kpi-icon bg-green"><Users size={20} color="#15803D" /></div>
          <div>
            <span className="kpi-label">Research Institutions</span>
            <h3>480+ Universities</h3>
            <p className="text-green">IITs, IIMs &amp; NITI Aayog</p>
          </div>
        </div>

        <div className="od-kpi-card border-purple">
          <div className="kpi-icon bg-purple"><ShieldCheck size={20} color="#7E22CE" /></div>
          <div>
            <span className="kpi-label">Privacy &amp; Anonymization</span>
            <h3>100% Verified</h3>
            <p className="text-purple">DPDP Act 2023 Compliant</p>
          </div>
        </div>
      </div>

      {/* 3. Main Workspace Grid */}
      <div className="od-workspace-grid">
        {/* Left: Datasets Catalog */}
        <div className="od-catalog-col">
          <div className="od-card">
            <div className="card-header-flex">
              <div>
                <h3>Official Open Datasets Repository</h3>
                <p>Public datasets updated daily via automated NIC MeghRaj data pipelines</p>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="catalog-filter-bar">
              <div className="od-search-box">
                <Search size={14} color="#64748B" />
                <input 
                  type="text" 
                  placeholder="Search datasets, schema, keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="od-cat-select">
                <option value="All">All Categories</option>
                <option value="Enrollment">Enrollment Telemetry</option>
                <option value="Academic Performance">Academic Performance</option>
                <option value="Aspirational Districts">Aspirational Districts</option>
                <option value="Sovereign Telemetry">Sovereign Telemetry</option>
              </select>
            </div>

            {/* Dataset Cards List */}
            <div className="datasets-list-grid">
              {filteredDatasets.map(ds => (
                <div key={ds.id} className="dataset-item-card">
                  <div className="ds-top-row">
                    <div className="ds-title-block">
                      <h4>{ds.name}</h4>
                      <span className="ds-hi-title">{ds.nameHi}</span>
                    </div>
                    <span className={`format-pill format-${ds.format.toLowerCase()}`}>{ds.format}</span>
                  </div>

                  <p className="ds-desc">{ds.desc}</p>

                  <div className="ds-footer-row">
                    <div className="ds-meta-cluster">
                      <span><Clock size={12} /> {ds.date}</span>
                      <span>• Size: {ds.size}</span>
                      <span>• {ds.downloads} Downloads</span>
                    </div>
                    <button className="btn-download-ds" onClick={() => handleDownload(ds)}>
                      <Download size={13} /> Download {ds.format}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: API Explorer Sandbox */}
        <div className="od-api-col">
          <div className="od-card">
            <div className="card-header-flex">
              <div>
                <h3>REST API Developer Sandbox</h3>
                <p>Integrate live public metrics directly into research code</p>
              </div>
              <span className="badge-live">Open API</span>
            </div>

            <div className="api-endpoint-box">
              <label>State Performance Summary Endpoint</label>
              <div className="endpoint-row">
                <span className="method-badge get">GET</span>
                <code>https://api.parikshasetu.gov.in/v1/telemetry/states</code>
              </div>
            </div>

            <div className="code-snippet-box">
              <div className="snippet-header">
                <span>cURL Request Example</span>
                <button className="btn-copy" onClick={() => triggerToast('cURL snippet copied to clipboard!')}>
                  <Copy size={12} /> Copy
                </button>
              </div>
              <pre>
{`curl -X GET "https://api.parikshasetu.gov.in/v1/telemetry/states" \\
  -H "Accept: application/json" \\
  -H "X-API-Key: YOUR_API_KEY"`}
              </pre>
            </div>

            <div className="json-preview-box">
              <div className="snippet-header">
                <span>Live JSON Response Structure</span>
                <span className="status-200">200 OK (14ms)</span>
              </div>
              <pre>
{`{
  "status": "success",
  "data": {
    "totalAspirants": "42.8 Lakh",
    "statesTracked": 28,
    "unionTerritories": 8,
    "activeChannels": 34
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenDataPortal;
