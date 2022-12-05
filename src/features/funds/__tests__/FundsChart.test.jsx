import { describe, it } from "vitest";
import { screen, render } from "@testing-library/react";
import FundsChart from "../components/FundsChart";

describe("Funds Route", () => {
  it("renders initially", () => {
    render(<FundsChart />);

    const fundsChart = screen.getByRole("heading", {
      name: /funds chart/i,
    });

    expect(fundsChart).toBeInTheDocument();
  });
});
