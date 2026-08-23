import fs from 'fs';
import path from 'path';

const filesToSearch = [
  'index.html',
  'package.json',
  'src/components/ParikshaMitraLogo.tsx',
  'src/components/FloatingVoiceAssistant.tsx',
  'src/context/UserContext.tsx',
  'src/data/mentorsData.ts',
  'src/layouts/AppLayout.tsx',
  'src/layouts/AppLayout.css',
  'src/layouts/MinistryLayout.tsx',
  'src/pages/LandingPage.tsx',
  'src/pages/LandingPage.css',
  'src/pages/LoginPage.tsx',
  'src/pages/RegisterPage.tsx',
  'src/pages/MinistryLogin.tsx',
  'src/pages/StudentDashboard.tsx',
  'src/pages/StudentProfile.tsx',
  'src/pages/BookMentor.tsx',
  'src/pages/BrowseMentors.tsx',
  'src/pages/DiagnosticAssessment.tsx',
  'src/pages/MentorSession.tsx',
  'src/pages/MockTestEngine.tsx',
  'src/pages/OnboardingPage.tsx',
  'src/pages/ParentDashboard.tsx',
  'src/pages/ParliamentaryReports.tsx',
  'src/pages/SchoolIntegration.tsx',
  'src/pages/SchoolOnboarding.tsx',
  'src/pages/SettingsPage.tsx',
  'src/pages/SyllabusPage.tsx',
  'src/pages/VideoPlayer.tsx',
  'src/pages/WhatsAppBot.tsx',
  'src/pages/VoiceAssistant.tsx',
  'src/pages/AnswerWriting.tsx',
  'src/pages/CareerGuidance.tsx',
  'src/pages/CurrentAffairs.tsx',
  'src/pages/ExamPredictor.tsx',
  'src/pages/StudyPlanner.tsx',
  'src/pages/UMANGIntegration.tsx',
  'src/styles/components.css',
  'src/styles/theme.css'
];

let totalReplacements = 0;

filesToSearch.forEach(relPath => {
  if (!fs.existsSync(relPath)) return;
  let content = fs.readFileSync(relPath, 'utf8');
  let original = content;

  // Replacements
  content = content.replaceAll('Pariksha Mitra', 'ParikshaSetu');
  content = content.replaceAll('Pariksha-Mitra', 'ParikshaSetu');
  content = content.replaceAll('ParikshaMitra', 'ParikshaSetu');
  content = content.replaceAll('परीक्षा मित्रा', 'परीक्षा सेतु');
  content = content.replaceAll('परीक्षा मित्र', 'परीक्षा सेतु');
  content = content.replaceAll('पारीक्षा मित्रा', 'परीक्षा सेतु');
  content = content.replaceAll('पारीक्षा मित्र', 'परीक्षा सेतु');

  if (content !== original) {
    fs.writeFileSync(relPath, content, 'utf8');
    totalReplacements++;
    console.log(`Updated: ${relPath}`);
  }
});

console.log(`Successfully renamed application to ParikshaSetu in ${totalReplacements} files!`);
