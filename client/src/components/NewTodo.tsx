import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import useAxios from "../hooks/useAxios";

interface Props {
  add: (url: string, text: string) => void;
}

const NewTodo: React.FC<Props> = ({ add }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  //ref가 들어갈 태그의 타입을 선언
  //랜더링이 되고나서 연결이 되기때문에 초기값은 null

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current!.value.length !== 0) {
      add("/api/todo/create", inputRef.current!.value);
      inputRef.current!.value = "";
    }
  };

  return (
    <>
      <form onSubmit={addTodoHandler}>
        <Div>
          <Label htmlFor="todo-text">Todo-Text</Label>
          <Input type="text" id="todo-text" ref={inputRef} />
        </Div>
        <Button type="submit">ADD TODO</Button>
      </form>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border: 2px solid black;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: rgb(90, 90, 90);
  border: 1px solid bladk;
  cursor: pointer;
  color: white;

  &:hover {
    border: 2px solid red;
  }
`;

export default React.memo(NewTodo);
