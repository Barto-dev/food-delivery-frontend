import React from 'react';

import { Link } from 'react-router-dom';

const Error404 = () => {

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="font-semibold text-2xl mb-3">Page not found</h1>
      <p className="font-medium text-base mb-3">The page you're looking for does not exist or has moved</p>
      <Link className="hover:underline text-lime-600" to="/">Go back to home</Link>
    </div>
  );
};

export default Error404;
