import React from "react";
import { render, screen } from "@testing-library/react";
import ListComponent from "../components/List/List";

it("should render list component", async () => {
  render(<ListComponent />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});
