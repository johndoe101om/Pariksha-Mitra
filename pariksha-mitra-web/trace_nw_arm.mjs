import fs from 'fs';
let raw = fs.readFileSync('public/india_states.geojson', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const geojson = JSON.parse(raw);
const jk = geojson.features.find(f => f.properties?.NAME_1 === 'Jammu and Kashmir');
const ring = jk.geometry.coordinates[0];

console.log('--- Ring coordinates 0 to 100 ---');
for (let i = 0; i < 100; i += 10) {
  console.log(`[${i}] Lng: ${ring[i][0].toFixed(2)}, Lat: ${ring[i][1].toFixed(2)}`);
}
