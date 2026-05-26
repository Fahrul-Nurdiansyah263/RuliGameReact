// src/store/favoriteStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Game } from "@/types/game";

interface FavoriteStore {
  favorites: Game[];
  addFavorite: (game: Game) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useFavoritesStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (game) =>
        set((state) => ({
          favorites: [...state.favorites, game],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((g) => g.id !== id),
        })),

      isFavorite: (id) => get().favorites.some((g) => g.id === id),
    }),
    {
      name: "favorites-storage",
    }
  )
);