import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

const Navbar = () => {
  const { totalFavorites } = useFavorites();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-black text-black group"
        >
          <Gamepad2 className="h-6 w-6 text-violet-600 transition-transform group-hover:rotate-6" />
          <span>
            Ruli<span className="bg-violet-200 px-1 border border-black shadow-[1px_1px_0px_0px_#000]">Game</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-bold uppercase tracking-wider transition-colors ${
              isActive("/")
                ? "text-violet-600 underline decoration-3 underline-offset-4 decoration-violet-600"
                : "text-zinc-700 hover:text-black"
            }`}
          >
            Browse
          </Link>

          <Link
            to="/favorites"
            className={`relative flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider transition-colors ${
              isActive("/favorites")
                ? "text-violet-600 underline decoration-3 underline-offset-4 decoration-violet-600"
                : "text-zinc-700 hover:text-black"
            }`}
          >
            <Heart className="h-4 w-4" />
            Favorites
            {totalFavorites > 0 && (
              <span className="absolute -right-5 -top-2 flex h-5 w-5 items-center justify-center rounded-full border-2 border-black bg-yellow-300 text-[10px] font-black text-black shadow-[1px_1px_0px_0px_#000]">
                {totalFavorites > 99 ? "99+" : totalFavorites}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;