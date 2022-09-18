import { useEffect } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import "./Main.css";
import useAxios from "./hooks/useAxios";

const Main = () => {
  //FC > FunctionComponent
  //JSX를 return
  const todos = useAxios();

  console.log(todos);

  useEffect(() => {
    todos.get("/api/todo/get");
  }, []);

  return (
    <>
      <NewTodo add={todos.add} />
      <TodoList
        loading={todos.loading}
        todo={todos.data}
        todoEdit={todos.todoEdit}
        del={todos.del}
        edit={todos.edit}
      />
    </>
  );
};

export default Main;
