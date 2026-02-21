import express from "express";

import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { LedgerValidation } from "./rag.validation";
import { RagController } from "./rag.controller";

const router = express.Router();

router.post(
  "/connect-db",
  // auth("user"),
  // validateRequest(LedgerValidation.createLedgerZodSchema),
  RagController.connectDB
);
router.post(
  "/create-project",
  // auth("user"),
  // validateRequest(LedgerValidation.createLedgerZodSchema),
  RagController.createProject
);


export const RagRoute = router;
