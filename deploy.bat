@echo off
echo ==========================
echo 🚀 Starting Deployment...
echo ==========================

echo.
echo 🔨 Building project...
call npm run build

IF %ERRORLEVEL% NEQ 0 (
    echo ❌ Build failed! Fix errors and try again.
    pause
    exit /b
)

echo.
echo 📦 Adding files...
git add .

git diff --cached --quiet
IF %ERRORLEVEL% EQU 0 (
    echo ⚠️ No changes to commit.
    pause
    exit /b
)

echo.
echo 📝 Committing changes...
git commit -m "Build update on %date% at %time%"

echo.
echo 🚀 Pushing to GitHub...
git push origin main

echo.
echo ✅ Deployment completed successfully!
pause
