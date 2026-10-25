# Gewgui : tournois Battle Royale Call of Duty: Mobile

Prototype cliquable (`index.html`, un seul fichier, aucune installation) de la plateforme de tournois et scrims de la communauté.
Design « Billet de match » (maquettes dans `maquettes/`) : fond blanc, noir, accent jaune, titres en Geist, textes en Inter.

> Prototype : pas encore de serveur. Comptes et données sont des exemples enregistrés dans le navigateur (localStorage).

Comptes de démonstration (page Connexion, mot de passe `demo`) : `NRD Onyx` (joueur), `PWV Kaizen` (chef de clan), `Orga Gewgui` (organisateur).

## Format

- Battle Royale en squad : 25 équipes de 4 joueurs titulaires (100 joueurs par lobby), plus 4 remplaçants optionnels par équipe.
- Plusieurs parties par tournoi. Le classement additionne les points de placement et les points de kills de chaque partie.
- Barème libre : l'organisateur fixe les points du Top 1, Top 2, Top 3… et les points par kill, tournoi par tournoi.
- Égalité : plus de points de placement, puis plus de kills, puis meilleure place.

## Rôles

Le rôle vient du compte, choisi à la création (Joueur ou Chef de clan). Les comptes organisateurs sont créés par l'administration.

| Rôle | Dock | Ce qu'il peut faire |
|---|---|---|
| Visiteur | Tournois · Connexion | Voir les tournois, lives et résultats publiés |
| Joueur | Tournois · Profil | Idem + retrouver les tournois où il est inscrit (via son UID) |
| Chef de clan | Tournois · Mon clan · Profil | Inscrire son squad (4 titulaires + jusqu'à 4 remplaçants) et suivre la validation |
| Organisateur | Tournois · Gestion · Profil | Créer un tournoi et son barème, valider les squads, publier la liste, saisir les parties, choisir le MVP, gérer les lives et publier les résultats |

## Contrôles automatiques

- Inscription : 4 titulaires obligatoires, UID de 6 à 20 chiffres, pas d'UID en double dans l'équipe ni déjà inscrit dans une autre équipe du tournoi.
- Validation : alerte si un UID apparaît dans deux équipes, blocage au-delà de 25 équipes.
- Saisie d'une partie : places de 1 à N, deux équipes ne peuvent pas avoir la même place.

## Prochaine étape

Brancher une vraie base de données (Supabase) pour les comptes, les rôles et les données partagées entre tous les joueurs.
