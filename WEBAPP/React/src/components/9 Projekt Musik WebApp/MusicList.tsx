import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type Song = {
  id: string;
  name: string;
  artists: { name: string }[];
  images: { url: string }[];
  album?: { images: { url: string }[] };
};

type Props = {
  search: string;
};

export default function MusicFinder({ search }: Props) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/songs.json")
      .then((res) => res.json())
      .then((json: Song[]) => {
        setSongs(json);
        setFilteredSongs(json);
      });
  }, []);

  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    setFilteredSongs(
      songs.filter((song) => song.name.toLowerCase().includes(lowerSearch))
    );
  }, [search, songs]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {filteredSongs.map((song) => (
        <div
          key={song.id}
          onClick={() => navigate(`/song/${song.id}`)}
          className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          <img
            src={song.images?.[0]?.url || song.album?.images?.[0]?.url}
            alt={song.name}
            className="w-full h-48 object-cover rounded"
          />
          <p className="mt-2 font-semibold">{song.name}</p>
          <p className="text-sm text-gray-300">
            {song.artists.map((a) => a.name).join(", ")}
          </p>
        </div>
      ))}
    </div>
  );
}
