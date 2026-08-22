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

// The boundary dividing J&K and Ladakh runs roughly north-south from ~ (76.0, 32.8) to (76.0, 36.8)
// Let's create two clean polygons:
const ladakhRing = [];
const jkRing = [];

// Boundary dividing line points from South to North
const divideLineSouthToNorth = [
  [76.0, 32.8],
  [75.95, 33.2],
  [75.85, 33.6],
  [75.80, 34.0],
  [75.75, 34.5],
  [75.70, 35.0],
  [75.80, 35.5],
  [75.90, 36.0],
  [76.00, 36.5],
  [76.10, 37.1]
];

// Split ring points
ring.forEach(pt => {
  const [lng, lat] = pt;
  // Compute expected divide longitude at this latitude
  const t = Math.max(0, Math.min(1, (lat - 32.8) / (37.1 - 32.8)));
  const divideLng = 76.0 - 0.25 * Math.sin(t * Math.PI) + 0.1 * t;

  if (lng >= divideLng) {
    ladakhRing.push(pt);
  } else {
    jkRing.push(pt);
  }
});

// Close polygons along the divider line
const closedLadakhRing = [...ladakhRing, ...divideLineSouthToNorth, ladakhRing[0]];
const closedJkRing = [...jkRing, ...divideLineSouthToNorth.slice().reverse(), jkRing[0]];

const ladakhFeat = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [closedLadakhRing]
  }
};

const jkFeat = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [closedJkRing]
  }
};

const ladakhPath = pathGenerator(ladakhFeat);
const jkPath = pathGenerator(jkFeat);
const ladakhCentroid = pathGenerator.centroid(ladakhFeat);
const jkCentroid = pathGenerator.centroid(jkFeat);

console.log('Ladakh path length:', ladakhPath?.length, 'Centroid:', ladakhCentroid);
console.log('JK path length:', jkPath?.length, 'Centroid:', jkCentroid);

