import { Provider } from "react-redux";
import Navbar from "@/components/organisms/Navbar/Navbar";
import Layout from "@/components/templates/Layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Layout>
              <>
                <Navbar />
              </>
            </Layout>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
