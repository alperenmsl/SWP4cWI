import Cards from "./components/5 Aufgabe Komponenten State/Cards";
import Counter from "./components/5 Aufgabe Komponenten State/Counter";
import LightSwtich from "./components/5 Aufgabe Komponenten State/LightSwitch";

function App() {
  return (
    <div>
      <h1>Aufgabe 5 Komponenten State</h1>
      <br />
      <div className="grid grid-cols-2 w-80 gap-4">
        <Cards name="Jason Smith" description="Bagger Fahrer" />

        <Cards name="Johnson Thomas" description="Pilot" />

        <Cards name="Albert Jack" description="Papst" />

        <Cards name="Müller Mathis" description="Maler" />

        <Cards name="Max Müller" description="Streitschlichter" />

        <Cards name="Hans Jörg" description="Anwalt" />

        <br />
        <h1>
          Aufgabe 5 - <br /> Aufgabe 1 Counter
        </h1>
        <br />
        <Counter />

        <br />
        <h1>
          Aufgabe 5 - <br /> Aufgabe 2 Lichtschalter
        </h1>
        <br />
        <LightSwtich />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
