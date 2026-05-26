import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Game } from "@/types/game";
import { useFavorites } from "@/hooks/useFavorites";

interface FavoriteButtonProps {
  game: Game;
  size?: "sm" | "lg";
}

const FavoriteButton = ({ game, size = "sm" }: FavoriteButtonProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const active = isFavorite(game.id);

  const iconSize = size === "lg" ? "h-5 w-5" : "h-4 w-4";
  const btnSize = size === "lg" ? "p-2" : "p-1.5";

  return (
    <motion.button
      onClick={(e) => {
        e.preventDefault(); 
        toggleFavorite(game);
      }}
      whileTap={{ scale: 0.95 }}
      className={`flex items-center justify-center ${btnSize} rounded-full border-2 border-black transition-all duration-100 ${
        active
          ? "bg-rose-400 text-black shadow-[1px_1px_0px_0px_#000] translate-x-[1px] translate-y-[1px]"
          : "bg-white text-zinc-600 hover:text-black shadow-[3px_3px_0px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000]"
      }`}
      aria-label={active ? "Hapus dari favorit" : "Tambah ke favorit"}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={active ? "filled" : "empty"}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <Heart
            className={iconSize}
            fill={active ? "currentColor" : "none"}
          />
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default FavoriteButton;