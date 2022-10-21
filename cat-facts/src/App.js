import { useState } from "react";
import { CatFacts } from "./CatFacts";
import { Form } from "./Form";
import { Header } from "./Header";

function App() {
  const [catFacts, setCatFacts] = useState([]);
  const [favouriteFacts, setFavouriteFact] = useState([]);
  const [showFavourites, setShowFavourites] = useState();
  const [showForm, setShowForm] = useState(false);

  const getRandomFacts = async () => {
    setShowFavourites(false);
    setShowForm(false);
    const result = await fetch("https://meowfacts.herokuapp.com?count=10");
    const { data } = await result.json();
    setCatFacts(data);
  };

  const handleSetFavouriteFact = (fact) => {
    !favouriteFacts.includes(fact) &&
      setFavouriteFact((prev) => [...prev, fact]);
  };

  const handleShowFavourites = () => {
    setShowForm(false);
    setShowFavourites(true);
    setCatFacts([]);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <h1>Cat Facts</h1>
      <Header
        getRandomFacts={getRandomFacts}
        favouriteFacts={handleShowFavourites}
        showForm={handleShowForm}
      />
      {showForm && <Form setFavouriteFact={handleSetFavouriteFact} />}
      {!showFavourites && !showForm && (
        <CatFacts
          facts={catFacts}
          favouriteFacts={favouriteFacts}
          setFavouriteFact={handleSetFavouriteFact}
        />
      )}
      {showFavourites && !showForm && <CatFacts facts={favouriteFacts} />}
      <img
        className="cringe-cat"
        src="https://cdn130.picsart.com/306138030373211.png"
        alt=""
      />
    </div>
  );
}

export default App;
