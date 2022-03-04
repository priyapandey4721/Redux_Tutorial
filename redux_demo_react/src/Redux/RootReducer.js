import { combineReducers } from "redux";
import cakeReducer from "./Cakes/CakeReducer";
import IceCreamReducer from "./IceCreams/IceCreamReducer";
import reducer from "./User/UserReducer";
const RootReducers = combineReducers({
  cake: cakeReducer,
  icecream: IceCreamReducer,
  user: reducer,
});
export default RootReducers;
