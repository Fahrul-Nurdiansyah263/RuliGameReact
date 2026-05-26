// src/pages/DetailPage.tsx

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Monitor, Globe, Calendar, Building2, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useGameDetail } from "@/hooks/useGames";
import { formatReleaseDate } from "@/utils/filterHelpers";
import FavoriteButton from "@/components/FavoriteButton";

const DetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, isError } = useGameDetail(Number(id));
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  // Loading State
  if (isLoading) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Skeleton className="mb-6 h-6 w-24 bg-zinc-800" />
        <Skeleton className="mb-4 h-10 w-2/3 bg-zinc-800" />
        <Skeleton className="mb-8 h-64 w-full rounded-xl bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2 flex flex-col gap-3">
            <Skeleton className="h-4 w-full bg-zinc-800" />
            <Skeleton className="h-4 w-full bg-zinc-800" />
            <Skeleton className="h-4 w-3/4 bg-zinc-800" />
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-4 w-full bg-zinc-800" />
            <Skeleton className="h-4 w-2/3 bg-zinc-800" />
          </div>
        </div>
      </main>
    );
  }

  // Error State
  if (isError || !game) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
          <p className="text-lg font-semibold text-zinc-400">Game tidak ditemukan</p>
          <Link to="/" className="text-sm text-violet-400 hover:underline">
            Kembali ke Home
          </Link>
        </div>
      </main>
    );
  }

  const isPC = game.platform.toLowerCase().includes("windows");

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-black">
      {/* Back Button */}
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-black bg-white px-3.5 py-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] rounded-lg transition-all duration-100"
      >
        <ArrowLeft className="h-4 w-4 stroke-[2.5]" />
        Kembali
      </Link>

      {/* Title Row */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-black tracking-tight text-black">{game.title}</h1>
          <div className="flex items-center gap-2.5 flex-wrap">
            <Badge className="border-2 border-black bg-yellow-300 px-2.5 py-0.5 text-xs font-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-300">
              FREE
            </Badge>
            <Badge variant="outline" className="border-2 border-black bg-violet-100 px-2.5 py-0.5 text-xs font-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
              {game.genre}
            </Badge>
            <span className="flex items-center gap-1.5 text-xs font-black text-zinc-800 ml-1">
              {isPC ? (
                <><Monitor className="h-4 w-4 stroke-[2.5]" /> Windows</>
              ) : (
                <><Globe className="h-4 w-4 stroke-[2.5]" /> Browser</>
              )}
            </span>
          </div>
        </div>

        <FavoriteButton game={game} size="lg" />
      </div>

      {/* Screenshots */}
      {game.screenshots && game.screenshots.length > 0 && (
        <div className="mb-8">
          {/* Main Screenshot */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeScreenshot}
              src={game.screenshots[activeScreenshot].image}
              alt={`Screenshot ${activeScreenshot + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-4 h-72 w-full rounded-2xl border-3 border-black object-cover md:h-[480px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            />
          </AnimatePresence>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-black">
            {game.screenshots.map((ss, i) => (
              <button
                key={ss.id}
                onClick={() => setActiveScreenshot(i)}
                className={`shrink-0 overflow-hidden rounded-xl border-2 border-black transition-all duration-100 ${
                  activeScreenshot === i
                    ? "shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -translate-y-[1px] opacity-100"
                    : "opacity-60 hover:opacity-100 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-[0.5px]"
                }`}
              >
                <img
                  src={ss.image}
                  alt={`Thumbnail ${i + 1}`}
                  className="h-14 w-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left: Description */}
        <div className="md:col-span-2">
          <h2 className="mb-4 text-xl font-black uppercase tracking-wider text-black">Tentang Game</h2>
          <p className="text-sm leading-relaxed text-zinc-800 font-bold">{game.description}</p>

          {/* System Requirements */}
          {game.minimum_system_requirements && (
            <div className="mt-8">
              <h2 className="mb-4 text-xl font-black uppercase tracking-wider text-black">
                Minimum Requirements
              </h2>
              <div className="rounded-2xl border-3 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {Object.entries(game.minimum_system_requirements).map(
                    ([key, value]) =>
                      value ? (
                        <div key={key} className="border-b border-zinc-200 pb-2 last:border-0 sm:last:border-b-0">
                          <p className="text-xs font-black uppercase text-zinc-400 tracking-wider">
                            {key}
                          </p>
                          <p className="text-sm font-bold text-black mt-0.5">{value}</p>
                        </div>
                      ) : null
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Info */}
        <div className="flex flex-col gap-5">
          <div className="rounded-2xl border-3 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="mb-4 text-base font-black uppercase tracking-wider text-black">Info Game</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 shrink-0 text-black stroke-[2.5]" />
                <div>
                  <p className="text-xs font-black uppercase text-zinc-400 tracking-wider">Developer</p>
                  <p className="text-sm font-bold text-black mt-0.5">{game.developer}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 shrink-0 text-black stroke-[2.5]" />
                <div>
                  <p className="text-xs font-black uppercase text-zinc-400 tracking-wider">Publisher</p>
                  <p className="text-sm font-bold text-black mt-0.5">{game.publisher}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 shrink-0 text-black stroke-[2.5]" />
                <div>
                  <p className="text-xs font-black uppercase text-zinc-400 tracking-wider">Release Date</p>
                  <p className="text-sm font-bold text-black mt-0.5">
                    {formatReleaseDate(game.release_date)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Play Button */}
          <a
            href={game.game_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border-3 border-black bg-[#4ADE80] px-5 py-4 text-base font-black text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#3ecb70] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-100 text-center"
          >
            <ExternalLink className="h-5 w-5 stroke-[2.5]" />
            Main Sekarang
          </a>
        </div>
      </div>
    </main>
  );
};

export default DetailPage;