@echo off
setlocal EnableExtensions
title Florida RP - Patch Notes
cd /d "%~dp0"

echo.
echo  ============================================
echo   Florida RP  -  Patch Notes
echo   Mantendo o site online...
echo  ============================================
echo.

where node >nul 2>&1
if errorlevel 1 (
  if exist "%ProgramFiles%\nodejs\node.exe" set "PATH=%ProgramFiles%\nodejs;%PATH%"
  if exist "%LocalAppData%\Programs\nodejs\node.exe" set "PATH=%LocalAppData%\Programs\nodejs;%PATH%"
)

where node >nul 2>&1
if errorlevel 1 (
  echo [ERRO] Node.js nao encontrado. Instale em https://nodejs.org
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo Falha no npm install.
    pause
    exit /b 1
  )
)

set NEXT_TELEMETRY_DISABLED=1
set NEXT_DISABLE_DEVTOOLS=1

netsh advfirewall firewall delete rule name="Florida Site 3000" >nul 2>&1
netsh advfirewall firewall add rule name="Florida Site 3000" dir=in action=allow protocol=TCP localport=3000 >nul 2>&1

:loop
echo.
echo  Abra no navegador:
echo    http://localhost:3000
echo    http://192.168.1.9:3000
echo    http://104.234.119.67:3000
echo.
echo  Sem a porta :3000 o IP da VPS nao abre.
echo  Nao feche esta janela.
echo.

call npm run dev -- -H 0.0.0.0 -p 3000

echo Site caiu. Reiniciando em 5 segundos...
timeout /t 5 /nobreak >nul
goto loop
