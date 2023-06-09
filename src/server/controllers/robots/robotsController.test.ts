import { type NextFunction, type Request, type Response } from "express";
import { getRobots } from "./robotsController.js";
import { Robot } from "../../../database/models/robot.js";
import robotsMdMock from "../../../mocks/robotsMock.js";

type CustomResponse = Pick<Response, "status" | "json">;

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a getRobots controller", () => {
  describe("When it receives a response", () => {
    const req = {};
    const res: CustomResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn().mockReturnThis();
    test("Then it should call the response's method status with 200", async () => {
      const expectedStatusCode = 200;

      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(robotsMdMock),
      });

      await getRobots(req as Request, res as Response, next as NextFunction);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should resolve with the collection of robots", async () => {
      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockResolvedValue(robotsMdMock),
      });

      await getRobots(req as Request, res as Response, next as NextFunction);

      expect(res.json).toHaveBeenCalledWith(robotsMdMock);
    });

    test("Then it should call the the function next", async () => {
      Robot.find = jest.fn().mockReturnValue({
        exec: jest.fn().mockRejectedValue(robotsMdMock),
      });

      await getRobots(req as Request, res as Response, next as NextFunction);

      expect(next).toHaveBeenCalled();
    });
  });
});
