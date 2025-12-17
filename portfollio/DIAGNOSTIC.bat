@echo off
chcp 65001 >nul
echo ===============================================
echo 🔍 DIAGNOSTIC COMPLET DU PORTFOLIO
echo ===============================================
echo.

cd /d "%~dp0"

echo [VÉRIFICATION 1] Structure des fichiers
echo ----------------------------------------
set ERROR=0

if exist "package.json" (
    echo ✓ package.json trouvé
) else (
    echo ✗ package.json MANQUANT
    set ERROR=1
)

if exist "netlify.toml" (
    echo ✓ netlify.toml trouvé
) else (
    echo ✗ netlify.toml MANQUANT
    set ERROR=1
)

if exist "src\App.js" (
    echo ✓ src\App.js trouvé
) else (
    echo ✗ src\App.js MANQUANT
    set ERROR=1
)

if exist "src\components\Contact.js" (
    echo ✓ src\components\Contact.js trouvé
) else (
    echo ✗ src\components\Contact.js MANQUANT
    set ERROR=1
)

echo.
echo [VÉRIFICATION 2] Dossier build
echo ----------------------------------------
if exist "build\index.html" (
    echo ✓ build\index.html existe
    
    if exist "build\static\js" (
        echo ✓ build\static\js existe
        dir /b "build\static\js\*.js" | find /c ".js" > temp.txt
        set /p JSCOUNT=<temp.txt
        del temp.txt
        echo   → Fichiers JS trouvés : %JSCOUNT%
    ) else (
        echo ✗ build\static\js MANQUANT
        set ERROR=1
    )
    
    if exist "build\static\css" (
        echo ✓ build\static\css existe
    ) else (
        echo ✗ build\static\css MANQUANT
        set ERROR=1
    )
    
    if exist "build\_redirects" (
        echo ✓ build\_redirects existe
    ) else (
        echo ✗ build\_redirects MANQUANT (CRITIQUE pour Netlify!)
        set ERROR=1
    )
) else (
    echo ✗ build\index.html MANQUANT - Le build n'existe pas!
    echo.
    echo 💡 Solution : Lancez CORRECTION_RAPIDE.bat ou FIX_NETLIFY.bat
    set ERROR=1
)

echo.
echo [VÉRIFICATION 3] Recherche de problèmes EmailJS
echo ------------------------------------------------
findstr /C:"YOUR_SERVICE_ID" "src\components\Contact.js" >nul 2>&1
if %errorlevel% equ 0 (
    echo ⚠ ATTENTION : EmailJS non configuré détecté!
    echo   Contact.js contient des clés factices
    echo.
    echo 💡 Solution : Lancez CORRECTION_RAPIDE.bat
    set ERROR=1
) else (
    echo ✓ Pas de clés EmailJS factices détectées
)

echo.
echo [VÉRIFICATION 4] Contenu de netlify.toml
echo -----------------------------------------
type netlify.toml

echo.
echo [VÉRIFICATION 5] Taille du build
echo ---------------------------------
if exist "build" (
    for /f "tokens=3" %%a in ('dir "build" /s /-c ^| find "fichier(s)"') do set SIZE=%%a
    echo Taille totale du build : %SIZE% octets
    
    if %SIZE% LSS 100000 (
        echo ⚠ Le build semble trop petit!
        set ERROR=1
    ) else (
        echo ✓ Taille du build normale
    )
)

echo.
echo ===============================================
echo 📊 RÉSUMÉ DU DIAGNOSTIC
echo ===============================================

if %ERROR% equ 0 (
    echo.
    echo ✅ TOUT EST OK !
    echo.
    echo Votre portfolio est prêt pour Netlify.
    echo.
    echo 📤 PROCHAINES ÉTAPES :
    echo    1. Allez sur https://app.netlify.com/
    echo    2. Glissez-déposez le dossier 'build'
    echo    3. Ou poussez sur GitHub si lié
    echo.
) else (
    echo.
    echo ❌ PROBLÈMES DÉTECTÉS !
    echo.
    echo 🔧 SOLUTIONS RECOMMANDÉES :
    echo    1. Lancez : CORRECTION_RAPIDE.bat
    echo    OU
    echo    2. Lisez : GUIDE_DEPANNAGE.txt
    echo.
)

echo ===============================================
echo.
echo Appuyez sur une touche pour tester localement...
pause >nul

echo.
echo [TEST LOCAL] Ouverture dans le navigateur...
if exist "build\index.html" (
    start "" "build\index.html"
    echo.
    echo ℹ Le portfolio s'ouvre dans votre navigateur
    echo.
    echo VÉRIFICATIONS À FAIRE :
    echo 1. Le site s'affiche-t-il correctement ?
    echo 2. Y a-t-il des erreurs dans la console (F12) ?
    echo 3. Le formulaire de contact fonctionne-t-il ?
    echo.
    echo Si tout fonctionne ici, ça fonctionnera sur Netlify !
) else (
    echo ✗ Impossible d'ouvrir - build\index.html n'existe pas
)

echo.
pause
