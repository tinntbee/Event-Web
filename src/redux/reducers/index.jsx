import { combineReducers } from "redux";
import dialog from "./dialog";
import home from "./home";
import miniGame from "./miniGame";
import snackBar from "./snackBar";
import users from "./users";

const rootReducer = combineReducers({
  users: users,
  miniGame: miniGame,
  home: home,
  snackBar: snackBar,
  dialog: dialog,
});

export default rootReducer;
