import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { TasksList } from ".";
import { Task } from "../../data/stores/useToDoStore";
const data: Task[] = [
  { id: "1", title: "" },
  { id: "2", title: "" },
  { id: "3", title: "" },
];
describe("List component", () => {
  test("List renders", () => {
    render(<TasksList tasks={data} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  test("List renders without data", () => {
    const data: Task[] = [];

    render(<TasksList tasks={data} />);
    expect(screen.queryByRole("list")).toBeNull();
  });
});
