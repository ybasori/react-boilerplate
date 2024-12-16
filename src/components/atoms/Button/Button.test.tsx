import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Atoms/Button", () => {
  test("renders the button with the correct label", () => {
    render(
      <Button onClick={() => null} color="blue">
        Click
      </Button>
    );

    // Assert that the button is in the document and has the correct text
    const buttonElement = screen.getByText("Click");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick handler when the button is clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} color="blue">
        Click
      </Button>
    );

    const buttonElement = screen.getByText("Click");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
