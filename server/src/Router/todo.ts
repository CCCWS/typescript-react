import { Router } from "express";
import {
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo";

const router = Router();

router.post("/create", createTodo);
//할 일 추가

router.get("/get", getTodo);
//모든 할 일 불러오기

router.patch("/:id", updateTodo);
//할 일 수정, id를 받음

router.delete("/:id", deleteTodo);
// 받은 id에 따라 할 일 삭제

router.post("/test", (req, res) => {
  console.log(req.body);
  return res.status(200).json({ success: true });
});

export default router;
