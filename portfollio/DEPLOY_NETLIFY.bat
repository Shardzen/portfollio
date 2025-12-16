@echo off
echo ====================================
echo Preparation pour deploiement Netlify
echo ====================================
echo.

cd "C:\Users\Arthur\Desktop\portfolio\portfollio"

echo 1. Nettoyage du dossier build existant...
if exist build rmdir /s /q build

echo 2. Installation des dependances (si necessaire)...
call npm install

echo 3. Creation du build de production...
call npm run build

echo.
echo ====================================
echo Verification du build...
echo ====================================
if exist "build\index.html" (
    echo [OK] Le fichier index.html a ete genere
    if exist "build\static" (
        echo [OK] Le dossier static existe
        echo.
        echo ====================================
        echo BUILD REUSSI !
        echo ====================================
        echo.
        echo Votre portfolio est pret pour Netlify !
        echo.
        echo PROCHAINES ETAPES :
        echo 1. Allez sur https://app.netlify.com
        echo 2. Cliquez sur "Add new site" puis "Deploy manually"
        echo 3. Glissez-deposez le dossier "build" dans Netlify
        echo.
        echo OU (recommande) :
        echo 1. Connectez votre depot Git a Netlify
        echo 2. Netlify detectera automatiquement la configuration
        echo.
    ) else (
        echo [ERREUR] Le dossier static n'a pas ete genere
        echo Le build a echoue. Verifiez les erreurs ci-dessus.
    )
) else (
    echo [ERREUR] Le fichier index.html n'a pas ete genere
    echo Le build a echoue. Verifiez les erreurs ci-dessus.
)

echo.
pause
