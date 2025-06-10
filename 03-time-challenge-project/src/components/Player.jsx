import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef(); //with ref we can get rid one state (enteredPlayerName) and onChange={handleChange}

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submited, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   //
  //   setSubmitted(false); //reset when write name again in input field
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    //
    // setSubmitted(true);
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
