/* eslint-disable */
/* NOTE: THIS IS AN AUTO-GENERATED FILE. DO NOT MODIFY IT DIRECTLY. */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateAccountInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  role: UserRole;
};

export type CreateAccountOutput = {
  __typename?: 'CreateAccountOutput';
  error: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: CreateAccountOutput;
  login: LoginOutput;
};


export type MutationCreateAccountArgs = {
  input: CreateAccountInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename?: 'Query';
  hi: Scalars['Boolean'];
};

export enum UserRole {
  Client = 'Client',
  Delivery = 'Delivery',
  Owner = 'Owner'
}

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, error: string | null, token: string } };

export const namedOperations = {
  Mutation: {
    login: 'login'
  }
}