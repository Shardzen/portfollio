@echo off
chcp 65001 > nul
echo ========================================
echo 🔍 DIAGNOSTIC COMPLET DU PORTFOLIO
echo ========================================
echo.

echo [1/5] Vérification de Node.js...
node --version
if %errorlevel% neq 0 (
    echo ❌ Node.js n'est pas installé !
    pause
    exit /b 1
)
echo ✅ Node.js OK
echo.

echo [2/5] Vérification de npm...
npm --version
if %errorlevel% neq 0 (
    echo ❌ npm n'est pas installé !
    pause
    exit /b 1
)
echo ✅ npm OK
echo.

echo [3/5] Installation des dépendances...
call npm install
if %errorlevel% neq 0 (
    echo ❌ Erreur lors de l'installation !
    pause
    exit /b 1
)
echo ✅ Dépendances installées
echo.

echo [4/5] Création du build de production...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Le build a échoué !
    echo.
    echo 📋 Regardez les erreurs ci-dessus pour identifier le problème
    pause
    exit /b 1
)
echo ✅ Build créé avec succès
echo.

echo [5/5] Vérification du dossier build...
if exist "build\index.html" (
    echo ✅ Le fichier index.html existe
) else (
    echo ❌ Le fichier index.html n'existe pas !
    pause
    exit /b 1
)

if exist "build\_redirects" (
    echo ✅ Le fichier _redirects existe
) else (
    echo ⚠️  Le fichier _redirects n'existe pas (copie en cours...)
    copy "public\_redirects" "build\_redirects"
)
echo.

echo ========================================
echo ✅ TOUT EST PRÊT POUR NETLIFY !
echo ========================================
echo.
echo 📁 Dossier à déployer : build\
echo.
echo 🚀 Prochaines étapes sur Netlify :
echo    1. Va sur https://app.netlify.com
echo    2. Glisse-dépose le dossier "build" entier
echo    3. Ou connecte ton repo GitHub/GitLab
echo.
pause
