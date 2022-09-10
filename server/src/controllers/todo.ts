//RequestHandler에 req,res,next가 순서대로 타입 정의되어 있음
//@type/express를 설치하여 express의 타입을 사용가능
import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [
  { id: 1, text: "TEST" },
  { id: 2, text: "TEST" },
];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(new Date().getTime(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "create success", TODOS });
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.status(201).json(TODOS);
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  //req.params로 받은값은 string타입으로 받게됨
  //id가 number이므로 비교를 위해 형변환을 해줌
  const todoId = parseInt(req.params.id);
  const updateText = (req.body as { text: string }).text;
  const findTodo = TODOS.findIndex((todo) => todo.id === todoId);

  if (findTodo === -1) {
    throw new Error("not found");
  } else {
    TODOS[findTodo] = new Todo(todoId, updateText);
    res.json({ message: "edit success", TODOS });
  }
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = parseInt(req.params.id);
  const findTodo = TODOS.findIndex((todo) => todo.id === todoId);

  if (findTodo === -1) {
    throw new Error("not found");
  } else {
    // TODOS.filter((todo) => todo.id !== todoId);
    TODOS.splice(findTodo, 1);

    res.json({ message: "delete success", TODOS });
  }
};
