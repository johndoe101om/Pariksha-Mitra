import fs from 'fs';
import * as d3Geo from 'd3-geo';

let rawData = fs.readFileSync('public/india_states.geojson', 'utf8');
if (rawData.charCodeAt(0) === 0xFEFF) rawData = rawData.slice(1);
const geojson = JSON.parse(rawData);

// Let's modify features to split J&K into J&K and Ladakh accurately!
const width = 720;
const height = 780;

const projection = d3Geo.geoMercator().fitSize([width, height], geojson);
const pathGenerator = d3Geo.geoPath().projection(projection);

const newFeatures = [];

geojson.features.forEach((f, i) => {
  let name = f.properties?.NAME_1 || f.properties?.ST_NM || `State_${i}`;
  if (name === 'Uttaranchal') name = 'Uttarakhand';
  if (name === 'Orissa') name = 'Odisha';

  if (name === 'Jammu and Kashmir') {
    // Split into J&K and Ladakh
    // Original coordinates: MultiPolygon
    // Ladakh is east of approx 75.8 deg longitude, J&K is west
    const geom = f.geometry;
    
    // We can create two separate features for J&K and Ladakh
    const jkPolygons = [];
    const ladakhPolygons = [];
    
    if (geom.type === 'MultiPolygon') {
      geom.coordinates.forEach(polygon => {
        // compute average longitude of polygon ring
        const ring = polygon[0];
        let sumLng = 0;
        ring.forEach(pt => sumLng += pt[0]);
        const avgLng = sumLng / ring.length;
        if (avgLng > 76.2) {
          ladakhPolygons.push(polygon);
        } else {
          jkPolygons.push(polygon);
        }
      });
    } else if (geom.type === 'Polygon') {
      const ring = geom.coordinates[0];
      const jkRing = [];
      const ladakhRing = [];
      
      ring.forEach(pt => {
        if (pt[0] > 76.2) {
          ladakhRing.push(pt);
        } else {
          jkRing.push(pt);
        }
      });
      if (jkRing.length > 3) jkPolygons.push([jkRing]);
      if (ladakhRing.length > 3) ladakhPolygons.push([ladakhRing]);
    }

    // Add Ladakh Feature
    newFeatures.push({
      type: 'Feature',
      properties: { NAME_1: 'Ladakh', ST_NM: 'Ladakh' },
      geometry: ladakhPolygons.length > 0 ? {
        type: 'MultiPolygon',
        coordinates: ladakhPolygons
      } : geom
    });

    // Add J&K Feature
    newFeatures.push({
      type: 'Feature',
      properties: { NAME_1: 'Jammu & Kashmir', ST_NM: 'Jammu & Kashmir' },
      geometry: jkPolygons.length > 0 ? {
        type: 'MultiPolygon',
        coordinates: jkPolygons
      } : geom
    });
  } else {
    newFeatures.push({
      ...f,
      properties: { ...f.properties, NAME_1: name, ST_NM: name }
    });
  }
});

console.log('Total updated features:', newFeatures.length);

const stateData = newFeatures.map((f, i) => {
  const name = f.properties.NAME_1;
  const path = pathGenerator(f);
  const centroid = pathGenerator.centroid(f);
  return {
    id: `state_${i}`,
    name,
    path,
    centroid: [Math.round(centroid[0]), Math.round(centroid[1])]
  };
});

fs.writeFileSync('src/data/indiaGeoPaths_updated.json', JSON.stringify(stateData, null, 2));
console.log('Saved to src/data/indiaGeoPaths_updated.json!');
