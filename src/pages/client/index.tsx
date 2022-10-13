import React from 'react';

import { Route } from 'react-router-dom';

import Restaurants from './Restaurants/Restaurants';

const ClientRoutes = () => {
  return (
    <Route path="/">
      <Restaurants />
    </Route>
  );
};

export default ClientRoutes;
