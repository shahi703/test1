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
if exist "public\standalone.html" (
    start "" "public\standalone.html"
    echo  [OK] Website opened successfully!
    echo  File: public\standalone.html
) else if exist "standalone.html" (
    start "" "standalone.html"
    echo  [OK] Website opened successfully!
    echo  File: standalone.html
) else if exist "dist\standalone.html" (
    start "" "dist\standalone.html"
    echo  [OK] Website opened successfully!
    echo  File: dist\standalone.html
) else if exist "dist\index.html" (
    start "" "dist\index.html"
    echo  [OK] Website opened successfully!
    echo  File: dist\index.html
) else (
    echo  [ERROR] Website file not found!
    echo.
    echo  Please make sure standalone.html exists in one of these locations:
    echo    - public\standalone.html
    echo    - standalone.html
    echo    - dist\standalone.html
    echo    - dist\index.html
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
