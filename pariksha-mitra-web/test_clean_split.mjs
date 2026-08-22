import fs from 'fs';
import * as d3Geo from 'd3-geo';

let raw = fs.readFileSync('public/india_states.geojson', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const geojson = JSON.parse(raw);
const jk = geojson.features.find(f => f.properties?.NAME_1 === 'Jammu and Kashmir');
const ring = jk.geometry.coordinates[0];

const width = 740;
const height = 800;

const projection = d3Geo.geoMercator().fitSize([width, height], geojson);
const pathGenerator = d3Geo.geoPath().projection(projection);

// Find exact index where border transitions between J&K and Ladakh
// 1. South tripoint near Himachal (approx lat 32.9, lng 76.0 - 76.5)
let southIdx = 950;
let minSouthDist = Infinity;
for (let i = 850; i <= 1050; i++) {
  const [lng, lat] = ring[i];
  const dist = Math.hypot(lng - 76.2, lat - 32.9);
  if (dist < minSouthDist) {
    minSouthDist = dist;
    southIdx = i;
  }
}

// 2. North transition point (approx lat 34.8, lng 74.5)
let northIdx = 1450;
let minNorthDist = Infinity;
for (let i = 1350; i <= 1550; i++) {
  const [lng, lat] = ring[i];
  const dist = Math.hypot(lng - 74.6, lat - 35.0);
  if (dist < minNorthDist) {
    minNorthDist = dist;
    northIdx = i;
  }
}

console.log(`South split index: ${southIdx} [${ring[southIdx]}], North split index: ${northIdx} [${ring[northIdx]}]`);

// Generate smooth curved divider from North to South
const ptNorth = ring[northIdx];
const ptSouth = ring[southIdx];

const dividerNorthToSouth = [];
const steps = 15;
for (let s = 0; s <= steps; s++) {
  const t = s / steps;
  const lng = ptNorth[0] * (1 - t) + ptSouth[0] * t + 0.3 * Math.sin(t * Math.PI);
  const lat = ptNorth[1] * (1 - t) + ptSouth[1] * t;
  dividerNorthToSouth.push([lng, lat]);
}

// J&K ring: from southIdx to northIdx, then down along dividerNorthToSouth
const jkRing = [
  ...ring.slice(southIdx, northIdx + 1),
  ...dividerNorthToSouth,
  ring[southIdx]
];

// Ladakh ring: from northIdx to end, then 0 to southIdx, then up along dividerNorthToSouth reversed
const ladakhRing = [
  ...ring.slice(northIdx),
  ...ring.slice(0, southIdx + 1),
  ...dividerNorthToSouth.slice().reverse(),
  ring[northIdx]
];

const jkFeat = { type: 'Feature', geometry: { type: 'Polygon', coordinates: [jkRing] } };
const ladakhFeat = { type: 'Feature', geometry: { type: 'Polygon', coordinates: [ladakhRing] } };

const jkPath = pathGenerator(jkFeat);
const ladakhPath = pathGenerator(ladakhFeat);
const jkCentroid = pathGenerator.centroid(jkFeat);
const ladakhCentroid = pathGenerator.centroid(ladakhFeat);

console.log('JK Centroid:', jkCentroid, 'Path length:', jkPath?.length);
console.log('Ladakh Centroid:', ladakhCentroid, 'Path length:', ladakhPath?.length);

