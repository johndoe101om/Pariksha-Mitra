import fs from 'fs';
let raw = fs.readFileSync('public/india_states.geojson', 'utf8');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const data = JSON.parse(raw);
console.log('States in public/india_states.geojson:');
data.features.forEach((f, i) => {
  console.log(i, f.properties);
});
