# Private Message App

Ce projet est une application web développée avec **Nuxt 3**, **Redis** et **Bootstrap 5**. Il permet de transmettre des messages privés stockés pour une durée limitée dans une base de données Redis. Les messages sont automatiquement supprimés après avoir été lus ou après expiration de la durée définie.

## Démo

le site https://privatemessage.ovh est un site de démonstration fonctionnel

## Fonctionnalités

- Génération de messages privés avec une durée de vie configurable.
- Stockage temporaire des messages dans Redis.
- Suppression automatique des messages après lecture ou expiration.
- Utilisation de Bootstrap 5 pour un design réactif et moderne.
- Protection CSRF pour sécuriser les requêtes POST.

## Technologies utilisées

- **Nuxt 3** : Framework moderne basé sur Vue.js pour la création de sites web universels.
- **Redis** : Base de données en mémoire utilisée pour le stockage temporaire des messages.
- **Bootstrap 5** : Framework CSS pour une interface utilisateur réactive et esthétique.
- **ioredis** : Client Redis pour Node.js.
- **CSRF Protection** : Sécurisation des requêtes pour éviter les attaques Cross-Site Request Forgery.

## Prérequis

- **Node.js** (version 16.x ou supérieure)
- **Redis** : Assurez-vous que Redis est installé et en cours d'exécution sur votre machine ou sur un serveur distant.

## Installation

1. Clonez ce dépôt sur votre machine locale :

```bash
   git clone https://github.com/lgrdev/private-message.git
   cd private-message
```

2. Installez les dépendances du projet :

```bash
    npm install
```

3. Créez un fichier .env à la racine du projet et configurez les variables d'environnement :

```bash
# .env
NUXT_SECRET_REDIS_HOST=localhost
NUXT_SECRET_REDIS_PORT=6379
# NUXT_SECRET_REDIS_PASSWORD=your-redis-password
```

4. Assurez-vous que Redis est en cours d'exécution sur votre machine. Par défaut, Redis fonctionne sur localhost:6379

## Déploiement sur Docker et traefik

1. Copier le fichier docker-compose.sample.yml en docker-compose.yml

```bash
cp docker-compose.sample.yml .docker-compose.yml
```

2. Modifier le fichier docker-compose.yml

3. Executer la commande suivante

l'option -d permet de lancer le conteneur en deamon

```bash
docker compose up --build -d
```
