import fs from 'fs';
let raw = fs.readFileSync('public/india_updated.geojson', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const geojson = JSON.parse(raw);
const jk = geojson.features[15];
console.log('Name:', jk.properties);
console.log('Geometry type:', jk.geometry.type);
const coords = jk.geometry.type === 'Polygon' ? jk.geometry.coordinates[0] : jk.geometry.coordinates[0][0];
console.log('Coords count:', coords.length);
let maxLat = -Infinity, minLat = Infinity, maxLng = -Infinity, minLng = Infinity;
coords.forEach(pt => {
  if (pt[1] > maxLat) maxLat = pt[1];
  if (pt[1] < minLat) minLat = pt[1];
  if (pt[0] > maxLng) maxLng = pt[0];
  if (pt[0] < minLng) minLng = pt[0];
});
console.log(`Bounds: Lat [${minLat}, ${maxLat}], Lng [${minLng}, ${maxLng}]`);
