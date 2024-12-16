import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Coba from "./pages/Coba/Coba";
import Home from "./pages/Home/Home";

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/coba">
            <Coba />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
