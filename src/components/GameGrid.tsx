// src/components/GameGrid.tsx

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Gamepad2 } from "lucide-react";
import type { Game } from "@/types/game";
import GameCard from "./GameCard";

interface GameGridProps {
  games: Game[];
  isLoading: boolean;
  isError: boolean;
}

const SkeletonCard = () => (
  <div className="flex flex-col overflow-hidden rounded-2xl border-3 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
    <Skeleton className="h-44 w-full rounded-none bg-zinc-200" />
    <div className="flex flex-col gap-2 p-3.5">
      <Skeleton className="h-4.5 w-3/4 bg-zinc-200" />
      <Skeleton className="h-3 w-full bg-zinc-200" />
      <Skeleton className="h-3 w-2/3 bg-zinc-200" />
      <div className="mt-3 flex justify-between">
        <Skeleton className="h-6 w-16 bg-zinc-200" />
        <Skeleton className="h-6 w-12 bg-zinc-200" />
      </div>
    </div>
  </div>
);

const GameGrid = ({ games, isLoading, isError }: GameGridProps) => {
  // Loading State
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
        <Gamepad2 className="h-12 w-12 text-black stroke-[2.5]" />
        <p className="text-xl font-black text-black">Gagal memuat game</p>
        <p className="text-sm font-bold text-zinc-700">
          Cek koneksi internet kamu dan coba lagi.
        </p>
      </div>
    );
  }

  // Empty State
  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
        <Gamepad2 className="h-12 w-12 text-black stroke-[2.5]" />
        <p className="text-xl font-black text-black">
          Tidak ada game ditemukan
        </p>
        <p className="text-sm font-bold text-zinc-700">
          Coba ubah filter atau kata kunci pencarian.
        </p>
      </div>
    );
  }

  // Game Grid
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {games.map((game, index) => (
        <motion.div
          key={game.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03 }}
        >
          <GameCard game={game} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GameGrid;