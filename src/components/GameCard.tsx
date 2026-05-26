import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Monitor, Globe } from "lucide-react";
import type { Game } from "@/types/game";
import FavoriteButton from "./FavoriteButton";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const isPC = game.platform.toLowerCase().includes("windows");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border-3 border-black bg-white text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
    >
      {/* Thumbnail */}
      <Link to={`/game/${game.id}`} className="relative overflow-hidden border-b-3 border-black aspect-video">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
          loading="lazy"
        />
        {/* FREE badge */}
        <span className="absolute left-2.5 top-2.5 rounded-md border-2 border-black bg-yellow-300 px-2 py-0.5 text-xs font-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
          FREE
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-3.5">
        {/* Title + Favorite */}
        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/game/${game.id}`}
            className="line-clamp-1 flex-1 text-base font-black text-black hover:text-violet-600 transition-colors"
          >
            {game.title}
          </Link>
          <FavoriteButton game={game} />
        </div>

        {/* Description */}
        <p className="line-clamp-2 text-xs font-bold text-zinc-700">
          {game.short_description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <Badge
            variant="outline"
            className="border-2 border-black bg-violet-100 px-2 py-0.5 text-xs font-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
          >
            {game.genre}
          </Badge>

          <span className="flex items-center gap-1.5 text-xs font-black text-zinc-800">
            {isPC ? (
              <>
                <Monitor className="h-3.5 w-3.5 stroke-[2.5]" />
                Windows
              </>
            ) : (
              <>
                <Globe className="h-3.5 w-3.5 stroke-[2.5]" />
                Browser
              </>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;