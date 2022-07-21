import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from "../components/Button/Button";

it("should render button", () => {
  render(<ButtonComponent>Click</ButtonComponent>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

it("should render button text", () => {
  render(<ButtonComponent>Click</ButtonComponent>);
  const buttonElement = screen.getByText(/Click/i);
  expect(buttonElement.textContent).toBe("Click");
});

it("should be disabled", () => {
  render(<ButtonComponent disabled>Click</ButtonComponent>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});

it("should have onClick event", () => {
  const mockHanleClick = jest.fn();
  render(<ButtonComponent onClick={mockHanleClick}>Click</ButtonComponent>);
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(mockHanleClick).toBeCalled();
});

it("should not be disabled", () => {
  render(<ButtonComponent>Click</ButtonComponent>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).not.toBeDisabled();
});

it("should have type attribute", () => {
  render(<ButtonComponent type="button">Click</ButtonComponent>);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveAttribute("type", "button");
});

it("should have props", () => {
  render(
    <ButtonComponen variant="text" color="warning" size="small">
      Click
    </ButtonComponen>
  );
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeTruthy();
});
