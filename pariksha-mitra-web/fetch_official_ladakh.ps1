$urls = @(
  "https://raw.githubusercontent.com/BharatViz/lgd-district-boundaries/main/Ladakh.geojson",
  "https://raw.githubusercontent.com/BharatViz/lgd-district-boundaries/main/Jammu%20and%20Kashmir.geojson",
  "https://raw.githubusercontent.com/india-in-data/kashmir/master/ladakh.geojson",
  "https://raw.githubusercontent.com/india-in-data/kashmir/master/jammu-kashmir.geojson"
)

foreach ($u in $urls) {
  try {
    $res = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 10
    $fname = [System.IO.Path]::GetFileName($u)
    Write-Host "Success: $fname ($($res.Content.Length) bytes)"
    $res.Content | Out-File -FilePath "public/$fname" -Encoding UTF8
  } catch {
    Write-Host "Failed: $u"
  }
}
