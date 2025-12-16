# 🚀 Portfolio Arthur - Version Améliorée

Votre portfolio a été considérablement amélioré avec de nouvelles fonctionnalités et un design moderne !

## ✨ Nouvelles Fonctionnalités

### 🎨 Design Amélioré
- **Animations fluides** avec Framer Motion
- **Effets de particules** et dégradés animés
- **Glassmorphism** moderne
- **Micro-interactions** engageantes
- **Design responsive** optimisé

### 📧 Formulaire de Contact Fonctionnel
- **Envoi d'emails réels** via EmailJS
- **Validation des champs**
- **Messages de succès/erreur**
- **Design moderne** avec animations

### 💼 Section Projets Améliorée
- **Cartes de projets** interactives
- **Effets de survol** sophistiqués
- **Tags de technologies**
- **Liens directs** vers les projets

### 🛠️ Section Compétences
- **Barres de progression** animées
- **Icônes colorées** des technologies
- **Niveaux de compétence** détaillés

## 📦 Installation

1. **Installez les dépendances** (dont EmailJS) :
```bash
cd C:\Users\Arthur\Desktop\portfolio\portfollio
npm install
```

2. **Configurez EmailJS** pour le formulaire de contact :
   - Créez un compte sur [EmailJS.com](https://www.emailjs.com/)
   - Créez un nouveau service (Gmail, Outlook, etc.)
   - Créez un template d'email
   - Récupérez vos clés :
     * Service ID
     * Template ID
     * Public Key

3. **Mettez à jour Contact.js** avec vos clés EmailJS :
   Ouvrez `src/components/Contact.js` et remplacez les lignes 18-22 :
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',     // Remplacez par votre Service ID
     'YOUR_TEMPLATE_ID',    // Remplacez par votre Template ID
     {...},
     'YOUR_PUBLIC_KEY'      // Remplacez par votre Public Key
   );
   ```

## 🎯 Configuration EmailJS (Important !)

### Étape 1 : Créer un compte EmailJS
1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit
3. Connectez-vous à votre dashboard

### Étape 2 : Ajouter un service email
1. Cliquez sur "Email Services"
2. Cliquez "Add New Service"
3. Choisissez votre fournisseur (Gmail recommandé)
4. Suivez les instructions pour connecter votre email
5. Notez votre **Service ID**

### Étape 3 : Créer un template d'email
1. Cliquez sur "Email Templates"
2. Cliquez "Create New Template"
3. Utilisez ce template :

**Subject:** Nouveau message de {{from_name}}

**Content:**
```
Vous avez reçu un nouveau message depuis votre portfolio !

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Notez votre **Template ID**

### Étape 4 : Récupérer votre Public Key
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### Étape 5 : Mettre à jour le code
Ouvrez `src/components/Contact.js` et remplacez :
```javascript
await emailjs.send(
  'service_xxxxxxx',    // Votre Service ID
  'template_xxxxxxx',   // Votre Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'arthur.pineau@ynov.com'
  },
  'xxxxxxxxxxxx'        // Votre Public Key
);
```

## 🚀 Lancement

```bash
npm start
```

Votre portfolio sera accessible sur http://localhost:3000

## 🎨 Personnalisation

### Modifier vos informations
- **Email** : Changez `arthur.pineau@ynov.com` dans `Contact.js`
- **LinkedIn** : Mettez à jour le lien dans `Contact.js`
- **GitHub** : Mettez à jour le lien `https://github.com/Shardzen` dans `Contact.js`

### Ajouter vos projets
Éditez `src/components/Projects.js` et modifiez le tableau `projects` :
```javascript
{
  id: 1,
  title: 'Votre Projet',
  description: 'Description de votre projet',
  image: 'URL de l\'image',
  link: 'https://votre-projet.com',
  github: 'https://github.com/vous/projet',
  tags: ['React', 'Tailwind', 'etc'],
  color: '#00df9a'
}
```

### Modifier vos compétences
Éditez `src/components/About.js` et modifiez le tableau `skills`.

### Changer la photo de profil
Remplacez `https://placehold.co/600x600...` dans `About.js` par votre photo.

## 📱 Fonctionnalités

### ✅ Ce qui fonctionne
- ✨ Animations et transitions fluides
- 🎨 Design responsive sur tous les écrans
- 📧 Formulaire de contact avec validation
- 🔄 Navigation smooth entre sections
- 💡 Effets de survol interactifs
- 🌟 Curseur personnalisé

### 📧 Envoi d'emails
Une fois EmailJS configuré :
- Les visiteurs peuvent vous contacter directement
- Vous recevrez les messages dans votre boîte email
- Confirmation visuelle pour l'utilisateur
- Gestion des erreurs

## 🎯 Prochaines Étapes

1. **Configurez EmailJS** (instructions ci-dessus)
2. **Ajoutez vos vrais projets** dans `Projects.js`
3. **Remplacez l'image de profil** dans `About.js`
4. **Personnalisez les textes** selon vos besoins
5. **Testez le formulaire** de contact
6. **Déployez sur Netlify ou Vercel**

## 🌐 Déploiement

### Netlify (Recommandé)
```bash
npm run build
```
Puis glissez le dossier `build` sur netlify.com

### Vercel
```bash
npm install -g vercel
vercel
```

## 💡 Conseils

- **Images** : Utilisez des images de haute qualité pour vos projets
- **Performance** : Optimisez vos images avant de les ajouter
- **SEO** : Ajoutez des meta tags dans `public/index.html`
- **Analytics** : Intégrez Google Analytics pour suivre les visiteurs

## 🐛 Dépannage

### Le formulaire ne fonctionne pas ?
1. Vérifiez que vous avez bien installé `@emailjs/browser` (`npm install`)
2. Vérifiez vos clés EmailJS dans `Contact.js`
3. Assurez-vous que votre service EmailJS est actif
4. Vérifiez la console du navigateur pour les erreurs

### Les animations sont saccadées ?
1. Vérifiez que vous utilisez un navigateur récent
2. Fermez les applications gourmandes en ressources
3. Essayez dans un autre navigateur

## 📞 Support

Si vous avez des questions ou des problèmes :
- Vérifiez les erreurs dans la console (F12)
- Consultez la documentation de [EmailJS](https://www.emailjs.com/docs/)
- Consultez la documentation de [Framer Motion](https://www.framer.com/motion/)

## 🎉 Résultat

Votre portfolio est maintenant :
- ✨ **Visuellement impressionnant**
- 📧 **Fonctionnel** avec envoi d'emails
- 🚀 **Performant** et optimisé
- 💼 **Professionnel** et moderne
- 📱 **Responsive** sur tous les appareils

Bon succès avec votre nouveau portfolio ! 🚀