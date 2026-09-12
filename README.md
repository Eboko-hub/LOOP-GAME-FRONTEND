# LOOP GAME — Frontend PWA

Frontend PWA autonome et responsive pour LOOP GAME. Le dépôt est conçu pour être publié directement par GitHub Pages.

## Fonctionnalités

- Splash, connexion et inscription
- Accueil et sélection des plateaux 13×13 / 17×22 **en points**
- Matchmaking 1v1
- Partie temps réel via WebSocket
- Placement de pions sur les points
- Chronomètre
- Résultats, profil, statistiques et classement
- Paramètres et test de l'API
- PWA installable sur Android/iOS
- Service Worker et cache hors-ligne des ressources de l'interface
- Aucun calcul de géométrie de piège côté client : le frontend ne reçoit et ne stocke que l'état public de la partie envoyé par le serveur

## Publication GitHub Pages

1. Créer le dépôt `LOOP-GAME-FRONTEND`.
2. Envoyer **le contenu de ce dossier** à la racine du dépôt. Ne pas envoyer le dossier parent autour de ce contenu.
3. Dans GitHub : `Settings` → `Pages`.
4. Choisir `Deploy from a branch`.
5. Branch `main`, dossier `/ (root)` puis `Save`.
6. Attendre le déploiement et ouvrir l'URL HTTPS fournie par GitHub Pages.

## Connexion au backend

Par défaut, l'application utilise `window.location.origin`. Pour un backend séparé :

1. Ouvrir `Paramètres` dans LOOP GAME.
2. Dans `URL du backend API`, saisir l'URL HTTPS du backend, par exemple `https://api.exemple.com`.
3. Enregistrer.
4. Utiliser `Tester le serveur`.

Le backend doit autoriser l'origine GitHub Pages par CORS et exposer les routes utilisées par `js/api.js` ainsi que `/ws` en WebSocket sécurisé.

## Règle de sécurité des pièges

Le frontend ne connaît jamais les coordonnées ou la géométrie des pièges invisibles. Il affiche uniquement les événements publics : plateau, tour, score et captures autorisées par le protocole serveur.

## Important

GitHub Pages ne fait pas tourner Node.js. Il héberge uniquement ce frontend statique. Le backend doit être déployé séparément sur un serveur HTTPS/WSS.
