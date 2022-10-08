import React from 'react';

import { isLoggedInVar } from '../apollo';
import { useUserQuery } from '../apolloHooks';

const LoggedInRouter = () => {
  const { data: userData, loading: userLoading, error: userError } = useUserQuery();

  if (!userData || userLoading || userError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide" role="progressbar">Loading...</span>
      </div>
    );
  }

  const onLogoutClick = () => {
    isLoggedInVar(false);
  };
  return (
    <div>
      <h1>{userData.me.email}</h1>
      <button onClick={onLogoutClick}>Logout</button>
    </div>
  );
};

export default LoggedInRouter;
