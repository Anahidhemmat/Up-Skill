import React from "react";
import { render, screen } from "@testing-library/react";
import NavbarComponent from "../components/Navbar/Navbar";

it("should render banner", () => {
  render(<NavbarComponent />);
  const navElement = screen.getByRole("banner");
  expect(navElement).toBeInTheDocument();
});

describe("should render props", () => {
  it("should render same color passed into color prop", async () => {
    render(<NavbarComponent />);
    const navElement = screen.getByRole("banner");
    expect(navElement).toBeInTheDocument();
  });

  it("should render same logo passed into logo prop", async () => {
    render(<NavbarComponent logo={""} />);
    const navElement = screen.getByRole("banner");
    expect(navElement).toBeInTheDocument();
  });
});
