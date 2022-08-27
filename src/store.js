import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
const initialState = {};
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
