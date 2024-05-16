# silver-micro
### *Objectifs* : 

*Le but de ce projet de trois semaines en groupe de trois personnes est d'utiliser un micro-framework backend et réaliser une API afin de mieux appréhender les frameworks qui suivront.*

### *Les technos* : 

<u>Le backend :</u>
 
Nous avions le choix entre deux microframeworks pour le backend, **Slim** ou **ExpressJS**.

Bien que ces deux technos soient toutes les deux "éculées" et que des alternatives modernes existent, le choix d'ExpressJs est plus pertinent du fait de sa communauté plus grande ainsi que de ses ressources plus nombreuses et plus faciles  à trouver. Rappellons toutefois qu'ExpressJS n'a pas été mis à jour depuis 2015 et que des alternatives comme Fastify ou AdonisJS auraient été judicieuses. 

<u>Le frontend :</u>  

Par ailleurs, la technologie frontend demandée étant React, il nous a semblé intéressant de choisir une technologie Javascript. 

---

## 1 - Le lancement du serveur back 

Pour le backend nous avons fait le choix d'ExpressJS. Le projet est notamment intialisé à l'aide d'Express Generator. Cependant, il a été recréé sans pour plus de simplicité.

### Sans passer par generator, le serveur Backend peut se lancer à l'aide de la commande : 
- *node app.js*

Autrement, pour **lancer** le serveur backend sur **macOs** ou **Linux**, il faudra run la commande :
- *DEBUG=myapp:\* npm start*

Sur Windows 🤮:
- *set DEBUG=myapp:\* & npm start*

Avec PowerShell en particulier :
- PS> $env:DEBUG='myapp:\*'; npm start

Si tu n'as pas de chance essaie : npm start 

---

## 2 - Le lancement du serveur front

Pour le frontend, comme dit *supra* nous utilisons React, ainsi pour le serveur frontend nous utilisons Vite.

Pour lancer le serveur, il faudra run la commande : 

- pnpm run dev

---
## 3 - Docker

Docker est devenu un outil **incontournable** pour le développement web en 2024. 

On évitera ainsi à l'aide de Docker les problèmes d'installation sur différents OS lors d'un projet de groupe. Le problème de version et/ou de type de base de données.

La base de données est configurée par un fichier compose.yaml que l'on lancera à l'aide de la commande : 
- docker compose up -d

Nous avions fait le choix d'une base de données Postgresql. Cependant, pour se simplifier la tâche et aller vers l'apprehension de la stack MERN, nous avons basculé sur du MongoDB avec Mongoose (Object Document Mapping (ODM) qui permet de définir des schémas pour les données stockées dans MongoDB.

~~De cette manière, au premier lancement de cette commande la base de données postgresql va se créer à l'intérieur d'un container.~~
~~De la même manière, notre fichier de configuration possède une visionneuse de base de données : _adminer_.~~

Le port de la base de données est le : ~~**5432**~~ **27O17**

~~Le port d'adminer est le : **9080**~~

--
## 4 - API Documentation

Cette API permet aux utilisateurs de s'inscrire, de se connecter et de se déconnecter. Elle est construite avec Express.js et utilise MongoDB comme base de données.

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

## 5 - Dépendances backend
*express* : Framework web 🤮 pour Node.js


*bcrypt* : Bibliothèque pour hasher les mots de passe


*mongoose* : Bibliothèque pour interagir avec MongoDB



## Installation
Clonez le dépôt

Allez dans le dossier 'server' : `cd server`.


Installez les dépendances du backend avec `pnpm install`.


Initialisez le container docker : `docker compose up -d`.


Démarrez le serveur backend avec `node app.js`.

Allez dans le dossier client : `cd client`.


Installez les dépendances du frontend avec `pnpm install`.


Démarrez le serveur frontend avec `pnpm run dev`.


