import React from 'react';

import { useForm } from 'react-hook-form';

import nuberLogo from '../../assets/logo.svg';
import FormError from '../../components/FormError/FormError';
import {
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_MIN_LENGTH,
} from '../../config/authErrors';
import { LoginMutation, useLoginMutation } from '../../graphql/mutations/login.generated';
import { ILoginForm } from './Login.props';

const Login = () => {
  const {
    register, getValues, formState, handleSubmit,
  } = useForm<ILoginForm>();
  const onCompleted = (data: LoginMutation) => {
    const { login: { ok, token } } = data;
    if (ok) {
      console.log(token);
    }
  };

  const [loginMutation, { data: loginMutationResult, loading }] = useLoginMutation({
    onCompleted,
  });

  const onLoginSubmit = async () => {
    const { email, password } = getValues();
    await loginMutation({
      variables: {
        input: {
          email, password,
        },
      },
    });
  };

  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <div className="w-full max-w-screen-sm flex flex-col items-center px-5">
        <img src={nuberLogo} alt="Nuber logo" className="w-52 mb-10" />
        <h4 className="self-start text-3xl mb-5 font-medium">Welcome back</h4>
        <form noValidate className="grid gap-5 w-full" onSubmit={handleSubmit(onLoginSubmit)}>
          <div className="w-full flex flex-col">
            <input
              placeholder="Email"
              type="email"
              className="input"
              required
              {...register('email', { required: EMAIL_REQUIRED })}
            />
            {formState.errors.email?.message && <FormError errorMessage={formState.errors.email.message} />}
          </div>
          <div className="w-full flex flex-col">
            <input
              placeholder="Password"
              type="password"
              className="input"
              required
              {...register('password', {
                required: PASSWORD_REQUIRED,
                minLength: { value: 6, message: PASSWORD_MIN_LENGTH },
              })}
            />
            {formState.errors.password?.message && <FormError errorMessage={formState.errors.password.message} />}
          </div>
          <button
            disabled={loading}
            className="font-medium text-white p-3 text-lg bg-green-500 hover:bg-green-600 transition-colors"
          >{loading ? 'Loading...' : 'Log in'}
          </button>
          {loginMutationResult?.login?.error && <FormError errorMessage={loginMutationResult.login.error} />}
        </form>
      </div>
    </div>
  );
};

export default Login;
