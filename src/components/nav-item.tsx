import { NavLink } from 'react-router-dom';

interface NavItemProps {
  route: string;
  pageName: string;
  onClick: (pageName: string) => void;
}

function NavItem(props: NavItemProps) {
  return (
    <li>
      <NavLink to={props.route} onClick={() => props.onClick(props.pageName)}>
        {props.pageName}
      </NavLink>
    </li>
  );
}

export default NavItem;
