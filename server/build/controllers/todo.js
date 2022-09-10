"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [
    { id: 1, text: "TEST" },
    { id: 2, text: "TEST" },
];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_1.Todo(new Date().getTime(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "create success", TODOS });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.status(201).json(TODOS);
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    //req.params로 받은값은 string타입으로 받게됨
    //id가 number이므로 비교를 위해 형변환을 해줌
    const todoId = parseInt(req.params.id);
    const updateText = req.body.text;
    const findTodo = TODOS.findIndex((todo) => todo.id === todoId);
    if (findTodo === -1) {
        throw new Error("not found");
    }
    else {
        TODOS[findTodo] = new todo_1.Todo(todoId, updateText);
        res.json({ message: "edit success", TODOS });
    }
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = parseInt(req.params.id);
    const findTodo = TODOS.findIndex((todo) => todo.id === todoId);
    if (findTodo === -1) {
        throw new Error("not found");
    }
    else {
        // TODOS.filter((todo) => todo.id !== todoId);
        TODOS.splice(findTodo, 1);
        res.json({ message: "delete success", TODOS });
    }
};
exports.deleteTodo = deleteTodo;
