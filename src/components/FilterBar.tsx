import type { GameFilter } from "@/types/game";

interface FilterBarProps {
  filter: GameFilter;
  genres: string[];
  onChange: (filter: GameFilter) => void;
}

const PLATFORMS = [
  { label: "All", value: "all" },
  { label: "PC", value: "pc" },
  { label: "Browser", value: "browser" },
];

const SORT_OPTIONS = [
  { label: "Relevance", value: "relevance" },
  { label: "Popularity", value: "popularity" },
  { label: "Release Date", value: "release-date" },
  { label: "A-Z", value: "alphabetical" },
];

const FilterBar = ({ filter, genres, onChange }: FilterBarProps) => {
  const activeBtn = (isActive: boolean) =>
    `px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-100 ${
      isActive
        ? "bg-violet-300 text-black border-2 border-black shadow-[1px_1px_0px_0px_#000] translate-x-[1px] translate-y-[1px]"
        : "bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-zinc-50 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_#000]"
    }`;

  return (
    <div className="flex flex-col gap-4">
      {/* Platform */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-black uppercase tracking-wider text-black w-20">Platform</span>
        <div className="flex gap-2.5 flex-wrap py-1">
          {PLATFORMS.map((p) => (
            <button
              key={p.value}
              onClick={() =>
                onChange({ ...filter, platform: p.value as GameFilter["platform"] })
              }
              className={activeBtn(filter.platform === p.value || (!filter.platform && p.value === "all"))}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Genre */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-black uppercase tracking-wider text-black w-20">Genre</span>
        <div className="flex gap-2.5 flex-wrap py-1">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() =>
                onChange({
                  ...filter,
                  category: genre === "All" ? undefined : genre,
                })
              }
              className={activeBtn(
                genre === "All" ? !filter.category : filter.category === genre
              )}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-black uppercase tracking-wider text-black w-20">Sort</span>
        <div className="flex gap-2.5 flex-wrap py-1">
          {SORT_OPTIONS.map((s) => (
            <button
              key={s.value}
              onClick={() =>
                onChange({
                  ...filter,
                  sortBy: s.value as GameFilter["sortBy"],
                })
              }
              className={activeBtn(
                filter.sortBy === s.value ||
                  (!filter.sortBy && s.value === "relevance")
              )}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;