import React, { useRef } from "react";
import "../App.css";

interface Props {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = ({ onAddTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  //ref가 들어갈 태그의 타입을 선언
  //랜더링이 되고나서 연결이 되기때문에 초기값은 null

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current!.value.length !== 0) {
      onAddTodo(inputRef.current!.value);
      inputRef.current!.value = "";
    }
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <div id="todo-input">
          <label htmlFor="todo-text">Todo-Text</label>
          <input type="text" id="todo-text" ref={inputRef} />
        </div>
        <button id="todo-add-btn" type="submit">
          ADD TODO
        </button>
      </form>
    </>
  );
};

export default NewTodo;
