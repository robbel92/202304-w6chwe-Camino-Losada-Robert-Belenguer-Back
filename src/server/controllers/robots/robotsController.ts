import { type Request, type Response } from "express";
import { Robot } from "../../../database/models/robot.js";

export const getRobots = async (_req: Request, res: Response) => {
  try {
    const myRobots = await Robot.find();
    res.status(200).json(myRobots);
  } catch {
    res.status(404).json({ message: "Robots not found" });
  }
};
