"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controllers/todo");
const router = (0, express_1.Router)();
router.post("/create", todo_1.createTodo);
//할 일 추가
router.get("/get", todo_1.getTodo);
//모든 할 일 불러오기
router.patch("/:id", todo_1.updateTodo);
//할 일 수정, id를 받음
router.delete("/:id");
// 받은 id에 따라 할 일 삭제
exports.default = router;
