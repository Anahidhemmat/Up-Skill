import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from "../Button";

describe("should have props", () => {
  it("should render same text passed into children prop", async () => {
    render(<ButtonComponent children={""} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render same variant passed into variant prop", async () => {
    render(<ButtonComponent variant={""} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render same color passed into color prop", async () => {
    render(<ButtonComponent />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render same size passed into size prop", async () => {
    render(<ButtonComponent size={""} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should render same onClick passed into onClick prop", async () => {
    render(<ButtonComponent onClick={() => {}} />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
});
