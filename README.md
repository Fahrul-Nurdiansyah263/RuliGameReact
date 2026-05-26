# 🎮 RuliGame

A **Game Discovery Portal** built to explore modern frontend data management — featuring real-time search, smart filtering, and a persistent favorites system, wrapped in a bold **Neo-Brutalism** UI.

> Built as a learning playground for TanStack Query v5 and Zustand in a real-world use case.

🔗 **Live Demo:** [ruli-game-react.vercel.app](https://ruli-game-react.vercel.app)

---

## ✨ Features

- 🔍 **Real-time Search** — Search games by title or description instantly
- 🎛️ **Multi-filter System** — Filter by platform (PC / Browser), genre, and sort order
- 📄 **Game Detail Page** — Full info with interactive screenshot gallery, system requirements, and metadata
- ❤️ **Favorites System** — Save games locally with persistent storage (survives page refresh)
- ⚡ **Smart Caching** — TanStack Query handles caching so the app never refetches unnecessarily

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** + TypeScript | Core framework |
| **Tailwind CSS v4** | Styling (via `@tailwindcss/vite`) |
| **TanStack Query v5** | Async state management & caching |
| **Zustand** | Global state (favorites) with persistence |
| **Framer Motion** | Micro-animations & transitions |
| **Axios** | HTTP client |
| **React Router v7** | Client-side routing |
| **Lucide React** | Icons |

---

## 🗂️ Project Structure

```
src/
├── api/          # Axios API calls (FreeToGame API)
├── components/   # Reusable UI components
│   ├── ui/       # Base components (Button, Badge, Card, Skeleton)
│   ├── GameCard.tsx
│   ├── GameGrid.tsx
│   ├── Navbar.tsx
│   ├── Searchbar.tsx
│   └── FilterBar.tsx
├── hooks/        # Custom hooks (useGames, useFavorites)
├── pages/        # Route pages (Home, Detail, Favorites)
├── store/        # Zustand store (favorites with persist middleware)
├── types/        # TypeScript type definitions
└── utils/        # Helper functions (filter, format)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `>= 18`
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ruli-game.git
cd ruli-game

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---

## 📡 API

This project uses the **[FreeToGame API](https://www.freetogame.com/api-doc)** — a free, public API that provides data on free-to-play games across PC and browser platforms.

```
Base URL: https://www.freetogame.com/api

GET /games              → List all games (supports platform, category, sort-by params)
GET /game?id={id}       → Get game detail by ID
```

> **Note:** The FreeToGame API does not require an API key.

---

## 💡 Key Learnings

### TanStack Query v5
- How query keys work and why they matter for cache invalidation
- Handling `isLoading`, `isError`, and `data` states cleanly without manual `useEffect`
- Using `staleTime` and `gcTime` to control when data is refetched

### Zustand
- Creating a global store with minimal boilerplate
- Using the `persist` middleware to sync state with `localStorage` automatically
- Combining Zustand (for global/persistent state) with TanStack Query (for server state) in the same app

---

## 🎨 Design

UI is built with a **Neo-Brutalism** design language:
- Bold `3px` black borders
- Hard flat offset shadows (`box-shadow: 4px 4px 0px #000`)
- High-contrast color palette — cream background, black borders, violet & yellow accents
- Kinetic hover effects (elements shift on hover, shadow grows)

---

## 📄 License

MIT License — feel free to use this project as a reference or learning resource.
