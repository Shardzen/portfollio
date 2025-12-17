# 🚀 CORRECTION DE VOTRE PORTFOLIO NETLIFY

## ❌ PROBLÈME IDENTIFIÉ

Votre portfolio ne fonctionne pas sur Netlify à cause d'**EmailJS non configuré**.

Dans le fichier `Contact.js`, il y a des clés factices :
```javascript
'YOUR_SERVICE_ID'    // ❌ Non configuré
'YOUR_TEMPLATE_ID'   // ❌ Non configuré  
'YOUR_PUBLIC_KEY'    // ❌ Non configuré
```

## ✅ SOLUTION RAPIDE (RECOMMANDÉE)

### Double-cliquez sur : `CORRECTION_RAPIDE.bat`

Ce script va :
1. ✓ Remplacer Contact.js par une version sans EmailJS
2. ✓ Supprimer la dépendance EmailJS
3. ✓ Nettoyer et reconstruire le projet
4. ✓ Créer un nouveau build fonctionnel

**Durée : 2-3 minutes**

---

## 📦 DÉPLOYER SUR NETLIFY

Après avoir lancé `CORRECTION_RAPIDE.bat` :

### Méthode 1 : Drag & Drop (FACILE)
1. Allez sur https://app.netlify.com/
2. Connectez-vous
3. Glissez-déposez le dossier **`build`** sur Netlify
4. ✓ Votre site est en ligne !

### Méthode 2 : Via GitHub
1. Poussez les changements sur GitHub
2. Netlify redéploiera automatiquement

---

## 🔧 ALTERNATIVE : CONFIGURER EMAILJS

Si vous voulez vraiment utiliser EmailJS :

1. **Créer un compte** sur https://www.emailjs.com/
2. **Récupérer vos clés** :
   - Service ID
   - Template ID
   - Public Key
3. **Éditer** `src/components/Contact.js` et remplacer :
   ```javascript
   'YOUR_SERVICE_ID'    → votre_service_id
   'YOUR_TEMPLATE_ID'   → votre_template_id
   'YOUR_PUBLIC_KEY'    → votre_public_key
   ```
4. **Lancer** `FIX_NETLIFY.bat`

---

## 📋 FICHIERS CRÉÉS

| Fichier | Description |
|---------|-------------|
| `CORRECTION_RAPIDE.bat` | Script automatique de correction |
| `Contact_BACKUP.js` | Version sans EmailJS |
| `package_SANS_EMAILJS.json` | Package.json nettoyé |
| `GUIDE_DEPANNAGE.txt` | Guide détaillé |
| `FIX_NETLIFY.bat` | Script de rebuild |

---

## ⚡ COMMANDES MANUELLES

Si vous préférez corriger manuellement :

```bash
# 1. Supprimer EmailJS
npm uninstall @emailjs/browser

# 2. Remplacer Contact.js
# Copier Contact_BACKUP.js → Contact.js

# 3. Nettoyer et reconstruire
rmdir /s /q node_modules build
npm install
npm run build

# 4. Déployer le dossier 'build' sur Netlify
```

---

## 🐛 PROBLÈMES PERSISTANTS ?

### Le site affiche une page blanche
- Ouvrez F12 (console du navigateur)
- Cherchez les erreurs en rouge
- Vérifiez que les fichiers .js se chargent

### Erreur 404
- Vérifiez que `netlify.toml` existe
- Vérifiez que `_redirects` est dans le dossier build

### Erreur de build
- Lisez les logs de build sur Netlify
- Copiez l'erreur exacte

---

## 📧 SUPPORT

Si rien ne fonctionne :
1. Lisez `GUIDE_DEPANNAGE.txt`
2. Vérifiez les logs Netlify
3. Contactez : arthur.pineau@ynov.com

---

## ✨ RÉSUMÉ

1. **Lancez** `CORRECTION_RAPIDE.bat`
2. **Attendez** 2-3 minutes
3. **Déployez** le dossier `build` sur Netlify
4. **Profitez** de votre portfolio en ligne ! 🎉
