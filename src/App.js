import { ApolloProvider, useReactiveVar } from "@apollo/client";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { client, darkModeVar, isLoggedInVar } from "./screens/apollo";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    //   <GlobalStyles />
    <ApolloProvider client={client}>
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
    </ApolloProvider>
    // </ThemeProvider>

  );
}

export default App;
