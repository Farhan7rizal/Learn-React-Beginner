import Header from "./components/header";
import UserInput from "./components/userInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}></UserInput>
      {!inputIsValid && (
        <p className="center">Please enter duration graeter than zero!</p>
      )}
      {inputIsValid && <Results input={userInput}></Results>}
    </>
  );
}
export default App;
