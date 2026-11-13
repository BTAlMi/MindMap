# Ramure

Ramure est une application de cartes mentales et d'arbres des causes. Elle fonctionne hors ligne, sans compte ni abonnement, sur PC Windows, sur Android et dans un navigateur web.

## Mettre en ligne sur GitHub Pages (une seule fois, environ 10 minutes)

1. Sur github.com, crée un nouveau dépôt nommé `ramure`, en visibilité **Public**.
   - Le compte gratuit l'exige pour GitHub Pages.
   - Seul le code est public : tes cartes ne sont jamais envoyées sur GitHub.
2. Dans le dépôt vide, clique sur **uploading an existing file**. Glisse tout le contenu de ce dossier : `index.html`, `manifest.webmanifest`, `sw.js`, `README.md` et le dossier `icons`. Valide avec **Commit changes**.
3. Va dans **Settings → Pages**. Dans « Build and deployment », choisis **Deploy from a branch**, puis la branche `main` et le dossier `/ (root)`, et clique sur **Save**.
4. Une à deux minutes plus tard, l'appli répond à l'adresse `https://<ton-pseudo>.github.io/ramure/`.

## Installer l'appli

- **PC Windows (Edge ou Chrome) :** ouvre l'adresse, puis clique sur l'icône « Installer » dans la barre d'adresse, ou passe par Menu → Installer l'application. Une fois l'appli installée, un double-clic sur un fichier `.ramure` peut l'ouvrir directement dans Ramure (le navigateur te demande ton accord la première fois).
- **Android (Chrome) :** menu ⋮ → **Installer l'application** (ou **Ajouter à l'écran d'accueil**).
- **Web :** l'adresse fonctionne aussi dans n'importe quel navigateur récent, sans rien installer.

## Où sont enregistrées les cartes

- Chaque carte est un fichier `.ramure`, au format JSON lisible.
- **Sur PC :** Ctrl+S écrit directement dans le dossier que tu choisis, par exemple ton OneDrive synchronisé. Les enregistrements suivants écrasent ce même fichier.
- **Sur Android :** le fichier est téléchargé dans « Téléchargements ». Dépose-le ensuite dans OneDrive. Pour le rouvrir, passe par Ouvrir / importer puis choisis-le dans OneDrive.
- **Brouillons :** une copie de secours est gardée dans le navigateur de l'appareil. Tu peux la désactiver ou l'effacer via Menu → Brouillons sur cet appareil.

## Publier une mise à jour

Remplace les fichiers dans le dépôt, puis augmente `VERSION` dans `sw.js` (par exemple `ramure-v2.0.1`). Les appareils récupèrent la nouvelle version au deuxième lancement.

## Personnaliser

Le bouton palette ouvre le panneau, qui a deux onglets :

- **Style de la carte :**
  - six thèmes prêts à l'emploi, plus les thèmes que tu enregistres ;
  - police, couleurs (fond, sujets, texte, lignes, palette des branches) ;
  - taille, gras, remplissage et forme pour chaque niveau ;
  - style, épaisseur et couleur des lignes ;
  - espacement, largeur du texte, alignement, numérotation.
- **Sujet :** fond, texte, bordure, taille, gras, italique, barré et forme d'un sujet précis. Le style se copie d'un sujet à l'autre avec Ctrl+Alt+C / Ctrl+Alt+V.

## Formats acceptés

- **Ouverture :** `.ramure`, `.xmind` (XMind 8 et versions récentes ; le thème et les styles sont repris), Markdown, texte indenté, OPML.
- **Export :** PNG, PDF A4, SVG, XMind, Markdown, OPML, et copie de l'image ou du plan dans le presse-papiers.
