import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";
import { RagService } from "./rag.service";

const connectDB = catchAsync(async (req: Request, res: Response) => {
  const { ...dbData } = req.body;
  const result = await RagService.connectDBService(dbData);
  if (!result) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      "Database not connected. Please try again"
    );
  }

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Database connected successfully",
    data: result,
  });
});

export const RagController = {
  connectDB,
};
