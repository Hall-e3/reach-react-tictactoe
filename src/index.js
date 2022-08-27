import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Windmill } from "@windmill/react-ui";
import { Provider } from "react-redux";
import { store } from "./store";
import * as backend from "./build/index.main.mjs";
import { loadStdlib } from "@reach-sh/stdlib";
const reach = loadStdlib(process.env);
const root = ReactDOM.createRoot(document.getElementById("root"));
const handToInt = { O: 0, D: 1, X: 2 };
const intToOutcome = ["Player O wins!", "Draw!", "Player X wins!"];
const { standardUnit } = reach;
const defaults = { defaultFundAmt: "10", defaultWager: "3", standardUnit };
root.render(
  <Windmill>
    <Provider store={store}>
      <App />
    </Provider>
  </Windmill>
);
