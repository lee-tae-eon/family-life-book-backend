import express, { Express, Request, Response } from "express";

class App {
  public application: Express;

  constructor() {
    this.application = express();
    this.router();
  }

  private router(): void {
    this.application.get("/", (req: Request, res: Response) => {
      res.send("hello!");
    });
  }
}

export default App;
