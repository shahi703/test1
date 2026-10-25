@echo off
title Sanat Academic
echo.
echo ============================================
echo    Sanat Academic - SanatAcademic.ir
echo ============================================
echo.
echo Loading website...
echo.

if exist "public\standalone.html" (
    start "" "public\standalone.html"
    echo [OK] Website opened!
    echo File: public\standalone.html
    goto :done
)

if exist "standalone.html" (
    start "" "standalone.html"
    echo [OK] Website opened!
    echo File: standalone.html
    goto :done
)

if exist "dist\standalone.html" (
    start "" "dist\standalone.html"
    echo [OK] Website opened!
    echo File: dist\standalone.html
    goto :done
)

if exist "dist\index.html" (
    start "" "dist\index.html"
    echo [OK] Website opened!
    echo File: dist\index.html
    goto :done
)

echo [ERROR] Website file not found!
echo.
echo Please make sure standalone.html exists.
echo.

:done
echo.
echo ============================================
echo  Phone: 09910671238
echo  Web: sanatAcademic.ir
echo  Instagram: @sanatacademic
echo ============================================
echo.
pause
