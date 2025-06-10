import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submited, setSubmitted] = useState(false);

  function handleChange(event) {
    //
    setSubmitted(false); //reset when write name again in input field
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    //
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submited ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
