import { Switch, Route } from "react-router-dom";
import PrivateRoute from "@/components/templates/PrivateRoute/PrivateRoute";
import { routes } from "@/App.constant";
import { IProps } from "./Layout.type";

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      {children}
      <Switch>
        {routes
          .filter((item) => !!item.private)
          .map(({ Component, ...item }, key) => (
            <PrivateRoute key={key} path={item.path}>
              <Component />
            </PrivateRoute>
          ))}
        {routes
          .filter((item) => !item.private)
          .map(({ Component, ...item }, key) => (
            <Route key={key} path={item.path}>
              <Component />
            </Route>
          ))}
      </Switch>
    </>
  );
};

export default Layout;
