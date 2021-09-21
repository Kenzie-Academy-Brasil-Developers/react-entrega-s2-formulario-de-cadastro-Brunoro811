import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Register />
      </Route>
      <Route path="/Home/:name">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
