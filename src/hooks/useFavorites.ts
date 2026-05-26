import { useFavoritesStore } from "@/store/useFavorites";
import type { Game } from "@/types/game";

export const useFavorites = () => {
    const { favorites, addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

    const toggleFavorite = (game: Game) => {
        if (isFavorite(game.id)) {
            removeFavorite(game.id);
        } else {
            addFavorite(game);
        }
    };

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        totalFavorites: favorites.length,
    }
}