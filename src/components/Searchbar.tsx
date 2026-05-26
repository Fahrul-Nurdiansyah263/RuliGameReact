// src/components/SearchBar.tsx

import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-md">
      {/* Search Icon */}
      <Search className="absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-black pointer-events-none z-10" />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Cari game..."
        className="w-full rounded-xl border-3 border-black bg-white py-2.5 pl-11 pr-10 text-sm font-bold text-black placeholder-zinc-500 outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 focus:-translate-x-[1px] focus:-translate-y-[1px] focus:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
      />

      {/* Clear Button */}
      <AnimatePresence>
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            onClick={() => onChange("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-black transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4.5 w-4.5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;