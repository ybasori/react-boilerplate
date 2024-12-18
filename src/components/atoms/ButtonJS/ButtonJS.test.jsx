import { render, screen, fireEvent } from "@testing-library/react";
import ButtonJS from "./ButtonJS";
import { sampleData } from "./Button.constant";

describe("Atoms/ButtonJS", () => {
  test("renders the button with the correct label", () => {
    render(
      <ButtonJS onClick={() => null} color="blue">
        Click
      </ButtonJS>
    );

    // Assert that the button is in the document and has the correct text
    const buttonElement = screen.getByText(`${sampleData} Click`);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls the onClick handler when the button is clicked", () => {
    const handleClick = jest.fn();
    render(
      <ButtonJS onClick={handleClick} color="blue">
        Click
      </ButtonJS>
    );

    const buttonElement = screen.getByText(`${sampleData} Click`);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("Snapshot", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ButtonJS onClick={handleClick} color="blue">
        Click
      </ButtonJS>
    );

    expect(container).toMatchSnapshot();
  });
});
