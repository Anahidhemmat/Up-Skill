import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from "../components/Button/Button";

it("should render button", async () => {
  render(<ButtonComponent />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

it("should render button text", async () => {
  render(<ButtonComponent>Click</ButtonComponent>);
  const buttonElement = screen.getByText(/Click/i);
  expect(buttonElement.textContent).toBe("Click");
});

it("should be disabled", async () => {
  render(<ButtonComponent disabled />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeDisabled();
});

it("should have onClick event", async () => {
  const mockHanleClick = jest.fn();
  render(<ButtonComponent onClick={mockHanleClick} />);
  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);
  expect(mockHanleClick).toBeCalled();
});

it("should not be disabled", async () => {
  render(<ButtonComponent />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).not.toBeDisabled();
});

it("should have type attribute", async () => {
  render(<ButtonComponent type="button" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveAttribute("type", "button");
});

it("should have props", async () => {
  render(<ButtonComponent variant="text" color="warning" size="small" />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeTruthy();
});
