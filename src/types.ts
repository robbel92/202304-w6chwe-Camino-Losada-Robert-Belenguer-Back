import { type Types } from "mongoose";

export interface RobotStructure {
  name: string;
  image: string;
  speed: number;
  strength: number;
  creation_date: string;
}

export interface RobotDocumentStructure extends RobotStructure {
  _id: Types.ObjectId;
}
