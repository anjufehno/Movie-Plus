# MoviePlus

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-000?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-000?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-000?style=for-the-badge&logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-000?style=for-the-badge&logo=tailwindcss)
![Typecheck](https://github.com/anjufehno/Movie-Plus/actions/workflows/typecheck.yml/badge.svg)

**A full-stack movie discovery web application built with Next.js, TypeScript and Supabase.**

MoviePlus lets users discover movies by category, search the TMDB catalogue and access personalized features through authentication.

---

## ✨ Features

- 🎬 Browse popular, comedy, drama, horror and animated movies
- 🔎 Search movies through the TMDB API
- 📄 View typed movie detail pages
- 🔐 User authentication with Supabase
- 👤 Personalized profile area
- 💬 Feedback flow
- 📬 Newsletter section
- 📱 Responsive interface
- ⚡ Parallel server-side data fetching with Next.js
- 🛡 Route and session handling with middleware
- ⏳ Application-level loading state
- ⚠️ Error boundary with retry support
- ✅ Automated TypeScript checks with GitHub Actions

---

## 🛠 Tech Stack

### Frontend

`Next.js` · `React` · `TypeScript` · `Tailwind CSS`

### Backend & Data

`Supabase` · `Supabase Auth` · `TMDB API`

### Engineering & Workflow

`TypeScript strict mode` · `GitHub Actions` · `npm` · `Git` · `GitHub`

---

## Architecture

The application uses the **Next.js App Router** with routes separated by feature:

```text
app/
├── auth/
├── description/
├── feedback/
├── login/
├── newsletter/
├── profile/
├── search/
├── error.tsx
├── loading.tsx
└── page.tsx
```

Shared UI lives in reusable components, while movie data is retrieved through a dedicated typed API layer.

```text
components/   → reusable UI
API/          → typed TMDB data access and request handling
utils/        → Supabase clients and shared helpers
middleware.ts → auth/session handling
```

The homepage uses reusable movie sections and fetches independent collections in parallel with `Promise.all`.

---

## Data Integration

Movie data is fetched from **The Movie Database (TMDB)** using server-side requests and an environment-protected API token.

The API layer includes:

- typed movie and genre models
- centralized request handling
- response status validation
- environment configuration checks
- safe search query encoding
- popular and genre-based movie collections
- movie search
- individual movie details

Supabase is used for authentication and user-related functionality.

---

## Quality & CI

The project uses TypeScript strict mode and includes a GitHub Actions workflow that runs type checking on pushes and pull requests.

```bash
npm run typecheck
```

User-facing loading and error states are implemented through the Next.js App Router conventions.

---

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/anjufehno/Movie-Plus.git
cd Movie-Plus
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file and provide the required Supabase configuration and TMDB API token.

```text
TMDB_API_AUTH=your_tmdb_token
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start development server

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Project Focus

This project demonstrates:

- type-safe React and Next.js development
- external API integration
- authentication
- server-side data fetching
- reusable component architecture
- route-based application structure
- loading and error UX
- responsive interface design
- automated code quality checks

---

Built by [Jelizaveta Kruglova](https://github.com/anjufehno).
