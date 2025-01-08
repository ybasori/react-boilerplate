import { fireEvent, render, screen } from "@testing-library/react";
import NavbarMenu from "./NavbarMenu";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Molecules/NavbarMenu", () => {
  test("renders the NavbarMenu with the correct option title", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavbarMenu
          menu={[
            {
              name: "menu",
            },
            {
              name: "menu two",
            },
          ]}
        />
      </Router>
    );

    // Assert that the button is in the document and has the correct text
    const buttonElement = screen.getByText("menu");
    expect(buttonElement).toBeInTheDocument();
    const buttonElementTwo = screen.getByText("menu two");
    expect(buttonElementTwo).toBeInTheDocument();
  });

  test("calls the onClick handler when the menu is clicked", () => {
    const history = createMemoryHistory();

    const handleClick = jest.fn();
    render(
      <Router history={history}>
        <NavbarMenu
          menu={[
            {
              name: "menu",
              onClick: handleClick,
            },
            {
              name: "menu two",
              to: "/test",
            },
          ]}
        />
      </Router>
    );

    const buttonElement = screen.getByText("menu");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);

    const buttonElementTwo = screen.getByText(`menu two`);
    fireEvent.click(buttonElementTwo);
    expect(history.location.pathname).toBe("/test");
  });

  test("Snapshot", () => {
    const history = createMemoryHistory();

    const handleClick = jest.fn();
    const { container } = render(
      <Router history={history}>
        <NavbarMenu
          menu={[
            {
              name: "menu",
              onClick: handleClick,
            },
            {
              name: "menu two",
              to: "/test",
            },
          ]}
        />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
