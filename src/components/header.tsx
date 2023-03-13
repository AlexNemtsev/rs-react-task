import NavItem from './nav-item';

interface HeaderProps {
  page: string;
  onClick: (pageName: string) => void;
}

function Header(props: HeaderProps) {
  const routes: Array<[string, string]> = [
    ['/', 'Home'],
    ['/about', 'About'],
  ];

  const navItems = routes.map((route) => (
    <NavItem key={route[0]} route={route[0]} pageName={route[1]} onClick={props.onClick} />
  ));

  return (
    <header>
      <h1>{props.page}</h1>
      <nav>
        <ul>{navItems}</ul>
      </nav>
    </header>
  );
}

export default Header;
