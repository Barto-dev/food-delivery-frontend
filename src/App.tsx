import React from 'react';

import { useReactiveVar } from '@apollo/client';

import { isLoggedInVar } from './apollo';
import LoggedInRouter from './routers/LoggedInRouter';
import LoggedOutRouter from './routers/LoggedOutRouter';

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
