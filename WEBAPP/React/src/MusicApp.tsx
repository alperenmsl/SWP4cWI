import { Routes, Route } from "react-router";
import HomePage from "./components/pages/HomePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
