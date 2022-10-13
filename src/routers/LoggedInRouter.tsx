import React from 'react';

import { BrowserRouter, Routes } from 'react-router-dom';

import { isLoggedInVar } from '../apollo';
import { useUserQuery } from '../apolloHooks';
import ClientRoutes from '../pages/client';
import Header from '../components/Header/Header';

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
    <BrowserRouter>
      <Header />
      <Routes>
        {userData.me.role === 'Client' && <ClientRoutes />}
      </Routes>
    </BrowserRouter>
  );
};

export default LoggedInRouter;
