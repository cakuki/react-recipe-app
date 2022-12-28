import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders a recipe", () => {
  render(<App />);
  const elm = screen.getByText(/Lasagna/i);
  expect(elm).toBeInTheDocument();
});
