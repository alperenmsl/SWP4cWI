import { Routes, Route } from "react-router";
import HomePage from "./components/pages/HomePage";
import SongDetail from "./components/pages/SongDetail";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>
    </div>
  );
}
