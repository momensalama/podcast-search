# Podcast Search Application

A modern podcast search application built with Next.js, TypeScript, and PostgreSQL. This application allows users to search for podcasts using the iTunes Search API and displays results in a responsive, user-friendly interface.

## 🚀 Features

- 🔍 Real-time podcast search using iTunes Search API
- 💾 Persistent storage with PostgreSQL database
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔒 Type-safe development with TypeScript
- ⚡ Fast and efficient search results
- 🔄 Automatic database synchronization

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v14 or higher)
- npm or yarn package manager

## 🛠️ Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd podcast-search
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/podcast_search"
   ```

4. **Database Setup**

   ```bash
   # Initialize the database
   npx prisma migrate dev

   # Generate Prisma Client
   npx prisma generate
   ```

5. **Start Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## 📁 Project Structure

```
├── app/
│   ├── api/          # API routes
│   ├── components/   # React components
│   ├── generated/    # Generated files
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Main page component
├── prisma/
│   ├── schema.prisma # Database schema
│   └── migrations/   # Database migrations
├── public/          # Static assets
├── .next/          # Next.js build output
├── next.config.ts  # Next.js configuration
├── postcss.config.mjs # PostCSS configuration
├── eslint.config.mjs # ESLint configuration
└── tsconfig.json   # TypeScript configuration
```

## 🔌 API Endpoints

### Search Podcasts

- **Endpoint:** `GET /api/search`
- **Query Parameters:**
  - `q`: Search term (required)
  - `limit`: Number of results (optional, default: 20)
- **Response:** Array of podcast objects with metadata

## 🛠️ Technologies

- **Framework:** Next.js 15
- **Language:** TypeScript 5.0+
- **Styling:** Tailwind CSS 3.0+
- **Database:** PostgreSQL 14+
- **ORM:** Prisma 5.0+
- **API:** iTunes Search API

## 🏗️ Architecture

The application follows a modern, scalable architecture:

1. **Frontend Layer**

   - Next.js pages and components
   - Client-side state management
   - Responsive UI components

2. **API Layer**

   - Next.js API routes
   - Request validation
   - Error handling

3. **Data Layer**
   - Prisma ORM
   - PostgreSQL database
   - Data caching

## 🔜 Future Improvements

- [ ] Implement infinite scroll pagination
- [ ] User authentication and authorization
- [ ] Podcast favorites and playlists
- [ ] Advanced search filters
- [ ] Podcast episode preview
- [ ] User ratings and reviews
- [ ] Social sharing features
- [ ] Implement search history
- [ ] Add podcast recommendations
- [ ] Implement dark/light theme toggle

## 🎯 Challenges & Solutions

### 1. API Rate Limiting

- **Challenge:** iTunes Search API has rate limits that could affect user experience
- **Solution:** Implemented client-side caching and database storage to reduce API calls

### 2. Real-time Search Performance

- **Challenge:** Handling rapid user input while maintaining smooth search experience
- **Solution:** Implemented debouncing for search input and optimized database queries

### 3. Type Safety

- **Challenge:** Ensuring type safety across API responses and database operations
- **Solution:** Leveraged TypeScript and Prisma's type generation for end-to-end type safety

### 4. Error Handling

- **Challenge:** Providing meaningful error messages for various failure scenarios
- **Solution:** Implemented comprehensive error boundaries and user-friendly error states

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
