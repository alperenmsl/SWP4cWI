import { useState } from "react";

import MusicFinder from "../9 Projekt Musik WebApp/MusicFinder";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white p-6">
      <header className="flex items-center p-4 text-white font-bold">
        <h1 className="text-4xl md:text-5xl">React Artist Finder</h1>
      </header>

      <div className="my-6">
        <input
          type="text"
          placeholder="Search artist..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 rounded-xl w-full max-w-sm text-white bg-black/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <MusicFinder search={search} />
    </div>
  );
}
