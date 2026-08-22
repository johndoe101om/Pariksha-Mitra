import fs from 'fs';
import * as d3Geo from 'd3-geo';

let rawData = fs.readFileSync('public/india_states.geojson', 'utf8');
if (rawData.charCodeAt(0) === 0xFEFF) {
  rawData = rawData.slice(1);
}
const geojson = JSON.parse(rawData);

console.log('Features count:', geojson.features.length);

const width = 720;
const height = 780;

const projection = d3Geo.geoMercator()
  .fitSize([width, height], geojson);

const pathGenerator = d3Geo.geoPath().projection(projection);

const stateData = geojson.features.map((f, i) => {
  const name = f.properties?.ST_NM || f.properties?.NAME_1 || f.properties?.name || `State_${i}`;
  const path = pathGenerator(f);
  const centroid = pathGenerator.centroid(f);
  return {
    id: `state_${i}`,
    name,
    path,
    centroid: [Math.round(centroid[0]), Math.round(centroid[1])]
  };
});

if (!fs.existsSync('src/data')) {
  fs.mkdirSync('src/data', { recursive: true });
}

fs.writeFileSync('src/data/indiaGeoPaths.json', JSON.stringify(stateData, null, 2));
console.log('Generated ' + stateData.length + ' state paths in src/data/indiaGeoPaths.json');
