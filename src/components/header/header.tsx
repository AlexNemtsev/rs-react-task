import NavItem from '../nav-item/nav-item';
import styles from './header.module.scss';

function Header() {
  const routes: Array<[string, string]> = [
    ['/', 'Home'],
    ['/about', 'About'],
  ];

  const navItems = routes.map((route) => (
    <NavItem key={route[0]} route={route[0]} pageName={route[1]} />
  ));

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.ul}>{navItems}</ul>
      </nav>
    </header>
  );
}

export default Header;
