import { Router } from "express";
import { getRobots } from "../../../controllers/robots/robotsController.js";

const robotsRouter = Router();

robotsRouter.get("/", getRobots);

export default robotsRouter;
