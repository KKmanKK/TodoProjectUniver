import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { describe, test, expect } from "vitest";
describe("Home page", () => {
  test("Home renders", () => {
    render(<Home />);
    expect(screen.getByText(/to do/i)).toBeInTheDocument();
  });
});
