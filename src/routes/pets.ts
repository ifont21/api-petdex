import express from "express";
import { petController } from "../modules";

export function PetsRouting(router: express.IRouter) {
  router.get("/pets", petController.getAll);
  router.get("/pets/:id", petController.getOne);
  router.put("/pets/:id", petController.updateOne);
}
