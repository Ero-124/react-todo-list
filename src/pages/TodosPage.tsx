import React, { useCallback, useEffect, useMemo, useState } from "react";

import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";
import { ITodo } from "../interfaces";

const TodosPage: React.FC = () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const savedSelectedTodos = JSON.parse(
    localStorage.getItem("selectedTodos") || "{}"
  );
  const [todos, setTodos] = useState<ITodo[]>(savedTodos);
  const [selectedTodos, setSelectedTodos] = useState<{
    [key: string]: number;
  }>(savedSelectedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = useCallback((title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  }, []);

  const toggleHandler = useCallback(
    (id: number) => {
      const updatedSelectedTodos = { ...selectedTodos };
      if (id in updatedSelectedTodos) {
        delete updatedSelectedTodos[id];
        localStorage.setItem(
          "selectedTodos",
          JSON.stringify(updatedSelectedTodos)
        );
      } else {
        updatedSelectedTodos[id] = id;
        localStorage.setItem(
          "selectedTodos",
          JSON.stringify(updatedSelectedTodos)
        );
      }
      setSelectedTodos(updatedSelectedTodos);

      setTodos((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        })
      );
    },
    [selectedTodos]
  );

  const removeHandler = useCallback((id: number) => {
    const shouldRemove = window.confirm(
      "Вы уверены, что хотите  удалить элемент?"
    );
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  }, []);

  const handleDeleteSelected = useCallback(() => {
    const updatedTodos = todos.filter((todo) => !selectedTodos[todo.id]);
    setTodos(updatedTodos);
    localStorage.setItem("selectedTodos", "{}");
    setSelectedTodos({});
  }, [todos, selectedTodos]);

  const handleDeleteAll = useCallback(() => {
    setTodos([]);
    setSelectedTodos({});
    localStorage.setItem("selectedTodos", "{}");
  }, []);

  const selectedTodosLength = useMemo(() => Object.keys(selectedTodos).length, [selectedTodos]);

  return (
    <>
      <TodoForm
        onAdd={addHandler}
        handleDeleteSelected={handleDeleteSelected}
        handleDeleteAll={handleDeleteAll}
        selectedTodosLength={selectedTodosLength}
        todosLength={todos.length}
      />

      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  );
};

export default TodosPage;
