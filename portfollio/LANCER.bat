@echo off
echo ====================================
echo Lancement du Portfolio
echo ====================================
echo.

cd "C:\Users\Arthur\Desktop\portfolio\portfollio"

echo Demarrage du serveur de developpement...
echo Votre portfolio sera accessible sur http://localhost:3000
echo.
echo Appuyez sur Ctrl+C pour arreter le serveur
echo.

call npm start

pause