import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Windmill } from "@windmill/react-ui";
import { Provider } from "react-redux";
import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Windmill>
    <Provider store={store}>
      <App />
    </Provider>
  </Windmill>
);
