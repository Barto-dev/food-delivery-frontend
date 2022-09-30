import React from 'react';

import cn from 'classnames';

import './Button.css';
import { ButtonProps } from './Button.props';

const Button = ({
  loading,
  disabled,
  children,
  className,
}: ButtonProps) => {

  return (
    <button
      disabled={loading || disabled}
      className={cn('button', className)}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
