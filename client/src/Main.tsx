import { useEffect } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import ThemeBtn from "./components/UI/ThemeBtn";

import useAxios from "./hooks/useAxios";
import "./Main.css";

const Main = () => {
  //FC > FunctionComponent
  //JSX를 return
  const { data, loading, todoEdit, get, add, del, edit } = useAxios();

  useEffect(() => {
    get("/api/todo/get");
  }, [get]);

  return (
    <>
      <ThemeBtn />
      <NewTodo add={add} />
      <TodoList
        loading={loading}
        todo={data}
        todoEdit={todoEdit}
        del={del}
        edit={edit}
      />
    </>
  );
};

export default Main;
