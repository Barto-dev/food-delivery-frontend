import {
  ApolloClient, createHttpLink, InMemoryCache, makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { LOCAL_STORAGE_TOKEN } from '../constants/token';

const token = localStorage.getItem(LOCAL_STORAGE_TOKEN);

export const isLoggedInVar = makeVar(Boolean(token));
export const authToken = makeVar(token);

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
});

const authLink = setContext((_, { headers }) => {

  const reqHeaders = {
    ...headers,
  };

  if (authToken()) {
    Object.assign(reqHeaders, { 'x-jwt': authToken() });
  }

  return {
    headers: reqHeaders,
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
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
