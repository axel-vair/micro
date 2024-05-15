# Le sujet "silver-micro"



### *Objectifs* : 

*Le but de ce projet de trois semaines en groupe de trois personnes est d'utiliser un micro-framework backend et réaliser une API afin de mieux appréhender les frameworks qui suivront.*

### *Les technos* : 

#### _Le backend :_
 
Nous avions le choix entre deux microframeworks pour le backend, **Slim** ou **ExpressJS**.

Bien que ces deux technos soient toutes les deux "éculées" et que des alternatives modernes existent, le choix d'ExpressJs est plus pertinent du fait de sa communauté plus grande ainsi que de ses ressources plus nombreuses et plus faciles  à trouver. 

Rappellons toutefois qu'ExpressJS n'a pas été mis à jour depuis 2015 et que des alternatives comme Fastify ou AdonisJS auraient été judicieuses. 

#### _Le frontend :_

Par ailleurs, la technologie frontend demandée étant React, il nous a semblé intéressant de choisir une technologie Javascript. 



## 1 - Le lancement du serveur back 



Pour le backend nous avons fait le choix d'ExpressJS. Le projet est notamment intialisé à l'aide d'Express Generator. Cependant, il a été recréé sans pour plus de simplicité.
 
Pour lancer le server backend, lancez dans le dossier 'server' la commande :`node app.js`


## 2 - Le lancement du serveur front


Pour le frontend, comme dit *supra* nous utilisons React, ainsi pour le serveur frontend nous utilisons Vite.

Pour lancer le serveur, il faudra run la commande dans le dossier 'client' : `pnpm run dev`


## 3 - Docker



Docker est devenu un outil **incontournable** pour le développement web en 2024. 

On évitera ainsi à l'aide de Docker les problèmes d'installation sur différents OS lors d'un projet de groupe. Le problème de version et/ou de type de base de données.

La base de données est configurée par un fichier compose.yaml que l'on lancera à l'aide de la commande : `docker compose up -d`

Nous avions fait le choix d'une base de données Postgresql. Cependant, pour se simplifier la tâche et aller vers l'apprehension de la stack MERN, nous avons basculé sur du MongoDB avec Mongoose (Object Document Mapping (ODM) qui permet de définir des schémas pour les données stockées dans MongoDB.

Le port de la base de données est le : **27O17**


## 4 - API Documentation



Cette API permet aux utilisateurs de s'inscrire, se connecter, se déconnecter et gérer ses réservations. Par ailleurs, l'administrateur peut voir les réservations ainsi que les gérer.

Elle est construite avec Express.js et utilise MongoDB comme base de données.

### Routes

#### Paramètres de la requête /register

| Nom         | Type   | Description         |
|-------------|--------|---------------------|
| email       | String | Email de l'utilisateur|
| lastname    | String | Nom de l'utilisateur|
| firstname   | String | Prénom de l'utilisateur|
| password    | String | Mot de passe de l'utilisateur |

```http
POST /register
Content-Type: application/json

{
    "email": "john@example.com",
    "nom": "Doe",
    "prénom": "John",
    "password": "password123"
}
```

#### Inscription réussie - Code 200
```http
{
    "message": "User registered successfully."
}
```

#### Echec de l'inscription - Code 400
```http
{
    "message": "Cette adresse email est déjà utilisée."
}
```

#### Paramètres de la requête /login


| Nom         | Type   | Description         |
|-------------|--------|---------------------|
| email       | String | Email de l'utilisateur|
| password    | String | Mot de passe de l'utilisateur |

#### Login
```http
POST /login
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "password123"
}
```

#### Connexion réussie - Code 200
```http
{
    "message": "Connexion réussie",
    "user": {
        "_id": "6087b9c3f98e7a0015b9d9e3",
        "email": "john@example.com",
        "password": "$2b$10$..."
    }
```

#### Echec de la connexion - Code 400
```http
{
    "message": "Email ou mot de passe incorrect"
}
```

### Logout
```http
POST /logout
```

#### Déconnexion réussie - Code 200
```http
{
    "message": "Déconnexion réussie"
}
```

## 5 - Dépendances


### Backend
*express* : Framework web 🤮 pour Node.js

*bcrypt* : Bibliothèque pour hasher les mots de passe

*mongoose* : Bibliothèque pour interagir avec MongoDB

### Frontend
_react_ :  Bibliothèque JavaScript pour construire des interfaces utilisateur.

_react-calendar_ :  Composant de calendrier pour React.

_react-modal_ : Composant de modal pour React.

_react-router-dom_ : Bibliothèque de routage pour React.

_axios_ : Bibliothèque pour effectuer des requêtes HTTP.

_date-fns_ : Bibliothèque pour manipuler les dates.

_tailwindcss_ : Framework CSS utilitaire.

_vite_ : Outil de construction rapide pour les applications web.



## Installation


1. Clonez le dépôt
2. Allez dans le dossier 'server' : `cd server`.
3. Installez les dépendances du backend avec `pnpm install`.
4. Initialisez le container docker : `docker compose up -d`.
5. Démarrez le serveur backend avec `node app.js`.
6. Allez dans le dossier client : `cd client`.
7. Installez les dépendances du frontend avec `pnpm install`.
8. Démarrez le serveur frontend avec `pnpm run dev`.
