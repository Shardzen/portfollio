# 🚀 GUIDE RAPIDE - Portfolio Arthur

## 📦 Installation (OBLIGATOIRE - À faire en premier !)

**Double-cliquez sur : `INSTALLER.bat`**

Cela va installer toutes les dépendances nécessaires (React, EmailJS, etc.)
⏱️ Cela prend environ 2-3 minutes.

## 🎯 Lancement du Portfolio

**Double-cliquez sur : `LANCER.bat`**

Votre portfolio s'ouvrira automatiquement dans votre navigateur sur :
👉 http://localhost:3000

Pour arrêter le serveur : Appuyez sur `Ctrl + C` dans la fenêtre de commande

## ⚙️ Configuration du Formulaire de Contact

Le formulaire ne fonctionnera pas tant que vous n'aurez pas configuré EmailJS.

### Étapes rapides :

1. **Créez un compte EmailJS** : https://www.emailjs.com/
   - C'est gratuit et rapide (2 minutes)

2. **Connectez votre email**
   - Gmail, Outlook, ou autre
   - Suivez l'assistant de configuration

3. **Créez un template d'email**
   - Copiez le template fourni dans INSTRUCTIONS.md
   - Notez votre Template ID

4. **Récupérez vos clés**
   - Service ID
   - Template ID  
   - Public Key

5. **Mettez à jour le fichier Contact.js**
   - Ouvrez : `src/components/Contact.js`
   - Lignes 17-22 : Remplacez les valeurs par vos clés
   ```javascript
   await emailjs.send(
     'service_XXXXX',    // ← Votre Service ID ici
     'template_XXXXX',   // ← Votre Template ID ici
     {...},
     'XXXXXXXXXXX'       // ← Votre Public Key ici
   );
   ```

6. **Testez le formulaire**
   - Relancez avec LANCER.bat
   - Remplissez le formulaire
   - Vérifiez votre boîte email

## ✏️ Personnalisation Rapide

### 1. Vos Informations de Contact

**Fichier : `src/components/Contact.js`**

Ligne 121 : Votre email
```javascript
<a href="mailto:VOTRE_EMAIL@exemple.com" ...>
```

Ligne 133 : Votre LinkedIn  
```javascript
href="https://www.linkedin.com/in/VOTRE_PROFIL/"
```

Ligne 147 : Votre GitHub
```javascript
href="https://github.com/VOTRE_USERNAME"
```

### 2. Vos Projets

**Fichier : `src/components/Projects.js`**

Ligne 6-50 : Remplacez les projets d'exemple
```javascript
{
  id: 1,
  title: 'Nom de votre projet',
  description: 'Description courte',
  image: 'URL de l\'image du projet',
  link: 'https://votre-projet.com',
  github: 'https://github.com/vous/projet',
  tags: ['React', 'Tailwind', 'etc'],
  color: '#00df9a'
}
```

### 3. Votre Photo

**Fichier : `src/components/About.js`**

Ligne 78 : Remplacez l'image placeholder
```javascript
<img src="URL_DE_VOTRE_PHOTO" alt="Arthur" ... />
```

## 🌐 Déploiement (Mettre en ligne)

### Option 1 : Netlify (Recommandé - Le plus simple)

1. **Créez le build de production**
   - Double-cliquez sur : `BUILD.bat`
   - Attendez la fin (1-2 minutes)

2. **Déployez sur Netlify**
   - Allez sur : https://www.netlify.com/
   - Créez un compte gratuit
   - Glissez-déposez le dossier `build` sur Netlify
   - Votre site est en ligne ! 🎉

### Option 2 : Vercel

1. Installez Vercel CLI :
```bash
npm install -g vercel
```

2. Déployez :
```bash
vercel
```

3. Suivez les instructions

## 🐛 Problèmes Courants

### Le site ne se lance pas
- ✅ Avez-vous lancé `INSTALLER.bat` en premier ?
- ✅ Node.js est-il installé ? (Testez : `node --version`)

### Le formulaire ne fonctionne pas
- ✅ EmailJS est-il configuré ?
- ✅ Vos clés sont-elles correctes dans Contact.js ?
- ✅ Avez-vous redémarré le serveur après les modifications ?

### Les modifications ne s'affichent pas
- ✅ Sauvegardez tous vos fichiers
- ✅ Rafraîchissez le navigateur (Ctrl + F5)
- ✅ Redémarrez le serveur (Ctrl + C puis LANCER.bat)

## 📁 Structure des Fichiers Importants

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.js          ← Page d'accueil
│   │   ├── About.js         ← À propos + Compétences
│   │   ├── Projects.js      ← Vos projets
│   │   ├── Contact.js       ← Formulaire de contact
│   │   └── Footer.js        ← Pied de page
│   ├── App.js               ← Structure principale
│   └── index.css            ← Styles globaux
├── INSTALLER.bat            ← Installer les dépendances
├── LANCER.bat               ← Lancer le portfolio
├── BUILD.bat                ← Créer le build production
└── INSTRUCTIONS.md          ← Guide détaillé complet
```

## ✅ Checklist Avant Déploiement

- [ ] EmailJS configuré et testé
- [ ] Votre email dans Contact.js
- [ ] Vos liens sociaux à jour
- [ ] Vos projets ajoutés
- [ ] Votre photo de profil
- [ ] Tous les textes personnalisés
- [ ] Testé sur mobile
- [ ] Build de production créé
- [ ] Pas d'erreurs dans la console

## 🎊 C'est Tout !

Votre portfolio est prêt à impressionner !

**Ordre des actions :**
1. 📦 INSTALLER.bat (une seule fois)
2. ⚙️ Configurer EmailJS (voir instructions détaillées)
3. ✏️ Personnaliser vos infos (email, projets, photo)
4. 🧪 Tester en local avec LANCER.bat
5. 🌐 Déployer avec BUILD.bat + Netlify

**Besoin d'aide ?**
- Consultez INSTRUCTIONS.md pour le guide complet
- Vérifiez la console du navigateur (F12) pour les erreurs
- Documentation EmailJS : https://www.emailjs.com/docs/

Bon succès avec votre nouveau portfolio ! 🚀