import express, { Request, Response } from "express";

const app = express();
const PORT = 8000;

const rootHandler = (req: Request, res: Response) => {
  setTimeout(() => res.end("Hello World"), 1000);
};

app.get("/", rootHandler);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
