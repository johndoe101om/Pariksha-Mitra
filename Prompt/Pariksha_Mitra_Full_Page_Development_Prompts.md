# PARIKSHA MITRA
## Complete Page-by-Page Development Prompt Document
### National Free Competitive Exam Coaching Platform
**Version:** 1.0  
**Date:** August 2026  
**Classification:** Confidential – For Internal Development & Government Submission  
**Prepared for:** Product, Design, Engineering & Ministry Review Teams

---

## 1. Master Prompt (Global Context for All Pages)

Use this master prompt as the **system-level context** for every page development task (whether using AI code generation, design tools, or human developers).

```
You are building pages for “Pariksha Mitra” – a national free competitive exam coaching platform of the Ministry of Education, Government of India.

Core principles that MUST be followed on every page:
- Free for all students
- Works on low-end Android phones (₹4,000, 512MB RAM)
- Supports 2G networks and offline mode
- Fully vernacular (Hindi + English + 12–15 Indian languages)
- Aadhaar-based authentication
- Data residency only on NIC MeghRaj (India Cloud)
- CERT-In, DPDP Act 2023 and NeSDA compliant
- Accessible, simple UI, high contrast, large touch targets
- No dark patterns, no upselling, no premium locks
- Government branding (clean, trustworthy, national look)
- Performance first: fast load even on slow networks
- Inclusive: support for feature phones via SMS and DD Free Dish TV

Target users:
1. Students (aspirants of SSC, Banking, Railway, UPSC, NEET, JEE, State PSCs)
2. Ministry of Education / Government administrators

Always design for mobile-first, then adapt to web/PWA and large screens.
```

---

## 2. Student / User-Facing Pages – Detailed Development Prompts

### Page 01: Landing / Splash & Onboarding
**Prompt:**
```
Design and develop the Landing + Onboarding flow for Pariksha Mitra.

Requirements:
- Clean government-style splash screen with Pariksha Mitra logo, tagline “Every Student’s Personal AI Coaching Partner”, and Ministry of Education branding.
- 3–4 simple onboarding screens explaining: Free forever, AI Personal Tutor, Live Classes, Works offline & on low-end phones.
- Language selection screen (Hindi, English + major Indian languages).
- Clear CTA: “Start Free Learning” leading to Aadhaar login.
- Extremely lightweight (under 300KB first load).
- Support for both Android app and PWA.
```

### Page 02: Registration / Login (Aadhaar OTP)
**Prompt:**
```
Build a secure Aadhaar-based authentication screen.

Requirements:
- Aadhaar number input + OTP verification via UIDAI.
- Fallback options if needed (mobile number linked to Aadhaar).
- Clear privacy notice: “Your data stays in India on NIC servers. We never share personal data.”
- After successful login, auto-create student profile and redirect to Diagnostic Assessment (first-time users) or Dashboard (returning users).
- Fully compliant with Aadhaar Act and DPDP Act.
- Works on slow networks; show clear loading and error states.
```

### Page 03: Diagnostic Assessment (Day-1 Test)
**Prompt:**
```
Create the 20-question AI Diagnostic Assessment page.

Requirements:
- Adaptive 20-question test that maps student’s strengths and weaknesses across subjects.
- Clean question UI with large fonts, progress bar, timer (optional), and “Skip / Next”.
- Support for both text and image-based questions.
- Instant feedback after submission: “Your Weakness Map” + auto-generated 30-day personalised study plan.
- Save results to student profile and feed into AI Tutor.
- Mobile-first, offline-capable (can start offline and sync later).
```

### Page 04: Student Home / Dashboard
**Prompt:**
```
Build the main Student Dashboard.

Requirements:
- Personal greeting + current streak + today’s goal.
- Cards for: Continue Learning, Today’s Live Classes, Practice Questions, AI Doubt Solver, Mentorship.
- Progress overview (subjects completed, mock test scores, rank).
- Quick access to Study Plan, Downloads, Leaderboard.
- Bottom navigation: Home | Learn | Live | Practice | Profile.
- Pull-to-refresh, skeleton loaders, and offline indicator.
- Completely free – no locked content.
```

### Page 05: Smart Video Player & Library
**Prompt:**
```
Develop the Video Library + Smart Video Player.

Requirements:
- Browse by Exam → Subject → Chapter.
- Video player with: auto-chapters, 12-language subtitles, playback speed, quality selector (including low-bandwidth mode), offline download button (max 5 videos/day), in-video “Doubt” button that opens AI chat.
- Resume from last position.
- Related videos and practice questions after video ends.
- Extremely optimised for low-end devices and 2G.
```

### Page 06: Live Interactive Classes
**Prompt:**
```
Build the Live Classes experience.

Requirements:
- Daily timetable view (filter by exam/subject).
- Live class room with: video stream, raise hand, live polls, Q&A queue, chat moderation.
- Support for 10–20 lakh concurrent viewers (use HLS + WebRTC hybrid).
- Auto-recording available after class.
- “Join via SMS” option for feature phone users (receive key points via SMS).
- Clear “Live Now” and “Upcoming” sections.
- Low-latency mode for better networks and ultra-low mode for 2G.
```

### Page 07: Practice Engine & Mock Tests
**Prompt:**
```
Create the Practice and Mock Test module.

Requirements:
- Topic-wise practice, previous year questions (PYQ), and full-length mock tests.
- Real exam-like interface (timer, section navigation, mark for review).
- Detailed solutions and performance analytics after submission.
- AI-generated weak-area practice sets.
- Rank prediction and comparison with national average.
- Offline practice support (download question packs).
```

### Page 08: AI Doubt Solver
**Prompt:**
```
Develop the AI Doubt Solver interface.

Requirements:
- Chat-style interface supporting text, image (photo of question), and voice input.
- Answers in Hindi and English (user selectable).
- Step-by-step explanations, not just final answers.
- “Ask from this video” context awareness.
- Save important doubts to personal notebook.
- Fallback to human mentor if AI confidence is low.
- Hosted on Indian servers (LLaMA 3 or equivalent).
```

### Page 09: Gamification & Leaderboards
**Prompt:**
```
Build the Gamification Engine pages.

Requirements:
- Daily streaks, XP points, achievement badges.
- District, State and National leaderboards (privacy-respecting – show only rank and first name + district).
- Battle mode (challenge a friend or random student on a quiz).
- Weekly/monthly challenges linked to study goals.
- Celebration animations that are lightweight and optional.
```

### Page 10: Mentorship Network
**Prompt:**
```
Create the Mentorship booking and session pages.

Requirements:
- Browse verified mentors (IAS toppers, subject experts, retired officers).
- Filter by exam, subject, language, availability.
- Book 30-minute slots.
- In-app video/audio call or chat session.
- Feedback and rating after session.
- Clear free quota (e.g., 2 sessions/month) so it remains accessible.
```

### Page 11: Profile, Settings & Downloads
**Prompt:**
```
Develop Profile and Settings pages.

Requirements:
- Edit profile, change language, notification preferences.
- Download manager (videos, notes, offline packs) with storage usage.
- Linked devices and logout.
- Data download / account deletion (DPDP compliance).
- Help & support, privacy policy, terms.
```

### Page 12: Notifications & Reminders
**Prompt:**
```
Build the notification centre and reminder system.

Requirements:
- Class reminders, study plan nudges, streak protection, result alerts.
- Rich notifications that work even on low-end Android.
- In-app notification centre with filters.
- SMS fallback for critical alerts.
```

---

## 3. Government / Ministry-Facing Pages – Detailed Development Prompts

### Page G01: Ministry Login & Role-Based Access
**Prompt:**
```
Create secure Ministry admin login.

Requirements:
- Government email / NIC authentication or Aadhaar + OTP for authorised officers.
- Role-based access: National Admin, State Admin, District Viewer, Content Moderator, Report Viewer.
- Full audit logging of every action.
```

### Page G02: National Real-time Dashboard
**Prompt:**
```
Build the main Ministry Dashboard.

Requirements:
- India map with real-time active users by state and district (colour intensity).
- Key metrics at a glance: Total Registered, Daily Active Users, Live Class Viewers, Videos Watched, Mock Tests Taken, Estimated Family Savings.
- One-click filters by exam, date range, state.
- Export to PDF / Excel for Parliamentary use.
- Auto-refresh every few minutes.
- Extremely clear visual hierarchy – suitable for senior officers.
```

### Page G03: State & District Deep-Dive
**Prompt:**
```
Develop state and district analytics pages.

Requirements:
- Drill-down from national map to state → district.
- Local rankings, participation rates, top performing districts.
- Comparison with national average.
- Heatmaps of engagement and drop-off points.
```

### Page G04: Content & Live Class Management
**Prompt:**
```
Create the Content Management System (CMS) for government team.

Requirements:
- Upload / approve videos, notes, mock tests.
- Schedule live classes and assign teachers.
- Multi-language content versioning.
- Quality checklist and approval workflow.
- Version history and rollback.
```

### Page G05: Parliamentary & Impact Report Generator
**Prompt:**
```
Build the one-click Parliamentary Report generator.

Requirements:
- Select period (weekly / monthly / quarterly / annual).
- Auto-generate PDF with: user growth, geographic coverage, engagement metrics, estimated family savings, exam performance indicators, success stories (anonymised).
- Official Ministry letterhead and formatting.
- Download and email options.
```

### Page G06: User Support & Grievance Dashboard
**Prompt:**
```
Develop the grievance and support monitoring page.

Requirements:
- View student tickets, AI vs human resolution rates.
- Flag systemic issues (e.g., a particular video quality problem in one language).
- Escalation matrix.
```

### Page G07: System Health & Security Monitoring
**Prompt:**
```
Create the technical operations dashboard for NIC / Ministry IT.

Requirements:
- Real-time uptime, error rates, concurrent users, CDN performance.
- Security alerts and CERT-In compliance status.
- Data residency confirmation.
- Capacity planning graphs.
```

---

## 4. Cross-Cutting Technical Prompts (Apply to All Pages)

**Performance Prompt:**
```
Every page must load meaningful content in under 3 seconds on a 2G connection. Use aggressive code splitting, image compression, lazy loading, and offline-first architecture with service workers.
```

**Accessibility Prompt:**
```
Follow WCAG 2.1 AA. Large touch targets (min 48x48dp), high contrast, screen-reader support, and full keyboard navigation on web.
```

**Security Prompt:**
```
All APIs must use token-based auth, input sanitisation, rate limiting, and run only on NIC MeghRaj. No third-party trackers.
```

**Offline Prompt:**
```
Critical learning paths (videos already downloaded, practice questions, study plan) must work fully offline. Sync when network returns.
```

---

## 5. Suggested Development Order (Phased)

**Phase 1 (Foundation – Months 1–3)**
- Landing + Aadhaar Login
- Diagnostic Assessment
- Student Dashboard
- Video Library & Player (SSC + Banking first)
- Basic Practice Engine

**Phase 2 (Growth – Months 4–6)**
- Live Classes
- Gamification
- Multi-language expansion
- AI Doubt Solver (Hindi)

**Phase 3 (Scale – Months 7–9)**
- Mentorship
- Full exam coverage (UPSC, Railway, NEET, JEE, State PSC)
- Ministry National Dashboard
- Parliamentary Report Generator

**Phase 4 (Nationwide – Months 10–12)**
- All 36 states optimised
- 14–15 languages complete
- Advanced analytics & impact reports

---

## 6. Final Notes for Developers & Designers

- Always prioritise the student on a ₹4,000 phone in a village with 2G.
- Every screen should feel trustworthy, calm, and government-owned.
- No gamification should create anxiety – keep it positive and encouraging.
- All copy must be available in simple Hindi and English at minimum.
- Document every API contract and data model for future Ministry handover.

---

**End of Document**  
Pariksha Mitra – Page Development Prompt Master File  
August 2026 | Confidential
