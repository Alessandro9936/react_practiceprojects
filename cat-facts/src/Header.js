import React from "react";
export function Header({ getCatFacts }) {
  return (
    <header className="header">
      <div>
        <button onClick={getCatFacts}>Get cat facts</button>
      </div>
      <button>Create cat fact</button>
      <button>Favourite facts</button>
    </header>
  );
}
