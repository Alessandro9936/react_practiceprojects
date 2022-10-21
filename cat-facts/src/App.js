import { useState } from "react";
import { CatFacts } from "./CatFacts";
import { Header } from "./Header";

function App() {
  const [catFacts, setCatFacts] = useState([]);

  const getCatFacts = async () => {
    const result = await fetch("https://meowfacts.herokuapp.com?count=30");
    const data = await result.json();
    console.log(data);
    setCatFacts(data);
  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <Header getCatFacts={getCatFacts} />
      <CatFacts catFacts={catFacts} />
      <img
        className="cringe-cat"
        src="https://cdn130.picsart.com/306138030373211.png"
        alt=""
      />
    </div>
  );
}

export default App;
