# MoviePlus

![Next.js](https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-000?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-000?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-000?style=for-the-badge&logo=supabase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-000?style=for-the-badge&logo=tailwindcss)

**A full-stack movie discovery web application built with Next.js, TypeScript and Supabase.**

MoviePlus lets users discover movies by category, search the TMDB catalogue and access personalized features through authentication.

---

## ✨ Features

- 🎬 Browse popular, comedy, drama, horror and animated movies
- 🔎 Search movies using the TMDB API
- 📄 Open individual movie detail pages
- 🔐 User authentication with Supabase
- 👤 Personalized profile area
- 💬 Feedback flow
- 📬 Newsletter section
- 📱 Responsive interface
- ⚡ Server-side data fetching with Next.js
- 🛡 Route and session handling with middleware

---

## 🛠 Tech Stack

### Frontend

`Next.js` · `React` · `TypeScript` · `Tailwind CSS`

### Backend & Data

`Supabase` · `Supabase Auth` · `TMDB API`

### Tooling

`npm` · `Git` · `GitHub`

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
└── page.tsx
```

Shared UI lives in reusable components, while movie data is retrieved through a dedicated API layer.

```text
components/   → reusable UI
API/          → TMDB data access
utils/        → Supabase clients and shared helpers
middleware.ts → auth/session handling
```

---

## Data Integration

Movie data is fetched from **The Movie Database (TMDB)** using server-side requests and an environment-protected API token.

The API layer supports:

- popular movie discovery
- genre-based collections
- movie search
- individual movie details

Supabase is used for authentication and user-related functionality.

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

This project explores building a larger React application with:

- typed frontend development
- external API integration
- authentication
- server-side data fetching
- reusable component architecture
- route-based application structure
- responsive UI

---

Built by [Jelizaveta Kruglova](https://github.com/anjufehno).
