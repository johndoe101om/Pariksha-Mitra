export interface Mentor {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  title: string;
  verified: boolean;
  rating: number;
  reviews: number;
  languages: string[];
  tags: string[];
  category: 'UPSC' | 'SSC' | 'Banking' | 'Railway' | 'Medical' | 'Engineering' | 'State PSC';
  availability: 'today' | 'tomorrow' | 'later';
  availabilityText: string;
  bio: string;
  qualifications: string[];
  metrics: { label: string; value: string }[];
  testimonials: { text: string; author: string; rating: number }[];
  availableSlots: string[];
}

export interface MentorBooking {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorTitle: string;
  date: string;
  timeSlot: string;
  sessionType: string;
  notes: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  createdAt: string;
}

export const MENTORS_LIST: Mentor[] = [
  {
    id: 'anjali-sharma',
    name: 'Anjali Sharma',
    initials: 'AS',
    avatarColor: '#0033A0',
    title: 'UPSC CSE 2024 - AIR 45',
    verified: true,
    rating: 4.9,
    reviews: 128,
    languages: ['Hindi', 'English'],
    tags: ['UPSC CSE', 'History Optional', 'Essay Writing', 'Prelims Strategy'],
    category: 'UPSC',
    availability: 'today',
    availabilityText: 'Available Today',
    bio: 'Secured AIR 45 in first attempt. Passionate about helping aspirants with answer writing and history optional strategy. I focus on core concepts and maintaining a balanced preparation routine.',
    qualifications: [
      'UPSC CSE 2024 - AIR 45 (First Attempt)',
      'B.A. (Hons) History, St. Stephen\'s College, Delhi',
      'Ex-Mentor at National Civil Services Academy'
    ],
    metrics: [
      { label: 'Students Mentored', value: '620+' },
      { label: 'Selected in Prelims', value: '140+' },
      { label: 'Avg Rating', value: '4.9/5' }
    ],
    testimonials: [
      { text: 'Anjali ma\'am\'s strategy for History optional is unmatched. Her 1-on-1 feedback on my GS papers transformed my answers.', author: 'Ravi Kumar (UP)', rating: 5 },
      { text: 'Cleared all my doubts regarding answer writing structure and speed management in just 30 mins!', author: 'Neha Singh (Bihar)', rating: 5 }
    ],
    availableSlots: ['10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '06:00 PM', '07:30 PM']
  },
  {
    id: 'rahul-verma',
    name: 'Rahul Verma',
    initials: 'RV',
    avatarColor: '#FE6500',
    title: 'Senior Faculty - Reasoning & Quant',
    verified: true,
    rating: 4.8,
    reviews: 342,
    languages: ['Hindi', 'English'],
    tags: ['SSC CGL', 'Quantitative Aptitude', 'Reasoning', 'Speed Tricks'],
    category: 'SSC',
    availability: 'tomorrow',
    availabilityText: 'Next Available: Tomorrow',
    bio: '10+ years of experience teaching SSC and Banking aspirants. Known for shortcut tricks, elimination techniques, and high-speed problem solving.',
    qualifications: [
      '10+ Years Teaching Experience in Premier Govt Institutes',
      'Authored 3 Best-Selling SSC Speed Math Workbooks',
      'M.Sc. Mathematics, Delhi University'
    ],
    metrics: [
      { label: 'Students Mentored', value: '1,500+' },
      { label: 'SSC CGL Selections', value: '380+' },
      { label: 'Avg Rating', value: '4.8/5' }
    ],
    testimonials: [
      { text: 'Rahul sir\'s shortcut methods for algebra and geometry saved me at least 15 minutes in SSC Tier 1.', author: 'Pooja Sharma (Rajasthan)', rating: 5 },
      { text: 'Outstanding guidance on accuracy improvement and penalty avoidance.', author: 'Vikram Das (WB)', rating: 5 }
    ],
    availableSlots: ['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM', '05:00 PM']
  },
  {
    id: 'dr-meena-iyer',
    name: 'Dr. Meena Iyer',
    initials: 'MI',
    avatarColor: '#024A00',
    title: 'Former IAS Officer & Civil Servant',
    verified: true,
    rating: 5.0,
    reviews: 95,
    languages: ['English', 'Hindi', 'Tamil'],
    tags: ['UPSC', 'Interview / Personality Test', 'Ethics (GS 4)', 'Governance'],
    category: 'UPSC',
    availability: 'later',
    availabilityText: 'Available This Weekend',
    bio: 'Served as District Magistrate and Secretary in Central Ministries for 28 years. Currently dedicated to mentoring dedicated civil service aspirants for Mains & Personality Interviews.',
    qualifications: [
      'Former IAS Officer (1995 Batch)',
      'Ph.D. in Public Policy, JNU',
      'Panelist for Mock UPSC Interview Boards'
    ],
    metrics: [
      { label: 'Officers Guided', value: '450+' },
      { label: 'Interview Score 180+', value: '88%' },
      { label: 'Avg Rating', value: '5.0/5' }
    ],
    testimonials: [
      { text: 'The mock interview session gave me the exact confidence I needed before entering Dholpur House.', author: 'Aditya Verma (IAS 2024)', rating: 5 },
      { text: 'Her insights on Ethics case studies and administrative decision making are truly invaluable.', author: 'Kavita Rao (IPS 2024)', rating: 5 }
    ],
    availableSlots: ['11:00 AM', '03:00 PM', '05:00 PM', '06:30 PM']
  },
  {
    id: 'vikash-kumar',
    name: 'Vikash Kumar',
    initials: 'VK',
    avatarColor: '#0033A0',
    title: 'IBPS PO 2024 - Top Ranker',
    verified: true,
    rating: 4.7,
    reviews: 64,
    languages: ['Hindi', 'English', 'Bhojpuri'],
    tags: ['Banking', 'IBPS PO', 'SBI PO', 'Data Interpretation', 'Banking Awareness'],
    category: 'Banking',
    availability: 'today',
    availabilityText: 'Available Today',
    bio: 'Cleared IBPS PO and SBI PO in the same year with 99.4 percentile in DI. I guide students on daily sectional time allocation and high-yield banking topics.',
    qualifications: [
      'Cleared SBI PO & IBPS PO (AIR 28)',
      'Assistant Manager, State Bank of India',
      'B.Tech, NIT Patna'
    ],
    metrics: [
      { label: 'Students Mentored', value: '310+' },
      { label: 'Bank PO Cleared', value: '75+' },
      { label: 'Avg Rating', value: '4.7/5' }
    ],
    testimonials: [
      { text: 'Clear, practical strategy for Data Interpretation and English reading comprehension.', author: 'Deepak S.', rating: 5 }
    ],
    availableSlots: ['06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM']
  },
  {
    id: 'dr-sunil-deshmukh',
    name: 'Dr. Sunil Deshmukh',
    initials: 'SD',
    avatarColor: '#8E24AA',
    title: 'NEET UG Biology Specialist',
    verified: true,
    rating: 4.9,
    reviews: 215,
    languages: ['Hindi', 'English', 'Marathi'],
    tags: ['NEET UG', 'Human Physiology', 'Genetics', 'NCERT Line-by-Line'],
    category: 'Medical',
    availability: 'today',
    availabilityText: 'Available Today',
    bio: 'MBBS from KEM Hospital Mumbai. Helping pre-medical students master NCERT Biology line-by-line and achieve 350+ out of 360 in Biology.',
    qualifications: [
      'MBBS, KEM Hospital Mumbai',
      'NEET Biology Mentor for 8 Years',
      'Trained 20+ Top 100 NEET Rankers'
    ],
    metrics: [
      { label: 'NEET Aspirants', value: '800+' },
      { label: 'Score 340+ Bio', value: '62%' },
      { label: 'Avg Rating', value: '4.9/5' }
    ],
    testimonials: [
      { text: 'Helped me fix my negative marking in Genetics and Ecology completely.', author: 'Tanvi P.', rating: 5 }
    ],
    availableSlots: ['02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM']
  },
  {
    id: 'priya-nair',
    name: 'Priya Nair',
    initials: 'PN',
    avatarColor: '#D81B60',
    title: 'Railway RRB NTPC Topper',
    verified: true,
    rating: 4.8,
    reviews: 110,
    languages: ['Hindi', 'English', 'Malayalam'],
    tags: ['Railway RRB', 'NTPC CBT 1 & 2', 'General Awareness', 'Current Affairs'],
    category: 'Railway',
    availability: 'tomorrow',
    availabilityText: 'Next Available: Tomorrow',
    bio: 'Selected in Railway NTPC with 94/100 in CBT-2. Specializes in rapid General Science revisions and Static GK mnemonics.',
    qualifications: [
      'Rank 1 in RRB NTPC Regional Zone',
      'Senior Section Officer, Indian Railways',
      'Mentored 400+ Railway Candidates'
    ],
    metrics: [
      { label: 'Railway Aspirants', value: '400+' },
      { label: 'CBT Cleared', value: '185+' },
      { label: 'Avg Rating', value: '4.8/5' }
    ],
    testimonials: [
      { text: 'Her Static GK summary charts are a lifesaver for railway exams.', author: 'Manish K.', rating: 5 }
    ],
    availableSlots: ['10:00 AM', '12:00 PM', '03:00 PM', '07:00 PM']
  }
];

export const getStoredBookings = (): MentorBooking[] => {
  try {
    const raw = localStorage.getItem('pariksha_mitra_mentor_bookings');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  
  return [
    {
      id: 'book-sample-1',
      mentorId: 'anjali-sharma',
      mentorName: 'Anjali Sharma',
      mentorTitle: 'UPSC CSE 2024 - AIR 45',
      date: 'Today',
      timeSlot: '04:00 PM',
      sessionType: 'Strategy Discussion',
      notes: 'Doubts regarding GS 1 History optional timeline & answer structure.',
      status: 'upcoming',
      createdAt: new Date().toISOString()
    }
  ];
};

export const saveBooking = (booking: MentorBooking): void => {
  try {
    const existing = getStoredBookings();
    const updated = [booking, ...existing.filter(b => b.id !== booking.id)];
    localStorage.setItem('pariksha_mitra_mentor_bookings', JSON.stringify(updated));
  } catch (e) {}
};
