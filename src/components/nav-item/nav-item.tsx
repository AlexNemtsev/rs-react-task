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

const setActive: (arg: classNameArg) => string = ({ isActive }: classNameArg) =>
  isActive ? styles.active : styles.link;

function NavItem(props: NavItemProps) {
  return (
    <li>
      <NavLink to={props.route} className={setActive}>
        {props.pageName}
      </NavLink>
    </li>
  );
}

export default NavItem;
