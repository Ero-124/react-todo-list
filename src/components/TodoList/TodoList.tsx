import "./TodoList.css";

import React from "react";

import { ITodo } from "../../interfaces";
import articleGIF from "./img/article-not-found-unscreen.gif";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return (
      <>
        <img src={articleGIF} alt="" className="article-gif" />
        <p className="center">While there are no cases!</p>
      </>
    );
  }

  return (
    <>
      <ul>
        {todos.map((todo) => {
          const classes = ["todo"];
          if (todo.completed) {
            classes.push("completed");
          }
          return (
            <li className={classes.join(" ")} key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => onToggle(todo.id)}
                />
                <span>{todo.title}</span>
                <a
                  className="material-icons red-text"
                  onClick={() => onRemove(todo.id)}
                >
                  delete
                </a>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
