import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

const DARK_MODE = 'DARK_MODE';
export const isLoggedInVar = makeVar(false);

export const logUserIn = () => {
  isLoggedInVar(true);
};

export const logUserOut = () => {
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

export const client = new ApolloClient({
  uri: 'https://instaclone-vzo6.onrender.com/graphql',
  cache: new InMemoryCache()
});
