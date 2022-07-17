import React from "react";
import { render, screen } from "@testing-library/react";
import TextFieldComponent from "../Input";

it("should render textbox", () => {
  render(<TextFieldComponent />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

it("should render same label passed into label prop", () => {
  render(<TextFieldComponent />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

it("should render same variant passed into variant prop", () => {
  render(<TextFieldComponent />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

it("should render same size passed into size prop", () => {
  render(<TextFieldComponent />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

it("should render same type passed into type prop", () => {
  render(<TextFieldComponent />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});

it("should render same placeholder passed into placeholder prop", () => {
  render(<TextFieldComponent />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toBeInTheDocument();
});
