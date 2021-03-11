import express from "express";
import { PetsRouting } from "./pets";
import { uploadRouting } from "./upload";

const router = express.Router();

uploadRouting(router);
PetsRouting(router);

export default router;
