# PARIKSHA MITRA
## Complete Development Prompts for All ~40 Pages / Screens
### National Free Competitive Exam Coaching Platform
**Version:** 2.0 (Expanded)  
**Date:** August 2026  
**Classification:** Confidential – For Development Team & Ministry Review  
**Total Screens Covered:** 40

---

## MASTER PROMPT (Apply to Every Screen)

```
You are developing screens for “Pariksha Mitra” – National Free Competitive Exam Coaching Platform under Ministry of Education, Government of India.

Mandatory rules for EVERY screen:
- Free forever – no premium locks or dark patterns
- Works on ₹4,000 Android phones (512MB RAM) and 2G networks
- Offline-first wherever possible
- Hindi + English + support for 12–15 Indian languages
- Aadhaar-based identity, data only on NIC MeghRaj
- CERT-In, DPDP Act 2023, NeSDA compliant
- Clean government visual language (trustworthy, calm, high contrast)
- Large touch targets (min 48dp), accessible (WCAG 2.1 AA)
- Fast loading even on slow networks
- Mobile-first, then adapt to PWA/Web
```

---

# PART A: STUDENT / USER-FACING SCREENS (28 Screens)

### 1. Splash Screen
**Prompt:** Create a clean, lightweight splash screen with Pariksha Mitra logo, tagline “Every Student’s Personal AI Coaching Partner”, and small “Ministry of Education, Government of India” text. Show for 1.5–2 seconds then go to onboarding or login. Extremely small file size.

### 2. Onboarding Screen 1 – Welcome
**Prompt:** First onboarding screen. Big illustration or icon, heading “Free Quality Coaching for Every Aspirant”, short text explaining the platform is completely free and government-backed. “Next” button.

### 3. Onboarding Screen 2 – AI Personal Tutor
**Prompt:** Second onboarding screen highlighting AI-powered personal tutor that adapts to student’s weak areas and creates a 30-day study plan. Simple illustration + “Next”.

### 4. Onboarding Screen 3 – Live Classes + Offline
**Prompt:** Third onboarding screen. Show that daily live classes and recorded videos work even on low-end phones and without internet (offline download). “Next”.

### 5. Onboarding Screen 4 – Language Selection
**Prompt:** Language selection screen. List major Indian languages (Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, Assamese, etc.). User can select primary language. “Start Learning” CTA.

### 6. Login / Aadhaar Authentication
**Prompt:** Aadhaar number input + “Get OTP” button. OTP verification screen. Clear privacy message: “Your data stays in India on NIC servers”. Handle loading, wrong OTP, and network error states. After success, route first-time users to Diagnostic Test.

### 7. Diagnostic Assessment – Intro
**Prompt:** Intro screen before the test. Explain “20 questions • 15–20 minutes • Builds your personal weakness map and 30-day study plan”. “Start Test” button. Option to do it later.

### 8. Diagnostic Assessment – Question Screen
**Prompt:** Single question screen. Large readable question text, 4 options, progress bar (Question 6 of 20), optional timer, “Next” / “Skip”. Support text and simple image questions. Auto-save progress.

### 9. Diagnostic Assessment – Result & Study Plan
**Prompt:** Results screen showing overall score, subject-wise strength/weakness radar or bars, and auto-generated 30-day personalised study plan. “Go to Dashboard” CTA. Save results permanently to profile.

### 10. Student Dashboard (Home)
**Prompt:** Main home screen after login. Greeting with name, current streak, today’s goal. Cards: Continue Learning, Today’s Live Classes, Practice, AI Doubt Solver, Mentorship. Bottom navigation. Pull-to-refresh. Offline indicator.

### 11. Dashboard – Empty State (New User)
**Prompt:** Special empty/welcome version of dashboard for users who just finished diagnostic. Encourage starting first video or live class. Friendly illustration.

### 12. Video Library – Exam Selection
**Prompt:** Grid or list of exams (SSC CGL/CHSL, IBPS, Railway, UPSC, NEET, JEE, State PSC, etc.). Clear icons and names. Tap to go to subjects.

### 13. Video Library – Subject & Chapter List
**Prompt:** After selecting exam, show subjects. Then chapters under each subject with video count and progress percentage. Search bar.

### 14. Smart Video Player
**Prompt:** Full video player. Features: play/pause, 10s forward/back, speed (0.75x–2x), quality selector (including data-saver), subtitle language selector, auto-chapters, “Doubt” floating button, download button, resume from last position. Extremely optimised for low-end devices.

### 15. Video Player – Offline Download Manager
**Prompt:** Screen showing download progress, list of downloaded videos, storage used, and “Delete” options. Limit indication (e.g. 5 videos/day). Works fully offline.

### 16. Live Classes – Timetable
**Prompt:** Daily/weekly timetable of live classes. Filter by exam and subject. “Live Now” badge, “Upcoming”, and “Watch Recording”. Clear start time and teacher name.

### 17. Live Class Room
**Prompt:** Live class interface. Video stream area, raise hand button, live polls, Q&A queue, moderated chat. Viewer count. Low-latency and 2G-friendly modes. “Leave Class” confirmation.

### 18. Live Class – SMS / Feature Phone Mode
**Prompt:** Simple screen or flow explaining how feature-phone users can join via SMS and receive key points / PDF notes. Show the SMS number and format.

### 19. Practice Hub
**Prompt:** Main practice landing. Options: Topic-wise Practice, Previous Year Questions, Full Mock Tests, AI Weak-Area Practice. Show recent performance summary.

### 20. Practice – Question Interface
**Prompt:** Exam-like question screen. Timer, question palette, mark for review, clear/next/submit. Clean and distraction-free. Support offline question packs.

### 21. Practice – Result & Solutions
**Prompt:** After submitting test: score, accuracy, time taken, subject-wise breakdown, detailed solutions with explanations, and “Practice Weak Areas” CTA. Rank estimation if mock test.

### 22. AI Doubt Solver – Chat Interface
**Prompt:** Chat UI. User can type, upload photo of question, or use voice. AI replies in selected language (Hindi/English) with step-by-step solution. “Save to Notebook” and “Ask Human Mentor” options. Show confidence when low.

### 23. AI Doubt Solver – History / Notebook
**Prompt:** List of previously asked doubts with search and filter. Tap to reopen conversation. Option to organise by subject.

### 24. Gamification – Streaks & Badges
**Prompt:** Screen showing current streak, longest streak, XP points, and earned badges. Clear explanation of how to earn more. Motivational but not stressful.

### 25. Leaderboards
**Prompt:** District, State, and National leaderboards. Show rank, first name, district, and points. Privacy-respecting (no full name or photo unless user opts in). Filter by exam and time period (weekly/monthly).

### 26. Mentorship – Mentor List
**Prompt:** Browse verified mentors (IAS toppers, subject experts, retired officers). Photo, short bio, subjects, languages, rating, and availability. Filters for exam, subject, language.

### 27. Mentorship – Booking & Session
**Prompt:** Select slot, confirm booking (free quota shown). On session day: join video/audio call or chat. After session: rating and feedback form.

### 28. Profile & Settings
**Prompt:** Profile view/edit (name, target exam, language preference). Settings: notifications, download quality, data usage, linked devices, logout. DPDP options: download my data, delete account. Help, Privacy Policy, Terms.

---

# PART B: GOVERNMENT / MINISTRY SCREENS (12 Screens)

### 29. Ministry Login
**Prompt:** Secure login for government officers. Support NIC email / government SSO or Aadhaar + OTP. Role selection if multiple roles. Full audit trail of login.

### 30. National Dashboard – Overview
**Prompt:** Top-level Ministry dashboard. Big numbers: Total Registered, Daily Active Users, Live Viewers right now, Videos Watched today, Mock Tests taken, Estimated Family Savings. India map with heat intensity by state. Auto-refresh. Date range filter.

### 31. National Dashboard – Map Deep Dive
**Prompt:** Interactive India map. Click state → show district-level data. Colour intensity based on active users or engagement. Side panel with top metrics for selected state/district.

### 32. State / District Analytics
**Prompt:** Detailed table and charts for any selected state or district. Participation rate, growth trend, top exams, comparison with national average, drop-off points.

### 33. Content Management – Video & Material Upload
**Prompt:** CMS screen for uploading videos, notes, and question sets. Metadata (exam, subject, chapter, language, teacher). Approval workflow. Preview and publish controls.

### 34. Content Management – Live Class Scheduler
**Prompt:** Calendar interface to schedule live classes. Assign teacher, exam, subject, language, max expected viewers. Publish to student timetable. Edit/cancel with notification.

### 35. Parliamentary Report Generator
**Prompt:** Simple form: select period (weekly/monthly/quarterly/custom). One-click “Generate PDF Report”. Report includes growth charts, geographic coverage, engagement, estimated savings, and key highlights. Official formatting with Ministry letterhead.

### 36. User Support & Grievance Dashboard
**Prompt:** List of student support tickets. Filters by status, category, language, state. View conversation. Assign to team member. Track AI vs human resolution rate. Escalation button.

### 37. System Health Monitoring
**Prompt:** Technical dashboard for NIC/IT team. Real-time: uptime percentage, active concurrent users, error rate, API latency, CDN status, storage usage. Alerts for anomalies. Capacity trends.

### 38. Security & Compliance Monitor
**Prompt:** Screen showing CERT-In compliance status, recent security scans, DPDP consent metrics, data residency confirmation (all data on MeghRaj), and access logs summary.

### 39. Role & Access Management
**Prompt:** Admin screen to create/edit government user roles and permissions (National Admin, State Viewer, Content Moderator, Report Only, etc.). Activate/deactivate accounts. Full audit log.

### 40. Notification & Broadcast Centre
**Prompt:** Ministry tool to send targeted notifications or SMS to students (by state, exam, language). Preview, schedule, and delivery report. Use for important announcements or class reminders.

---

## CROSS-CUTTING SCREENS & STATES (Apply Across Many Pages)

While developing the above 40 screens, also implement these common states for relevant pages:

- Loading / Skeleton state
- Empty state (with friendly illustration + CTA)
- Error / No Internet state (with retry)
- Permission denied / Offline limited state
- Success / Confirmation modal
- Soft paywall-free upgrade nudges (never blocking)

---

## DEVELOPMENT PRIORITY ORDER

**Phase 1 – Must Have (First 3 months)**  
Screens: 1–6, 7–11, 12–15, 19–21, 28  
(Basic learning loop working)

**Phase 2 – Growth**  
Screens: 16–18, 22–25, 26–27  

**Phase 3 – Government Dashboard**  
Screens: 29–35  

**Phase 4 – Advanced & Polish**  
Screens: 36–40 + all empty/error states

---

**End of Document**  
Total Core Screens Defined: **40**  
Pariksha Mitra – Full Expanded Page Development Prompts  
August 2026 | Confidential
