import React from 'react';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { useUserQuery } from '../../apolloHooks';
import nuberLogo from '../../assets/logo.svg';

const Header = () => {
  const { data: userData } = useUserQuery();
  return (
    <>
      {!userData?.me?.verified && (
        <div className="bg-red-500 p-3 text-center text-xs text-white">
          <span>Please verify your email</span>
        </div>
      )}
      <header className="py-4">
        <div className="w-full px-5 xl:px-0 max-w-screen-xl mx-auto flex justify-between items-center">
          <img src={nuberLogo} alt="Nuber logo" className="w-24" />
          <span className="text-xs">
            <Link to="/my-profile">
              <FontAwesomeIcon icon={faUser} className="text-xl" />
            </Link>
            {userData?.me.email}
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;
