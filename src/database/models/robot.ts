import { Schema, model } from "mongoose";

export const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  speed: Number,
  strength: Number,
  creation_date: String,
});

export const Robot = model("Robot", robotSchema, "robots");
