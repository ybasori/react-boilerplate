import { Provider } from "react-redux";
import Layout from "@/components/templates/Layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { routes } from "./App.constant";
import PrivateRoute from "./components/templates/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Layout>
              <Switch>
                {routes.map(({ Component, ...item }, key) =>
                  !!item.private ? (
                    <PrivateRoute key={key} path={item.path}>
                      <Component />
                    </PrivateRoute>
                  ) : (
                    <Route key={key} path={item.path}>
                      <Component />
                    </Route>
                  )
                )}
              </Switch>
            </Layout>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
