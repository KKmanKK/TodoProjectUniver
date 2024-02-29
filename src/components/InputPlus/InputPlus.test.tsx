import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi, vitest } from "vitest";

import { InputPlus } from ".";
const onAdd = vi.fn((_title: string) => {});

vitest.mock("../../data/stores/useToDoStore");

describe("InputPlus component", () => {
  test("Input renders", () => {
    render(<InputPlus onAdd={onAdd} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  test("Input button click and add Task", () => {
    // const gets = vitest.spyOn(useToDoStore.getState);
    render(<InputPlus onAdd={onAdd} />);
    fireEvent.input(screen.getByRole("textbox"), { target: { value: "123" } });
    fireEvent.click(screen.getByRole("button"));
    expect(onAdd).toHaveBeenCalledTimes(1);
    expect(onAdd).toHaveBeenCalledWith("123");
  });
  test("Input enter click", () => {
    render(<InputPlus onAdd={onAdd} />);
    fireEvent.keyDown(screen.getByRole("textbox"), {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    expect(onAdd).toHaveBeenCalled();
  });
});
