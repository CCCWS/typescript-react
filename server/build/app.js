"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./Router/todo"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/todo", todo_1.default);
//에러 처리, 어떤 미들웨어에 에러가 있다면 자동으로 실행
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000);
