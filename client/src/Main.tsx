import { useEffect, useRef } from "react";
import styled from "styled-components";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import ThemeBtn from "./components/UI/ThemeBtn";

import useAxios from "./hooks/useAxios";
import useTheme from "./hooks/useTheme";
import "./Main.css";

import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";

const Main = () => {
  //FC > FunctionComponent
  //JSX를 return
  const { data, loading, todoEdit, get, add, del, edit } = useAxios();
  const { themeMode, onSetTheme } = useTheme();

  useEffect(() => {
    get("/api/todo/get");
  }, [get]);

  const divRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header>
        <button onClick={scrollToBottom}>test</button>
      </Header>
      <ThemeBtn themeMode={themeMode} onSetTheme={onSetTheme} />
      <Div mode={themeMode}>
        <NewTodo add={add} themeMode={themeMode} />
        <TodoList
          themeMode={themeMode}
          loading={loading}
          todo={data}
          todoEdit={todoEdit}
          del={del}
          edit={edit}
        />
        <Test ref={divRef}>dd</Test>
      </Div>
    </>
  );
};

const Header = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 3rem;
  background-color: beige;
`;

const Div = styled.div<{ mode: string }>`
  width: 70%;
  margin: auto;
  height: calc(300vh - 3rem);
  background-color: ${(props) =>
    props.mode === "light" ? "#dadadad4" : "#1d1d1dd5"};
`;

const Test = styled.div`
  margin-top: 100vh;
  width: 100%;
  height: 50px;
  background-color: red;
`;

export default Main;
