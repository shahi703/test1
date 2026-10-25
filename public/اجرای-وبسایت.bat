@echo off
chcp 65001 >nul
title صنعت آکادمی - SanatAcademic.ir
color 0B

echo.
echo  ╔══════════════════════════════════════════════════════╗
echo  ║                                                      ║
echo  ║              صنعت آکادمی                             ║
echo  ║              SanatAcademic.ir                        ║
echo  ║                                                      ║
echo  ║     متخصص طراحی دیتابیس و اتوماسیون اداری            ║
echo  ║                                                      ║
echo  ╚══════════════════════════════════════════════════════╝
echo.
echo  در حال بارگذاری وبسایت...
echo.

REM تلاش برای پیدا کردن فایل standalone.html در مسیرهای مختلف
if exist "public\standalone.html" (
    start "" "public\standalone.html"
    echo  ✅ وبسایت با موفقیت باز شد!
    echo  فایل: public\standalone.html
) else if exist "standalone.html" (
    start "" "standalone.html"
    echo  ✅ وبسایت با موفقیت باز شد!
    echo  فایل: standalone.html
) else if exist "dist\standalone.html" (
    start "" "dist\standalone.html"
    echo  ✅ وبسایت با موفقیت باز شد!
    echo  فایل: dist\standalone.html
) else if exist "dist\index.html" (
    start "" "dist\index.html"
    echo  ✅ وبسایت با موفقیت باز شد!
    echo  فایل: dist\index.html
) else (
    echo  ❌ خطا: فایل وبسایت پیدا نشد!
    echo.
    echo  لطفاً مطمئن شوید که فایل standalone.html در یکی از مسیرهای زیر وجود دارد:
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
echo  📞 تماس: 09910671238
echo  🌐 سایت: sanatAcademic.ir
echo  📱 اینستاگرام: @sanatacademic
echo  ══════════════════════════════════════════════════════
echo.
echo  این پنجره را می‌توانید ببندید.
echo.
timeout /t 5 /nobreak >nul
