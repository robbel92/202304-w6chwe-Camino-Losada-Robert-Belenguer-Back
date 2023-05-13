import { Types } from "mongoose";
import { type RobotDocumentStructure } from "../types";

const robotsMdMock: RobotDocumentStructure[] = [
  {
    _id: new Types.ObjectId(),
    name: "R2D2",
    image: "https://i.ibb.co/VLSdJJM/R2D2.webp",
    speed: 2,
    strength: 8,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    creation_date: "22-08-1992",
  },
  {
    _id: new Types.ObjectId(),
    name: "Terminator",
    image: "https://i.ibb.co/VLSdJJM/terminator.webp",
    speed: 10,
    strength: 10,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    creation_date: "22-08-2000",
  },
];

export default robotsMdMock;
