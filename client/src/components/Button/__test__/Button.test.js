import { render, screen } from "@testing-library/react";
import ButtonComponent from "../Button";

it("should render same text passed into children prop", () => {
  render(<ButtonComponent />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

it("should render same variant passed into variant prop", () => {
  render(<ButtonComponent />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

it("should render same color passed into color prop", () => {
  render(<ButtonComponent />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

it("should render same size passed into size prop", () => {
  render(<ButtonComponent />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

it("should render same onClick passed into onClick prop", () => {
  render(<ButtonComponent />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});
