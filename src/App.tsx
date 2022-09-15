import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './styles/apollo';

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1 className="text-3xl font-bold underline">Hello Tailwind</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
