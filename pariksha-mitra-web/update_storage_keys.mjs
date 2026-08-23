import fs from 'fs';

const files = [
  'src/layouts/AppLayout.tsx',
  'src/pages/StudentDashboard.tsx',
  'src/pages/StudentProfile.tsx',
  'src/pages/LoginPage.tsx',
  'src/pages/RegisterPage.tsx',
  'src/pages/LandingPage.tsx',
  'src/pages/SettingsPage.tsx',
  'src/pages/DiagnosticAssessment.tsx',
  'src/pages/BrowseMentors.tsx',
  'src/pages/SyllabusPage.tsx',
  'src/data/mentorsData.ts'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace storage keys with fallback
  content = content.replace(/localStorage\.getItem\('pariksha_mitra_user'\)/g, "(localStorage.getItem('parikshasetu_user') || localStorage.getItem('pariksha_mitra_user'))");
  content = content.replace(/localStorage\.setItem\('pariksha_mitra_user'/g, "localStorage.setItem('parikshasetu_user'");
  content = content.replace(/localStorage\.setItem\('pariksha_mitra_logged_in'/g, "localStorage.setItem('parikshasetu_logged_in'");
  content = content.replace(/localStorage\.getItem\('pariksha_mitra_logged_in'\)/g, "(localStorage.getItem('parikshasetu_logged_in') || localStorage.getItem('pariksha_mitra_logged_in'))");
  content = content.replace(/localStorage\.removeItem\('pariksha_mitra_logged_in'\)/g, "localStorage.removeItem('parikshasetu_logged_in'); localStorage.removeItem('pariksha_mitra_logged_in')");

  // Replace remaining text
  content = content.replaceAll('Pariksha Mitra', 'ParikshaSetu');
  content = content.replaceAll('Pariksha-Mitra', 'ParikshaSetu');
  content = content.replaceAll('ParikshaMitra', 'ParikshaSetu');
  content = content.replaceAll('परीक्षा मित्रा', 'परीक्षा सेतु');
  content = content.replaceAll('परीक्षा मित्र', 'परीक्षा सेतु');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated storage and brand in: ${file}`);
  }
});
