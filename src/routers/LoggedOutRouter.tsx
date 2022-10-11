import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateAccount from '../pages/CreateAccount/CreateAccount';
import Error404 from '../pages/Error404/Error404';
import Login from '../pages/Login/Login';

function LoggedOutRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default LoggedOutRouter;
