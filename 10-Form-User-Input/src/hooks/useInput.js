import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [didEdit, setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsvalid = validationFn(enteredValue);
  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsvalid,
  };
}
