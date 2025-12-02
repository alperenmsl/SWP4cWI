import { Link } from "react-router";

export default function Page1() {
  return (
    <div className="min-h-screen bg-amber-200 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        This is Page 2
      </h1>

      <div className="mt-12">
        <Link
          className="bg-amber-300 hover:bg-amber-400 text-white px-6 py-3 rounded-lg shadow-lg transition"
          to={"/"}
        >
          Zurück
        </Link>
      </div>
    </div>
  );
}
