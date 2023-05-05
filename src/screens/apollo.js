import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);

export const logUserIn = () => {
  isLoggedInVar(true);
};

export const logUserOut = () => {
  isLoggedInVar(false);
};
export const darkModeVar = makeVar(false);

export const client = new ApolloClient({
  uri: 'https://instaclone-vzo6.onrender.com/graphql',
  cache: new InMemoryCache()
});
