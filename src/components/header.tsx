import NavItem from './nav-item/nav-item';

function Header() {
  const routes: Array<[string, string]> = [
    ['/', 'Home'],
    ['/about', 'About'],
  ];

  const navItems = routes.map((route) => (
    <NavItem key={route[0]} route={route[0]} pageName={route[1]} />
  ));

  return (
    <header>
      <nav>
        <ul>{navItems}</ul>
      </nav>
    </header>
  );
}

export default Header;
