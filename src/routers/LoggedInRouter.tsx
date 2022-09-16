import React from 'react';
import { isLoggedInVar } from '../apollo';

const LoggedInRouter = () => {
  const onLogoutClick = () => {
    isLoggedInVar(false);
  }
  return (
    <div>
      <h1>Logged In</h1>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  );
};

export default LoggedInRouter;
