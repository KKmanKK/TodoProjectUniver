import { describe, test, expect, vi } from "vitest";
import { useToDoStore } from "../../data/stores/useToDoStore";

const todo = { title: "asd" };
describe("Zust func test", () => {
  test("add new todo", () => {
    let store = useToDoStore.getState();
    store.createTask(todo.title);
    store = useToDoStore.getState();
    expect(store.tasks[0].title).toBe(todo.title);
  });
  test("remove todo", () => {
    let store = useToDoStore.getState();
    store.removeTask(store.tasks[0].id);
    store = useToDoStore.getState();
    expect(store.tasks[0]).toBeUndefined();
  });
  test("update todo", () => {
    let store = useToDoStore.getState();
    store.createTask(todo.title);

    store = useToDoStore.getState();
    store.updateTask(store.tasks[0].id, "new");

    store = useToDoStore.getState();
    expect(store.tasks[0].title).toBe("new");
  });
});
