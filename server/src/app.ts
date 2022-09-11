import express, { request, response, NextFunction } from "express";
import todoRouter from "./Router/todo";

const port = 3001;
const app = express();

app.use(express.json());
app.use("/api/todo", todoRouter);

//에러 처리, 어떤 미들웨어에 에러가 있다면 자동으로 실행
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(port, () => {
  console.log(`server : ${port}`);
});
