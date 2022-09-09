"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodo = void 0;
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
