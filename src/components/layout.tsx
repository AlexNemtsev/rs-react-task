import Header from './header/header';
import withRouter from './with-router';
import { Outlet } from 'react-router-dom';

function Layout() {
  const HeaderRouter = withRouter(Header);
  return (
    <>
      <HeaderRouter />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
