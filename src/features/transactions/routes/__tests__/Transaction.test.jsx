import { render, screen } from "@/test-utils.jsx";
import { describe, it, vi } from "vitest";
import Transaction from "../Transaction";

vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")), // use actual for all non-hook parts
  useParams: () => ({
    transactionId: "6390fa3cc50233ef043b61e1",
  }),
  useRouteMatch: () => ({ url: "/transactions/6390fa3cc50233ef043b61e1" }),
}));

const mockedNavigator = vi.fn();
vi.mock("react-router-dom", async () => ({
  ...(await vi.importActual("react-router-dom")),
  useNavigate: () => mockedNavigator,
}));

describe("Transaction screen", () => {
  it("renders loader properly", () => {
    render(<Transaction />);

    const loadingText = screen.getByText("Loading...");

    expect(loadingText).toBeInTheDocument();
  });

  it("loads transaction details", async () => {
    render(<Transaction />);

    const amount = await screen.findByText("$5.40");
    const merchant = await screen.findByText("Uber");
    const date = await screen.findByText("2022-12-01T00:00:00.000Z");
    const category = await screen.findByText("Travel");
    const pending = await screen.findByText("Transaction is pending");

    expect(amount).toBeInTheDocument();
    expect(merchant).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(category).toBeInTheDocument();
    expect(pending).toBeInTheDocument();
  });
});
