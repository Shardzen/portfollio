@echo off
chcp 65001 >nul
echo ==========================================
echo CORRECTION RAPIDE - SUPPRESSION EMAILJS
echo ==========================================
echo.

cd /d "%~dp0"

echo [ÉTAPE 1] Sauvegarde de l'ancien Contact.js...
if exist "src\components\Contact.js" (
    copy /Y "src\components\Contact.js" "src\components\Contact_OLD.js.bak"
    echo ✓ Sauvegarde créée : Contact_OLD.js.bak
)

echo.
echo [ÉTAPE 2] Remplacement par la version sans EmailJS...
if exist "src\components\Contact_BACKUP.js" (
    copy /Y "src\components\Contact_BACKUP.js" "src\components\Contact.js"
    echo ✓ Contact.js remplacé
) else (
    echo ✗ Erreur : Contact_BACKUP.js n'existe pas
    pause
    exit /b 1
)

echo.
echo [ÉTAPE 3] Mise à jour du package.json...
if exist "package_SANS_EMAILJS.json" (
    copy /Y "package.json" "package_OLD.json.bak"
    copy /Y "package_SANS_EMAILJS.json" "package.json"
    echo ✓ package.json mis à jour (sauvegarde : package_OLD.json.bak)
) else (
    echo ⚠ Avertissement : package_SANS_EMAILJS.json n'existe pas
    echo Vous devrez supprimer manuellement la ligne EmailJS du package.json
)

echo.
echo [ÉTAPE 4] Nettoyage...
if exist "node_modules" (
    echo Suppression de node_modules...
    rmdir /s /q "node_modules"
)
if exist "build" (
    echo Suppression du build...
    rmdir /s /q "build"
)
if exist "package-lock.json" (
    del /f "package-lock.json"
)

echo.
echo [ÉTAPE 5] Réinstallation des dépendances...
call npm install

echo.
echo [ÉTAPE 6] Création du nouveau build...
call npm run build

echo.
echo ==========================================
if exist "build\index.html" (
    echo ✓ SUCCÈS ! Le portfolio est prêt
    echo.
    echo Fichier build\index.html créé avec succès
    echo.
    echo PROCHAINES ÉTAPES :
    echo 1. Allez sur https://app.netlify.com/
    echo 2. Glissez-déposez le dossier 'build' sur Netlify
    echo 3. Ou poussez les changements sur GitHub si lié
) else (
    echo ✗ ÉCHEC - Le build n'a pas été créé
    echo Vérifiez les erreurs ci-dessus
)
echo ==========================================
echo.
pause
