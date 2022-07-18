import React from "react";
import { render, screen } from "@testing-library/react";
import NavbarComponent from "../Navbar";

it("should render banner", () => {
  render(<NavbarComponent />);
  const navElement = screen.getByRole("banner");
  expect(navElement).toBeInTheDocument();
});

it("should render same color passed into color prop", () => {
  render(<NavbarComponent />);
  const navElement = screen.getByRole("banner");
  expect(navElement).toBeInTheDocument();
});

it("should render same logo passed into logo prop", () => {
  render(<NavbarComponent />);
  const navElement = screen.getByRole("banner");
  expect(navElement).toBeInTheDocument();
});
