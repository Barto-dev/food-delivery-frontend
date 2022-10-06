import React from 'react';

import Helmet from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateAccountMutation, UserRole, CreateAccountMutation } from '../../apolloHooks';
import nuberLogo from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import FormError from '../../components/FormError/FormError';
import {
  EMAIL_PATTERN_MESSAGE,
  EMAIL_REQUIRED,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REQUIRED,
} from '../../config/authErrors';
import { EMAIL_PATTERN } from '../../config/emailPattern';
import { ICreateAccountForm } from './CreateAccount.props';

const CreateAccount = () => {
  const navigate = useNavigate();
  const {
    register, getValues, formState, handleSubmit,
  } = useForm<ICreateAccountForm>({
    mode: 'onChange',
    defaultValues: {
      role: UserRole.Client,
    },
  });

  const onCompleted = (data: CreateAccountMutation) => {
    const { createAccount: { ok } } = data;
    if (ok) {
      navigate('/');
    }
  };

  const [createAccountMutation, {
    loading: createAccountLoading,
    data: createAccountResult,
  }] = useCreateAccountMutation({
    onCompleted,
  });

  const onLoginSubmit = async () => {
    const { email, password, role } = getValues();
    await createAccountMutation({
      variables: {
        input: {
          email,
          password,
          role,
        },
      },
    });
  };

  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <Helmet>
        <title>Create account | Nuber eats</title>
      </Helmet>
      <div className="w-full max-w-screen-sm flex flex-col items-center px-5">
        <img src={nuberLogo} alt="Nuber logo" className="w-52 mb-10" />
        <h4 className="self-start text-3xl mb-5 font-medium">Let's get started</h4>
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
          <div className="w-full">
            <select
              {...register('role', { required: true })}
              className="input w-full"
            >
              {Object.keys(UserRole).map((item) => (
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
          </div>
          <Button
            loading={createAccountLoading}
            disabled={!formState.isValid}
          >Create account
          </Button>
          {createAccountResult?.createAccount?.error && <FormError errorMessage={createAccountResult.createAccount.error} />}
        </form>
        <div>
          <p>Already have an account? <Link className="text-lime-600 hover:underline" to="/">Log in now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
