import React from "react";
export function Header({ getRandomFacts, favouriteFacts, showForm }) {
  return (
    <header className="header">
      <div>
        <button onClick={getRandomFacts}>Get Cat Facts</button>
      </div>
      <button onClick={showForm}>Create Cat Fact</button>
      <button onClick={favouriteFacts}>Favourite Facts</button>
    </header>
  );
}
