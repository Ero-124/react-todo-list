import "./TodoForm.css";

import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
  handleDeleteSelected(): void;
  handleDeleteAll(): void;
  selectedTodosLength: number;
  todosLength: number;
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");
  // const ref = useRef<HTMLInputElement>(null);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && title.length > 0) {
      // props.onAdd(ref.current!.value);
      // ref.current!.value = "";
      // console.log(title);
      props.onAdd(title);
      setTitle("");
    }
  };

  const addNewTodo = () => {
    if (title.length > 0) {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        value={title}
        onChange={changeHandler}
        // ref={ref}
        type="text"
        id="title"
        placeholder="Enter todo name..."
        onKeyDown={keyPressHandler}
      />
      <button
        className="btn"
        onClick={addNewTodo}
        disabled={title.trim().length < 1}
      >
        Add todo
      </button>

      <button
        className="btn"
        onClick={props.handleDeleteAll}
        disabled={props.todosLength < 1}
      >
        Delete all
      </button>
      <button
        className="btn"
        disabled={props.selectedTodosLength < 1}
        onClick={props.handleDeleteSelected}
      >
        Delete selected
      </button>
      <label htmlFor="title" className="active">
        Enter todo name
      </label>
    </div>
  );
};

export default TodoForm;
