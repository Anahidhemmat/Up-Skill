import React from "react";
import { render, screen } from "@testing-library/react";
import ListItemComponent from "../ListItem";

it("should render list component", async () => {
  render(<ListItemComponent />);
  const listItem = screen.getByRole("listitem");
  expect(listItem).toBeInTheDocument();
});
