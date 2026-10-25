# Arène CODM — plateforme de tournois Call of Duty: Mobile

Prototype cliquable (`index.html`, un seul fichier, aucune installation) de la plateforme de gestion des tournois et scrims de la communauté.
Ouvrir `index.html` dans un navigateur. Le rôle vient du compte : on choisit « Joueur » ou « Chef de clan » en créant son compte, et chacun ne voit que les menus et boutons de son rôle. Les comptes organisateurs sont créés par l'administration.

Comptes de démonstration (page Connexion) : `NRD Owl` (joueur), `PWV Kaizen` (chef de clan), `Orga Arène` (organisateur), mot de passe `demo`.

> Prototype : pas encore de vrais comptes ni de base de données. Les données sont des exemples, enregistrées dans le navigateur (localStorage).

## Rôles

| Rôle | Ce qu'il peut faire |
|---|---|
| **Visiteur** (non connecté) | Voir les tournois publiés, se connecter ou créer un compte |
| **Joueur** | Voir tous les tournois, la liste publiée des équipes et joueurs, le règlement, les lives et la page de résultats |
| **Chef de clan** | Tout ce que voit le joueur + inscrire son équipe (titulaires, remplaçants, UID CODM) et suivre le statut de ses inscriptions |
| **Organisateur** | Tout + créer/modifier un tournoi, valider ou refuser les inscriptions, publier la liste des participants, écrire le règlement, ajouter les lives, saisir les parties, désigner le MVP et publier la page de résultats |

## Parcours d'un tournoi

1. L'organisateur crée le tournoi (mode, format, date, places, taille d'équipe, barème).
2. Les chefs de clan inscrivent leur équipe → statut « En attente ».
3. L'organisateur valide ou refuse chaque équipe, puis publie la liste des participants.
4. Jour J : statut « En direct », les lives sont visibles sur la page du tournoi (lecteur intégré YouTube/Twitch).
5. L'organisateur saisit chaque partie (place + kills par équipe). Le classement se calcule tout seul.
6. Il publie la page de résultats : podium, MVP, équipe la plus létale, classement général, détail de chaque partie.

## Pages

- **Tournois** : liste filtrable (inscriptions ouvertes, en direct, terminés). Le tournoi en direct est mis en avant.
- Navigation : boutons arrondis flottants en bas sur mobile, différents selon le rôle.
- **Page tournoi** : onglets Aperçu, Équipes, Règles, Live, Résultats.
- **Inscription d'équipe** (chef de clan).
- **Connexion / Créer un compte** (choix Joueur ou Chef de clan à l'inscription).
- **Mon clan** (chef de clan) : ses inscriptions et leur statut.
- **Profil** : infos du compte, tournois où le joueur apparaît (via son UID), déconnexion.
- **Gestion** (organisateur) : Inscriptions, Infos & statut, Règles, Lives, Résultats, Nouveau tournoi.

## Calcul du classement (Battle Royale)

- Points de placement selon le barème du tournoi (par défaut 15, 12, 10, 8, 6, 4, 2, 1, 1, 1) + points par kill (1 par défaut).
- Égalité : plus de points de placement, puis plus de kills, puis meilleure place.

## Prochaine étape : la vraie application

- Comptes et connexion (par ex. Discord ou numéro de téléphone) avec les 3 rôles.
- Base de données partagée (tournois, équipes, joueurs, parties) pour que tout le monde voie les mêmes données.
- Notifications aux chefs de clan (validation, code du salon).
