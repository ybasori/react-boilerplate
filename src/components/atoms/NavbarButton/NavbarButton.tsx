import { IProps } from "./NavbarButton.type";

const NavbarButton: React.FC<IProps> = ({ onClick, name }) => {
  return (
    <>
      <li>
        <span onClick={onClick}>{name}</span>
      </li>
    </>
  );
};

export default NavbarButton;
