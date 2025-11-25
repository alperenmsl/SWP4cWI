import { useState } from "react";
import TodoList from "./components/8 Aufgabe DemoPage/TodoList";
import type { Todo } from "./utils/types";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4">
      <h1 className="font-bold">Aufgabe 8 - Demo Page</h1>

      {/* Suchfeld */}
      <input
        type="text"
        placeholder="Search todos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-md my-4 w-full max-w-sm"
      />

      {/* TodoList mit Suchfilter */}
      <TodoList search={search} />
    </div>
  );
}
