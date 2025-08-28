import { useRef, useState } from "react";

export default function Login() {
  const [formIsInvalid, setFormIsInvalid] = useState();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const email = useRef();
  const password = useRef();
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // function handleSubmit() {
  //   event.preventDefault();
  //   console.log(enteredValues);
  // }

  function handleSubmit(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword);
    const emailValid = enteredEmail.includes("@");
    if (!emailValid) {
    }
  }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: value,
  //   }));
  // }

  // function handleEmailChange() {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange() {
  //   setEnteredPassword(event.target.value);
  // }
  return (
    <form>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
            // onChange={(event) => handleInputChange("email", event.target.value)}
            // value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
            // onChange={(event) =>
            //   handleInputChange("password", event.target.value)
            // }
            // value={enteredValues.password}
          />
        </div>
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
