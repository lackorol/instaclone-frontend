import { useReactiveVar } from "@apollo/client";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { isLoggedInVar } from "./screens/apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            {isLoggedIn ? <Home /> : <Login />}
          </Route>
          <Route path="/nomad-coders">
            <h1>Potato</h1>
          </Route>
          <Route>
            {/* <NotFound /> */}
            <Redirect />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
