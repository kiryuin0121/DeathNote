import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/userRoute";

const app = express();

// グローバルミドルウェアを登録
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
// 各リソースごとのルートハンドラーを登録
app.use("/api/users", userRoute);
// hello world
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello Express.");
});
export default app;
