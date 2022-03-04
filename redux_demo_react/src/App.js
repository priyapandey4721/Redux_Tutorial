import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./Component/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/store";
import HooksCakeContainer from "./Component/HooksCakeContainer";
import IceCreamContainer from "./Component/IceCreamContainer";
import NewCakeConatiner from "./Component/NewCakeConatiner";
import ItemContainer from "./Component/ItemContainer";
import UserContainer from "./Component/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeConatiner />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
