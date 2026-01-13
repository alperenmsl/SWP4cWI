import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

type Song = {
  idTrack: string;
  strTrack: string;
  strArtist: string;
  strTrackThumb: string | null;
};

type Props = {
  search: string;
};

export default function MusicFinder({ search }: Props) {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!search || search.length < 2) {
      setSongs([]);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    fetch(
      `https://www.theaudiodb.com/api/v1/json/2/searchtrack.php?s=${encodeURIComponent(
        search
      )}`,
      { signal: controller.signal }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.track) {
          setSongs(data.track);
        } else {
          setSongs([]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [search]);

  if (loading) {
    return <p className="text-gray-400 mt-4">Searching songs...</p>;
  }

  if (!songs.length && search.length >= 2) {
    return <p className="text-gray-400 mt-4">No songs found</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {songs.map((song) => (
        <div
          key={song.idTrack}
          onClick={() => navigate(`/song/${song.idTrack}`)}
          className="bg-gray-700 p-2 rounded hover:bg-gray-600 cursor-pointer transition"
        >
          <img
            src={song.strTrackThumb || "/placeholder.png"}
            alt={song.strTrack}
            className="w-full h-48 object-cover rounded"
          />
          <p className="mt-2 font-semibold">{song.strTrack}</p>
          <p className="text-sm text-gray-300">{song.strArtist}</p>
        </div>
      ))}
    </div>
  );
}
