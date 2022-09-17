import React, { useEffect, useState } from "react";
import axios from "axios";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import "./Main.css";
import useAxios from "./hooks/useAxios";

interface Todo {
  id: number;
  text: string;
}

const Main = () => {
  //FC > FunctionComponent
  //JSX를 return
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoEdit, setTodoEdit] = useState<boolean>(false);

  const todoAdd = async (text: string) => {
    const res = await axios.post("/api/todo/create", { text: text });
    console.log(res.data);
    onTodoGet();
  };

  const onTodoGet = async () => {
    const res = await axios.get("/api/todo/get");
    setTodoList(res.data);
  };

  const onTodoDel = async (id: number) => {
    const res = await axios.delete(`/api/todo/${id}`);
    console.log(res.data);
    onTodoGet();
  };

  const onTodoEdit = async (id: number, text: string) => {
    if (todoEdit === true) {
      const res = await axios.patch(`/api/todo/${id}`, { text: text });
      console.log(res.data);
      onTodoGet();
    }
    setTodoEdit(!todoEdit);
  };

  useEffect(() => {
    onTodoGet();
  }, []);

  // const todoAdd = (text: string) => {
  //   setTodoList((prevTodoList) => [
  //     ...prevTodoList,
  //     { id: new Date().getTime(), text: text },
  //   ]);
  // };

  // const onTodoDel = (id: number) => {
  //   setTodoList((prevTodoList) =>
  //     prevTodoList.filter((item) => item.id !== id)
  //   );
  // };

  // const onTodoEdit = (id: number, text: string) => {
  //   if (todoEdit === true) {
  //     const temp = [...todoList];

  //     temp.forEach((temp) => {
  //       if (temp.id === id) {
  //         temp.text = text;
  //       }
  //     });

  //     setTodoList(temp);
  //   }
  //   setTodoEdit(!todoEdit);
  // };

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

export default React.memo(Main);
