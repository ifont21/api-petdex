import express from "express";
import { uploadController } from "../modules";

export function uploadRouting(router: express.IRouter) {
  router.post("/upload", uploadController.upload);
}
