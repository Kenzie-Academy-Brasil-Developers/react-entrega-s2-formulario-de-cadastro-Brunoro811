import { Route, Switch } from "react-router";
import "./App.css";
import Register from "./Pages/Login";

function App() {
  return (
    <Switch>
      <Route exact to="/">
        <Register />
      </Route>
    </Switch>
  );
}

export default App;
