import React from 'react';

import { gql, useQuery, useReactiveVar } from '@apollo/client';

import { isLoggedInVar } from './apollo';
import LoggedInRouter from './routers/LoggedInRouter';
import LoggedOutRouter from './routers/LoggedOutRouter';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  if (isLoggedIn) {
    return <LoggedInRouter />;
  }
  return (
    <LoggedOutRouter />
  );
}

export default App;
