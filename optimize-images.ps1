# Image Optimization Script for WeKraft
# This script helps compress images to improve Lighthouse performance

Write-Host"=== WeKraft Image Optimizer ===" -ForegroundColor Cyan
Write-Host ""

$publicPath = Join-Path $PSScriptRoot "public"
$totalOriginal = 0
$totalCompressed = 0

# Get all images
$images = Get-ChildItem -Path $publicPath -Include *.png,*.jpg,*.jpeg -Recurse

foreach ($image in $images) {
    $originalSize = $image.Length
    $totalOriginal += $originalSize
    
    $sizeKB = [math]::Round($originalSize / 1KB, 2)
    Write-Host"Found: $($image.Name) - ${sizeKB}KB" -ForegroundColor Yellow
    
    # Recommendations based on size
   if ($sizeKB -gt 500) {
        Write-Host"  ⚠️  LARGE IMAGE! Consider compressing to <200KB" -ForegroundColor Red
    } elseif ($sizeKB -gt 200) {
        Write-Host"  ⚡ Medium size. Can be optimized to <100KB" -ForegroundColor Orange
    } else {
        Write-Host"  ✓ Good size" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "=== Recommendations ===" -ForegroundColor Cyan
Write-Host "1. Use online tools like TinyPNG.com or Squoosh.app" -ForegroundColor White
Write-Host "2. Convert PNG to WebP/AVIF where possible" -ForegroundColor White
Write-Host "3. Target sizes:" -ForegroundColor White
Write-Host"   - Hero images: <150KB" -ForegroundColor Gray
Write-Host "   - Background images: <100KB" -ForegroundColor Gray
Write-Host"   - Icons/Logos: <20KB" -ForegroundColor Gray
Write-Host"   - Team photos: <50KB each" -ForegroundColor Gray
Write-Host ""
Write-Host"Total images found: $($images.Count)" -ForegroundColor Cyan
Write-Host ""
