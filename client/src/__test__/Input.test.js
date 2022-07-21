import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TextFieldComponent from "../components/Input/Input";

describe("should have props", () => {
  it("should render textbox", async () => {
    render(<TextFieldComponent onChange={() => {}} />);
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render same label passed into label prop", () => {
    render(<TextFieldComponent label={""} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render same variant passed into variant prop", () => {
    render(<TextFieldComponent />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render same size passed into size prop", () => {
    render(<TextFieldComponent size={""} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render same type passed into type prop", () => {
    render(<TextFieldComponent type={""} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render same placeholder passed into placeholder prop", () => {
    render(<TextFieldComponent placeholder={""} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });
});
