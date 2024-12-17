import { useDispatch } from "react-redux";
import NavbarMenu from "@/components/molecules/NavbarMenu/NavbarMenu";
import { AppDispatch } from "@/redux/store";
import { setAuth } from "@/redux/reducers/auth/auth.slice";
import { useAuth } from "@/hooks/auth";

const Navbar = () => {
  const auth = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <NavbarMenu
        menu={[
          {
            to: "/",
            name: "Home",
          },
          {
            to: "/testing-page",
            name: "Testing Page",
          },
          {
            to: "/parent",
            name: "Parent (Nested Route)",
          },
          ...(!!auth
            ? [
                {
                  name: `Profile`,
                  to: "/profile",
                },
                {
                  name: `Logout (as ${auth.name})`,
                  onClick: () => {
                    dispatch(setAuth(null));
                  },
                },
              ]
            : [
                {
                  to: "/login",
                  name: "Login",
                },
              ]),
        ]}
      />
    </>
  );
};

export default Navbar;
