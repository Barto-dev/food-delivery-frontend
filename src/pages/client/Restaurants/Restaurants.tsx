import React from 'react';

import { Route } from 'react-router-dom';

const Restaurants = () => {

  return (
    <>
      <Route path="/" element={<Restaurants />} />
      <Route path="/" element={<Restaurants />} />
    </>
  );
};

export default Restaurants;
