import express, { Request, Response } from "express";

const app = express();
const PORT = 8000;

const rootHandler = (_: Request, res: Response) => {
  setTimeout(() => res.end("Hello World"), 500);
};

app.get("/", rootHandler);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
