import fs from 'fs';
import * as d3Geo from 'd3-geo';

let rawData = fs.readFileSync('public/india_states.geojson', 'utf8');
if (rawData.charCodeAt(0) === 0xFEFF) rawData = rawData.slice(1);
const geojson = JSON.parse(rawData);

const width = 740;
const height = 800;

const projection = d3Geo.geoMercator().fitSize([width, height], geojson);
const pathGenerator = d3Geo.geoPath().projection(projection);

const jkFeature = geojson.features.find(f => f.properties?.NAME_1 === 'Jammu and Kashmir');
const ring = jkFeature.geometry.coordinates[0];

// The border between Ladakh and J&K in official map starts at the Himachal-J&K-Ladakh tripoint:
// ~ (76.6, 32.9) -> goes north-west through Zanskar range to (75.8, 34.2) -> around Kargil to (75.2, 34.7) -> north to (74.8, 35.1) -> meets international boundary at (74.5, 35.3)

const dividerPoints = [
  [76.6, 32.9],
  [76.3, 33.3],
  [75.9, 33.8],
  [75.6, 34.2],
  [75.1, 34.6],
  [74.7, 34.9],
  [74.4, 35.2]
];

// Let's filter points of the outer boundary for J&K (west/south of divider) and Ladakh (north/east of divider)
const jkOuter = [];
const ladakhOuter = [];

ring.forEach(pt => {
  const [lng, lat] = pt;
  // If point is in the south-west pocket:
  if (lat < 35.2 && lng < 76.6 && !(lat > 34.5 && lng > 75.2)) {
    // Points along southern / western J&K border
    if (lng <= 75.8 || (lat < 33.8 && lng < 76.6)) {
      jkOuter.push(pt);
    } else {
      ladakhOuter.push(pt);
    }
  } else {
    // All northern crown and eastern Aksai Chin belong to Ladakh
    ladakhOuter.push(pt);
  }
});

const closedJk = [...jkOuter, ...dividerPoints, jkOuter[0]];
const closedLadakh = [...ladakhOuter, ...dividerPoints.slice().reverse(), ladakhOuter[0]];

const ladakhFeat = { type: 'Feature', geometry: { type: 'Polygon', coordinates: [closedLadakh] } };
const jkFeat = { type: 'Feature', geometry: { type: 'Polygon', coordinates: [closedJk] } };

const ladakhPath = pathGenerator(ladakhFeat);
const jkPath = pathGenerator(jkFeat);
const ladakhCentroid = pathGenerator.centroid(ladakhFeat);
const jkCentroid = pathGenerator.centroid(jkFeat);

console.log('Ladakh Centroid:', ladakhCentroid, 'Path Length:', ladakhPath.length);
console.log('JK Centroid:', jkCentroid, 'Path Length:', jkPath.length);

