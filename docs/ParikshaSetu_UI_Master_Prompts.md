# ParikshaSetu — Full UI Development Master Prompt Document
**National Free Competitive Exam Coaching Platform**
**Ministry of Education, Government of India**
Version 2.0 | August 2026 | Confidential

---

## 🔒 GLOBAL MASTER PROMPT (Inject into EVERY screen prompt)

> Copy this block as the **system prompt / preamble** for every screen you generate with any AI code tool, design tool, or LLM.

```
You are building a screen for "ParikshaSetu" — the National Free Competitive Exam
Coaching Platform under the Ministry of Education, Government of India.

MANDATORY RULES FOR EVERY SCREEN:

ACCESSIBILITY & DEVICE SUPPORT
- Works on ₹4,000 Android phones (512MB RAM, Android 8+)
- Supports 2G networks (target <3s meaningful paint on 2G)
- Offline-first architecture with service workers
- WCAG 2.1 AA compliant
- Minimum touch target: 48×48 dp
- High contrast mode supported
- Screen-reader (TalkBack) compatible
- Full keyboard navigation on web/PWA

LANGUAGE & LOCALISATION
- All UI copy in Hindi + English minimum
- Full support for 12–15 Indian languages (Bengali, Telugu, Marathi, Tamil,
  Gujarati, Kannada, Malayalam, Odia, Punjabi, Assamese, Urdu, Maithili, Sanskrit)
- RTL layout support for Urdu
- Language strings externalised — never hardcoded

IDENTITY & SECURITY
- Aadhaar-based authentication (UIDAI API) only
- Token-based session management (JWT, short-lived)
- Input sanitisation and rate limiting on all fields
- No third-party trackers, analytics SDKs, or ad networks
- All data and compute exclusively on NIC MeghRaj (Indian government cloud)
- CERT-In compliant security practices
- DPDP Act 2023 compliant (consent, data portability, deletion)
- NeSDA (National eGovernance Service Delivery Assessment) compliant

VISUAL DESIGN LANGUAGE
- Clean, trustworthy government aesthetic
- Primary palette: Deep Saffron #FF6600, India Blue #0033A0, White #FFFFFF,
  Light Grey #F5F5F5
- Typography: Noto Sans (Latin + Devanagari + all scripts) — single font family
- No dark patterns, no manipulative UX, no fake urgency
- No premium locks, paywalls, or upsell prompts — platform is FREE FOREVER
- Positive, encouraging tone — never create anxiety
- Government logo / branding present on every screen (top-left or header)

PERFORMANCE
- First Meaningful Paint < 3 seconds on 2G
- Total first-load bundle < 300KB (gzipped)
- Aggressive code splitting, lazy loading, image compression (WebP)
- CDN caching for all static assets
- Progressive enhancement — core functionality without JavaScript

INCLUSIVE FEATURES
- Feature phone fallback (SMS-based access for key functions)
- DD Free Dish TV integration noted where relevant
- Offline indicator visible when network is unavailable
- Auto-save all user progress locally

TARGET USERS
1. Students preparing for: SSC CGL/CHSL, IBPS PO/Clerk, Railway RRB, UPSC CSE/IAS,
   NEET UG/PG, JEE Main/Advanced, State PSCs, Defence exams
2. Ministry of Education / Government administrators and officers

DESIGN APPROACH
- Mobile-first (360dp width baseline), then adapt to PWA/tablet/desktop
- Bottom navigation for mobile, sidebar for desktop
- Skeleton screens during loading — never blank screens
- Friendly illustrated empty states — never plain "No data" messages
- Inline error messages — never alert() dialogs
```

---

## PART A — STUDENT / USER-FACING SCREENS (28 Screens)

---

### Screen 1 — Splash Screen

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Design and build the Splash Screen for ParikshaSetu.

VISUAL REQUIREMENTS:
- Full-screen white background
- Centred ParikshaSetu logo (SVG, <20KB) with Ashoka Chakra motif
- Tagline below logo: "Every Student's Personal AI Coaching Partner"
  (Hindi: "हर छात्र का व्यक्तिगत AI कोचिंग साथी")
- "Ministry of Education, Government of India" in smaller text below
- Subtle fade-in animation (CSS only, no JS animation libraries)
- National flag colour bar at very bottom (saffron–white–green strip, 4dp height)

TECHNICAL REQUIREMENTS:
- Total screen asset size: < 50KB
- Display duration: 1.5–2 seconds
- No network calls during splash
- After 1.5s: check auth token
  → If valid token exists → route to Student Dashboard (Screen 10)
  → If no token → route to Onboarding 1 (Screen 2)
- Preload critical fonts (Noto Sans) during splash duration

STATES: Loading only (no error state needed).
```

---

### Screen 2 — Onboarding 1: Welcome

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build Onboarding Screen 1 of 4: Welcome / Value Proposition.

LAYOUT (mobile-first, 360dp):
- Top: Skip button (top-right, text link, accessible)
- Centre: Large friendly illustration (SVG, student studying, diverse representation,
  < 40KB)
- Heading (H1): "Free Quality Coaching for Every Aspirant"
  Hindi: "हर उम्मीदवार के लिए मुफ़्त गुणवत्तापूर्ण कोचिंग"
- Body (2 lines max): "ParikshaSetu is 100% free, government-backed coaching
  for SSC, Banking, Railway, UPSC, NEET, JEE, and State PSC exams."
- Progress dots: 4 dots, dot 1 filled (current)
- CTA button (full-width, primary): "Next →"

INTERACTIONS:
- Swipe left/right to navigate onboarding screens
- Skip button jumps directly to Language Selection (Screen 5 / Onboarding 4)
- Next button → Onboarding 2 (Screen 3)
- Dot indicators tappable for direct navigation

PERFORMANCE: Illustration preloads for Screen 3 in background while user reads.
```

---

### Screen 3 — Onboarding 2: AI Personal Tutor

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build Onboarding Screen 2 of 4: AI Personalisation feature highlight.

LAYOUT:
- Skip button (top-right)
- Illustration: AI/robot + student, warm friendly style (SVG <40KB)
- Heading: "Your Personal AI Tutor That Adapts to You"
  Hindi: "आपका व्यक्तिगत AI ट्यूटर जो आपके अनुसार ढलता है"
- Body: "Takes a 20-minute Diagnostic Test on Day 1. Identifies your weak areas.
  Auto-creates your personalised 30-day study plan."
- Feature chips (icon + text, 3 chips horizontal):
  [🎯 Personalised] [📅 30-Day Plan] [🔄 Adaptive]
- Progress dots: dot 2 filled
- CTA: "Next →"

Ensure chips reflow to vertical stack on very small screens (<320dp).
```

---

### Screen 4 — Onboarding 3: Live Classes + Offline

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build Onboarding Screen 3 of 4: Live classes and offline capability highlight.

LAYOUT:
- Skip button (top-right)
- Illustration: phone showing video class with WiFi-off icon overlay (SVG <40KB)
- Heading: "Live Classes + Offline Videos — Works Everywhere"
  Hindi: "लाइव क्लासेस + ऑफलाइन वीडियो — हर जगह काम करे"
- Body: "Daily live classes from expert teachers. Download videos for offline study.
  Works on 2G. Works without internet."
- Feature chips: [📡 Daily Live Classes] [⬇ Offline Download] [📶 2G Ready]
- Progress dots: dot 3 filled
- CTA: "Next →"
```

---

### Screen 5 — Onboarding 4: Language Selection

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build Onboarding Screen 4 of 4: Primary Language Selection.

LAYOUT:
- Heading: "Choose Your Language / अपनी भाषा चुनें"
- Subtitle: "You can change this later in Settings"
- Scrollable grid (2 columns) of language options — each a card showing:
  → Language name in that language script (e.g., हिन्दी, বাংলা, తెలుగు)
  → Language name in English below (smaller)
  → Radio selection state (border highlight + checkmark on selection)

LANGUAGES TO LIST (minimum):
Hindi, English, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada,
Malayalam, Odia, Punjabi, Assamese, Urdu, Maithili

- Default selection: Hindi (or auto-detect from device locale)
- Progress dots: dot 4 filled
- CTA (full-width, primary, sticky bottom): "Start Learning / सीखना शुरू करें"
- On tap CTA → Save language preference → Route to Login (Screen 6)

ACCESSIBILITY: Each card must have proper ARIA label with English + native name.
```

---

### Screen 6 — Login / Aadhaar Authentication

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Authentication screen using Aadhaar OTP login.

STATE 1 — Enter Aadhaar Number:
- Header: ParikshaSetu logo + "Secure Login / सुरक्षित लॉगिन"
- Input field: "Aadhaar Number" — 12 digit numeric keypad, masked after entry
  (show last 4 digits only: XXXX XXXX 1234)
- Privacy notice (collapsible): "Your Aadhaar number is used only for identity
  verification per Aadhaar Act 2016. It is never stored on our servers."
- UIDAI consent checkbox (mandatory): "I consent to OTP-based verification"
- CTA: "Get OTP / OTP प्राप्त करें" (disabled until valid 12-digit input)
- Bottom link: "New to ParikshaSetu? Know More"

STATE 2 — OTP Verification:
- Show masked Aadhaar: "OTP sent to mobile linked with XXXX XXXX 1234"
- 6-digit OTP input (auto-focus, numeric)
- Countdown timer: "Resend OTP in 30s" → becomes "Resend OTP" link after 30s
- CTA: "Verify & Login / सत्यापित करें"
- "Change Aadhaar" link

ROUTING:
- First-time user (no profile) → Diagnostic Assessment Intro (Screen 7)
- Returning user → Student Dashboard (Screen 10)

ERROR STATES:
- Invalid Aadhaar format: inline field error
- OTP expired: banner + resend option
- UIDAI server down: "Verification service temporarily unavailable. Try again in a
  few minutes." with retry button
- Rate limit (5 failed attempts): 30-minute lockout with countdown

SECURITY:
- No Aadhaar number logging in browser console or local storage
- OTP field: autocomplete="one-time-code" for SMS auto-fill
- Rate limiting: 3 OTP requests per hour per Aadhaar
```

---

### Screen 7 — Diagnostic Assessment: Intro

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Diagnostic Assessment Introduction screen.

LAYOUT:
- Back arrow (top-left, goes to Dashboard for returning users)
- Heading: "Let's Understand Your Level"
  Hindi: "आइए आपका स्तर जानें"
- Illustration: student at starting line / map (SVG <40KB)
- Info cards (3 horizontal scrollable or stacked):
  → 📝 "20 Questions across subjects"
  → ⏱ "Takes 15–20 minutes"
  → 🗺 "Creates your personal 30-day study plan"
- Body: "This test helps us identify your strong and weak areas so we can give
  you a personalised learning path. There are no right or wrong results."
- Exam selector: "Which exam are you preparing for?"
  Dropdown/chips: SSC | Banking | Railway | UPSC | NEET | JEE | State PSC | Other
- CTA (primary, full-width): "Start Diagnostic Test"
- Secondary link: "Skip for now — I'll explore on my own"
  (If skipped → route to Screen 11 Empty Dashboard)

NOTE: On "Start" → preload first 5 questions in background before navigating.
```

---

### Screen 8 — Diagnostic Assessment: Question Interface

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Diagnostic Assessment question screen (adaptive test).

LAYOUT:
- Top bar: "Question 3 of 20" + Progress bar (filled to 15%)
- Optional soft timer (non-stressful, grey) showing elapsed time
- Subject tag chip: e.g., "Quantitative Aptitude"
- Question text (large, 18sp minimum, supports MathML for formulae)
- Optional: question image (lazy-loaded, compressed WebP)
- 4 answer options (A/B/C/D) — full-width tappable cards
  → Selected state: primary colour border + fill
  → Only one selectable at a time
- Navigation buttons row:
  → "Skip" (text link, left) — marks for review
  → "Clear" (text link, centre) — deselects answer
  → "Next →" (primary button, right)

OFFLINE: All 20 questions pre-downloaded before test starts. Test works fully offline.
AUTO-SAVE: Save answer to localStorage on every selection.

QUESTION TYPES SUPPORTED:
- Text only
- Text + single image
- Statement-based (Statement I / Statement II)

ACCESSIBILITY:
- Options labelled "Option A: [text]" for screen readers
- Images have alt text
- Sufficient contrast on selected vs unselected states
```

---

### Screen 9 — Diagnostic Result & Study Plan

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Diagnostic Assessment Results and Auto-generated Study Plan screen.

SECTION 1 — Score Summary:
- Large animated score reveal (CSS animation only)
- Score out of 20, percentage, and a brief descriptor:
  "Good Start! / अच्छी शुरुआत!" for <50% — always positive framing
- Subject-wise bar chart showing strength/weakness:
  Subjects on Y-axis, score % on X-axis, colour-coded (green/amber/red)

SECTION 2 — Your 30-Day Study Plan:
- Auto-generated based on diagnostic results
- Week-by-week accordion view (Week 1 expanded by default):
  Each week shows: days, topics to cover, estimated daily time
- "Your weak areas to focus on" highlighted section (top 3 subjects)
- "Your strengths — keep maintaining" section

SECTION 3 — Next Steps:
- CTA (primary, full-width): "Go to My Dashboard"
- Secondary: "View Full Study Plan"

DATA: Study plan generated server-side based on diagnostic answers + exam selected.
Cached locally for offline access.
Save permanently to user profile.

IMPORTANT: Never show "You failed" or negative language. Always frame as
"Here's your personalised path to success."
```

---

### Screen 10 — Student Dashboard (Home)

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the main Student Dashboard / Home screen.

TOP BAR:
- ParikshaSetu logo (small, top-left)
- Greeting: "Good Morning, Rahul! / सुप्रभात, राहुल!" (time-based)
- Notification bell icon (top-right) with badge for unread count
- Offline indicator banner (amber, shown when offline): "You're offline — showing
  downloaded content"

STREAK & GOAL ROW:
- Streak flame icon + "12 Day Streak 🔥"
- Today's goal: "Watch 1 video · Practice 10 questions" with mini progress (2/3 done)

MAIN CARDS (scrollable vertical):
1. Continue Learning card — thumbnail + title + progress bar + "Continue" button
2. Today's Live Class card — time, subject, teacher, "Join Now" or "Set Reminder"
3. Practice card — "Practice Quantitative Aptitude · 50 PYQs ready"
4. AI Doubt Solver card — "Have a doubt? Ask in Hindi or English"
5. Mentorship card — "Book a free 30-min session with an IAS topper"

BOTTOM NAVIGATION (fixed, 5 tabs):
Home 🏠 | Learn 📚 | Live 📺 | Practice ✏ | Profile 👤

STATES:
- Loaded (as above)
- Loading: skeleton cards (shimmer effect)
- Offline: show only downloaded content cards, grey out live features

PERFORMANCE: Dashboard must render from cache in <1s when offline.
```

---

### Screen 11 — Dashboard: Empty State (New User)

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Empty State Dashboard for new users who skipped the diagnostic test.

This is the same layout as Screen 10 but with empty/welcome states.

DIFFERENCES FROM Screen 10:
- No streak (first day): "Start your first day! / अपना पहला दिन शुरू करें!"
- No "Continue Learning" — replace with: "Start Your First Lesson" CTA
  with illustration of a student beginning a journey
- Diagnostic nudge banner (top, dismissible): "Take a 20-min test to get
  your personalised study plan →" [Start Test]
- Live class card still shows (always available)
- Practice card: "Explore Practice Questions →"
- Mentorship and Doubt Solver cards: same as Screen 10

TONE: Warm, welcoming, encouraging. Make the student feel immediately valued.
Never show "Nothing here yet" plain text. Always provide a clear next action.
```

---

### Screen 12 — Video Library: Exam Selection

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Video Library home screen — Exam Selection.

HEADER:
- "Learn / सीखें" heading
- Search bar: "Search videos, subjects, topics…"

EXAM GRID (2 columns, tappable cards):
Each card contains:
- Exam icon/illustration (SVG, coloured, unique per exam)
- Exam name in large text (Hindi + English)
- Video count: "1,240 videos"
- User's progress % (if started): "34% complete"

EXAMS TO SHOW:
SSC CGL/CHSL | IBPS PO/Clerk | Railway RRB NTPC | UPSC CSE
NEET UG | JEE Main & Advanced | State PSC (by state) | Defence (CDS/NDA)

FEATURED ROW (horizontal scroll above grid):
"Recommended for You" — 2–3 exam chips based on user profile.

FOOTER: "Can't find your exam? More coming soon — request here →"

On tap any exam card → navigate to Screen 13 (Subject & Chapter list for that exam).
```

---

### Screen 13 — Video Library: Subject & Chapter

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Subject and Chapter listing within a selected exam (e.g., SSC CGL).

HEADER:
- Back arrow + Exam name (e.g., "SSC CGL")
- Horizontal subject filter tabs (scrollable): All | Quantitative Aptitude |
  English | Reasoning | General Awareness
- Search bar for chapters

CONTENT (for selected subject tab):
Accordion list of chapters, each showing:
- Chapter name (Hindi + English)
- Video count in chapter
- User progress bar (X of Y videos watched)
- Download icon (downloads all videos in chapter)
- Tap to expand → show video list

VIDEO LIST WITHIN CHAPTER:
Each video item:
- Thumbnail (lazy-loaded WebP, 120×68)
- Title, duration, teacher name
- Download icon (single video)
- "Downloaded" badge if offline
- Progress dot (watched/unwatched/in-progress)

On tap video → navigate to Screen 14 (Video Player).

OFFLINE: Downloaded chapter videos accessible fully offline.
```

---

### Screen 14 — Smart Video Player

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Smart Video Player screen.

VIDEO AREA (16:9, full-width on mobile):
- Standard play/pause, seek bar with chapter markers
- Speed control: 0.75x | 1x | 1.25x | 1.5x | 2x
- Quality selector: Auto | 144p (Data Saver) | 360p | 720p
- Subtitle toggle (12 language options) — Noto Sans rendering
- Full-screen toggle
- "In-video Doubt" button (💬) overlay — appears on pause
- Captions rendered client-side for offline videos

BELOW VIDEO:
- Chapter title + exam/subject breadcrumb
- Teacher name + short bio expandable
- Auto-chapters timeline (clickable chapter markers list)
- Action row: ⬇ Download | 🔖 Bookmark | 📤 Share (deep link) | 📓 Save to Notebook
- Related videos list (from same chapter) — lazy loaded

2G LOW-BANDWIDTH MODE:
- Auto-detected; defaults to 144p with audio-only fallback option
- Audio-only mode: shows static thumbnail + audio player controls

OFFLINE PLAYBACK:
- Downloaded videos play via local file — no network needed
- Download limit: 5 videos per day (enforced client + server side)
- Downloaded badge shown on video thumbnail

RESUME: Save playback position every 10 seconds to localStorage and server.
Prompt "Resume from 12:34?" on reopen.

ACCESSIBILITY:
- All controls reachable via keyboard (web)
- Subtitle styling: large text, background shadow, user-adjustable size
```

---

### Screen 15 — Offline Download Manager

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Offline Download Manager screen.

HEADER:
- "Downloads / डाउनलोड" heading
- Storage usage bar: "3.2 GB used of 8 GB device storage"
  Visual horizontal bar, colour turns amber at 80%, red at 95%

DOWNLOAD LIMIT STATUS:
- "Today's downloads: 3 of 5 videos used"
- Resets daily at midnight — show countdown: "Resets in 6h 23m"

ACTIVE DOWNLOADS SECTION (if any):
- Progress cards: thumbnail + title + download % + speed + pause/cancel button

DOWNLOADED CONTENT LIST (grouped by exam/subject):
Each item:
- Thumbnail + title + file size + date downloaded
- Play button (primary action)
- Delete button (with confirmation: "Delete this video? This cannot be undone.")
- "Last watched: 2 days ago" metadata

BATCH ACTIONS:
- "Select All" → "Delete Selected"
- Sort by: Date | Subject | Exam

EMPTY STATE:
- Illustration: empty folder
- Text: "No downloads yet. Save videos to watch offline!"
- CTA: "Browse Videos →"
```

---

### Screen 16 — Live Classes: Timetable

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Live Classes Timetable screen.

HEADER:
- "Live Classes / लाइव कक्षाएं"
- Date picker: today + 6 days horizontal scroll (Mon–Sun with date)
- Filter chips (scrollable): All | SSC | Banking | Railway | UPSC | NEET | JEE

CLASS CARDS (for selected day, sorted by time):

LIVE NOW card (highlighted, pulsing red dot):
- "🔴 LIVE NOW"
- Class title + teacher + subject
- Viewer count: "12,400 watching"
- "Join Now" button (primary, large)

UPCOMING cards:
- Start time + duration
- Class title, teacher, exam/subject
- "Set Reminder" button (secondary)
- "Add to Calendar" link

RECORDED cards (past):
- "📹 Recording Available"
- "Watch Recording" button

FEATURE PHONE ROW (collapsible info):
"📱 Join via SMS: Send 'JOIN [ClassCode]' to 56070"

EMPTY STATE (no classes today):
- "No live classes today — check tomorrow's schedule"
- Show next available class

PERFORMANCE: Timetable cached; loads offline showing yesterday's confirmed schedule
with a "Schedule may have changed — connect to update" notice.
```

---

### Screen 17 — Live Class Room

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Live Class Room experience for students.

ARCHITECTURE NOTE: This screen must support 10–20 lakh concurrent viewers.
Use HLS (HTTP Live Streaming) for broadcast. WebRTC only for teacher's end.
Students are receive-only by default.

LAYOUT:
TOP — Video Stream (16:9):
- HLS video player (low-latency mode available)
- Viewer count overlay (top-right, live updating)
- Raise Hand button (👋) — enters moderation queue
- Quality selector (auto/144p/360p/720p)
- 2G mode: audio-only with static slide image

MIDDLE — Active Poll / Quiz (when teacher publishes):
- Question + 4 options
- "Submit Answer" button
- Results shown after teacher reveals

BOTTOM — Tabbed panel:
- Chat tab: moderated live chat (viewer messages pre-moderated)
- Q&A tab: submit question → appears in teacher queue → answered on screen
  Show own question status: "Pending | Answered | On screen"
- Notes tab: auto-generated key points (AI-generated, updated live)

RECORDING: Auto-record all classes. "This class is being recorded" notice shown.

NETWORK DEGRADATION:
- 2G detected: switch to audio + PDF slides automatically
- Packet loss >20%: show buffer spinner with "Reconnecting..."
- Offline fallback: "You're offline. This class will be available as a recording."

ACCESSIBILITY: Closed captions streamed from teacher's speech-to-text (12 languages).
```

---

### Screen 18 — Live Class: SMS / Feature Phone Access

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Feature Phone / SMS Access information screen.

This screen explains and enables feature phone users to participate in live classes.

LAYOUT:
- Heading: "Joining from a Basic Phone? / बेसिक फ़ोन से जुड़ रहे हैं?"
- Sub-heading: "No smartphone needed!"

INFO CARD — How to Join:
- Step 1: "Send 'JOIN [ClassCode]' to 56070 via SMS"
  → Show current class code prominently (e.g., "SSC2408")
- Step 2: "You will receive an IVR call with the class audio"
- Step 3: "Press 1 to ask a question, Press 2 for key points"

INFO CARD — After Class:
- "Reply 'NOTES [ClassCode]' to 56070 to receive key points as SMS"
- "Reply 'PDF [ClassCode]' to receive study notes link"

TODAY'S CLASS CODES table:
| Time | Class | Code |
|------|-------|------|
| 9 AM | SSC Quant | SSC2408A |
| 11 AM | Banking English | BNK2408B |

SHAREABLE: "Share this with a friend who has a basic phone" — deep link + SMS share

DD FREE DISH INFO:
"Some classes broadcast on DD Free Dish TV — Channel 114. Check weekly schedule."
- Embed weekly TV schedule (PDF download link)
```

---

### Screen 19 — Practice Hub

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Practice Hub home screen.

HEADER:
- "Practice / अभ्यास"
- Exam selector (dropdown): showing user's primary exam

RECENT PERFORMANCE SUMMARY CARD:
- Last session: score, accuracy, date
- Mini bar chart: last 7 days accuracy trend
- "View Full Analytics →" link

PRACTICE MODES (grid of 4 cards):

1. Topic-wise Practice
   Icon: 🎯 | "Practice specific topics" | "Start"

2. Previous Year Questions (PYQs)
   Icon: 📅 | "Solve real exam questions from past 10 years" | "Start"

3. Full Mock Test
   Icon: 📝 | "Full-length exam simulation" | "Start"
   Show: "Next mock: 2h 30min duration | 100 questions"

4. AI Weak-Area Practice
   Icon: 🤖 | "Questions tailored to your weak subjects (auto-selected)" | "Start"
   Show: current weak areas as chips below

OFFLINE PACKS SECTION:
- Downloaded practice packs list
- "Download Pack" cards for offline-first access

LEADERBOARD TEASER:
- "Your rank this week: #4,231 / 2.3 lakh" → "View Leaderboard →"
```

---

### Screen 20 — Practice: Question Interface

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Practice / Mock Test Question Interface.

TOP BAR:
- Test title (e.g., "SSC CGL Mock Test 3")
- Timer countdown (prominent, turns red at <10 minutes)
- "Pause" button (for topic-wise practice only; disabled in timed mock)

QUESTION AREA:
- "Q.23 / 100" section indicator
- Question text (large, supports images, MathML)
- 4 options (A/B/C/D) — radio-style cards
- "Mark for Review" button (bookmarks question with yellow dot)
- "Clear Response" link

QUESTION PALETTE (collapsible panel from right):
- Grid of question numbers colour-coded:
  🟢 Answered | 🟡 Marked for Review | ⬜ Not Visited | 🔵 Answered + Marked
- Jump to any question by tapping

NAVIGATION ROW:
- "← Previous" | "Next →" | "Submit Test" (last question or anytime)

SUBMIT CONFIRMATION MODAL:
- Summary: X answered, Y unanswered, Z marked
- "Submit" (confirm) | "Continue Test" (cancel)

OFFLINE: Full mock test must work offline if pack is pre-downloaded.
AUTO-SAVE: Save answer state to localStorage every answer change.

ANTI-CHEAT (mock only): Blur screen on app switch. Detect and log tab changes (web).
Do not block — just log for analytics. Never disqualify automatically.
```

---

### Screen 21 — Practice: Result & Solutions

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Practice Result and Detailed Solutions screen.

SECTION 1 — Score Summary:
- Large animated score reveal
- Score: "73 / 100" | Accuracy: "81%" | Time taken: "1h 47m"
- Percentile: "Better than 68% of students who took this test"
- Star rating (1–5) based on performance — always encouraging text

SECTION 2 — Subject-wise Breakdown:
- Horizontal bar chart per subject: score, accuracy, time
- "Strongest: English | Needs Work: Quantitative Aptitude"

SECTION 3 — Question-wise Review (scrollable list):
Each question row:
- Q number | Your answer | Correct answer | ✅ Correct / ❌ Wrong / ⏭ Skipped
- Tap to expand full detailed solution:
  → Step-by-step explanation
  → "Ask AI Doubt Solver" button for this question
  → "Similar Practice Questions" link

SECTION 4 — Next Steps:
- "📊 Practice Weak Areas" (auto-set to wrong questions' topics)
- "🔄 Retake Test"
- "📅 Next Mock: Scheduled for Thursday"
- Rank prediction chip: "Estimated rank if exam was today: ~45,000 – 60,000"

EXPORT: "Download Result PDF" — generates offline-friendly summary.
```

---

### Screen 22 — AI Doubt Solver: Chat Interface

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the AI Doubt Solver chat interface.

ARCHITECTURE NOTE:
- AI model hosted on NIC MeghRaj (not OpenAI/Google APIs)
- Context-aware: knows which video/chapter user came from
- Answers in user's selected language (Hindi default for Indian text queries)

CHAT AREA (WhatsApp-style bubbles):
- User messages (right, blue bubble)
- AI responses (left, white bubble with ParikshaSetu bot avatar)
- Support markdown rendering in responses (bold, lists, formulae)
- Code/formula blocks with proper math rendering (KaTeX)

INPUT AREA (fixed bottom):
- Text input: "Type your doubt in Hindi or English…"
- 📷 Camera/Image button — takes photo of textbook question (OCR + answer)
- 🎤 Voice input — speech-to-text (Hindi + English)
- Send button

AI RESPONSE FEATURES:
- Step-by-step numbered explanations
- "Was this helpful? 👍 👎" rating on each response
- "Explain differently" button
- "Show example problem" button
- Context chip (when applicable): "Based on: Algebra Chapter 3 video you watched"

ESCALATION:
- If AI confidence low or user rates 👎 twice:
  → Show: "Connecting you to a human mentor" [Request Human Help]
  → Human mentor queue status shown

NOTEBOOK SAVE:
- "📓 Save to Notebook" button on each AI answer
- Saves question + answer + timestamp to Screen 23

OFFLINE: Show "Offline — AI Doubt Solver needs internet. Your question will be
answered when you're back online."
```

---

### Screen 23 — AI Doubt Solver: History / Notebook

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Doubt History and Notebook screen.

HEADER:
- "My Notebook / मेरी नोटबुक"
- Search bar: "Search your doubts and notes…"
- Filter chips: All | Saved | By Subject: [Quant] [English] [Reasoning]…

CONTENT LIST (reverse chronological):
Each doubt/note entry card:
- Subject chip (colour-coded)
- Question preview (2 lines truncated)
- Date + time
- "AI Answer" or "Mentor Answer" badge
- Tap to open full conversation

OPEN CONVERSATION VIEW:
- Shows original question (text/image)
- Full AI answer (formatted)
- Option to "Continue conversation"
- Delete button (with confirm)

ORGANISATION:
- "Add to Folder" (user-created subject folders)
- Pin important notes to top

EXPORT:
- "Export Notebook as PDF" — generates formatted study notes PDF
- Share via WhatsApp/link

EMPTY STATE:
- "No doubts saved yet. Start by asking your first question! →"
```

---

### Screen 24 — Gamification: Streaks & Badges

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Gamification — Streaks and Badges screen.

DESIGN PHILOSOPHY:
All gamification must be positive and encouraging.
NEVER create anxiety, NEVER show punishing loss animations, NEVER compare
negatively with others. Progress should feel rewarding, not addictive.

STREAK SECTION:
- Large flame animation (CSS only, lightweight) + "🔥 12 Day Streak!"
- Current streak vs. Longest streak: "Current: 12 | Longest: 28"
- Calendar strip showing last 30 days (green dot = studied, grey = missed)
- Streak protection: "Streak Shield: 1 available (miss a day without losing streak)"

XP (EXPERIENCE POINTS) SECTION:
- Total XP: 4,820 XP
- Level: "Level 7 — Rising Star ⭐"
- Progress bar to next level: "680 XP to Level 8"
- How to earn XP card: Watch video (+10), Practice question (+2), Mock test (+50),
  Daily login (+5), Doubts solved (+15)

BADGES SECTION (scrollable grid):
Earned badges (full colour) + Locked badges (greyscale + lock icon):
- 🎯 "First Test" — Completed first practice
- 🔥 "Week Warrior" — 7-day streak
- 🏆 "Mock Master" — 10 mocks completed
- 📚 "Knowledge Seeker" — 50 videos watched
- … (20+ badges total, progressive unlocking)

Each badge tappable → shows description + date earned (or "How to earn" if locked).

MILESTONE CELEBRATION:
On reaching a new badge or level → full-screen confetti animation (CSS) + congratulations.
Can be dismissed with tap. Never auto-plays sound unless user enables it.
```

---

### Screen 25 — Leaderboards

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Leaderboards screen.

PRIVACY FIRST: Never show full names. Show: First name + first letter of surname
only (e.g., "Priya S."). Never show Aadhaar-linked details. Student may opt out
of leaderboards entirely in Settings.

SCOPE SELECTOR (tabs):
District | State | National

MY RANK CARD (sticky top):
- "Your Rank: #1,247 in Maharashtra"
- XP this week: 2,340 XP | Change: ▲ 84 from last week
- Percentile: "Top 12% in your state"

LEADERBOARD TABLE:
Rank | Name | District | Weekly XP | Badge
1 | Anjali M. | Pune | 8,420 | 🏆
2 | Rajan K. | Nagpur | 7,890 | 🥈
… | … | … | … | …
[You → highlighted row]

FILTER OPTIONS:
- Filter by Exam: SSC | Banking | Railway | UPSC | All
- Filter by Time: This Week | This Month | All Time

FAIR PLAY NOTE (collapsible):
"Rankings reflect study activity (videos, practice, mocks) — not actual exam scores.
Top rankings are visible only within your district by default."

FRIEND LEADERBOARD:
"Compare with friends — share your referral code to create a private group"

EMPTY STATE: "No data yet — start studying to appear on the leaderboard!"
```

---

### Screen 26 — Mentorship: Mentor List

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Mentorship — Mentor Listing/Browse screen.

HEADER:
- "Mentorship / मार्गदर्शन"
- Search bar: "Search by name, exam, subject…"
- Filter row (scrollable chips): All Exams | UPSC | SSC | Banking | NEET | JEE
  Language filter: Hindi | English | Tamil | …

MENTOR CARDS (vertical list):
Each card:
- Profile photo (50×50, circular, lazy-loaded) or initials avatar
- Name (first name + credential badge: ✅ Verified)
- Credential: "IAS 2019 | AIR 23 | Maharashtra Cadre"
- Subjects/Exams: chips (UPSC GS, Ethics, Essay)
- Languages: "Hindi, English, Marathi"
- Rating: ⭐ 4.8 (124 sessions)
- Next available: "Tomorrow, 4 PM"
- CTA: "Book Free Session" (primary, small)

FILTER/SORT:
- Sort by: Rating | Availability | Language
- Availability toggle: "Show Only Available Today"

FREE QUOTA INDICATOR (top of page):
"You have 2 free sessions remaining this month.
Sessions are 30 minutes and completely free."

EMPTY STATE (no mentors match filter):
"No mentors available for this filter. Check back soon — we're adding more!"
```

---

### Screen 27 — Mentorship: Booking & Session

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Mentorship Booking and Session screen.

STATE 1 — Slot Selection:
- Mentor profile card (compact: photo, name, credential)
- Calendar week view (7 days horizontal)
- Available time slots as chips per selected day
- "30-minute session · Free (1 of 2 monthly sessions)"
- "Topic for session" text input (optional, 200 char max)
- CTA: "Confirm Booking"

STATE 2 — Booking Confirmed:
- ✅ Success illustration
- Session details: Date, time, mentor name
- "Add to Calendar" button
- "Join via WhatsApp" / "Join via In-app Call" options
- "Cancel Booking" link (up to 1hr before session)

STATE 3 — Live Session:
- In-app audio/video call (WebRTC)
- Simple: video, mute, speaker, end call
- Session timer countdown (30 min)
- "Share Screen" option (for showing a problem)
- In-session notes (student can type, auto-saved)
- "10 minutes remaining" gentle notification

STATE 4 — Post-Session Rating:
- ⭐ 1–5 star rating
- Optional text feedback (150 char)
- "Would you recommend this mentor?" (Yes/No)
- "Book another session with [Mentor Name]"
- CTA: "Done — Back to Dashboard"
```

---

### Screen 28 — Profile & Settings

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Profile and Settings screen.

PROFILE SECTION:
- Profile photo (editable, circular, 80×80)
- Full name (editable)
- Masked Aadhaar: XXXX XXXX 1234
- Registered mobile (partial): +91 98XXXX7890
- Exam goal(s): chips (editable)
- Target year: dropdown

SETTINGS SECTIONS (accordion groups):

📚 Learning Preferences:
- Primary language selector
- Video quality default (Auto / Data Saver / HD)
- Notification preferences (class reminders, streak alerts, result alerts)

📥 Downloads:
- Storage used: progress bar
- Download quality (144p / 360p / 720p)
- Auto-download today's class slides: toggle
- "Manage Downloads →" (→ Screen 15)

🔒 Account & Security:
- Linked devices list (with "Remove device" option)
- Active sessions list
- "Log out of all devices"
- "Log out" button

⚖ Privacy & Data (DPDP Act 2023):
- "Download My Data" — generates and emails data export
- "Delete My Account" — 30-day grace period, full data erasure
- "Consent Management" — view and revoke consents

❓ Help & About:
- "Help & FAQ →"
- "Report a Problem →"
- "Privacy Policy →"
- "Terms of Use →"
- "About ParikshaSetu"
- App version: "v2.1.4 | NIC MeghRaj | CERT-In Certified"

LOG OUT button (prominent, at bottom, destructive styling).
```

---

## PART B — GOVERNMENT / MINISTRY SCREENS (12 Screens)

---

### Screen 29 — Ministry Login

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Ministry / Government Officer Login screen.

This screen is for Ministry of Education officers, state officials, and
content moderators — NOT students.

HEADER:
- Ministry of Education seal + "ParikshaSetu — Ministry Portal"
- "Restricted Access / प्रतिबंधित पहुँच" badge

AUTH OPTIONS (tabs):
1. NIC Email / Government SSO:
   - Email input (gov.in / nic.in domain enforced)
   - Password input + show/hide
   - "Login with NIC SSO →" (OAuth redirect)

2. Aadhaar + OTP:
   - Same as student login but with role validation post-auth

ROLE SELECTION (post-auth, if user has multiple roles):
Dropdown: National Admin | State Admin | District Viewer |
         Content Moderator | Report Viewer | Technical Admin

SECURITY FEATURES:
- Full audit logging: every login attempt logged with IP, timestamp, role
- Failed login lockout: 5 attempts → 15-minute lockout
- Session timeout: 4 hours idle
- "Remember this device for 30 days" — requires MFA confirmation

VISUAL DIFFERENCE FROM STUDENT LOGIN:
- Darker, more formal colour scheme (deep navy + white)
- Government seal prominently displayed
- No onboarding, no "Free" messaging

FOOTER: "For technical issues, contact NIC helpdesk: helpdesk@nic.in"
```

---

### Screen 30 — National Dashboard: Overview

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Ministry National Dashboard Overview — the main command centre for
government officers.

This screen should convey national reach and impact at a glance.

TOP BAR:
- "National Dashboard / राष्ट्रीय डैशबोर्ड"
- Role indicator: "Logged in as: National Admin — [Name]"
- Date/time range filter: Today | 7 Days | 30 Days | Custom
- "Export" button: → PDF (Parliamentary format) | Excel | CSV
- Auto-refresh toggle: "Auto-refresh: ON (30s)"

KEY METRIC CARDS (grid of 6, large numbers):
1. 📊 Total Registered Students: "2,34,18,456"
2. 👥 Daily Active Users (DAU): "18,45,200"
3. 📺 Live Viewers Right Now: "4,23,100" (live, pulsing)
4. 🎬 Videos Watched Today: "87,34,200"
5. ✏ Mock Tests Completed: "12,40,000"
6. 💰 Estimated Family Savings: "₹ 2,340 Crore" (vs. private coaching cost)

INDIA HEAT MAP:
- SVG India map, states colour-coded by user density
- Colour scale: light blue (low) → deep blue (high)
- Hover/tap state → shows state name + key metric

EXAM-WISE BREAKDOWN (horizontal bar chart):
SSC | Banking | Railway | UPSC | NEET | JEE | State PSC — by registered students

TOP PERFORMING STATES table (top 10 by engagement):
State | Registered | DAU | % Active | Rank

BOTTOM: "Last updated: 2 minutes ago | Data hosted on NIC MeghRaj | CERT-In Certified"
```

---

### Screen 31 — National Dashboard: Map Deep Dive

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the interactive Map Deep Dive screen for state and district drill-down.

FULL-SCREEN INDIA MAP (SVG, interactive):
- States clickable/tappable
- Hover state: highlight + tooltip showing:
  State name | Students: 12,34,000 | DAU: 2,34,000 | Engagement: 72%
- Colour mode toggle: Users | Engagement | Growth | Drop-off

SIDE PANEL (slides in on state click):
State name + flag/seal (if available)
Metrics:
- Registered students
- DAU, WAU, MAU
- Top exam in this state
- Engagement rate vs national average (comparison bar)
- Top 5 districts table

DISTRICT DRILL-DOWN (click district in side panel):
- Sub-panel opens showing district-level data
- District map (SVG) if available, else table
- Village/block level data (if available)

COMPARE MODE:
"Compare states" button → select 2 states → side-by-side metric comparison

EXPORT: "Export State Report" → PDF with official letterhead for selected state.

FILTERS (top):
- Exam filter
- Date range
- Metric: Users | Engagement | Completion | Drop-off
```

---

### Screen 32 — State / District Analytics

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the State and District Analytics deep-dive screen.

HEADER:
- Breadcrumb: National → Maharashtra → Pune
- "Maharashtra Analytics / महाराष्ट्र विश्लेषण"
- Date range filter

OVERVIEW CARDS (same as national but state-filtered):
Registered | DAU | Active Rate | Videos | Mocks | Savings

PARTICIPATION SECTION:
- Line chart: daily active users over time (30/90/180 days)
- Growth rate: "+12.4% MoM"
- Comparison: "Maharashtra: 74% active rate vs National avg: 61%"

TOP EXAMS IN STATE (horizontal bar):
Railway RRB (42%) | SSC (28%) | NEET (14%) | …

DISTRICT RANKINGS TABLE:
| Rank | District | Students | Active % | Top Exam |
| 1 | Pune | 2,34,000 | 81% | SSC |
| 2 | Mumbai | 1,98,000 | 76% | Banking |
…

DROP-OFF ANALYSIS (funnel chart):
Registered → Completed Diagnostic → Watched 1 Video → Completed Mock →
"Drop-off: 34% leave after registration — suggest onboarding improvement"

GENDER BREAKDOWN (pie chart, if data available):
Male / Female / Other / Not specified

TOP PERFORMING SCHOOLS/DISTRICTS: table

ALERTS: "⚠ Chhattisgarh: DAU dropped 15% this week — check server status"

EXPORT: Full PDF report for this state/district.
```

---

### Screen 33 — Content Management: Upload

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Content Management — Upload screen for government content team.

HEADER: "Upload Content / सामग्री अपलोड करें"

CONTENT TYPE SELECTOR (tabs):
Video | PDF Notes | Question Set | Live Class | Announcement

UPLOAD FORM (for Video):
- Drag-and-drop zone + "Browse Files" button
- Supported formats: MP4, MOV, MKV | Max size: 4GB
- Upload progress bar with speed + ETA

METADATA FORM (required before publish):
- Title (Hindi + English fields)
- Exam: dropdown (multi-select)
- Subject: dropdown
- Chapter: dropdown (or create new)
- Language versions: upload Hindi + regional language versions
- Teacher/Creator: dropdown (verified teacher list)
- Thumbnail: upload or auto-generate from video
- Tags: free text + suggested tags
- Difficulty: Easy | Medium | Hard
- Duration (auto-detected from file)

QUALITY CHECKLIST (mandatory, checkboxes):
☐ Audio quality verified
☐ Video is free of errors
☐ Correct subject/chapter assigned
☐ Hindi subtitles uploaded
☐ Content reviewed for accuracy
☐ No third-party copyright material

APPROVAL WORKFLOW:
After upload → Status: "Pending Review"
→ Reviewer assigned from list
→ Reviewer approves → "Pending Publish"
→ Content Admin publishes → "Live"

VERSION HISTORY:
Each content item tracks all versions, reviewer, approval date, publisher.
```

---

### Screen 34 — Content Management: Live Class Scheduler

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Live Class Scheduler for government content/operations team.

CALENDAR VIEW:
- Full-month calendar with existing classes shown as event blocks
- Week view (default) | Month view | Day view
- Colour-coded by exam (SSC=blue, Banking=green, Railway=orange…)

SCHEDULE NEW CLASS (modal/side panel on clicking time slot):
Fields:
- Class Title (Hindi + English)
- Exam: dropdown
- Subject: dropdown
- Chapter/Topic: text input
- Teacher/Instructor: dropdown (verified list with availability shown)
- Date + Start Time + Duration
- Language: dropdown (primary language of class)
- Expected audience estimate (for capacity planning)
- "Broadcast to Feature Phone": toggle → triggers SMS/IVR setup
- Thumbnail + promotional banner upload

RECURRING SCHEDULE:
- Daily | Weekly (select days) | Custom
- "Copy from last week's schedule" shortcut

STUDENT-FACING PREVIEW:
"Preview how this will appear to students on their timetable"

PUBLISH → appears on student timetable (Screen 16) immediately.

TEACHER NOTIFICATION: Auto-send confirmation to teacher's registered email/SMS.

CAPACITY PLANNING ALERT:
"This time slot has [18 lakh] students in target exam. Ensure CDN capacity."
```

---

### Screen 35 — Parliamentary Report Generator

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Parliamentary Report Generator — one-click official report creation.

HEADER: "Parliamentary Report Generator / संसदीय रिपोर्ट जनरेटर"

REPORT CONFIGURATION:
- Report Period: From Date → To Date (date pickers)
- Report Type: Monthly | Quarterly | Annual | Custom
- Scope: National | State (dropdown) | Multi-state
- Sections to include (all checked by default):
  ☑ Executive Summary
  ☑ Registration and Growth
  ☑ Daily Active Users and Engagement
  ☑ Content Consumed (Videos, Mocks, Doubts)
  ☑ Live Class Participation
  ☑ Exam-wise Coverage
  ☑ State-wise Performance
  ☑ Estimated Economic Savings (vs. private coaching costs)
  ☑ Success Indicators (toppers using platform)
  ☑ Technical Infrastructure Report
  ☑ Future Roadmap Progress

GENERATE BUTTON (prominent, primary):
"Generate Report / रिपोर्ट तैयार करें"
→ Shows progress spinner: "Generating PDF… (~15 seconds)"

REPORT PREVIEW (PDF viewer inline):
- Official Ministry of Education letterhead
- India Government emblem
- Data visualisations (charts, maps) embedded
- Tables formatted for parliamentary standards
- Bilingual: Hindi and English side by side

ACTIONS:
- "Download PDF" (button, primary)
- "Download Excel Annexures" (raw data tables)
- "Email to [recipients list]" — pre-set ministry distribution list
- "Print Official Copy"

REPORT HISTORY: Last 12 generated reports listed with date + download link.
```

---

### Screen 36 — User Support & Grievance Dashboard

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the User Support and Grievance Monitoring Dashboard for Ministry team.

METRICS SUMMARY BAR:
- Total Tickets (today): 2,340
- AI Resolved: 1,876 (80%) | Human Resolved: 312 (13%) | Open: 152 (7%)
- Avg Resolution Time: AI: 45 sec | Human: 4.2 hours
- SLA Breach: 12 tickets (⚠ alert)

TICKET LIST (filterable):
Columns: Ticket ID | Student State | Category | Status | Created | Priority | Assigned to

FILTERS:
- Status: Open | In Progress | AI Resolved | Human Resolved | Escalated
- Category: Login | Video | Payment (n/a) | Technical | Content | Other
- Priority: High | Medium | Low
- Date range filter

TICKET DETAIL VIEW (side panel):
- Student ID (anonymised) + state
- Issue description
- Conversation history (AI + human replies)
- "Assign to agent" button
- "Escalate" button + escalation matrix:
  L1 (Agent) → L2 (State Admin) → L3 (Ministry Officer) → L4 (Minister's Office)
- Reply box (for human response)
- "Mark Resolved"

SYSTEMIC ISSUE DETECTION:
AI-flagged banner: "📊 50+ tickets about video buffering in Bihar today — possible
CDN issue. [Check System Health]"

EXPORT: Download ticket report as CSV/Excel.
```

---

### Screen 37 — System Health Monitoring

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Technical Operations / System Health Dashboard.

HEADER: "System Health / सिस्टम स्वास्थ्य"
Last refreshed: 30 seconds ago | Auto-refresh: ON

GLOBAL STATUS BAR:
🟢 All Systems Operational | 🟡 Degraded Performance | 🔴 Outage
(large, colour-coded, top of page)

SERVICE STATUS GRID (cards per service):
- API Servers: ✅ Uptime 99.97% | Response: 124ms avg
- Video CDN (NIC): ✅ 98.2% cache hit rate | Bandwidth: 2.4 Tbps
- Live Streaming: ✅ 4.1 lakh concurrent | Latency: 3.2s avg
- AI Doubt Solver: ✅ 98ms response | Queue: 43 pending
- Database (MeghRaj): ✅ Replication lag: 12ms
- SMS Gateway: 🟡 Delivery rate: 91% (below 95% threshold)
- Authentication (UIDAI): ✅ OTP success rate: 99.1%
- Offline Sync: ✅ 1.2 crore syncs/day

REAL-TIME CHARTS:
- Concurrent users: live line chart (last 1 hour)
- API error rate: last 24 hours, threshold line at 1%
- CDN bandwidth: last 24 hours

CAPACITY GRAPHS:
- Storage used / allocated (NIC MeghRaj)
- Database size growth projection
- Bandwidth consumption vs. quota

ALERTS SECTION:
Active alerts with severity | Timestamp | Affected service | On-call engineer

INCIDENT LOG (last 30 days):
Date | Duration | Affected service | Root cause | Students impacted | RCA link
```

---

### Screen 38 — Security & Compliance Monitor

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Security and Compliance Monitoring Dashboard.

HEADER: "Security & Compliance / सुरक्षा और अनुपालन"

COMPLIANCE STATUS CARDS:
1. 🛡 CERT-In Compliance: ✅ "Last audit: 14 Aug 2026 — No critical findings"
2. 🔏 DPDP Act 2023: ✅ "Consent collected: 2.34 Cr | Deletion requests: 234 (all processed)"
3. 🏛 NeSDA Score: ✅ "Score: 4.2 / 5.0 (last assessment: Q2 2026)"
4. 🗄 Data Residency: ✅ "100% data on NIC MeghRaj | 0 external transfers detected"
5. 🔐 Aadhaar API Compliance: ✅ "UIDAI audit: Compliant"

SECURITY SCAN RESULTS:
- Last vulnerability scan: 2 days ago
- Critical: 0 | High: 0 | Medium: 3 (in remediation) | Low: 12
- Penetration test: ✅ Q1 2026 — Next scheduled: Q3 2026

DPDP METRICS SECTION:
- Consent collection rate: 99.8%
- Data deletion requests pending: 2 (SLA: 72 hours)
- Data portability requests pending: 0
- Consent withdrawal requests today: 12

ACCESS LOG SUMMARY:
- Ministry admin logins today: 47
- Failed logins (blocked): 3
- Suspicious IPs flagged: 0
- Data export actions by admins: 8 (audit trail linked)

SECURITY ALERTS (SIEM integration):
- Active alerts: none
- "No anomalous behaviour detected in last 24 hours"

AUDIT TRAIL EXPORT:
"Download Access Log (last 90 days)" → encrypted CSV for Ministry records
```

---

### Screen 39 — Role & Access Management

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Role and Access Management screen for National Admin.

HEADER: "User & Role Management / उपयोगकर्ता और भूमिका प्रबंधन"

ROLES OVERVIEW TABLE:
| Role | Description | User Count | Permissions |
|------|-------------|------------|-------------|
| National Admin | Full access | 8 | All |
| State Admin | State-level access | 36 | State data, CMS, reports |
| District Viewer | Read-only district data | 720 | View only |
| Content Moderator | Upload/approve content | 45 | CMS only |
| Report Viewer | Download reports only | 120 | Reports only |
| Technical Admin | System health, security | 5 | Technical dashboards |
"Edit Role Permissions" button for each row.

USER LIST:
Search by name / email / role
Table: Name | Email | Role | State | Last Login | Status (Active/Inactive)

USER DETAIL / EDIT (modal):
- Name, Government Email, Role, State (if applicable)
- Activate / Deactivate toggle
- Reset Password (sends reset link to gov email)
- "View Activity Log" — all actions this user took

CREATE NEW USER:
- Name + Gov email + Role + State
- Auto-sends welcome email with temp password via NIC email system

FULL AUDIT LOG (tab):
All role changes, user creations, deactivations — with timestamp, changed by, reason.
Export as PDF/CSV.

PRINCIPLE OF LEAST PRIVILEGE: Role descriptions clearly state minimum permissions.
National Admin is the only role that can create other National Admins.
```

---

### Screen 40 — Notification & Broadcast Centre

**Prompt:**
```
[INJECT GLOBAL MASTER PROMPT]

Build the Notification and Broadcast Centre for Ministry operations team.

HEADER: "Notifications & Broadcasts / सूचनाएं और प्रसारण"

COMPOSE NEW NOTIFICATION:

Channel selection (multi-select):
☑ In-App Push Notification | ☑ SMS | ☐ Email | ☐ WhatsApp (if integrated)

TARGETING:
- Scope: All Students | By State (multi-select) | By Exam (multi-select) |
  By Language | By Engagement (active/inactive/all)
- Estimated reach counter: "~42,00,000 students will receive this"

MESSAGE COMPOSER:
- Language tabs: Hindi (primary) | English | [Regional]
- Title: (60 char max)
- Body: (160 char for SMS | 500 char for push)
- Deep link (for push): select where app opens on tap
- SMS: plain text only, no rich formatting
- Push: rich (icon, image, action buttons configurable)

SCHEDULE:
- Send Now | Schedule: date + time picker
- "Best time to send" AI suggestion: "Students most active at 7–9 PM"

PREVIEW:
- Push notification preview (phone mockup)
- SMS preview (character count, multi-SMS warning)

SEND button → Confirm modal with reach count → Send

DELIVERY REPORT (for sent notifications):
- Sent: 42,00,000 | Delivered: 41,23,456 (98.2%) | Opened: 18,45,000 (44.8%)
- SMS delivery rate | Failed: breakdown by reason

NOTIFICATION HISTORY:
List of all past notifications with title, date, reach, open rate.
Filter by type / date / sender.
```

---

## CROSS-CUTTING STATES (Apply to All Screens)

### Universal State Prompts

```
For EVERY screen above, also implement these cross-cutting UI states:

LOADING STATE:
- Skeleton screens (shimmer animation) that match the actual content layout
- Never show a spinning circle alone — always show content-shaped skeletons
- Loading must not block critical cached content from rendering

EMPTY STATE:
- Friendly illustration (SVG, themed to the screen context)
- Encouraging headline (never plain "No data" or "Nothing here")
- Clear CTA for next action
- Example: Empty Practice → "Ready to practice? Start with SSC questions →"

ERROR / NO INTERNET STATE:
- Offline-aware illustration (cloud with X / broken WiFi)
- "You're offline" message + what's available offline
- "Retry" button for network errors
- Never show raw error codes to students

PERMISSION DENIED STATE:
- Clear explanation of why access is denied (role-based for Ministry screens)
- Contact/escalation path shown

SUCCESS / CONFIRMATION MODAL:
- Green checkmark animation (CSS)
- Clear confirmation of what was done
- Next step CTA
- Auto-dismiss after 3 seconds or on tap

BLOCKING MODALS:
- NEVER use blocking modals for non-critical information
- Confirmations for destructive actions only (delete, logout)
- All modals dismissible with back button / ESC key

NEVER USE:
- Blank white screens during loading
- Alert() dialogs
- Blocking popups for upsell/marketing
- "Loading..." text without visual skeleton
- Generic "An error occurred" without actionable next steps
```

---

## DEVELOPMENT PRIORITY ORDER

| Phase | Months | Screens | Goal |
|-------|--------|---------|------|
| **Phase 1** | 1–3 | 1–11, 12–15, 19–21, 28 | Core learning loop — register, diagnose, study, practice |
| **Phase 2** | 4–6 | 16–18, 22–25, 26–27 | Live classes, AI doubt solving, gamification, mentorship |
| **Phase 3** | 7–9 | 29–35 | Government dashboards, CMS, Parliamentary reports |
| **Phase 4** | 10–12 | 36–40 + all empty/error states | Grievance, security, role management, full polish |

---

## TECH STACK RECOMMENDATIONS

```
FRONTEND:
- Framework: React (PWA) + React Native (Android app, same codebase)
- Styling: Tailwind CSS with custom government design tokens
- Fonts: Noto Sans (all scripts, self-hosted on NIC servers)
- Video: HLS.js for live classes, HTML5 video for recorded
- Offline: Workbox (service workers), IndexedDB for local data
- i18n: i18next with JSON language files (externalised)
- Charts: Recharts or D3.js (lightweight build)
- Maps: D3-geo with SVG India map (self-hosted, no Google Maps API)
- Math: KaTeX (for formulae in doubts and practice questions)

BACKEND (all on NIC MeghRaj):
- API: Node.js or Go (RESTful + GraphQL for dashboard)
- Auth: UIDAI Aadhaar API + JWT sessions
- Database: PostgreSQL + Redis cache
- Video: NIC CDN + FFmpeg transcoding pipeline
- AI/ML: Self-hosted LLM on NIC GPU infrastructure
- SMS: NIC SMS gateway / BSNL gateway
- Search: Elasticsearch (self-hosted)

PERFORMANCE TARGETS:
- First Contentful Paint: < 1.5s on 4G, < 3s on 2G
- Lighthouse Performance Score: > 90 (mobile)
- Bundle size: < 300KB gzipped (initial load)
- Offline: 100% core functionality without network
```

---

## DESIGN TOKENS

```
/* ParikshaSetu Design System */

/* Colours */
--color-primary: #0033A0;        /* India Blue */
--color-secondary: #FF6600;      /* Saffron */
--color-success: #138808;        /* India Green */
--color-warning: #FFA500;        /* Amber */
--color-error: #CC0000;          /* Red */
--color-background: #F5F5F5;     /* Light Grey */
--color-surface: #FFFFFF;        /* White */
--color-text-primary: #1A1A1A;   /* Near Black */
--color-text-secondary: #666666; /* Medium Grey */

/* Typography */
--font-family: 'Noto Sans', sans-serif;
--font-size-xs: 12sp;
--font-size-sm: 14sp;
--font-size-md: 16sp;
--font-size-lg: 18sp;
--font-size-xl: 22sp;
--font-size-2xl: 28sp;

/* Spacing */
--spacing-xs: 4dp;
--spacing-sm: 8dp;
--spacing-md: 16dp;
--spacing-lg: 24dp;
--spacing-xl: 32dp;

/* Touch Targets */
--touch-target-min: 48dp;        /* WCAG 2.1 AA minimum */

/* Elevation (Android Material-style) */
--elevation-card: 2dp;
--elevation-modal: 8dp;
--elevation-bottom-nav: 4dp;

/* Border Radius */
--radius-sm: 4dp;
--radius-md: 8dp;
--radius-lg: 16dp;
--radius-pill: 100dp;
```

---

*ParikshaSetu — Full UI Master Prompt Document | Version 2.0 | August 2026*
*Confidential — Ministry of Education, Government of India*
*All data and infrastructure: NIC MeghRaj | CERT-In Certified | DPDP Act 2023 Compliant*
