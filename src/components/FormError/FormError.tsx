import React from 'react';

import { FormErrorProps } from './FormError.props';

const FormError = ({ errorMessage }: FormErrorProps) => {

  return (
    <span className="font-medium text-red-500">{errorMessage}</span>
  );
};

export default FormError;
