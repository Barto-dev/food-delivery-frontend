import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { isLoggedInVar } from '../apollo';
import { useUserQuery } from '../apolloHooks';
import Header from '../components/Header/Header';
import ClientRoutes from '../pages/client';
import Restaurants from '../pages/client/Restaurants/Restaurants';
import ConfirmEmail from '../pages/user/ConfirmEmail/ConfirmEmail';

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

  if (userData.me.role === 'Delivery') {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Restaurants />} />
          <Route path="/confirm" element={<ConfirmEmail />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* {userData.me.role === 'Client' && ClientRoutes} */}
        {/* {userData.me.role === 'Delivery' && <ClientRoutes />} */}
        {/* {userData.me.role === 'Owner' && <ClientRoutes />} */}
      </Routes>
    </BrowserRouter>
  );
};

export default LoggedInRouter;
