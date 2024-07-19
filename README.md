# ForestHill Website Redesign

Ce projet est une refonte du site web de ForestHill réalisée dans le cadre d'un projet scolaire. L'application est développée avec Next.js et Tailwind CSS, et inclut un chatbot alimenté par l'API OpenAI.

## Fonctionnalités

- **Refonte du site web de ForestHill** : Une nouvelle interface utilisateur moderne et réactive utilisant Tailwind CSS.
- **Chatbot intégré** : Un assistant conversationnel interactif utilisant l'API OpenAI pour fournir des réponses automatisées aux utilisateurs.

## Technologies utilisées

- **Next.js** : Framework React pour le développement de l'application web.
- **Tailwind CSS** : Framework CSS pour une conception rapide et réactive.
- **API OpenAI** : Fournit des capacités de traitement du langage naturel pour le chatbot.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ThomasMms23/ChatBot.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd ChatBot
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Créez un fichier `.env.local` à la racine du projet et ajoutez vos clés API OpenAI :
   ```env
   NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
   ```
5. Lancez l'application en mode développement :
   ```bash
   npm run dev
   ```

## Utilisation

- Accédez à l'application via `http://localhost:3000`.
- Utilisez le chatbot pour poser des questions et recevoir des réponses automatiques.
