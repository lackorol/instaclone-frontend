import { useReactiveVar } from "@apollo/client";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkModeVar, isLoggedInVar } from "./screens/apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
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
    </ThemeProvider>
  );
}

export default App;
