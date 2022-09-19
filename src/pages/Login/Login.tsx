import React from 'react';

import { gql, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';

import FormError from '../../components/FormError/FormError';
import {
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_MIN_LENGTH,
} from '../../config/authErrors';
import { ILoginForm } from './Login.props';

const LOGIN_MUTATION = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(input: {email: $email, password: $password}) {
      ok
      error
      token
    }
  }
`;

const Login = () => {
  const {
    register, getValues, formState, handleSubmit,
  } = useForm<ILoginForm>();
  const [loginMutation, { data, error, loading }] = useMutation(LOGIN_MUTATION);

  const onLoginSubmit = () => {
    const { email, password } = getValues();
    loginMutation({
      variables: {
        input: {
          email, password,
        },
      },
    });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
        <h1 className="text-2xl text-gray-800 pb-5">Log in</h1>
        <form noValidate className="grid gap-5 px-5" onSubmit={handleSubmit(onLoginSubmit)}>
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
          <button className="button">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
