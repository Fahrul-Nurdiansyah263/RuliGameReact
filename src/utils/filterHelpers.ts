import type { Game, GameFilter } from "@/types/game";

export const filterGames = (games: Game[], filter: GameFilter): Game[] => {
    let result = [...games];

    if (filter.search && filter.search.trim() !== "") {
        const keyword = filter.search.toLowerCase();

        result = result.filter(
            (game) => 
                game.title.toLowerCase().includes(keyword) ||
                game.short_description.toLowerCase().includes(keyword) ||
                game.genre.toLowerCase().includes(keyword) 
        )
    }

    if (filter.sortBy === "alphabetical") {
        result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (filter.sortBy === "release-date") {
        result.sort(
            (a, b) => 
                new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
        )
    }

    return result;
}

export const getUniqueGenres = (games: Game[]): string[] => {
    const genres = games.map((g) => g.genre);

    return ["All", ...Array.from(new Set(genres)).sort()];
}

export const getUniquePlatforms = (): string[] => {
    return ["All", "PC (Windows)", "Web Browser"];
}

export const formatReleaseDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};