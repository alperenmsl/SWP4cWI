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
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("search", search);
    if (!search || search.length < 2) {
      setSongs([]);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const fetchSongs = async () => {
      console.log("fetching");

      try {
        const artistRes = await fetch(
          `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(
            search
          )}`,
          { signal: controller.signal }
        );
        const artistData = await artistRes.json();
        setArtists(artistData);
      } catch (err) {
        if ((err as any).name !== "AbortError") setSongs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();

    return () => controller.abort();
  }, [search]);

  if (loading) {
    return <p className="text-gray-400 mt-4">Searching songs...</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {JSON.stringify(artists)}
    </div>
  );
}
