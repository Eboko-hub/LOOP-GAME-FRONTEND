# LOOP GAME — Frontend PWA

Frontend web progressif de LOOP GAME.

## Structure

- `index.html` : point d'entrée PWA
- `js/app.js` : interface et logique client
- `css/app.css` : interface responsive
- `manifest.webmanifest` : installation PWA
- `sw.js` : cache hors-ligne et mise à jour du shell
- `icons/` : icônes PWA

## GitHub Pages

Publier le contenu de ce dossier à la racine du dépôt. Le fichier `index.html` doit rester à la racine.

Le frontend peut fonctionner en mode démo local, puis être relié au backend LOOP GAME en configurant l'URL API depuis les paramètres.

## Sécurité

Le frontend ne reçoit jamais la géométrie interne des pièges invisibles. Les décisions de règles, captures et pièges doivent rester autoritaires côté serveur.
