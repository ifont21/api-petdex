import mongoose from "../../mongoose";
import express from "express";
import { Pet } from ".";

export async function getAll(req: express.Request, res: express.Response) {
  const pets = await Pet.find();
  return res.send(pets);
}

export async function getOne(req: express.Request, res: express.Response) {
  const id = req.params["id"];

  if (!mongoose.isValidObjectId(id)) {
    res.status(400).send("Invalid id");
  }

  const pet = await Pet.findById(id);

  return res.send(pet);
}

export async function updateOne(req: express.Request, res: express.Response) {
  const id = req.params["id"];
  const payload = req.body;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).send("Invalid id");
  }

  try {
    const response = await Pet.findByIdAndUpdate(id, payload);
    console.log("response", response.toJSON());
    return res.status(200).send({ message: "ok" });
  } catch (error) {
    return res.status(500).send(error);
  }
}
