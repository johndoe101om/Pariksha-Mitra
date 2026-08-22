import fs from 'fs';
let raw = fs.readFileSync('public/india_updated.geojson', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const data = JSON.parse(raw);
console.log('Features count in india_updated.geojson:', data.features.length);
data.features.forEach((f, i) => {
  const p = f.properties;
  console.log(i, p.NAME_1 || p.ST_NM || p.name || p.NAME || p.state_name);
});
