import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import Child from "./pages/Child/Child";

const Parent = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      <h4>Nested Route</h4>
      <ul>
        <li>
          <Link to={`${url}/child`}>Child</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/child`}>
          <Child />
        </Route>
      </Switch>
    </>
  );
};

export default Parent;
