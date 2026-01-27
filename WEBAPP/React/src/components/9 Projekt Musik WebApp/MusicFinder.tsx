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

const randomArtists = [
  "Aleyna Tilki",
  "Nilüfer",
  "Ceza",
  "Sagopa Kajmer",
  "Eminem",
  "Selena Gomez",
  "Merve Özbey",
  "Ufo361",
  "Ezhel",
  "Loredana",
  "Gims",
  "PNL",
  "Travis Scott",
  "Summer Cem",
  "Celo & Abdi",
  "Haftbefehl",
];

type Props = {
  search: string;
};

export default function MusicFinder({ search }: Props) {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(false);

  const getRandomNames = (count: number) =>
    [...randomArtists].sort(() => 0.5 - Math.random()).slice(0, count);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchArtists = async () => {
      try {
        const names = search.length >= 2 ? [search] : getRandomNames(8);

        const results: Artist[] = [];

        for (const name of names) {
          const res = await fetch(
            `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${encodeURIComponent(
              name,
            )}`,
            { signal: controller.signal },
          );

          const data = await res.json();
          if (data?.artists?.[0]) {
            results.push(data.artists[0]);
          }
        }

        setArtists(results);
      } catch (err) {
        if ((err as any).name !== "AbortError") {
          setArtists([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
    return () => controller.abort();
  }, [search]);

  if (loading) {
    return <p className="text-gray-400 mt-4">Loading artists...</p>;
  }

  if (artists.length === 0) {
    return <p className="text-gray-500 mt-4">No artists found 👀</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
      {artists.map((artist) => (
        <div
          key={artist.idArtist}
          className="bg-zinc-900 rounded-2xl p-4 shadow-xl text-center hover:scale-105 transition"
        >
          <img
            src={artist.strArtistThumb}
            alt={artist.strArtist}
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-zinc-700"
          />

          <h3 className="text-xl font-bold mt-3 text-white">
            {artist.strArtist}
          </h3>

          <p className="text-gray-400 text-sm">{artist.strGenre}</p>
        </div>
      ))}
    </div>
  );
}
