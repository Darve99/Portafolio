# Script para instalar dependencias e iniciar el proyecto

Write-Host "=================================" -ForegroundColor Cyan
Write-Host "Enciclopedia del Desarrollador" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Instalando dependencias..." -ForegroundColor Yellow
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Instalacion completada exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Para iniciar el servidor de desarrollo, ejecuta:" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Error durante la instalacion" -ForegroundColor Red
    Write-Host ""
}
