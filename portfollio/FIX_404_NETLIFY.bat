@echo off
chcp 65001 > nul
echo ========================================
echo 🔧 CORRECTION ERREUR 404 NETLIFY
echo ========================================
echo.

echo [1/4] Vérification du fichier netlify.toml...
if exist "netlify.toml" (
    echo ✅ netlify.toml existe
) else (
    echo ⚠️  Création de netlify.toml...
)

echo [build] > netlify.toml
echo   command = "npm run build" >> netlify.toml
echo   publish = "build" >> netlify.toml
echo. >> netlify.toml
echo [[redirects]] >> netlify.toml
echo   from = "/*" >> netlify.toml
echo   to = "/index.html" >> netlify.toml
echo   status = 200 >> netlify.toml

echo ✅ netlify.toml configuré
echo.

echo [2/4] Vérification du fichier _redirects dans public...
if exist "public\_redirects" (
    echo ✅ public\_redirects existe
) else (
    echo ⚠️  Création de public\_redirects...
    echo /*    /index.html   200 > public\_redirects
)
echo ✅ _redirects configuré
echo.

echo [3/4] Reconstruction du build avec les corrections...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Erreur lors du build !
    pause
    exit /b 1
)
echo ✅ Build créé avec succès
echo.

echo [4/4] Vérification finale...
if exist "build\index.html" (
    echo ✅ index.html présent
) else (
    echo ❌ index.html manquant !
    pause
    exit /b 1
)

if exist "build\_redirects" (
    echo ✅ _redirects copié dans build
) else (
    echo ⚠️  Copie manuelle de _redirects...
    copy "public\_redirects" "build\_redirects"
)

echo.
echo ========================================
echo ✅ CORRECTION TERMINÉE !
echo ========================================
echo.
echo 📋 ÉTAPES SUIVANTES :
echo.
echo 1️⃣  Va sur https://app.netlify.com
echo 2️⃣  Clique sur ton site
echo 3️⃣  Va dans "Deploys"
echo 4️⃣  Glisse-dépose le dossier "build" entier
echo.
echo OU si tu utilises Git :
echo.
echo 1️⃣  git add .
echo 2️⃣  git commit -m "Fix 404 errors"
echo 3️⃣  git push
echo.
echo 🎯 L'erreur 404 sera corrigée !
echo.
pause
