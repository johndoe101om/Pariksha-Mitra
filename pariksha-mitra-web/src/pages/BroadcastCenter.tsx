import React, { useState } from 'react';
import { 
  Send, Bell, Smartphone, Mail, History, Radio, 
  CheckCircle2, AlertTriangle, Users, Globe, Shield, Sparkles, Filter 
} from 'lucide-react';
import './BroadcastCenter.css';

interface BroadcastLog {
  id: string;
  title: string;
  target: string;
  channels: string[];
  sentTime: string;
  deliveredCount: string;
  deliveryRate: string;
  status: 'Delivered' | 'In Transit';
}

const initialLogs: BroadcastLog[] = [
  {
    id: 'BC-881',
    title: 'Admit Card Released: All-India UPSC CSE Prelims 2026 Hall Tickets Available',
    target: 'All UPSC CSE Registered Aspirants (12.4 Lakh)',
    channels: ['Push Notification', 'SMS', 'WhatsApp Alert'],
    sentTime: '45 mins ago',
    deliveredCount: '12,38,400 / 12,40,000',
    deliveryRate: '99.8%',
    status: 'Delivered'
  },
  {
    id: 'BC-880',
    title: 'Live Masterclass Alert: High-Yield Indian Polity starts in 15 mins on PM e-VIDYA Ch 22',
    target: 'Pan-India Active Learners (42.8 Lakh)',
    channels: ['Push Notification', 'Browser Alert'],
    sentTime: '3 hrs ago',
    deliveredCount: '42,10,000 / 42,80,000',
    deliveryRate: '98.4%',
    status: 'Delivered'
  },
  {
    id: 'BC-879',
    title: 'Extreme Weather Offline Alert: 2G Data Saver & Offline Video Pack Sync for Ladakh & HP',
    target: 'Aspirational Districts in Ladakh & Himachal (1.3 Lakh)',
    channels: ['SMS', 'Offline Hub Sync'],
    sentTime: 'Yesterday',
    deliveredCount: '1,28,900 / 1,30,000',
    deliveryRate: '99.1%',
    status: 'Delivered'
  }
];

const BroadcastCenter: React.FC = () => {
  const [logs, setLogs] = useState<BroadcastLog[]>(initialLogs);
  const [targetAudience, setTargetAudience] = useState('All Registered Students (42.8 Lakh)');
  const [msgTitle, setMsgTitle] = useState('');
  const [msgBody, setMsgBody] = useState('');
  const [selectedChannels, setSelectedChannels] = useState<{ [key: string]: boolean }>({
    push: true,
    sms: true,
    whatsapp: false,
    email: false
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleBroadcastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msgTitle || !msgBody) return;

    const newLog: BroadcastLog = {
      id: `BC-${Math.floor(100 + Math.random() * 900)}`,
      title: msgTitle,
      target: targetAudience,
      channels: Object.keys(selectedChannels).filter(k => selectedChannels[k]).map(k => k.toUpperCase()),
      sentTime: 'Just Now',
      deliveredCount: 'Broadcasting to Queue...',
      deliveryRate: '100% Initiated',
      status: 'In Transit'
    };

    setLogs([newLog, ...logs]);
    setMsgTitle('');
    setMsgBody('');
    triggerToast('Emergency National Broadcast dispatched via NIC SMS Gateway & MeghRaj Push Servers.');
  };

  return (
    <div className="broadcast-mgmt-page">
      {/* 1. Header Banner */}
      <div className="bc-top-header">
        <div className="bc-title-lockup">
          <div className="badge-row">
            <span className="broadcast-tag"><Radio size={12} /> NATIONAL BROADCAST HUB</span>
            <span className="telecom-tag">NIC MeghRaj High-Throughput Push Grid</span>
          </div>
          <h1>National Emergency Alert &amp; Student Broadcast Center</h1>
          <p>Disseminate urgent examination updates, live class notices, and admit card releases across India.</p>
        </div>
      </div>

      {toastMessage && (
        <div className="bc-toast-banner">
          <CheckCircle2 size={16} color="#15803D" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 2. 4-Column KPI Grid */}
      <div className="bc-kpi-grid">
        <div className="bc-kpi-card border-blue">
          <div className="kpi-icon bg-blue"><Send size={20} color="#002B7F" /></div>
          <div>
            <span className="kpi-label">Broadcasts Dispatched</span>
            <h3>142 Alerts</h3>
            <p>100% Audit Logged</p>
          </div>
        </div>

        <div className="bc-kpi-card border-green">
          <div className="kpi-icon bg-green"><CheckCircle2 size={20} color="#15803D" /></div>
          <div>
            <span className="kpi-label">Avg Delivery Rate</span>
            <h3>99.4%</h3>
            <p>NIC High-Priority Route</p>
          </div>
        </div>

        <div className="bc-kpi-card border-saffron">
          <div className="kpi-icon bg-saffron"><Smartphone size={20} color="#C2410C" /></div>
          <div>
            <span className="kpi-label">SMS Quota Balance</span>
            <h3>4.2M SMS</h3>
            <p>Gov DLT Verified Header</p>
          </div>
        </div>

        <div className="bc-kpi-card border-purple">
          <div className="kpi-icon bg-purple"><Bell size={20} color="#7E22CE" /></div>
          <div>
            <span className="kpi-label">Push Open Rate</span>
            <h3>34.8%</h3>
            <p>Pan-India Student CTR</p>
          </div>
        </div>
      </div>

      {/* 3. Main Workspace: Split Compose + Audit Logs */}
      <div className="bc-workspace-grid">
        {/* Left: Compose Form */}
        <div className="compose-card">
          <div className="card-top-title">
            <h3>Compose National Broadcast</h3>
            <span className="badge-official">Gov DLT Registered</span>
          </div>

          <form onSubmit={handleBroadcastSubmit} className="compose-form-body">
            <div className="bc-form-group">
              <label>Target Student Cohort</label>
              <select value={targetAudience} onChange={(e) => setTargetAudience(e.target.value)}>
                <option value="All Registered Students (42.8 Lakh)">All Registered Students Pan-India (42.8 Lakh)</option>
                <option value="UPSC CSE Registered Aspirants (12.4 Lakh)">UPSC CSE Aspirants (12.4 Lakh)</option>
                <option value="SSC CGL Registered Aspirants (11.5 Lakh)">SSC CGL Aspirants (11.5 Lakh)</option>
                <option value="NEET / JEE Registered Aspirants (5.5 Lakh)">NEET / JEE Aspirants (5.5 Lakh)</option>
                <option value="Aspirational Districts Cohort (6.8 Lakh)">NITI Aspirational Districts (6.8 Lakh)</option>
              </select>
            </div>

            <div className="bc-form-group">
              <label>Multi-Channel Delivery Protocols</label>
              <div className="channel-checkbox-grid">
                <label className={`channel-pill ${selectedChannels.push ? 'checked' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={selectedChannels.push} 
                    onChange={(e) => setSelectedChannels({ ...selectedChannels, push: e.target.checked })} 
                  />
                  <Bell size={14} /> Mobile App Push (FCM)
                </label>
                <label className={`channel-pill ${selectedChannels.sms ? 'checked' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={selectedChannels.sms} 
                    onChange={(e) => setSelectedChannels({ ...selectedChannels, sms: e.target.checked })} 
                  />
                  <Smartphone size={14} /> Gov SMS (CDAC / NIC)
                </label>
                <label className={`channel-pill ${selectedChannels.whatsapp ? 'checked' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={selectedChannels.whatsapp} 
                    onChange={(e) => setSelectedChannels({ ...selectedChannels, whatsapp: e.target.checked })} 
                  />
                  <Smartphone size={14} /> Official WhatsApp Bot
                </label>
                <label className={`channel-pill ${selectedChannels.email ? 'checked' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={selectedChannels.email} 
                    onChange={(e) => setSelectedChannels({ ...selectedChannels, email: e.target.checked })} 
                  />
                  <Mail size={14} /> Official Gov Email
                </label>
              </div>
            </div>

            <div className="bc-form-group">
              <label>Broadcast Headline (English / हिन्दी)</label>
              <input 
                type="text" 
                required
                placeholder="e.g. [URGENT] UPSC Prelims 2026 Examination City Allotment Slip Out"
                value={msgTitle}
                onChange={(e) => setMsgTitle(e.target.value)}
              />
            </div>

            <div className="bc-form-group">
              <label>Message Content (Supports Bilingual Text &amp; Official Links)</label>
              <textarea 
                rows={4} 
                required
                placeholder="Enter verified official text message to be broadcasted across nationwide student devices..."
                value={msgBody}
                onChange={(e) => setMsgBody(e.target.value)}
              />
            </div>

            <div className="form-action-row">
              <button type="submit" className="btn-dispatch-broadcast">
                <Send size={15} /> Dispatch Emergency Broadcast
              </button>
            </div>
          </form>
        </div>

        {/* Right: Broadcast Logs */}
        <div className="history-logs-card">
          <div className="card-top-title">
            <h3>Recent Broadcast Audit Trail</h3>
            <History size={16} color="#64748B" />
          </div>

          <div className="logs-scroll-list">
            {logs.map(log => (
              <div key={log.id} className="log-item-card">
                <div className="log-header">
                  <span className="log-id">{log.id}</span>
                  <span className="log-rate">{log.deliveryRate} Delivery</span>
                </div>
                <h4>{log.title}</h4>
                <p className="log-target"><strong>Cohort:</strong> {log.target}</p>
                <div className="log-footer">
                  <span className="log-time">{log.sentTime}</span>
                  <span className="log-count">{log.deliveredCount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadcastCenter;
