import React, { useState } from 'react';
import { UploadCloud, CheckCircle, XCircle, Clock, Video } from 'lucide-react';
import './ContentManagement.css';

const ContentManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('review');

  const pendingContent = [
    { id: 1, title: 'UPSC History: Mauryan Empire', teacher: 'Dr. R.K. Sharma', date: '2023-10-24', type: 'Video' },
    { id: 2, title: 'SSC Quant Practice Set', teacher: 'Amit Kumar', date: '2023-10-24', type: 'PDF' },
  ];

  return (
    <div className="content-mgmt-page">
      <div className="cm-header">
        <h1>Content Management & Moderation</h1>
      </div>

      <div className="cm-tabs">
        <button className={activeTab === 'upload' ? 'active' : ''} onClick={() => setActiveTab('upload')}>Upload Content</button>
        <button className={activeTab === 'review' ? 'active' : ''} onClick={() => setActiveTab('review')}>Review Queue</button>
        <button className={activeTab === 'library' ? 'active' : ''} onClick={() => setActiveTab('library')}>Library</button>
      </div>

      <div className="cm-content">
        {activeTab === 'review' && (
          <div className="review-queue">
            <h2>Pending Approval ({pendingContent.length})</h2>
            <div className="queue-grid">
              {pendingContent.map(item => (
                <div key={item.id} className="queue-card">
                  <div className="card-thumbnail">
                    <Video size={32} color="#0033A0" />
                  </div>
                  <div className="card-details">
                    <h3>{item.title}</h3>
                    <p>{item.teacher} • {item.type}</p>
                    <span className="date">Uploaded: {item.date}</span>
                  </div>
                  <div className="card-actions">
                    <button className="btn-approve"><CheckCircle size={16} /> Approve</button>
                    <button className="btn-reject"><XCircle size={16} /> Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="upload-section">
            <h2>Upload New Resource</h2>
            <form className="upload-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Title</label>
                  <input type="text" placeholder="Enter content title" />
                </div>
                <div className="form-group">
                  <label>Exam Category</label>
                  <select><option>UPSC</option><option>SSC</option></select>
                </div>
              </div>
              <div className="upload-dropzone">
                <UploadCloud size={48} color="#747684" />
                <p>Drag & drop files here or click to browse</p>
                <span>Supports MP4, PDF (Max 2GB)</span>
              </div>
              <button type="button" className="btn-primary mt-4">Submit for Review</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;
