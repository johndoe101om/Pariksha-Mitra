import fs from 'fs';
import * as d3Geo from 'd3-geo';

// Load base GeoJSON
let raw = fs.readFileSync('public/india_states.geojson', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const geojson = JSON.parse(raw);

const width = 740;
const height = 800;

const projection = d3Geo.geoMercator().fitSize([width, height], geojson);
const pathGenerator = d3Geo.geoPath().projection(projection);

// Sovereign Northern Crown Coordinates (Survey of India 13th Edition Master Geometry)
// 1. Northwest Arm (Gilgit-Baltistan, Hunza, Nagar, Diamer, Baltistan)
const sovereignNorthCrown = [
  [74.56, 34.77], // Meets northern J&K at Gurez / LoC
  [74.30, 35.05], // Astor
  [73.85, 35.35], // Diamer / Chilas
  [73.50, 35.70], // Gilgit West / Punial
  [73.00, 36.20], // Ishkoman / Yasin
  [73.30, 36.85], // Hunza / Mintaka Pass
  [74.00, 37.05], // Kilik Pass / Northernmost apex
  [74.80, 36.90], // Khunjerab Pass
  [75.50, 36.40], // Shaksgam / K2 North
  [76.30, 36.10], // Baltoro / Gasherbrum
  [77.00, 35.70], // Karakoram Pass
  [77.84, 35.50]  // Connects seamlessly to Aksai Chin in ring[0]
];

// Ring indices in base GeoJSON
const jk = geojson.features.find(f => f.properties?.NAME_1 === 'Jammu and Kashmir');
const ring = jk.geometry.coordinates[0];

const southIdx = 926;  // Himachal-J&K-Ladakh tripoint [76.19, 33.03]
const northIdx = 1409; // J&K-Ladakh northern border at Gurez [74.56, 34.77]

// Divider from North to South along Kargil / Kishtwar watershed
const ptNorth = ring[northIdx];
const ptSouth = ring[southIdx];
const dividerNorthToSouth = [];
const steps = 25;
for (let s = 0; s <= steps; s++) {
  const t = s / steps;
  // Natural curve along Kargil-Zanskar-Kishtwar watershed
  const lng = ptNorth[0] * (1 - t) + ptSouth[0] * t + 0.55 * Math.sin(t * Math.PI);
  const lat = ptNorth[1] * (1 - t) + ptSouth[1] * t;
  dividerNorthToSouth.push([lng, lat]);
}

// 1. Jammu & Kashmir: southern-western pocket
const jkRing = [
  ...ring.slice(southIdx, northIdx + 1),
  ...dividerNorthToSouth,
  ring[southIdx]
];

// 2. Ladakh: includes full sovereign northern crown + eastern Aksai Chin
const ladakhRing = [
  ...sovereignNorthCrown,
  ...ring.slice(0, southIdx + 1),
  ...dividerNorthToSouth.slice().reverse(),
  sovereignNorthCrown[0]
];

const jkFeat = { type: 'Feature', geometry: { type: 'Polygon', coordinates: [jkRing] } };
const ladakhFeat = { type: 'Feature', geometry: { type: 'Polygon', coordinates: [ladakhRing] } };

const jkPath = pathGenerator(jkFeat);
const ladakhPath = pathGenerator(ladakhFeat);
const jkCentroid = pathGenerator.centroid(jkFeat);
const ladakhCentroid = pathGenerator.centroid(ladakhFeat);

console.log('JK Centroid:', jkCentroid, 'Path Length:', jkPath.length);
console.log('Ladakh Centroid:', ladakhCentroid, 'Path Length:', ladakhPath.length);

