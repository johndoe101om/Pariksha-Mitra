# PARIKSHA MITRA — PRD Addendum v2.0
**National Free Competitive Exam Coaching Platform | Ministry of Education, Government of India**
*Document Version: 2.0 (August 2026)*

---

## Executive Summary & Strategic Alignment
This document serves as the official Product Requirement Document (PRD) Addendum for the 18 breakthrough features integrated into the **Pariksha Mitra** ecosystem. These enhancements directly align with national mandates:
- **National Education Policy (NEP 2020)**: School credit integration via Academic Bank of Credits (ABC) & UDISE+ database.
- **Digital India Bhashini Mission**: Sovereign multi-lingual conversational voice AI in 14 official Indian languages.
- **Universal Accessibility (RPwD Act 2016)**: Screen-reader optimizations, Indian Sign Language (ISL), Dyslexia modes, and assistive technologies.
- **Universal Reach & Zero-Data Access**: WhatsApp/Telegram Bot learning pipelines, SMS/IVR fallback, and offline mesh networks.

---

## Functional Specifications by Tier

### TIER 1: Government Show-Stoppers & Sovereign Integration

#### 1. AI Exam Success Predictor & National Talent Heat Map
- **Student Capability (`/exam-predictor`)**:
  - Probability score gauge with confidence bounds (e.g. 142–158 / 200).
  - Subject-wise radar distribution, percentile prediction, and targeted AI revision recommendations.
- **Ministry Analytics (`/ministry/talent-map`)**:
  - GIS-based district telemetry tracking talent concentration across SSC, Banking, UPSC, NEET, and JEE streams.
  - Subject-level national gap analysis informing resource reallocation and teacher deployment.

#### 2. WhatsApp / Telegram Bot Automated Learning Hub
- **Student Enrollment (`/whatsapp-bot`)**:
  - Zero-friction registration linked via Aadhaar/Mobile.
  - Delivery of daily 7:00 AM 5-MCQ capsules with real-time answer validation.
  - Camera-based OCR doubt solver directly in chat.
- **Ministry Analytics (`/ministry/bot-analytics`)**:
  - Volume tracking, channel breakdown (WhatsApp 72%, Telegram 18%, SMS 10%), engagement funnels, and OCR speed metrics.

#### 3. School & College Integration (NEP 2020 & UDISE+)
- **Teacher & Institutional Portal (`/school`, `/school/onboarding`)**:
  - Bulk student onboarding via UDISE+ verification.
  - Virtual classroom assignment, topic-level tracking, and auto-generated report cards mapped to the Academic Bank of Credits (ABC).

#### 4. Bhashini-Powered Regional Voice Assistant
- **Voice AI Interface (`/voice-assistant`)**:
  - Real-time speech-to-text and text-to-speech in 14 Indian languages.
  - Audio study lecture mode and hands-free conversational tutoring.

#### 5. UMANG & DigiLocker Sovereign Hub
- **Unified Services (`/umang`)**:
  - Direct retrieval of verified educational certificates from DigiLocker.
  - Real-time scholarship finder and official NTA/UPSC examination calendar synchronization.

---

### TIER 2: Student Success Multipliers

#### 6. Peer Study Groups & Community (`/study-groups`)
- AI matchmaking based on exam target, state, and proficiency tier (5–8 student cohorts).
- Moderated discussion threads, study buddy discovery, and collaborative problem-solving.

#### 7. Smart AI Study Planner & Focus Engine (`/study-planner`)
- Dynamic 30/60/90-day revision schedules with spaced repetition intervals.
- Integrated Pomodoro focus timer, daily time-blocking, and Google Calendar synchronization.

#### 8. Current Affairs & Daily News Digest (`/current-affairs`)
- Syllabus-categorized daily brief (Polity, Economy, Science, International) with 10-minute audio toggle.
- Daily 5-question comprehension quiz and downloadable offline monthly PDF dossiers.

#### 9. AI Answer Writing Lab (`/answer-writing`)
- Handwritten answer photo upload with OCR parsing.
- Multi-dimensional AI evaluation (Structure, Content, Language, Relevance) and side-by-side model answer comparison for UPSC Mains & State PSCs.

#### 10. Career Guidance & Aptitude Engine (`/career-guidance`)
- 30-minute psychometric aptitude assessment.
- Data-driven exam suitability rankings, salary breakdowns, career pathway roadmaps, and success stories.

---

### TIER 3: Policy, Transparency & Inclusivity

#### 11. Lok Sabha Constituency Dashboard (`/ministry/constituency`)
- 543 Parliamentary constituency drill-down for Members of Parliament (MPs) and state officials.
- Automated generation of shareable progress infographics and parliamentary inquiry dossiers.

#### 12. RTI-Ready Open Data Portal (`/ministry/open-data`)
- Proactive public disclosure of anonymized platform usage datasets (CSV, JSON, Excel).
- Interactive REST API explorer and Data.gov.in automated sync telemetry.

#### 13. Divyangjan Universal Accessibility Suite (`/accessibility`)
- Comprehensive WCAG 2.1 AA and RPwD Act 2016 control panel.
- Dyslexia-friendly typography (OpenDyslexic), Indian Sign Language video overlays, high contrast, and screen-reader optimizations.

#### 14. Offline Mesh Network & Content Distribution (`/offline-hub`)
- Subsidized physical SD-card order portal for zero-internet rural regions.
- Local Bluetooth content peer-sharing and Common Service Centre (CSC) kiosk directory.

#### 15. National Scholarship & Rewards Hub (`/scholarships`)
- Central and State scholarship discovery engine with Direct Benefit Transfer (DBT) bank account verification.
- Top-performer reward programs and DigiLocker certified course achievements.

---

### TIER 4: Futuristic & Home Support Ecosystem

#### 16. AI Interview Simulator (`/interview-simulator`)
- Interactive mock interview panel simulation (UPSC, Banking, SSC).
- DAF-tailored questioning, response recording, and detailed feedback metrics on confidence, delivery, and structure.

#### 17. "Study Near Me" Resource Locator (`/study-near-me`)
- Geolocation-based discovery of public libraries, PM-WANI Wi-Fi hotspots, CSC centers, and local peer study meetups.

#### 18. Parent / Guardian SMS & IVR Portal (`/parent-dashboard`)
- Multilingual SMS progress reports and toll-free IVR audio playback for parents with basic feature phones.
- WhatsApp progress card subscriptions and student milestone notifications.
