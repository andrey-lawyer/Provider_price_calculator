import users from './data/users';
import { ListUsers } from 'components/ListUsers/ListUsers';
import { GlobalStyle } from 'styles/GlobalStyle';

export const App = () => {
  return (
    <>
      <ListUsers users={users} />
      <GlobalStyle />
    </>
  );
};
