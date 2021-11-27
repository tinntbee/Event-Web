import logo from "./logo.svg";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AccountDetail from "./features/AccountDetail";
import GameStudio from "./features/GameStudio";
import LoginFeature from "./features/Login";
import RegisteredEvent from "./features/AccountDetail/registerEvent";
import Home from "./features/Home";
import EventStudio from "./features/EventStudio";

function App() {
  return (
    <div className="App">
      <div className="Header"></div>
      <div className="Body">
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Redirect
            from="/account-detail"
            to="/account-detail/information"
            exact
          />
          <Route
            path="/account-detail/information"
            component={AccountDetail}
            exact
          />
          <Route
            path="/account-detail/registered-event"
            component={RegisteredEvent}
            exact
          />
          <Route path="/game-studio" component={GameStudio} exact />
          <Route path="/event-studio" component={EventStudio} exact />
          <Route path="/login" component={LoginFeature} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
