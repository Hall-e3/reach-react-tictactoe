import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Windmill } from "@windmill/react-ui";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Windmill>
    <App />
  </Windmill>
);
