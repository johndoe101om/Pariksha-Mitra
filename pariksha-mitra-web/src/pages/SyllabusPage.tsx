import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  PlayCircle, 
  PenTool, 
  Sparkles, 
  Download, 
  Clock, 
  Award, 
  Layers, 
  Check, 
  ExternalLink,
  SlidersHorizontal,
  Bot
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import './SyllabusPage.css';

interface Topic {
  id: string;
  name: string;
  nameHi?: string;
  completed: boolean;
  hours: number;
  weightage: string;
}

interface Subject {
  id: string;
  title: string;
  titleHi: string;
  icon: string;
  totalHours: number;
  weightage: string;
  questionCount: number;
  topics: Topic[];
}

interface ExamSyllabus {
  id: string;
  name: string;
  nameHi: string;
  badge: string;
  totalMarks: number;
  duration: string;
  stages: {
    id: string;
    name: string;
    subjects: Subject[];
  }[];
}

const SYLLABUS_DATABASE: ExamSyllabus[] = [
  {
    id: 'upsc',
    name: 'UPSC Civil Services (IAS / IPS)',
    nameHi: 'संघ लोक सेवा आयोग सिविल सेवा परीक्षा',
    badge: 'National Prestige',
    totalMarks: 2025,
    duration: '3 Stages • 1 Year Cycle',
    stages: [
      {
        id: 'prelims',
        name: 'Stage 1: Preliminary Exam (GS 1 + CSAT)',
        subjects: [
          {
            id: 'polity',
            title: 'Indian Polity & Governance',
            titleHi: 'भारतीय राजव्यवस्था और शासन',
            icon: '🏛️',
            totalHours: 42,
            weightage: '15-18 Questions',
            questionCount: 450,
            topics: [
              { id: 'pol-1', name: 'Constitutional Framework & Preamble', nameHi: 'संवैधानिक ढांचा और प्रस्तावना', completed: true, hours: 6, weightage: 'High' },
              { id: 'pol-2', name: 'Fundamental Rights, DPSP & Fundamental Duties', nameHi: 'मौलिक अधिकार, नीति निदेशक तत्व व कर्तव्य', completed: true, hours: 10, weightage: 'Very High' },
              { id: 'pol-3', name: 'Union Executive, Parliament & Judiciary', nameHi: 'संघीय कार्यपालिका, संसद और न्यायपालिका', completed: false, hours: 12, weightage: 'Very High' },
              { id: 'pol-4', name: 'Federal Structure & Centre-State Relations', nameHi: 'संघीय ढांचा और केंद्र-राज्य संबंध', completed: false, hours: 6, weightage: 'Medium' },
              { id: 'pol-5', name: 'Constitutional & Statutory Bodies (ECI, CAG, UPSC)', nameHi: 'संवैधानिक और वैधानिक निकाय', completed: false, hours: 8, weightage: 'High' }
            ]
          },
          {
            id: 'history',
            title: 'Indian History & National Movement',
            titleHi: 'भारत का इतिहास और राष्ट्रीय आंदोलन',
            icon: '📜',
            totalHours: 48,
            weightage: '16-20 Questions',
            questionCount: 520,
            topics: [
              { id: 'his-1', name: 'Ancient India: Indus Valley to Post-Gupta', nameHi: 'प्राचीन भारत: सिंधु सभ्यता से गुप्तोत्तर काल', completed: true, hours: 10, weightage: 'Medium' },
              { id: 'his-2', name: 'Medieval India: Delhi Sultanate & Mughal Empire', nameHi: 'मध्यकालीन भारत: दिल्ली सल्तनत और मुगल साम्राज्य', completed: false, hours: 8, weightage: 'Medium' },
              { id: 'his-3', name: 'Modern India: British Rule & 1857 Revolt', nameHi: 'आधुनिक भारत: ब्रिटिश शासन और 1857 की क्रांति', completed: true, hours: 12, weightage: 'High' },
              { id: 'his-4', name: 'Indian National Movement (1885-1947) & Gandhian Era', nameHi: 'भारतीय राष्ट्रीय आंदोलन और गांधी युग', completed: false, hours: 14, weightage: 'Very High' },
              { id: 'his-5', name: 'Art and Culture: Architecture, Music & Dance', nameHi: 'कला और संस्कृति: स्थापत्य, संगीत और नृत्य', completed: false, hours: 4, weightage: 'High' }
            ]
          },
          {
            id: 'geography',
            title: 'Indian & World Geography',
            titleHi: 'भारत एवं विश्व का भूगोल',
            icon: '🌍',
            totalHours: 38,
            weightage: '12-15 Questions',
            questionCount: 380,
            topics: [
              { id: 'geo-1', name: 'Geomorphology, Climatology & Oceanography', nameHi: 'भू-आकृति विज्ञान, जलवायु व समुद्र विज्ञान', completed: false, hours: 12, weightage: 'High' },
              { id: 'geo-2', name: 'Indian Physical Geography: Himalayas, River Systems', nameHi: 'भारत का भौतिक भूगोल: हिमालय व नदी तंत्र', completed: true, hours: 10, weightage: 'Very High' },
              { id: 'geo-3', name: 'Agriculture, Mineral & Energy Resources', nameHi: 'कृषि, खनिज और ऊर्जा संसाधन', completed: false, hours: 8, weightage: 'High' },
              { id: 'geo-4', name: 'Economic & Human Geography of India', nameHi: 'भारत का आर्थिक और मानव भूगोल', completed: false, hours: 8, weightage: 'Medium' }
            ]
          },
          {
            id: 'economy',
            title: 'Indian Economy & Sustainable Development',
            titleHi: 'भारतीय अर्थव्यवस्था और सतत विकास',
            icon: '📈',
            totalHours: 36,
            weightage: '14-18 Questions',
            questionCount: 410,
            topics: [
              { id: 'eco-1', name: 'National Income, GDP & Macroeconomics', nameHi: 'राष्ट्रीय आय, जीडीपी और समष्टि अर्थशास्त्र', completed: true, hours: 8, weightage: 'High' },
              { id: 'eco-2', name: 'Monetary Policy, RBI & Banking Reforms', nameHi: 'मौद्रिक नीति, आरबीआई और बैंकिंग सुधार', completed: false, hours: 10, weightage: 'Very High' },
              { id: 'eco-3', name: 'Fiscal Policy, Union Budget & GST', nameHi: 'राजकोषीय नीति, केंद्रीय बजट और जीएसटी', completed: false, hours: 10, weightage: 'Very High' },
              { id: 'eco-4', name: 'External Sector, Balance of Payments & WTO', nameHi: 'विदेशी व्यापार, भुगतान संतुलन और डब्ल्यूटीओ', completed: false, hours: 8, weightage: 'High' }
            ]
          },
          {
            id: 'csat',
            title: 'CSAT (Paper II - Qualifying 33%)',
            titleHi: 'सीसैट (पेपर II - 33% क्वालिफाइंग)',
            icon: '🧮',
            totalHours: 30,
            weightage: '80 Questions (200 Marks)',
            questionCount: 600,
            topics: [
              { id: 'csat-1', name: 'Reading Comprehension & Critical Reasoning', nameHi: 'अपठित गद्यांश और विश्लेषणात्मक तर्क', completed: true, hours: 10, weightage: 'Very High' },
              { id: 'csat-2', name: 'Quantitative Aptitude (Number System, Percentages)', nameHi: 'संख्यात्मक अभिरुचि', completed: false, hours: 12, weightage: 'Very High' },
              { id: 'csat-3', name: 'Logical & Analytical Reasoning, Syllogisms', nameHi: 'तार्किक एवं विश्लेषणात्मक क्षमता', completed: false, hours: 8, weightage: 'High' }
            ]
          }
        ]
      },
      {
        id: 'mains',
        name: 'Stage 2: Mains Examination (GS 1 to 4 + Essay)',
        subjects: [
          {
            id: 'gs1',
            title: 'GS Paper I: Heritage, History, Geography & Society',
            titleHi: 'जीएस पेपर I: विरासत, इतिहास, भूगोल और समाज',
            icon: '🏛️',
            totalHours: 60,
            weightage: '250 Marks',
            questionCount: 200,
            topics: [
              { id: 'gs1-1', name: 'Modern Indian History (mid-18th century to present)', nameHi: 'आधुनिक भारतीय इतिहास', completed: false, hours: 15, weightage: 'High' },
              { id: 'gs1-2', name: 'Salient features of Indian Society & Diversity', nameHi: 'भारतीय समाज की मुख्य विशेषताएं', completed: false, hours: 15, weightage: 'High' },
              { id: 'gs1-3', name: 'Physical Geography & Distribution of Natural Resources', nameHi: 'भौतिक भूगोल और प्राकृतिक संसाधन', completed: false, hours: 15, weightage: 'High' },
              { id: 'gs1-4', name: 'Role of Women, Urbanization, Globalization', nameHi: 'महिला सशक्तिकरण, शहरीकरण और वैश्वीकरण', completed: false, hours: 15, weightage: 'Medium' }
            ]
          },
          {
            id: 'gs2',
            title: 'GS Paper II: Governance, Constitution, Polity & IR',
            titleHi: 'जीएस पेपर II: शासन, संविधान, राजव्यवस्था और अंतरराष्ट्रीय संबंध',
            icon: '⚖️',
            totalHours: 60,
            weightage: '250 Marks',
            questionCount: 200,
            topics: [
              { id: 'gs2-1', name: 'Indian Constitution: Evolution, Amendments & Judicial Review', nameHi: 'भारतीय संविधान: विकास, संशोधन और समीक्षा', completed: false, hours: 20, weightage: 'Very High' },
              { id: 'gs2-2', name: 'Welfare Schemes for Vulnerable Sections & Social Justice', nameHi: 'कल्याणकारी योजनाएं और सामाजिक न्याय', completed: false, hours: 15, weightage: 'High' },
              { id: 'gs2-3', name: 'India and its Neighborhood- Relations & Global Groupings', nameHi: 'भारत और पड़ोसी देश तथा अंतरराष्ट्रीय संगठन', completed: false, hours: 25, weightage: 'Very High' }
            ]
          },
          {
            id: 'gs3',
            title: 'GS Paper III: Technology, Economy, Bio-diversity & Security',
            titleHi: 'जीएस पेपर III: प्रौद्योगिकी, आर्थिक विकास, जैव विविधता और सुरक्षा',
            icon: '🛡️',
            totalHours: 60,
            weightage: '250 Marks',
            questionCount: 200,
            topics: [
              { id: 'gs3-1', name: 'Indian Economy & Issues relating to Planning & Employment', nameHi: 'भारतीय अर्थव्यवस्था, योजना और रोजगार', completed: false, hours: 18, weightage: 'High' },
              { id: 'gs3-2', name: 'Science & Tech Developments: Space, AI, Biotechnology', nameHi: 'विज्ञान एवं प्रौद्योगिकी: अंतरिक्ष, एआई, बायोटेक', completed: false, hours: 12, weightage: 'High' },
              { id: 'gs3-3', name: 'Disaster Management & Internal Security Challenges', nameHi: 'आपदा प्रबंधन और आंतरिक सुरक्षा चुनौतियां', completed: false, hours: 15, weightage: 'Very High' },
              { id: 'gs3-4', name: 'Agriculture & Food Security (PDS, MSP, Tech missions)', nameHi: 'कृषि और खाद्य सुरक्षा', completed: false, hours: 15, weightage: 'High' }
            ]
          },
          {
            id: 'gs4',
            title: 'GS Paper IV: Ethics, Integrity & Aptitude',
            titleHi: 'जीएस पेपर IV: नीतिशास्त्र, सत्यनिष्ठा और अभिरुचि',
            icon: '🧭',
            totalHours: 45,
            weightage: '250 Marks',
            questionCount: 150,
            topics: [
              { id: 'gs4-1', name: 'Ethics and Human Interface; Attitude & Emotional Intelligence', nameHi: 'नीतिशास्त्र और मानवीय संबंध; भावनात्मक समझ', completed: false, hours: 15, weightage: 'High' },
              { id: 'gs4-2', name: 'Probity in Governance & Anti-Corruption Mechanisms', nameHi: 'शासन में सत्यनिष्ठा और भ्रष्टाचार विरोधी तंत्र', completed: false, hours: 15, weightage: 'High' },
              { id: 'gs4-3', name: 'Real-World Case Studies & Ethical Dilemmas', nameHi: 'व्यावहारिक केस स्टडी और नैतिक दुविधाएं', completed: false, hours: 15, weightage: 'Very High' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ssc',
    name: 'SSC CGL (Combined Graduate Level)',
    nameHi: 'कर्मचारी चयन आयोग सीजीएल परीक्षा',
    badge: 'Central Services',
    totalMarks: 390,
    duration: 'Tier 1 & Tier 2 Pattern',
    stages: [
      {
        id: 'tier1',
        name: 'Tier 1: Screening Exam (100 Questions / 200 Marks)',
        subjects: [
          {
            id: 'quant',
            title: 'Quantitative Aptitude',
            titleHi: 'संख्यात्मक अभिरुचि',
            icon: '➗',
            totalHours: 40,
            weightage: '25 Qs / 50 Marks',
            questionCount: 800,
            topics: [
              { id: 'ssc-q1', name: 'Number System, HCF & LCM', nameHi: 'संख्या पद्धति, ल.स. व म.स.', completed: true, hours: 6, weightage: 'Medium' },
              { id: 'ssc-q2', name: 'Percentage, Profit & Loss, Discount', nameHi: 'प्रतिशत, लाभ-हानि व बट्टा', completed: true, hours: 8, weightage: 'Very High' },
              { id: 'ssc-q3', name: 'Ratio & Proportion, Mixture & Alligation', nameHi: 'अनुपात, समानुपात व मिश्रण', completed: false, hours: 6, weightage: 'High' },
              { id: 'ssc-q4', name: 'Time, Speed, Distance & Work', nameHi: 'समय, चाल, दूरी और कार्य', completed: false, hours: 8, weightage: 'High' },
              { id: 'ssc-q5', name: 'Algebra, Trigonometry & Geometry', nameHi: 'बीजगणित, त्रिकोणमिति व ज्यामिति', completed: false, hours: 12, weightage: 'Very High' }
            ]
          },
          {
            id: 'reasoning',
            title: 'General Intelligence & Reasoning',
            titleHi: 'तर्कशक्ति परीक्षण',
            icon: '🧩',
            totalHours: 32,
            weightage: '25 Qs / 50 Marks',
            questionCount: 650,
            topics: [
              { id: 'ssc-r1', name: 'Analogy, Classification & Series', nameHi: 'सादृश्यता, वर्गीकरण व श्रृंखला', completed: true, hours: 6, weightage: 'High' },
              { id: 'ssc-r2', name: 'Coding-Decoding & Blood Relations', nameHi: 'कोडिंग-डिकोडिंग व रक्त संबंध', completed: true, hours: 6, weightage: 'High' },
              { id: 'ssc-r3', name: 'Syllogism, Venn Diagrams & Direction Test', nameHi: 'न्याय निगमन, वेन आरेख व दिशा परीक्षण', completed: false, hours: 8, weightage: 'Very High' },
              { id: 'ssc-r4', name: 'Non-Verbal Reasoning & Paper Folding', nameHi: 'अशाब्दिक तर्कशक्ति', completed: false, hours: 6, weightage: 'Medium' }
            ]
          },
          {
            id: 'english',
            title: 'English Comprehension',
            titleHi: 'अंग्रेजी भाषा एवं समझ',
            icon: '📖',
            totalHours: 35,
            weightage: '25 Qs / 50 Marks',
            questionCount: 700,
            topics: [
              { id: 'ssc-e1', name: 'Grammar: Error Spotting & Sentence Improvement', nameHi: 'व्याकरण व वाक्य सुधार', completed: true, hours: 10, weightage: 'Very High' },
              { id: 'ssc-e2', name: 'Vocabulary: Synonyms, Antonyms & One Word Substitution', nameHi: 'शब्दावली ও पर्यायवाची', completed: false, hours: 12, weightage: 'Very High' },
              { id: 'ssc-e3', name: 'Idioms, Phrases & Cloze Test', nameHi: 'मुहावरे व क्लोज़ टेस्ट', completed: false, hours: 8, weightage: 'High' },
              { id: 'ssc-e4', name: 'Reading Comprehension Passages', nameHi: 'अपठित गद्यांश', completed: false, hours: 5, weightage: 'Medium' }
            ]
          },
          {
            id: 'ga',
            title: 'General Awareness & Current Affairs',
            titleHi: 'सामान्य जागरूकता एवं समसामयिकी',
            icon: '🌐',
            totalHours: 30,
            weightage: '25 Qs / 50 Marks',
            questionCount: 900,
            topics: [
              { id: 'ssc-ga1', name: 'Static GK: History, Polity, Geography & Science', nameHi: 'स्थैतिक सामान्य ज्ञान', completed: true, hours: 15, weightage: 'Very High' },
              { id: 'ssc-ga2', name: 'Monthly Current Affairs (National & International)', nameHi: 'मासिक समसामयिकी', completed: false, hours: 10, weightage: 'Very High' },
              { id: 'ssc-ga3', name: 'Government Schemes, Awards & Sports', nameHi: 'सरकारी योजनाएं व पुरस्कार', completed: false, hours: 5, weightage: 'High' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'banking',
    name: 'Banking (IBPS PO / SBI PO)',
    nameHi: 'बैंकिंग अधिकारी परीक्षा',
    badge: 'Public Sector Banks',
    totalMarks: 250,
    duration: 'Prelims + Mains + Interview',
    stages: [
      {
        id: 'bank-pre',
        name: 'Prelims Phase (100 Qs / 100 Marks)',
        subjects: [
          {
            id: 'bank-quant',
            title: 'Quantitative Aptitude & Data Interpretation',
            titleHi: 'संख्यात्मक योग्यता और डेटा व्याख्या',
            icon: '📊',
            totalHours: 35,
            weightage: '35 Qs / 35 Marks',
            questionCount: 650,
            topics: [
              { id: 'bq-1', name: 'Data Interpretation: Tables, Bar, Pie, Radar & Caselet', nameHi: 'डेटा इंटरप्रिटेशन चार्ट्स', completed: true, hours: 14, weightage: 'Very High' },
              { id: 'bq-2', name: 'Quadratic Equations & Number Series', nameHi: 'द्विघात समीकरण व संख्या श्रृंखला', completed: true, hours: 6, weightage: 'High' },
              { id: 'bq-3', name: 'Arithmetic Word Problems', nameHi: 'अंकगणितीय समस्याएं', completed: false, hours: 15, weightage: 'Very High' }
            ]
          },
          {
            id: 'bank-reasoning',
            title: 'Reasoning Ability & Puzzles',
            titleHi: 'तर्क क्षमता और पहेलियाँ',
            icon: '🧩',
            totalHours: 38,
            weightage: '35 Qs / 35 Marks',
            questionCount: 700,
            topics: [
              { id: 'br-1', name: 'Seating Arrangement (Circular, Linear, Parallel)', nameHi: 'बैठक व्यवस्था', completed: false, hours: 14, weightage: 'Very High' },
              { id: 'br-2', name: 'Floor, Box, Month & Day Puzzles', nameHi: 'फ्लोर व बॉक्स पहेलियाँ', completed: false, hours: 14, weightage: 'Very High' },
              { id: 'br-3', name: 'Inequalities & Syllogism', nameHi: 'असमानताएं और न्याय निगमन', completed: true, hours: 10, weightage: 'High' }
            ]
          },
          {
            id: 'bank-eng',
            title: 'English Language',
            titleHi: 'अंग्रेजी भाषा',
            icon: '📖',
            totalHours: 25,
            weightage: '30 Qs / 30 Marks',
            questionCount: 500,
            topics: [
              { id: 'be-1', name: 'Reading Comprehension (Financial/Editorial)', nameHi: 'वित्तीय गद्यांश', completed: true, hours: 10, weightage: 'Very High' },
              { id: 'be-2', name: 'Error Detection & Phrase Replacement', nameHi: 'त्रुटि पहचान', completed: false, hours: 8, weightage: 'High' },
              { id: 'be-3', name: 'Para Jumbles & Fillers', nameHi: 'पैरा जंबल्स', completed: false, hours: 7, weightage: 'High' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'railway',
    name: 'Railway RRB NTPC / Group D',
    nameHi: 'रेलवे भर्ती बोर्ड परीक्षा',
    badge: 'Indian Railways',
    totalMarks: 100,
    duration: 'CBT 1 & CBT 2',
    stages: [
      {
        id: 'rrb-cbt1',
        name: 'Stage 1: CBT 1 (100 Questions / 90 Minutes)',
        subjects: [
          {
            id: 'rrb-math',
            title: 'Mathematics',
            titleHi: 'गणित',
            icon: '📐',
            totalHours: 32,
            weightage: '30 Questions',
            questionCount: 600,
            topics: [
              { id: 'rm-1', name: 'Number System, Decimals & Fractions', nameHi: 'संख्या पद्धति व भिन्न', completed: true, hours: 8, weightage: 'High' },
              { id: 'rm-2', name: 'Time and Work, Simple & Compound Interest', nameHi: 'समय-कार्य, साधारण व चक्रवृद्धि ब्याज', completed: false, hours: 12, weightage: 'Very High' },
              { id: 'rm-3', name: 'Elementary Algebra & Geometry', nameHi: 'प्रारंभिक बीजगणित', completed: false, hours: 12, weightage: 'High' }
            ]
          },
          {
            id: 'rrb-sci',
            title: 'General Science (Physics, Chemistry, Biology)',
            titleHi: 'सामान्य विज्ञान (भौतिक, रसायन, जीव विज्ञान)',
            icon: '🔬',
            totalHours: 36,
            weightage: '40 Questions',
            questionCount: 800,
            topics: [
              { id: 'rs-1', name: 'Physics: Motion, Work, Energy, Electricity & Light', nameHi: 'भौतिकी: गति, ऊर्जा, विद्युत व प्रकाश', completed: true, hours: 12, weightage: 'Very High' },
              { id: 'rs-2', name: 'Chemistry: Periodic Table, Acids, Bases & Metals', nameHi: 'रसायन: आवर्त सारणी, अम्ल, क्षार व धातुएं', completed: false, hours: 12, weightage: 'High' },
              { id: 'rs-3', name: 'Biology: Human Body Systems, Plant Physiology & Diseases', nameHi: 'जीव विज्ञान: मानव तंत्र व रोग', completed: false, hours: 12, weightage: 'Very High' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'neet',
    name: 'NEET UG (Medical Entrance)',
    nameHi: 'राष्ट्रीय पात्रता सह प्रवेश परीक्षा',
    badge: 'NTA Medical',
    totalMarks: 720,
    duration: '200 Questions • 3 Hrs 20 Mins',
    stages: [
      {
        id: 'neet-core',
        name: 'Single Phase National Examination',
        subjects: [
          {
            id: 'biology',
            title: 'Biology (Botany + Zoology)',
            titleHi: 'जीव विज्ञान (वनस्पति + प्राणी विज्ञान)',
            icon: '🧬',
            totalHours: 60,
            weightage: '100 Qs / 360 Marks',
            questionCount: 1200,
            topics: [
              { id: 'nb-1', name: 'Cell Structure and Function & Biomolecules', nameHi: 'कोशिका संरचना व जैव अणु', completed: true, hours: 15, weightage: 'Very High' },
              { id: 'nb-2', name: 'Genetics and Evolution', nameHi: 'आनुवंशिकी और विकास', completed: false, hours: 18, weightage: 'Very High' },
              { id: 'nb-3', name: 'Human Physiology (Circulation, Respiration, Excretion)', nameHi: 'मानव शरीर क्रिया विज्ञान', completed: false, hours: 15, weightage: 'Very High' },
              { id: 'nb-4', name: 'Ecology and Environment', nameHi: 'पारिस्थितिकी एवं पर्यावरण', completed: true, hours: 12, weightage: 'High' }
            ]
          },
          {
            id: 'physics',
            title: 'Physics',
            titleHi: 'भौतिक विज्ञान',
            icon: '⚡',
            totalHours: 50,
            weightage: '50 Qs / 180 Marks',
            questionCount: 900,
            topics: [
              { id: 'np-1', name: 'Mechanics: Laws of Motion, Work, Energy & Power', nameHi: 'यांत्रिकी व गति के नियम', completed: true, hours: 15, weightage: 'Very High' },
              { id: 'np-2', name: 'Electrostatics & Current Electricity', nameHi: 'स्थिरविद्युतिकी व धारा विद्युत', completed: false, hours: 15, weightage: 'Very High' },
              { id: 'np-3', name: 'Optics & Modern Physics', nameHi: 'प्रकाशिकी व आधुनिक भौतिकी', completed: false, hours: 20, weightage: 'Very High' }
            ]
          },
          {
            id: 'chemistry',
            title: 'Chemistry (Physical, Organic & Inorganic)',
            titleHi: 'रसायन विज्ञान (भौतिक, कार्बनिक व अकार्बनिक)',
            icon: '🧪',
            totalHours: 50,
            weightage: '50 Qs / 180 Marks',
            questionCount: 900,
            topics: [
              { id: 'nc-1', name: 'Chemical Bonding & Molecular Structure', nameHi: 'रासायनिक आबंधन व आणविक संरचना', completed: true, hours: 12, weightage: 'Very High' },
              { id: 'nc-2', name: 'Organic Chemistry: Hydrocarbons, Reaction Mechanisms', nameHi: 'कार्बनिक रसायन', completed: false, hours: 20, weightage: 'Very High' },
              { id: 'nc-3', name: 'Equilibrium, Thermodynamics & Electrochemistry', nameHi: 'साम्यावस्था व ऊष्मागतिकी', completed: false, hours: 18, weightage: 'High' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'jee',
    name: 'JEE Main & Advanced',
    nameHi: 'संयुक्त प्रवेश परीक्षा (इंजीनियरिंग)',
    badge: 'NTA Engineering',
    totalMarks: 300,
    duration: 'Computer Based Test (CBT)',
    stages: [
      {
        id: 'jee-main',
        name: 'JEE Main (Physics + Chemistry + Mathematics)',
        subjects: [
          {
            id: 'jee-math',
            title: 'Mathematics',
            titleHi: 'उच्चतर गणित',
            icon: '🔢',
            totalHours: 55,
            weightage: '25 Qs / 100 Marks',
            questionCount: 850,
            topics: [
              { id: 'jm-1', name: 'Calculus: Limits, Continuity, Derivatives & Integrals', nameHi: 'कलन (कैलकुलस)', completed: true, hours: 20, weightage: 'Very High' },
              { id: 'jm-2', name: 'Coordinate Geometry & Conic Sections', nameHi: 'निर्देशांक ज्यामिति', completed: false, hours: 15, weightage: 'High' },
              { id: 'jm-3', name: 'Vectors, 3D Geometry & Matrices', nameHi: 'सदिश, त्रिविमीय ज्यामिति व आव्यूह', completed: false, hours: 20, weightage: 'Very High' }
            ]
          },
          {
            id: 'jee-phy',
            title: 'Physics',
            titleHi: 'भौतिकी',
            icon: '⚡',
            totalHours: 50,
            weightage: '25 Qs / 100 Marks',
            questionCount: 800,
            topics: [
              { id: 'jp-1', name: 'Rotational Motion & Gravitation', nameHi: 'घूर्णन गति व गुरुत्वाकर्षण', completed: false, hours: 15, weightage: 'High' },
              { id: 'jp-2', name: 'Electromagnetism & Wave Optics', nameHi: 'विद्युतचुंबकत्व व तरंग प्रकाशिकी', completed: true, hours: 18, weightage: 'Very High' },
              { id: 'jp-3', name: 'Thermodynamics & Kinetic Theory', nameHi: 'ऊष्मागतिकी', completed: false, hours: 17, weightage: 'High' }
            ]
          }
        ]
      }
    ]
  }
];

export default function SyllabusPage() {
  const navigate = useNavigate();
  const [selectedExamId, setSelectedExamId] = useState('upsc');
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [userExamPreference, setUserExamPreference] = useState('UPSC CSE');

  useEffect(() => {
    const userStr = (localStorage.getItem('parikshasetu_user') || localStorage.getItem('pariksha_mitra_user'));
    if (userStr) {
      try {
        const u = JSON.parse(userStr);
        if (u.targetExam) {
          setUserExamPreference(u.targetExam);
          const match = SYLLABUS_DATABASE.find(e => 
            e.name.toLowerCase().includes(u.targetExam.toLowerCase()) || 
            u.targetExam.toLowerCase().includes(e.id)
          );
          if (match) {
            setSelectedExamId(match.id);
          }
        }
      } catch (e) {}
    }
  }, []);

  const currentExam = SYLLABUS_DATABASE.find(e => e.id === selectedExamId) || SYLLABUS_DATABASE[0];
  const currentStage = currentExam.stages[selectedStageIndex] || currentExam.stages[0];

  useEffect(() => {
    if (currentStage && currentStage.subjects.length > 0) {
      setExpandedSubjects({ [currentStage.subjects[0].id]: true });
    }
    setSelectedStageIndex(0);
  }, [selectedExamId]);

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => ({
      ...prev,
      [subjectId]: !prev[subjectId]
    }));
  };

  const handleExamChange = (examId: string) => {
    setSelectedExamId(examId);
    const chosen = SYLLABUS_DATABASE.find(e => e.id === examId);
    if (chosen) {
      const userStr = (localStorage.getItem('parikshasetu_user') || localStorage.getItem('pariksha_mitra_user'));
      if (userStr) {
        try {
          const u = JSON.parse(userStr);
          u.targetExam = chosen.name;
          localStorage.setItem('parikshasetu_user', JSON.stringify(u));
          setUserExamPreference(chosen.name);
        } catch (e) {}
      }
    }
  };

  const filteredSubjects = currentStage.subjects.map(subject => {
    if (!searchQuery.trim()) return subject;
    const q = searchQuery.toLowerCase();
    const matchesSubject = subject.title.toLowerCase().includes(q) || subject.titleHi.toLowerCase().includes(q);
    const matchingTopics = subject.topics.filter(t => 
      t.name.toLowerCase().includes(q) || (t.nameHi && t.nameHi.toLowerCase().includes(q))
    );
    if (matchesSubject) return subject;
    if (matchingTopics.length > 0) {
      return { ...subject, topics: matchingTopics };
    }
    return null;
  }).filter(Boolean) as Subject[];

  const totalTopics = currentStage.subjects.reduce((acc, s) => acc + s.topics.length, 0);
  const completedTopics = currentStage.subjects.reduce((acc, s) => acc + s.topics.filter(t => t.completed).length, 0);
  const completionPercentage = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
  const totalHours = currentStage.subjects.reduce((acc, s) => acc + s.totalHours, 0);

  return (
    <div className="syllabus-container">
      {/* HEADER SECTION */}
      <div className="syllabus-header-card">
        <div className="header-left">
          <div className="tag-pill">
            <Layers size={16} /> OFFICIAL CURRICULUM FRAMEWORK
          </div>
          <h1>Interactive Syllabus & Exam Pattern</h1>
          <p className="subtitle">
            Curated strictly in accordance with official Ministry of Education & examination authority blueprints.
          </p>
        </div>

        <div className="header-actions">
          <button 
            className="btn-ai-diag"
            onClick={() => navigate('/diagnostic')}
            title="Launch interactive AI Chatbot to test your syllabus proficiency"
          >
            <Bot size={18} />
            <span>AI Diagnostic Tutor Chat</span>
            <Sparkles size={16} />
          </button>
        </div>
      </div>

      {/* EXAM SELECTOR CAROUSEL / PILLS */}
      <div className="exam-selector-strip">
        <div className="selector-label">
          <SlidersHorizontal size={16} />
          <span>Target Exam Preference:</span>
        </div>
        <div className="exam-pills-row">
          {SYLLABUS_DATABASE.map(exam => {
            const isSelected = exam.id === selectedExamId;
            return (
              <button
                key={exam.id}
                className={`exam-pill-btn ${isSelected ? 'active' : ''}`}
                onClick={() => handleExamChange(exam.id)}
              >
                <span className="exam-pill-title">{exam.name.split(' (')[0]}</span>
                {isSelected && <span className="active-dot"></span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* EXAM INFO & STAGE BAR */}
      <div className="exam-info-banner">
        <div className="exam-details-left">
          <div className="exam-main-title">
            <h2>{currentExam.name}</h2>
            <span className="hindi-exam-title">{currentExam.nameHi}</span>
          </div>
          <div className="exam-meta-badges">
            <span className="meta-badge"><Award size={14} /> {currentExam.badge}</span>
            <span className="meta-badge"><Clock size={14} /> {currentExam.duration}</span>
            <span className="meta-badge">Total Marks: <strong>{currentExam.totalMarks}</strong></span>
          </div>
        </div>

        <div className="progress-summary-card">
          <div className="prog-text">
            <span>Syllabus Coverage</span>
            <strong>{completionPercentage}%</strong>
          </div>
          <div className="prog-bar-bg">
            <div className="prog-bar-fill" style={{ width: `${completionPercentage}%` }}></div>
          </div>
          <span className="prog-subtext">{completedTopics} of {totalTopics} topics mastered</span>
        </div>
      </div>

      {/* STAGE SELECTOR TABS */}
      {currentExam.stages.length > 1 && (
        <div className="stage-tabs-row">
          {currentExam.stages.map((stage, idx) => (
            <button
              key={stage.id}
              className={`stage-tab-btn ${selectedStageIndex === idx ? 'active' : ''}`}
              onClick={() => setSelectedStageIndex(idx)}
            >
              {stage.name}
            </button>
          ))}
        </div>
      )}

      {/* SEARCH AND FILTER BAR */}
      <div className="syllabus-toolbar">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text"
            placeholder="Search chapters, topics, or keywords (e.g. Fundamental Rights, Algebra, Cell)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search-btn" onClick={() => setSearchQuery('')}>✕</button>
          )}
        </div>

        <div className="toolbar-stats">
          <span>{filteredSubjects.length} Subjects</span>
          <span>•</span>
          <span>{totalHours} Total Lecture Hours</span>
        </div>
      </div>

      {/* SUBJECTS & CHAPTERS ACCORDION */}
      <div className="subjects-stack">
        {filteredSubjects.length === 0 ? (
          <div className="no-results-box">
            <BookOpen size={48} color="#94A3B8" />
            <h3>No topics match "{searchQuery}"</h3>
            <p>Try searching for a different topic or clear your search.</p>
            <button className="btn-secondary" onClick={() => setSearchQuery('')}>Clear Search</button>
          </div>
        ) : (
          filteredSubjects.map(subject => {
            const isExpanded = !!expandedSubjects[subject.id];
            const subjectCompleted = subject.topics.filter(t => t.completed).length;
            const subjectPct = Math.round((subjectCompleted / subject.topics.length) * 100);

            return (
              <div key={subject.id} className={`subject-accordion-card ${isExpanded ? 'expanded' : ''}`}>
                {/* Subject Header */}
                <div 
                  className="subject-header"
                  onClick={() => toggleSubject(subject.id)}
                >
                  <div className="subject-icon-box">{subject.icon}</div>
                  
                  <div className="subject-title-area">
                    <div className="sub-title-row">
                      <h3>{subject.title}</h3>
                      <span className="hindi-sub-title">/ {subject.titleHi}</span>
                    </div>
                    <div className="sub-meta-row">
                      <span className="sub-tag weightage-tag">⚖️ Weightage: {subject.weightage}</span>
                      <span className="sub-tag">⏱️ {subject.totalHours} hrs</span>
                      <span className="sub-tag">📝 {subject.questionCount} PYQs</span>
                    </div>
                  </div>

                  <div className="subject-progress-mini">
                    <div className="mini-prog-bar">
                      <div className="mini-prog-fill" style={{ width: `${subjectPct}%` }}></div>
                    </div>
                    <span className="mini-prog-pct">{subjectPct}%</span>
                  </div>

                  <button className="expand-toggle-btn" aria-label="Toggle Subject">
                    {isExpanded ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </button>
                </div>

                {/* Subject Body */}
                {isExpanded && (
                  <div className="subject-body">
                    <div className="topics-list">
                      {subject.topics.map((topic, tIdx) => (
                        <div key={topic.id} className={`topic-item-row ${topic.completed ? 'completed' : ''}`}>
                          <div className="topic-num">{tIdx + 1}</div>
                          
                          <div className="topic-info">
                            <div className="topic-main-name">
                              <strong>{topic.name}</strong>
                              {topic.nameHi && <span className="hi-name"> ({topic.nameHi})</span>}
                            </div>
                            <div className="topic-sub-meta">
                              <span className={`weight-badge ${topic.weightage.toLowerCase().replace(' ', '-')}`}>
                                {topic.weightage} Yield
                              </span>
                              <span>⏱️ ~{topic.hours} hrs preparation</span>
                            </div>
                          </div>

                          <div className="topic-actions">
                            <Link to="/videos" className="action-chip-btn video-chip">
                              <PlayCircle size={14} /> Watch
                            </Link>
                            <Link to="/practice" className="action-chip-btn practice-chip">
                              <PenTool size={14} /> Practice
                            </Link>
                            <div className="status-indicator">
                              {topic.completed ? (
                                <span className="done-badge"><CheckCircle2 size={16} color="#024A00" /> Done</span>
                              ) : (
                                <span className="pending-badge">Pending</span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Subject Footer Quick Actions */}
                    <div className="subject-footer-actions">
                      <div className="footer-left-info">
                        <strong>Ready to test {subject.title}?</strong>
                        <span>Launch an adaptive subject assessment now.</span>
                      </div>
                      <div className="footer-buttons">
                        <Link to="/practice" className="btn-outline-primary">
                          <PenTool size={16} /> Practice All {subject.questionCount} Questions
                        </Link>
                        <Link to="/videos" className="btn-primary-blue">
                          <PlayCircle size={16} /> Watch All Lectures ({subject.totalHours} hrs)
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* BOTTOM AI PROMPT BANNER */}
      <div className="ai-diagnostic-callout">
        <div className="callout-icon">
          <Bot size={36} color="#0033A0" />
        </div>
        <div className="callout-text">
          <h3>Unsure where to start in {currentExam.name}?</h3>
          <p>
            Chat with the <strong>ParikshaSetu AI Diagnostic Tutor</strong>. 
            The AI asks 5 rapid adaptive questions to assess your syllabus mastery and creates a personalized 30-day study timetable.
          </p>
        </div>
        <button 
          className="btn-callout-start"
          onClick={() => navigate('/diagnostic')}
        >
          <Sparkles size={18} /> Start AI Diagnostic Chat
        </button>
      </div>
    </div>
  );
}
