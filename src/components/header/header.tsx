import NavItem from '../nav-item/NavItem';
import styles from './header.module.scss';

const Header = () => {
  const routes: { [key: string]: string } = {
    '/': 'Home',
    '/about': 'About',
    '/form': 'Form',
  };

  const keys = Object.keys(routes);

  const navItems = keys.map((key) => <NavItem key={key} route={key} pageName={routes[key]} />);

  const path = location.pathname;

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1>{routes[path]}</h1>
        <nav>
          <ul className={styles.ul}>{navItems}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
