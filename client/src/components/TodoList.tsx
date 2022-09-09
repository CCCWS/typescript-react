import React, { useState } from "react";
import "../App.css";

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

  return (
    <>
      <ul>
        {todo.map((item) => (
          <li id="todo-list" key={item.id}>
            {todoEdit && editId === item.id ? (
              <input type="text" value={editText} onChange={onEditText}></input>
            ) : (
              <>{item.text}</>
            )}
            <div id="todo-list-btn">
              <button
                type="button"
                onClick={onEditBtn.bind(null, item.id, item.text)}
              >
                {todoEdit && editId === item.id ? "완료" : "수정"}
              </button>
              <button type="button" onClick={onDelTodo.bind(null, item.id)}>
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
