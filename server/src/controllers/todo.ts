//RequestHandler에 req,res,next가 순서대로 타입 정의되어 있음
//@type/express를 설치하여 express의 타입을 사용가능
import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(new Date().getTime(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "create success", createTodo: newTodo });
  console.log(TODOS);
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.status(201).json(TODOS);
};

export const updateTodo: RequestHandler<{ id: number }> = (req, res, next) => {
  const todoId = req.params.id; //id의 타입을 정의
  const updateText = (req.body as { text: string }).text;

  if (TODOS.findIndex((todo) => todo.id === todoId) === -1) {
    throw new Error("not found");
  }
};
