export interface Game {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    game_url: string;
    genre: string;
    platform: string;
    publisher: string;
    developer: string;
    release_date: string;
    freetogame_profile_url: string;
}

export interface GameDetail extends Game {
    description: string;
    minimum_system_requirements: SystemRequirements | null;

    screenshots: Screenshot[];
    status: string;
}

export interface SystemRequirements {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
}

export interface Screenshot {
    id: number;
    image: string;
}

export interface GameFilter {
    category?: string;
    platform?: "pc" | "browser" | "all";
    sortBy?: "relevance" | "popularity" | "release-date" | "alphabetical";
    search?: string;
}