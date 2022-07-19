import React from "react";
import { render, screen } from "@testing-library/react";
import ListComponent from "../List";

it("should render list component", async () => {
  render(<ListComponent />);
  const list = screen;
});
