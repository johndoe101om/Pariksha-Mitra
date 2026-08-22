import fs from 'fs';
let raw = fs.readFileSync('public/india_states.geojson', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const data = JSON.parse(raw);
const jk = data.features.find(f => f.properties?.NAME_1 === 'Jammu and Kashmir' || f.properties?.ST_NM === 'Jammu and Kashmir');
console.log('JK geometry type:', jk.geometry.type);
console.log('Coordinates depth/length:', jk.geometry.coordinates.length);
if (jk.geometry.type === 'Polygon') {
  console.log('Ring 0 points count:', jk.geometry.coordinates[0].length);
  console.log('Sample point:', jk.geometry.coordinates[0][0]);
} else if (jk.geometry.type === 'MultiPolygon') {
  console.log('Polygons count:', jk.geometry.coordinates.length);
  console.log('Sample point from poly 0:', jk.geometry.coordinates[0][0][0]);
}
