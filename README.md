# SmartBrain API

This is the backend for the SmartBrain face detection app. It handles user registration, sign-in, and image submission tracking.

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Knex
- Clarifai API

## Endpoints

- `POST /register` – Register a new user
- `POST /signin` – Sign in user
- `GET /profile/:id` – Get user profile
- `PUT /image` – Update user image count
- `POST /clarifai` – Proxy request to Clarifai face detection API

## Setup

```bash
npm install
npm run api
```
