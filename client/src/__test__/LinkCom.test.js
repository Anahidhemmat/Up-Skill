import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LinkComponent from "../components/Link/LinkCom";

it("should render link component", async () => {
  render(<LinkComponent title="link" />);
  const linkElement = screen.getByTitle("link");
  expect(linkElement).toBeInTheDocument();
});
