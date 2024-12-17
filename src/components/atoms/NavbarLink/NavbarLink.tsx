import { Link } from "react-router-dom";
import { IProps } from "./NavbarLink.type";

const NavbarLink: React.FC<IProps> = ({ to, name }) => {
  return (
    <>
      <li>
        <Link to={to}>{name}</Link>
      </li>
    </>
  );
};

export default NavbarLink;
