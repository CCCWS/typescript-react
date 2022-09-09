import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import "./App.css";

interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  //FC > FunctionComponent
  //JSX를 return
  const test = async () => {
    const res = await axios.post("/api/test/server", { id: 2 });
    console.log(res.data);
  };

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoEdit, setTodoEdit] = useState<boolean>(false);

  const todoAdd = (text: string) => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: new Date().getTime(), text: text },
    ]);
  };

  const onTodoDel = (id: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((item) => item.id !== id)
    );
  };

  const onTodoEdit = (id: number, text: string) => {
    if (todoEdit === true) {
      const temp = [...todoList];

      temp.forEach((temp) => {
        if (temp.id === id) {
          temp.text = text;
        }
      });

      setTodoList(temp);
    }
    setTodoEdit(!todoEdit);
  };

  return (
    <>
      <NewTodo onAddTodo={todoAdd} />
      <TodoList
        todo={todoList}
        todoEdit={todoEdit}
        onDelTodo={onTodoDel}
        onEditTodo={onTodoEdit}
      />
    </>
  );
};

export default React.memo(App);
