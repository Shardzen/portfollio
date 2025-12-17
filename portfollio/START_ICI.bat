@echo off
chcp 65001 >nul
color 0A
cls

echo.
echo    ╔═══════════════════════════════════════════════════════════════╗
echo    ║                                                               ║
echo    ║       🚀  BIENVENUE DANS LA CORRECTION PORTFOLIO  🚀          ║
echo    ║                                                               ║
echo    ║                    Arthur Pineau - 2025                       ║
echo    ║                                                               ║
echo    ╚═══════════════════════════════════════════════════════════════╝
echo.
echo.
echo    ┌───────────────────────────────────────────────────────────────┐
echo    │                                                               │
echo    │  ❌ PROBLÈME : Votre portfolio ne fonctionne pas sur Netlify  │
echo    │                                                               │
echo    │  ✅ CAUSE : EmailJS non configuré dans Contact.js            │
echo    │                                                               │
echo    └───────────────────────────────────────────────────────────────┘
echo.
echo.
echo    ╔═══════════════════════════════════════════════════════════════╗
echo    ║                    CHOISISSEZ UNE OPTION                      ║
echo    ╚═══════════════════════════════════════════════════════════════╝
echo.
echo    1. 🔍 DIAGNOSTIC - Analyser l'état actuel
echo       └─→ Recommandé pour comprendre le problème
echo.
echo    2. ⚡ CORRECTION RAPIDE - Corriger automatiquement
echo       └─→ Supprime EmailJS et rebuild (RECOMMANDÉ)
echo.
echo    3. 🛠️ FIX COMPLET - Rebuild total
echo       └─→ Nettoie et reconstruit tout de zéro
echo.
echo    4. 📖 LIRE LES INSTRUCTIONS
echo       └─→ Ouvre le guide visuel
echo.
echo    5. 🆘 AIDE - Guide de dépannage
echo       └─→ Solutions détaillées pour tous les problèmes
echo.
echo    6. ❌ QUITTER
echo.
echo    ╔═══════════════════════════════════════════════════════════════╗
echo    ║                                                               ║

set /p choice="    ║  Votre choix (1-6) : "

echo    ║                                                               ║
echo    ╚═══════════════════════════════════════════════════════════════╝
echo.

if "%choice%"=="1" goto diagnostic
if "%choice%"=="2" goto correction
if "%choice%"=="3" goto fix
if "%choice%"=="4" goto instructions
if "%choice%"=="5" goto aide
if "%choice%"=="6" goto quit

echo    ❌ Choix invalide. Veuillez entrer un nombre entre 1 et 6.
timeout /t 2 >nul
goto start

:diagnostic
cls
echo    Lancement du diagnostic...
call DIAGNOSTIC.bat
goto end

:correction
cls
echo    Lancement de la correction rapide...
call CORRECTION_RAPIDE.bat
goto end

:fix
cls
echo    Lancement du fix complet...
call FIX_NETLIFY.bat
goto end

:instructions
cls
echo    Ouverture des instructions...
start notepad INSTRUCTIONS_VISUELLES.txt
timeout /t 1 >nul
echo.
echo    📖 Instructions ouvertes dans Notepad
echo.
pause
goto start

:aide
cls
echo    Ouverture du guide de dépannage...
start notepad GUIDE_DEPANNAGE.txt
timeout /t 1 >nul
echo.
echo    🆘 Guide de dépannage ouvert dans Notepad
echo.
pause
goto start

:quit
cls
echo.
echo    ╔═══════════════════════════════════════════════════════════════╗
echo    ║                                                               ║
echo    ║                      👋 Au revoir !                           ║
echo    ║                                                               ║
echo    ║    N'oubliez pas de déployer votre dossier 'build' sur :     ║
echo    ║             https://app.netlify.com/                          ║
echo    ║                                                               ║
echo    ╚═══════════════════════════════════════════════════════════════╝
echo.
timeout /t 3 >nul
exit

:end
echo.
echo    ╔═══════════════════════════════════════════════════════════════╗
echo    ║                    OPÉRATION TERMINÉE                         ║
echo    ╚═══════════════════════════════════════════════════════════════╝
echo.
echo    📤 PROCHAINE ÉTAPE : Déployer sur Netlify
echo.
echo    1. Allez sur : https://app.netlify.com/
echo    2. Glissez-déposez le dossier 'build'
echo    3. ✓ Votre site est en ligne !
echo.
echo.
echo    Voulez-vous relancer le menu ? (O/N)
set /p restart=": "

if /i "%restart%"=="O" goto start
if /i "%restart%"=="Y" goto start

goto quit
