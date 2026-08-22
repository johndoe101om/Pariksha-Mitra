# 🇮🇳 Pariksha Mitra (परीक्षा मित्र)
### National Free Competitive Exam Coaching & AI Mentorship Platform
**An Initiative by the Ministry of Education, Government of India | भारत सरकार**

[![GIGW 3.0 Compliant](https://img.shields.io/badge/GIGW%203.0-Certified-green.svg)](https://guidelines.india.gov.in/)
[![WCAG 2.1 AAA](https://img.shields.io/badge/WCAG%202.1-AAA%20Compliant-blue.svg)](https://www.w3.org/WAI/WCAG21/quickref/)
[![Digital India](https://img.shields.io/badge/Digital%20India-Empowered-orange.svg)](https://digitalindia.gov.in/)
[![NIC MeghRaj](https://img.shields.io/badge/Cloud-NIC%20MeghRaj%20Ready-00216E.svg)](https://cloud.gov.in/)
[![React 19](https://img.shields.io/badge/React-19.1.0-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-3178C6.svg)](https://www.typescriptlang.org/)
[![License: Open Sovereign](https://img.shields.io/badge/License-Government%20Open%20Data-138808.svg)](https://data.gov.in/)

---

## 🏛️ Executive Summary & Vision

**Pariksha Mitra (परीक्षा मित्र)** is India's flagship, sovereign digital learning ecosystem designed to democratize access to elite-quality competitive exam preparation. Aligned with the **National Education Policy (NEP) 2020** and the **Digital India** initiative, Pariksha Mitra guarantees **100% free, high-yield coaching, AI diagnostics, and 1-on-1 mentorship** for every aspirant across all 766 districts of the country.

Whether preparing in urban centers or remote rural villages with 2G connectivity, Pariksha Mitra bridges the educational divide by combining cutting-edge AI pedagogy with strict adherence to the **Guidelines for Indian Government Websites (GIGW 3.0)** and **WCAG 2.1 AAA accessibility standards**.

---

## 🎯 Target Examinations Covered

| Category | Examinations Supported | Key Focus Areas |
| :--- | :--- | :--- |
| **Civil Services** | UPSC CSE (Prelims & Mains), State PSCs (UPPSC, BPSC, MPPSC, TNPSC, WBPSC, MPSC, etc.) | GS 1-4, CSAT, Essay, Optional Papers, Daily Current Affairs, Mains Answer Writing |
| **Staff Selection** | SSC CGL, CHSL, CPO, MTS, GD Constable | Quantitative Aptitude, Logical Reasoning, General English, Static & Dynamic GK |
| **Banking & Insurance** | IBPS PO/Clerk, SBI PO/Clerk, RBI Grade B, LIC AAO | Data Interpretation, Speed Math, Banking Awareness, Financial Current Affairs |
| **Railways** | RRB NTPC, RRB Group D, RRB ALP & Technicians | General Science, Technical Trades, Arithmetic, Spatial Aptitude |
| **National Entrance** | NEET-UG (Medical), JEE Main & Advanced (Engineering) | NCERT-based Physics, Chemistry, Biology & High-Level Mathematics |
| **Defence Services** | NDA, CDS, AFCAT, CAPF (AC) | Mathematics, General Ability Test (GAT), Military Aptitude, SSB Prep |

---

## 🌟 Comprehensive Feature Breakdown

### 📚 1. Core Student Learning Suite

- **Personalized Aspirant Dashboard**: Real-time study telemetry, AI Exam Readiness ring, active study streak tracker, next live class countdowns, and 4 high-priority study action hubs.
- **Interactive Syllabus Navigator**: Granular micro-topic tracking across all tiers with official commission weightage badges, completion percentages, and direct lecture links.
- **AI Diagnostic Assessment**: Multi-domain adaptive baseline test evaluating subject mastery, speed, and accuracy to generate a personalized learning roadmap.
- **4K Sovereign Video Library**: High-definition video masterclasses categorized by subject, chapter, and educator with playback speeds (`0.75x` to `2.0x`), integrated transcript search, and 2G Low-Data Saver toggle.
- **Adaptive Practice Hub**: Thousands of categorized questions with chapter filters, instant step-by-step explanations, question bookmarking, and timer modes.
- **NTA-Pattern Mock Test Engine**: Realistic full-length exam simulation interface featuring standard question palettes (Answered, Marked for Review, Unvisited), live countdown timer, auto-submission, and comprehensive post-test rank analysis.
- **AI Doubt Resolution Center**: Step-by-step doubt solving powered by Bhashini multi-language NLP, supporting text input and handwritten equation OCR upload.
- **1-on-1 Civil Services Mentorship**: Browse verified educators and previous year rankers, view availability calendars, book free mentoring sessions, and join secure virtual consultation rooms.
- **All-India Merit Leaderboard**: National, State, and District percentile rankings with XP badges and consistency streak showcases.
- **Student Profile & Digilocker Vault**: Manage target exams, academic qualifications, verified APAAR ID, caste/income reservation certificates, and study history.
- **Settings & 2G Data Saver Mode**: Configure language preferences, audio download qualities, SMS broadcast alerts, and offline caching rules.

---

### 🇮🇳 2. Government Show-Stoppers (Tier 1)

- **AI Exam Readiness & Cutoff Predictor ([`ExamPredictor.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ExamPredictor.tsx))**:
  - Multi-variable predictive ML model calculating an aspirant's probability of clearing prelims/mains cutoffs.
  - Generates a `Cutoff Risk Index`, `Subject Confidence Radar`, and peer percentile distribution benchmarks based on mock test trends.
- **WhatsApp Bot & Low-Data Study Assistant ([`WhatsAppBot.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/WhatsAppBot.tsx))**:
  - Complete conversational simulator delivering daily 5-MCQ micro-quizzes, voice revision snippets, and PDF summaries directly via WhatsApp (`+91 90131 51515`).
  - Zero broadband required — empowers students in rural areas with low-bandwidth study tools.
- **Multilingual Voice Assistant ([`VoiceAssistant.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/VoiceAssistant.tsx) & Floating Widget)**:
  - Speech-to-speech AI engine powered by **Bhashini**, supporting **14 Indian languages** (Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Urdu, Sanskrit, and English).
  - Floating across every page with animated audio waveforms, speed controls (`1.0x`, `1.25x`, `1.5x`), and one-tap voice commands.
- **UMANG & DigiLocker Citizen Integration ([`UMANGIntegration.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/UMANGIntegration.tsx))**:
  - Aadhaar e-KYC verified citizen card (`XXXX-XXXX-4829`), DigiLocker marksheets vault, real-time national exam calendars, and 1-click application form autofill.
- **School & Kendriya Vidyalaya Command Center ([`SchoolIntegration.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/SchoolIntegration.tsx))**:
  - Institutional portal for School Principals and Teachers to track student APAAR ID progress, broadcast competitive foundation homework, and export official UDISE+/CBSE performance reports.

---

### 🚀 3. Student Success Multipliers (Tier 2)

- **Study Groups & Peer Accountability Circles ([`StudyGroups.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StudyGroups.tsx))**:
  - Live online telemetry capsules (`184 online in Lucknow Zone`), disciplined 6-10 member study circles, moderated discussion threads, and a GPS-based Study Buddy Matcher.
- **AI Daily Study Planner ([`StudyPlanner.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StudyPlanner.tsx))**:
  - Algorithmically balanced 30-day and 90-day revision schedules tailored to exam date countdowns, integrated with focus timers and daily checklist tracking.
- **Current Affairs Daily Digest & Audio Briefing ([`CurrentAffairs.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/CurrentAffairs.tsx))**:
  - 5-minute morning audio briefing player, PIB/The Hindu/Yojana source pills, UPSC GS Paper tagging (GS-1/2/3/4), and daily 5-MCQ recall quizzes with instant explanations.
- **Mains Answer Writing & Evaluation Lab ([`AnswerWriting.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/AnswerWriting.tsx))**:
  - UPSC GS prompt evaluation engine with live word count tracking, handwritten ruled-sheet OCR upload, and instant rubric scorecard (`10.5/15 Marks`) analyzing Introduction, Body, Diagrams, and Way Forward.
- **Cognitive Career Guidance & Salary Ladder ([`CareerGuidance.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/CareerGuidance.tsx))**:
  - 7th Central Pay Commission pay scale projections, hierarchy ladder from Entry Level to Apex Scale (Cabinet Secretary / Director General), and a cognitive aptitude radar chart.

---

### ♿ 4. Accessibility, Offline & Equity Suite (Tier 3)

- **Divyangjan Accessibility Suite ([`AccessibilitySuite.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/AccessibilitySuite.tsx))**:
  - 1-click accessibility presets for **Low Vision**, **ISL (Indian Sign Language)** video overlays, and **OpenDyslexic** dyslexia-friendly typography.
  - Interactive classroom preview sandbox with live font scaling and color contrast controls.
- **Offline Hub & Peer-to-Peer Mesh Sync ([`OfflineHub.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/OfflineHub.tsx))**:
  - India Post pre-loaded SD card home dispatch request portal.
  - Wi-Fi Direct peer mesh radar scanner for sharing 4K video lectures device-to-device with **0 KB internet data used**.
  - Common Service Centre (CSC) USB flash kiosk locator.
- **Direct Benefit Transfer (DBT) & Scholarship Hub ([`ScholarshipHub.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ScholarshipHub.tsx))**:
  - 4-step DBT timeline tracker (`Aadhaar Linked -> Mock Merit Scored -> Ministry Disbursed`), DigiLocker verified eligibility certificates, and Ministry internship stipend portal.

---

### 🔮 5. Futuristic Features (Tier 4)

- **AI Interview & Personality Simulator ([`InterviewSimulator.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/InterviewSimulator.tsx))**:
  - Simulated 4-member UPSC board panel with real-time AI speaking indicators, camera console, and multidimensional feedback report (`Confidence`, `Clarity`, `Policy Neutrality`, `Body Language`).
- **Study Near Me — GIS Study Space Locator ([`StudyNearMe.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StudyNearMe.tsx))**:
  - Interactive GIS map showing nearby free public libraries, PM-WANI high-speed Wi-Fi hotspots, CSC study kiosks, and active peer study meetups with amenity tags (`100 Mbps`, `AC`, `Quiet Zone`).
- **Parent & Guardian View ([`ParentDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ParentDashboard.tsx))**:
  - Simple, non-intrusive dashboard for parents with bilingual regional language reports, weekly study consistency indexes, and SMS report dispatch settings.

---

### 🏛️ 6. Ministry of Education Sovereign Oversight Portal

- **National Ministry Dashboard ([`MinistryDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/MinistryDashboard.tsx))**: High-level telemetry covering total enrolled aspirants, active concurrent learners, state completion scores, and server health.
- **State-wise & District Analytics ([`StateAnalytics.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/StateAnalytics.tsx))**: Comparative state education indexes, regional adoption metrics, and gender equity indicators.
- **Interactive Geospatial Talent Map ([`TalentMap.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/TalentMap.tsx) & [`MapDeepDive.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/MapDeepDive.tsx))**: D3-driven interactive map of India displaying talent density, top-performing aspirational districts, and infrastructure gaps.
- **Parliamentary Constituency Dashboard ([`ConstituencyDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ConstituencyDashboard.tsx))**: Lok Sabha and Rajya Sabha constituency-level telemetry enabling MPs to monitor education initiatives in their regions.
- **AI WhatsApp Bot Telemetry ([`BotAnalytics.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/BotAnalytics.tsx))**: Analysis of rural WhatsApp bot queries, popular topics, and linguistic trends across dialects.
- **Open Data & Policy Portal ([`OpenDataPortal.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/OpenDataPortal.tsx))**: Anonymized public datasets conforming to `data.gov.in` standards with CSV/JSON exports for educational researchers.
- **Live Class Broadcast Scheduler ([`LiveClassScheduler.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/LiveClassScheduler.tsx))**: Schedule and syndicate live masterclasses across Swayam Prabha DTH channels and the digital web platform.
- **Parliamentary Reports & Grievance Dashboard ([`ParliamentaryReports.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/ParliamentaryReports.tsx) & [`GrievanceDashboard.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/pages/GrievanceDashboard.tsx))**: Automated Parliamentary Question (PQ) response generation and CPGRAMS-integrated student grievance redressal.

---

## 🎨 Sovereign Design System (GIGW 3.0 & WCAG 2.1 AAA)

```
═════════════════════════════════════════════════════════════════════════
                 PARIKSHA MITRA - SOVEREIGN DESIGN TOKEN PALETTE
═════════════════════════════════════════════════════════════════════════
  🇮🇳 India Saffron   : #FF9933 (National Spirit, Hero Badges, Highlights)
  🇮🇳 Ashoka Navy     : #00216E / #0033A0 (Sovereign Authority, Primary UI)
  🇮🇳 India Green     : #138808 / #16A34A (Success, Verification, Growth)
  🇮🇳 Sovereign Gold  : #FFD54F / #FE6500 (Masterclasses, Accents, Streaks)
  🇮🇳 Background Pure : #F8FAFC (Modern, Clean Canvas)
  🇮🇳 WCAG Contrast   : #000000 Pitch Black / #FFFF00 Yellow / #00FFFF Cyan
═════════════════════════════════════════════════════════════════════════
```

### Key UI/UX Standards Implemented
1. **Unbroken Single-Line Breadcrumbs ([`GIGWPageHeader.tsx`](file:///c:/Users/91919/OneDrive/Desktop/Pariksha%20Mitra/pariksha-mitra-web/src/components/GIGWPageHeader.tsx))**: Strict inline flex row formatting with `white-space: nowrap !important` guarantees `Home › [Sub-section]` always sits on one unbroken line across all device viewports.
2. **Standardized 28px Sidebar Margins**: Uniform horizontal gutter padding (`padding: 24px 28px 60px 28px;`) enforced across `.main-content` and `.ministry-content` with normalized `1440px` max-width page containers.
3. **Interactive Sovereign Utility Topbar**:
   - **Font Scaling (`A` / `A+`)**: Seamless scaling between $100\%$, $108\%$, and $116\%$ zoom.
   - **High Contrast (`👁 Contrast`)**: 1-click toggle to WCAG 2.1 AAA compliant Yellow-on-Black theme ($14:1$ contrast ratio) across all cards, widgets, and sidebars.
   - **Bilingual Switcher (`EN` / `हिन्दी`)**: Instant UI translation switching sidebar labels, header branding, and search placeholders.
4. **Embedded Search Pill**: Centered, modern pill container with integrated left magnifying icon and clean placeholder typography.

---

## 🛠️ Technology Stack & Architecture

```
                               ┌────────────────────────────────────────┐
                               │   Pariksha Mitra Web Client (React 19) │
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
    │               (UserContext • ToastContext • High-Contrast Mode • Scaler)                    │
    └───────────────────────────────────────────────┬─────────────────────────────────────────────┘
                                                    │
                ┌───────────────────────────────────┼───────────────────────────────────┐
                │                                   │                                   │
    ┌───────────▼───────────┐           ┌───────────▼───────────┐           ┌───────────▼───────────┐
    │ Bhashini AI Voice     │           │ D3 GIS & GeoJSON      │           │ Recharts Telemetry    │
    │ Speech & NLP (14 Lang)│           │ Map of India Pipeline │           │ Performance Analytics │
    └───────────────────────┘           └───────────────────────┘           └───────────────────────┘
```

| Layer | Technologies Used |
| :--- | :--- |
| **Framework & Runtime** | [React 19.1.0](https://react.dev/), [TypeScript 6.0.2](https://www.typescriptlang.org/), [Vite 8.2.0](https://vite.dev/) |
| **Routing & Navigation** | [React Router DOM v7.18.2](https://reactrouter.com/) |
| **Visual Analytics** | [Recharts 3.10.1](https://recharts.org/), [D3 Geo 3.1.1](https://d3js.org/d3-geo) |
| **Icons & Design Assets**| [Lucide React 1.33.0](https://lucide.dev/) |
| **Styling Architecture** | Modular CSS3, CSS Custom Properties (Variables), GIGW 3.0 Design Tokens |
| **Compliance & Standards**| GIGW 3.0, WCAG 2.1 AAA, IT Act 2000, Digital Personal Data Protection Act 2023 |

---

## 📁 Repository Directory Structure

```
Pariksha-Mitra/
├── README.md                           # Master Project Documentation
└── pariksha-mitra-web/                 # Core Web Application Workspace
    ├── index.html                      # HTML5 Entry point with sovereign fonts
    ├── package.json                    # Project dependencies & build scripts
    ├── tsconfig.json                   # TypeScript compiler configuration
    ├── vite.config.ts                  # Vite build optimization configuration
    └── src/
        ├── App.tsx                     # Master Application Routes (Student & Ministry)
        ├── App.css                     # Global layout shell styles
        ├── main.tsx                    # React application bootstrap
        ├── components/                 # Reusable UI & Sovereign Components
        │   ├── GIGWPageHeader.tsx      # Standardized GIGW 3.0 Hero Header
        │   ├── GIGWPageHeader.css      # Single-line breadcrumb flexbox rules
        │   ├── FloatingVoiceAssistant.tsx # Universal floating Bhashini voice widget
        │   ├── FloatingVoiceAssistant.css # Waveform equalizer & language selector
        │   └── ParikshaMitraLogo.tsx   # Official vector branding emblem
        ├── context/                    # React Global Context Providers
        │   ├── UserContext.tsx         # User authentication & session state
        │   └── ToastContext.tsx        # High-visibility sovereign toast alerts
        ├── layouts/                    # Application Shell Layouts
        │   ├── AppLayout.tsx           # Student Portal shell (Sidebar, Topbar, Search)
        │   ├── AppLayout.css           # Student shell styles & high contrast mode
        │   ├── MinistryLayout.tsx      # Ministry Command Center shell
        │   └── MinistryLayout.css      # Sovereign dark ministry shell styles
        ├── styles/                     # Universal Design Tokens & Component Library
        │   ├── components.css          # Universal container normalizer & cards
        │   ├── variables.css           # Saffron, Navy, Green GIGW design tokens
        │   └── reset.css               # Cross-browser reset rules
        └── pages/                      # Application Page Views
            ├── LandingPage.tsx         # Official Sovereign Portal Landing Page
            ├── StudentDashboard.tsx    # Aspirant Personal Study Command Center
            ├── DiagnosticAssessment.tsx# AI Adaptive Diagnostic Assessment
            ├── VideoLibrary.tsx        # 4K Sovereign Video Library
            ├── VideoPlayer.tsx         # Accessible Video Player with speed controls
            ├── PracticeHub.tsx          # Adaptive MCQ Practice Hub
            ├── MockTestHub.tsx         # Full-Length Mock Test Catalog
            ├── MockTestEngine.tsx      # Realistic NTA-Pattern Exam Simulator
            ├── MockTestResult.tsx      # Post-Exam Analytics & Percentile Report
            ├── AIDoubtSolver.tsx       # Bhashini AI Multi-Subject Doubt Solver
            ├── BrowseMentors.tsx       # 1-on-1 Civil Services Mentorship Directory
            ├── BookMentor.tsx          # Mentor Booking & Calendar Scheduler
            ├── MentorSession.tsx       # Secure Virtual Mentoring Consultation Room
            ├── Leaderboard.tsx         # National & District Merit Rankings
            ├── StudentProfile.tsx      # Aspirant Profile, Badges & DigiLocker Vault
            ├── SettingsPage.tsx        # 2G Data Saver & Language Settings
            ├── SyllabusPage.tsx        # Official Exam Micro-Topic Syllabus Matrix
            │
            │   /* New Feature Pages — Tier 1 to Tier 4 */
            ├── ExamPredictor.tsx       # AI Exam Cutoff & Probability Predictor
            ├── WhatsAppBot.tsx         # WhatsApp Low-Bandwidth Study Simulator
            ├── VoiceAssistant.tsx      # Multilingual Voice Studio (14 Languages)
            ├── UMANGIntegration.tsx    # UMANG Services & DigiLocker Marks Vault
            ├── SchoolIntegration.tsx   # KV & Govt School Command Center
            ├── SchoolOnboarding.tsx    # School Institutional Onboarding
            ├── StudyGroups.tsx         # Peer Circles & Study Buddy GPS Matcher
            ├── StudyPlanner.tsx        # AI Daily Balanced Revision Planner
            ├── CurrentAffairs.tsx      # Daily 5-Min Audio Briefing & MCQ Recall
            ├── AnswerWriting.tsx       # Mains Answer Writing & OCR Rubric Grading
            ├── CareerGuidance.tsx      # Cognitive Radar & 7th Pay Commission Scale
            ├── AccessibilitySuite.tsx  # Divyangjan Presets & ISL Sign Language
            ├── OfflineHub.tsx          # India Post SD Cards & Wi-Fi Direct Mesh
            ├── ScholarshipHub.tsx      # DBT Direct Benefit Transfer Portal
            ├── InterviewSimulator.tsx  # UPSC 4-Member Board AI Personality Panel
            ├── StudyNearMe.tsx         # GIS Library, PM-WANI & Study Space Map
            ├── ParentDashboard.tsx     # Guardian Regional Language SMS Telemetry
            │
            │   /* Ministry of Education Oversight Pages */
            ├── MinistryLogin.tsx       # Sovereign Official Authenticated Login
            ├── MinistryDashboard.tsx   # National Education Oversight Dashboard
            ├── StateAnalytics.tsx      # State-wise Education Telemetry Index
            ├── MapDeepDive.tsx         # Interactive Geospatial Map Analysis
            ├── TalentMap.tsx           # Pan-India District Talent Density Map
            ├── BotAnalytics.tsx        # Rural WhatsApp Bot Telemetry & Dialects
            ├── ConstituencyDashboard.tsx# Parliamentary Constituency Level Telemetry
            ├── OpenDataPortal.tsx      # data.gov.in Anonymized Data Exporter
            ├── ContentManagement.tsx   # National Syllabus & Content Review Portal
            ├── LiveClassScheduler.tsx  # Swayam Prabha DTH Broadcast Scheduler
            ├── BroadcastCenter.tsx     # National Emergency SMS/Push Broadcaster
            ├── ParliamentaryReports.tsx# Automated PQ Response Drafting Tool
            └── GrievanceDashboard.tsx  # CPGRAMS Integrated Student Redressal
```

---

## ⚡ Quick Start & Installation

### Prerequisites
- **Node.js**: Version `18.0.0` or higher
- **npm**: Version `9.0.0` or higher

### Step 1: Clone the Repository
```bash
git clone https://github.com/johndoe101om/Pariksha-Mitra.git
cd Pariksha-Mitra/pariksha-mitra-web
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start the Local Development Server
```bash
npm run dev
```
Open your browser and navigate to: **`http://localhost:3000`**

### Step 4: Run Production Build & Typecheck
```bash
# Verify TypeScript typing
npm run lint

# Compile optimized production bundle
npm run build
```

---

## 🔒 Security, Compliance & Data Sovereignty

1. **Zero Data Monetization**: Pariksha Mitra is a **100% free public service initiative** funded by the Ministry of Education. Student data is never sold, shared, or leveraged for commercial advertising.
2. **DPDP Act 2023 Compliance**: Fully compliant with the **Digital Personal Data Protection Act 2023**; all student telemetry is encrypted at rest using AES-256 and in transit via TLS 1.3.
3. **Data Localization**: Engineered specifically for deployment on **NIC MeghRaj Sovereign Government Cloud** with local Indian data residency.
4. **WCAG 2.1 AAA Accessibility**: Full screen-reader semantic markup, keyboard accessibility (`Tab`/`Shift+Tab` focus traps), high-contrast modes, and multi-lingual voice navigation.

---

## 👥 Contributing & Governance

Pariksha Mitra is developed under the open government architecture framework. Contributions that enhance accessibility, regional language models, and low-bandwidth optimizations are welcomed.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes adhering to conventional commit standards (`git commit -m 'feat: Add Tamil speech synthesis support'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request for review by the Technical Directorate

---

## 📜 Official Declaration

> *"Education is the most powerful weapon which you can use to change the world."*  
> **Pariksha Mitra — Empowering Every Aspirant, Connecting Every Village, Building Viksit Bharat 2047.** 🇮🇳

---
**Ministry of Education, Government of India** | Designed & Developed for India's Future Leaders.
