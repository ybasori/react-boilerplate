import { Router } from "react-router-dom";
import { IProps } from "./TestingProvider.type";
import Layout from "@/components/templates/Layout/Layout";

const TestingProvider: React.FC<IProps> = ({ children, history }) => {
  return (
    <>
      <Router history={history}>
        <Layout>{children}</Layout>
      </Router>
    </>
  );
};

export default TestingProvider;
