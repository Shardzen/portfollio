@echo off
echo ====================================
echo Build de Production du Portfolio
echo ====================================
echo.

cd "C:\Users\Arthur\Desktop\portfolio\portfollio"

echo Creation du build optimise pour la production...
call npm run build

echo.
echo ====================================
echo Build termine avec succes !
echo ====================================
echo.
echo Le dossier "build" contient votre portfolio optimise.
echo Vous pouvez maintenant le deployer sur :
echo - Netlify (glisser-deposer le dossier build)
echo - Vercel
echo - GitHub Pages
echo.
pause