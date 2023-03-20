import Header from './header/Header';
import WithRouter from './WithRouter';
import { Outlet } from 'react-router-dom';

function Layout() {
  const HeaderRouter = WithRouter(Header);
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
