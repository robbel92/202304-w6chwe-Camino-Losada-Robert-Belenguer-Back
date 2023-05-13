import { type Request, type Response } from "express";
import { Robot } from "../../../database/models/robot.js";

export const getRobots = async (_req: Request, res: Response) => {
  try {
    const myRobots = await Robot.find().exec();
    res.status(200).json(myRobots);
  } catch (error: unknown) {
    res.status(404).json((error as Error).message);
  }
};
