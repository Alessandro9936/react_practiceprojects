import { CatFact } from "./CatFact";
import React from "react";

export function CatFacts({ facts, setFavouriteFact }) {
  const handleAddOfFavouriteFact = (fact) => {
    setFavouriteFact(fact);
  };

  return (
    <ul className="cat-facts">
      {facts.map((fact) =>
        setFavouriteFact ? (
          <CatFact
            setFavouriteFact={handleAddOfFavouriteFact}
            key={Math.random()}
            text={fact}
          />
        ) : (
          <CatFact key={Math.random()} text={fact} />
        )
      )}
    </ul>
  );
}
