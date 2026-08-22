$urls = @(
  "https://raw.githubusercontent.com/Subhash9325/GeoJson-Data-of-Indian-States/master/Indian_States",
  "https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson",
  "https://raw.githubusercontent.com/AnujTiwari/India-State-and-Country-Shapefile-GeoJson/master/India_State_Boundary.geojson"
)
foreach ($url in $urls) {
  try {
    $res = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 10
    Write-Host "Success: $url Length: $($res.Content.Length)"
    $res.Content | Out-File -FilePath "public/india_states.geojson" -Encoding UTF8
    break
  } catch {
    Write-Host "Failed: $url"
  }
}
