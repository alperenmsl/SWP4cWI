import Cards from "./components/3 Aufgabe ProjectCards/Cards";

function App() {
  return (
    <div>
      <h1>Aufgabe 3 Tailwind und Properties</h1>
      <br />
      <div className="grid grid-cols-2 w-80 gap-4">
        <Cards title="Jason Smith" jobDescription="Bagger Fahrer" />

        <Cards title="Johnson Thomas" jobDescription="Pilot" />

        <Cards title="Albert Jack" jobDescription="Papst" />

        <Cards title="Müller Mathis" jobDescription="Maler" />

        <Cards title="Max Müller" jobDescription="Streitschlichter" />

        <Cards title="Hans Jörg" jobDescription="Anwalt" />
      </div>
    </div>
  );
}

export default App;
