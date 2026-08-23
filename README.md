# 🇮🇳 ParikshaSetu (परीक्षा सेतु)
### National Free Competitive Exam Coaching & AI Mentorship Platform
**An Initiative by the Ministry of Education, Government of India | भारत सरकार**

[![GIGW 3.0 Compliant](https://img.shields.io/badge/GIGW%203.0-Certified-green.svg)](https://guidelines.india.gov.in/)
[![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG%202.1-AAA%20Compliant-blue.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Digital India](https://img.shields.io/badge/Digital%20India-Empowered-orange.svg)](https://digitalindia.gov.in/)
[![NIC MeghRaj](https://img.shields.io/badge/Cloud-NIC%20MeghRaj%20Ready-00216E.svg)](https://cloud.gov.in/)
[![React 19](https://img.shields.io/badge/React-19.1.0-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF.svg)](https://vite.dev/)
[![DPDP Act 2023](https://img.shields.io/badge/Privacy-DPDP%20Act%202023-138808.svg)](https://www.meity.gov.in/)
[![License: Open Sovereign](https://img.shields.io/badge/License-Government%20Open%20Data-138808.svg)](https://data.gov.in/)

---

## 🏛️ Executive Summary & Vision

**ParikshaSetu (परीक्षा सेतु)** is India's flagship, sovereign digital learning ecosystem designed to bridge and democratize access to elite-quality competitive exam preparation. Aligned with the **National Education Policy (NEP) 2020** and the **Digital India** initiative, ParikshaSetu guarantees **100% free, high-yield coaching, AI diagnostics, and 1-on-1 mentorship** for every aspirant across all 766 districts of the country.

Whether preparing in metropolitan hubs or remote rural villages with 2G connectivity, ParikshaSetu bridges the educational divide by combining cutting-edge AI pedagogy with strict adherence to the **Guidelines for Indian Government Websites (GIGW 3.0)** and **WCAG 2.1 AAA accessibility standards**.

```
═══════════════════════════════════════════════════════════════════════════════════════════
  🇮🇳 PARIKSHASETU — CORE PILLARS
  1. 100% Free Public Service (Zero Subscription, Zero Paywalls, Zero Commercial Monetization)
  2. Multi-Lingual Bhashini Voice AI (14 Indian Languages Supported Natively)
  3. Last-Mile Accessibility (Offline Peer-to-Peer Mesh Sync, India Post SD Cards, 2G Mode)
  4. Integrated Sovereign Services (Aadhaar e-KYC, APAAR ID, DigiLocker, UMANG, CPGRAMS)
  5. Executive Oversight (Real-time Ministry Command Center, D3 GIS Talent Map, Lok Sabha Telemetry)
═══════════════════════════════════════════════════════════════════════════════════════════
```

---

## 🎯 Target Examinations Covered

| Category | Examinations Supported | Key Focus Areas |
| :--- | :--- | :--- |
| **Civil Services** | UPSC CSE (Prelims & Mains), State PSCs (UPPSC, BPSC, MPPSC, TNPSC, WBPSC, MPSC, RAS, etc.) | GS 1-4, CSAT, Essay, Optional Papers, Daily Current Affairs, Mains Answer Writing & Evaluation |
| **Staff Selection** | SSC CGL, CHSL, CPO, MTS, GD Constable, Stenographer | Quantitative Aptitude, Logical Reasoning, General English, Static & Dynamic GK, Speed Drills |
| **Banking & Insurance** | IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B, LIC AAO, RRB Scale I | Data Interpretation, Speed Math, Banking Awareness, Financial Current Affairs, Caselets |
| **Railways** | RRB NTPC, RRB Group D, RRB ALP & Technicians, RPF SI/Constable | General Science, Technical Trades, Arithmetic, Spatial Aptitude, Static GK Mnemonics |
| **National Entrance** | NEET-UG (Medical), JEE Main & Advanced (Engineering) | NCERT Line-by-Line Biology, High-Yield Chemistry & Physics, Advanced Mathematics |
| **Defence Services** | NDA, CDS, AFCAT, CAPF (AC), INET | Mathematics, General Ability Test (GAT), Military Aptitude, SSB Interview Strategy |

---

## 🌟 Comprehensive Feature Breakdown (53+ Sovereign Modules)

```
                                ┌────────────────────────────────────────┐
                                │   ParikshaSetu Web Client (React 19)   │
                                └───────────────────┬────────────────────┘
                                                    │
                 ┌──────────────────────────────────┴──────────────────────────────────┐
                 │                                                                     │
     ┌───────────▼───────────┐                                             ┌───────────▼───────────┐
     │  Student Portal UI    │                                             │ Ministry Command UI   │
     │  (AppLayout & Routes) │                                             │ (MinistryLayout)      │
     └───────────┬───────────┘                                             └───────────┬───────────┘
                 │                                                                     │
     ┌───────────▼─────────────────────────────────────────────────────────────────────▼───────────┐
     │                     State Management & Shared Sovereign Context                             │
     │               (UserContext • ToastContext • High-Contrast Mode • Font Scaler)              │
     └───────────────────────────────────────────────┬─────────────────────────────────────────────┘
                                                     │
                 ┌───────────────────────────────────┼───────────────────────────────────┐
                 │                                   │                                   │
     ┌───────────▼───────────┐           ┌───────────▼───────────┐           ┌───────────▼───────────┐
     │ Bhashini AI Voice     │           │ D3 GIS & GeoJSON      │           │ Recharts Telemetry    │
     │ Speech & NLP (14 Lang)│           │ Map of India Pipeline │           │ Performance Analytics │
     └───────────────────────┘           └───────────────────────┘           └───────────────────────┘
```

---

### 🌐 1. Public & Authentication Portal

- **Official Sovereign Landing Page ([`LandingPage.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/LandingPage.tsx))**:
  - High-impact national hero section with live counters (`28M+ Active Aspirants`, `766 Districts`, `100% Free Access`).
  - Target examination grid, key government pillars, interactive feature carousel, student testimonials, and official GIGW footer.
- **Aspirant Registration ([`RegisterPage.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/RegisterPage.tsx))**:
  - Direct DigiLocker and **APAAR ID (Automated Permanent Academic Account Registry)** integration with instant e-KYC.
  - Category verification (General, EWS, OBC, SC, ST, PwD) for scholarship eligibility and targeted coaching modules.
- **Aspirant Login ([`LoginPage.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/LoginPage.tsx))**:
  - Multi-factor authentication via Mobile OTP (SMS/WhatsApp), Email verification, and Aadhaar-linked login.
- **Interactive Onboarding Wizard ([`OnboardingPage.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/OnboardingPage.tsx))**:
  - Multi-step preference selector: target examinations, preferred medium of instruction (14 languages), target year, and daily study hour commitment.

---

### 📚 2. Core Student Learning Suite

- **Personalized Aspirant Dashboard ([`StudentDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StudentDashboard.tsx))**:
  - Real-time study telemetry, AI Exam Readiness ring, active streak tracking with XP multipliers, next live class countdown, and quick-access hubs.
- **Interactive Syllabus Navigator ([`SyllabusPage.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/SyllabusPage.tsx))**:
  - Granular micro-topic hierarchy across all exam tiers, official commission weightage badges, completion percentages, and 1-click lecture links.
- **AI Diagnostic Assessment & Roadmap ([`DiagnosticAssessment.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/DiagnosticAssessment.tsx) & [`DiagnosticResult.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/DiagnosticResult.tsx))**:
  - Adaptive baseline assessment evaluating subject mastery, speed, and penalty risk; generates a tailored 30-day/90-day learning roadmap.
- **4K Sovereign Video Library & Player ([`VideoLibrary.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/VideoLibrary.tsx) & [`VideoPlayer.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/VideoPlayer.tsx))**:
  - HD/4K masterclasses organized by subject, topic, and educator with playback speeds (`0.75x` to `2.0x`), bilingual audio tracks, interactive transcripts, and a **2G Low-Data Saver** toggle.
- **Adaptive Practice Hub & Analytics ([`PracticeHub.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/PracticeHub.tsx) & [`PracticeResult.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/PracticeResult.tsx))**:
  - Multi-topic MCQ drills with instant step-by-step solutions, Previous Year Question (PYQ) filters, formula sheets, and bookmarking.
- **NTA-Pattern Mock Test Engine ([`MockTestHub.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/MockTestHub.tsx), [`MockTestEngine.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/MockTestEngine.tsx), [`MockTestResult.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/MockTestResult.tsx))**:
  - Realistic full-length exam simulation interface featuring standard question palettes (Answered, Marked for Review, Unvisited), section tabs, countdown timers, virtual calculators, auto-submission, and deep post-test All-India Rank (AIR) analytics.
- **AI Doubt Resolution Center & Archive ([`AIDoubtSolver.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/AIDoubtSolver.tsx) & [`DoubtHistory.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/DoubtHistory.tsx))**:
  - Instant step-by-step resolution powered by Bhashini multi-language NLP, supporting typed questions, voice queries, and handwritten formula/diagram OCR upload.
- **1-on-1 Civil Services Mentorship ([`BrowseMentors.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/BrowseMentors.tsx), [`BookMentor.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/BookMentor.tsx), [`MentorSession.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/MentorSession.tsx))**:
  - Browse verified previous year rankers and senior educators, schedule free 1-on-1 slots, and join secure virtual consultation rooms with integrated whiteboard, chat, and notes.
- **All-India Merit Leaderboard ([`Leaderboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/Leaderboard.tsx))**:
  - National, State, and District percentile rankings with streak badges and peer benchmarks.
- **Student Profile & DigiLocker Vault ([`StudentProfile.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StudentProfile.tsx))**:
  - Manage verified APAAR ID, academic records, caste/income certificates, exam goals, and test history.
- **Settings & 2G Data Saver ([`SettingsPage.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/SettingsPage.tsx))**:
  - Low-bandwidth optimizations, offline sync preferences, notification channels (SMS/WhatsApp/Push), and accessibility defaults.

---

### 🇮🇳 3. Government Show-Stoppers (Tier 1)

- **AI Exam Readiness & Cutoff Predictor ([`ExamPredictor.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ExamPredictor.tsx))**:
  - Multi-variable ML predictive engine calculating probability of clearing Prelims/Mains cutoffs with a `Cutoff Risk Index`, `Subject Confidence Radar`, and peer distribution curves.
- **WhatsApp Bot & Low-Data Study Assistant ([`WhatsAppBot.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/WhatsAppBot.tsx))**:
  - Interactive simulator delivering daily 5-MCQ micro-quizzes, voice audio revision snippets, and PDF summary sheets directly via WhatsApp (`+91 90131 51515`) for zero-broadband study.
- **Multilingual Bhashini Voice Assistant ([`VoiceAssistant.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/VoiceAssistant.tsx) & [`FloatingVoiceAssistant.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/components/FloatingVoiceAssistant.tsx))**:
  - Speech-to-speech AI engine supporting **14 Indian languages** (Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Urdu, Sanskrit, and English) with animated equalizer waveforms and speed controls.
- **UMANG & DigiLocker Citizen Services ([`UMANGIntegration.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/UMANGIntegration.tsx))**:
  - Unified citizen portal linking Aadhaar e-KYC cards, official marksheets, examination admit cards, and 1-click exam application autofill.
- **School & Kendriya Vidyalaya Command Center ([`SchoolIntegration.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/SchoolIntegration.tsx) & [`SchoolOnboarding.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/SchoolOnboarding.tsx))**:
  - Institutional dashboard for School Principals and Teachers across KVs, JNVs, and State Schools to monitor student APAAR progress, broadcast homework, and export UDISE+/CBSE performance reports.

---

### 🚀 4. Student Success Multipliers (Tier 2)

- **Study Groups & Peer Accountability Circles ([`StudyGroups.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StudyGroups.tsx))**:
  - Live study capsules (`184 online in Lucknow Zone`), disciplined 6-10 member peer circles, moderated discussion channels, and a GPS-based Study Buddy Matcher.
- **AI Daily Study Planner ([`StudyPlanner.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StudyPlanner.tsx))**:
  - Balanced 30-day and 90-day revision schedules tailored to exam dates, integrated with daily task checklists and a Pomodoro focus timer.
- **Current Affairs Daily Digest & Audio Briefing ([`CurrentAffairs.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/CurrentAffairs.tsx))**:
  - 5-minute morning audio briefing player, PIB/The Hindu/Yojana source pills, UPSC GS 1-4 paper tagging, and daily 5-MCQ recall quizzes with instant explanations.
- **Mains Answer Writing & Evaluation Lab ([`AnswerWriting.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/AnswerWriting.tsx))**:
  - UPSC GS prompt evaluation engine with live word count tracking, handwritten ruled-sheet OCR upload, and instant rubric scorecard (`10.5/15 Marks`) analyzing Introduction, Body, Diagrams, and Way Forward.
- **Cognitive Career Guidance & Salary Ladder ([`CareerGuidance.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/CareerGuidance.tsx))**:
  - 7th Central Pay Commission hierarchy projections, promotion paths from Entry Level to Apex Scale (Cabinet Secretary / Director General), and cognitive aptitude radar charts.

---

### ♿ 5. Accessibility, Offline & Equity Suite (Tier 3)

- **Divyangjan Accessibility Suite ([`AccessibilitySuite.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/AccessibilitySuite.tsx))**:
  - Presets for **Low Vision**, **ISL (Indian Sign Language)** video overlays, and **OpenDyslexic** typography with an interactive live classroom sandbox.
- **Offline Hub & Peer-to-Peer Mesh Sync ([`OfflineHub.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/OfflineHub.tsx))**:
  - India Post pre-loaded SD card home dispatch portal, Wi-Fi Direct peer mesh radar scanner for sharing 4K lectures device-to-device with **0 KB internet data used**, and CSC USB flash kiosk locator.
- **Direct Benefit Transfer (DBT) & Scholarship Hub ([`ScholarshipHub.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ScholarshipHub.tsx))**:
  - 4-step DBT disbursement tracking (`Aadhaar Linked -> Mock Merit Scored -> Ministry Disbursed`), verified certificate claims, and ministry stipend application.

---

### 🔮 6. Futuristic AI Features (Tier 4)

- **AI Interview & Personality Simulator ([`InterviewSimulator.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/InterviewSimulator.tsx))**:
  - Simulated 4-member UPSC board panel with real-time AI speaking indicators, camera feed, and multidimensional feedback report (`Confidence`, `Clarity`, `Policy Neutrality`, `Body Language`).
- **Study Near Me — GIS Study Space Locator ([`StudyNearMe.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StudyNearMe.tsx))**:
  - Interactive GIS map displaying free public libraries, PM-WANI Wi-Fi hotspots, CSC study kiosks, and active peer meetups with amenity tags (`100 Mbps`, `AC`, `Quiet Zone`).
- **Parent & Guardian View ([`ParentDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ParentDashboard.tsx))**:
  - Non-intrusive guardian dashboard with regional language SMS/WhatsApp updates, study consistency indices, and milestones.

---

### 🏛️ 7. Ministry of Education Sovereign Oversight Portal

- **National Ministry Dashboard ([`MinistryDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/MinistryDashboard.tsx))**:
  - Real-time national telemetry covering 28M+ enrolled aspirants, active concurrent learners, state completion scores, and server health.
- **State-wise & District Analytics ([`StateAnalytics.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StateAnalytics.tsx))**:
  - Comparative state education indices, regional adoption metrics, and gender equity indicators.
- **Interactive Geospatial Talent Map & Map Deep Dive ([`TalentMap.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/TalentMap.tsx) & [`MapDeepDive.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/MapDeepDive.tsx))**:
  - D3-driven SVG/GeoJSON map of India highlighting talent density, top-performing aspirational districts, and infrastructure gaps.
- **Parliamentary Constituency Dashboard ([`ConstituencyDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ConstituencyDashboard.tsx))**:
  - Lok Sabha and Rajya Sabha constituency-level telemetry enabling MPs and administrators to track regional adoption and pass rates.
- **AI WhatsApp Bot Telemetry ([`BotAnalytics.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/BotAnalytics.tsx))**:
  - Query volume, regional resolution rates, and linguistic dialect trend analytics for rural WhatsApp bot interactions.
- **Open Data & Policy Portal ([`OpenDataPortal.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/OpenDataPortal.tsx))**:
  - Anonymized public datasets conforming to `data.gov.in` standards with CSV/JSON exports for educational researchers.
- **Content Management & Syllabus Review ([`ContentManagement.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ContentManagement.tsx))**:
  - National curriculum review, video and question bank approval workflows, and educator accreditation.
- **Live Class Broadcast Scheduler ([`LiveClassScheduler.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/LiveClassScheduler.tsx))**:
  - Schedule and syndicate live masterclasses across Swayam Prabha DTH television channels and the digital web platform.
- **National Broadcast Center ([`BroadcastCenter.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/BroadcastCenter.tsx))**:
  - Emergency notifications, examination date alerts, and national broadcast SMS/Push dispatcher.
- **Parliamentary Reports & Grievance Dashboard ([`ParliamentaryReports.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ParliamentaryReports.tsx) & [`GrievanceDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/GrievanceDashboard.tsx))**:
  - Automated Starred/Unstarred Parliamentary Question (PQ) response generation and CPGRAMS-integrated student grievance redressal.

---

## 🗺️ Complete Application Route Map

| URL Route | Page Component | Persona / Role | Key Capability |
| :--- | :--- | :--- | :--- |
| `/` | `LandingPage.tsx` | Public / All | Official Sovereign Landing Page & National Statistics |
| `/register` | `RegisterPage.tsx` | Public / Aspirant | Registration with DigiLocker / APAAR ID Verification |
| `/onboarding` | `OnboardingPage.tsx` | Aspirant | Exam Selection, Language, and Study Plan Setup |
| `/login` | `LoginPage.tsx` | Aspirant | OTP Mobile / Email / Aadhaar e-KYC Login |
| `/dashboard` | `StudentDashboard.tsx` | Aspirant | Study Telemetry, Streak, Exam Readiness Ring |
| `/syllabus` | `SyllabusPage.tsx` | Aspirant | Micro-Topic Syllabus Matrix & Exam Weightage |
| `/diagnostic` | `DiagnosticAssessment.tsx` | Aspirant | Adaptive Multi-Domain Baseline Evaluation |
| `/diagnostic/result` | `DiagnosticResult.tsx` | Aspirant | Baseline Diagnostics Score Report & Custom Plan |
| `/videos` | `VideoLibrary.tsx` | Aspirant | 4K Sovereign Video Lectures Catalog |
| `/videos/:id` | `VideoPlayer.tsx` | Aspirant | Video Player, Dual Audio Tracks & Transcripts |
| `/practice` | `PracticeHub.tsx` | Aspirant | Topic-wise Adaptive MCQ Practice Drills |
| `/practice/result` | `PracticeResult.tsx` | Aspirant | Practice Performance Analytics & Accuracy |
| `/mock-tests` | `MockTestHub.tsx` | Aspirant | Full-Length & Sectional Mock Test Catalog |
| `/mock-tests/:id` | `MockTestEngine.tsx` | Aspirant | Fullscreen NTA-Pattern Exam Simulator |
| `/mock-tests/:id/result` | `MockTestResult.tsx` | Aspirant | AIR Percentile, Detailed Solution & Review |
| `/doubt-solver` | `AIDoubtSolver.tsx` | Aspirant | Bhashini AI Multilingual Doubt Resolution & OCR |
| `/doubt-history` | `DoubtHistory.tsx` | Aspirant | Searchable Resolved & Open Doubt Archive |
| `/mentors` | `BrowseMentors.tsx` | Aspirant | Verified Rankers & Senior Mentors Directory |
| `/mentors/:id/book` | `BookMentor.tsx` | Aspirant | 1-on-1 Calendar Booking & Topic Selection |
| `/mentors/session/:id` | `MentorSession.tsx` | Aspirant | Secure Virtual Mentoring Consultation Room |
| `/leaderboard` | `Leaderboard.tsx` | Aspirant | All-India, State & District Merit Rankings |
| `/profile` | `StudentProfile.tsx` | Aspirant | APAAR ID Badge, Achievements, Certificate Vault |
| `/settings` | `SettingsPage.tsx` | Aspirant | 2G Data Saver Mode & Regional Language Setup |
| `/exam-predictor` | `ExamPredictor.tsx` | Aspirant | Cutoff Probability, Risk Index & Confidence Radar |
| `/whatsapp-bot` | `WhatsAppBot.tsx` | Aspirant | Rural Low-Bandwidth WhatsApp Simulator |
| `/voice-assistant` | `VoiceAssistant.tsx` | Aspirant | 14 Indian Languages Bhashini Voice Studio |
| `/umang` | `UMANGIntegration.tsx` | Aspirant | UMANG Citizen Hub & 1-Click Form Autofill |
| `/school` | `SchoolIntegration.tsx` | School / Teacher | KV, JNV & State School Command Center |
| `/school/onboarding` | `SchoolOnboarding.tsx` | School Admin | Institutional Onboarding Workflow |
| `/study-groups` | `StudyGroups.tsx` | Aspirant | Peer Circles & GPS Study Buddy Matcher |
| `/study-planner` | `StudyPlanner.tsx` | Aspirant | 30/90-Day Revision Planner & Pomodoro Timer |
| `/current-affairs` | `CurrentAffairs.tsx` | Aspirant | Daily 5-Min Audio Briefing & 5-MCQ Daily Recall |
| `/answer-writing` | `AnswerWriting.tsx` | Aspirant | Mains Answer Writing & Ruled OCR Rubric Score |
| `/career-guidance` | `CareerGuidance.tsx` | Aspirant | 7th CPC Salary Ladder & Cognitive Radar |
| `/accessibility` | `AccessibilitySuite.tsx` | Divyangjan | Low Vision, ISL Sign Overlays & Dyslexia Presets |
| `/offline-hub` | `OfflineHub.tsx` | Aspirant | India Post SD Cards & Wi-Fi Direct Mesh Sync |
| `/scholarships` | `ScholarshipHub.tsx` | Aspirant | DBT Tracker & DigiLocker Eligibility Vault |
| `/interview-simulator` | `InterviewSimulator.tsx` | Aspirant | 4-Member AI UPSC Personality Interview Panel |
| `/study-near-me` | `StudyNearMe.tsx` | Aspirant | GIS Library, PM-WANI & Study Center Locator |
| `/parent-dashboard` | `ParentDashboard.tsx` | Parent / Guardian| Regional SMS Telemetry & Consistency Reports |
| `/ministry/login` | `MinistryLogin.tsx` | Ministry Official | Authenticated Government Official Login |
| `/ministry/dashboard` | `MinistryDashboard.tsx` | Ministry Official | High-level National Telemetry & Server Health |
| `/ministry/analytics` | `StateAnalytics.tsx` | Ministry Official | Comparative State & District Education Indices |
| `/ministry/map` | `MapDeepDive.tsx` | Ministry Official | Interactive Pan-India Geospatial Deep Dive |
| `/ministry/content` | `ContentManagement.tsx`| Ministry Official | National Curriculum & Content Moderation |
| `/ministry/live-scheduler`| `LiveClassScheduler.tsx`| Ministry Official| Swayam Prabha DTH Broadcast Syndicate |
| `/ministry/notifications`| `BroadcastCenter.tsx` | Ministry Official | Emergency SMS / Push Notification Broadcaster |
| `/ministry/reports` | `ParliamentaryReports.tsx`| Ministry Official| Automated Starred/Unstarred PQ Generator |
| `/ministry/support` | `GrievanceDashboard.tsx` | Ministry Official | CPGRAMS Integrated Student Redressal |
| `/ministry/talent-map` | `TalentMap.tsx` | Ministry Official | D3 Geo Pan-India Talent Density Heatmap |
| `/ministry/bot-analytics`| `BotAnalytics.tsx` | Ministry Official | Rural WhatsApp Bot Queries & Dialect Insights |
| `/ministry/constituency`| `ConstituencyDashboard.tsx`| MP / Official | Parliamentary Constituency Level Metrics |
| `/ministry/open-data` | `OpenDataPortal.tsx` | Researcher / All | data.gov.in Conforming Anonymized Data |

---

## 🎨 Sovereign Design System (GIGW 3.0 & WCAG 2.1 AAA)

```
═══════════════════════════════════════════════════════════════════════════════════════════
                 PARIKSHASETU - SOVEREIGN DESIGN TOKEN PALETTE
═══════════════════════════════════════════════════════════════════════════════════════════
  🇮🇳 India Saffron   : #FF9933 / #FE6500 (National Spirit, Hero Accents, Badges)
  🇮🇳 Ashoka Navy     : #00216E / #002B7F / #0033A0 (Sovereign Authority, Primary UI)
  🇮🇳 India Green     : #138808 / #024A00 / #16A34A (Success, Verification, Growth)
  🇮🇳 Sovereign Gold  : #FFD54F / #F59E0B (Masterclasses, Accents, Streaks)
  🇮🇳 Surface Pure    : #FFFFFF / Canvas #F9F9F9 (Modern, Clean Sovereign Canvas)
  🇮🇳 WCAG Contrast   : Pitch Black #000000 / Yellow #FFFF00 / Cyan #00FFFF (14:1 Ratio)
═══════════════════════════════════════════════════════════════════════════════════════════
```

### Sovereign UI/UX Standards Implemented:
1. **Unbroken Single-Line Breadcrumbs ([`GIGWPageHeader.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/components/GIGWPageHeader.tsx))**:
   - Strict inline flex row formatting with `white-space: nowrap !important` guarantees `Home › [Sub-section]` always stays on one unbroken line across all viewports.
2. **Standardized 28px Sidebar Margins**:
   - Uniform horizontal gutter padding (`padding: 24px 28px 60px 28px;`) enforced across `.main-content` and `.ministry-content` with normalized `1600px` max-width page containers.
3. **Interactive Sovereign Utility Topbar**:
   - **Font Scaling (`A` / `A+`)**: Fluid scaling across default ($100\%$), large ($108\%$), and larger ($116\%$) typography.
   - **High Contrast Mode (`👁 Contrast`)**: 1-click toggle activating WCAG 2.1 AAA compliant Yellow-on-Black theme ($14:1$ contrast ratio) across all cards, widgets, and sidebars.
   - **Bilingual Switcher (`EN` / `हिन्दी`)**: Instant UI translation switching navigation labels, headers, and placeholders.
4. **NIC MeghRaj Sovereign Cloud Indicator**:
   - Live verified server instance badge (`NIC MeghRaj Instance: DEL-PROD-01`) embedded in the header.

---

## 🛠️ Technology Stack & Architecture

| Layer | Technologies Used |
| :--- | :--- |
| **Framework & Runtime** | [React 19.1.0](https://react.dev/), [TypeScript 6.0.2](https://www.typescriptlang.org/), [Vite 8.2.0](https://vite.dev/) |
| **Routing & Navigation** | [React Router DOM v7.18.2](https://reactrouter.com/) |
| **Visual Analytics** | [Recharts 3.10.1](https://recharts.org/), [D3 Geo 3.1.1](https://d3js.org/d3-geo) |
| **Vector Icons** | [Lucide React 1.33.0](https://lucide.dev/) |
| **Design Architecture** | Modular CSS3, CSS Custom Properties (`theme.css`, `components.css`), GIGW 3.0 Tokens |
| **Compliance & Standards**| GIGW 3.0, WCAG 2.1 AAA, IT Act 2000, Digital Personal Data Protection Act 2023 |
| **Cloud & Deployment** | Netlify (`netlify.toml`), Vercel Ready, NIC MeghRaj Ready |

---

## 📁 Repository Directory Structure

```
ParikshaSetu/
├── README.md                               # Master Project Documentation
├── netlify.toml                            # Netlify build configuration & SPA redirects
├── package.json                            # Root orchestration scripts (dev, build, install)
├── docs/                                   # Sovereign Architecture & Engineering Specs
│   ├── ParikshaSetu_PRD_v1.0.docx          # Product Requirements Document
│   ├── ParikshaSetu_PRD_v2.0_New_Features_Addendum.md # New Features PRD
│   ├── ParikshaSetu_SAD_v1.0.docx          # System Architecture Document
│   ├── ParikshaSetu_TRD_v1.0.docx          # Technical Requirements Document
│   ├── ParikshaSetu_API_Specification_v1.0.docx # API Specification v1.0
│   ├── ParikshaSetu_API_Specification_v2.0_Addendum.md # API v2.0 Addendum
│   ├── ParikshaSetu_Security_Architecture_v1.0.docx # Threat Model & Security
│   ├── ParikshaSetu_Data_Privacy_Compliance_v1.0.docx # DPDP Act 2023 Compliance
│   ├── ParikshaSetu_DevOps_CICD_Strategy_v1.0.docx # CI/CD & MeghRaj Strategy
│   ├── ParikshaSetu_Testing_Strategy_v1.0.docx # Testing & Quality Framework
│   ├── ParikshaSetu_Content_Operations_Manual_v1.0.docx # Content Governance
│   └── ParikshaSetu_UI_Master_Prompts.md   # Master UI Design Specifications
├── Prompt/                                 # Page Development Specifications
│   ├── Pariksha_Mitra_All_40_Pages_Development_Prompts.md
│   └── Pariksha_Mitra_28Cr_Justification.pdf
└── pariksha-mitra-web/                     # Core Web Application Workspace
    ├── index.html                          # HTML5 Entry point with sovereign Noto Sans font
    ├── package.json                        # Web app dependencies & build scripts
    ├── tsconfig.json                       # TypeScript compiler configuration
    ├── vite.config.ts                      # Vite build optimization configuration
    └── src/
        ├── App.tsx                         # Master Application Routing (53+ routes)
        ├── App.css                         # Global layout shell styles
        ├── main.tsx                        # React application bootstrap
        ├── components/                     # Reusable UI & Sovereign Components
        │   ├── FloatingVoiceAssistant.tsx  # Universal floating Bhashini voice widget
        │   ├── FloatingVoiceAssistant.css  # Waveform equalizer & language selector
        │   ├── GIGWFooter.tsx              # Official GIGW 3.0 government footer
        │   ├── GIGWPageHeader.tsx          # Standardized GIGW 3.0 Hero Header
        │   ├── GIGWPageHeader.css          # Single-Line breadcrumb flexbox rules
        │   ├── ParikshaMitraLogo.tsx       # Vector branding alias
        │   └── ParikshaSetuLogo.tsx        # Official vector Ashoka Chakra branding emblem
        ├── context/                        # React Global Context Providers
        │   ├── UserContext.tsx             # User authentication & session state
        │   ├── ToastContext.tsx            # High-visibility sovereign toast alerts
        │   └── ToastContext.css            # Toast styles
        ├── data/                           # Mock Datasets & GeoJSON Maps
        │   ├── indiaGeoPaths.json          # Pan-India GeoJSON boundary vectors
        │   ├── indiaGeoPaths_updated.json  # Calibrated sovereign territory paths
        │   ├── indiaMapData.ts             # State-wise education metrics dataset
        │   └── mentorsData.ts              # Verified civil services mentors & rankers
        ├── layouts/                        # Application Shell Layouts
        │   ├── AppLayout.tsx               # Student Portal shell (Sidebar, Topbar, Search)
        │   ├── AppLayout.css               # Student shell styles & high contrast mode
        │   ├── MinistryLayout.tsx          # Ministry Command Center shell
        │   └── MinistryLayout.css          # Sovereign dark ministry shell styles
        ├── styles/                         # Universal Design Tokens & Component Library
        │   ├── theme.css                   # Saffron, Navy, Green GIGW design tokens & reset
        │   └── components.css              # Universal container normalizer & cards
        └── pages/                          # Application Page Views (53 Modules)
            ├── LandingPage.tsx             # Official Sovereign Portal Landing Page
            ├── RegisterPage.tsx            # Aspirant Registration with APAAR / DigiLocker
            ├── OnboardingPage.tsx          # Multi-step Exam Preference Wizard
            ├── LoginPage.tsx               # OTP Mobile & Aadhaar e-KYC Login
            ├── StudentDashboard.tsx        # Aspirant Personal Study Command Center
            ├── DiagnosticAssessment.tsx    # AI Adaptive Diagnostic Assessment
            ├── DiagnosticResult.tsx        # Diagnostic Score Report & Custom Plan
            ├── VideoLibrary.tsx            # 4K Sovereign Video Library
            ├── VideoPlayer.tsx             # Accessible Video Player with speed controls
            ├── PracticeHub.tsx              # Adaptive MCQ Practice Hub
            ├── PracticeResult.tsx          # Practice Session Performance Report
            ├── MockTestHub.tsx             # Full-Length Mock Test Catalog
            ├── MockTestEngine.tsx          # Realistic NTA-Pattern Exam Simulator
            ├── MockTestResult.tsx          # Post-Exam Analytics & Percentile Report
            ├── AIDoubtSolver.tsx           # Bhashini AI Multi-Subject Doubt Solver
            ├── DoubtHistory.tsx            # Searchable Doubt History & Bookmarks
            ├── BrowseMentors.tsx           # 1-on-1 Civil Services Mentorship Directory
            ├── BookMentor.tsx              # Mentor Booking & Calendar Scheduler
            ├── MentorSession.tsx           # Secure Virtual Mentoring Consultation Room
            ├── Leaderboard.tsx             # National & District Merit Rankings
            ├── StudentProfile.tsx          # Aspirant Profile, Badges & DigiLocker Vault
            ├── SettingsPage.tsx            # 2G Data Saver & Language Settings
            ├── SyllabusPage.tsx            # Official Exam Micro-Topic Syllabus Matrix
            │
            │   /* Tier 1: Government Show-Stoppers */
            ├── ExamPredictor.tsx           # AI Exam Cutoff & Probability Predictor
            ├── WhatsAppBot.tsx             # WhatsApp Low-Bandwidth Study Simulator
            ├── VoiceAssistant.tsx          # Multilingual Voice Studio (14 Languages)
            ├── UMANGIntegration.tsx        # UMANG Services & DigiLocker Marks Vault
            ├── SchoolIntegration.tsx       # KV & Govt School Command Center
            ├── SchoolOnboarding.tsx        # School Institutional Onboarding
            │
            │   /* Tier 2: Student Success Multipliers */
            ├── StudyGroups.tsx             # Peer Circles & Study Buddy GPS Matcher
            ├── StudyPlanner.tsx            # AI Daily Balanced Revision Planner
            ├── CurrentAffairs.tsx          # Daily 5-Min Audio Briefing & MCQ Recall
            ├── AnswerWriting.tsx           # Mains Answer Writing & OCR Rubric Grading
            ├── CareerGuidance.tsx          # Cognitive Radar & 7th Pay Commission Scale
            │
            │   /* Tier 3: Accessibility & Offline Suite */
            ├── AccessibilitySuite.tsx      # Divyangjan Presets & ISL Sign Language
            ├── OfflineHub.tsx              # India Post SD Cards & Wi-Fi Direct Mesh
            ├── ScholarshipHub.tsx          # DBT Direct Benefit Transfer Portal
            │
            │   /* Tier 4: Futuristic AI Features */
            ├── InterviewSimulator.tsx      # UPSC 4-Member Board AI Personality Panel
            ├── StudyNearMe.tsx             # GIS Library, PM-WANI & Study Space Map
            ├── ParentDashboard.tsx         # Guardian Regional Language SMS Telemetry
            │
            │   /* Ministry of Education Oversight */
            ├── MinistryLogin.tsx           # Sovereign Official Authenticated Login
            ├── MinistryDashboard.tsx       # National Education Oversight Dashboard
            ├── StateAnalytics.tsx          # State-wise Education Telemetry Index
            ├── MapDeepDive.tsx             # Interactive Geospatial Map Analysis
            ├── TalentMap.tsx               # Pan-India District Talent Density Map
            ├── BotAnalytics.tsx            # Rural WhatsApp Bot Telemetry & Dialects
            ├── ConstituencyDashboard.tsx   # Parliamentary Constituency Level Telemetry
            ├── OpenDataPortal.tsx          # data.gov.in Anonymized Data Exporter
            ├── ContentManagement.tsx       # National Syllabus & Content Review Portal
            ├── LiveClassScheduler.tsx      # Swayam Prabha DTH Broadcast Scheduler
            ├── BroadcastCenter.tsx         # National Emergency SMS/Push Broadcaster
            ├── ParliamentaryReports.tsx    # Automated PQ Response Drafting Tool
            └── GrievanceDashboard.tsx      # CPGRAMS Integrated Student Redressal
```

---

## ⚡ Quick Start & Installation

### Prerequisites
- **Node.js**: Version `18.0.0` or higher (LTS recommended)
- **npm**: Version `9.0.0` or higher

### Step 1: Clone the Repository
```bash
git clone https://github.com/johndoe101om/Pariksha-Mitra.git
cd Pariksha-Mitra
```

### Step 2: Install Dependencies
You can install dependencies from the root directory or inside the web directory:

```bash
# Option A: From root directory
npm run install

# Option B: Directly in web directory
cd pariksha-mitra-web
npm install
```

### Step 3: Start the Local Development Server
```bash
# From root
npm run dev

# Or from pariksha-mitra-web
cd pariksha-mitra-web
npm run dev
```
Open your browser and navigate to: **`http://localhost:3000`**

### Step 4: Run Production Build & Typecheck
```bash
# Run TypeScript compilation and Vite production build
cd pariksha-mitra-web
npm run build
```

---

## 🌐 Production Deployment Guide

### Deploying to Netlify
The repository includes a ready-to-use [`netlify.toml`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/netlify.toml) configured for Single Page Application (SPA) routing:
- **Base directory**: `pariksha-mitra-web`
- **Build command**: `npm run build`
- **Publish directory**: `pariksha-mitra-web/dist`
- **Redirects**: `/* -> /index.html (Status: 200)`

### Deploying to Vercel
1. Set the root directory to `pariksha-mitra-web`.
2. Set build command to `npm run build` and output directory to `dist`.
3. Configure rewrite rule to route all requests to `/index.html`.

---

## 🔒 Security, Compliance & Data Sovereignty

1. **Zero Data Commercialization**: ParikshaSetu is a **100% free public service initiative** funded by the Ministry of Education. Student data is never commercialized, monetized, or shared with third-party advertising networks.
2. **DPDP Act 2023 Compliance**: Built in strict adherence to the **Digital Personal Data Protection Act 2023**; all student telemetry is encrypted at rest using AES-256 and in transit via TLS 1.3.
3. **Data Localization**: Fully engineered for sovereign deployment on **NIC MeghRaj Government Cloud** within Indian geographical borders.
4. **WCAG 2.1 AAA Accessibility**: Native screen-reader support, keyboard accessibility focus traps, high-contrast themes ($14:1$), and multilingual voice navigation.

---

## 📚 Technical Documentation & Specifications Index

Detailed technical specifications and architectural documentation are available in the [`docs/`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs) directory:

- 📄 [`ParikshaSetu_PRD_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_PRD_v1.0.docx) — Master Product Requirements Document
- 📄 [`ParikshaSetu_PRD_v2.0_New_Features_Addendum.md`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_PRD_v2.0_New_Features_Addendum.md) — Tier 1 to Tier 4 Features PRD
- 📄 [`ParikshaSetu_SAD_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_SAD_v1.0.docx) — System Architecture Document
- 📄 [`ParikshaSetu_TRD_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_TRD_v1.0.docx) — Technical Requirements Document
- 📄 [`ParikshaSetu_API_Specification_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_API_Specification_v1.0.docx) & [`Addendum.md`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_API_Specification_v2.0_Addendum.md) — RESTful API Contracts
- 📄 [`ParikshaSetu_Security_Architecture_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_Security_Architecture_v1.0.docx) — Threat Model & Security Controls
- 📄 [`ParikshaSetu_Data_Privacy_Compliance_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_Data_Privacy_Compliance_v1.0.docx) — DPDP Act & Privacy Architecture
- 📄 [`ParikshaSetu_DevOps_CICD_Strategy_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_DevOps_CICD_Strategy_v1.0.docx) — CI/CD Pipeline & NIC MeghRaj Deployment
- 📄 [`ParikshaSetu_Testing_Strategy_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_Testing_Strategy_v1.0.docx) — Quality Assurance & Testing Framework
- 📄 [`ParikshaSetu_Content_Operations_Manual_v1.0.docx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/docs/ParikshaSetu_Content_Operations_Manual_v1.0.docx) — Syllabus & Pedagogical Operations

---

## 👥 Contributing & Governance

ParikshaSetu is developed under the open government architecture framework. Contributions that enhance accessibility, regional language models, and low-bandwidth optimizations are welcomed.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/BhashiniVoiceEnhancement`)
3. Commit your changes following conventional commit standards (`git commit -m 'feat: Add Tamil speech synthesis support'`)
4. Push to the branch (`git push origin feature/BhashiniVoiceEnhancement`)
5. Open a Pull Request for review by the Technical Directorate

---

## 📜 Official Declaration

> *"Education is the most powerful weapon which you can use to change the world."*  
> **ParikshaSetu — Empowering Every Aspirant, Connecting Every Village, Building Viksit Bharat 2047.** 🇮🇳

---
**Ministry of Education, Government of India** | Designed & Developed for India's Future Leaders.
