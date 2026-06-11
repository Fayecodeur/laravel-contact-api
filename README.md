# Contact App (Frontend)

## 🎯 Objectif

Application frontend permettant de gérer une liste de contacts via une API REST Laravel.

Fonctionnalités :

- Afficher les contacts
- Ajouter un contact
- Voir un contact
- Modifier un contact
- Supprimer un contact

---

## 🧰 Technologies utilisées

- React 19
- TypeScript
- Vite
- React Router DOM
- React Query (TanStack Query)
- Axios
- React Hook Form
- Zod
- React Hot Toast

---

## 🔌 API

Base URL :
http://127.0.0.1:8000/api

Endpoints :

- GET /contacts → liste des contacts
- GET /contacts/:id → détail contact
- POST /contacts → créer contact
- PUT /contacts/:id → modifier contact
- DELETE /contacts/:id → supprimer contact

---

## ⚙️ Fonctionnement

- React Query gère les appels API et le cache
- React Hook Form gère les formulaires
- Zod gère la validation côté frontend
- Axios est utilisé pour les requêtes HTTP
- Toast notifications pour feedback utilisateur

---

## 🚀 Installation

npm install  
npm run dev
