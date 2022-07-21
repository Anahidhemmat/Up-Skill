import React from "react";
import { render, screen } from "@testing-library/react";
import CardComponent from "../components/Card/Card";

describe("should render component", () => {
  it("should render component", async () => {
    render(<CardComponent />);
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });
});

describe("should render props", () => {
  it("should render props", async () => {
    render(
      <CardComponent
        title={""}
        cardBody={""}
        alt={""}
        image={""}
        height={""}
        variant={""}
        btn1Label={""}
        btn2Label={""}
      />
    );
    const cardElement = screen.getByTestId("card");
    expect(cardElement).toBeInTheDocument();
  });
});
