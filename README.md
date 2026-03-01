# Ticketing System API

Simple Node + Express API connected to MongoDB using Mongoose.

Quick start

```bash
npm install
cp .env.example .env
# edit .env to set MONGO_URI if needed
npm run dev
```

API endpoints

- GET /api/tickets — list tickets
- POST /api/tickets — create ticket (JSON body: { title, description, status })
# Ticketing_System_API