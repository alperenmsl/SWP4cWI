import React, { useState } from "react";
import MusicFinder from "../9 Projekt Musik WebApp/MusicList";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white p-6">
      <header className="flex items-center p-4 text-white font-bold">
        <h1 className="text-4xl md:text-5xl">React Music Finder</h1>
      </header>

      <div className="my-6">
        <input
          type="text"
          placeholder="Search music..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded w-full max-w-sm text-black"
        />
      </div>

      <MusicFinder search={search} />
    </div>
  );
}
