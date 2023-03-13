import { Link } from 'react-router-dom';

interface NavItemProps {
  route: string;
  pageName: string;
  onClick: (pageName: string) => void;
}

function NavItem(props: NavItemProps) {
  return (
    <li>
      <Link to={props.route} onClick={() => props.onClick(props.pageName)}>
        {props.pageName}
      </Link>
    </li>
  );
}

export default NavItem;
