import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducers from "./RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);
export default store;
