import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CreateAccount from '../pages/CreateAccount/CreateAccount';
import Login from '../pages/Login/Login';

function LoggedOutRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default LoggedOutRouter;
