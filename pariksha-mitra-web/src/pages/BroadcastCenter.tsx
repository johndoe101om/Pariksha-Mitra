import React from 'react';
import { Send, Bell, Smartphone, Mail, History } from 'lucide-react';
import './BroadcastCenter.css';

const BroadcastCenter: React.FC = () => {
  return (
    <div className="broadcast-page">
      <div className="broadcast-header">
        <h1>National Broadcast Center</h1>
        <p>Send mass notifications, SMS, and emails to students</p>
      </div>

      <div className="broadcast-layout">
        <div className="compose-section">
          <div className="card">
            <h2>Compose Message</h2>
            <form className="broadcast-form">
              <div className="form-group">
                <label>Target Audience</label>
                <select>
                  <option>All Registered Students (42.3L)</option>
                  <option>UPSC Aspirants (9.2L)</option>
                  <option>Students in Uttar Pradesh (5.4L)</option>
                </select>
              </div>

              <div className="channels">
                <label>Delivery Channels</label>
                <div className="channel-options">
                  <label className="checkbox-label"><input type="checkbox" defaultChecked /> <Bell size={16}/> Push Notification</label>
                  <label className="checkbox-label"><input type="checkbox" /> <Smartphone size={16}/> SMS</label>
                  <label className="checkbox-label"><input type="checkbox" /> <Mail size={16}/> Email</label>
                </div>
              </div>

              <div className="form-group">
                <label>Message Title</label>
                <input type="text" placeholder="e.g. Important Update Regarding UPSC Prelims" />
              </div>

              <div className="form-group">
                <label>Message Body (supports Hindi/English)</label>
                <textarea rows={5} placeholder="Enter your message here..."></textarea>
              </div>

              <div className="action-buttons">
                <button type="button" className="btn-outline">Schedule Later</button>
                <button type="button" className="btn-primary"><Send size={16}/> Broadcast Now</button>
              </div>
            </form>
          </div>
        </div>

        <div className="history-section">
          <div className="card">
            <div className="card-header">
              <h2>Recent Broadcasts</h2>
              <History size={20} />
            </div>
            <div className="history-list">
              <div className="history-item">
                <div className="hist-meta">
                  <span className="badge success">Delivered</span>
                  <span className="date">Today, 10:00 AM</span>
                </div>
                <h4>Server Maintenance Notice</h4>
                <p>Audience: All Students • Channels: In-App</p>
                <div className="stats">
                  <span>Sent: 42.1L</span>
                  <span>Read: 18.5L</span>
                </div>
              </div>
              <div className="history-item">
                <div className="hist-meta">
                  <span className="badge success">Delivered</span>
                  <span className="date">Yesterday</span>
                </div>
                <h4>New Free Live Classes for SSC</h4>
                <p>Audience: SSC Aspirants • Channels: SMS, Push</p>
                <div className="stats">
                  <span>Sent: 11.2L</span>
                  <span>Read: 8.9L</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadcastCenter;
