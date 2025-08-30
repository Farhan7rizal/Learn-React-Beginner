import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";
export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  // const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));
  // const emailIsInvalid =
  //   didEdit.email &&
  //   !isEmail(enteredValues.email) &&
  //   !isNotEmpty(enteredValues.email);
  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));
  // const passwordIsInvalid =
  //   didEdit.password && enteredValues.password.trim().length < 6;
  // const passwordIsInvalid =
  // didEdit.password && !hasMinLength(enteredValues.password, 6);

  function handleSubmit() {
    event.preventDefault();

    // if (!emailIsInvalid && !passwordIsInvalid) {
    //   setEnteredValues({ email: "", password: "" });
    // }
    if (emailHasError || passwordHasError) {
      return;
    }

    console.log(emailValue, passwordValue);
  }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }));
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: false,
  //   }));
  // }

  // // function handleEmailChange() {
  // //   setEnteredEmail(event.target.value);
  // // }

  // // function handlePasswordChange() {
  // //   setEnteredPassword(event.target.value);
  // // }

  // function handleInputBlur(identifier) {
  //   setDidEdit((prevEdit) => ({
  //     ...prevEdit,
  //     [identifier]: true,
  //   }));
  // }
  return (
    <form>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "Please enter a valid email"}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "please enter a valid password"}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </p>
    </form>
  );
}
