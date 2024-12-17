import { render, screen, fireEvent } from "@testing-library/react";
import NavbarButton from "./NavbarButton";

describe("Atoms/NavbarButton", () => {
  test("renders the button with the correct label", () => {
    render(<NavbarButton onClick={() => null} name="Click" />);

    // Assert that the button is in the document and has the correct text
    const buttonElement = screen.getByText("Click");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick handler when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<NavbarButton onClick={handleClick} name="Click" />);

    const buttonElement = screen.getByText("Click");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Snapshot", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <NavbarButton onClick={handleClick} name="Click" />
    );

    expect(container).toMatchSnapshot();
  });
});
