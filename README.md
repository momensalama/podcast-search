# Podcast Search Application

A modern podcast search application built with Next.js, TypeScript, and PostgreSQL.

## Features

- Real-time podcast search (iTunes Search API)
- PostgreSQL database storage
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Responsive design

## Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment**
   Create `.env`:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/podcast_search"
   ```

3. **Setup database**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Tech Stack

- Next.js 15
- TypeScript 5.0+
- Tailwind CSS 3.0+
- PostgreSQL 14+
- Prisma 5.0+

## API

`GET /api/search`

- Query params: `q` (search term), `limit` (optional, default: 20)
- Returns: Array of podcast objects

## Project Structure

```
├── app/          # Pages and components
├── prisma/       # Database schema
├── public/       # Static assets
└── ...config files
```

p

## License

MIT License
