import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Parent from "./pages/Parent/Parent";
import TestingPage from "./pages/TestingPage/TestingPage";

export const routes = [
  {
    path: "/profile",
    Component: () => <>Hello</>,
    private: true,
  },
  {
    path: "/parent",
    Component: Parent,
    private: false,
  },
  {
    path: "/login",
    Component: Login,
    private: false,
  },
  {
    path: "/testing-page",
    Component: TestingPage,
    private: false,
  },
  {
    path: "/",
    Component: Home,
    private: false,
  },
];
