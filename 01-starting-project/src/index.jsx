import ReactDOM from "react-dom/client"; //responsible output app component (app.jsx)

import App from "./App.jsx";
import "./index.css";
import React from "react";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />); //render is to make jsx file can run html file in our browser
// ReactDOM.createRoot(entryPoint).render(React.createElement(App)); //if don't use jsx
