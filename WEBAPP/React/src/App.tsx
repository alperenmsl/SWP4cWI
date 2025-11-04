import Card from "./components/1 Aufgabe Struktur/card";
import ShoppingList from "./components/2 Aufgabe Komponenten/list";

function App() {
  return (
    <div>
      <h1 className="text-2xl">Card List</h1>
      <div className="grid grid-cols-2 w-80 gap-4">
        <Card title="Susi" description="Beste Lehrerin" />
        <Card title="Hans" description="Beste Lehrer" />
        <Card title="Sepp" description="Super Typ" />
      </div>

      <br />

      <h1 className="text-2xl">Groccery List</h1>
      <ShoppingList desc="Coffee" />
      <ShoppingList desc="Tea" />
      <ShoppingList desc="Beer" />
    </div>
  );
}

export default App;
