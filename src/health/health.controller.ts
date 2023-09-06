import { Request, RequestHandler, Response } from "express";

export class HealthController {
  async run(req: Request, res: Response) {
    return res.status(200).send();
  }
}
