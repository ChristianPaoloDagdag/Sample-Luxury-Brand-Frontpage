import React from "react";
import ReactDOM from "react-dom";

import App from "./App"; // one dot because same folder, importing components

ReactDOM.render(
  <App /> /* The naming convention is using the self closing tag App / */,
  document.getElementById("root")
); // Using .render function to display Hello World on root div ID, There should be one open and closing tag around 2 open and closing tags
