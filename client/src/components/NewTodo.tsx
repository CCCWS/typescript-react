import React, { useRef } from "react";
import styled from "styled-components";

import useModal from "../hooks/useModal";
import Modal from "./UI/Modal";

interface Props {
  themeMode: string;
  add: (url: string, text: string) => void;
}

const NewTodo: React.FC<Props> = ({ themeMode, add }: Props) => {
  const { openModal, contents, setOpenModal, setContents } = useModal();

  const inputRef = useRef<HTMLInputElement>(null);

  //ref가 들어갈 태그의 타입을 선언
  //랜더링이 되고나서 연결이 되기때문에 초기값은 null

  const addTodoHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      inputRef.current!.value.length > 0 &&
      inputRef.current!.value.length <= 10
    ) {
      add("/api/todo/create", inputRef.current!.value);
      inputRef.current!.value = "";
    } else {
      if (inputRef.current!.value.length === 0) {
        setContents({
          title: "Todo 입력 에러",
          message: "아무것도 입력하지 않았습니다.",
        });
        setOpenModal(true);
      }

      if (inputRef.current!.value.length > 10) {
        setContents({
          title: "Todo 입력 에러",
          message: "글자수가 너무 많습니다.",
        });
        setOpenModal(true);
      }
    }
  };

  return (
    <>
      <Modal
        title={contents.title}
        message={contents.message}
        modalOpen={openModal}
        setModalOpen={setOpenModal}
      />
      <form onSubmit={addTodoHandler}>
        <Div>
          <Label htmlFor="todo-text" mode={themeMode}>
            Todo-List
          </Label>
          <div>
            <Input type="text" id="todo-text" ref={inputRef} mode={themeMode} />
            <Button type="submit" mode={themeMode}>
              추가
            </Button>
          </div>
        </Div>
      </form>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    margin: auto;
    display: flex;
    flex-direction: row;
  }
`;

const Label = styled.label<{ mode: string }>`
  font-weight: 600;
  margin: auto;
  margin-bottom: 10px;
  margin-top: 10px;
  color: ${(props) => (props.mode === "light" ? "black" : "white")};
`;

const Input = styled.input<{ mode: string }>`
  width: 200px;
  height: 30px;
  border: 2px solid ${(props) => (props.mode === "light" ? "black" : "white")};
`;

const Button = styled.button<{ mode: string }>`
  width: 70px;
  height: 30px;
  background-color: rgb(90, 90, 90);
  border: 1px solid ${(props) => (props.mode === "light" ? "black" : "white")};
  cursor: pointer;
  color: white;

  &:hover {
    background-color: rgba(90, 90, 90, 0.5);
  }
`;

export default React.memo(NewTodo);
