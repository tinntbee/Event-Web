import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import AccountDetail from "./features/AccountDetail";
import GameStudio from "./features/GameStudio";
import RegisteredEvent from "./features/AccountDetail/registerEvent";
import Home from "./features/Home";
import EventStudio from "./features/EventStudio";
import EventFeature from "./features/EventFeature";
import MiniGameFeature from "./features/MiniGameFeature";
import LoginFeature from "./features/Login";
import LoginInfoFeature from "./features/logininfo";
import EventListFeature from "./features/eventlist";
import MemberListFeature from "./features/memberlist";
import HostFeature from "./features/HostFeature";
import NavBar from "./components/NavBar";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { snackBarActions } from "./redux/actions/snackBarActions";
import MyEventsFeature from "./features/MyEvents";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const dispatch = useDispatch();
  const snackBar = useSelector((state) => state.snackBar);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(snackBarActions.close());
  };
  return (
    <div className="App">
      <NavBar />
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
          <Route path="/game-studio/:_id" component={GameStudio} exact />
          <Route path="/event-studio/:_id" component={EventStudio} exact />
          <Route path="/login" component={LoginFeature} />
          <Route path="/home" component={Home} />
          <Route path="/event/:_id" component={EventFeature} exact />
          <Route path="/mini-game/:_id" component={MiniGameFeature} exact />
          <Route path="/login" component={LoginFeature} exact />
          <Route path="/logininfo" component={LoginInfoFeature} exact />
          <Route path="/eventlist" component={EventListFeature} exact />
          <Route path="/memberlist" component={MemberListFeature} exact />
          <Route path="/minigamelist" component={MiniGameFeature} exact />
          <Route path="/host" component={HostFeature} exact />
          <Route path="/myevent" component={MyEventsFeature} exact />
        </Switch>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={snackBar.open}
        autoHideDuration={snackBar.autoHideDuration}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackBar.variant}
          sx={{ width: "100%" }}
        >
          {snackBar.message}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default App;
