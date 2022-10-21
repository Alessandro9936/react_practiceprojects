import { useState } from "react";

export const Form = ({ setFavouriteFact }) => {
  const [factInput, setFactInput] = useState("");
  const [isSent, setIsSent] = useState(false);

  let isFormValid = factInput.trim() !== "";

  const handleOnChange = (e) => {
    setFactInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFactInput("");
    setIsSent(true);
    setFavouriteFact(factInput);
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <textarea
        id="fact"
        cols="30"
        rows="10"
        onChange={handleOnChange}
        value={factInput}
      ></textarea>
      {isSent && <p>Cat fact added to Favourite Facts!</p>}
      <button disabled={!isFormValid} type="submit">
        Add your cat fact
      </button>
    </form>
  );
};
