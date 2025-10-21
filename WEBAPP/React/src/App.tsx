import Card from "./components/card"


function App() {
 

  return (
    <div>
     <h1>
      Hello
     </h1>
     <div className="grid grid-cols-2 w-80 gap-4">
      <Card title="Susi" description="Beste Lehrerin"/>
      <Card title="Hans" description="Beste Lehrer"/>
      <Card title="Sepp" description="Super Typ"/>
     </div>

    </div>
  )
}

export default App
