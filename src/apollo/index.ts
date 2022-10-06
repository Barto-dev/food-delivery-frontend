import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';

import { LOCAL_STORAGE_TOKEN } from '../constants/token';

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

export const isLoggedInVar = makeVar(Boolean(token));
export const authToken = makeVar(token);

export const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read: () => isLoggedInVar(),
          },
          token: {
            read: () => authToken(),
          },
        },
      },
    },
  }),
});
