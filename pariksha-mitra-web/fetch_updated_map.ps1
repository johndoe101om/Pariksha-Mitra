$urls = @(
  "https://raw.githubusercontent.com/udit-001/india-maps-data/master/india.geojson",
  "https://raw.githubusercontent.com/udit-001/india-maps-data/master/india-states.geojson",
  "https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@master/india.geojson",
  "https://raw.githubusercontent.com/datameet/maps/master/States/Admin2.geojson",
  "https://raw.githubusercontent.com/geohacker/india/master/state/india_telengana.geojson"
)

foreach ($u in $urls) {
  try {
    $res = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 10
    Write-Host "Success: $u (Size: $($res.Content.Length))"
    $res.Content | Out-File -FilePath "public/india_updated.geojson" -Encoding UTF8
    break
  } catch {
    Write-Host "Failed: $u"
  }
}
