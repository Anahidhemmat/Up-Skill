import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextFieldComponent from "../components/Input/Input";

it("should render correctly", () => {
  render(<TextFieldComponent />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeTruthy();
});

it("updates onChange", () => {
  const mockOnChange = jest.fn();
  render(<TextFieldComponent onChange={mockOnChange} />);
  const inputElement = screen.getByRole("textbox");
  fireEvent.change(inputElement, { target: { value: "test" } });
  expect(inputElement.value).toBe("test");
});

it("should render type attribute", () => {
  render(<TextFieldComponent type="text" />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveAttribute("type", "text");
});

it("should render placeholder attribute", () => {
  render(<TextFieldComponent placeholder="write your name" />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveAttribute("placeholder", "write your name");
});

it("should render props", () => {
  render(<TextFieldComponent label="name" variant="outlined" size="small" />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeTruthy();
});
