import { useQuery } from '@tanstack/react-query';
import { fetchGames, fetchGameById, fetchGamesByCategory } from '@/api/game';
import type { GameFilter } from '@/types/game';

export const useGames = (filter?: GameFilter) => {
    return useQuery({
        queryKey: ["games", filter],
        queryFn: () => fetchGames(filter),
        staleTime: 1000 * 60 * 5,
    });
};

export const useGameDetail = (id: number) => {
    return useQuery({
        queryKey: ["game", id],
        queryFn: () => fetchGameById(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    })
}

export const useGamesByCategory = (category: string) => {
    return useQuery({
        queryKey: ["games", "category", category],
        queryFn: () => fetchGamesByCategory(category),
        enabled: !!category,
        staleTime: 1000 * 60 * 5,
    })
}