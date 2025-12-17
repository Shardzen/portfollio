@echo off
chcp 65001 > nul
echo ========================================
echo ✅ CORRECTION ET BUILD FINAL
echo ========================================
echo.

echo [1/4] Nettoyage...
if exist "build" rmdir /s /q build
echo ✅ Dossier build nettoyé
echo.

echo [2/4] Reconstruction du projet...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo ❌ Le build a échoué !
    echo Vérifie les erreurs ci-dessus
    pause
    exit /b 1
)
echo ✅ Build réussi sans warnings !
echo.

echo [3/4] Vérification des fichiers essentiels...
if exist "build\index.html" (
    echo ✅ index.html présent
) else (
    echo ❌ index.html manquant !
    pause
    exit /b 1
)

if exist "build\_redirects" (
    echo ✅ _redirects présent
) else (
    echo ⚠️  Copie de _redirects...
    copy "public\_redirects" "build\_redirects"
)

echo.
echo [4/4] Vérification netlify.toml...
if exist "netlify.toml" (
    echo ✅ netlify.toml présent
) else (
    echo ⚠️  Création de netlify.toml...
    (
        echo [build]
        echo   command = "npm run build"
        echo   publish = "build"
        echo.
        echo [[redirects]]
        echo   from = "/*"
        echo   to = "/index.html"
        echo   status = 200
    ) > netlify.toml
)

echo.
echo ========================================
echo 🎉 TOUT EST PRÊT POUR NETLIFY !
echo ========================================
echo.
echo 📁 Ton dossier "build" est prêt à être déployé
echo.
echo 🚀 MÉTHODE 1 - Drag and Drop (RECOMMANDÉ) :
echo    1. Va sur https://app.netlify.com
echo    2. Clique sur ton site
echo    3. Va dans "Deploys"
echo    4. Glisse-dépose le dossier "build" entier
echo.
echo 📦 MÉTHODE 2 - Via Git :
echo    1. git add .
echo    2. git commit -m "Fix all errors and warnings"
echo    3. git push
echo.
echo ⚠️  IMPORTANT : Glisse le DOSSIER "build" complet, pas les fichiers
echo.
pause
