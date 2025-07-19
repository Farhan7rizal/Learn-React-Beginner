import { AVAILABLE_PLACES } from "./data.js";

import logoImg from "./assets/logo.png";
import Places from "./components/Places.jsx";
import { useState } from "react";

function App() {
  const [pickedPlaces, setPickedPlaces] = useState([]);

  function handleSelectPlaces(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  }

  return (
    <>
      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
        />
        <Places
          title="Available Places"
          Places={AVAILABLE_PLACES}
          onSelecetPlace={handleSelectPlaces}
        />
      </main>
    </>
  );
}

export default App;
