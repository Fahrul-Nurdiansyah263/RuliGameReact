import axios from 'axios';
import type { Game, GameDetail, GameFilter } from '../types/game';

const BASE_URL = 'https://www.freetogame.com/api';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
});

export const fetchGames = async (filter?: GameFilter): Promise<Game[]> => {
    const params: Record<string, string> = {};

    if (filter?.platform && filter.platform !== "all") {
        params.platform = filter.platform;
    }

    if (filter?.category) {
        params.category = filter.category;
    }

    if (filter?.sortBy && filter.sortBy !== "relevance") {
        params["sort-by"] = filter.sortBy;
    }

    const { data } = await apiClient.get<Game[]>("/games", {params});

    if (filter?.search) {
        const searchKeyword = filter.search.toLocaleLowerCase();
        return data.filter((game) =>
            game.title.toLowerCase().includes(searchKeyword) ||
            game.short_description.toLowerCase().includes(searchKeyword)
        );
    }

    return data;
};

export const fetchGameById = async (id: number): Promise<GameDetail> => {
    const {data} = await apiClient.get<GameDetail>("/game", {
        params: {id},
    })
    return data;
}

export const fetchGamesByCategory = async (
    category: string
): Promise<Game[]> => {
    const { data } = await apiClient.get<Game[]>("/games", {
        params: { category },
    });
    return data;
}