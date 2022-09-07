import React from "react";
import { render, screen } from "@testing-library/react";
import NavItem from "../NavItem";

it("should render nav item", async () => {
  render(<NavItem title="navItem" />);
  const navItemElement = screen.getByTitle("navItem");
  expect(navItemElement).toBeInTheDocument();
});

describe("should render props", () => {
  it("should render same href passed into href prop", async () => {
    render(<NavItem href={""} title="navItem" />);
    const navItemElement = screen.getByTitle("navItem");
    expect(navItemElement).toBeInTheDocument();
  });

  it("should render same children passed into children prop", async () => {
    render(<NavItem title="navItem" children={""} />);
    const navItemElement = screen.getByTitle("navItem");
    expect(navItemElement).toBeInTheDocument();
  });

  it("should render same icon passed into icon prop", async () => {
    render(<NavItem title="navItem" icon={""} />);
    const navItemElement = screen.getByTitle("navItem");
    expect(navItemElement).toBeInTheDocument();
  });
});
