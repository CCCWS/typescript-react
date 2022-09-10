"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(new Date().getTime(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "create success", createTodo: newTodo });
    console.log(TODOS);
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.status(201).json(TODOS);
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id; //id의 타입을 정의
    const updateText = req.body.text;
    if (TODOS.findIndex((todo) => todo.id === todoId) === -1) {
        throw new Error("not found");
    }
};
exports.updateTodo = updateTodo;
