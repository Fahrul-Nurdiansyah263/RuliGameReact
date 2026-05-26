import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import GameCard from "@/components/GameCard";
import type { Game } from "@/types/game";

const FavoritePage = () => {
  const { favorites, totalFavorites } = useFavorites();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 text-black">
      {/* Header */}
      <div className="mb-8">
        <Link
          to="/"
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black bg-white px-3.5 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-all duration-100"
        >
          <ArrowLeft className="h-4 w-4 stroke-[2.5]" />
          Kembali
        </Link>

        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-black text-black">Favorit</h1>
          {totalFavorites > 0 && (
            <span className="rounded-full border-2 border-black bg-yellow-300 px-3 py-0.5 text-sm font-black text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              {totalFavorites}
            </span>
          )}
        </div>
        {totalFavorites > 0 && (
          <p className="mt-1 text-sm font-bold text-zinc-700">{totalFavorites} game tersimpan</p>
        )}
      </div>

      {/* Empty State */}
      {totalFavorites === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center gap-5 py-32 text-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Heart className="h-9 w-9 text-rose-500 fill-rose-500" />
          </div>
          <div>
            <p className="text-xl font-black text-black">
              Belum ada favorit
            </p>
            <p className="mt-1 text-sm font-bold text-zinc-700">
              Tekan ikon ❤️ di game manapun untuk menyimpannya di sini.
            </p>
          </div>
          <Link
            to="/"
            className="mt-2 rounded-xl border-3 border-black bg-[#A78BFA] px-5 py-2.5 text-sm font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-violet-300 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100"
          >
            Browse Game
          </Link>
        </motion.div>
      )}

      {/* Game Grid */}
      {totalFavorites > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {favorites.map((game: Game, index: number) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </main>
  );
};

export default FavoritePage;