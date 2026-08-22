import fs from 'fs';

const rawPaths = JSON.parse(fs.readFileSync('src/data/indiaGeoPaths_updated.json', 'utf8'));

// Exact pastel color scheme matching reference image
const colorPalette = {
  'Ladakh': '#92BCE6',
  'Jammu & Kashmir': '#F6D09F',
  'Himachal Pradesh': '#98D7B2',
  'Punjab': '#DAB18C',
  'Uttarakhand': '#CCA4D7',
  'Haryana': '#EFA0A5',
  'Delhi': '#EFA0A5',
  'Chandigarh': '#DAB18C',
  'Rajasthan': '#F9AFA8',
  'Uttar Pradesh': '#C8EBB4',
  'Bihar': '#F7989C',
  'Sikkim': '#C6E9BE',
  'Gujarat': '#AEE6E6',
  'Madhya Pradesh': '#9DBFEA',
  'Jharkhand': '#95D1DF',
  'Chhattisgarh': '#F7AC9F',
  'West Bengal': '#8DB5DE',
  'Odisha': '#F5CE9E',
  'Maharashtra': '#BFB0DC',
  'Goa': '#B5DFE8',
  'Telangana': '#DDB48C',
  'Andhra Pradesh': '#C68B93',
  'Karnataka': '#C6E8A8',
  'Kerala': '#8BBDE7',
  'Tamil Nadu': '#F4CB9A',
  'Arunachal Pradesh': '#F5D1A0',
  'Assam': '#C6898F',
  'Meghalaya': '#AEE2E8',
  'Nagaland': '#A9E1B8',
  'Manipur': '#93D2DC',
  'Mizoram': '#D67C82',
  'Tripura': '#94B5E0',
  'Andaman & Nicobar Island': '#92BCE6',
  'Andaman and Nicobar': '#92BCE6',
  'Puducherry': '#F4CB9A',
  'Lakshadweep': '#95D1DF',
  'Dadra and Nagar Haveli': '#AEE6E6',
  'Daman and Diu': '#AEE6E6'
};

const zoneMapping = {
  'Ladakh': 'North',
  'Jammu & Kashmir': 'North',
  'Himachal Pradesh': 'North',
  'Punjab': 'North',
  'Uttarakhand': 'North',
  'Haryana': 'North',
  'Delhi': 'North',
  'Chandigarh': 'North',
  'Rajasthan': 'North',
  'Uttar Pradesh': 'North',
  'Bihar': 'East & NE',
  'Sikkim': 'East & NE',
  'Gujarat': 'West',
  'Madhya Pradesh': 'Central',
  'Jharkhand': 'East & NE',
  'Chhattisgarh': 'Central',
  'West Bengal': 'East & NE',
  'Odisha': 'East & NE',
  'Maharashtra': 'West',
  'Goa': 'West',
  'Telangana': 'South',
  'Andhra Pradesh': 'South',
  'Karnataka': 'South',
  'Kerala': 'South',
  'Tamil Nadu': 'South',
  'Arunachal Pradesh': 'East & NE',
  'Assam': 'East & NE',
  'Meghalaya': 'East & NE',
  'Nagaland': 'East & NE',
  'Manipur': 'East & NE',
  'Mizoram': 'East & NE',
  'Tripura': 'East & NE',
  'Andaman & Nicobar Island': 'Islands',
  'Andaman and Nicobar': 'Islands',
  'Puducherry': 'South',
  'Lakshadweep': 'Islands',
  'Dadra and Nagar Haveli': 'West',
  'Daman and Diu': 'West'
};

const statsDb = {
  'Uttar Pradesh': { students: '9.42 Lakh', dau: '4.10 Lakh', avgScore: 74.2, aspirationalCount: 8, lowBwPct: 38, nicPopLatency: '14ms (Lucknow)', code: 'UP' },
  'Maharashtra': { students: '7.15 Lakh', dau: '3.25 Lakh', avgScore: 76.8, aspirationalCount: 4, lowBwPct: 28, nicPopLatency: '9ms (Pune)', code: 'MH' },
  'Bihar': { students: '6.80 Lakh', dau: '3.10 Lakh', avgScore: 71.5, aspirationalCount: 13, lowBwPct: 58, nicPopLatency: '18ms (Patna)', code: 'BR' },
  'Rajasthan': { students: '4.90 Lakh', dau: '2.15 Lakh', avgScore: 75.1, aspirationalCount: 5, lowBwPct: 34, nicPopLatency: '12ms (Jaipur)', code: 'RJ' },
  'Madhya Pradesh': { students: '4.30 Lakh', dau: '1.95 Lakh', avgScore: 72.4, aspirationalCount: 8, lowBwPct: 44, nicPopLatency: '16ms (Bhopal)', code: 'MP' },
  'Tamil Nadu': { students: '3.45 Lakh', dau: '1.60 Lakh', avgScore: 78.4, aspirationalCount: 2, lowBwPct: 16, nicPopLatency: '11ms (Chennai)', code: 'TN' },
  'West Bengal': { students: '3.10 Lakh', dau: '1.45 Lakh', avgScore: 73.0, aspirationalCount: 5, lowBwPct: 36, nicPopLatency: '14ms (Kolkata)', code: 'WB' },
  'Karnataka': { students: '2.85 Lakh', dau: '1.35 Lakh', avgScore: 77.2, aspirationalCount: 2, lowBwPct: 22, nicPopLatency: '8ms (Bengaluru)', code: 'KA' },
  'Gujarat': { students: '2.60 Lakh', dau: '1.20 Lakh', avgScore: 74.6, aspirationalCount: 2, lowBwPct: 24, nicPopLatency: '12ms (Gandhinagar)', code: 'GJ' },
  'Andhra Pradesh': { students: '1.75 Lakh', dau: '84,000', avgScore: 75.9, aspirationalCount: 3, lowBwPct: 26, nicPopLatency: '13ms (Vijayawada)', code: 'AP' },
  'Telangana': { students: '1.80 Lakh', dau: '88,000', avgScore: 76.5, aspirationalCount: 3, lowBwPct: 19, nicPopLatency: '7ms (Hyderabad)', code: 'TG' },
  'Kerala': { students: '1.95 Lakh', dau: '96,000', avgScore: 79.4, aspirationalCount: 1, lowBwPct: 14, nicPopLatency: '9ms (Thiruvananthapuram)', code: 'KL' },
  'Odisha': { students: '1.95 Lakh', dau: '92,000', avgScore: 71.8, aspirationalCount: 10, lowBwPct: 52, nicPopLatency: '15ms (Bhubaneswar)', code: 'OD' },
  'Jharkhand': { students: '2.10 Lakh', dau: '98,000', avgScore: 71.2, aspirationalCount: 9, lowBwPct: 56, nicPopLatency: '19ms (Ranchi)', code: 'JH' },
  'Chhattisgarh': { students: '1.85 Lakh', dau: '84,000', avgScore: 71.9, aspirationalCount: 7, lowBwPct: 54, nicPopLatency: '17ms (Raipur)', code: 'CG' },
  'Punjab': { students: '1.65 Lakh', dau: '81,000', avgScore: 76.4, aspirationalCount: 2, lowBwPct: 15, nicPopLatency: '10ms (Chandigarh)', code: 'PB' },
  'Haryana': { students: '1.95 Lakh', dau: '95,000', avgScore: 78.5, aspirationalCount: 1, lowBwPct: 11, nicPopLatency: '6ms (Chandigarh)', code: 'HR' },
  'Delhi': { students: '3.10 Lakh', dau: '1.65 Lakh', avgScore: 81.2, aspirationalCount: 0, lowBwPct: 6, nicPopLatency: '4ms (Delhi HQ)', code: 'DL' },
  'Jammu & Kashmir': { students: '1.20 Lakh', dau: '58,000', avgScore: 73.5, aspirationalCount: 2, lowBwPct: 62, nicPopLatency: '21ms (Srinagar)', code: 'JK' },
  'Ladakh': { students: '42,000', dau: '18,500', avgScore: 72.8, aspirationalCount: 1, lowBwPct: 68, nicPopLatency: '24ms (Leh)', code: 'LA' },
  'Himachal Pradesh': { students: '95,000', dau: '44,000', avgScore: 76.8, aspirationalCount: 1, lowBwPct: 24, nicPopLatency: '15ms (Shimla)', code: 'HP' },
  'Uttarakhand': { students: '1.10 Lakh', dau: '52,000', avgScore: 77.1, aspirationalCount: 2, lowBwPct: 28, nicPopLatency: '12ms (Dehradun)', code: 'UK' },
  'Assam': { students: '1.45 Lakh', dau: '68,000', avgScore: 72.8, aspirationalCount: 7, lowBwPct: 62, nicPopLatency: '24ms (Guwahati)', code: 'AS' },
  'Arunachal Pradesh': { students: '32,000', dau: '14,200', avgScore: 73.1, aspirationalCount: 2, lowBwPct: 65, nicPopLatency: '26ms (Itanagar)', code: 'AR' },
  'Meghalaya': { students: '34,000', dau: '15,600', avgScore: 74.0, aspirationalCount: 1, lowBwPct: 58, nicPopLatency: '25ms (Shillong)', code: 'ML' },
  'Nagaland': { students: '26,000', dau: '11,800', avgScore: 73.8, aspirationalCount: 1, lowBwPct: 64, nicPopLatency: '27ms (Kohima)', code: 'NL' },
  'Manipur': { students: '29,000', dau: '13,400', avgScore: 74.2, aspirationalCount: 1, lowBwPct: 60, nicPopLatency: '28ms (Imphal)', code: 'MN' },
  'Mizoram': { students: '22,000', dau: '10,100', avgScore: 75.5, aspirationalCount: 1, lowBwPct: 62, nicPopLatency: '29ms (Aizawl)', code: 'MZ' },
  'Tripura': { students: '28,000', dau: '13,200', avgScore: 74.9, aspirationalCount: 1, lowBwPct: 54, nicPopLatency: '25ms (Agartala)', code: 'TR' },
  'Sikkim': { students: '28,000', dau: '12,400', avgScore: 76.5, aspirationalCount: 1, lowBwPct: 32, nicPopLatency: '20ms (Gangtok)', code: 'SK' },
  'Goa': { students: '35,000', dau: '18,200', avgScore: 78.2, aspirationalCount: 0, lowBwPct: 12, nicPopLatency: '11ms (Panaji)', code: 'GA' },
  'Andaman & Nicobar Island': { students: '18,500', dau: '8,200', avgScore: 76.1, aspirationalCount: 0, lowBwPct: 48, nicPopLatency: '35ms (Port Blair)', code: 'AN' },
  'Andaman and Nicobar': { students: '18,500', dau: '8,200', avgScore: 76.1, aspirationalCount: 0, lowBwPct: 48, nicPopLatency: '35ms (Port Blair)', code: 'AN' },
  'Lakshadweep': { students: '6,200', dau: '2,900', avgScore: 77.4, aspirationalCount: 0, lowBwPct: 42, nicPopLatency: '32ms (Kavaratti)', code: 'LD' },
  'Puducherry': { students: '24,000', dau: '11,500', avgScore: 78.0, aspirationalCount: 0, lowBwPct: 14, nicPopLatency: '12ms (Puducherry)', code: 'PY' }
};

// Custom centroid adjustments for labels
const centroidOverrides = {
  'Ladakh': [300, 75],
  'Jammu & Kashmir': [215, 95],
  'Himachal Pradesh': [275, 145],
  'Punjab': [210, 165],
  'Uttarakhand': [325, 185],
  'Haryana': [245, 215],
  'Delhi': [265, 220],
  'Rajasthan': [180, 260],
  'Uttar Pradesh': [345, 265],
  'Bihar': [460, 280],
  'Sikkim': [500, 235],
  'Gujarat': [125, 330],
  'Madhya Pradesh': [270, 345],
  'Jharkhand': [445, 335],
  'Chhattisgarh': [385, 385],
  'West Bengal': [505, 330],
  'Odisha': [445, 400],
  'Maharashtra': [240, 430],
  'Goa': [195, 495],
  'Telangana': [325, 450],
  'Andhra Pradesh': [355, 515],
  'Karnataka': [250, 530],
  'Kerala': [240, 620],
  'Tamil Nadu': [300, 600],
  'Arunachal Pradesh': [590, 220],
  'Assam': [560, 270],
  'Meghalaya': [535, 295],
  'Nagaland': [615, 285],
  'Manipur': [605, 325],
  'Mizoram': [580, 360],
  'Tripura': [530, 345],
  'Andaman and Nicobar': [570, 580],
  'Lakshadweep': [130, 580]
};

const fullStates = rawPaths.map(p => {
  const normName = p.name;
  const stats = statsDb[normName] || {
    students: '45,000',
    dau: '20,000',
    avgScore: 75.0,
    aspirationalCount: 1,
    lowBwPct: 30,
    nicPopLatency: '18ms',
    code: normName.substring(0, 2).toUpperCase()
  };
  const centroid = centroidOverrides[normName] || p.centroid;
  return {
    id: p.id,
    name: normName,
    code: stats.code,
    zone: zoneMapping[normName] || 'North',
    students: stats.students,
    dau: stats.dau,
    avgScore: stats.avgScore,
    aspirationalCount: stats.aspirationalCount,
    lowBwPct: stats.lowBwPct,
    nicPopLatency: stats.nicPopLatency,
    color: colorPalette[normName] || '#9DBFEA',
    path: p.path,
    centroid: centroid
  };
});

const tsCode = `export interface OfficialStateFeature {
  id: string;
  name: string;
  code: string;
  zone: string;
  students: string;
  dau: string;
  avgScore: number;
  aspirationalCount: number;
  lowBwPct: number;
  nicPopLatency: string;
  color: string;
  path: string;
  centroid: [number, number];
}

export const OFFICIAL_INDIA_STATES: OfficialStateFeature[] = ${JSON.stringify(fullStates, null, 2)};
`;

fs.writeFileSync('src/data/indiaMapData.ts', tsCode);
console.log('Successfully wrote src/data/indiaMapData.ts with ' + fullStates.length + ' official states!');
