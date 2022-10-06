import React from 'react';

import Helmet from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { LoginMutation, useLoginMutation } from '../../apolloHooks';
import nuberLogo from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import FormError from '../../components/FormError/FormError';
import {
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_MIN_LENGTH, EMAIL_PATTERN_MESSAGE,
} from '../../config/authErrors';
import { EMAIL_PATTERN } from '../../config/emailPattern';
import { ILoginForm } from './Login.props';
import { isLoggedInVar } from '../../apollo';

const Login = () => {
  const {
    register, getValues, formState, handleSubmit,
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });
  const onCompleted = (data: LoginMutation) => {
    const { login: { ok, token } } = data;
    if (ok) {
      console.log(token);
      isLoggedInVar(true);
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
      <Helmet>
        <title>Login | Nuber eats</title>
      </Helmet>
      <div className="w-full max-w-screen-sm flex flex-col items-center px-5">
        <img src={nuberLogo} alt="Nuber logo" className="w-52 mb-10" />
        <h4 className="self-start text-3xl mb-5 font-medium">Welcome back</h4>
        <form noValidate className="grid gap-5 w-full mb-5" onSubmit={handleSubmit(onLoginSubmit)}>
          <div className="w-full flex flex-col">
            <input
              placeholder="Email"
              type="email"
              className="input"
              required
              {...register('email', {
                required: EMAIL_REQUIRED,
                pattern: {
                  value: EMAIL_PATTERN,
                  message: EMAIL_PATTERN_MESSAGE,
                },
              })}
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
          <Button loading={loading} disabled={!formState.isValid}>Log in</Button>
          {loginMutationResult?.login?.error && <FormError errorMessage={loginMutationResult.login.error} />}
        </form>
        <div>
          <p>New to Nuber? <Link className="text-lime-600 hover:underline" to="/create-account">Create an account</Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
