import React, { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useVerifyEmailMutation } from '../../../apolloHooks';
import { namedOperations } from '../../../generated/types';

const ConfirmEmail = () => {
  const [verifyEmailMutation] = useVerifyEmailMutation({
    refetchQueries: [namedOperations.Query.user],
  });
  const [searchParams] = useSearchParams();

  const verifyEmail = async () => {
    const verificationCode = searchParams.get('code');
    if (!verificationCode) {
      return;
    }
    try {
      await verifyEmailMutation({
        variables: { input: { code: verificationCode } },
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    verifyEmail();
  }, []);

  return (
    <div className="mt-52 flex flex-col items-center">
      <h1 className="text-lg mb-1 font-medium">Confirming email...</h1>
      <p className="text-gray-700 text-sm">Please wait, don't close this page</p>
    </div>
  );
};

export default ConfirmEmail;
