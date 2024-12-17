import { Fragment } from "react";
import NavbarLink from "@/components/atoms/NavbarLink/NavbarLink";
import { IProps } from "./NavbarMenu.type";
import NavbarButton from "@/components/atoms/NavbarButton/NavbarButton";

const NavbarMenu: React.FC<IProps> = ({ menu }) => {
  return (
    <>
      <ul>
        {menu.map((item, key) => (
          <Fragment key={key}>
            {!!!item.onClick && !!item.to ? (
              <NavbarLink to={item.to} name={item.name} />
            ) : (
              <NavbarButton
                onClick={item.onClick ?? (() => null)}
                name={item.name}
              />
            )}
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default NavbarMenu;
