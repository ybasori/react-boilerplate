import { Redirect, Route } from "react-router-dom";
import { IProps } from "./PrivateRoute.type";
import { useAuth } from "@/hooks/auth";

const PrivateRoute: React.FC<IProps> = ({ children, ...props }) => {
  const auth = useAuth();
  return (
    <Route
      {...props}
      render={({ location }) =>
        !!auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
