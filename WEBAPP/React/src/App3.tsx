import Cards from "./components/3 Aufgabe ProjectCards/Cards";

function App() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-4 gap-4 p-4">
      <Cards
        imageURL="https://thispersondoesnotexist.com/"
        title="Jason Smith"
        jobDescription="Bagger Fahrer"
      />

      <Cards
        imageURL="https://thispersondoesnotexist.com/"
        title="Johnson Thomas"
        jobDescription="Pilot"
      />

      <Cards
        imageURL="https://thispersondoesnotexist.com/"
        title="Albert Jack"
        jobDescription="Papst"
      />

      <Cards
        imageURL="https://thispersondoesnotexist.com/"
        title="Müller Mathis"
        jobDescription="Maler"
      />

      <Cards
        imageURL="https://thispersondoesnotexist.com/"
        title="Max Müller"
        jobDescription="Streitschlichter"
      />

      <Cards
        imageURL="https://thispersondoesnotexist.com/"
        title="Hans Jörg"
        jobDescription="Anwalt"
      />
    </div>
  );
}

export default App;
