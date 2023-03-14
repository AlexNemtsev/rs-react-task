import { NavLink } from 'react-router-dom';
import styles from './nav-item.module.scss';

interface NavItemProps {
  route: string;
  pageName: string;
}

interface classNameArg {
  isActive: boolean;
  isPending: boolean;
}

const active = `${styles.link} ${styles.active}`;

const setActive: (arg: classNameArg) => string = ({ isActive }: classNameArg) =>
  isActive ? active : styles.link;

function NavItem(props: NavItemProps) {
  return (
    <li className={styles.li}>
      <NavLink to={props.route} className={setActive}>
        {props.pageName}
      </NavLink>
    </li>
  );
}

export default NavItem;
