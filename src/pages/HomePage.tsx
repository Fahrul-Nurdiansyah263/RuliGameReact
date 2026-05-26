import { useState, useMemo } from "react";
import { useGames } from "@/hooks/useGames";
import type { GameFilter } from "@/types/game";
import { filterGames, getUniqueGenres } from "@/utils/filterHelpers";
import SearchBar from "@/components/Searchbar";
import FilterBar from "@/components/FilterBar";
import GameGrid from "@/components/GameGrid";

const HomePage = () => {
  const [filter, setFilter] = useState<GameFilter>({
    platform: "all",
    sortBy: "relevance",
  });
  const [search, setSearch] = useState("");

  // Fetch dari API (hanya platform & category & sortBy yang ke API)
  const { data: games = [], isLoading, isError } = useGames({
    platform: filter.platform,
    category: filter.category,
    sortBy: filter.sortBy,
  });

  // Filter search & sort client-side
  const filteredGames = useMemo(
    () => filterGames(games, { ...filter, search }),
    [games, filter, search]
  );

  // Genre list dari data yang sudah di-fetch
  const genres = useMemo(() => getUniqueGenres(games), [games]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-black">
      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-4xl font-black text-black leading-tight">
          Temukan Game <span className="bg-yellow-300 border-3 border-black px-2 py-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-1 inline-block mx-1">Gratis</span> Terbaik
        </h1>
        <p className="mt-3 text-sm font-bold text-zinc-700">
          {isLoading ? "Memuat..." : `${filteredGames.length} game tersedia`}
        </p>
      </div>

      {/* Search + Filter */}
      <div className="mb-6 flex flex-col gap-4">
        <SearchBar value={search} onChange={setSearch} />
        <FilterBar filter={filter} genres={genres} onChange={setFilter} />
      </div>

      {/* Game Grid */}
      <GameGrid
        games={filteredGames}
        isLoading={isLoading}
        isError={isError}
      />
    </main>
  );
};

export default HomePage;