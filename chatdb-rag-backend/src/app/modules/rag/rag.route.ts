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


export const RagRoute = router;
