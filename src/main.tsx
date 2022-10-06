import React from 'react';

import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { client } from './apollo';
import App from './App';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
