import { useParams } from "react-router";
import { useEffect, useState } from "react";

type Song = {
  id: string;
  name: string;
  artists: { name: string }[];
  images: { url: string }[];
};

export default function SongDetail() {
  const { id } = useParams();
  const [song, setSong] = useState<Song | null>(null);

  useEffect(() => {
    fetch("songs.json")
      .then((res) => res.json())
      .then((data: Song[]) => {
        const found = data.find((s) => s.id === id);
        setSong(found || null);
      });
  }, [id]);

  if (!song) {
    return <p className="text-white p-6">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-800 text-white p-6">
      <img
        src={song.images[0].url}
        alt={song.name}
        className="w-64 rounded-xl shadow-lg"
      />

      <h1 className="text-4xl font-bold mt-6">{song.name}</h1>
      <p className="text-gray-300 mt-2 text-lg">
        {song.artists.map((a) => a.name).join(", ")}
      </p>
    </div>
  );
}
