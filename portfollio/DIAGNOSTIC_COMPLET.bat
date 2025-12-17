@echo off
chcp 65001 > nul
echo ========================================
echo 🔍 DIAGNOSTIC COMPLET DES ERREURS
echo ========================================
echo.

echo [1/3] Test du build...
echo.

call npm run build > build_test.log 2>&1

if %errorlevel% neq 0 (
    echo ❌ LE BUILD A ÉCHOUÉ !
    echo.
    echo 📋 Voici les erreurs détectées :
    echo ========================================
    type build_test.log
    echo ========================================
    echo.
    echo 💡 Analyse des problèmes courants...
    echo.
    
    findstr /C:"Cannot find module" build_test.log > nul
    if %errorlevel% equ 0 (
        echo ❌ PROBLÈME : Modules manquants
        echo 🔧 SOLUTION : Lance "npm install"
        echo.
    )
    
    findstr /C:"SyntaxError" build_test.log > nul
    if %errorlevel% equ 0 (
        echo ❌ PROBLÈME : Erreur de syntaxe dans le code
        echo 🔧 SOLUTION : Vérifie la syntaxe JavaScript/JSX
        echo.
    )
    
    findstr /C:"'emailjs'" build_test.log > nul
    if %errorlevel% equ 0 (
        echo ❌ PROBLÈME : EmailJS mal configuré
        echo 🔧 SOLUTION : Configure EmailJS ou retire l'import
        echo.
    )
    
    findstr /C:"Module not found" build_test.log > nul
    if %errorlevel% equ 0 (
        echo ❌ PROBLÈME : Import incorrect dans un fichier
        echo 🔧 SOLUTION : Vérifie tous les imports dans tes composants
        echo.
    )
    
    echo.
    echo 📝 Le log complet est dans : build_test.log
    pause
    exit /b 1
) else (
    echo ✅ BUILD RÉUSSI !
    echo.
)

echo [2/3] Vérification de la structure...
if exist "build\index.html" (
    echo ✅ index.html présent
) else (
    echo ❌ index.html manquant
)

if exist "build\_redirects" (
    echo ✅ _redirects présent
) else (
    echo ⚠️  _redirects manquant
)

echo.
echo [3/3] Vérification des dépendances critiques...
npm list @emailjs/browser > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ EmailJS installé
) else (
    echo ⚠️  EmailJS non installé (normal si tu ne l'utilises pas)
)

npm list framer-motion > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Framer Motion installé
) else (
    echo ❌ Framer Motion manquant !
)

npm list react-icons > nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ React Icons installé
) else (
    echo ❌ React Icons manquant !
)

echo.
echo ========================================
echo 📊 RÉSUMÉ DU DIAGNOSTIC
echo ========================================
echo.

if exist "build\index.html" (
    echo ✅ Le site peut être déployé
    echo.
    echo 🚀 PROCHAINE ÉTAPE :
    echo    1. Va sur https://app.netlify.com
    echo    2. Glisse-dépose le dossier "build"
    echo.
) else (
    echo ❌ Le site ne peut pas être déployé
    echo    Corrige d'abord les erreurs ci-dessus
    echo.
)

pause
