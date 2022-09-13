import React, { useState } from "react";
import styled from "styled-components";

interface ItemsProps {
  todo: { id: number; text: string }[];
  todoEdit: boolean;
  onDelTodo: (id: number) => void;
  onEditTodo: (id: number, text: string) => void;
}

const TodoList: React.FC<ItemsProps> = ({
  //props로 받을 데이터의 타입을 명시해줌
  todo,
  todoEdit,
  onDelTodo,
  onEditTodo,
}) => {
  const [editText, setEditText] = useState<string>("");
  const [editId, setEditId] = useState<number>();

  const onEditText = (e: any) => {
    setEditText(e.target.value);
  };

  const onEditBtn = (id: number, text: string) => {
    setEditId(id);
    setEditText(text);
    onEditTodo(id, editText);
  };

  const Ul = styled.ul`
    padding: 0;
  `;

  const Li = styled.li`
    list-style: none;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 20px;
  `;

  const Button = styled.button`
    width: 50px;
    height: 30px;
    background-color: rgb(90, 90, 90);
    border: 1px solid bladk;
    cursor: pointer;
    color: white;
    margin-left: 10px;

    &:hover {
      border: 2px solid red;
    }
  `;

  return (
    <>
      <Ul>
        {todo.map((item) => (
          <Li key={item.id}>
            {todoEdit && editId === item.id ? (
              <input type="text" value={editText} onChange={onEditText}></input>
            ) : (
              <>{item.text}</>
            )}
            <div>
              <Button
                type="button"
                onClick={onEditBtn.bind(null, item.id, item.text)}
              >
                {todoEdit && editId === item.id ? "완료" : "수정"}
              </Button>
              <Button type="button" onClick={onDelTodo.bind(null, item.id)}>
                삭제
              </Button>
            </div>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default TodoList;
