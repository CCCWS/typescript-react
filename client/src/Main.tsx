import { useEffect } from "react";
import styled from "styled-components";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import ThemeBtn from "./components/UI/ThemeBtn";

import useAxios from "./hooks/useAxios";
import useTheme from "./hooks/useTheme";
import "./Main.css";

const Main = () => {
  //FC > FunctionComponent
  //JSX를 return
  const { data, loading, todoEdit, get, add, del, edit } = useAxios();
  const { themeMode, onSetTheme } = useTheme();

  useEffect(() => {
    get("/api/todo/get");
  }, [get]);

  return (
    <Div mode={themeMode}>
      <ThemeBtn themeMode={themeMode} onSetTheme={onSetTheme} />
      <NewTodo add={add} themeMode={themeMode} />
      <TodoList
        themeMode={themeMode}
        loading={loading}
        todo={data}
        todoEdit={todoEdit}
        del={del}
        edit={edit}
      />
    </Div>
  );
};

const Div = styled.div<{ mode: string }>`
  width: 70%;
  margin: auto;
  height: 100vh;
  background-color: ${(props) =>
    props.mode === "light" ? "#dadadad4" : "#1d1d1dd5"};
`;

export default Main;
