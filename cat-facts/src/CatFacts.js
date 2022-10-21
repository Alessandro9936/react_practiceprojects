import { CatFact } from "./CatFact";
import React from "react";

export function CatFacts({ facts }) {
  return (
    <ul className="cat-facts">
      <CatFact />
    </ul>
  );
}
