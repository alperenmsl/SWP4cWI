import { Routes, Route } from "react-router";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}
