import { useEffect, useState } from "react";

type Artist = {
  idArtist: string;
  strArtist: string;
  intBornYear: string;
  strGenre: string;
  strMood: string;
  strCountry: string;
  strArtistThumb: string;
  strBiographyEN: string;
};

type Props = {
  search: string;
};

export default function MusicFinder({ search }: Props) {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search || search.length < 2) {
      setArtist(null);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    const fetchArtist = async () => {
      try {
        const res = await fetch(
          `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(
            search
          )}`,
          { signal: controller.signal }
        );

        const data = await res.json();

        if (data?.artists && data.artists.length > 0) {
          setArtist(data.artists[0]);
        } else {
          setArtist(null);
        }
      } catch (err) {
        if ((err as any).name !== "AbortError") {
          setArtist(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArtist();
    return () => controller.abort();
  }, [search]);

  if (loading) {
    return <p className="text-gray-400 mt-4">Searching artist...</p>;
  }

  if (!artist) {
    return <p className="text-gray-500 mt-4">No artist found</p>;
  }

  // ChatGPT Generierte UI
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-zinc-900 rounded-2xl p-6 shadow-xl w-full max-w-sm text-center">
        <img
          src={artist.strArtistThumb}
          alt={artist.strArtist}
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-zinc-700"
        />

        <h2 className="text-3xl font-bold mt-4 text-white">
          {artist.strArtist}
        </h2>

        <p className="text-gray-400">Born {artist.intBornYear || "Unknown"}</p>

        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          <span className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm">
            {artist.strGenre}
          </span>
          <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">
            {artist.strMood}
          </span>
        </div>

        <p className="text-gray-300 mt-4 text-sm line-clamp-4">
          {artist.strBiographyEN}
        </p>
      </div>
    </div>
  );
}
