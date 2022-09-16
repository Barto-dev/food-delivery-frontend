import { gql, useQuery, useReactiveVar } from '@apollo/client';
import LoggedOutRouter from './routers/LoggedOutRouter';
import LoggedInRouter from './routers/LoggedInRouter';
import { isLoggedInVar } from './apollo';

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  if (isLoggedIn) {
    return <LoggedInRouter />
  }
  return (
    <LoggedOutRouter />
  );
}

export default App;
