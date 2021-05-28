import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders learn react link", () => {
  const handleClickFunction = jest.fn();
  render(<App handleClick={handleClickFunction} />);
  const button = screen.getByRole("button");
  userEvent.click(button);
  userEvent.click(button);
  expect(handleClickFunction).toHaveBeenCalledTimes(2);
});
