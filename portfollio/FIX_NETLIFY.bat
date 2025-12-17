@echo off
echo ========================================
echo CORRECTION DU PORTFOLIO POUR NETLIFY
echo ========================================
echo.

echo [1/4] Nettoyage du cache...
if exist node_modules rmdir /s /q node_modules
if exist build rmdir /s /q build

echo.
echo [2/4] Reinstallation des dependances...
call npm install

echo.
echo [3/4] Creation du nouveau build...
call npm run build

echo.
echo [4/4] Verification du build...
if exist build\index.html (
    echo [OK] Build cree avec succes !
) else (
    echo [ERREUR] Le build a echoue !
)

echo.
echo ========================================
echo CORRECTION TERMINEE
echo ========================================
echo.
echo Prochaines etapes :
echo 1. Deployer le dossier 'build' sur Netlify
echo 2. Verifier que netlify.toml est present
echo 3. Configurer EmailJS si necessaire
echo.
pause
