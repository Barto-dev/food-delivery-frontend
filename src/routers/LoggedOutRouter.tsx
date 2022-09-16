import React from 'react';
import { isLoggedInVar } from '../apollo';

const LoggedOutRouter = () => {
  const onLoginClick = () => {
    isLoggedInVar(true);
  }
  return (
    <div>
      <h1>Logged out</h1>
      <button onClick={onLoginClick} className="bg-red-100">Login</button>
    </div>
  );
};

export default LoggedOutRouter;
