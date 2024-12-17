import { fireEvent, render, screen } from "@testing-library/react";
import NavbarLink from "./NavbarLink";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

describe("Atoms/NavbarLink", () => {
  test("renders the button with the correct label", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavbarLink to="/" name="Click" />
      </Router>
    );

    // Assert that the button is in the document and has the correct text
    const buttonElement = screen.getByText("Click");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick handler when the button is clicked", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavbarLink to="/test" name="Click" />
      </Router>
    );

    const buttonElement = screen.getByText("Click");
    fireEvent.click(buttonElement);
    expect(history.location.pathname).toBe("/test");
  });

  test("Snapshot", () => {
    const history = createMemoryHistory();
    const { container } = render(
      <Router history={history}>
        <NavbarLink to="/" name="Click" />
      </Router>
    );

    expect(container).toMatchSnapshot();
  });
});
