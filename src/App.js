import logo from "./logo.svg";
import "./App.css";
import AccountDetail from "./features/AccountDetail";

function App() {
  return (
    <div className="App">
      <div className="Header"></div>
      <div className="Body">
        <AccountDetail />
      </div>
    </div>
  );
}

export default App;
