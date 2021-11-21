import logo from "./logo.svg";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AccountDetail from "./features/AccountDetail";
import GameStudio from "./features/GameStudio";

function App() {
  return (
    <div className="App">
      <div className="Header"></div>
      <div className="Body">
        <Switch>
          <Redirect from="/" to="/account-detail" exact />
          <Route path="/account-detail" component={AccountDetail} exact />
          <Route path="/game-studio" component={GameStudio} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
