@echo off
chcp 65001 > nul
echo ========================================
echo 🔧 SOLUTION DÉFINITIVE ERREUR 404
echo ========================================
echo.

echo [ÉTAPE 1] Vérification du fichier _redirects...
if exist "build\_redirects" (
    echo ✅ _redirects existe dans build
    echo.
    echo Contenu du fichier :
    type "build\_redirects"
    echo.
) else (
    echo ❌ _redirects manquant ! Création...
    echo /*    /index.html   200 > "build\_redirects"
    echo ✅ Fichier créé
)

echo.
echo [ÉTAPE 2] Vérification du netlify.toml...
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
echo Contenu du fichier :
type netlify.toml
echo.

echo ========================================
echo 📋 INSTRUCTIONS CRUCIALES POUR NETLIFY
echo ========================================
echo.
echo ⚠️  TU AS 2 MÉTHODES. CHOISIS-EN UNE :
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo 🎯 MÉTHODE 1 : DRAG & DROP (Recommandé)
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 1. Va sur https://app.netlify.com
echo 2. Clique sur ton site
echo 3. Va dans "Deploys"
echo 4. IMPORTANT : Glisse LE DOSSIER "build" ENTIER
echo    (pas les fichiers à l'intérieur)
echo 5. Attends que le déploiement se termine
echo.
echo ⚠️  TRÈS IMPORTANT :
echo    - Glisse le DOSSIER "build" (celui avec l'icône)
echo    - PAS les fichiers individuels
echo    - Le dossier doit contenir _redirects
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo 📦 MÉTHODE 2 : VIA GIT (Si connecté GitHub)
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo 1. Ouvre un terminal ici
echo 2. Tape : git add .
echo 3. Tape : git commit -m "Fix 404 with redirects"
echo 4. Tape : git push
echo 5. Netlify va auto-déployer
echo.
echo MAIS ATTENTION : Vérifie les Build settings sur Netlify :
echo    - Build command : npm run build
echo    - Publish directory : build
echo.
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo 🔍 SI ÇA NE MARCHE TOUJOURS PAS
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.
echo Va dans ton site Netlify ^> Site settings ^> Build ^& deploy
echo et vérifie :
echo    - Publish directory = "build" (PAS "." ou "public")
echo    - Build command = "npm run build"
echo.
echo Puis fais un nouveau déploiement !
echo.
pause
