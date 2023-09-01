import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const DARK_MODE = 'DARK_MODE';
const TOKEN = 'token';
export const isLoggedInVar = makeVar(localStorage.getItem(TOKEN));

export const logUserIn = (token) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};

export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  isLoggedInVar(false);
};
export const darkModeVar = makeVar(Boolean(localStorage.getItem(DARK_MODE)));

export const enableDarkMode = () => {
  localStorage.setItem(DARK_MODE, 'enabled');
  darkModeVar(true);
};

export const disableDarkMode = () => {
  localStorage.removeItem(DARK_MODE);
  darkModeVar(false);
};

const httpLink = createHttpLink({
  uri: 'http://localhost:3005/graphql' //'https://instaclone-vzo6.onrender.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN)
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
