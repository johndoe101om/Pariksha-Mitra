import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Context
import { UserProvider } from './context/UserContext';
import { ToastProvider } from './context/ToastContext';

// Layouts
import AppLayout from './layouts/AppLayout';
import MinistryLayout from './layouts/MinistryLayout';

// Public Pages
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';

// Student Pages
import OnboardingPage from './pages/OnboardingPage';
import LoginPage from './pages/LoginPage';
import { StudentDashboard } from './pages/StudentDashboard';
import DiagnosticAssessment from './pages/DiagnosticAssessment';
import DiagnosticResult from './pages/DiagnosticResult';
import VideoLibrary from './pages/VideoLibrary';
import VideoPlayer from './pages/VideoPlayer';
import PracticeHub from './pages/PracticeHub';
import PracticeResult from './pages/PracticeResult';
import MockTestHub from './pages/MockTestHub';
import MockTestEngine from './pages/MockTestEngine';
import MockTestResult from './pages/MockTestResult';
import AIDoubtSolver from './pages/AIDoubtSolver';
import DoubtHistory from './pages/DoubtHistory';
import BrowseMentors from './pages/BrowseMentors';
import BookMentor from './pages/BookMentor';
import MentorSession from './pages/MentorSession';
import Leaderboard from './pages/Leaderboard';
import StudentProfile from './pages/StudentProfile';
import SettingsPage from './pages/SettingsPage';
import SyllabusPage from './pages/SyllabusPage';

// New Feature: Tier 1 — Government Show-Stoppers
import ExamPredictor from './pages/ExamPredictor';
import WhatsAppBot from './pages/WhatsAppBot';
import SchoolIntegration from './pages/SchoolIntegration';
import SchoolOnboarding from './pages/SchoolOnboarding';
import VoiceAssistant from './pages/VoiceAssistant';
import UMANGIntegration from './pages/UMANGIntegration';

// New Feature: Tier 2 — Student Success Multipliers
import StudyGroups from './pages/StudyGroups';
import StudyPlanner from './pages/StudyPlanner';
import CurrentAffairs from './pages/CurrentAffairs';
import AnswerWriting from './pages/AnswerWriting';
import CareerGuidance from './pages/CareerGuidance';

// New Feature: Tier 3 — Government Analytics & Policy
import AccessibilitySuite from './pages/AccessibilitySuite';
import OfflineHub from './pages/OfflineHub';
import ScholarshipHub from './pages/ScholarshipHub';

// New Feature: Tier 4 — Futuristic Features
import InterviewSimulator from './pages/InterviewSimulator';
import StudyNearMe from './pages/StudyNearMe';
import ParentDashboard from './pages/ParentDashboard';

// Ministry Pages
import MinistryLogin from './pages/MinistryLogin';
import MinistryDashboard from './pages/MinistryDashboard';
import StateAnalytics from './pages/StateAnalytics';
import MapDeepDive from './pages/MapDeepDive';
import ContentManagement from './pages/ContentManagement';
import LiveClassScheduler from './pages/LiveClassScheduler';
import BroadcastCenter from './pages/BroadcastCenter';
import ParliamentaryReports from './pages/ParliamentaryReports';
import GrievanceDashboard from './pages/GrievanceDashboard';

// New Feature: Ministry Analytics Screens
import TalentMap from './pages/TalentMap';
import BotAnalytics from './pages/BotAnalytics';
import ConstituencyDashboard from './pages/ConstituencyDashboard';
import OpenDataPortal from './pages/OpenDataPortal';

function App() {
  return (
    <UserProvider>
      <ToastProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Full screen student routes */}
            <Route path="/mock-tests/:id" element={<MockTestEngine />} />
            <Route path="/mentors/session/:id" element={<MentorSession />} />

            {/* Student App Layout Routes */}
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<StudentDashboard />} />
              <Route path="/diagnostic" element={<DiagnosticAssessment />} />
              <Route path="/diagnostic/result" element={<DiagnosticResult />} />
              <Route path="/videos" element={<VideoLibrary />} />
              <Route path="/videos/:id" element={<VideoPlayer />} />
              <Route path="/practice" element={<PracticeHub />} />
              <Route path="/practice/result" element={<PracticeResult />} />
              <Route path="/mock-tests" element={<MockTestHub />} />
              <Route path="/mock-tests/:id/result" element={<MockTestResult />} />
              <Route path="/doubt-solver" element={<AIDoubtSolver />} />
              <Route path="/doubt-history" element={<DoubtHistory />} />
              <Route path="/mentors" element={<BrowseMentors />} />
              <Route path="/mentors/:id/book" element={<BookMentor />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<StudentProfile />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/syllabus" element={<SyllabusPage />} />

              {/* New Feature Routes — Tier 1: Government Show-Stoppers */}
              <Route path="/exam-predictor" element={<ExamPredictor />} />
              <Route path="/whatsapp-bot" element={<WhatsAppBot />} />
              <Route path="/school" element={<SchoolIntegration />} />
              <Route path="/school/onboarding" element={<SchoolOnboarding />} />
              <Route path="/voice-assistant" element={<VoiceAssistant />} />
              <Route path="/umang" element={<UMANGIntegration />} />

              {/* New Feature Routes — Tier 2: Student Success Multipliers */}
              <Route path="/study-groups" element={<StudyGroups />} />
              <Route path="/study-planner" element={<StudyPlanner />} />
              <Route path="/current-affairs" element={<CurrentAffairs />} />
              <Route path="/answer-writing" element={<AnswerWriting />} />
              <Route path="/career-guidance" element={<CareerGuidance />} />

              {/* New Feature Routes — Tier 3: Accessibility & Offline */}
              <Route path="/accessibility" element={<AccessibilitySuite />} />
              <Route path="/offline-hub" element={<OfflineHub />} />
              <Route path="/scholarships" element={<ScholarshipHub />} />

              {/* New Feature Routes — Tier 4: Futuristic Features */}
              <Route path="/interview-simulator" element={<InterviewSimulator />} />
              <Route path="/study-near-me" element={<StudyNearMe />} />
              <Route path="/parent-dashboard" element={<ParentDashboard />} />
            </Route>

            {/* Ministry Full Screen */}
            <Route path="/ministry/login" element={<MinistryLogin />} />

            {/* Ministry Layout Routes */}
            <Route path="/ministry" element={<MinistryLayout />}>
              <Route path="dashboard" element={<MinistryDashboard />} />
              <Route path="analytics" element={<StateAnalytics />} />
              <Route path="map" element={<MapDeepDive />} />
              <Route path="content" element={<ContentManagement />} />
              <Route path="live-scheduler" element={<LiveClassScheduler />} />
              <Route path="notifications" element={<BroadcastCenter />} />
              <Route path="reports" element={<ParliamentaryReports />} />
              <Route path="support" element={<GrievanceDashboard />} />

              {/* New Ministry Feature Routes */}
              <Route path="talent-map" element={<TalentMap />} />
              <Route path="bot-analytics" element={<BotAnalytics />} />
              <Route path="constituency" element={<ConstituencyDashboard />} />
              <Route path="open-data" element={<OpenDataPortal />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </UserProvider>
  );
}

export default App;
