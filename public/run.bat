@echo off
chcp 65001 >nul
title Sanat Academic - Website Launcher
color 0B

echo.
echo  ╔══════════════════════════════════════════════════════╗
echo  ║                                                      ║
echo  ║              Sanat Academic                          ║
echo  ║              SanatAcademic.ir                        ║
echo  ║                                                      ║
echo  ║     Database Design & Office Automation Expert       ║
echo  ║                                                      ║
echo  ╚══════════════════════════════════════════════════════╝
echo.
echo  Loading website...
echo.

REM Try to find standalone.html in different locations
if exist "standalone.html" (
    start "" "standalone.html"
    echo  [OK] Website opened successfully!
) else if exist "..\standalone.html" (
    start "" "..\standalone.html"
    echo  [OK] Website opened successfully!
) else if exist "..\public\standalone.html" (
    start "" "..\public\standalone.html"
    echo  [OK] Website opened successfully!
) else if exist "index.html" (
    start "" "index.html"
    echo  [OK] Website opened successfully!
) else (
    echo  [ERROR] Website file not found!
    echo.
    echo  Please make sure standalone.html exists in this folder.
    echo.
    pause
    exit /b 1
)

echo.
echo  ══════════════════════════════════════════════════════
echo  Phone: 09910671238
echo  Website: sanatAcademic.ir
echo  Instagram: @sanatacademic
echo  ══════════════════════════════════════════════════════
echo.
echo  You can close this window now.
echo.
timeout /t 5 /nobreak >nul
