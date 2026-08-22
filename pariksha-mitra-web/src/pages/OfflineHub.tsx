import React, { useState } from 'react';
import { 
  WifiOff, HardDrive, Bluetooth, Usb, MapPin, Download, CheckCircle, 
  Smartphone, Clock, Sparkles, ShieldCheck, ArrowRight, CheckCircle2,
  Package, Radio, Share2, RefreshCw
} from 'lucide-react';
import GIGWPageHeader from '../components/GIGWPageHeader';
import GIGWFooter from '../components/GIGWFooter';
import './OfflineHub.css';

const sdPacks = [
  { id: 1, exam: 'UPSC CSE 2026 Complete Vault', subjects: 'Polity, History, Economy, Geography, CSAT', size: '64 GB High-Speed Class 10', videos: '520+ HD Video Lectures', notes: '48 PDF Handouts' },
  { id: 2, exam: 'SSC CGL Tier 1 & 2 Master Pack', subjects: 'Quantitative Aptitude, Reasoning, English, GA', size: '32 GB Encrypted SD Card', videos: '280+ Video Lectures', notes: '32 Topic Notes' },
  { id: 3, exam: 'Banking & Insurance (IBPS / SBI)', subjects: 'Data Interpretation, English, Banking Awareness', size: '32 GB Encrypted SD Card', videos: '220+ Video Lectures', notes: '24 Topic Notes' },
];

const cscLocations = [
  { id: 1, name: 'CSC Gramin Digital Kiosk', address: 'Panchayat Bhawan, Varanasi (221005)', time: '09:00 AM – 05:00 PM', service: 'Instant Pen Drive Flashing' },
  { id: 2, name: 'Sadar Block E-Governance Center', address: 'Main Tehsil Road, Gorakhpur (273001)', time: '10:00 AM – 06:00 PM', service: 'Free SD Card Distribution' },
];

export const OfflineHub: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [peersFound, setPeersFound] = useState(false);
  const [selectedPack, setSelectedPack] = useState<number | null>(1);

  const startScan = () => {
    setIsScanning(true);
    setPeersFound(false);
    setTimeout(() => {
      setIsScanning(false);
      setPeersFound(true);
    }, 2200);
  };

  return (
    <div className="offline-root">
      {/* 1. Sovereign GIGW 3.0 Hero Header */}
      <GIGWPageHeader
        breadcrumbs={[
          { label: 'Home', labelHi: 'मुख्य पृष्ठ', path: '/dashboard' },
          { label: 'Offline Study Hub', labelHi: 'ऑफ़लाइन अध्ययन केंद्र' }
        ]}
        title="Offline Study & Rural Distribution Hub"
        titleHi="ग्रामीण व शून्य-इंटरनेट ऑफ़लाइन अध्ययन केंद्र"
        description="Learn without internet connectivity using India Post SD Card home delivery, peer-to-peer Wi-Fi Direct sharing, and Gramin CSC flashing stations."
        descriptionHi="बिना इंटरनेट के स्पीड पोस्ट एसडी कार्ड डिलीवरी और पीयर-टू-पीयर शेयरिंग के माध्यम से अध्ययन करें।"
        icon={<WifiOff size={28} />}
        badge="Zero Data Consumption"
        actions={
          <div className="offline-hero-pill">
            <HardDrive size={14} color="#FFD54F" /> <span>Offline Vault: 4.8 GB Saved</span>
          </div>
        }
      />

      <main role="main" className="offline-workspace">
        {/* Section 1: Pre-loaded SD Card Order Cards */}
        <section className="offline-card sd-delivery-card" aria-labelledby="sd-head">
          <div className="ocard-head">
            <div className="ocard-title-group">
              <Package size={20} color="#FE6500" />
              <h2 id="sd-head" className="ocard-title">
                India Post SD Card Home Delivery <span className="hi">मुफ्त एसडी कार्ड डिलीवरी</span>
              </h2>
            </div>
            <span className="ocard-badge free">100% Free Speed Post</span>
          </div>

          <p className="ocard-desc">
            Aspirants in low-connectivity areas can order an encrypted, pre-loaded micro-SD card containing full lecture video archives.
          </p>

          <div className="sd-packs-grid">
            {sdPacks.map(pack => (
              <div 
                key={pack.id} 
                className={`sd-pack-item ${selectedPack === pack.id ? 'active-pack' : ''}`}
                onClick={() => setSelectedPack(pack.id)}
              >
                <div className="pack-top-row">
                  <span className="pack-chip">{pack.size}</span>
                  <span className="pack-free-tag">Free Govt Dispatch</span>
                </div>

                <h3 className="pack-exam-title">{pack.exam}</h3>
                <p className="pack-subjects-txt">{pack.subjects}</p>

                <div className="pack-stats-row">
                  <span>🎬 {pack.videos}</span>
                  <span>📄 {pack.notes}</span>
                </div>

                <button className="pack-order-btn" aria-label={`Order ${pack.exam} SD Card`}>
                  {selectedPack === pack.id ? '✓ Selected for Order' : 'Order SD Card via India Post'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Dual Column (Peer Mesh Sharing + CSC Flashing Stations) */}
        <div className="offline-dual-grid">
          {/* Left: Bluetooth / Wi-Fi Direct Peer Radar */}
          <section className="offline-card mesh-card" aria-labelledby="mesh-head">
            <div className="ocard-head">
              <div className="ocard-title-group">
                <Share2 size={20} color="#0033A0" />
                <h2 id="mesh-head" className="ocard-title">
                  Peer-to-Peer Nearby Sharing <span className="hi">ब्लूटूथ व वाई-फाई शेयरिंग</span>
                </h2>
              </div>
              <span className="ocard-badge blue">0 KB Data Used</span>
            </div>

            <div className="radar-visual-box">
              <div className={`radar-scanner-circle ${isScanning ? 'active-scan' : ''}`}>
                <div className="radar-sweep"></div>
                <Smartphone size={32} color="#0033A0" className="central-device" />

                {peersFound && (
                  <>
                    <div className="peer-node node-1" title="Amit (SSC Aspirant, 4m away)">
                      <span>👦 Amit</span>
                    </div>
                    <div className="peer-node node-2" title="Pooja (UPSC Aspirant, 8m away)">
                      <span>👩 Pooja</span>
                    </div>
                  </>
                )}
              </div>

              <div className="radar-action-area">
                <button 
                  className="scan-trigger-btn"
                  onClick={startScan}
                >
                  <RefreshCw size={16} className={isScanning ? 'spinning' : ''} />
                  <span>{isScanning ? 'Scanning 15m Radius...' : 'Scan for Nearby Aspirants'}</span>
                </button>
                <span className="radar-subtext">Transfer 1.2 GB lecture pack in under 45 seconds over local Wi-Fi Direct.</span>
              </div>
            </div>
          </section>

          {/* Right: Gramin CSC Flashing Kiosks */}
          <section className="offline-card csc-card" aria-labelledby="csc-head">
            <div className="ocard-head">
              <div className="ocard-title-group">
                <Usb size={20} color="#024A00" />
                <h2 id="csc-head" className="ocard-title">
                  Common Service Center (CSC) Flashing <span className="hi">सीएससी केंद्र</span>
                </h2>
              </div>
              <span className="ocard-badge green">Instant Pen Drive Flash</span>
            </div>

            <p className="csc-desc">
              Visit any CSC Kiosk with your own USB drive or phone to flash new weekly video lectures and test papers for free.
            </p>

            <div className="csc-kiosks-list">
              {cscLocations.map(csc => (
                <div key={csc.id} className="csc-item-card">
                  <div className="csc-item-left">
                    <h3 className="csc-name">{csc.name}</h3>
                    <p className="csc-addr"><MapPin size={13} /> {csc.address}</p>
                    <span className="csc-hours"><Clock size={12} /> {csc.time}</span>
                  </div>
                  <span className="csc-service-badge">{csc.service}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <GIGWFooter />
    </div>
  );
};

export default OfflineHub;
