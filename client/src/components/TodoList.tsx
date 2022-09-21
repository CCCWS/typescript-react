import React, { useState } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

import styled from "styled-components";

interface ItemsProps {
  themeMode: string;
  loading: boolean;
  todo: { id: number; text: string }[];
  todoEdit: boolean;
  del: (url: string, id: number) => void;
  edit: (url: string, id: number, editText: string, nowText: string) => void;
}

const TodoList: React.FC<ItemsProps> = ({
  //props로 받을 데이터의 타입을 명시해줌
  themeMode,
  loading,
  todo,
  todoEdit,
  del,
  edit,
}) => {
  const [editText, setEditText] = useState<string>("");
  const [editId, setEditId] = useState<number>();
  const [nowText, setNowText] = useState<string>("");

  const onEditText = (e: any) => {
    setEditText(e.target.value);
  };

  const onEditBtn = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
    edit("/api/todo", id, editText, nowText);
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <TransitionGroup component={Ul}>
            {todo.map((item) => (
              <CSSTransition key={item.id} timeout={500} classNames={"fade"}>
                <Li mode={themeMode}>
                  {todoEdit && editId === item.id ? (
                    <input type="text" value={editText} onChange={onEditText} />
                  ) : (
                    <>{item.text}</>
                  )}

                  <div>
                    <Button
                      type="button"
                      onClick={() => {
                        setNowText(item.text);
                        onEditBtn(item.id, item.text);
                      }}
                    >
                      {todoEdit && editId === item.id ? "완료" : "수정"}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => del("/api/todo", item.id)}
                    >
                      삭제
                    </Button>
                  </div>
                </Li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </>
      )}
    </>
  );
};

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li<{ mode: string }>`
  list-style: none;
  margin: auto;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.mode === "light" ? "white" : "#8a8a8a"};
  color: ${(props) => (props.mode === "light" ? "black" : "white")};
`;

const Button = styled.button`
  width: 3rem;
  height: 1.5rem;
  background-color: rgb(90, 90, 90);
  border: 1px solid bladk;
  cursor: pointer;
  color: white;
  margin-left: 0.5rem;

  &:hover {
    border: 2px solid red;
  }
`;

export default TodoList;
