import React from 'react';

import nuberLogo from '../../assets/logo.svg';

const Header = () => {

  return (
    <header className="py-4">
      <div className="w-full max-w-screen-xl mx-auto">
        <img src={nuberLogo} alt="Nuber logo" className="w-52 mb-10" />
        Header
      </div>
    </header>
  );
};

export default Header;
