# frnds-server

Backend API for the **Frnds** social web app — a CS 498 (Cloud Computing) final project at UIUC.

The frontend lives at: https://gitlab.com/sdesai51/cs498-final-project

## Stack

Node.js · Express · MongoDB Atlas · Heroku

## Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your MONGODB_URI and JWT_SECRET in .env
node server.js
```

## Environment variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret for JWT token signing |

Copy `.env.example` to `.env` and fill in your values. Never commit `.env`.

## API

The server exposes REST endpoints consumed by the Frnds React frontend for user management and social features.
