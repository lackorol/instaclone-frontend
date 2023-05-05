import { ApolloProvider, useReactiveVar } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { client, darkModeVar, isLoggedInVar } from './screens/apollo';
import Home from './screens/Home';
import Login from './screens/Login';
import { darkTheme, GlobalStyles, lightTheme } from './styles';
import routes from './routes';
import SignUp from './screens/SignUp';
import NotFound from './screens/NotFound';
import Layout from './components/Layout';

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path={routes.home} exact>
              {isLoggedIn ? (
                <Layout>
                  <Home />
                </Layout>
              ) : (
                <Login />
              )}
            </Route>
            {!isLoggedIn ? (
              <Route path={routes.signUp}>
                <SignUp />
              </Route>
            ) : null}
            <Route path="/nomad-coders">
              <h1>Potato</h1>
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
