import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Parent from "@/pages/Parent/Parent";
import TestingPage from "@/pages/TestingPage/TestingPage";

export const routes = [
  {
    path: "/profile",
    Component: () => <>Hello</>,
    private: true,
    exact: true,
  },
  {
    path: "/parent",
    Component: Parent,
    private: false,
    exact: false, // jika nested route
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
    exact: true,
  },
  {
    path: "/",
    Component: Home,
    private: false,
    exact: true,
  },
];
