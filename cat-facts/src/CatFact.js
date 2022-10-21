import React from "react";
export function CatFact({ text, setFavouriteFact }) {
  const saveInFavourite = () => {
    setFavouriteFact(text);
  };

  return (
    <>
      <li>
        <div className="fact">
          <p>{text}</p>
          {setFavouriteFact && (
            <button onClick={saveInFavourite}>Save Fact</button>
          )}
        </div>
      </li>
    </>
  );
}
