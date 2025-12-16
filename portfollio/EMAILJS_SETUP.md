# 📧 Configuration EmailJS - Template Prêt à l'Emploi

## 🎯 Étape 1 : Créer un Compte EmailJS

1. Allez sur : **https://www.emailjs.com/**
2. Cliquez sur "Sign Up" (en haut à droite)
3. Créez votre compte (gratuit - 200 emails/mois)
4. Confirmez votre email

## 🔧 Étape 2 : Configurer un Service Email

1. Dans le dashboard, cliquez sur **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur :
   - **Gmail** (recommandé - le plus simple)
   - Outlook
   - Yahoo
   - Autre

### Pour Gmail :
1. Cliquez sur Gmail
2. Cliquez sur "Connect Account"
3. Autorisez EmailJS à accéder à votre Gmail
4. **IMPORTANT** : Notez votre **Service ID** (ex: `service_abc1234`)

## 📝 Étape 3 : Créer le Template d'Email

1. Dans le dashboard, cliquez sur **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Donnez-lui un nom : **"Portfolio Contact Form"**

### Template à Copier-Coller :

**Dans "Subject" (Objet) :**
```
Nouveau message de {{from_name}} - Portfolio
```

**Dans "Content" (Corps du message) :**
```html
Bonjour Arthur,

Vous avez reçu un nouveau message depuis votre portfolio !

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 NOM : {{from_name}}

📧 EMAIL : {{from_email}}

💬 MESSAGE :
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Répondez directement à cet email pour contacter {{from_name}}.

---
Ce message a été envoyé depuis votre portfolio
arthur-portfolio.netlify.app
```

4. Cliquez sur **"Save"**
5. **IMPORTANT** : Notez votre **Template ID** (ex: `template_xyz5678`)

## 🔑 Étape 4 : Récupérer votre Public Key

1. Dans le dashboard, cliquez sur **"Account"** (en haut à droite)
2. Allez dans l'onglet **"General"**
3. Trouvez **"Public Key"**
4. **IMPORTANT** : Copiez cette clé (ex: `AbCdEfGh123456`)

## 💻 Étape 5 : Intégrer dans votre Code

1. Ouvrez le fichier : **`src/components/Contact.js`**

2. Trouvez les lignes 17-22 :
```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',     // Ligne 18
  'YOUR_TEMPLATE_ID',    // Ligne 19
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'arthur.pineau@ynov.com'
  },
  'YOUR_PUBLIC_KEY'      // Ligne 26
);
```

3. Remplacez par vos vraies valeurs :
```javascript
await emailjs.send(
  'service_abc1234',           // ← Votre Service ID
  'template_xyz5678',          // ← Votre Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'arthur.pineau@ynov.com'  // ← Votre vrai email
  },
  'AbCdEfGh123456'            // ← Votre Public Key
);
```

## ✅ Étape 6 : Tester

1. Sauvegardez le fichier `Contact.js`
2. Relancez votre portfolio : Double-cliquez sur **`LANCER.bat`**
3. Allez dans la section **Contact**
4. Remplissez le formulaire avec :
   - Votre nom : "Test"
   - Votre email : votre email
   - Message : "Test du formulaire"
5. Cliquez sur **"Envoyer le message"**
6. Vous devriez voir : ✅ "Message envoyé avec succès !"
7. **Vérifiez votre boîte email** (peut prendre 1-2 minutes)

## 🔍 Vérification

### Le message de succès apparaît mais vous ne recevez pas l'email ?

**Vérifiez ces points :**

1. **EmailJS Dashboard** :
   - Allez dans "Logs" sur EmailJS
   - Vérifiez que l'email apparaît comme "Sent"

2. **Spam** :
   - Vérifiez votre dossier SPAM/Courrier indésirable
   - Marquez EmailJS comme "Non spam"

3. **Email de réception** :
   - Vérifiez que c'est le bon email dans votre Service EmailJS
   - Changez l'email si nécessaire

4. **Limite gratuite** :
   - Plan gratuit = 200 emails/mois
   - Vérifiez que vous n'avez pas dépassé

### Le formulaire affiche une erreur ?

**Causes possibles :**

1. **Clés incorrectes** :
   - Vérifiez que vous avez copié les bonnes clés
   - Pas d'espaces avant/après
   - Pas de guillemets supplémentaires

2. **Service EmailJS inactif** :
   - Retournez sur EmailJS
   - Vérifiez que votre service est "Connected"

3. **Template incorrect** :
   - Les variables doivent être : `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Respectez les doubles accolades

## 🎨 Personnalisation du Template (Optionnel)

Vous pouvez personnaliser le template à votre goût :

```html
<!-- Ajoutez des émojis -->
🎯 NOUVEAU CONTACT

<!-- Changez les couleurs (si email HTML) -->
<div style="background: #00df9a; padding: 20px;">
  Nouveau message !
</div>

<!-- Ajoutez plus d'infos -->
📱 TÉLÉPHONE : {{phone_number}}
🌐 SITE WEB : {{website}}
```

N'oubliez pas d'ajouter les champs correspondants dans le code si vous ajoutez de nouvelles variables !

## 📊 Statistiques

Avec EmailJS, vous pouvez :
- ✅ Voir le nombre d'emails envoyés
- ✅ Consulter les logs
- ✅ Vérifier les erreurs
- ✅ Gérer plusieurs templates

## 🆘 Besoin d'Aide ?

**Documentation officielle :**
- https://www.emailjs.com/docs/

**Problèmes courants :**
- https://www.emailjs.com/docs/faq/

**Support EmailJS :**
- support@emailjs.com

## ✨ Résumé des Clés à Récupérer

📝 Notez ces 3 informations dans un fichier texte :

```
Service ID     : service_________
Template ID    : template_________
Public Key     : _________________
```

Vous en aurez besoin pour modifier Contact.js !

---

**Une fois configuré, votre formulaire sera 100% fonctionnel ! 🎉**

Les visiteurs pourront vous contacter directement depuis votre portfolio et vous recevrez leurs messages par email.